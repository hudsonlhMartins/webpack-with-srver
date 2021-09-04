const path = require('path')

module.exports ={
    //Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
    mode: 'development',
    entry:{
        index: './src/index.js',

        galaxy: './src/galasis.js'
    },
 
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // para colocar o loader
    module: {
        rules: [
            {
                test: /\.js$/,
                // vai pecorrer todos o projeto e procurar todos q terminam com .js
                use: ['babel-loader']
                // e vai usar nesse file .js que achar o babel
            }
        ]
    },
    watch: true,
    devServer:{
        static:{
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
        liveReload: true,
    },
}
