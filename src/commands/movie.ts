import { Command } from "@cliffy/command";
import { Table } from "@cliffy/table";
import { callApi, callJobsApi, printJson } from "../common/lib.ts";
import { format } from "jsr:/@std/datetime@0.224.0/format";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;


export interface Movie {
  id: number;
  title: string;
  description: string;
  language: string;
  year: number;
  genre: string;
  viewingDate: string;
  loved: boolean;
  imdbRating: string;
  imdbId: string;
  createdAt: string;
  updatedAt: string;
}

export const movieCmd = new Command()
  .name("movie")
  .description("Manage movies.")
  .action(() => {
    movieCmd.showHelp();
  });

movieCmd
  .command("list")
  .description("List movies.")
  .option("--limit <limit:number>", "Limit", {
    default: 10,
  })
  .option("--json", "Output as JSON")
  .action(async (options) => {
    const resp = await callApi(`/movies?limit=${options.limit}`);
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

    const rows = data.map((movie: Movie) => {
      return [movie.title, format(new Date(movie.viewingDate), "dd-MM-yyyy")];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Title"), info("Date")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });

movieCmd
  .command("add")
  .option("--json", "Output as JSON")
  .arguments("<title:string> [date:string]")
  .description("add movie.")
  .action(async (options, title, date) => {
    let resp = await callJobsApi("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
      }),
    });

    if (!resp.ok) {
      console.log("[ERROR]", await resp.text());
      Deno.exit(1);
    }

    const movie = await resp.json();
    console.log(`Created ${movie.title}`);

    resp = await callApi(`/movies?limit=10`);
    if (!resp.ok) {
      console.error(await resp.text());
      Deno.exit(1);
    }

    const data = await resp.json();
    if (!data) {
      console.log(error("[ERROR]"), "invalid response");
      Deno.exit(1);
    }

    const rows = data.map((movie: Movie) => {
      return [movie.title, format(new Date(movie.viewingDate), "dd-MM-yyyy")];
    }) as string[][];

    if (Deno.stdout.isTerminal()) {
      const table = new Table(...rows).header([info("Name"), info("Date")]);
      table.render();
    } else {
      console.log(rows.map((row) => row.join("\t")).join("\n"));
    }
  });
