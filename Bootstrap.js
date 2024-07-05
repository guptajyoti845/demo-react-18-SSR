require('ignore-styles');
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {
                runtime: "automatic"
            }
        ],
    ],
    plugins: [
        "@babel/transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        "babel-plugin-dynamic-import-node"
    ]
});

require("./Server.js");