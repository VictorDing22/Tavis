# SuperUnknown 门户网站

基于 **Next.js 14 (App Router) + Tailwind CSS + Framer Motion** 的工作室门户网站。

## 技术栈

| 层级 | 选择 |
|------|------|
| DNS | Cloudflare（免费） |
| 托管 | Vercel（免费、自动 HTTPS、全球 CDN） |
| 框架 | Next.js 14（App Router、SSG） |
| 样式 | Tailwind CSS |
| 动效 | Framer Motion / Lenis |
| 图标 | Lucide React |
| 邮件 | Resend（联系表单发送） |

## 本地开发

```bash
npm install
cp .env.example .env.local   # 填写 RESEND_API_KEY 和 CONTACT_EMAIL
npm run dev                   # http://localhost:3000
```

## 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `RESEND_API_KEY` | 是 | Resend API Key，联系表单发送邮件使用 |
| `CONTACT_EMAIL` | 是 | 接收咨询邮件的邮箱 |
| `RESEND_FROM_EMAIL` | 否 | 发件地址，默认 `SuperUnknown <onboarding@resend.dev>` |

> `onboarding@resend.dev` 是 Resend 的测试发件人，只能发往账号注册邮箱。
> 正式上线前需在 Resend 验证 `tavis.com.cn` 域名，并设置
> `RESEND_FROM_EMAIL=SuperUnknown <noreply@tavis.com.cn>`。

## 页面结构

| 路径 | 内容 |
|------|------|
| `/` | 首页（Hero 轮播 → 关于 → 服务 → 行业 → CTA → 联系表单） |
| `/cases` | 案例列表（分类筛选：全部 / AI 应用 / Web 平台 / 小程序） |
| `/cases/[slug]` | 案例详情（项目概览、关键界面、核心能力、下一个项目） |
| `/team` | 团队成员 + 价值观 |
| `/team/[slug]` | 成员详情（个人介绍、毕业院校、经历、技术专长、技术栈） |
| `/api/contact` | 联系表单接口（Resend 邮件） |

## 导航链接

| 导航项 | 指向 |
|--------|------|
| 服务 | 首页 `/#services` 锚点 |
| 案例 | `/cases` 独立页面 |
| 关于 | `/team` 独立页面 |
| 联系 | 首页 `/#contact` 锚点 |

## 内容维护

案例与团队成员均由数据文件驱动，页面组件无需改动：

| 文件 | 内容 |
|------|------|
| `src/data/cases.ts` | 9 个案例：标题、摘要、概览、标签、配图、亮点、核心能力 |
| `src/data/team.ts` | 7 位成员：姓名、职位、照片、简介、学历、经历、专长、技术栈 |

新增案例时，在 `CASES` 中追加一项并放入配图即可，`/cases` 列表、
`/cases/[slug]` 详情页与静态参数会自动生成。成员同理。
列表封面不需要单独作图：由 `gradient` 品牌色加 `image` 截图自动合成。
`image` 可以是一张桌面截图，也可以是两张手机截图；`gallery` 只放与首图不同的界面，
没有就省略，详情页会自动隐藏“关键界面细节”区块。
案例分类筛选在 `src/components/CasesPage.tsx` 的 `CATEGORIES` 中维护。

其余静态文案可直接搜索文件内的中文内容定位：

| 文件 | 可自定义 |
|------|---------|
| `src/app/layout.tsx` | SEO 标题 / 描述 / OG 图片 |
| `src/components/Navbar.tsx` | Logo / 品牌名 |
| `src/components/Hero.tsx` | 轮播图片、切换速度 |
| `src/components/About.tsx` | 主标题、副标题、统计数字 |
| `src/components/Services.tsx` | 服务卡片内容 |
| `src/components/Industries.tsx` | 覆盖行业列表 |
| `src/components/Contact.tsx` | 联系方式（邮箱 / 电话 / 地址） |

## 项目结构

```
src/
├── app/
│   ├── api/contact/route.ts     # 联系表单 API（Resend 邮件）
│   ├── cases/
│   │   ├── page.tsx             # 案例列表页
│   │   ├── layout.tsx           # 案例页导航/页脚
│   │   └── [slug]/page.tsx      # 案例详情页
│   ├── team/
│   │   ├── page.tsx             # 团队列表页
│   │   └── [slug]/page.tsx      # 成员详情页
│   ├── globals.css
│   ├── layout.tsx               # 根布局 + SEO + OG 配置
│   └── page.tsx                 # 首页
├── components/                  # 页面区块与交互组件
└── data/
    ├── cases.ts                 # 案例数据
    └── team.ts                  # 团队成员数据

public/
├── hero/                        # 首屏轮播图片
├── cases/                       # 案例截图
├── team/                        # 成员照片
├── about/                       # 服务区块背景图
└── og-image.png                 # 社交分享预览图（1200×630）
```

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
   - `RESEND_FROM_EMAIL`（验证域名后填写）
3. Redeploy 使环境变量生效

### 3. Resend 邮件配置

1. [resend.com](https://resend.com) 注册 → API Keys → 创建
2. 填入 Vercel 环境变量
3. Domains → 添加并验证 `tavis.com.cn`（按提示配置 DNS 记录）
4. 验证通过后，把 `RESEND_FROM_EMAIL` 设为 `SuperUnknown <noreply@tavis.com.cn>`

### 4. Cloudflare DNS

1. [cloudflare.com](https://cloudflare.com) 添加 `tavis.com.cn`
2. 域名注册商处改 NS 为 Cloudflare 提供的服务器
3. DNS 记录：

| 类型 | 名称 | 内容 | 代理 |
|------|------|------|------|
| CNAME | `@` | `cname.vercel-dns.com` | 先关（验证后开） |
| CNAME | `www` | `cname.vercel-dns.com` | 先关（验证后开） |

4. Vercel Settings → Domains 添加 `tavis.com.cn` 和 `www.tavis.com.cn`
