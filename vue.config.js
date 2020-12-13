const path = require('path');//引入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: process.env.VUE_APP_FLAG,
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('pages', resolve('./src/pages'))
            .set('assets', resolve('./src/assets'))
            .set('utils', resolve('./src/utils'));
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: './src/assets/scss/index.scss',
                })
                .end()
        })
    },
    runtimeCompiler: true,
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 80,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://www.imooc.com/api/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({  // Also generate a test.html
                filename: 'index.html',
                template: './public/index.html',
                title: process.env.NODE_ENV === 'production'
                    ? '生产环境标题'
                    : '准生产环境标题',
                iconUrl: ""
            }),
        ]
    },

}
