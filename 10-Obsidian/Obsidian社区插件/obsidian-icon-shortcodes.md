---
uid: 20230506103414
title: Obsidian 插件：Icon Shortcodes
tags: []
description: Obsidian 插件：Icon Shortcodes 通过键入 emoji 对应的段代码方式，快速筛选和输入。并支持自定义图标集合。
author: OS
type: other
draft: false
editable: false
modified: 20230515233929
---

# Obsidian 插件：Icon Shortcodes

## 概述

有时候我们在记录笔记的时候，会使用到 emoji 表情符号，Obsidian 支持这种表情符号的显示，但是输入上十分依赖你的输入法或其他方式。

Icon Shortcodes 很好的解决了这个问题，通过键入 emoji 对应的段代码方式，快速筛选和输入。并支持自定义图标集合。

> [!Note] 插件名片
> - 插件名称：Icon Shortcodes
> - 插件作者：AidenLx
> - 插件说明：通过键入 emoji 对应的段代码方式，快速筛选和输入。并支持自定义图标集合。
> - 插件项目地址：[点我跳转](https://github.com/aidenlx/obsidian-icon-shortcodes)

## 使用

- 通过键入 emoji 对应的段代码，对应触发关键字为 `:`（英文冒号）紧跟 emoji 对应的短代码。如 :smile 对应的就是笑脸。
- 输入对应短代码后，插件会自动进行提示，方便你快速寻找。
- 支持模糊搜索：输入 `：` 后，你可以通过简单的关键字，在弹出的下来菜单中简易收拢搜索范围。比如 `:book to` 查找📖（：open_book :) 和📗（：green_book :)

### 图标集合

- 插件内置 Unicode 13.1 字符集下的表情符号，支持 Lucide 图标即样式。
- [Font Awesome](https://fontawesome.com/) 和 [Remixicon](https://github.com/Remix-Design/RemixIcon) 图标集合需要下载后支持。进入插件设置，选择 `Icon Packs` 中 Browser，可以浏览并下载对应的图标集合。
- Custom Icons 可以轻松插入和管理自定义图标（支持格式：.bmp，.png，.jpg，.jpeg，.gif，.svg 和.webp）

![image.png](https://cdn.pkmer.cn/images/20230506105842.png!pkmer)

### 自定义样式

为了自定义图标以更改其颜色，尺寸等，可以指制作 CSS 片段。参考下面的代码：

```CSS
.isc-icon > *:first-child {
  /** changes for all icons. */
}
.isc-icon.icon-emoji-icon > *:first-child {
  /** changes for emoji icons. */
}
.isc-icon.isc-fas > *:first-child {
  /* changes for icons in the specific icon pack */
  /* (font awesome soild in this example) */
}
```

> [!Tip] 推荐阅读
> - [[obsidian-icons-plugin]]：提供插入图标符号的功能
> - [[obsidian-emoji-toolbar]]：快速搜索表情符号并将其插入到您的编辑器中
> - [[obsidian-icon-swapper]]：替换默认内置图标集合准备的，可以批量替换，也可以针对某个单一图标进行替换