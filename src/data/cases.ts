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
  image: string;
  imageRatio: string;
  gallery?: CaseGalleryImage[];
  highlights: string[];
  capabilities: CaseCapability[];
}

export const CASES: CaseStudy[] = [
  {
    slug: "acoustic-emission",
    title: "声发射工业检测平台",
    subtitle: "工业安全 · IoT + AI",
    summary: "融合声发射无损检测、AI 算法与物联网传输，对工业核心设备进行持续在线监测。",
    overview:
      "依托声发射无损感知技术，融合 AI 智能算法与物联网实时传输，全天候在线监测压力容器、管道、风电等工业核心设备，辅助捕捉早期微裂纹、疲劳损伤与腐蚀隐患。",
    tags: ["AI", "IoT", "Java", "Flink", "Kafka", "实时监测", "无损检测"],
    gradient: "from-slate-500 to-zinc-700",
    image: "/cases/acoustic-emission.jpg",
    imageRatio: "2643 / 1568",
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
    slug: "meridian-learning",
    title: "中医经络虚拟仿真教学平台",
    subtitle: "高校中医专业 · 3D 交互教学",
    summary: "以三维交互方式辅助学生识别经络、理解循行路径并完成在线学习与答题。",
    overview:
      "平台服务于高校中医专业课程教学，通过 3D 模型与浏览器交互，帮助学生识别十四条经络，完成交互答题、经络循行等学习操作，并已在智慧树虚拟仿真实验平台上线使用。",
    tags: ["Three.js", "WebGL", "3D 可视化"],
    gradient: "from-stone-100 to-amber-50",
    image: "/cases/meridian.png",
    imageRatio: "800 / 400",
    highlights: ["3D 经络模型交互", "在线答题系统", "智慧树平台上线"],
    capabilities: [
      {
        title: "3D 经络模型交互",
        description: "通过浏览器端三维模型呈现经络位置与循行关系，让抽象知识更容易观察。",
      },
      {
        title: "交互式学习与答题",
        description: "将经络识别、循行操作与在线答题整合到同一教学流程中。",
      },
      {
        title: "教学平台接入",
        description: "项目已接入智慧树虚拟仿真实验平台，用于实际课程教学场景。",
      },
    ],
  },
  {
    slug: "questionnaire-system",
    title: "问卷调查测评系统",
    subtitle: "教育创新研究院 · SaaS 平台",
    summary: "覆盖问卷设计、发布、收集、报告与统计的一体化测评平台。",
    overview:
      "系统针对问卷的设计、发布、收集、报告和统计等环节进行统一管理，支持是非题、单选、多选、填空与矩阵题等多种题型，同时提供逻辑跳转、自定义皮肤与本地化部署能力。",
    tags: ["React", "Node.js", "数据分析"],
    gradient: "from-teal-50 to-emerald-50",
    image: "/cases/questionnaire.png",
    imageRatio: "1024 / 433",
    highlights: ["多题型 + 逻辑跳转", "自定义皮肤与报告", "本地化部署支持"],
    capabilities: [
      {
        title: "多题型问卷设计",
        description: "支持是非、单选、多选、填空与矩阵题等多种结构，适配不同测评需求。",
      },
      {
        title: "逻辑跳转与发布",
        description: "通过答题逻辑控制后续内容，配合发布与收集流程完成问卷运行。",
      },
      {
        title: "报告与数据统计",
        description: "将收集结果统一汇总为报告与统计视图，支持问卷结果分析。",
      },
      {
        title: "定制与本地化部署",
        description: "支持页面皮肤与报告形式定制，并可根据使用场景进行本地化部署。",
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
    image: "/cases/smart-aging-admin.png",
    imageRatio: "2816 / 1526",
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
  {
    slug: "air-quality-control",
    title: "厂区空气污染精准溯源管控系统",
    subtitle: "工业环保 · 智能监测平台",
    summary: "融合环境监测、扩散建模和 AI 溯源分析，支持工业园区污染预警与处置。",
    overview:
      "系统面向钢铁等工业园区构建大气环境数字化管控平台，融合空地一体化监测、大气扩散建模与 AI 溯源分析，支持污染源识别、分级预警与工单闭环处置。",
    tags: ["GIS 可视化", "扩散建模", "AI 溯源", "实时监测", "工单闭环"],
    gradient: "from-sky-50 to-blue-50",
    image: "/cases/air-quality.png",
    imageRatio: "934 / 677",
    highlights: ["全要素污染物可视化", "多维度精准溯源诊断", "分级预警多渠道推送", "工单派发与闭环追溯"],
    capabilities: [
      {
        title: "全要素可视化",
        description: "整合厂区环境监测信息，通过 GIS 等可视化方式展示污染物分布与变化。",
      },
      {
        title: "多维溯源诊断",
        description: "结合空地一体化监测、大气扩散建模与 AI 分析，辅助识别污染源。",
      },
      {
        title: "分级预警推送",
        description: "基于监测与诊断结果形成分级预警，通过多渠道将关键信息推送给相关人员。",
      },
      {
        title: "工单闭环处置",
        description: "将异常识别、工单派发、处置与追溯串联起来，支持管控流程闭环。",
      },
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return CASES.find((caseStudy) => caseStudy.slug === slug);
}
