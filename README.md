# Sinan 司南 文档

一个使用 VitePress 构建的现代化书签管理系统文档站点。

## 关于 Sinan 司南

Sinan 司南是一整套书签管理系统，旨在帮助用户更高效地管理和使用他们的书签。它提供了丰富的功能，包括书签的收藏、分类、标签管理和分享等，满足用户多样化的需求。

### 主要特性

- 🔖 **书签管理** - 提供完整的书签收藏、分类、标签管理和分享功能
- 🔍 **快速搜索** - 通过关键词快速找到相关书签
- 🔄 **跨平台同步** - 将书签同步至多个浏览器，只需收藏一次
- 📤 **快速分享** - 轻松分享书签给朋友或团队成员
- ⚡ **轻量级设计** - 追求极致的轻量级设计，快速上手
- 🔌 **多种插件** - 支持多种浏览器插件，扩展功能

## 技术栈

- **文档生成**: VitePress 1.6.4+
- **构建工具**: Node.js + NPM

## 快速开始

### 前置要求

- Node.js (推荐 16+ 版本)
- NPM 或 Yarn

### 安装依赖

```bash
npm install
```

### 本地开发

启动开发服务器：

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看文档。

### 构建生产版本

```bash
npm run docs:build
```

构建文件将输出到 `docs/.vitepress/dist/` 目录。

### 预览构建结果

```bash
npm run docs:preview
```

## 文档结构

```
docs/
├── index.md                 # 首页
├── guide/                   # 用户指南
│   ├── what-is-sinan.md    # Sinan 介绍
│   ├── getting-started.md   # 快速开始
│   ├── bookmark-management.md  # 书签管理
│   ├── space-management.md  # 空间管理
│   ├── tag-management.md    # 标签管理
│   ├── dashboard.md         # 仪表板
│   ├── floating-bookmarks.md   # 浮动书签
│   ├── account-settings.md  # 账户设置
│   ├── deployment.md        # 部署指南
│   └── ...
├── extension/               # 浏览器扩展
│   ├── chrome-extension.md  # Chrome 扩展
│   ├── edge-extension.md    # Edge 扩展
│   ├── alfred-extension.md  # Alfred 扩展
│   └── ...
├── api-examples.md          # API 示例
└── static/                  # 静态资源
```

## 贡献指南

1. Fork 此仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

本项目采用开源许可证，详见 [开源许可证](/guide/open-source-license) 页面。

## 相关链接

- [项目主页](https://github.com)
- [问题反馈](https://github.com/issues)
- [隐私政策](/guide/privacy-policy)
- [服务条款](/guide/terms-of-service)
