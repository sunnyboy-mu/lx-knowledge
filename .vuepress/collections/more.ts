import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  type: "doc",
  dir: "more",
  linkPrefix: "/more/",
  title: "✨️ 更多",
  sidebar: [
    {
      prefix: "书签",
      text: "🔖 书签",
      items: ["development", "integrated"],
    },
  ],
});
