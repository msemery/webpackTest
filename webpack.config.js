const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: 'production',
   
    entry: {
        indexJs: './src/index.js',
        another: './src/another-module.js',
    },
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
        optimization: {
         splitChunks: {
           chunks: 'all',
         },
       },  
    module: {
    rules: [
        // ... other rules
        {
        test: '/\.vue$/',
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
    ]
    },
    plugins: [
    // make sure to include the plugin!
    // new VueLoaderPlugin()
    ],
    devServer: {
            contentBase: './dist',
        },
    resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
    }
};