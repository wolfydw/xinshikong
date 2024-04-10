// 官方教程  https://vitepress.dev/zh/reference/site-config
// https://vitepress.dev/reference/default-theme-config

import { defineConfig } from 'vitepress'
import sidebarConfig from '../sidebar.json'

export default defineConfig({

  title: "新时空教师学习平台",
  description: "",
  base: '/',
  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
//      { text: '主页', link: '/' },
      { text: '主页', link: '/' }
    ],

    lastUpdated: true, 

    editLink: {
      pattern: 'https://github.com/wolfydw/xinshikong/edit/main/docs/:path',
      text: '在 GitHub 上编辑'
    },

    outline: 'deep',
    outlineTitle: '目录',

    search: {provider: 'local'}, // 全局搜索

    sidebar: sidebarConfig, // 使用自动生成的侧边栏配置

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2000-2024 新时空教育'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
