---
uid: 20230505140611
title: Obsidian 插件：Auto Card Link 将网页链接自动转化为卡片样式
description: 
author: 
type: other
draft: false
editable: false
modified: 20230505145325
---

# Obsidian 插件：Auto Card Link 将网页链接自动转化为卡片样式

## 概述

自动从网页 URL 获取数据，并将其作为卡片样式放入到笔记中。

> [!Note] 插件名片
> - 插件名称：Auto Card Link
> - 插件作者：Nekoshita Yuki
> - 插件说明：根据你设定的规则动态高亮显示文本
> - 插件项目地址：[点我跳转](https://github.com/nekoshita/obsidian-auto-card-link)

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

>[!Tip] 提示
>- 类似插件还有：[[obsidian-link-embed]]
>- 类似插件还有：[[obsidian-rich-links]]
>- 类似插件还有：[[simple-embeds]]
