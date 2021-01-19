const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:'production',
    entry:{
        index:'./lib/index.tsx'
    },
    // 输出
    output:{
        path: path.resolve(__dirname, 'dist/lib'),
        library:'react',
        libraryTarget:'umd',
    
      
    },
    // 输入tsx 
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'GUU',
            template:'index.html'
        })
    ]
}