# index-html-webpack-example

Example project showing how to use webpack to bundle a vanilla `index.html` webpage.

## The Problem

Webpack is built for preprocessing, transpiling, scoping, and bundling projects into a single javascript file to be included in a webpage, but what if you have a basic client application using only native functionality? How can webpack be used to build a single javascript bundle along side the `index.html` file that imports it for a deployment?

## The Solution

The [webpack config file](webpack.config.js) used here will process a full application's index.html file into a [.js file](dist/index.bundle.js) and an [.html file](dist/index.bundle.html) that imports it using `babel-loader`, `script-loader`, and `wc-loader`. The build will inject the index `<head>` and `<body>` content at run time once the script runs.

## Demo
The config can convert a basic [index.html](index.html) file into a fully bundled page consisting of [two files](https://gkjohnson.github.io/index-html-webpack-example/dist/index.bundle.html).

Console logs show that the different elements and scripts are made available at the expected times.

#### Building and Running

From the `/example` folder, run `npm run build` to build out the `/dist/index.bundle.js` and `/dist/index.bundle.html` files from the original `index.html`.

Once built, run `npm run serve` to run a stati server and load the page at `localhost:9080/example/dist/`!

## What's Left
##### Aggresive <title> Tags
The `html-webpack-plugin` will _always_ generate a title tag with its default template even it one isn't specified or declared as `null`. This prevents any injected title tags from being respected meaning that you have to go in and modify the webpack config if you ever want to change the title tag. I've submitted a PR [here](https://github.com/jantimon/html-webpack-plugin/pull/766) to support this use case.

##### Multiple App Files
The `html-webpack-plugin` does not seem to support building multi-page applications with this use case. If there are multiple source files built with the config, then they will all be included in the single output html file. However, if you are building an app with multiple pages (an `index.html`, `about.html`, and `app.html` pages, for example, then they should all be able to be taken in as entry files and optionally get their own html pages output.
