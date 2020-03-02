const common = {
    templatePath: "",
    serverSidePath: ""
  },
  publicPath =
    process.env.NODE_ENV === "production" ? common.serverSidePath : "./",
  staticPath =
    process.env.NODE_ENV === "production" ? common.serverSidePath : "/";

module.exports = {
  publicPath,
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    // proxy: {
    //   "/admin": {
    //     target: "http://192.168.1.205:8090/admin",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/admin": ""
    //     }
    //   }
    // }
  }
};
