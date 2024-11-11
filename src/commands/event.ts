import { Command } from "@cliffy/command";
import { Table } from "@cliffy/table";
import { callApi, printJson } from "../common/lib.ts";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;

export const eventCmd = new Command()
  .name("event")
  .description("Manage events.")
  .action(() => {
    eventCmd.showHelp();
  });

eventCmd
  .command("list")
  .description("List events.")
  .option("--limit <limit:number>", "Limit", {
    default: 20,
  })
  .option("--json", "Output as JSON")
  .action(async (options) => {
    const resp = await callApi(`/events?limit=${options.limit}`);
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

    const rows = data.map((event: any) => {
      return [event.type, event.message];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Type"), info("Message")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });