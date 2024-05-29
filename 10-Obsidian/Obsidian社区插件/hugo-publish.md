---
uid: 2024052909025171
title: Obsidian 插件：Hugo Publish
tags: ['第三方工具集成', '文件管理', 'Markdown', 'obsidian插件']
description: 将您的博客发布到hugo网站。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hugo Publish

> [!Note] 插件名片
> - 插件名称：Hugo Publish
> - 插件作者：kirito
> - 插件说明：将您的博客发布到 hugo 网站。
> - 插件分类：[' 第三方工具集成 ', ' 文件管理 ', 'Markdown', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/kirito41dd/obsidian-hugo-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hugo-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kirito41dd/obsidian-hugo-publish/master/README.md)

## 概述

Obsidian 插件 "Publish" 可以帮助用户将博客发布到 hugo 网站。该插件将 Obsidian 中的 `.md` 文件和相关图片转换为 hugo 网站目录。转换包括将 `[[link.com]]` 转换为 `[link.com](link.com)`，将 `[[xxx.png]]` 转换为 `![xxx.png](/${static_dir}/xx.png)`，自动在 md 文件中写入 yaml 头部信息如标题、日期、最后修改日期。使用该插件的步骤包括完成插件设置，将标签设置为 `${blog_tag}`，点击 "hugo sync" 按钮或运行命令 `Hugo Publish: Sync blog`，进入 hugo 网站目录运行 `hugo server` 进行检查。该插件适用于想要将 Obsidian 博客发布到 hugo 网站的用户。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



