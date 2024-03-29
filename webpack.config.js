
const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx','d.ts'],
    },
  
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true // 只做语言转换，而不做类型检查
                  }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                       
                            esModule: false
                        }
                    }
                   
                ]
               
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader : 'file-loader',
                        options: {
                            // name: './[name].[ext]',
                            esModule: false
                        }
                    }
                   
                ]

            }
        ]
    },
    devtool: "inline-source-map"
}