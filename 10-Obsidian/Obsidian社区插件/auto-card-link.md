---
uid: 20230505140611
title: Obsidian 插件：Auto Card Link 将网页链接自动转化为卡片样式
tags: [Obsidian, 插件, 链接, 美化, 卡片样式]
description: Obsidian 插件自动将链接变成卡片样式
author: OS
type: other
draft: false
editable: false
modified: 20230516193235
---

# Obsidian 插件：Auto Card Link 将网页链接自动转化为卡片样式

## 概述

自动从网页 URL 获取数据，并将其作为卡片样式放入到笔记中。

> [!Note] 插件名片
> - 插件名称：Auto Card Link
> - 插件作者：Nekoshita Yuki
> - 插件说明：自动将链接变成卡片样式
> - 插件项目地址：[点我跳转](https://github.com/nekoshita/obsidian-auto-card-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-card-link)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230505141723.png!pkmer)

- 自动从网页 URL 获取数据，并将其作为卡片样式放入到笔记中。

## 使用

- Paste URL and enhance to card link：粘贴 URL 并将这个链接变成卡片样式。
- Enhance selected URL to card link：圈选网页链接，将链接变成卡片样式。

### 卡片样式微调

````YAML
```cardlink
url: https://obsidian.md/
title: "Obsidian"
description: "Obsidian: A knowledge base that works on local Markdown files."
host: obsidian.md
image: https://obsidian.md/images/banner.png
```
````

| 参数名        | 是否必填    | 用途                           |
|-------------|--------------|------------------------------------------|
| url         | 必填         | 用于打开链接    |
| title       | 必填         | 链接和卡片的标题                        |
| description | 选填        | 链接和卡片的描述                 |
| host        | 选填        | 链接域名信息                         |
| favicon     | 选填        | 网页连接的网站 icon                    |
| image       | 选填        | 卡片中要显示的缩略图图像|

### 兼容

- 插入的方式是以 YAML 语法，使用代码块生成的，与 HTML 标签不同，它不会打乱你的 Markdown 文件
- 参见下面：

````YAML
```cardlink
url: https://obsidian.md/
title: "Obsidian"
description: "Obsidian: A knowledge base that works on local Markdown files."
host: obsidian.md
image: https://obsidian.md/images/banner.png
```
````

### 设置

- Enhance Default Paste（增强默认粘贴功能）
	- 当粘贴命时，自动把链接粘贴转化为卡片样式。

> [!Tip] 推荐阅读
> - [[supercharged-links-obsidian]]：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
> - [[obsidian-auto-link-title]]：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
> - [[url-into-selection]]：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
> - [[external-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[link-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[obsidian-rich-links]]：为你笔记中的链接，增加美化样式
> - [[obsidian-link-embed]]：帮你将网页 URL 转换为嵌入预览卡片样式
