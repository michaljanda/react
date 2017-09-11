module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\/stc\/.+\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2017'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
};