
# Personal Website (waleed.de)

This is the source code of my personal website/blog. Its designed to last for a long time
and build with very minimal tech stack to reduce maintenance effort.

## Tech Stack
Keeping it simple, its just pure HTML/CSS based components and the static pages are generated with [Lume](https://lume.land/) build on [Deno](https://deno.land/).

**Why not fancy like NextJS, Svelte or Vue/Vite ?**

It’s inspired by other general-purpose static site generators, such as Jekyll and Eleventy, but it’s faster, simpler and easier to use and configure, besides being super flexible.

- Lume Supports multiple file formats, like Markdown, YAML, JavaScript, TypeScript, JSX and Nunjucks, and it’s easy to extend.
- You can hook any processor to transform assets, like Terser for Javascript or PostCSS for CSS.
- It’s Deno: Forget about managing thousands of packages in node_modules or complex bundlers. Lume only installs what you need. Clean, fast and secure.

## Deployment
It runs on [CloudFlare Pages](https://pages.cloudflare.com/) by a simple deploy hock to the main branch.
My DNS is hosted on CloudFlare which provides additional optimization and increase availability.   

Its free ! 
## Run Locally


#### 1) Install Deno

```bash
  brew install deno
```

#### 2) Install Lume

```bash
  deno run -A https://deno.land/x/lume/install.ts
```
*Once installed, you will have the lume command.*

#### 3) Clone the project

```bash
  git clone https://github.com/waleedhkhan/waleed.de.git
```

#### 4) Go to the project directory

```bash
  cd waleed.de
```

#### 5) Start a local server

```bash
  lume --serve
```



## Acknowledgement
Design, Layout and minimalistic philosophy behind my website is inspired by these wonder full content creators which I have following over the years.

 - [Manu Moreale](https://manuelmoreale.com)
 - [Frank Chimero](https://frankchimero.com)



## License

MIT License

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