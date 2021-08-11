const webpack = require("webpack");
module.exports={
    /**
     * 部署应用包的URL，用法和webpack本身的output.publicPath一致。
     * 该值可以是空字符串或者相对路径'./'，这样所有的资源都会被链接为相对路径，这样打出来的包可以部署在任职路径。
     */
    publicPath:'/',
    // 把开发服务器架设在根路径，可以使用条件式的值
    // publicPath:process.env.NODE.ENV===‘production’?"production-sub-path":"/" 

    /**
     * 输出文件目录
     * 执行 npm run build 时，文件打包输出的文件目录。
     */
    outputDir:'dist', 

    /**
     * 放置生成静态文件的目录（js,css,img.fonts）
     */
    // assertsDir:'static',

    /**
     * 指定生成的index.html的输出路径
     */
    indexPath:'index.html',

    /**
     * webpack-dev-server选项都支持
     */
    devServer:{
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        // host: '0.0.0.0',
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器
        hotOnly: true, // 热更新
        disableHostCheck: true
    },
    /**
     * vue.config里配置plugin需要使用configureWebpack对象
     */
    configureWebpack:{
        plugins:[
            new webpack.DefinePlugin({
                VUE_APP_BUILD_ENV:''
            })
        ]
    }
    
    
}