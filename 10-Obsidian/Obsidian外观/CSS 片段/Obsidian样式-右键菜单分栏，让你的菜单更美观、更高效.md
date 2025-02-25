---
uid: 20250225132040
title: 右键菜单分栏，让你的菜单更美观、更高效
tags: [右键菜单, 分栏]
description: 右键菜单分栏，让你的菜单更美观、更高效
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250225132111
---

# 右键菜单分栏，让你的菜单更美观、更高效

在日常使用 Obsidian 时，右键菜单是我们快速执行操作的重要工具。然而，随着插件和功能的增加，右键菜单可能会变得非常冗长，导致浏览和选择变得繁琐。今天，我将分享一个超实用的技巧——如何通过自定义 CSS 代码，实现 Obsidian 右键菜单的自动分栏，让你的菜单更美观、更高效！

## 效果展示

![250122_Obsidian样式：右键菜单分栏.md](https://cdn.pkmer.cn/images/202502251320825.png!pkmer)

## CSS 代码

```css

/* 右键菜单栏分栏 */
.menu:not(.MySnippets-statusbar-menu):has(>.menu-item:nth-child(n+20)),
.menu:not(.MySnippets-statusbar-menu)>.menu-scroll:has(>.menu-item:nth-child(n+20)) {
    display: block;
    columns: 2;
    gap: 5px;
    column-rule: 2px solid var(--background-modifier-border);
    width: fit-content;
}

.menu:not(.MySnippets-statusbar-menu):has(>.menu-item:nth-child(n+40)),
.menu:not(.MySnippets-statusbar-menu)>.menu-scroll:has(>.menu-item:nth-child(n+40)) {
    columns: 3;
}

.menu:not(.MySnippets-statusbar-menu):has(>.menu-item:nth-child(n+60)),
.menu:not(.MySnippets-statusbar-menu)>.menu-scroll:has(>.menu-item:nth-child(n+60)) {
    columns: 4;
}

.menu:not(.MySnippets-statusbar-menu):has(>.menu-item:nth-child(n+80)),
.menu:not(.MySnippets-statusbar-menu)>.menu-scroll:has(>.menu-item:nth-child(n+80)) {
    columns: 5;
}

.menu:not(.MySnippets-statusbar-menu):has(>.menu-item:nth-child(n+100)),
.menu:not(.MySnippets-statusbar-menu)>.menu-scroll:has(>.menu-item:nth-child(n+100)) {
    columns: 6;
}

/* 隐藏分割线 */
.menu-separator {
    display: none;
}
```

### 自动分栏规则

- **菜单项超过 20 个时**，自动切换为 2 列。
- **菜单项超过 40 个时**，切换为 3 列。
- **菜单项超过 60 个时**，切换为 4 列。
- **菜单项超过 80 个时**，切换为 5 列。
- **菜单项超过 100 个时**，切换为 6 列。

通过这些规则，右键菜单会根据菜单项的数量自动调整列数，确保菜单始终保持最佳的可读性和操作性。
