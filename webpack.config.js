const path= require('path'); 

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env)=>{

    const CSSExtract = new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks:true
});
    const isProduction = env === 'production';
    return {    
        mode: 'development',
        entry:'./src/app.js',
        output:{
            path:path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                test:/\.s?css$/,
                use:CSSExtract.extract({
                    fallback: "style-loader",
                    use:[
                        
                         {
                             loader:'css-loader',
                             options:{
                                sourceMap:true
                             }                             
                         },
                         {
                            loader:'sass-loader',
                            options:{
                               sourceMap:true
                            }                             
                        }                         
                    ]
                })
            }]
        },
        plugins:[
           CSSExtract
        ],
        devtool: isProduction ? 'source-map':'inline-source-map' ,
        devServer:{
            contentBase: path.join(__dirname,'public'),
            port: 8081,
            historyApiFallback:true,
            publicPath:'/dist/'
        }
    };
};