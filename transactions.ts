import { Command } from "@cliffy/command";
import { Table } from "@cliffy/table";
import { callApi, printJson } from "./lib.ts";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;

export const transactionCmd = new Command()
  .name("transaction")
  .description("Manage transactions.")
  .action(() => {
    transactionCmd.showHelp();
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