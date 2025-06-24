import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "littlepress",
  description: "littlepress读书会官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页 / Home', link: '/' },
      { text: '活动邀请 / Invitation', link: '/invitation/episode-01.md' },
      { text: '活动总结 / Summary', link: '/last-episode.md' },
      { text: '关于项目 / About', link: '/introduce.md' }
    ],

    sidebar: [
      {
        text: '活动邀请',
        items: [
          { text: '活动邀请', link: '/invitation/episode-01.md' },
          { text: '活动总结', link: '/last-episode.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
