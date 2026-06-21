/** Site configuration — edit this file to customize your blog. */
export const site = {
  /** Production URL (no trailing slash). */
  baseUrl: 'https://blog.l6d.me',
  /** GitHub Pages subpath, e.g. "/repo-name". Leave empty for root deploy. */
  repoSubpath: '',
  title: 'Leonardの妙妙屋',
  description:
    'Leonard的博客，用于分享一些东西',
  author: 'Leonard',
  /** UI language: "zh-CN" | "en" */
  language: 'zh-CN',
  maxPostsOnIndex: 10,
  copyright: {
    enable: true,
    type: 'CC_BY_NC_SA_4_0' as const,
    customText: '',
    showLicenseIcon: true,
    showStandardFormat: true,
    additionalNote: '',
  },
} as const;

export type SiteConfig = typeof site;
