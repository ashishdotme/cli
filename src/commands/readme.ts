import { Command } from "@cliffy/command";
import { colors } from "jsr:/@cliffy/ansi@1.0.0-rc.5/colors";
import { Input } from "https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/mod.ts";

// Define theme colors.
const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.blue;

export const readmeCmd = new Command()
    .name("readme")
    .description("Create readme.")
    .action(async () => {
        const name: string = await Input.prompt(`What's your project name?`);
        await Deno.writeTextFile(
            "readme.md",
            `
<p align="center">
<img src="https://ashishdotme-assets.s3.ap-south-1.amazonaws.com/logo.png" alt="drawing" width="100"/>
</p>

<h2 align="center">${name}</h2>

<p align="center">
<a href="https://img.shields.io/github/last-commit/ashishdotme/${name}?style=for-the-badge"><img src="https://img.shields.io/github/last-commit/ashishdotme/${name}?style=for-the-badge"></a>
</p>

<p align="center">📦 about project </p>

## Support

If you find this project useful, you can buy me a cup of coffee

<a href="https://patreon.com/ashishdotme/" target="_blank">
<img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
</a>

## Licence

${name} is open source and released under the MIT Licence.

## To connect with me

<p align = "center">

[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white&color=black" />](https://twitter.com/ashishdotme)
[<img src="https://img.shields.io/badge/facebook-%2312100E.svg?&style=for-the-badge&logo=facebook&logoColor=white&color=black" />](https://facebook.com/ashishdotme)
[<img src="https://img.shields.io/badge/instagram-%2312100E.svg?&style=for-the-badge&logo=instagram&logoColor=white&color=black" />](https://instagram.com/ashishdotme)
[<img src ="https://img.shields.io/badge/website-%23.svg?&style=for-the-badge&logo=&logoColor=white%22&color=black">](https://ashish.me)

</p>
        
        `,
        );
        console.log("Readme created")
    });