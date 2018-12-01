module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    name: 'You-need-to-know-css',
    basePath: 'https://lhammer.cn/You-need-to-know-css/',
    repo: 'https://github.com/l-hammer/You-need-to-know-css',
    auto2top: true,
    loadSidebar: true,
    subMaxLevel: 2,
    homepage: 'README.md',
    ga: 'UA-122081516-1',
    search: {
      noData: {
        '/': '找不到结果!'
      },
      paths: 'auto',
      placeholder: {
        '/': '搜索'
      }
    },
  },
}
