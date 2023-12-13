---
uid: 2023082011360437
title: Obsidian 插件：【Readme】oblogger
tags: ['obsidian插件', 'readme']
description: 标签浏览器和前置信息记录器
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】oblogger

> [!Note] 插件名片
> - 插件名称：oblogger
> - 插件作者：loftTech
> - 插件说明：标签浏览器和前置信息记录器
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lofttech/obsidian-oblogger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oblogger)

## 概述

标签浏览器和前置信息记录器

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/loftTech/obsidian-oblogger/main/README.md)
>

---

## Readme(翻译）

下面是 [[oblogger]] 插件的自述翻译

关于

**oblogger 仍处于测试阶段，将经常更新！**

oblogger 是 Obsidian 的一个侧边栏插件，主要专注于两个核心功能：

1. **标签浏览器**面板，可以选择要显示的标签组，以及一些预定义的组，如日常、最近的文档、文件和所有未标记的文档（这些预定义的组可以隐藏）
2. 一个有用的模态框，用于将信息记录到新文档的前置元数据中

<p align="center">
    <img width="500" alt="侧边栏预览" src="https://github.com/loftTech/obsidian-oblogger/assets/69363905/2b62b8cf-3579-498a-b3ef-19938c6eb362">
</p>
<p align="center">
    <img width="500" alt="记录器" src="https://github.com/loftTech/obsidian-oblogger/assets/69363905/f4562622-e843-44b9-a2f9-c65356e11379">
</p>

## 特点

- 标签浏览器
  - 使用前置元数据自定义笔记图标
  - 支持 Obsidian 书签
    - 书签的笔记/文件将以书签图标表示
    - 书签的笔记/文件将显示在其所属组的顶部
  - **最近**列表
    - 状态指示器显示未以任何方式标记的笔记
    - 可以在列表中循环显示最近的 5、10 和 15 个笔记
  - 非 Markdown **文件列表**
    - 无论文件夹如何自动组织
    - 不同的排序组
  - **每日笔记**部分，用于按年/月/日对标记为“#daily”的笔记进行排序
    - “#daily”可以更改为您想要与每日笔记相关联的任何标签
  - **未标记的笔记列表**
  - **自定义标签组**允许您将任何标签添加为组
    - 支持标签嵌套
    - 支持每个文件多个标签和每个标签多个文件
    - 支持正文和前置元数据中的标签
  - 使用照片作为侧边栏的**头像**，为其添加一些个性
    - 默认头像将显示存储库的首字母
- **日志模态框**
  - 自定义日志路径（不支持日志记录到存储库的根目录）
  - 简单的前置元数据生成
    - 添加新字段
    - 基于先前记录的数据的建议弹出窗口

## 路线图

- 版本 2.0 及以后
  - " 预定 " 日志记录
  - " 会话 " 日志记录
  - 连续日志记录
  - 日志记录正文字段中的丰富编辑器功能
  - 从侧面板重命名文件
  - 控制/命令点击以新标签页打开
  - 多选
  - 扩展前置编辑
常见问题解答

- 为什么我不能从侧边栏重命名笔记/文件？
  - 因为这很困难 :( 如果你找到了一种干净的方式来链接到 FileExplorer 核心插件，请告诉我们！
- 为什么我不能登录到根保险库文件夹？
  - 因为你没有吃蔬菜
- 如何删除头像图片？
  - 你需要打开 oblogger 的 data.json 文件并删除 `avatarPath` 设置。很抱歉 :(（即将推出的功能）
- 我至少可以**隐藏**我的头像吗？
  - 当然可以！点击导航栏的齿轮图标，你可以隐藏各种东西。
- 如何设置自定义文档图标？
  - 在文件的正文中添加 `icon: "..."`。`...` 可以是来自<https://lucide.dev> 的几乎任何东西，例如尝试在文件中添加>`icon: "dog"` :)
- 我昨天创建了一个日记，现在我的日记顺序错乱了？
  - 默认情况下，我们使用 `file.ctime` 来排序日记。但是，你可以通过在正文中添加 `created: YYYY-MM-DD` 或 `day: YYYY-MM-DD` 来覆盖日期。
- 我如何为你们的辛勤工作付费？
  - 非常感谢！请参阅 [给我买杯咖啡](#buy-me-a-coffee)
如何构建

`npm run dev` 用于调试和监视

`npm run build` 用于发布

致谢

我们要感谢 [obsidian plugin-dev discord server](https://discordapp.com/channels/686053708261228577/840286264964022302) 在我们遇到困难时给予我们的所有帮助。如果你正在阅读这篇文章并且正在开发主题、插件，或者只是想更多地参与 obsidian 社区，那么请你自己一个忙，[加入那个discord频道](https://discord.gg/obsidianmd)。
