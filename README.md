<p align="center">
  <img alt="Games by Tim" src="static/logo.svg" width="300" />
</p>

<p align="center">
  <a href="https://www.gamesbytim.com"><strong>gamesbytim.com</strong></a>
</p>

***

Here you'll find the source code for the Games by Tim website. The website is built with [GatsbyJS](https://www.gatsbyjs.org) and uses [Forestry](https://forestry.io) to edit the page contents.

## What's inside?
To better understand how the site works, here's an overview of the top-level folders and files.

1.  **`/.forestry`**: Contains settings data for the Forestry CMS. For instance, how exactly should blog posts and project pages be formatted?
2.  **`/content`**: Contains the blog posts, images, and project descriptions Games by Tim. Without this, the site would have nothing to display. Posts are written in Markdown, which GatsbyJS compiles to HTML.
3.  **`/plugins`**: GatsbyJS features plugins you can use the enhance the site. Custom plugins not available on the GatsbyJS website go in this folder.
4.  **`/src`**: The "skeleton" of the site. Contains the source code for the site's structure and how to fit in content in the content folder.
5.  **`/static`**: Contains files that'll appear directly without GatsbyJS intervention. For instance, the file `logo.svg` will show up on `gamesbytim.com/logo.svg`. The `_headers` and `_redirects` files tell [Netlify](https://netlify.com), the static web host Games by Tim's hosted on, how to configure the server.
6.  **`.editorconfig`**: If you use VS Code with the `EditorConfig for VS Code` extension, this file will auto-format each source code file.
7.  **`.gitignore`**: Lists which files should not be uploaded to GitHub (ex: development cache, node modules, personal access tokens).
8.  **`.prettierignore`**: GatsbyJS comes with Prettier, a plugin that makes source code look more presentable when run. The file tells which files/directories Prettier will not parse.
9.  **`.prettierrc`**: Contains specific settings for the Prettier plugin. This file is unchanged from the GatsbyJS default.
10.  **`README.md`**: The file you're reading right now.
11.  **`config.json`**: Contains the metadata for Games by Tim. That's right, I generalized the `src` such that I have to set the site name to Games by Tim!
12.  **`gatsby-browser.js`**: Contains CSS rules that every `src` file should be able to access.
13.  **`gatsby-config.js`**: Contains all the GatsbyJS plugins and settings the site should use.
14.  **`gatsby-node.js`**: Tells GatsbyJS how to dynamically generate pages. For instance, if I have 20 blog posts and want 8 blog posts per page, this will tell GatsbyJS to generate 3 blog pages.
15.  **`package-lock.json and package.json`**: Contains the list of npm packages and version numbers the site will use.

## Building the site

To build the site, you'll need [npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm) and [git](https://gist.github.com/derhuerst/1b15ff4652a867391f03) installed on your computer.

1. Clone the games-by-tim repo.
```
git clone https://github.com/TimTree/games-by-tim.git
```

2. Enter the games-by-tim directory and install node modules.
```
cd games-by-tim && npm install
```

3. Start the development server.
```
npm run develop
```

The development server allows you to access the site on `localhost:8000` (or `[your computer's IP address]:8000` to view on other devices). Any changes to the source code will hot-reload the server without needing a refresh.

4. Format the code with Prettier.
```
npm run format
```

5. Build the site for production.
```
npm run build
```

6. Test the production site (appears on `localhost:9000`).
```
npm run serve
```
The production site is the compiled site optimized for max performance. This is what gets deployed to the main site.

## License

Unless otherwise noted, the contents in the following folders and files are licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). (You can of course use the same file structure without CC BY-NC 4.0 as long as you change the inside contents.)

```
/content/
/static/favicon.ico
/static/footer.svg
/static/icon.png
/static/logo.svg
config.json
```

All other folders and files are licensed under the MIT license:

```
MIT License

Copyright (c) 2011-2021 Timothy Hsu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```