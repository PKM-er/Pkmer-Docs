---
uid: 20250830221006
title: 修复 Obsidian v 1.9.12 中 Image Toolkit 无法启用的问题
tags: [插件, 常见问题]
description: 修复 Obsidian v 1.9.12 中 Image Toolkit 无法启用的问题
author: calmwaves
type: other
draft: false
editable: false
modified: 20250830221139
---

# 修复 Obsidian v 1.9.12 中 Image Toolkit 无法启用的问题

Obsidian 更新 v 1.9.12 新增了一个功能：自动禁用/提示更新问题插件，这导致 [[obsidian-image-toolkit]] 插件无法启用，在插件 github 的 issue 已经有人提出了解决方案：<https://github.com/sissilab/obsidian-image-toolkit/issues/149>

第一步：关闭 Obsidian

第二步：转到文件系统上的笔记库所在位置，然后 `.obsidian -> plugins -> obsidian-image-toolkit`

第三步：用文本编辑器打开 `styles.css`，然后删除以下 3 行：

```css
.menu {
    z-index: var(--layer-menu);
}
```

第四步：保存 `styles.css`

第五步：重新打开 Obsidian。在 设置 -> 社区插件 中启用插件。
