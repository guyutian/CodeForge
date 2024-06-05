
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      // page 入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  }
}