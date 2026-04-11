---
uid: 20260408093136
title: 告别单调！10 套高颜值 Obsidian Canvas 配色方案分享
tags: [样式美化, Canvas]
description: 为 Canvas 提供 10 套主题配色，配色方案参考了论文图表常用色系以及 xmind 的配色方案，适配浅色/深色模式与演示、知识整理、创意草图等场景。支持在 Style Settings 中一键切换方案、开启卡片渐变背景、调节边框宽度与透明度，确保信息分组清晰、对比适中、层次明确，长时间阅读不疲劳。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260410110016
---

# 告别单调！10 套高颜值 Obsidian Canvas 配色方案分享

为 Canvas 提供 10 套主题配色，配色方案参考了论文图表常用色系以及 xmind 的配色方案，适配浅色/深色模式与演示、知识整理、创意草图等场景。支持在 Style Settings 中一键切换方案、开启卡片渐变背景、调节边框宽度与透明度，确保信息分组清晰、对比适中、层次明确，长时间阅读不疲劳。

![260407_Obsidian样式：高颜值 Obsidian Canvas 配色方案分享.md](https://cdn.pkmer.cn/images/File-20260407060907862.png!pkmer)

在 Style Settings 中选择“Canvas 主题配色”切换方案；可开启“卡片渐变背景”并调整边框宽度与透明度。

![260407_Obsidian样式：高颜值 Obsidian Canvas 配色方案分享.md](https://cdn.pkmer.cn/images/File-20260407063957672.gif)

## 样式功能

1. **多风格方案**：内置经典彩虹、顶刊学术、马卡龙等 10 套主题。
2. **视觉增强**：支持卡片渐变与阴影效果，提升画布质感。
3. **细节优化**：增强 Canvas 组（Groups）拖拽手感。

## Snippets CSS

```css
/*
@settings
name: 【Canvas-熊猫】Canvas 主题配色
id: canvas-schemes-schemes
settings:
    -
        id: canvas-color-scheme-heading
        title: 🎨 配色方案设置
        type: heading
        level: 1
    -
        id: canvas-schemes-theme
        title: 选择主题颜色方案
        type: class-select
        allowEmpty: false
        default: canvas-schemes-rainbow
        options:
            - 
                label: 🟣 Ob 默认
                value: canvas-default
            - 
                label: 🌈 经典彩虹
                value: canvas-schemes-rainbow
            - 
                label: 🎭 柔和渐变
                value: canvas-schemes-soft
            - 
                label: 💼 商务蓝
                value: canvas-schemes-business
            - 
                label: 🌿 自然绿
                value: canvas-schemes-nature
            - 
                label: 🔴 中国红
                value: canvas-schemes-china-red            
            - 
                label: 💜 东方紫
                value: canvas-schemes-purple
            - 
                label: 📊 顶刊经典
                value: canvas-schemes-classic
            - 
                label: 💙 蓝色渐变系
                value: canvas-schemes-blue
            - 
                label: 🎨 复古学术风
                value: canvas-schemes-vintage
            - 
                label: 💜 浪漫温柔系
                value: canvas-schemes-romantic
            - 
                label: 🌸 马卡龙 pastel
                value: canvas-schemes-macaron
    -
        id: canvas-card-gradient-toggle
        title: 开启卡片渐变背景
        description: 为有颜色的卡片添加渐变背景效果
        type: class-toggle
        default: true
    -
        id: canvas-basic-settings
        title: 🧱 基础样式设置
        type: heading
        level: 1
    -
        id: canvas-card-border-width
        title: 卡片边框宽度
        type: variable-number-slider
        format: px
        default: 1
        min: 0
        max: 10
        step: 0.5
    -
        id: canvas-card-gradient-opacity
        title: 卡片渐变背景透明度
        description: 开启渐变背景时的透明度 (0.1 - 1.0)
        type: variable-number-slider
        format: 
        default: 0.6
        min: 0.1
        max: 1
        step: 0.05

*/

/*! canvas 基本样式调整 (宽度和透明度可在 Style Settings 中配置) */
body {
  --canvas-card-border-style: solid;
  --canvas-card-border-width: 1px;
  --canvas-card-gradient-opacity: 0.6;
}

/* 调整卡片的线宽 */
.canvas-node-container {
  border-width: var(--canvas-card-border-width);
  border-style: var(--canvas-card-border-style);
}

/* 卡片透明度 */
.canvas-node-group {
  background-color: var(--background-primary);
}

.theme-dark .canvas-node-container {
  border-width: 4px;
  border-style: var(--canvas-card-border-style);
}


.theme-dark .canvas-node.is-themed:not(.canvas-node-group) .canvas-node-content {
  background-color: var(--background-primary);
}

/* 有色的卡片的卡片透明度 */
.theme-light .canvas-node.is-themed:not(.canvas-node-group) .canvas-node-content {
  background-color: rgba(var(--canvas-color),
      var(--canvas-card-gradient-opacity));
}

/* 开启渐变背景时的样式 */
body.canvas-card-gradient-toggle.theme-light .canvas-node.is-themed:not(.canvas-node-group) .canvas-node-content {
  background: linear-gradient(135deg,
      rgba(var(--canvas-color), var(--canvas-card-gradient-opacity)) 0%,
      rgba(var(--canvas-color), calc(var(--canvas-card-gradient-opacity) / 2)) 100%);
}

/* !设置卡片+连线阴影 @202603291145 */
/* https://forum.obsidian.md/t/cssclasses-for-canvas-cards/71865 */
.canvas-edges>g,
.canvas-edges {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
}

.canvas-node-container {
  box-shadow:
    0 8px 19px -13px rgba(0, 0, 0, 0.56),
    0 4px 25px 0 rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;
}

/* !设置卡片背景 */
/* 深色模式下的样式 */
.theme-dark {
  --canvas-dot-pattern: rgba(255, 255, 255, 0.6);
}

/* 浅色模式下的样式 */
.theme-light {
  --canvas-dot-pattern: rgba(0, 0, 0, 0.6);
}

/* !增强拖拽 */
/* 更方便地拖动canvas组/锁定canvas组 */
/* https://forum-zh.obsidian.md/t/topic/42826 */
.canvas-node.canvas-node-group {
  pointer-events: auto !important;
}

/* ========================= */
/* commander按钮显示 */
.workspace-leaf-content:not([data-type="canvas"]) [aria-label="QuickAdd: Macro：Canvas Presentations"] {
  display: none;
}

/* !其他优化 */
/* canvas 嵌入的卡片编辑时，隐藏元数据和标题栏 */
.node-insert-event.mod-inside-iframe {
  .metadata-container {
    display: none !important;
  }

  .inline-title:not(.markdown-embed-content .inline-title) {
    display: none !important;
    margin-bottom: 0px;
  }
}


/* !设置卡片背景 */

/* ========== 经典彩虹（6色分支标准色） ========== */
/* 参考 彩虹分支配色逻辑：色相均匀分布，饱和度适中 */

body.canvas-schemes-rainbow {
  --canvas-color-1: 220, 53, 69;
  --canvas-color-2: 253, 126, 20;
  --canvas-color-3: 255, 193, 7;
  --canvas-color-4: 40, 167, 69;
  --canvas-color-5: 0, 123, 255;
  --canvas-color-6: 111, 66, 193;
}

/* ========== 商务蓝（专业/工作汇报） ========== */

body.canvas-schemes-business {
  --canvas-color-1: 13, 71, 161;
  --canvas-color-2: 25, 118, 210;
  --canvas-color-3: 66, 165, 245;
  --canvas-color-4: 144, 202, 249;
  --canvas-color-5: 30, 136, 229;
  --canvas-color-6: 0, 151, 167;
}

/* ========== 自然绿（学习/知识整理） ========== */
/* 低饱和度，长时间阅读舒适 */



body.canvas-schemes-nature {
  --canvas-color-1: 27, 94, 32;
  --canvas-color-2: 46, 125, 50;
  --canvas-color-3: 76, 175, 80;
  --canvas-color-4: 0, 137, 123;
  --canvas-color-5: 30, 136, 229;
  --canvas-color-6: 81, 45, 168;
}

/* ========== 柔和渐变（创意/灵感收集） ========== */
/* 马卡龙色系，低对比度，视觉柔和 */


body.canvas-schemes-soft {
  --canvas-color-1: 194, 24, 91;
  --canvas-color-2: 239, 108, 0;
  --canvas-color-3: 245, 190, 0;
  --canvas-color-4: 56, 142, 60;
  --canvas-color-5: 21, 101, 192;
  --canvas-color-6: 136, 14, 179;
}

/* ========== 🇨🇳 中国红（传统/节日/文化主题） ========== */
/* 配色灵感：故宫红墙 + 鎏金 + 朱砂 + 胭脂，体现东方典雅 */
/* 渐变色系：从深红到亮金的层次感 */


body.canvas-schemes-china-red {
  --canvas-color-1: 222, 41, 16;
  --canvas-color-2: 178, 34, 34;
  --canvas-color-3: 139, 0, 0;
  --canvas-color-4: 218, 165, 32;
  --canvas-color-5: 184, 134, 11;
  --canvas-color-6: 255, 215, 0;
}

/* ========== 💜 东方紫（神秘/创意/艺术主题） ========== */
/* 配色灵感：紫禁暮色 + 紫水晶 + 薰衣草，渐变层次丰富 */



body.canvas-schemes-purple.theme-light {
  --canvas-color-1: 75, 0, 130;
  --canvas-color-2: 102, 51, 153;
  --canvas-color-3: 138, 43, 226;
  --canvas-color-4: 153, 102, 204;
  --canvas-color-5: 186, 143, 227;
  --canvas-color-6: 221, 160, 221;
}

/* ========== 📊 顶刊经典配色（浅色+深色双模式） ========== */
/* 浅色模式 - 柔和学术风 */
body.canvas-schemes-classic {
  --canvas-color-1: 218, 70, 68;
  --canvas-color-2: 238, 178, 125;
  --canvas-color-3: 233, 234, 199;
  --canvas-color-4: 194, 220, 177;
  --canvas-color-5: 220, 239, 246;
  --canvas-color-6: 250, 242, 233;
}


/* ========== 💙 蓝色渐变系（专业/科技） ========== */
/* 从浅蓝到深灰的渐变层次 */
body.canvas-schemes-blue {
  --canvas-color-1: 227, 236, 243;
  --canvas-color-2: 192, 228, 252;
  --canvas-color-3: 183, 210, 227;
  --canvas-color-4: 174, 196, 220;
  --canvas-color-5: 192, 228, 252;
  --canvas-color-6: 89, 89, 89;
}



/* ========== 🎨 复古学术风（复古/人文） ========== */
/* 淡紫、米色、橄榄绿、蓝灰、棕色 */
body.canvas-schemes-vintage {
  --canvas-color-1: 92, 46, 30;
  --canvas-color-2: 238, 228, 218;
  --canvas-color-3: 208, 208, 234;
  --canvas-color-4: 81, 121, 71;
  --canvas-color-5: 87, 105, 151;
  --canvas-color-6: 208, 208, 234;
}

/* ========== 💜 浪漫温柔系（创意/艺术） ========== */
/* 淡紫、薄荷青、粉色、米色、深红 */
body.canvas-schemes-romantic {
  --canvas-color-1: 119, 23, 28;
  --canvas-color-2: 207, 152, 155;
  --canvas-color-3: 238, 224, 211;
  --canvas-color-4: 179, 221, 211;
  --canvas-color-5: 194, 167, 208;
  --canvas-color-6: 194, 167, 208;
}

/* ========== 🌸 马卡龙 pastel（柔和/可爱） ========== */
/* 超低饱和度的马卡龙色系 */
body.canvas-schemes-macaron {
  --canvas-color-1: 244, 212, 212;
  --canvas-color-2: 245, 223, 166;
  --canvas-color-3: 235, 200, 120;
  --canvas-color-4: 184, 213, 184;
  --canvas-color-5: 187, 212, 240;
  --canvas-color-6: 207, 182, 211;
}
```

## 参考资料

- [Cssclasses for canvas-cards - Custom CSS & Theme Design - Obsidian Forum](https://forum.obsidian.md/t/cssclasses-for-canvas-cards/71865)
- [「CSS」更方便地拖动canvas组/锁定canvas组 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/42826)

