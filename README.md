# 太微工作室门户网站

基于 **Next.js 14 (App Router) + Tailwind CSS** 的工作室门户网站，部署在 Vercel 上，通过 Cloudflare DNS 加速。

## 技术栈

| 层级 | 选择 | 说明 |
|------|------|------|
| DNS | Cloudflare | 加速 + 隐藏真实 IP + 免费 SSL |
| 托管 | Vercel | 一键部署、全球 CDN、自动 HTTPS |
| 框架 | Next.js 14 | App Router、SSG 静态生成 |
| 样式 | Tailwind CSS | 响应式、设计系统 |
| 图标 | Lucide React | 轻量、风格统一 |
| 邮件 | Resend | 联系表单邮件发送 |

## 本地开发

```bash
# 安装依赖
npm install

# 复制环境变量
cp .env.example .env.local
# 编辑 .env.local 填写 RESEND_API_KEY 和 CONTACT_EMAIL

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 自定义内容

所有需要自定义的内容都标记了 `TODO` 注释，可全局搜索 `TODO` 快速定位：

| 文件 | 可自定义内容 |
|------|-------------|
| `src/app/layout.tsx` | SEO 标题、描述、关键词 |
| `src/components/Navbar.tsx` | Logo / 品牌名 |
| `src/components/Services.tsx` | 服务卡片（数量、内容） |
| `src/components/Cases.tsx` | 案例（内容、截图、标签） |
| `src/components/Industries.tsx` | 覆盖行业列表 |
| `src/components/Team.tsx` | 团队成员（姓名、头像、介绍） |
| `src/components/About.tsx` | 关于我们文案、统计数据 |
| `src/components/Contact.tsx` | 联系方式（邮箱、电话、地址） |

## 部署指南

### 第一步：推送代码到 GitHub

```bash
git add .
git commit -m "init: 太微工作室门户网站"
git remote add origin https://github.com/你的用户名/tavis-studio.git
git push -u origin main
```

### 第二步：Vercel 部署

1. 访问 [vercel.com](https://vercel.com)，用 GitHub 账号登录
2. 点击 **"Add New Project"** → 导入你的 GitHub 仓库
3. Framework Preset 保持 **Next.js**，直接点 **Deploy**
4. 部署成功后进入项目 **Settings → Environment Variables**，添加：
   - `RESEND_API_KEY` = `你的 Resend API Key`
   - `CONTACT_EMAIL` = `你的接收邮箱`
5. 重新部署一次让环境变量生效（Settings → Deployments → 最新部署 → Redeploy）

### 第三步：配置 Resend 邮件服务

1. 访问 [resend.com](https://resend.com)，注册账号
2. 进入 **API Keys** → **Create API Key**，复制 Key 填到 Vercel 环境变量
3. （可选）进入 **Domains** → 添加 `tavis.cn` 域名验证，验证通过后可用 `noreply@tavis.cn` 作为发件地址

### 第四步：Cloudflare DNS 配置

1. 注册 [Cloudflare](https://cloudflare.com)，添加 `tavis.cn` 域名
2. 到你的域名注册商处，将 NS 记录改为 Cloudflare 提供的 NS 服务器
3. 在 Cloudflare DNS 设置中添加记录：

   | 类型 | 名称 | 内容 | 代理状态 |
   |------|------|------|---------|
   | CNAME | `@` | `cname.vercel-dns.com` | DNS only (灰色云朵) |
   | CNAME | `www` | `cname.vercel-dns.com` | DNS only (灰色云朵) |

   > **注意**：Vercel 要求初始验证时关闭 Cloudflare 代理（灰色云朵），验证通过后可改为橙色云朵开启代理加速。

4. 在 Vercel 项目 **Settings → Domains** 中添加 `tavis.cn` 和 `www.tavis.cn`
5. 等待 DNS 生效（通常 5-30 分钟），Vercel 会自动颁发 SSL 证书

### 第五步：验证

- 访问 `https://tavis.cn` 确认网站正常
- 测试联系表单，确认邮件能正常接收
- 用手机访问确认响应式布局正常

## 项目结构

```
src/
├── app/
│   ├── api/contact/route.ts   # 联系表单 API
│   ├── globals.css            # 全局样式
│   ├── layout.tsx             # 根布局 + SEO
│   └── page.tsx               # 首页
└── components/
    ├── Navbar.tsx              # 导航栏
    ├── Hero.tsx                # 首屏
    ├── Services.tsx            # 服务能力
    ├── Cases.tsx               # 精选案例
    ├── Industries.tsx          # 覆盖行业
    ├── Team.tsx                # 团队成员
    ├── About.tsx               # 关于我们
    ├── CTA.tsx                 # 行动号召
    ├── Contact.tsx             # 联系表单
    └── Footer.tsx              # 页脚
```
