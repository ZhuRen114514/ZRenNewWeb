import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ZRenNewWeb/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "ZRenTech",
  description: "欢迎你的到来",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {text:"首页", link:"/"},
      { text: '旧版主页', items: [
        {text: "主人科技辅助售卖页", link: "https://www.zren.top/main/index.html"},
        {text: "主人科技原版主页", link: "https://www.zren.top"}
      ]},
      { text: '使用教程', items: [
        {text: "示例", link: "/markdown-examples.md"},
        {text: "API 示例", link: "/api-examples"}
      ]}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhuRen114514' }
    ],

    footer: {
      copyright: "© 2024 ZRenTech 主人科技"
    }
  }
})





