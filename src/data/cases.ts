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
  /** A browser screenshot, or a pair of phone screenshots shown side by side. */
  image: string | [string, string];
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
    image: "/cases/maic-classroom.jpg",
    gallery: [
      {
        image: "/cases/maic-home.jpg",
        alt: "多智能体互动课堂生成入口",
        title: "一句话生成课堂",
        description:
          "输入课程主题或上传资料，选择模型与互动深度，即可生成一节包含讲解、练习与讨论的完整课堂。",
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
    slug: "superunknown-courses",
    title: "SuperUnknown 课程广场",
    subtitle: "在线教育 · 课程展示与播放",
    summary:
      "把工作室 AI 生成的单文件互动课，做成可搜索、可续播的课程中心。",
    overview:
      "SuperUnknown 工作室用 SuperUnknownMAIC 把课程做成 AI 互动课堂，导出的却是一个约 7.8MB 的单文件 HTML，原本只能作为文件传来传去。课程广场要解决的，是让每门课都有一个随时能打开的入口：教师在课程管理上传课程包，学生在广场搜索选课、进入详情页全屏上课，下次回来直接从上一幕续播。技术上坚持「不重写播放器」，平台只做外壳——Next.js 静态导出负责广场与详情，iframe 承载单文件课堂，一套代码通过 basePath 同时产出公开站和校园 /plaza/ 子路径。",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "静态导出", "JWT 单点登录"],
    gradient: "from-[#d5ecea] via-[#eaf5f5] to-[#c8dde8]",
    image: "/cases/courses-home.jpg",
    gallery: [
      {
        image: "/cases/courses-detail.jpg",
        alt: "课程详情页",
        title: "课程详情与统计",
        description:
          "课程简介、标签与场景、互动关卡、测验、时长四项统计集中在同一页，开始学习后直接进入全屏课堂。",
      },
    ],
    highlights: [
      "单文件离线课堂",
      "断点续播不丢进度",
      "教师上传即生效",
      "一套代码两种部署",
    ],
    capabilities: [
      {
        title: "课程广场",
        description:
          "课程卡展示封面、场景数与幻灯片/互动/测验统计，支持按标题、标签与难度搜索，接口不可用时回落到构建期数据。",
      },
      {
        title: "全屏课堂",
        description:
          "iframe 整页承载约 8MB 的单文件课堂，保留课堂自带的旁白字幕、场景侧栏与全屏，平台只叠加返回入口与慢网提示。",
      },
      {
        title: "断点续播",
        description:
          "播放时持续读取当前场景并定时上报心跳，重新进入自动回到上一幕，我的课程按已看幕数展示进度与学完标记。",
      },
      {
        title: "教师后台",
        description:
          "教师可新建课程并上传 200MB 以内的课程包，更换封面、更新版本与软下架；非教师无法进入管理页，后端再次校验角色。",
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
    image: "/cases/procurement-agent.jpg",
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
    slug: "campus-sports-saas",
    title: "校味体育 SaaS 平台",
    subtitle: "高校体育 · 多租户 SaaS",
    summary: "面向高校的一站式体育 SaaS，覆盖体测、课外锻炼、体育教学、赛事与场馆预约。",
    overview:
      "平台以多租户 SaaS 架构服务多所高校，每所学校拥有独立的品牌、组织架构与业务配置，并支持对接学校统一身份认证。系统覆盖高校体育工作的完整链路：体测预约、仪器上传成绩与统计上报，AI 跑步与打卡锻炼的过程记录与合格判定，体育课程、考勤与理论考试，校园赛事的分组、日程与计分，以及场馆的在线预约、支付与核销，并通过数据大屏让学校实时掌握学生的体质与运动情况。",
    tags: ["Spring Boot", "Vue 3", "Element Plus", "MySQL", "Redis", "ECharts", "多租户 SaaS"],
    gradient: "from-[#e9572f] via-[#d9472a] to-[#b8361f]",
    image: "/cases/sport-platform.jpg",
    gallery: [
      {
        image: "/cases/sport-arrange.jpg",
        alt: "体测预约安排管理界面",
        title: "体测组织与预约",
        description: "按学期创建多批次体测安排，支持学生个人、班级与指定院系等预约方式，并实时跟踪测试进度。",
      },
      {
        image: "/cases/sport-running.jpg",
        alt: "AI 跑步记录管理界面",
        title: "课外锻炼过程记录",
        description: "完整记录每次跑步的时长、距离与配速，按合格规则自动判定，并给出不合格原因供学生申诉核查。",
      },
    ],
    highlights: ["多校多租户独立运营", "体测全流程管理", "AI 跑步与打卡锻炼", "场馆在线预约"],
    capabilities: [
      {
        title: "体质测试管理",
        description: "从体测预约、教师排班到仪器对接上传成绩，按评分规则自动计算等级，并完成统计分析与数据上报。",
      },
      {
        title: "课外锻炼",
        description: "覆盖 AI 跑步、APP 跑步、定点打卡与 AI 运动项目，配置合格规则与有效配速，支持免于锻炼申请与成绩申诉。",
      },
      {
        title: "教学与赛事",
        description: "管理体育课程、排课、考勤与理论考试题库，组织校园赛事的分组、日程、评分公式与团体总分。",
      },
      {
        title: "场馆与数据大屏",
        description: "场地在线预约、计费支付与到场核销，配合体测与运动数据大屏，让学校实时掌握整体运动情况。",
      },
    ],
  },
  {
    slug: "found-my-job",
    title: "FoundMyJob",
    subtitle: "求职助手 · AI 简历",
    summary: "本地求职助手，同步企业公开岗位，按个人经历生成可审核的专属简历，并记下每一次投递。",
    overview:
      "FoundMyJob 跑在求职者自己的电脑上。教育经历、技能和项目都写进个人档案，连同岗位与简历一起存在本机数据库里，不需要把经历交给一个常驻的云账号。它从企业公开招聘板同步真实岗位，也可以粘贴职位描述手动导入；选定一个机会后，用本机的 Cursor 或自己的模型 Key 生成中文或英文简历，逐项核对再导出。投递仍由本人到岗位原文页面完成，系统只负责把进度记下来。",
    tags: ["Node.js", "SQLite", "大模型", "Greenhouse"],
    gradient: "from-[#e2dbf7] via-[#f1edfb] to-[#d2c8f0]",
    image: "/cases/foundmyjob-dashboard.jpg",
    gallery: [
      {
        image: "/cases/foundmyjob-jobs.jpg",
        alt: "FoundMyJob 岗位发现列表",
        title: "同步真实岗位",
        description: "从企业公开招聘板拉取在招职位，按地区、招聘类型和办公方式筛选，并对照个人档案给出匹配参考。",
      },
    ],
    highlights: ["真实岗位同步", "档案留在本机", "简历生成后可审核", "投递进度自己记"],
    capabilities: [
      {
        title: "真实岗位库",
        description: "接入企业公开的 Greenhouse 与 Lever 招聘板，也支持粘贴职位描述导入。招聘状态以原文为准，匹配度只作参考。",
      },
      {
        title: "个人档案",
        description: "教育、技能、实习和项目经历保存在本机 SQLite。档案越完整，岗位筛选和简历取材越贴近本人。",
      },
      {
        title: "专属简历",
        description: "针对单个岗位生成中文或英文简历，可编辑、逐项审核，再导出 Markdown 或打印为 PDF。内容一改，审核状态就会失效。",
      },
      {
        title: "投递追踪",
        description: "用准备中、已投递、面试中、已结束记录进度。标记已投递前，需要先完成该岗位简历的审核。",
      },
    ],
  },
  {
    slug: "kuajing-studio",
    title: "跨界探索工作室管理系统",
    subtitle: "高校教学 · 工作室三端协同",
    summary:
      "为西安欧亚学院跨界探索工作室打造的三端协同系统，覆盖入室申请、组队、课题分配、过程提交、批改与成果统计。",
    overview:
      "跨界探索工作室以项目制方式组织课外学习：学生跨专业申请入室，以小组承接企业命题，教师指导并批改，学院需要掌握真实的参与度与成果。过去招募、组队、课题分配和资料提交分散在表格与聊天工具里，名额、版本与归属都难以核对。系统把学生、教师、管理员三端收进同一条业务链路——申请入室、组队、课题分配、过程资料与最终作业提交、逐版批改、成果展示与统计导出——所有页面读写同一份工作室与课题事实，而不是按门户各建一套数据。前端以 React 19 拆分三套路由与菜单，后端用 Spring Boot 分层实现权限校验与状态流转，表结构由 Flyway 迁移独占管理。",
    tags: ["React 19", "TypeScript", "Spring Boot", "MySQL", "Flyway", "JWT", "MinIO", "Excel 导入"],
    gradient: "from-[#0f5a52] via-[#0b3f3a] to-[#062a26]",
    image: "/cases/kuajing-workbench.jpg",
    gallery: [
      {
        image: "/cases/kuajing-student.jpg",
        alt: "学生端工作室详情页",
        title: "学生端：从选择工作室开始",
        description:
          "浏览工作室方向与成员名额，提交加入申请；入室后在工作台查看小组、课题与待办，提交过程资料并查看批改结果。",
      },
      {
        image: "/cases/kuajing-topics.jpg",
        alt: "教师端课题管理列表",
        title: "教师端：课题全流程",
        description:
          "课题从草稿到发布、分配、完成与关闭都有明确状态，列表中直接看到负责人、截止时间与分配对象，进入课题中心处理批改。",
      },
    ],
    highlights: [
      "三端共用一套业务事实",
      "课题批量导入与分配",
      "过程资料按版本留痕",
      "容量与状态统一校验",
    ],
    capabilities: [
      {
        title: "三端分权协同",
        description:
          "学生、教师、管理员各走独立路由与菜单，权限由后端按角色与工作室负责关系校验，三端读写同一套工作室、课题与提交记录。",
      },
      {
        title: "工作室全周期",
        description:
          "创建申请、审批、启停、成员入册与退出串成一条状态线，容量校验放在事务与行锁内，每次变更只追加事件记录。",
      },
      {
        title: "课题批量导入",
        description:
          "教师下载 Excel 模板上传，按学号复用或新建账号，逐人确认后按个人或团队分配指导，异常整组暂缓并可导出复核。",
      },
      {
        title: "过程留痕批改",
        description:
          "过程资料按版本保序留档，最终作业与成果封面分页签呈现，教师逐版评分评语并推优，学生端同步看到结果与退回意见。",
      },
    ],
  },
  {
    slug: "catcare-companion",
    title: "CatCare 宠物陪伴",
    subtitle: "智能看护 · 远程互动",
    summary: "远程查看猫咪状态，发起温和互动，并把活动和看护观察整理成日常记录。",
    overview:
      "CatCare 把摄像头预览、行为识别和互动控制放进同一套产品。主人可以在看护台上确认猫咪是否在场、正在休息还是玩耍，查看当天的活动与互动记录，并通过远程逗玩面板控制方向、激光和急停。识别和界面是分开的：检测负责判断画面里发生了什么，界面只给出克制的看护提示，不把观察说成医疗结论。当前版本先用本地预览和设备模拟把看护、互动和隐私边界跑通，再接入真实硬件。",
    tags: ["React", "Python", "YOLOv8", "FastAPI"],
    gradient: "from-[#efe6d6] via-[#e0ece3] to-[#c9dbe5]",
    image: "/cases/catcare-home.jpg",
    gallery: [
      {
        image: "/cases/catcare-health.jpg",
        alt: "CatCare 健康观察界面",
        title: "在场与行为观察",
        description: "看护页汇总猫咪是否可见、当前行为和识别把握，并把健康提示限制在日常观察，不替代兽医判断。",
      },
      {
        image: "/cases/catcare-activity.jpg",
        alt: "CatCare 每日活动与互动记录",
        title: "每日活动记录",
        description: "按天整理活动时长、互动次数和安全停止记录，方便回看猫咪这一天是平稳度过，还是中途被打断。",
      },
    ],
    highlights: ["在场与行为观察", "远程温和互动", "每日活动记录", "看护提示保持克制"],
    capabilities: [
      {
        title: "看护台",
        description: "在一个页面里看到设备是否在线、猫咪是否可见、当前是休息还是玩耍，以及最近一次状态更新。",
      },
      {
        title: "远程互动",
        description: "逗玩面板提供方向、激光和急停。画面预览留在本地，远程指令先经过模拟设备，确认安全边界后再接硬件。",
      },
      {
        title: "活动与健康观察",
        description: "记录每天的活动、互动场次和安全停止，并把进食、如厕等观察标成“还不够判断”，避免过度解读。",
      },
      {
        title: "识别与产品分开",
        description: "猫咪检测和行为分类独立训练，产品侧只接收整理后的状态。看护提示服务日常陪伴，不做成诊断结论。",
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
    gradient: "from-[#7d8ff2] via-[#6a7cec] to-[#5163d8]",
    image: ["/cases/smart-aging-home.png", "/cases/smart-aging-profile.png"],
    gallery: [
      {
        image: "/cases/smart-aging-admin.png",
        alt: "乐龄服务平台管理后台控制台",
        title: "运营管理后台",
        description:
          "运营人员在 Web 后台集中处理活动审核、广告与用户管理，控制台汇总用户、活动与待审核数量。",
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
    slug: "acoustic-emission",
    title: "声发射工业检测平台",
    subtitle: "工业安全 · IoT + AI",
    summary: "融合声发射无损检测、AI 算法与物联网传输，对工业核心设备进行持续在线监测。",
    overview:
      "依托声发射无损感知技术，融合 AI 智能算法与物联网实时传输，全天候在线监测压力容器、管道、风电等工业核心设备，辅助捕捉早期微裂纹、疲劳损伤与腐蚀隐患。",
    tags: ["AI", "IoT", "Java", "Flink", "Kafka", "实时监测", "无损检测"],
    gradient: "from-[#3a4766] via-[#283149] to-[#171c2a]",
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
];

export function getCaseBySlug(slug: string) {
  return CASES.find((caseStudy) => caseStudy.slug === slug);
}
