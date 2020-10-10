# grapesjs-accordion

<!-- [START badges] -->

<p align="center">
  <a href="https://www.npmjs.com/package/grapesjs-accordion"><img src="https://img.shields.io/npm/v/grapesjs-accordion.svg" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/grapesjs-accordion"><img src="https://img.shields.io/npm/dw/grapesjs-accordion.svg" alt="NPM downloads" /></a>
  <a href="https://travis-ci.com/github/Anubhavjain786/grapesjs-accordion"><img src="https://api.travis-ci.com/Anubhavjain786/grapesjs-accordion.svg?branch=master&status=passed" alt="Travis build" /></a>
  <a href="https://discord.gg/s2jebu"><img src="https://img.shields.io/badge/chat-discord-7289da.svg" alt="Chat Discord" /></a>
  <a href="https://github.com/Anubhavjain786/grapesjs-accordion/issues"><img src="https://img.shields.io/github/issues/Anubhavjain786/grapesjs-accordion.svg" alt="GitHub issues" /></a>
  <a href="https://david-dm.org/Anubhavjain786/grapesjs-accordion"><img src="https://img.shields.io/david/Anubhavjain786/grapesjs-accordion.svg" alt="dependencies status"></a>
  <a href="https://david-dm.org/Anubhavjain786/grapesjs-accordion?type=dev"><img src="https://david-dm.org/Anubhavjain786/grapesjs-accordion/dev-status.svg" alt="devDependencies status" /></a>
</p>

<!-- [END badges] -->

[DEMO](http://grapesjs.com/demo.html)

<!-- > **Provide a live demo of your plugin**
> For a better user engagement create a simple live demo by using services like [JSFiddle](https://jsfiddle.net) [CodeSandbox](https://codesandbox.io) [CodePen](https://codepen.io) and link it here in your README (attaching a screenshot/gif will also be a plus).
> To help you in this process here below you will find the necessary HTML/CSS/JS, so it just a matter of copy-pasting on some of those services. After that delete this part and update the link above -->

### Requirements

```
- GrapesJS v0.13.8 or higher
```

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-accordion"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["grapesjs-accordion"],
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `grapesjs-accordion`
- Components
  - `accordions` - Main accordions component
  - `accordion-container` - Component which contains a single accordion
  - `accordion` - Single accordion component
  - `accordion-content` - Accordion's content
- Blocks
  - `accordions`

## Options

| Option                     | Description                                                                                                                                     | Default                                |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `accordionsBlock`          | Object to extend the default accordions block, eg. `{ label: 'Accordions', attributes: { ... } }`. Pass a falsy value to avoid adding the block | `{}`                                   |
| `accordionsProps`          | Object to extend the default accordions properties, eg. `{ name: 'My Accordions', droppable: false, ... }`                                      | `{}`                                   |
| `accordionProps`           | Object to extend the default accordion properties                                                                                               | `{}`                                   |
| `accordionContentProps`    | Object to extend the default accordion content properties                                                                                       | `{}`                                   |
| `accordionContainerProps`  | Object to extend the default accordion container properties                                                                                     | `{}`                                   |
| `attrAccordions`           | Accordions attribute identifier (main component)                                                                                                | `data-accordions`                      |
| `attrAccordion`            | Accordion attribute identifier                                                                                                                  | `data-accordion`                       |
| `attrAccordionContent`     | Accordion content attribute identifier                                                                                                          | `data-accordion-content`               |
| `attrAccordionContainer`   | Accordion container attribute identifier                                                                                                        | `data-accordion-container`             |
| `classAccordion`           | Default class to use on accordion                                                                                                               | `accordion`                            |
| `classAccordionActive`     | Class used on accordions when active                                                                                                            | `accordion-active`                     |
| `classAccordionContent`    | Default class to use on accordion content                                                                                                       | `accordion-content`                    |
| `classAccordionContainer`  | Default class to use on accordion container                                                                                                     | `accordion-container`                  |
| `selectorAccordion`        | The attribute used inside accordions as a selector for accordion contents                                                                       | `href`                                 |
| `template`                 | Default accordions template                                                                                                                     | `<nav ....` (check the source)         |
| `templateAccordionContent` | Default template for new added accordion contents                                                                                               | `<div>New Accordion Content</div>`     |
| `style`                    | Default style for accordions                                                                                                                    | `.accordion { ....` (check the source) |

## Download

- CDN
  - `https://unpkg.com/grapesjs-accordion`
- NPM
  - `npm i grapesjs-accordion`
- GIT
  - `git clone https://github.com/anubhavjain786/grapesjs-accordion.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-accordion.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["grapesjs-accordion"],
    pluginsOpts: {
      "grapesjs-accordion": {
        /* options */
      },
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-accordion';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/anubhavjain786/grapesjs-accordion.git
$ cd grapesjs-accordion
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
