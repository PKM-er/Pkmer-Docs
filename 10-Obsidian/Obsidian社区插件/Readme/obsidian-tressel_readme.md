---
uid: 2023080322284789
title: Obsidian 插件：Tressel Sync for Obsidian
tags: ['obsidian插件', 'readme']
description: Tressel 官方插件，可将您的推文和线程同步/导出到 Obsidian 中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Tressel Sync for Obsidian

> [!Note] 插件名片
> - 插件名称：Tressel Sync for Obsidian
> - 插件作者：Tressel
> - 插件说明：Tressel 官方插件，可将您的推文和线程同步/导出到 Obsidian 中
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tresselteam/obsidian-tressel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tressel)

## 概述

Tressel 官方插件，可将您的推文和线程同步/导出到 Obsidian 中

![Tressel Sync for Obsidian](https://cdn.pkmer.cn/covers/obsidian-tressel.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tresselteam/obsidian-tressel/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-tressel]] 插件的自述翻译

# Tressel Sync for Obsidian

![](https://tressel.xyz/open-graph-image.png)

官方 Tressel 插件，用于将**Twitter、Reddit、Kindle、Pocket、Instapaper、Raindrop、Hypothes.is、Hacker News 等**中的内容/高亮保存和导出到 Obsidian 中。

## 指南

1. 安装插件
2. 从 [Tressel应用](https://app.tressel.xyz) 的访问令牌/Obsidian 设置部分中复制您的个人令牌到 Obsidian 中的 Tressel 插件设置中
3. **完成了！** 每次打开 Obsidian 时，您保存的内容将自动同步
4. *可选 - 您可以点击侧边栏中的 Sync Tressel 按钮手动从 Tressel 同步*
5. *可选 - 您可以在 [Tressel应用](https://app.tressel.xyz) 的设置中点击 Clear Sync Memory 来重新同步您的所有内容*

## 注意事项

如需提出功能请求、报告错误或请求使用插件的帮助，请发送电子邮件至 hello@tressel.xyz，创建问题或使用 [Tressel应用](https://app.tressel.xyz) 中的帮助与支持表单。

## 更新日志

- 0.2.8
  - 更新了一些失效的链接
- 0.2.7
  - 支持 Raindrops（即链接/书签）
- 0.2.6
  - 添加了子文件夹组织偏好设置
  - 添加了从高亮中删除主标题的偏好设置
- 0.2.5
  - 支持 Hypothes.is 注释/高亮
- 0.2.4
  - 支持 Raindrop 高亮
- 0.2.3
  - 支持 Instapaper 高亮
- 0.2.2
  - 支持 Hacker News 高亮
- 0.2.1
  - 只有在这些文件夹的内容存在时才创建子文件夹
- 0.2.0
  - 修复了将大量高亮同步到 Obsidian 时出现的问题
  - 修复了在同步之前未创建 Tressel 文件夹的问题
  - 在插件设置中添加了帮助和支持链接以及重新同步按钮
  - 内部改进
    - 按功能模块化代码
- 0.1.9
  - 支持 Pocket 高亮
- 0.1.8
  - 支持通用高亮
  - 从设置中更改文件夹名称
  - 从设置中清除同步内存
  - 添加文件夹以组织高亮（例如，推文放入/Twitter/Tweets 子目录）
- 0.1.7
  - 修复了随机出现的“提供的令牌无效”错误
- 0.1.6
  - 支持从 Tressel 同步 Kindle 高亮
- 0.1.5
  - 支持从 Tressel 同步 Reddit 帖子和评论
- 0.1.4
  - 更新 API URL
- 0.1.3
  - 将清除同步内存移到 Tressel 仪表板设置中（之前在插件设置中）
  - 在从 Tressel 获取新推文/推文集时提高性能
  - 内部改进：
    - 添加额外的错误消息记录（用于支持查询）
    - 使用令牌身份验证从 Node.js 服务器获取数据（之前是 Firebase 无服务器）
- 0.1.2
  - 将对话导出到 Obsidian（新功能）
- 0.1.1
  - 修复了 Markdown 模板间距、元数据和标题问题
- 0.1.0
  - 将图片添加到从 Tressel 同步的推文和线程中
  - 内部改进：
    - 使用 Obsidian Vault API 而不是 Adapter API
    - 使用 Obsidian 请求 API 而不是 axios（以提高移动设备兼容性和减小捆绑大小）
    - 使用 async/await 而不是.then（以提高代码可读性）
- 0.0.2
  - 限制插件仅适用于桌面使用（由于在移动设备上缺乏测试）
- 0.0.1
  - 初始发布
  - 将您的推文和线程从 Tressel 同步到 Obsidian（仅文本）



