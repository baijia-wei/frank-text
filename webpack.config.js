const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:'production',
    entry:{
        index:'./lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.js','.tsx','jsx']
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
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:'GUU',
    //         template:'index.html'
    //     })
    // ],
    
    // externals:{
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',root:'React',
            
    //     },
    //     'react-dom':{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',root:'ReactDom',
    //     }
    // }
}