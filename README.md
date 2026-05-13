# 太微工作室门户网站

基于 **Next.js 14 (App Router) + Tailwind CSS + Framer Motion** 的工作室门户网站。

## 技术栈

| 层级 | 选择 |
|------|------|
| DNS | Cloudflare（免费） |
| 托管 | Vercel（免费、自动 HTTPS、全球 CDN） |
| 框架 | Next.js 14（App Router、SSG） |
| 样式 | Tailwind CSS |
| 动效 | Framer Motion |
| 图标 | Lucide React |
| 邮件 | Resend（联系表单发送） |

## 本地开发

```bash
npm install
cp .env.example .env.local   # 填写 RESEND_API_KEY 和 CONTACT_EMAIL
npm run dev                   # http://localhost:3000
```

## 页面结构

| 路径 | 内容 |
|------|------|
| `/` | 首页（Hero 轮播 → 关于 → 服务 → 行业 → CTA → 联系表单） |
| `/cases` | 案例详情页（左右交替大卡片，支持真实截图） |
| `/team` | 团队详情页（成员介绍 + 价值观） |

## 导航链接

| 导航项 | 指向 |
|--------|------|
| 服务 | 首页 `/#services` 锚点 |
| 案例 | `/cases` 独立页面 |
| 关于 | `/team` 独立页面 |
| 联系 | 首页 `/#contact` 锚点 |

## 项目结构

```
src/
├── app/
│   ├── api/contact/route.ts    # 联系表单 API（Resend 邮件）
│   ├── cases/page.tsx          # 案例页
│   ├── team/page.tsx           # 团队页
│   ├── globals.css
│   ├── layout.tsx              # 根布局 + SEO + OG 配置
│   └── page.tsx                # 首页
└── components/
    ├── About.tsx               # 关于我们（白底 + 数字统计）
    ├── AnimateOnScroll.tsx      # 通用滚动动画组件
    ├── CasesPage.tsx           # 案例页内容
    ├── Contact.tsx             # 联系表单 + 联系信息
    ├── CountUp.tsx             # 数字滚动计数组件
    ├── CTA.tsx                 # 行动号召（深色区块）
    ├── Footer.tsx              # 页脚
    ├── Hero.tsx                # 首屏（图片轮播 + 文字动画）
    ├── Industries.tsx          # 覆盖行业
    ├── Navbar.tsx              # 导航栏
    ├── Services.tsx            # 服务能力（深色 + 背景图）
    └── TeamPage.tsx            # 团队页内容

public/
├── hero/                       # 首屏轮播图片
├── cases/                      # 案例截图
├── about/                      # 服务区块背景图
└── og-image.png                # 社交分享预览图
```

## 自定义内容

搜索 `TODO` 可快速定位所有待自定义的内容：

| 文件 | 可自定义 |
|------|---------|
| `layout.tsx` | SEO 标题 / 描述 / OG 图片 |
| `Navbar.tsx` | Logo / 品牌名 |
| `Hero.tsx` | 轮播图片、切换速度 |
| `About.tsx` | 主标题、副标题、统计数字 |
| `Services.tsx` | 服务卡片内容 |
| `Industries.tsx` | 覆盖行业列表 |
| `CasesPage.tsx` | 案例内容、截图（放 `public/cases/`） |
| `TeamPage.tsx` | 团队成员、价值观 |
| `Contact.tsx` | 联系方式（邮箱 / 电话 / 地址） |

## 部署

### 1. 推送到 GitHub

```bash
git add . && git commit -m "update" && git push
```

### 2. Vercel 部署

1. [vercel.com](https://vercel.com) 用 GitHub 登录 → Import 仓库 → Deploy
2. Settings → Environment Variables 添加：
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
3. Redeploy 使环境变量生效

### 3. Resend 邮件配置

1. [resend.com](https://resend.com) 注册 → API Keys → 创建
2. 填入 Vercel 环境变量
3. 可选：验证 `tavis.cn` 域名后改 `route.ts` 里的发件地址

### 4. Cloudflare DNS

1. [cloudflare.com](https://cloudflare.com) 添加 `tavis.cn`
2. 域名注册商处改 NS 为 Cloudflare 提供的服务器
3. DNS 记录：

| 类型 | 名称 | 内容 | 代理 |
|------|------|------|------|
| CNAME | `@` | `cname.vercel-dns.com` | 先关（验证后开） |
| CNAME | `www` | `cname.vercel-dns.com` | 先关（验证后开） |

4. Vercel Settings → Domains 添加 `tavis.cn` 和 `www.tavis.cn`
