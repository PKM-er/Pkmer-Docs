---
uid: 20230803212539
title: Obsidian 插件：【Readme】Hover External Link
tags: ['界面相关', '链接处理', 'obsidian插件', 'readme']
description: 将鼠标悬停在外部链接上以查看目标URL。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hover External Link

> [!Note] 插件名片
> - 插件名称：Hover External Link
> - 插件作者：Jamie Brynes
> - 插件说明：将鼠标悬停在外部链接上以查看目标URL。
> - 插件分类：['界面相关', '链接处理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jamiebrynes7/obsidian-hover-external-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hover-external-link)

## 概述

将鼠标悬停在外部链接上以查看目标URL。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jamiebrynes7/obsidian-hover-external-link/master/README.md)
> 

---

## Readme(翻译）

下面是 [[hover-external-link]] 插件的自述翻译



# Hover External Link Obsidian 插件

这是一个 [Obsidian](https://obsidian.md/) 插件，它可以在渲染的 Markdown 中为外部链接添加悬停 URL 预览。

## 演示

https://user-images.githubusercontent.com/13353733/130523291-99b6c6c3-24f4-4729-b9ba-e4df464f0e65.mp4

安装

🚧 即将推出！🚧

### 手动安装

1. 从[最新版本](https://github.com/jamiebrynes7/obsidian-hover-external-link/releases/latest)下载`main.js`、`manifest.json`和`styles.css`。
2. 将它们放置在`<vault>/.obsidian/plugins/hover-external-link/`文件夹中（您需要创建此文件夹）。

## 使用方法

如果链接的文本与URL不相同，此插件将为所有外部链接添加悬停工具提示。这仅在预览模式下有效。

```md
此链接将具有悬停工具提示：[Google](www.google.com)。

此链接将不会具有悬停工具提示：[www.google.com](www.google.com)。
```

## 自定义

该插件暴露了两个CSS变量，您可以使用它们来设置工具提示的背景和文本颜色。

```css
.theme-light {
  --link-tooltip-background: #333;
  --link-tooltip-text: #fff;
}

.theme-dark {
  --link-tooltip-background: #ccc;
  --link-tooltip-text: #000;
}
```



