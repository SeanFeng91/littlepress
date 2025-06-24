import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "littlepress",
  description: "littlepress读书会官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页 / Home', link: '/' },
      { text: '活动邀请 / Invitation', link: '/invitation/invitation.md' },
      { text: '活动总结 / Summary', link: '/summary/summary.md' },
      { text: '关于项目 / About', link: '/introduce.md' }
    ],
    outline: {
      level: [1, 6], // 显示 h2 到 h4 的标题
      label: '本页目录'
    },
    sidebar: {
    '/invitation/': [
      {
        text: '活动邀请',
        items: [
          { text: '第一期', link: '/invitation/episode-01.md' },
          { text: '第二期', link: '/invitation/episode-02.md' }
        ]
      },
    ],
    '/summary/': [
      {
        text: '活动总结',
        items: [
          { text: '第一期', link: '/summary/episode-01.md' },
          { text: '第二期', link: '/summary/episode-02.md' }
        ]
      },
    ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
