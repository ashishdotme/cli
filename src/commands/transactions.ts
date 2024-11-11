import { Command } from "@cliffy/command";
import { Table } from "@cliffy/table";
import { callApi, callJobsApi, printJson } from "../common/lib.ts";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;

export interface Transaction {
    category: string,
    merchant:string,
    amount: number
}

export const transactionCmd = new Command()
  .name("transaction")
  .description("Manage transactions.")
  .action(async(options) => {
    const resp = await callApi(`/transactions/total`);
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }

    const data = await resp.json();
    if (!data) {
      console.log(error("[ERROR]"), "invalid response");
      Deno.exit(1);
    }

    console.log(error(`Total - ${data.total}`));
    const rows = data.categories.map((transaction: Transaction) => {
      return [transaction.category, transaction.amount];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Category"), info("Amount")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });

transactionCmd
  .command("list")
  .description("List transactions.")
  .option("--limit <limit:number>", "Limit", {
    default: 20,
  })
  .option("--json", "Output as JSON")
  .action(async (options) => {
    const resp = await callApi(`/transactions?limit=${options.limit}`);
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }

    const data = await resp.json();
    if (!data) {
      console.log(error("[ERROR]"), "invalid response");
      Deno.exit(1);
    }

    if (options.json) {
      printJson(data);
      Deno.exit(0);
    }

    const rows = data.map((transaction: Transaction) => {
      return [transaction.amount, transaction.merchant];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Amount"), info("Merchant")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });

  transactionCmd
  .command("add")
  .option("--json", "Output as JSON")
  .arguments("<transaction:string>")
  .description("add transaction.")
  .action(async (options, transaction) => {
    let resp = await callJobsApi("/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transaction
      }),
    });

    if (!resp.ok) {
      console.log("[ERROR]", await resp.text());
      Deno.exit(1);
    }

    const newTransaction = await resp.json();
    console.log(`Created ${newTransaction.title}`);

    resp = await callApi(`/transactions?limit=10`);
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }

    const data = await resp.json();
    if (!data) {
      console.log(error("[ERROR]"), "invalid response");
      Deno.exit(1);
    }

    const rows = data.map((transaction: any) => {
        return [transaction.amount, transaction.merchant];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Amount"), info("Merchant")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });
