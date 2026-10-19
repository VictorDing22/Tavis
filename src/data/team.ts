export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
  bioParagraphs?: string[];
  education?: { school: string; degree: string }[];
  experienceLabel?: string;
  experience?: string;
  experienceItems?: {
    period?: string;
    organization: string;
    role?: string;
    description: string;
  }[];
  expertise?: { title: string; description: string }[];
  skills: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "dingsaier",
    name: "定赛尔",
    role: "全栈开发工程师",
    image: "/team/dingsaier.png",
    education: [
      { school: "澳大利亚墨尔本大学", degree: "硕士" },
      { school: "北京航空航天大学", degree: "学士" },
    ],
    experienceItems: [
      {
        period: "2026 年 4 月至今",
        organization: "西安欧亚学院",
        role: "软件工程专业教师",
        description: "从事软件工程专业教学与项目实践指导工作，注重将全栈开发、软件架构与工程交付经验融入教学实践。",
      },
      {
        period: "2021 年至 2026 年",
        organization: "企业研发经历",
        role: "全栈与后端开发",
        description: "曾就职于北京旷视科技（Face++）、软通动力，参与阿里云算法平台的后端开发、架构设计与全栈开发。",
      },
    ],
    bio: "全栈交付：熟悉 React / Next.js / Vue 与 TypeScript 工程化，覆盖小程序与 Three.js 等前端场景。后端侧重高并发与分布式设计，使用 Spring Boot / Node.js，结合 Kafka、Flink 与 MySQL / Redis 等做性能与数据链路优化。熟悉 RAG、向量检索与 LangChain 等大模型应用落地，并负责 Docker、K8s 与 CI/CD 部署保障稳定运行。",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite", "Webpack", "Three.js", "微信小程序", "Node.js", "Java", "Spring Boot", "Python", "golang", "高并发架构", "Kafka", "Flink", "MySQL", "PostgreSQL", "Redis", "gRPC", "RAG", "LangChain", "向量检索", "LLM API", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    slug: "wuyize",
    name: "吴宜泽",
    role: "软件工程教师 · 算法工程师",
    image: "/team/wuyize-v2.jpg",
    education: [
      { school: "加拿大韦仕敦大学（Western University）", degree: "电气与计算机工程 · 工程硕士 · 2022 年" },
      { school: "西北工业大学（Northwestern Polytechnical University）", degree: "电气工程 · 工学学士 · 2020 年" },
    ],
    bio: "硕士研究生，现任西安欧亚学院软件工程专业教师，具有电气与计算机工程、软件开发及人工智能等交叉学科背景。",
    bioParagraphs: [
      "吴宜泽，硕士研究生，现任西安欧亚学院软件工程专业教师。毕业于加拿大韦仕敦大学（Western University），具有电气与计算机工程、软件开发及人工智能等交叉学科背景。",
      "曾任职于中兴软件，从事 5G 通信算法研发、通信协议实现及软件系统开发工作，参与通信系统核心算法优化、软件接口开发与跨团队集成测试，具有软件研发和复杂系统工程实践经验。",
      "主要研究与实践方向包括人工智能、计算机视觉、智能软件系统、数据库技术及数据分析。近年来围绕人工智能与教育教学、智能感知和软硬件系统融合等领域开展项目实践，探索生成式人工智能、多智能体系统及机器学习技术在实际场景中的应用，注重技术研发、工程实践与应用创新的结合。",
    ],
    experienceItems: [
      {
        period: "2023 年 11 月至今",
        organization: "西安欧亚学院",
        role: "软件工程专业教师",
        description: "主要承担《数据库系统与应用》《程序设计基础》等专业课程教学工作，参与软件工程实践教学及相关技术研究。围绕人工智能、数据库应用、智能系统开发和软件工程实践等方向开展教学与项目探索，注重培养学生的软件开发能力、技术应用能力与工程实践能力。",
      },
      {
        period: "2022 年 9 月—2023 年 5 月",
        organization: "中兴软件",
        role: "软件工程师 · 5G 算法工程师",
        description: "参与 5G NR 通信系统的软件研发和算法优化工作，涉及 Massive MIMO 波束空间分离算法、基站 BBU 软件接口及通信协议码本上报等技术。参与 5G NR Type 2 R15 项目研发及验证，与高通相关技术团队开展系统联调和测试，积累了通信系统开发、C/C++ 编程、算法优化与工程调试经验。",
      },
      {
        organization: "其他企业实践",
        role: "软件开发与数据分析",
        description: "曾参与企业软件开发、业务数据分析、数据库应用及数据可视化相关工作，涉及 SQL 数据处理、Python 数据分析、预测模型优化、数据质量管理及业务报表开发。",
      },
    ],
    expertise: [
      {
        title: "人工智能与机器学习",
        description: "主要涉及计算机视觉、目标检测、深度学习模型训练与评估，具有 Python、PyTorch、YOLOv8 等技术实践经验。开展基于深度学习的智能宠物感知与行为识别项目，探索人工智能模型在实时视频分析和智能感知系统中的应用。",
      },
      {
        title: "软件开发与系统集成",
        description: "具备 Python、C/C++、JavaScript、TypeScript 等编程语言的开发基础，具有 FastAPI、WebSocket、React 等应用开发经验。关注前后端分离架构、REST API、实时数据通信、自动化测试及智能软件系统集成。",
      },
      {
        title: "数据库与数据分析",
        description: "熟悉 SQL、PostgreSQL、Pandas 等数据库与数据处理技术，具有数据查询、数据聚合、数据质量校验、数据迁移及可视化分析相关实践经验。关注数据处理流程、数据库应用及数据分析技术在实际业务中的应用。",
      },
      {
        title: "生成式人工智能与智能教育",
        description: "关注大语言模型、AI Agent、多智能体协作及人工智能辅助教学技术。参与基于 OpenMAIC 的 SuperUnknownMAIC 智能互动课堂项目共创探索，研究 AI 课程生成、智能教学角色协作及交互式学习内容等应用方向。",
      },
      {
        title: "通信技术与智能硬件",
        description: "具有 5G NR、Massive MIMO、通信协议及基站软件开发经验，具备通信系统调试与集成测试能力。关注物联网、边缘计算及智能硬件应用，开展摄像头接入、嵌入式计算平台与人工智能感知系统相结合的原型实践。",
      },
    ],
    skills: ["Python", "C/C++", "JavaScript", "TypeScript", "PyTorch", "YOLOv8", "计算机视觉", "目标检测", "FastAPI", "WebSocket", "React", "REST API", "SQL", "PostgreSQL", "Pandas", "数据分析", "大语言模型", "AI Agent", "多智能体系统", "OpenMAIC", "5G NR", "Massive MIMO", "通信协议", "基站软件", "物联网", "边缘计算", "智能硬件"],
  },
  {
    slug: "zhangzeyu",
    name: "张泽宇",
    role: "后端开发工程师",
    image: "/team/zhangzeyu.png",
    experienceLabel: "项目实践",
    experience: "参与校内软件工程项目与团队协作开发，围绕需求拆解、功能实现、接口联调和版本迭代积累实践经验，并持续完善代码规范、测试与交付能力。",
    bio: "专注于后端服务开发与软件工程实践，能够使用 Java、Spring Boot、Node.js 和关系型数据库完成业务建模、接口设计与功能实现。熟悉 RESTful API、MySQL、PostgreSQL、Redis 等常用技术，并具备前后端联调、容器化部署和持续集成基础。重视清晰的代码结构、稳定的接口约定和可维护的工程流程，能够在团队项目中完成从需求分析、后端开发到联调测试的完整任务闭环。",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Java", "Spring Boot", "Node.js", "RESTful API", "MySQL", "PostgreSQL", "Redis", "Git", "Linux", "Docker", "单元测试", "CI/CD", "响应式开发", "接口联调", "软件工程"],
  },
  {
    slug: "wanshumiao",
    name: "万书淼",
    role: "前端开发工程师 · 产品经理",
    image: "/team/wanshumiao.jpg",
    experienceLabel: "项目实践",
    experience: "参与校内 Web 应用与数字产品项目实践，负责需求梳理、功能规划、交互原型和前端页面实现，并与团队成员协作完成接口联调、版本迭代和体验优化。持续积累从用户需求分析、产品方案设计到前端功能落地的完整实践经验。",
    bio: "专注于 Web 前端开发与数字产品规划，能够从用户需求和实际使用场景出发，完成需求分析、功能拆解、交互流程设计与页面实现。熟悉 React、Next.js、TypeScript 等前端技术，注重组件复用、响应式体验和界面一致性；同时具备产品思维与原型设计能力，能够协调设计和研发任务，推动产品方案稳定落地。",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "响应式开发", "组件化开发", "RESTful API", "接口联调", "Git", "Figma", "产品规划", "需求分析", "用户研究", "信息架构", "用户流程", "交互设计", "原型设计", "设计系统", "可用性测试", "敏捷协作", "版本迭代"],
  },
  {
    slug: "tianmengyao",
    name: "田梦瑶",
    role: "数据分析工程师 · 测试开发工程师",
    image: "/team/tianmengyao.png",
    experienceLabel: "项目实践",
    experience: "参与校内数字化项目的数据整理、功能测试与质量验证工作，协助团队完成测试场景设计、接口检查、问题跟踪和版本验收。能够通过数据分析发现业务流程和产品体验中的异常，为功能优化与项目迭代提供依据。",
    bio: "关注数据价值与软件质量，具备数据处理、可视化分析和软件测试的基础能力。能够使用 Python 与 SQL 完成数据清洗、统计分析和结果呈现，并围绕业务需求设计功能测试、接口测试与回归测试方案。在团队协作中注重细节和交付质量，通过规范的测试记录、问题定位与数据反馈，帮助产品持续提升稳定性、准确性和使用体验。",
    skills: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Excel", "数据清洗", "统计分析", "数据可视化", "ECharts", "Power BI", "功能测试", "接口测试", "Postman", "测试用例设计", "回归测试", "缺陷管理", "需求验证", "Git", "软件质量保障"],
  },
  {
    slug: "zhuyaodong",
    name: "朱耀东",
    role: "全栈开发工程师",
    image: "/team/zhuyaodong.png",
    experienceLabel: "项目实践",
    experience: "参与多个 Web 应用与数字化项目的规划和研发，负责需求梳理、功能设计、前端开发、接口联调及版本迭代，并参与项目展示、代码管理和部署交付。能够协调设计与研发任务，推动项目从初步构想到可运行产品的完整落地。",
    bio: "专注于 Web 应用开发与数字产品实现，具备前端工程、后端接口和项目协作等综合实践能力。前端侧主要使用 React、Next.js 与 TypeScript 构建响应式页面和交互体验，后端侧能够结合 Java、Spring Boot、Node.js 与数据库技术完成业务功能开发。在项目实践中关注产品需求、代码质量与最终交付效果，能够参与需求分析、技术方案设计、功能开发、测试联调和部署维护等环节。同时持续探索大语言模型、AI Agent 和智能应用开发，尝试将人工智能能力融入实际软件产品与业务场景。",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Node.js", "Java", "Spring Boot", "Python", "RESTful API", "MySQL", "PostgreSQL", "Redis", "Git", "GitHub", "Docker", "Vercel", "响应式开发", "前后端联调", "项目管理", "需求分析", "AI Agent", "LLM API", "RAG"],
  },
];

export const getTeamMember = (slug: string) => TEAM_MEMBERS.find(member => member.slug === slug);
