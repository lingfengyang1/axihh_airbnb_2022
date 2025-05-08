const path = require("path")
const CracoLessPlugin = require("craco-less")

// 对路径拼接操作进行封装 _dirname表示的是当前文件所处于的路径
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "green" },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    webpack: {
        alias: {
            // 配置别名时 要求值为绝对路径 因此需要引用path模块中的resolve对路径进行拼接
            "@": resolve("src"),
            "components": resolve("src/components")
        }
    }
}