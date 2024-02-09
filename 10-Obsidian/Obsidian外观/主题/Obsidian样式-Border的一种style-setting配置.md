---
uid: 20240128021655
title: Obsidian 样式 - Border 的一种 style-setting 配置
tags: [obsidian, style-setting, border]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240128022921
---

# Obsidian 样式 - Border 的一种 style-setting 配置

![image.png](https://cdn.pkmer.cn/images/20240128021725.png!pkmer)

来源：<https://discord.com/channels/686053708261228577/702656734631821413/1198709577844277288>

右上角用的 [[tasks-calendar-wrapper]] 插件，右下角用的 [Pomodoro Timer](https://github.com/eatgrass/obsidian-pomodoro-timer) 插件

## 使用方法

- 第一步：安装 style-setting 插件和 Border 主题（记得启用）
- 第二步：打开 style-setting 插件的设置；
- 第三步：如果你本来就使用 Border 主题，点击 Export 将你的主题配置导出备份；
- 第四步：点击右上角的 Import，将下列配置复制粘贴进输入框，点击 Save 保存配置；
- 第五步：等待配置生效

```json
{
  "Appearance-dark@@theme-dark-style-select": "theme-dark-background-darker",
  "Appearance-dark@@card-layout-open-dark": true,
  "Appearance-dark@@mod-left-split-background-select-dark": "mod-left-split-background-CSS-dark",
  "Appearance-dark@@mod-right-split-background-select-dark": "mod-right-split-background-CSS-dark",
  "Appearance-dark@@background-mod-right-CSS-dark": "#141327aa",
  "Appearance-dark@@mod-root-split-background-select-dark": "mod-root-split-background-CSS-dark",
  "Appearance-dark@@background-mod-root-CSS-dark": "#09081baa",
  "Appearance-dark@@background-underlying-select-dark": "background-underlying-CSS-dark",
  "Appearance-dark@@background-underlying-CSS-dark": "center / cover no-repeat #060516aa url(https://raw.githubusercontent.com/Suyashtnt/commafiles/main/wallpapers/Orbit.png)",
  "Appearance-dark@@background-underlying-CSS-blend-mode-dark": "screen, overlay, hard-light, normal",
  "Appearance-dark@@Active-states-file-explorer-select-dark": "activated-file-tab-style-dark",
  "Appearance-dark@@accent-dark": "#ACAAFF",
  "Components@@tab-autohide": false,
  "Appearance-dark@@card-border-radius-dark": "24px",
  "Components@@status-bar-autohide": true,
  "Components@@Ribbon-autohide": true,
  "Components@@nav-header-autohide": true,
  "Components@@tab-title-bar-autohide": true,
  "Plugin@@Projects-bg-color": "Projects-bg-color-default",
  "Plugin@@colorful-checkbox": true,
  "Components@@colorful-folder": true,
  "Components@@folder-font-bold": false,
  "Components@@vault-name-display-select": "vault-name-hide",
  "Components@@outline-enhanced": true,
  "Components@@immersive-canvas": true,
  "Appearance-dark@@background-mod-left-CSS-dark": "#141327aa",
  "Appearance-dark@@background-mod-left-CSS-blend-mode-dark": "soft-light",
  "Appearance-dark@@background-mod-right-CSS-blend-mode-dark": "soft-light",
  "Appearance-dark@@background-mod-root-CSS-blend-mode-dark": "soft-light",
  "Appearance-dark@@color-red-rgb@@dark": "#FF5D66",
  "Appearance-dark@@color-orange-rgb@@dark": "#EA9D00",
  "Appearance-dark@@color-cyan-rgb@@dark": "#00C2BA",
  "Appearance-dark@@color-blue-rgb@@dark": "#44A8E7",
  "Appearance-dark@@color-purple-rgb@@dark": "#ACAAFF",
  "Appearance-dark@@text-normal@@dark": "#DADBF8",
  "Appearance-dark@@text-muted@@dark": "#D4D5F2",
  "Appearance-dark@@text-faint@@dark": "#45455D",
  "Appearance-dark@@input-radius-dark": 8,
  "Appearance-dark@@text-accent@@dark": "#ACAAFF",
  "Appearance-dark@@text-on-accent@@dark": "#141327",
  "Editor@@line-hover-indicator": true,
  "Editor@@h1-divider-on": true,
  "Editor@@h1-color-select": "h1-color-designated",
  "Editor@@h1-size": "1.7em",
  "Editor@@h2-divider-on": false,
  "Editor@@h2-color-select": "h2-color-designated",
  "Editor@@h3-color-select": "h3-color-designated",
  "Editor@@h4-color-select": "h4-color-designated",
  "Editor@@h5-color-select": "h5-color-designated",
  "Editor@@h6-color-select": "h6-color-designated",
  "Editor@@text-align-justify": true,
  "Editor@@code-background-dark": "#06051660",
  "Editor@@code-background-light": "#06051660",
  "Editor@@callout-radius": "16px",
  "Mobile@@card-layout-pad-open": true,
  "Mobile@@drawer-phone-full-width": true,
  "Editor@@callout-border-width": "2px",
  "Appearance-dark@@card-highlight-dark": true,
  "Appearance-dark@@background-primary@@dark": "#141327",
  "Appearance-dark@@background-primary-alt@@dark": "#141327",
  "Appearance-dark@@background-secondary@@dark": "#09081B",
  "Appearance-dark@@background-secondary-alt@@dark": "#09081B",
  "Appearance-dark@@background-tertiary@@dark": "#141327",
  "Appearance-dark@@workspace-divider-transparent-dark": true,
  "Appearance-dark@@background-mod-root-CSS-backdrop-filter-dark": "blur(12px)",
  "Appearance-dark@@background-mod-left-CSS-backdrop-filter-dark": "blur(32px)",
  "Appearance-dark@@on-border-dark": "#D4D5F2",
  "Appearance-dark@@mix-blend-mode-on-border-dark": "hard-light screen",
  "Appearance-dark@@color-to-tab-icon-dark": true,
  "Appearance-dark@@workspace-background-translucent@@dark": "#FFFFFF00"
}
```