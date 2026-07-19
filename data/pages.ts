// Bespoke marketing-page copy (home, technology, about, OEM/ODM, contact, 404)
// in both languages, kept verbatim from the original markup. Product/category
// grids on these pages are rendered from products.ts / categories.ts.

import type { Lang } from "./types";
import type { IconName } from "@/components/FeatureIcon";

type L = Record<Lang, string>;

export interface Faq {
  q: L;
  a: L;
}

// Master FAQ list. The FAQ page shows all 6; Technology shows 0–3; Home shows 0–2.
export const faqs: Faq[] = [
  {
    q: { en: "How can a reverse osmosis system work without electricity?", zh: "反渗透净水器怎么可能不用电？" },
    a: {
      en: "Reverse osmosis only needs pressure, not electricity. Conventional RO machines add an electric booster pump; KomiBright systems are engineered with innovative self-stabilising valves, an integrated flow restrictor and a low-resistance waterway so that normal municipal tap pressure (from 1.5 bar) is enough to push water through the 0.0001 μm membrane.",
      zh: "反渗透需要的是压力，不是电。传统RO机靠电动增压泵提供压力；KomiBright 通过创新自稳压阀件、集成限流器和低阻力水路设计，让普通市政自来水压力（1.5公斤起）就足以把水压过0.0001μm的RO膜。",
    },
  },
  {
    q: { en: "What water pressure do I need?", zh: "需要多大的水压？" },
    a: {
      en: "C25R-series systems run on 21–70 PSI (1.5–5 bar). The KB-C100R direct-flow system needs 30–70 PSI (2–5 bar); with 3 bars of tap pressure it needs no pump kit at all. If your pressure is lower, a pump kit can be added.",
      zh: "C25R系列在21–70 PSI（1.5–5 bar）下工作。KB-C100R直饮机需要30–70 PSI（2–5 bar），水压达到3公斤即可完全免泵使用。水压偏低的地区可以加装泵组。",
    },
  },
  {
    q: { en: "How often do filters need replacing, and can I do it myself?", zh: "滤芯多久换一次？自己能换吗？" },
    a: {
      en: "Once a year — that's the whole maintenance schedule. One compound filter and one membrane, both designed for tool-free replacement in minutes. No technician visit needed.",
      zh: "一年一次，这就是全部的保养计划。一支复合滤芯加一支RO膜，都是免工具设计，几分钟换好，不需要师傅上门。",
    },
  },
  {
    q: { en: "What does 0.0001 μm filtration actually remove?", zh: "0.0001μm的过滤精度到底能去除什么？" },
    a: {
      en: "The RO membrane removes dissolved salts, heavy metal ions, bacteria, viruses and organic contaminants. Upstream, the compound filter removes sediment, rust, residual chlorine, odour and volatile organic compounds.",
      zh: "RO膜可去除溶解盐、重金属离子、细菌、病毒与有机污染物。在此之前，复合滤芯先去除泥沙、铁锈、余氯、异味和挥发性有机物。",
    },
  },
  {
    q: { en: "Do you support OEM / ODM orders?", zh: "支持OEM/ODM贴牌吗？" },
    a: {
      en: "Yes. KomiBright is the original brand, original designer and patent owner, with a professional R&D department. OEM and ODM orders are welcome — housing colours and configurations can be customized, and our team supports you from engineering through export.",
      zh: "支持。KomiBright 是原创品牌、原创设计与专利持有者，拥有专业研发部门。欢迎OEM与ODM订单——外壳颜色与配置均可定制，从工程到出口全程有团队对接。",
    },
  },
  {
    q: { en: "Where does KomiBright ship?", zh: "KomiBright 出口到哪些地区？" },
    a: {
      en: "Our products are used in nearly 30 countries worldwide. From raw material purchasing to export, every step is controlled by IQC, PQC and OQC quality processes. Contact us for lead times and shipping terms for your market.",
      zh: "我们的产品已进入全球近30个国家。从原材料采购到出口交付，全程由IQC、PQC、OQC质检流程把控。欢迎联系我们了解您所在市场的交期与贸易条款。",
    },
  },
];

// ------------------------------- Home ---------------------------------------
export interface TrustItem {
  b: string;
  label: L;
  count?: number;
}
export interface Chip {
  strong: string;
  label: L;
}
export interface FeatureItem {
  icon: IconName;
  h3: L;
  p: L;
}

export const homeFeaturedSlugs = [
  "kb-c25r-electricity-free-reverse-osmosis-system",
  "kb-c25rh-countertop-ro-water-purifier-smart-jar",
  "kb-c100r-tankless-direct-flow-ro-system",
  "kb-a95r-outdoor-ro-water-purifier",
  "stainless-steel-uf-system-washable-pvdf",
];

export const home = {
  heroEyebrow: { en: "Pumpless reverse osmosis · Since 2009", zh: "免泵反渗透 · 始于2009" } as L,
  heroH1Lines: {
    en: ["Pure water. No pump.", "No electricity."],
    zh: ["好水，不用电。"],
  } as Record<Lang, string[]>,
  heroLead: {
    en: "KomiBright builds patented reverse osmosis and ultrafiltration systems that run on tap pressure alone — 0.0001 μm purified water, with one filter change a year.",
    zh: "KomiBright 专注免泵免电的反渗透与超滤系统——只靠自来水压力，就能得到0.0001μm级纯水，滤芯一年只换一次。",
  } as L,
  heroBtnPrimary: { en: "Explore products", zh: "浏览产品" } as L,
  heroBtnGhost: { en: "How it works", zh: "了解技术原理" } as L,
  trust: [
    { b: "2009", label: { en: "Established", zh: "创立" } },
    { b: "30", count: 30, label: { en: "Countries served", zh: "服务国家（近）" } },
    { b: "0.0001μm", label: { en: "RO filtration", zh: "RO过滤精度" } },
    { b: "1×", label: { en: "Filter change / year", zh: "每年换芯次数" } },
  ] as TrustItem[],
  heroImgAlt: {
    en: "Clean drinking water from a KomiBright reverse osmosis system",
    zh: "KomiBright反渗透净水器带来的洁净饮用水",
  } as L,
  chips: [
    { strong: "0 W", label: { en: "electricity used", zh: "用电量" } },
    { strong: "1.5 bar", label: { en: "is all it needs", zh: "水压即可驱动" } },
    { strong: "1×/yr", label: { en: "filter change", zh: "更换滤芯" } },
  ] as Chip[],
  marquee: {
    en: [
      "0.0001 μm RO filtration",
      "No pump · no electricity",
      "One filter change a year",
      "Patented technology",
      "Users in ~30 countries",
      "OEM / ODM welcome",
      "Since 2009",
    ],
    zh: [
      "0.0001μm RO过滤",
      "免泵 · 免电",
      "滤芯一年一换",
      "专利技术",
      "近30个国家的用户",
      "支持OEM/ODM",
      "始于2009",
    ],
  } as Record<Lang, string[]>,
  rangesEyebrow: { en: "Product ranges", zh: "产品系列" } as L,
  rangesH2: { en: "Five ranges, one philosophy: keep it simple", zh: "五大系列，同一个理念：大道至简" } as L,
  rangesLead: {
    en: "From under-sink RO to whole-house stainless steel UF — every KomiBright system is designed to install easily, run without power, and maintain itself with one yearly filter change.",
    zh: "从橱下RO到全屋不锈钢超滤——每一台KomiBright都易于安装、无需用电，一年只换一次滤芯。",
  } as L,
  whyEyebrow: { en: "Why KomiBright", zh: "为什么选KomiBright" } as L,
  whyH2: { en: "Less does more", zh: "少，即是多" } as L,
  features: [
    {
      icon: "bolt",
      h3: { en: "Zero electricity", zh: "全程零用电" },
      p: {
        en: "Runs on municipal tap pressure from 1.5 bar. No pump to fail, no socket needed, no noise.",
        zh: "1.5公斤自来水压即可运行。没有会坏的泵，不占插座，零噪音。",
      },
    },
    {
      icon: "battery",
      h3: { en: "One filter a year", zh: "一年只换一次芯" },
      p: {
        en: "A super compound filter replaces the usual 3–5 cartridges. Swap it — and the membrane — once a year.",
        zh: "一支超级复合滤芯替代常见的3–5支。每年更换一次滤芯与膜即可。",
      },
    },
    {
      icon: "wrench",
      h3: { en: "DIY installation", zh: "自己就能装" },
      p: {
        en: "Modularised waterways and no redundant fittings: install and maintain it yourself, no technician.",
        zh: "模块化水路、无多余接头：安装维护自己动手，不用等师傅。",
      },
    },
    {
      icon: "shield",
      h3: { en: "Patented & controlled", zh: "专利与品控" },
      p: {
        en: "Original designs and patents, with IQC / PQC / OQC control from raw material to export.",
        zh: "原创设计与专利加持，从原材料到出口全程IQC/PQC/OQC品控。",
      },
    },
  ] as FeatureItem[],
  featuredEyebrow: { en: "Featured products", zh: "明星产品" } as L,
  featuredH2: { en: "The systems our partners reorder", zh: "合作伙伴持续返单的机型" } as L,
  techEyebrow: { en: "Technology", zh: "核心技术" } as L,
  techH2: { en: "Reverse osmosis, minus the pump", zh: "反渗透，去掉泵" } as L,
  techP: {
    en: "RO needs pressure, not power. Self-stabilising valves, an integrated flow restrictor and a low-resistance waterway let ordinary tap pressure push water through a 0.0001 μm membrane — and even flush the membrane automatically.",
    zh: "反渗透需要的是压力，不是电。自稳压阀件、集成限流器与低阻力水路，让普通自来水压力就能把水压过0.0001μm的RO膜——还能自动完成膜冲洗。",
  } as L,
  techChecklist: {
    en: ["Auto membrane flushing without power", "One housing, multi-membrane function", "Food-grade PP5 materials throughout"],
    zh: ["无需用电的RO膜自动冲洗", "单壳体多膜功能一体化", "全机PP5食品级材料"],
  } as Record<Lang, string[]>,
  techBtn: { en: "See the technology", zh: "了解技术细节" } as L,
  techImgAlt: { en: "KB-C25R housing structure", zh: "KB-C25R壳体结构" } as L,
  aboutEyebrow: { en: "About us", zh: "关于我们" } as L,
  aboutH2: { en: "A factory obsessed with simplicity since 2009", zh: "一家从2009年起死磕「简单」的工厂" } as L,
  aboutP: {
    en: "RO makes the cleanest water, but traditional machines are hard to install, rely on failure-prone pumps and juggle multiple filters. KomiBright was founded to fix exactly that — following the KISS principle: Keep It Simple, Stupid. Today our products serve users in nearly 30 countries.",
    zh: "RO出水最干净，但传统机器安装难、靠易坏的泵、滤芯又多又乱。KomiBright 就是为了解决这些而创立的——我们信奉KISS原则：Keep It Simple, Stupid。如今产品已服务全球近30个国家的用户。",
  } as L,
  aboutBtnPrimary: { en: "Our story", zh: "了解我们" } as L,
  aboutBtnGhost: { en: "OEM / ODM", zh: "OEM / ODM" } as L,
  aboutImgAlt: { en: "KomiBright factory workshop", zh: "KomiBright工厂车间" } as L,
  faqEyebrow: { en: "FAQ", zh: "FAQ" } as L,
  faqH2: { en: "Questions, answered", zh: "常见问题" } as L,
  faqAllLink: { en: "All questions →", zh: "查看全部问题 →" } as L,
  lifestyleImg: "/assets/img/lifestyle-droplet.webp",
  lifestyleAlt: {
    en: "A water droplet rippling on a surface of pure water",
    zh: "纯水表面荡开的水滴涟漪",
  } as L,
  lifestyleCap: {
    en: "0.0001 μm pure water — from tap pressure alone.",
    zh: "0.0001μm 纯水——只靠自来水压力。",
  } as L,
};

// ---------------------------- Technology ------------------------------------
export interface Step {
  h3: L;
  p: L;
}

export const technology = {
  crumb: { en: "Technology", zh: "核心技术" } as L,
  eyebrow: { en: "Core technology", zh: "核心技术" } as L,
  h1: { en: "How reverse osmosis works without electricity", zh: "反渗透如何做到不用电" } as L,
  leadP: {
    en: "Reverse osmosis needs pressure, not power. Conventional machines add an electric booster pump to create that pressure — KomiBright removes the need for it.",
    zh: "反渗透需要的是压力，不是电。传统机器用电动增压泵制造压力——KomiBright 则从设计上去掉了对泵的依赖。",
  } as L,
  p2: {
    en: "Through self-stabilising valves, an integrated flow restrictor and a low-resistance modularised waterway, ordinary municipal tap pressure (from 1.5 bar) is enough to drive water through a 0.0001 μm RO membrane. The same design flushes the membrane automatically, extending its life — all with zero watts.",
    zh: "通过自稳压阀件、集成限流器和低阻力的模块化水路，普通市政自来水压力（1.5公斤起）就足以把水压过0.0001μm的RO膜。同样的设计还能自动完成膜冲洗、延长膜寿命——全程零瓦特。",
  } as L,
  stepsH2: { en: "Three stages to pure water", zh: "三道关口，滴滴纯净" } as L,
  steps: [
    {
      h3: { en: "PP sediment layer", zh: "PP棉拦截层" },
      p: { en: "The pleated PP layer removes dust, rust, sand, sludge and other suspended particles.", zh: "折叠PP棉去除灰尘、铁锈、泥沙等悬浮颗粒物。" },
    },
    {
      h3: { en: "Activated carbon block", zh: "活性炭精滤层" },
      p: { en: "Precision carbon removes residual chlorine, odours and volatile organic compounds.", zh: "精密活性炭去除余氯、异味与挥发性有机物。" },
    },
    {
      h3: { en: "0.0001 μm RO membrane", zh: "0.0001μm RO膜" },
      p: { en: "The membrane removes dissolved salts, heavy metal ions, bacteria and viruses — leaving pure water.", zh: "RO膜去除溶解盐、重金属离子、细菌与病毒——只留下纯水。" },
    },
  ] as Step[],
  splitH2: { en: "What the pumpless design changes", zh: "免泵设计带来了什么" } as L,
  splitImgAlt: { en: "KB-C25R housing structure cutaway", zh: "KB-C25R壳体结构剖面" } as L,
  splitChecklist: {
    en: [
      "No booster pump — the most failure-prone part is simply gone",
      "Auto membrane flushing without power",
      "One compound filter replaces 3–5 cartridges",
      "Yearly, tool-free filter replacement by anyone",
      "Silent operation, no power socket required",
      "Food-grade PP5 materials throughout",
    ],
    zh: [
      "没有增压泵——最容易坏的部件直接消失",
      "无需用电的RO膜自动冲洗",
      "一支复合滤芯替代3–5支",
      "滤芯一年一换，免工具人人会换",
      "静音运行，不占插座",
      "全机PP5食品级材料",
    ],
  } as Record<Lang, string[]>,
  faqH2: { en: "Technical questions", zh: "技术相关问题" } as L,
};

// ------------------------------- About --------------------------------------
export const about = {
  crumb: { en: "About Us", zh: "关于我们" } as L,
  eyebrow: { en: "About KomiBright", zh: "关于KomiBright" } as L,
  h1: { en: "Keep It Simple — since 2009", zh: "大道至简，始于2009" } as L,
  p1: {
    en: "RO technology produces the cleanest water quality — but traditional RO machines are hard to install, depend on pumps that fail over time, and juggle multiple filters that consumers struggle to track and replace. KomiBright was established in 2009 to solve exactly these pain points.",
    zh: "RO技术出水水质最干净——但传统RO机安装困难、依赖日久易坏的泵，滤芯又多又杂，用户记不住更换时间，也很难自己动手换。KomiBright 在2009年成立，就是为了解决这些痛点。",
  } as L,
  p2: {
    en: "Our engineering follows the KISS concept — Keep It Simple, Stupid — so that consumers truly fall in love with the product after use. Today, users in nearly 30 countries trust KomiBright, the technological leader in electricity-free reverse osmosis.",
    zh: "我们的工程设计始终遵循KISS理念——Keep It Simple, Stupid——让用户在使用之后真正爱上产品。如今，全球近30个国家的用户信任KomiBright，我们也是免电反渗透领域的技术引领者。",
  } as L,
  trust: [
    { b: "2009", label: { en: "Established", zh: "创立年份" } },
    { b: "~30", label: { en: "Countries served", zh: "服务国家" } },
    { b: "4", label: { en: "Product generations", zh: "产品迭代次数" } },
  ] as TrustItem[],
  builtH2: { en: "What we're built on", zh: "我们的底气" } as L,
  builtImgAlt: { en: "KomiBright office building", zh: "KomiBright办公楼" } as L,
  features: [
    {
      icon: "shield",
      h3: { en: "Design capacity", zh: "设计能力" },
      p: { en: "Original brand, original designs, patent owner — with a professional R&D department. OEM & ODM received.", zh: "原创品牌、原创设计、专利持有——配备专业研发部门，承接OEM与ODM。" },
    },
    {
      icon: "globe",
      h3: { en: "Professional team", zh: "专业团队" },
      p: { en: "Excellent sales and production teams — united, concerted efforts to do better.", zh: "优秀的销售与生产团队——同心协力，精益求精。" },
    },
    {
      icon: "battery",
      h3: { en: "Quality control", zh: "质量管控" },
      p: { en: "All steps from raw material purchasing to export are controlled by IQC, PQC, OQC.", zh: "从原材料采购到产品出口，全程由IQC、PQC、OQC把控。" },
    },
    {
      icon: "wrench",
      h3: { en: "Efficiency & service", zh: "高效与服务" },
      p: { en: "Customizable products, technical support, and professional, fast pre-sales and after-sales service.", zh: "产品可定制、提供技术支持，售前售后专业、快速。" },
    },
  ] as FeatureItem[],
  cornerH2: { en: "Factory corner", zh: "工厂一角" } as L,
  cornerImgs: [
    { src: "/assets/img/factory-workshop.webp", alt: { en: "KomiBright workshop", zh: "KomiBright车间" } },
    { src: "/assets/img/factory-workshop2.webp", alt: { en: "KomiBright production line", zh: "KomiBright生产线" } },
    { src: "/assets/img/factory-office.webp", alt: { en: "KomiBright office building", zh: "KomiBright办公楼" } },
  ] as { src: string; alt: L }[],
  expoH2: { en: "Exhibitions", zh: "展会现场" } as L,
  expoP: {
    en: "KomiBright has gained many high-quality customers through exhibitions, big and small. Products have undergone four generations of updates — in pursuit of the most perfect.",
    zh: "通过大大小小的展会，KomiBright 结识了许多优质客户。产品已历经四代升级——只为追求更完美。",
  } as L,
  expoImgs: [
    { src: "/assets/img/expo-1.webp", alt: { en: "KomiBright exhibition booth", zh: "KomiBright展会展位" } },
    { src: "/assets/img/expo-2.webp", alt: { en: "KomiBright at a trade fair", zh: "KomiBright参展现场" } },
    { src: "/assets/img/expo-3.webp", alt: { en: "KomiBright exhibition team", zh: "KomiBright展会团队" } },
  ] as { src: string; alt: L }[],
  certEyebrow: { en: "Quality & trust", zh: "品质与信任" } as L,
  certH2: { en: "Certifications & compliance", zh: "认证与合规" } as L,
  certIntro: {
    en: "KomiBright's products and materials have earned a range of international quality certifications — WQA, CE, SGS, NSF, ISO 9001, ISO 14001, BSI and more — controlled from raw material through finished export.",
    zh: "KomiBright 的产品与材料已通过 WQA、CE、SGS、NSF、ISO 9001、ISO 14001、BSI 等多项国际质量认证——从原材料到成品出口，全程把控。",
  } as L,
  certs: [
    { acr: "CE", label: { en: "European Conformity", zh: "欧盟认证" } },
    { acr: "NSF", label: { en: "NSF International", zh: "NSF 认证" } },
    { acr: "SGS", label: { en: "SGS tested", zh: "SGS 检测" } },
    { acr: "WQA", label: { en: "Water Quality Association", zh: "美国水质协会" } },
    { acr: "ISO 9001", label: { en: "Quality management", zh: "质量管理体系" } },
    { acr: "ISO 14001", label: { en: "Environmental management", zh: "环境管理体系" } },
    { acr: "BSI", label: { en: "British Standards", zh: "英国标准协会" } },
    { acr: "RoHS", label: { en: "Restricted substances", zh: "有害物质限制" } },
    { acr: "FDA", label: { en: "Food-grade (Philippines)", zh: "食品级（菲律宾）" } },
    { acr: "WaterMark", label: { en: "Australia", zh: "澳大利亚认证" } },
  ] as { acr: string; label: L }[],
  certImgs: [
    {
      src: "/assets/img/cert-1.webp",
      w: 1023,
      h: 682,
      alt: {
        en: "KomiBright international quality certifications — WQA, CE, SGS, NSF, ISO",
        zh: "KomiBright 国际质量认证——WQA、CE、SGS、NSF、ISO",
      },
    },
    {
      src: "/assets/img/cert-2.webp",
      w: 1023,
      h: 402,
      alt: {
        en: "WaterMark certificates (Australia) for the Aquatower and Aquaflow series",
        zh: "澳大利亚 WaterMark 认证（Aquatower、Aquaflow 系列）",
      },
    },
  ] as { src: string; w: number; h: number; alt: L }[],
  lifestyleImg: "/assets/img/lifestyle-kitchen.webp",
  lifestyleAlt: {
    en: "A glass being filled with clean purified water in a bright kitchen",
    zh: "明亮厨房里倒入洁净纯水的玻璃杯",
  } as L,
  lifestyleCap: {
    en: "Clean water, made simple — since 2009.",
    zh: "把干净水做简单——始于2009。",
  } as L,
};

// ------------------------------ OEM / ODM -----------------------------------
export const oem = {
  crumb: { en: "OEM / ODM", zh: "OEM / ODM" } as L,
  eyebrow: { en: "OEM / ODM", zh: "OEM / ODM" } as L,
  h1: { en: "Your brand, our patented platform", zh: "您的品牌，我们的专利平台" } as L,
  lead: {
    en: "KomiBright is the original brand, original designer and patent owner of pumpless RO technology — with a professional R&D department and OEM & ODM orders welcome.",
    zh: "KomiBright 是免泵RO技术的原创品牌、原创设计与专利持有者——拥有专业研发部门，欢迎OEM与ODM订单。",
  } as L,
  features: [
    {
      icon: "shield",
      h3: { en: "Design capacity", zh: "设计能力" },
      p: { en: "Original brand, original designs, patent owner. Professional R&D department; OEM & ODM received.", zh: "原创品牌、原创设计、专利持有。专业研发部门，承接OEM与ODM。" },
    },
    {
      icon: "globe",
      h3: { en: "Professional team", zh: "专业团队" },
      p: { en: "Excellent sales and production teams working in concert — from first inquiry to after-sales.", zh: "优秀的销售与生产团队协同作战——从首次询盘到售后支持。" },
    },
    {
      icon: "battery",
      h3: { en: "Quality control", zh: "质量管控" },
      p: { en: "Every step from raw material purchasing to export is controlled by IQC, PQC and OQC.", zh: "从原材料采购到产品出口，全程由IQC、PQC、OQC把控。" },
    },
    {
      icon: "wrench",
      h3: { en: "Efficient service", zh: "高效服务" },
      p: { en: "Customizable products, technical support, and fast professional pre-sales and after-sales service.", zh: "产品可定制，提供技术支持，售前售后专业、快速、高效。" },
    },
  ] as FeatureItem[],
  splitH2: { en: "Customized housings on a proven platform", zh: "成熟平台，定制外观" } as L,
  splitP: {
    en: "Build your market's water purifier on the C25R pumpless platform: your housing colours and your brand, backed by the same patented waterway, super compound filter and yearly-replacement design.",
    zh: "在C25R免泵平台上打造属于您市场的净水器：您的外壳配色与品牌，内核仍是同一套专利水路、超级复合滤芯与一年一换设计。",
  } as L,
  splitChecklist: {
    en: [
      "Housing colours customized per order",
      "Patented pumpless RO waterway",
      "Export experience across ~30 countries",
      "Technical support through your launch",
    ],
    zh: ["外壳颜色按订单定制", "专利免泵RO水路", "近30国出口经验", "上市全程技术支持"],
  } as Record<Lang, string[]>,
  splitBtn: { en: "See the OEM product", zh: "查看OEM产品" } as L,
  splitBtnSlug: "customized-housing-ro-water-purifier",
  splitImgAlt: { en: "Customized housing RO water purifier", zh: "定制外观RO净水器" } as L,

  // ---- Process timeline ----
  processEyebrow: { en: "How it works", zh: "合作流程" } as L,
  processH2: { en: "From first inquiry to your loading dock", zh: "从首次询盘到发货装柜" } as L,
  process: [
    { h3: { en: "Inquiry & consultation", zh: "需求沟通" }, p: { en: "Tell us your target market, volume and customization needs — we advise on the right platform and configuration.", zh: "告诉我们您的目标市场、预计数量与定制需求，我们为您推荐合适的平台与配置。" } },
    { h3: { en: "Samples & customization", zh: "打样与定制" }, p: { en: "We build samples in your housing colours and branding for your review.", zh: "按您的外壳配色与品牌打样，供您确认。" } },
    { h3: { en: "Sign-off", zh: "确认封样" }, p: { en: "You approve the sample, specs and packaging; we lock the production plan.", zh: "您确认样机、规格与包装，我们锁定生产方案。" } },
    { h3: { en: "Production & QC", zh: "生产与品控" }, p: { en: "Mass production under IQC / PQC / OQC control, from raw material to finished unit.", zh: "量产全程IQC/PQC/OQC把控，从原材料到成品。" } },
    { h3: { en: "Export & support", zh: "出口与支持" }, p: { en: "We handle export documentation and ship to your port, with technical support through your launch.", zh: "我们处理出口单证并发运至您的港口，上市全程提供技术支持。" } },
  ] as Step[],

  // ---- What you can customize ----
  customizeEyebrow: { en: "Customization", zh: "可定制项" } as L,
  customizeH2: { en: "Make it unmistakably your brand", zh: "打造专属于您的品牌" } as L,
  customize: [
    { icon: "wrench", h3: { en: "Housing & colour", zh: "外壳与配色" }, p: { en: "Your housing colours and surface finish.", zh: "您的外壳颜色与表面处理。" } },
    { icon: "shield", h3: { en: "Branding", zh: "品牌标识" }, p: { en: "Your logo, silk-screen print and product naming.", zh: "您的LOGO、丝印与产品命名。" } },
    { icon: "battery", h3: { en: "Packaging", zh: "包装" }, p: { en: "Custom retail box, manual and inserts.", zh: "定制彩盒、说明书与内衬。" } },
    { icon: "globe", h3: { en: "Configuration", zh: "配置" }, p: { en: "Filter set, flow rate, with or without pump kit.", zh: "滤芯组合、通量、是否含泵组。" } },
  ] as FeatureItem[],

  // ---- Quality & certifications ----
  qualityEyebrow: { en: "Quality & compliance", zh: "品质与合规" } as L,
  qualityH2: { en: "Controlled from raw material to export", zh: "从原材料到出口，全程可控" } as L,
  qualityP: {
    en: "Every unit passes a three-stage quality gate, and our products and materials carry international certifications recognized by buyers worldwide.",
    zh: "每一台产品都要通过三道质检关口；产品与材料持有全球买家认可的多项国际认证。",
  } as L,
  qc: [
    { h3: { en: "IQC — Incoming", zh: "IQC 来料检验" }, p: { en: "Raw materials and components are inspected before they enter the line.", zh: "原材料与零部件入线前检验。" } },
    { h3: { en: "PQC — In-process", zh: "PQC 制程检验" }, p: { en: "Checks at every assembly stage keep quality consistent.", zh: "每个装配环节在线检查，保证品质稳定。" } },
    { h3: { en: "OQC — Outgoing", zh: "OQC 出货检验" }, p: { en: "Final inspection and testing before packing and export.", zh: "包装出口前的成品检验与测试。" } },
  ] as Step[],
  certH2: { en: "Certifications held", zh: "持有认证" } as L,

  // ---- Factory ----
  factoryH2: { en: "Inside the factory", zh: "工厂实拍" } as L,
  factoryP: {
    en: "Original brand, original designs, patent owner — engineered and built in-house since 2009.",
    zh: "原创品牌、原创设计、专利持有——自2009年起自主研发与制造。",
  } as L,
  factoryImgs: [
    { src: "/assets/img/oem-qc.webp", alt: { en: "Quality-control inspection of a KomiBright water purifier", zh: "KomiBright 净水器成品质检" } },
    { src: "/assets/img/factory-workshop2.webp", alt: { en: "KomiBright production line", zh: "KomiBright 生产线" } },
    { src: "/assets/img/oem-export.webp", alt: { en: "Finished units packed and palletised for export", zh: "成品打包码垛，待出口发运" } },
  ] as { src: string; alt: L }[],

  // ---- Export reach ----
  exportEyebrow: { en: "Global reach", zh: "全球出口" } as L,
  exportH2: { en: "Trusted in nearly 30 countries", zh: "近30个国家的信赖之选" } as L,
  exportP: {
    en: "KomiBright exports across the Middle East, Russia, Europe and Southeast Asia, with export experience and documentation handled in-house.",
    zh: "KomiBright 产品远销中东、俄罗斯、欧洲与东南亚，出口经验丰富，单证自主处理。",
  } as L,
  exportStats: [
    { b: "~30", label: { en: "Countries served", zh: "服务国家" } },
    { b: "2009", label: { en: "Exporting since", zh: "出口始于" } },
    { b: "4", label: { en: "Product generations", zh: "产品迭代" } },
  ] as TrustItem[],
  exportRegions: {
    en: ["Middle East", "Russia", "Europe", "Southeast Asia"],
    zh: ["中东", "俄罗斯", "欧洲", "东南亚"],
  } as Record<Lang, string[]>,

  // ---- Order terms (PLACEHOLDER figures — confirm before go-live) ----
  termsH2: { en: "Order terms", zh: "订单条款" } as L,
  termsNote: {
    en: "Typical guidance — final terms are confirmed per project.",
    zh: "以下为一般参考，最终条款按项目确认。",
  } as L,
  terms: [
    { label: { en: "MOQ", zh: "起订量" }, value: { en: "Flexible", zh: "灵活" }, note: { en: "Order-dependent — tell us your volume.", zh: "视订单而定——请告知您的数量。" } },
    { label: { en: "Lead time", zh: "交期" }, value: { en: "≈30–45 days", zh: "约 30–45 天" }, note: { en: "Mass production after sign-off (typical).", zh: "封样后量产（一般情况）。" } },
    { label: { en: "Samples", zh: "样机" }, value: { en: "2–3 weeks", zh: "2–3 周" }, note: { en: "Paid; creditable against bulk orders.", zh: "付费打样，可抵扣批量订单。" } },
  ] as { label: L; value: L; note: L }[],

  // ---- OEM quote form ----
  quoteEyebrow: { en: "Request a quote", zh: "获取报价" } as L,
  quoteH2: { en: "Start your OEM project", zh: "启动您的OEM项目" } as L,
  quoteP: {
    en: "Tell us about your market and volume — we'll come back with a tailored proposal.",
    zh: "告诉我们您的市场与数量——我们将提供量身定制的方案。",
  } as L,
  quoteSubject: { en: "OEM quote request", zh: "OEM报价请求" } as L,
  quoteMarket: { en: "Target market", zh: "目标市场" } as L,
  quoteVolume: { en: "Estimated volume", zh: "预计数量" } as L,
  quotePlaceholder: {
    en: "Which products? Customization needs — housing colour, branding, packaging?",
    zh: "对哪些产品感兴趣？定制需求——外壳配色、品牌、包装？",
  } as L,
};

// ------------------------------ Contact -------------------------------------
export const contactPage = {
  crumb: { en: "Contact Us", zh: "联系我们" } as L,
  eyebrow: { en: "Contact", zh: "联系方式" } as L,
  h1: { en: "Talk to the factory directly", zh: "直接和工厂对话" } as L,
  lead: {
    en: "Distributor terms, OEM projects, samples or technical questions — reach us on WhatsApp for the fastest reply, or send an inquiry below.",
    zh: "经销条款、OEM项目、样机或技术问题——通过WhatsApp联系响应最快，也可以在下方提交询盘。",
  } as L,
  cardWhatsapp: { en: "WhatsApp", zh: "WhatsApp" } as L,
  cardEmail: { en: "Email", zh: "邮箱" } as L,
  cardPhone: { en: "Phone", zh: "电话" } as L,
  cardAddress: { en: "Address", zh: "地址" } as L,
  formSubject: { en: "Website inquiry", zh: "官网询盘" } as L,
  labelName: { en: "Name", zh: "姓名" } as L,
  labelCompany: { en: "Company", zh: "公司" } as L,
  labelEmail: { en: "Email", zh: "邮箱" } as L,
  labelMessage: { en: "Message", zh: "留言" } as L,
  placeholder: {
    en: "Which products are you interested in? Target market? Estimated quantity?",
    zh: "您对哪些产品感兴趣？目标市场？预计数量？",
  } as L,
  submit: { en: "Compose inquiry email", zh: "生成询盘邮件" } as L,
  formOk: {
    en: "Your email app should open with the inquiry pre-filled. If not, email us directly at info@komibright.com.",
    zh: "邮件应用会自动打开并填好询盘内容。如未打开，请直接发邮件至 info@komibright.com。",
  } as L,
};

// -------------------------------- 404 ---------------------------------------
export const notFound = {
  lead: { en: "This page seems to have evaporated.", zh: "这个页面好像蒸发了。" } as L,
  back: { en: "Back to home", zh: "返回首页" } as L,
};
