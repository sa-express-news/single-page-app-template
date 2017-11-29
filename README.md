# SAEN Single-page App Template #

This repository helps you quickly build single-page applications to deploy in the WCM or elsewhere on the web. Develop on your local machine and compile everything down into browser-friendly HTML + CSS + JS files.

## Getting Started ##

Clone this repository into a folder on your computer:

```bash
git clone https://github.com/sa-express-news/single-page-app-template.git my-folder
```

Download and install [Node (and NPM)](https://nodejs.org/en/download/) if you don't already have it.

Enter your new folder on the command line and install all its dependencies:

```bash
cd my-folder
npm install
```

Run the `gulp` command on the command line. In a few seconds you should see page open in your browser. You're now ready to start developing!

## Developing Your App ##

This template is meant to be as light as possible while still making some convenience features available:

- Live browser reloading on file change with [Browsersync](https://www.browsersync.io/)
- [SCSS](http://sass-lang.com/) and [TypeScript](https://www.typescriptlang.org/) support for those so inclined

Files in the `src/` directory are transformed and compiled for the browser into the `dist/` directory, where they can be deployed to the WCM, via AWS or through other means.

Let's see how that process works. Open up `src/index.html` and add a paragraph at the top of the `<body>` block:

```html
<body>
    <p>Test</p>
    <p id="greeting">Loading ...</p>
    <script src="js/bundle.js"></script>
</body>
```

Save the file. You should see some activity on your command line. Head back to the browser and you'll notice your test paragraph at the top of the page. 

As long as the `gulp` command is running on the command line, changes to `.html`, `.scss` and `.ts` files in the `src` folder will trigger it to recompile those files into the `dist` folder.

When Browsersync sees files in the `dist` folder change, it reloads the development page so you don't have to.

You'll notice that `<p>` tag containing the phrase "Loading ..." didn't appear on the page. That's because our JavaScript overrwrote it. Let's explore how to change that, too.

Open up `src/js/index.ts`. Despite the weird file extension, this is plain JavaScript. That's because TypeScript is basically just some extra stuff over JS - it's totally optional. You can write pure JS in this template - just be sure to still save it as a `.ts` file.

Change the last line of the file to use your name in the function call:

```typescript
showHello("greeting", "Kia Farhang");
```

Once again, Gulp will recompile your work and refresh the page. You should see your name in the browser.

We won't belabor how to edit the stylesheet at `src/css/style.scss` other than to say it's just like TypeScript - if you'd rather write plain CSS, you're welcome to. Just be sure to save it with a `.scss` extension.