import { createEmphasize } from "emphasize";
import json from "highlight.js/lib/languages/json";

export const ashishdotmeToken = Deno.env.get("ASHISHDOTME_TOKEN") || "";
if (!ashishdotmeToken) {
  console.error("ASHISHDOTME_TOKEN is required");
  Deno.exit(1);
}

export async function callApi(
  path: string,
  api?: string,
  options?: RequestInit & {
    paginate?: boolean;
  },
): Promise<Response> {
  const apiURL = api || "https://api.ashish.me";
  const headers = {
    ...options?.headers,
    apiKey: `${ashishdotmeToken}`,
  };
  if (options?.paginate) {
    const data = [];
    let url = new URL(`${apiURL}${path}`);
    url.searchParams.set("limit", "100");

    while (true) {
      const resp = await fetch(url, {
        headers,
      });
      if (!resp.ok) {
        throw new Error(await resp.text());
      }

      const res = await resp.json();
      data.push(...res.data);

      if (!res.links.next) {
        break;
      }

      url = new URL(res.links.next);
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return await fetch(`${apiURL}${path}`, {
    ...options,
    headers,
  });
}

export async function callJobsApi(
  path: string,
  options?: RequestInit & {
    paginate?: boolean;
  },
): Promise<Response> {
  const apiURL = Deno.env.get("ASHISHDOTME_API_URL") || "https://jobsapi.ashish.me";
  const headers = {
    ...options?.headers,
    apiKey: `${ashishdotmeToken}`,
  };
  if (options?.paginate) {
    const data = [];
    let url = new URL(`${apiURL}${path}`);
    url.searchParams.set("limit", "100");

    while (true) {
      const resp = await fetch(url, {
        headers,
      });
      if (!resp.ok) {
        throw new Error(await resp.text());
      }

      const res = await resp.json();
      data.push(...res.data);

      if (!res.links.next) {
        break;
      }

      url = new URL(res.links.next);
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return await fetch(`${apiURL}${path}`, {
    ...options,
    headers,
  });
}

export function printJson(obj: unknown) {
  if (Deno.stdout.isTerminal()) {
    const emphasize = createEmphasize();
    emphasize.register({
      json,
    });
    console.log(
      emphasize.highlight("json", JSON.stringify(obj, null, 2)).value,
    );
  } else {
    console.log(JSON.stringify(obj));
  }
}
