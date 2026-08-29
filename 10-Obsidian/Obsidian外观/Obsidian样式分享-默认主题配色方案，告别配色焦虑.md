---
uid: 20260711195744
title: Obsidian 样式分享 - 默认主题配色方案，告别配色焦虑
tags: [样式美化, 配色方案]
description: 为默认主题提供了深浅模式的不同配色方案
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260711195923
---

# Obsidian 样式分享 - 默认主题配色方案，告别配色焦虑

![260711_Obsidian样式分享：默认主题配色方案，告别配色焦虑](https://cdn.pkmer.cn/images/File-20260711074731073.png!pkmer)

相信很多 Obsidian 用户和我一样喜欢默认主题的简洁，但看久了纯白界面难免觉得单调。这个样式受 PDF 阅读器的多模式启发，以默认主题为基础，提供了深浅模式的不同配色方案，可以在 Style Setting 设置中进行切换。

具体效果如下：

![260711_Obsidian样式分享：默认主题配色方案，告别配色焦虑](https://cdn.pkmer.cn/images/File-20260711073825317.gif)

本样式仅修改 Obsidian 的主背景色、次背景色和侧边栏（Ribbon）颜色，不改变界面布局或交互逻辑，轻量无侵入。

> 如果你想要其他颜色组合，也可以让 AI 基于本模板继续扩展。

```css
/* @settings
name: 【Theme-熊猫】主题配色模式
id: panda-theme-color-scheme
settings:
    -
        id: panda-light-color-scheme
        title: 浅色模式配色
        description: 选择浅色模式下的背景配色方案
        type: class-select
        allowEmpty: false
        default: panda-light-default
        options:
            -
                label: 浅色模式
                value: panda-light-default
            -
                label: 绿色模式
                value: panda-light-green
            -
                label: 暖色模式
                value: panda-light-warm
            -
                label: 冷色模式
                value: panda-light-cool
            -
                label: 灰调模式
                value: panda-light-gray
            -
                label: 淡蓝模式
                value: panda-light-sky
            -
                label: 淡紫模式
                value: panda-light-lavender
            -
                label: 纸张模式
                value: panda-light-paper
            -
                label: 蜜桃模式
                value: panda-light-peach
            -
                label: 薄荷模式
                value: panda-light-mint
    -
        id: panda-dark-color-scheme
        title: 深色模式配色
        description: 选择深色模式下的背景配色方案
        type: class-select
        allowEmpty: false
        default: panda-dark-default
        options:
            -
                label: 深色模式
                value: panda-dark-default
            -
                label: 墨蓝模式
                value: panda-dark-ink
            -
                label: 深灰模式
                value: panda-dark-charcoal
            -
                label: 森林模式
                value: panda-dark-forest
            -
                label: 紫夜模式
                value: panda-dark-purple
            -
                label: 曜石模式
                value: panda-dark-obsidian
*/

/* 基础配置 */
body {
    --radius-s: 4px;
    --radius-m: 8px;
    --radius-l: 12px;
    --input-radius: 4px;
    --tab-radius-active: 0px;
    --checkbox-radius: 0px;
    --toggle-radius: 4px;
    --button-radius: 4px;
    --tab-radius: 6px;
    --toggle-thumb-radius: 4px;
    --slider-thumb-radius: 4px;
    --accent-h: 220;
    --accent-s: 50%;
    --accent-l: 52%;
    --link-decoration: none;
    --ribbon-background-collapsed: var(--background-secondary);
}

.workspace-tab-header.is-active::before,
.workspace-tab-header.is-active::after {
    display: none;
}

.menu {
    padding: var(--size-2-1);
}

.menu-item {
    padding: var(--size-4-1) var(--size-4-2);
}

.menu-separator {
    margin: var(--size-2-1) calc(var(--size-2-1) * -1);
}

/* ========== 浅色模式配色 ========== */

/* 浅色模式 */
.theme-light {
    --background-modifier-border: #c8c8c8;
}

body.panda-light-default.theme-light {
    --background-primary: #ffffff;
    --background-secondary: #f6f6f6;
    --ribbon-background: #e3e3e3;
}

/* 护眼模式 */
body.panda-light-green.theme-light {
    --background-primary: rgb(199, 237, 204);
    --background-secondary: rgb(93, 173, 120);
    --ribbon-background: rgb(93, 173, 120);
}

/* 暖色模式 */
body.panda-light-warm.theme-light {
    --background-primary: rgb(245, 239, 215);
    --background-secondary: rgb(187, 161, 99);
    --ribbon-background: rgb(187, 161, 99);
}

/* 冷色模式 */
body.panda-light-cool.theme-light {
    --background-primary: rgb(237, 242, 247);
    --background-secondary: rgb(176, 196, 214);
    --ribbon-background: rgb(156, 178, 198);
}

/* 灰调模式 */
body.panda-light-gray.theme-light {
    --background-primary: rgb(248, 248, 250);
    --background-secondary: rgb(215, 217, 222);
    --ribbon-background: rgb(190, 193, 200);
}

/* 淡蓝模式 */
body.panda-light-sky.theme-light {
    --background-primary: rgb(232, 242, 252);
    --background-secondary: rgb(130, 170, 215);
    --ribbon-background: rgb(110, 155, 205);
}

/* 淡紫模式 */
body.panda-light-lavender.theme-light {
    --background-primary: rgb(245, 241, 250);
    --background-secondary: rgb(178, 162, 198);
    --ribbon-background: rgb(158, 142, 185);
}

/* 纸张模式 */
body.panda-light-paper.theme-light {
    --background-primary: rgb(250, 246, 236);
    --background-secondary: rgb(205, 188, 158);
    --ribbon-background: rgb(185, 168, 138);
}

/* 蜜桃模式 */
body.panda-light-peach.theme-light {
    --background-primary: rgb(255, 243, 235);
    --background-secondary: rgb(220, 165, 140);
    --ribbon-background: rgb(200, 145, 120);
}

/* 薄荷模式 */
body.panda-light-mint.theme-light {
    --background-primary: rgb(230, 248, 242);
    --background-secondary: rgb(120, 185, 165);
    --ribbon-background: rgb(100, 170, 150);
}

/* ========== 深色模式配色 ========== */

/* 深色模式 */
body.panda-dark-default.theme-dark {
    --background-primary: #282c34;
    --background-secondary: #3b4251;
    --ribbon-background: #4c567a;
}

/* 墨蓝模式 */
body.panda-dark-ink.theme-dark {
    --background-primary: rgb(26, 32, 44);
    --background-secondary: rgb(44, 55, 72);
    --ribbon-background: rgb(58, 72, 94);
}

/* 深灰模式 */
body.panda-dark-charcoal.theme-dark {
    --background-primary: rgb(30, 30, 32);
    --background-secondary: rgb(48, 48, 52);
    --ribbon-background: rgb(68, 68, 74);
}

/* 森林模式 */
body.panda-dark-forest.theme-dark {
    --background-primary: rgb(24, 36, 30);
    --background-secondary: rgb(40, 62, 50);
    --ribbon-background: rgb(55, 82, 66);
}

/* 紫夜模式 */
body.panda-dark-purple.theme-dark {
    --background-primary: rgb(32, 28, 42);
    --background-secondary: rgb(52, 44, 68);
    --ribbon-background: rgb(72, 60, 92);
}

/* 曜石模式 */
body.panda-dark-obsidian.theme-dark {
    --background-primary: rgb(34, 30, 28);
    --background-secondary: rgb(58, 48, 40);
    --ribbon-background: rgb(78, 62, 50);
}
```
