/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "icon-home" },
  {
    text: "Web 前端",
    icon: "icon-yingyong",
    items: [
      {
        text: "核心基础",
        icon: "icon-xingqiu",
        link: "/core-fundamentals/adzhqh55/",
      },
      {
        text: "框架生态",
        icon: "icon-mti-shengtaihuanjing",
        link: "/frameworks-ecosystem/2e95sxbz/",
      },
      {
        text: "工程化",
        icon: "icon-jiqunguanliicon",
        link: "/engineering-tooling/",
      },
      {
        text: "多端开发",
        icon: "icon-kuaduanjiaohu",
        link: "/cross-platform/xwnvrxjz/",
      },
      {
        text: "前沿领域",
        icon: "icon-chuangyeqianyan",
        link: "/advanced-future-tech/a7lo9rj8/",
      },
    ],
  },
  { text: "Serve 服务端", link: "/serve/", icon: "icon-fuwuduanpeizhi" },
  { text: "DevOps 运维", link: "/devops/", icon: "icon-yunweiguanli" },
  {
    text: "更多",
    icon: "icon-chuangyizhan",
    activeMatch: "/more/",
    items: [
      {
        text: "🔖 书签",
        link: "/more/bookmark/",
      },
      {
        text: "前端面试集锦 ",
        link: "/more/interview/",
      },
    ],
  },
]);
