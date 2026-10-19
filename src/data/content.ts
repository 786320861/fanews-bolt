import type { LucideIcon } from 'lucide-react'
import {
  Database,
  BrainCircuit,
  Sparkles,
  Landmark,
  Newspaper,
  Building2,
  Radar,
  FileText,
  TrendingUp,
  ShieldCheck,
  ScanSearch,
  Network,
  MessageSquareText,
  Globe2,
  LineChart,
  Cpu,
} from 'lucide-react'

export interface Tier {
  icon: LucideIcon
  stage: string
  title: string
  en: string
  description: string
  points: string[]
  accent: string
}

export const INTELLIGENCE_TIERS: Tier[] = [
  {
    icon: Database,
    stage: '01',
    title: '信息',
    en: 'INFORMATION',
    description:
      '将多渠道异构、非结构化的海量数据，进行清洗、过滤、格式化与索引化，通过智能打标与分类，产出干净可用的结构化数据资产。',
    points: ['多源数据汇聚', '智能清洗过滤', '自动分类打标'],
    accent: 'from-secondary/80 to-secondary/30',
  },
  {
    icon: BrainCircuit,
    stage: '02',
    title: '知识',
    en: 'KNOWLEDGE',
    description:
      '基于大数据、人工智能与机器学习技术，结合自研算法对结构化数据进行深度处理，提炼有价值的情报与可落地的分析洞察。',
    points: ['自研算法引擎', '深度语义理解', '多维分析洞察'],
    accent: 'from-primary/80 to-primary/30',
  },
  {
    icon: Sparkles,
    stage: '03',
    title: '智能',
    en: 'INTELLIGENCE',
    description:
      '围绕具体应用场景与业务用例，以数据深度挖掘驱动智能化内容服务，满足用户新生态需求，真正实现内容的智能创造。',
    points: ['场景化智能应用', '内容智能创造', '生态级协同服务'],
    accent: 'from-accent/80 to-primary/40',
  },
]

export interface Stat {
  value: number
  suffix: string
  label: string
  sub: string
}

export const STATS: Stat[] = [
  { value: 60, suffix: '亿+', label: '日处理数据量', sub: '海量多源内容实时接入' },
  { value: 1200, suffix: '+', label: '合作机构', sub: '覆盖政务 / 媒体 / 企业' },
  { value: 24, suffix: '×7', label: '智能监控', sub: '全时段舆情感知与预警' },
  { value: 99.9, suffix: '%', label: '数据服务可用性', sub: '企业级稳定可靠保障' },
]

export interface Solution {
  icon: LucideIcon
  title: string
  en: string
  description: string
  features: string[]
  accent: string
}

export const SOLUTIONS: Solution[] = [
  {
    icon: Landmark,
    title: '政务',
    en: 'GOVERNMENT',
    description:
      '面向政府部门的综合解决方案，涵盖数据汇聚、宣传力指数、数据交换、舆情与感知洞察等核心能力，助力数字政府建设。',
    features: ['宣传力指数', '舆情感知预警', '政务数据交换', '城市品牌监测'],
    accent: 'from-[#38bdf8] to-[#2563eb]',
  },
  {
    icon: Newspaper,
    title: '媒体',
    en: 'MEDIA',
    description:
      '为媒体机构提供内容生产、新闻制作、内容交换、版权咨询及技术咨询等一体化解决方案，赋能智能融媒转型。',
    features: ['智能内容生产', '融媒采编中台', '版权保护服务', '传播效果评估'],
    accent: 'from-[#9E7FFF] to-[#6366f1]',
  },
  {
    icon: Building2,
    title: '企业',
    en: 'ENTERPRISE',
    description:
      '帮助企业用好数据与信息，提供智能经营洞察、商业管理、竞品分析、舆情与感知洞察等解决方案，驱动业务增长。',
    features: ['智能经营洞察', '竞品监测分析', '品牌声誉管理', '市场趋势研判'],
    accent: 'from-[#f472b6] to-[#a855f7]',
  },
]

export interface Product {
  icon: LucideIcon
  title: string
  en: string
  description: string
  tag: string
  metric: string
  metricLabel: string
}

export const PRODUCTS: Product[] = [
  {
    icon: Radar,
    title: '舆情智能监测',
    en: 'SENTIMENT MONITOR',
    description:
      '全媒体、全渠道的实时舆情感知与预警平台，以智能算法识别风险、研判趋势，让每一次舆论波动都尽在掌握。',
    tag: '实时感知',
    metric: '10亿',
    metricLabel: '日均监测数据',
  },
  {
    icon: FileText,
    title: '内容智能生产',
    en: 'CONTENT ENGINE',
    description:
      '以 AI 驱动的内容创作与生产工作台，支持智能选题、自动成稿、多模态编辑与一键分发，重塑内容生产流程。',
    tag: 'AI 创作',
    metric: '5万',
    metricLabel: '日均生成内容',
  },
  {
    icon: LineChart,
    title: '数据洞察平台',
    en: 'INSIGHT STUDIO',
    description:
      '面向经营决策的数据分析与可视化平台，将结构化数据转化为可交互的洞察仪表盘，辅助管理者快速决策。',
    tag: '决策支持',
    metric: '120+',
    metricLabel: '分析模型',
  },
  {
    icon: Network,
    title: '内容交换网络',
    en: 'CONTENT EXCHANGE',
    description:
      '打通机构间内容流通的价值网络，提供版权授权、内容交换与确权服务，构建健康可持续的内容生态。',
    tag: '生态协同',
    metric: '3000+',
    metricLabel: '生态伙伴',
  },
  {
    icon: ShieldCheck,
    title: '安全合规服务',
    en: 'COMPLIANCE',
    description:
      '面向内容安全与合规需求，提供智能审核、敏感信息识别与风险拦截能力，守护品牌与平台的内容底线。',
    tag: '安全防护',
    metric: '99.9%',
    metricLabel: '拦截准确率',
  },
  {
    icon: Cpu,
    title: '行业大模型',
    en: 'DOMAIN LLM',
    description:
      '基于海量行业语料训练的内容智能大模型，深度理解传媒与政务场景语义，为上层应用提供通用智能底座。',
    tag: '前沿引擎',
    metric: '180B',
    metricLabel: '模型参数',
  },
]

export interface Client {
  name: string
  kind: string
}

export const CLIENTS: Client[] = [
  { name: '新华社系媒体', kind: '央级媒体' },
  { name: '省级融媒集团', kind: '媒体机构' },
  { name: '地市新闻网站', kind: '地方媒体' },
  { name: '政务发布矩阵', kind: '政府机构' },
  { name: '垂直行业门户', kind: '行业媒体' },
  { name: '大型品牌企业', kind: '企业客户' },
]

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export const TIMELINE: TimelineItem[] = [
  {
    year: '2012',
    title: '公司成立',
    description: '杭州凡闻科技成立于杭州，专注大数据与内容科技领域。',
  },
  {
    year: '2015',
    title: '媒体合作加速',
    description: '与全国多家主流媒体建立合作，构建内容交换与版权服务体系。',
  },
  {
    year: '2019',
    title: 'AI 能力升级',
    description: '全面引入人工智能与机器学习，推出智能内容生产与舆情平台。',
  },
  {
    year: '2023',
    title: '智能生态成形',
    description: '发布行业大模型与内容智能体系，服务网络覆盖政务、媒体与企业。',
  },
]

export interface Technology {
  icon: LucideIcon
  title: string
  en: string
  description: string
}

export const TECHNOLOGIES: Technology[] = [
  {
    icon: Database,
    title: '大数据引擎',
    en: 'BIG DATA',
    description: '分布式存储与流式计算，支撑日均数十亿条数据的实时处理。',
  },
  {
    icon: BrainCircuit,
    title: '机器学习平台',
    en: 'MACHINE LEARNING',
    description: '自研算法框架与模型训练体系，持续迭代智能分析能力。',
  },
  {
    icon: ScanSearch,
    title: '自然语言处理',
    en: 'NLP',
    description: '中文语义理解、情感分析与知识图谱，理解内容背后的价值。',
  },
  {
    icon: Globe2,
    title: '全媒体接入',
    en: 'OMNI ACCESS',
    description: '覆盖新闻、社交、政务、行业等多源渠道的实时数据接入网络。',
  },
]

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export const CONTACTS: ContactInfo[] = [
  { icon: MessageSquareText, label: '咨询热线', value: '0571-8533 1960', href: 'tel:057185331960' },
  { icon: Globe2, label: '商务邮箱', value: 'info@cnfanews.com', href: 'mailto:info@cnfanews.com' },
  { icon: ShieldCheck, label: '技术支持', value: 'support@cnfanews.com', href: 'mailto:support@cnfanews.com' },
]

export const HERO_KEYWORDS = ['内容智能', '舆情洞察', '数据中台', '行业大模型', '智能生产', '数字政务']
