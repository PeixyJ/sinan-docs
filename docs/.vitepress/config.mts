import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sinan 司南",
  description: "Sinan 司南是一个基于 Spring Boot 3 开发的现代化书签管理系统后端服务，提供完整的书签收藏、分类、标签管理和分享功能。",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/what-is-sinan' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: 'GitHub', link: '/githubs' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 Sinan 司南?', link: '/guide/what-is-sinan' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '部署', link: '/guide/deployment' },
          { text: '更新日志', link: '/guide/changelog' }
        ]
      },
      {
        text: '使用教程',
        items: [
          { text: '启动台', link: '/guide/dashboard' },
          { text: '游离书签', link: '/guide/floating-bookmarks' },
          { text: '空间管理', link: '/guide/space-management' },
          { text: '标签管理', link: '/guide/tag-management' },
          { text: '书签管理', link: '/guide/bookmark-management' },
          { text: '账户设置', link: '/guide/account-settings' }
        ]
      },
      {
        text: '插件',
        items: [
          { text: 'Chrome插件', link: '/guide/chrome-extension' },
          { text: 'Edge插件', link: '/guide/edge-extension' },
          { text: 'Alfred插件', link: '/guide/alfred-extension' },
        ]
      },
      {
        text: '开发',
        items: [
          { text: 'API 文档', link: '/guide/api-docs' },
          { text: '贡献指南', link: '/guide/contributing' }
        ]
      },
      {
        text: '其他',
        items: [
          {text : '各类浏览器书签导出操作', link: '/guide/bookmark-import-export'},
          { text: '隐私政策', link: '/guide/privacy-policy' },
          { text: '服务条款', link: '/guide/terms-of-service' }
        ]
      },
      {
        text: 'GitHub仓库',
        items: [
          { text: 'sinan-quick-start', link: 'https://github.com/PeixyJ/sinan-quick-start' },
          { text: 'sinan-website', link: 'https://github.com/PeixyJ/sinan-website' },
          { text: 'sinan-server', link: 'https://github.com/PeixyJ/sinan-server' },
          { text: 'sinan-chrome-extension', link: 'https://github.com/PeixyJ/sinan-chrome-extension-v2' },
          { text: 'sinan-alfred-extension', link: 'https://github.com/PeixyJ/sinan-alfred-extension' },
          { text: 'sinan-docs', link: 'https://github.com/PeixyJ/sinan-docs' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
