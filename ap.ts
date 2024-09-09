#!/usr/bin/env -S deno run -A
import { Command } from "@cliffy/command";
import { CompletionsCommand } from "@cliffy/command/completions";
import { UpgradeCommand } from "@cliffy/command/upgrade";
import { JsrProvider } from "@cliffy/command/upgrade/provider/jsr";
import manifest from "./deno.json" with { type: "json" };
import { movieCmd } from "./movie.ts";
import { eventCmd } from "./event.ts";
import { transactionCmd } from "./transactions.ts";

const rootCmd = new Command().name("ap").version(manifest.version).action(
  () => {
    rootCmd.showHelp();
    console.log("Ashish Patel")
  },
);

rootCmd.command("movie", movieCmd);

rootCmd.command("event", eventCmd);

rootCmd.command("transaction", transactionCmd);

rootCmd.command("completions", new CompletionsCommand());

rootCmd.command(
  "upgrade",
  new UpgradeCommand({
    args: ["--allow-all"],
    provider: new JsrProvider({
      package: "@ashishdotme/ap",
    }),
  }),
);

await rootCmd.parse();
