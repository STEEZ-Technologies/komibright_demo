// Global site chrome copy (header, footer, CTA band, contact) in both languages.
// Kept verbatim from the original markup.

import type { Lang } from "./types";

type L = Record<Lang, string>;

export const WHATSAPP_NUMBER = "886932137562";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

// Prefilled "learn more" WhatsApp link used by header + CTA band.
export const WHATSAPP_GENERAL: L = {
  en: `${WHATSAPP_BASE}?text=Hi%20KomiBright%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20water%20purification%20systems.`,
  zh: `${WHATSAPP_BASE}?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E8%B4%B5%E5%8F%B8%E7%9A%84%E5%87%80%E6%B0%B4%E7%B3%BB%E7%BB%9F%E3%80%82`,
};

export const contact = {
  phoneDisplay: "+86-400-068-0889",
  phoneHref: "tel:+864000680889",
  email: "info@komibright.com",
  emailHref: "mailto:info@komibright.com",
  whatsappDisplay: "+886932137562",
  youtube: "https://www.youtube.com/@maymaylee3137",
  address: {
    en: "202, Bldg. B (Der-Bi-E), No. 6, Hua Zhong Rd., Minhang District, Shanghai, China",
    zh: "中国上海市闵行区华中路6号B栋202室",
  } as L,
};

export const t = {
  brand: "KomiBright",
  logoAlt: "KomiBright logo",
  homeAria: "KomiBright home",
  menuAria: "Menu",
  langAria: "Language",
  mainNavAria: "Main",
  whatsappLabel: { en: "WhatsApp", zh: "WhatsApp咨询" } as L,
  nav: {
    home: { en: "Home", zh: "首页" } as L,
    products: { en: "Products", zh: "产品中心" } as L,
    allProducts: { en: "All Products", zh: "全部产品" } as L,
    allProductsSmall: { en: "13 products, 5 ranges", zh: "13款产品，5大系列" } as L,
    technology: { en: "Technology", zh: "核心技术" } as L,
    oem: { en: "OEM / ODM", zh: "OEM代工" } as L,
    about: { en: "About", zh: "关于我们" } as L,
    contact: { en: "Contact", zh: "联系我们" } as L,
  },
  footer: {
    blurb: {
      en: "Specialized manufacturer of electricity-free reverse osmosis water purification systems since 2009. Original brand, original designs, patent owner.",
      zh: "自2009年起专注免电反渗透净水系统的专业制造商。原创品牌、原创设计、专利持有者。",
    } as L,
    productsHeading: { en: "Products", zh: "产品中心" } as L,
    companyHeading: { en: "Company", zh: "公司" } as L,
    contactHeading: { en: "Contact", zh: "联系方式" } as L,
    company: {
      about: { en: "About Us", zh: "关于我们" } as L,
      technology: { en: "Technology", zh: "核心技术" } as L,
      oem: { en: "OEM / ODM", zh: "OEM / ODM" } as L,
      faq: { en: "FAQ", zh: "常见问题" } as L,
      contact: { en: "Contact Us", zh: "联系我们" } as L,
    },
    rights: {
      en: "© 2026 KomiBright. All rights reserved.",
      zh: "© 2026 KomiBright. 保留所有权利。",
    } as L,
    youtube: { en: "YouTube", zh: "YouTube" } as L,
  },
  cta: {
    h2: { en: "Ready to talk water?", zh: "聊聊您的净水需求" } as L,
    p: {
      en: "Distributor pricing, OEM projects or a single sample — our team replies fast on WhatsApp and email.",
      zh: "无论是经销价格、OEM项目还是单台样机——欢迎通过WhatsApp或邮件联系，我们会尽快回复。",
    } as L,
    whatsapp: { en: "WhatsApp", zh: "WhatsApp" } as L,
    contact: { en: "Contact us", zh: "联系我们" } as L,
  },
};
