# index-html-webpack-example

Example project showing how to using webpack to bundle a vanilla `index.html` webpage.

## The Problem

Webpack is build for preprocessing, transpiling, and bundling projects into a single javascript file to be included into a webpage, but what if you have a basic client application using built in services? How can webpack be used to build a single javascript bundle along side the `index.html` file that imports it for a deployment?

## Findings

Using `babel-loader` and `wc-loader`, the whole `index.html`, javascript includes, and html imports can be built into a single javascript file. The file will inject the index `<head>` and `<body>` content at run time once the script runs.

Including this script into a complete empty html file asside from the `html`, `head`, and `body` tags ([literally that's all](dist/index-bundle.html)) will run the page as it was before being bundled.

TODO: It seems the `wc-loader` may not be the best solution for this. In another project it seemed that some styles were lost and some javascript was not getting added into the page properly (THREE.js, fore example)

## Total Solution
TODO: Figure out how to output multiple root files and auto-generate the referenced `index-bundle.html` file with either inlined or `src`-referenced script tag

### html-webpack-plugin Problems

The [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) _nearly_ works, but has a few limitations for this use case.

##### Title Tag Enforcement
`html-webpack-plugin` enforces a default title if one is not present, which means that even if your javascript bundle appends one to the header tag it won't be respected because the plugin appends its own with "Webpack App"

##### Multiple App Files
The `html-webpack-plugin` does not seem to support building multi-page applications with this use case. If there are multiple source files built with the config, then they will all be included in the single output html file. However, if you are building an app with multiple pages (an `index.html`, `about.html`, and `app.html` pages, for example, then they should all be able to be taken in as entry files and optionally get their own html pages output.
