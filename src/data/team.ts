export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
  education?: { school: string; degree: string }[];
  experience?: string;
  skills: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [{
  slug: "dingsaier",
  name: "定赛尔",
  role: "全栈工程师",
  image: "/team/dingsaier.png",
  education: [
    { school: "澳大利亚墨尔本大学", degree: "硕士" },
    { school: "北京航空航天大学", degree: "学士" },
  ],
  experience: "曾就职于北京旷视科技（Face++）、软通动力，参与阿里云算法平台的后端开发、架构设计与全栈开发。",
  bio: "全栈交付：熟悉 React / Next.js / Vue 与 TypeScript 工程化，覆盖小程序与 Three.js 等前端场景。后端侧重高并发与分布式设计，使用 Spring Boot / Node.js，结合 Kafka、Flink 与 MySQL / Redis 等做性能与数据链路优化。熟悉 RAG、向量检索与 LangChain 等大模型应用落地，并负责 Docker、K8s 与 CI/CD 部署保障稳定运行。",
  skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite", "Webpack", "Three.js", "微信小程序", "Node.js", "Java", "Spring Boot", "Python", "golang", "高并发架构", "Kafka", "Flink", "MySQL", "PostgreSQL", "Redis", "gRPC", "RAG", "LangChain", "向量检索", "LLM API", "Docker", "Kubernetes", "CI/CD"],
}];

export const getTeamMember = (slug: string) => TEAM_MEMBERS.find(member => member.slug === slug);
