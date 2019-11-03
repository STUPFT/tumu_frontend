module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    // 本地代理服务器，用于解决跨域问题
    // devServer: {
    //     port: 8080,
    //     host: "localhost",
    //     https: false,
    //     open: false,
    //     proxy: {
    //         "/api": {
    //             target: "http://127.0.0.1:7001", //设置调用的接口域名和端口
    //             changeOrigin: true, //是否跨域
    //             ws:true,
    //             pathRewrite: {
    //                 "^/api": ""
    //             }
    //         }
    //     }
    // }
}
