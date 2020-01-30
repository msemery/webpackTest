**Installation de webpack**
>npm init -y
>npm install webpack webpack-cli --save-dev

**Création des répertoires et fichiers**
*Création de dossiers et fichiers*

<p>+ |- index.html</p>
<p>+ |- /src</p>
<p>+   |- index.js</p>

*src/index.js*
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

*index.html*
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>

*package.json*
 {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {}
  }

  **Création des paquets**
  *Ajout de dossiers et fichiers*
    |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js

*installation de la librairie en local*
>npm install --save lodash

*Importer lodash dans le script*

*src/index.js*
import _ from 'lodash';
function component() {
    const element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

*dist/index.html*

  <!doctype html>
  <html>
   <head>
     <title>Getting Started</title>
   </head>
   <body>
+    <script src="main.js"></script>
   </body>
  </html>

  *lancer npx webpack*

  >npx webpack

  <p>Ouvrir index.html dans le navigateur, il devrait afficher "hello webpack"</p>

  *Créer un fichier webpack.config.js*

    webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js

<h2>Dans webpack config écrire:</h2>

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

<p>Dans la console écrire</p>

>npx webpack --config webpack.config.js

*Ajouter le script npm dans package.json*

{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
-      "test": "echo \"Error: no test specified\" && exit 1"
+      "test": "echo \"Error: no test specified\" && exit 1",
+      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
  }

  <p>executez la commande:</p>
  >npm run build

  **Utiliser un serveur webpack**

 <p> Faire la commande:</p>
> npm install --save-dev webpack-dev-server

<h2>Modifier la config dans webpack.config.js</h2>

const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
    devtool: 'inline-source-map',
+   devServer: {
+     contentBase: './dist',
+   },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };

<h2>Ajouter dans package.json</h2>

{
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "private": true,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "watch": "webpack --watch",
+     "start": "webpack-dev-server --open",
      "build": "webpack"
    },

<p>Maintenant lancer: </p>

> npm start

**Installer vuejs**
**Installer le vue loader**

<h2>Dans webpack.config.js</h2>
onst VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
     idexJs: './src/index.js',
     vueJs: '.src/vue.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],

  **Installer sass-loader**
  **Installer css-loader et style-loader**