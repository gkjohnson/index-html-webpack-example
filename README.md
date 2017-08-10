# index-html-webpack-example

Example project showing how to using webpack to bundle a vanilla `index.html` webpage.

## The Problem

Webpack is build for preprocessing, transpiling, and bundling projects into a single javascript file to be included into a webpage, but what if you have a basic client application using built in services? How can webpack be used to build a single javascript bundle along side the `index.html` file that imports it for a deployment?

## Findings

Using `babel-loader` and `wc-loader`, the whole `index.html`, javascript includes, and html imports can be built into a single javascript file. The file will inject the index `<head>` and `<body>` content at run time once the script runs.

Including this script into a complete empty html file asside from the `html`, `head`, and `body` tags ([literally that's all](dist/index-bundle.html)) will run the page as it was before being bundled.

## Total Solution
TODO: Figure out how to output multiple root files and auto-generate the referenced `index-bundle.html` file with either inlined or `src`-referenced script tag
