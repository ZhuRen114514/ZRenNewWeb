import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: "/ZRenNewWeb/",
  head: [["link", { rel: "icon", href: "/logo256.ico" }]],
  title: "ZRenTech",
  description: "欢迎您的到来",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {text:"首页", link:"/"},
      { text: '旧版页面', items: [
        
        {text: "旧版主页", link: "https://old.zren.top"},
        {text: "辅助售卖页", link: "https://old.zren.top/main/index.html"},
      ]},
      { text: '使用教程', items: [
        {text: "暂未更新", link: "/"},
        {text: "暂未更新", link: "/"}
      ]},
      {text: "关于主人", link: "/allmdfile/ZRenJS.md"}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhuRen114514' }
    ],

    footer: {
      copyright: "© 2024 ZRenTech 主人科技"
    },

    //翻译部分英文界面
    outlineTitle: '页面目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    backToTopText: '返回顶部'
  }
})





