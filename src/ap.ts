#!/usr/bin/env -S deno run -A
import { Command } from "@cliffy/command";
import { CompletionsCommand } from "@cliffy/command/completions";
import { UpgradeCommand } from "@cliffy/command/upgrade";
import { JsrProvider } from "@cliffy/command/upgrade/provider/jsr";
import manifest from "../deno.json" with { type: "json" };
import { movieCmd } from "./commands/movie.ts";
import { eventCmd } from "./commands/event.ts";
import { transactionCmd } from "./commands/transactions.ts";
import { callApi } from "./common/lib.ts";
import { format } from "npm:date-fns";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;

const rootCmd = new Command().name("ap").version(manifest.version).action(
  async () => {
    const resp = await callApi(`/summary.json`, "https://app.ashish.me/api");
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }

    const data = await resp.json();
    if (!data) {
      console.log(error("[ERROR]"), "invalid response");
      Deno.exit(1);
    }

    console.log(
      info(
        `Today - ${
          format(new Date(),"dd MMMM yyyy")
        }`,
      ),
    );

    console.log(
      info(
        `Last leetcode date - ${
          format(new Date(data.lastLeetcode.created),"dd MMMM yyyy")
        }`,
      ),
    );
    console.log(
      info(
        `Last Github Commit Date - ${
          format(new Date(data.github.lastCommit), "dd MMMM yyyy")
        }`,
      ),
    );
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
