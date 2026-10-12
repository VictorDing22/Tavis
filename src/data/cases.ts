export interface CaseCapability {
  title: string;
  description: string;
}

export interface CaseGalleryImage {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  tags: string[];
  gradient: string;
  cover: string;
  image: string;
  gallery?: CaseGalleryImage[];
  highlights: string[];
  capabilities: CaseCapability[];
}

export const CASES: CaseStudy[] = [
  {
    slug: "maic-classroom",
    title: "多智能体互动课堂",
    subtitle: "智慧教学 · AI 互动课堂",
    summary: "为西安欧亚学院打造的 AI 课堂，一句话生成由 AI 老师与智能体同学共同参与的互动课程。",
    overview:
      "平台基于开源多智能体课堂引擎 OpenMAIC 深度定制，面向西安欧亚学院智慧教学场景。教师或学生输入想学的主题、上传学习材料，系统即可自动生成幻灯片、随堂测验、白板讲解与交互实验，由 AI 老师语音授课，智能体同学同步提问与讨论，让每一节课都能按需生成、即时互动。",
    tags: ["Next.js", "React", "TypeScript", "LangGraph", "多智能体", "语音合成"],
    gradient: "from-slate-800 via-slate-900 to-teal-900",
    cover: "/cases/covers/maic.jpg",
    image: "/cases/maic-classroom.jpg",
    gallery: [
      {
        image: "/cases/maic-home.jpg",
        alt: "多智能体互动课堂生成入口",
        title: "一句话生成课堂",
        description:
          "输入课程主题或上传资料，选择模型与互动深度，即可生成一节包含讲解、练习与讨论的完整课堂。",
      },
      {
        image: "/cases/maic-agents.jpg",
        alt: "AI 老师在课堂中进行语音讲解",
        title: "AI 老师与智能体同学",
        description:
          "AI 老师逐页讲解并配合字幕，智能体同学参与提问与讨论，学生可随时插话、暂停或回看。",
      },
    ],
    highlights: ["一键生成完整课堂", "AI 老师语音授课", "智能体同学陪学", "测验与交互实验"],
    capabilities: [
      {
        title: "课堂自动生成",
        description: "根据主题或学习材料自动规划大纲，生成幻灯片、测验、白板与交互式实验等多种课堂场景。",
      },
      {
        title: "多智能体授课",
        description: "AI 老师负责讲解与板书，多个智能体同学模拟真实课堂中的提问、讨论与互动节奏。",
      },
      {
        title: "语音与白板",
        description: "讲解全程语音播报并同步字幕，复杂概念通过白板实时绘制图表与公式辅助理解。",
      },
      {
        title: "学院品牌定制",
        description: "界面、入口与课程内容按西安欧亚学院智慧教学平台进行品牌化定制与本地部署。",
      },
    ],
  },
  {
    slug: "procurement-agent",
    title: "西高院采购智能助手",
    subtitle: "采购数字化 · AI Agent",
    summary: "采购人员用自然语言查询供应商，助手自动比选、提示风险，每条结论都能回溯查询过程。",
    overview:
      "项目服务于西高院采购业务，以大模型智能体为核心，连接供应商信息库、采购制度知识库与外部征信数据。采购人员只需用一句话提出需求，助手便会自主检索在库企业、调取资质与历史合作记录，完成供应商比选与风险提示；每一步工具调用都会记录在案，结论可追溯、可核对，最终决策仍由人工确认。",
    tags: ["大模型", "AI Agent", "RAG", "MCP", "Python", "模型网关"],
    gradient: "from-stone-200 via-amber-50 to-stone-300",
    cover: "/cases/covers/procure.jpg",
    image: "/cases/procurement-agent.jpg",
    gallery: [
      {
        image: "/cases/procurement-chat.jpg",
        alt: "采购智能助手对话界面",
        title: "自然语言采购问答",
        description: "供应商名录、品类比选、单户风险核验等常用查询一键发起，回答按清单与结论清晰呈现。",
      },
      {
        image: "/cases/procurement-trace.jpg",
        alt: "采购智能助手查询记录面板",
        title: "可追溯的查询记录",
        description: "每次检索、调档与比对都按步骤记录工具调用和返回结果，方便采购人员逐条核对结论来源。",
      },
    ],
    highlights: ["自然语言查供应商", "智能比选与风险提示", "制度知识库问答", "全过程可追溯"],
    capabilities: [
      {
        title: "供应商智能检索",
        description: "按品类、企业名称或编号检索在库供应商，自动调取注册资本、资质与历史合作评价。",
      },
      {
        title: "比选与风险核验",
        description: "结合历史合作表现与外部征信数据，对候选供应商进行比选，并对异常状态给出风险提示。",
      },
      {
        title: "制度知识库",
        description: "采购制度文档经切分、向量化与重排检索，回答时附带出处，确保依据可查。",
      },
      {
        title: "模型网关与护栏",
        description: "统一管理模型调用与工具权限，关键结论需人工确认，保障智能体在采购场景中的可控性。",
      },
    ],
  },
  {
    slug: "acoustic-emission",
    title: "声发射工业检测平台",
    subtitle: "工业安全 · IoT + AI",
    summary: "融合声发射无损检测、AI 算法与物联网传输，对工业核心设备进行持续在线监测。",
    overview:
      "依托声发射无损感知技术，融合 AI 智能算法与物联网实时传输，全天候在线监测压力容器、管道、风电等工业核心设备，辅助捕捉早期微裂纹、疲劳损伤与腐蚀隐患。",
    tags: ["AI", "IoT", "Java", "Flink", "Kafka", "实时监测", "无损检测"],
    gradient: "from-slate-500 to-zinc-700",
    cover: "/cases/covers/acoustic.jpg",
    image: "/cases/acoustic-emission.jpg",
    highlights: ["无损不停机检测", "AI 降噪识别算法", "24h 在线云监测", "多行业适配"],
    capabilities: [
      {
        title: "无损不停机检测",
        description: "利用声发射无损感知技术，在不影响核心设备运行的前提下持续采集状态信号。",
      },
      {
        title: "AI 降噪识别",
        description: "结合智能算法对采集信号进行降噪与识别，辅助发现微裂纹、疲劳损伤与腐蚀隐患。",
      },
      {
        title: "24h 在线云监测",
        description: "通过物联网链路完成实时传输与平台化展示，形成连续的设备状态观测能力。",
      },
      {
        title: "多行业场景适配",
        description: "面向压力容器、管道与风电等不同工业设备场景进行监测能力配置。",
      },
    ],
  },
  {
    slug: "smart-aging-platform",
    title: "智慧养老服务平台",
    subtitle: "智慧养老 · 小程序 + Web 管理后台",
    summary:
      "连接长者、社区与运营人员的一体化养老服务平台，覆盖健康活动、邻里互动与后台运营管理。",
    overview:
      "平台围绕社区智慧养老场景构建，面向长者提供健康步行、社区活动、长者学堂、消息互动和个人服务等功能，同时为运营人员提供活动审核、广告管理、用户管理与数据概览能力。小程序与 Web 管理后台协同工作，让服务触达、活动组织和日常运营形成清晰闭环。",
    tags: [
      "微信小程序",
      "Vue 3",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "REST API",
    ],
    gradient: "from-indigo-100 via-slate-50 to-blue-100",
    cover: "/cases/covers/aging.jpg",
    image: "/cases/smart-aging-admin.png",
    gallery: [
      {
        image: "/cases/smart-aging-home.png",
        alt: "智慧养老小程序首页",
        title: "长者服务首页",
        description:
          "集中呈现健康步行、社区活动、长者学堂与近期活动，为长者提供清晰、低门槛的服务入口。",
      },
      {
        image: "/cases/smart-aging-profile.png",
        alt: "智慧养老小程序个人中心",
        title: "个人中心与服务管理",
        description:
          "整合个人资料、积分、活动和好友信息，让用户能够在同一入口管理自己的社区养老服务。",
      },
    ],
    highlights: [
      "小程序与 Web 双端协同",
      "社区活动全流程管理",
      "长者友好的信息架构",
      "用户与运营数据统一管理",
    ],
    capabilities: [
      {
        title: "长者服务聚合",
        description:
          "将健康步行、兴趣课堂、社区活动与邻里互动整合到统一入口，降低服务查找和使用门槛。",
      },
      {
        title: "社区活动运营",
        description:
          "支持活动发布、报名参与、审核管理和状态跟踪，帮助社区形成可持续的活动运营流程。",
      },
      {
        title: "用户与积分体系",
        description:
          "围绕用户资料、参与记录和积分信息建立个人服务中心，增强平台持续使用与社区连接。",
      },
      {
        title: "多端后台管理",
        description:
          "通过 Web 管理后台统一处理用户、活动、广告和运营数据，为日常管理提供清晰工作台。",
      },
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return CASES.find((caseStudy) => caseStudy.slug === slug);
}
