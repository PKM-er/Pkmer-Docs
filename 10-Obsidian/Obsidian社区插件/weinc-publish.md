---
uid: 1793625624481000
title: "Obsidian 插件：WeInc Publish"
tags: ["发布工具", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Turn the current note into a website. Opens the WeInc builder with your note as the starting brief, so you can review it and press Send. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WeInc Publish

> [!Note] 插件名片
> - 插件名称：WeInc Publish
> - 插件作者：weinc
> - 插件说明：Turn the current note into a website. Opens the WeInc builder with your note as the starting brief, so you can review it and press Send. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/umairalisadaqat/weinc-obsidian-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?weinc-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/umairalisadaqat/weinc-obsidian-publish/master/README.md)



## 概述

WeInc Publish 旨在将 Obsidian 笔记快速转化为网站，核心功能是生成一份包含笔记标题和正文的简短简报，并自动在浏览器中打开 WeInc 构建器。它读取当前打开的笔记内容（忽略 Frontmatter），将嵌入和链接保留为纯文本，若笔记过长则自动截断至约 5000 字符并标记。整个过程不会自动构建或发送内容，用户需在 WeInc 界面中审阅简报后手动点击发送，且必须拥有 WeInc 账户才能使用。

典型场景包括将技术文档、博客草稿或项目说明转化为可分享的网页。例如，你写完一篇关于 API 设计的笔记，希望快速生成一个展示页面供团队查看，只需运行命令即可在 WeInc 中预览并发送；或者将个人知识库中的某篇长文转化为公开网页，方便外部访问。插件默认无快捷键，但可在设置中自定义，操作入口为命令面板或侧边栏地球图标。

相比其他发布插件，WeInc Publish 的最大特色是零网络请求与完全本地处理：插件本身不发起任何 API 调用、无追踪、无配置项，笔记内容仅在用户主动运行命令时通过浏览器链接传递至 WeInc。这意味着数据离开 Obsidian 的时机完全由用户控制，隐私边界清晰。此外，它不依赖复杂模板或主题系统，而是将笔记作为“简报”交由 WeInc 的 AI 构建器处理，适合追求快速原型而非精细排版控制的用户。

使用前需注意：该插件不替代专业网站构建工具，不适合需要复杂交互、多页面结构或自定义 CSS 的场景；长笔记会被截断，关键信息若位于 5000 字符之后可能丢失；且最终网站效果取决于 WeInc 的生成能力，用户无法在 Obsidian 内预览最终样式。若你只需静态文本展示且接受 WeInc 的隐私政策，此插件是轻量级选择；若需完全掌控输出格式或离线发布，则应考虑其他方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


