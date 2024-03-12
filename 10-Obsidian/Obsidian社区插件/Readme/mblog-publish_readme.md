---
uid: 20240312193744
title: Obsidian 插件：【Readme】MBlog Publish
tags: ['obsidian插件', 'readme']
description: 通过Obsidian发布文章到MBlog平台
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】MBlog Publish

> [!Note] 插件名片
> - 插件名称：MBlog Publish
> - 插件作者：Jerry
> - 插件说明：通过 Obsidian 发布文章到 MBlog 平台
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kingwrcy/obsidian-mblog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mblog-publish)

## 概述

通过 Obsidian 发布文章到 MBlog 平台

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kingwrcy/obsidian-mblog/master/README.md)

---

## Readme(翻译）

下面是 [[mblog-publish]] 插件的自述翻译

【机翻】

# Obsidian MBlog 插件

Obsidian 的 MBlog 平台插件，目前支持发布单篇文章到 [MBlog](https://dev.mblog.club).

1. 先去 [MBlog](https://dev.mblog.club) 后台开启 API 接口，这个是付费功能，免费用户不支持。
2. 打开你的 Obsidian 安装本插件。
3. 在插件设置里填入第一步开启的 `api token`。
4. 任选一篇文章右键点击 `发布到MBlog平台` 选项。

对文章有以下要求:

必须要有 [Front Matter](https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html)，它定义了一篇文章的一些基本信息，Obsidian 本身也是支持的，在正文部分输入 `---` 就会弹出相关提示。

支持以下字段，除了 title 字段外，其它字段都是选填。

| 字段|含义| 类型|说明 |
| --- | --- | --- | --- |
|title  |文章标题  |字符串  |必填，不填无法发布|
|link|文章链接|字符串|不必填，不填默认取 title 字段，不能包含 `/`，`#` 等特殊符号|
|pubDate|文章发布日期|日期，YYYY-MM-DD|不必填，默认取当前时间|
|tags|文章标签|标签|不必填，默认为空|
|draft|是否是草稿|复选框|不必填，默认不是草稿|

显示在 obsidian 里如下:

![1708249894503.png](https://cdn.pkmer.cn/covers/mblog-publish_1_0.png!pkmer).

完成上述设置后，右键点击 obsidian 左侧的你需要发布的文章，选中 `发布到MBlog平台`，成功或失败右上角会有提示。

![1708250145167.png](https://cdn.pkmer.cn/covers/mblog-publish_1_1.png!pkmer)
