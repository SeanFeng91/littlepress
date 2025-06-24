# LittlePress读书会

共同建造一个精神角落 - 在虚拟社会主导的时代，创造真实深度的交流空间。

## 项目简介

我们致力于组织高质量的线下读书交流活动，每月一次，深度探讨人生重要议题。

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- Markdown - 内容编写

## 项目结构

```
docs/
├── .vitepress/
│   └── config.js          # VitePress 配置文件
├── activities/
│   ├── index.md           # 活动介绍页面
│   └── episode-01.md      # 第一期活动详情
├── public/                # 静态资源文件
└── index.md              # 首页
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看网站。

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 内容管理

### 添加新活动

1. 在 `docs/activities/` 目录下创建新的 markdown 文件
2. 更新 `docs/.vitepress/config.js` 中的导航和侧边栏配置
3. 在首页或活动介绍页面添加相应链接

### 文档编写规范

- 使用中文撰写内容
- 遵循 Markdown 格式规范
- 为活动页面添加适当的 frontmatter
- 使用 emoji 增强可读性

## 部署

该项目可以部署到任何支持静态网站的平台：

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [阿里云 OSS](https://www.aliyun.com/product/oss)

## 贡献

欢迎LittlePress读书会网站贡献内容和改进建议！

## 联系我们

- 邮箱：[your-email@example.com]
- 微信：[your-wechat]

---

*让我们一起，在思想的海域中启航！* 