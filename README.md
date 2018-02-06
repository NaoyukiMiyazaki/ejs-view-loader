# usage

```webpack.config.js
module: {
    rules: [{
        test: /\.ejs$/,
        use: [
            {
                loader: 'ejs-view-loader',
                options: {
                    watch: `${__dirname}/**/*.ejs`
                }
            }
        ]
    }]
},
plugins: [
    new HtmlWebpackPlugin({
        template: `${__dirname}/index.ejs`,
        filename: `${__dirname}/index.html`,
        inject: false,
    })
]
```

# options

```
options: {
    watch: {glob}
}
```

[glob](https://github.com/isaacs/node-glob#glob-primer)
