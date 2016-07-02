# generator-express-typescript-typings [![NPM version][npm-image]][npm-url]
> 

express-typescript-typings generator scaffolds the same project as [express-generator](http://expressjs.com/en/starter/generator.html), but with TypeScript support and optional Visual Studio Code support. 

## Installation

First, install [Yeoman](http://yeoman.io), [typings](https://github.com/typings/typings) and generator-express-typescript-typings using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-express-typescript-typings
npm install -g typings
```

Then generate your new project:

```bash
yo express-typescript-typings
```

During installation, you have the ability to enable or disable Visual Studio Code support. If you choose to enable VSCode support, the following files are added to the project in the .vscode folder:
* tasks.json: To transpile TypeScript to JavaScript
* lauch.json: To support VSCode debugging
* settings.json: To hide JavaScript source files and map files

##Contributing

Feel free to add suggestions and initiate pull request on the [project's GitHub page](https://github.com/conwid/generator-express-typescript-typings).

## License

MIT © [Akos Nagy](https://github.com/conwid)


[npm-image]: https://badge.fury.io/js/generator-express-typescript-typings.svg
[npm-url]: https://npmjs.org/package/generator-express-typescript-typings