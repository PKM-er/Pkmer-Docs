---
uid: 1793625618562000
title: "Obsidian 插件：Note Review Comments"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Comment on passages in Reading view and track AI review resolution. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Review Comments

> [!Note] 插件名片
> - 插件名称：Note Review Comments
> - 插件作者：nd
> - 插件说明：Comment on passages in Reading view and track AI review resolution. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hello1101n/obsidian-reading-comments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-review-comments)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hello1101n/obsidian-reading-comments/master/README.md)



## 概述

Note Review Comments 专为 Obsidian 阅读视图设计，解决在审阅笔记时难以精准定位反馈的问题。它允许用户高亮文本并直接添加评论，将反馈结构化存储，而非直接修改原文。核心功能在于生成包含绝对路径和具体指令的审查提示词，供 AI 代理读取笔记与评论文件，从而自动执行修改并更新状态，实现从“人工标注”到“AI 执行”的闭环。

典型场景包括技术文档或长文写作。例如，你在阅读一篇 API 文档时，发现某段参数说明有误，高亮后写下“此处应改为异步调用”，保存后复制提示词给 Claude Code。AI 代理读取文件，定位该段落，修改内容并将对应评论标记为“已解决”。另一个场景是团队代码审查，成员对代码注释提出建议，AI 根据评论批量调整代码风格，无需手动逐条复制粘贴。

相比传统批注插件，其特色在于与 AI 工作流的深度集成及状态追踪。评论状态分为“开放”与“已解决”，即使 AI 修改失败也会标记为已解决，用户可手动重开以再次尝试。数据存储在 Vault 根目录的 `.comments` 文件夹中，JSON 格式兼容 VS Code 插件，确保笔记与评论的便携性。插件本身不发起网络请求，完全依赖本地 AI 代理执行，保护数据隐私。

使用前需注意，该插件仅支持桌面端且需 Obsidian 1.8.0 以上版本。它不直接调用 AI 服务，若使用无本地文件访问权限的聊天机器人，需手动粘贴笔记和 JSON 文件，操作较繁琐。此外，若 AI 重写了被高亮的原文，原高亮标记可能消失，仅保留在历史记录中。不适合需要实时多人协作评论或直接在 Obsidian 内嵌 AI 对话的用户，它更适合作为 AI 辅助编辑的前端标注工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


