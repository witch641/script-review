npm run serve
npm run build

#GitHub Pages 通常使用 gh-pages 分支作为托管分支
npm install -g gh-pages
npm run build
npx gh-pages -d dist

#在 Source（来源） 下拉菜单中选择 gh-pages 分支并保存

#检查 Vue 项目路径
Vue 项目在 GitHub Pages 上可能需要配置正确的 publicPath，否则可能无法正确加载资源文件

打开 vue.config.js 文件（如果没有就创建一个）
#添加以下内容：

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/script-review/' : '/'
}
#重新运行 npm run build 并重新部署
