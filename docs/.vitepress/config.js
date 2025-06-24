import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '启航读书会',
  description: '共同建造一个精神角落',
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '活动', link: '/activities/' },
      { text: '第一期', link: '/activities/episode-01' }
    ],

    sidebar: {
      '/activities/': [
        {
          text: '活动',
          items: [
            { text: '活动介绍', link: '/activities/' },
            { text: '第一期：不工作，我们还能做什么？', link: '/activities/episode-01' }
          ]
        }
      ]
    },

    socialLinks: [
      // 可以在这里添加社交链接
    ],

    footer: {
      message: '启航读书会 - 让我们共同建造一个精神角落',
      copyright: 'Copyright © 2024-present'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}) 