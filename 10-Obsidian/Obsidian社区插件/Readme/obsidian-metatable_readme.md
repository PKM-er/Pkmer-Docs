---
uid: 2023080322223097
title: Obsidian 插件：【Readme】Metatable
tags: ['界面相关', '美化', 'obsidian插件', 'readme']
description: 将  front-matter 显示为可折叠表格样式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Metatable

> [!Note] 插件名片
> - 插件名称：Metatable
> - 插件作者：Arnau Siches
> - 插件说明：将 front-matter 显示为可折叠表格样式
> - 插件分类：[' 界面相关 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/arnau/obsidian-metatable)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-metatable)

## 概述

将 front-matter 显示为可折叠表格样式

![Metatable](https://cdn.pkmer.cn/covers/obsidian-metatable.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/arnau/obsidian-metatable/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-metatable]] 插件的自述翻译

## Obsidian 元表

一个用于 [Obsidian] 的插件，可以显示完整的前置元数据块，而不仅仅是标签列表。

![截图](screenshot.png)

## 更新日志

- 0.14.6
  - 修复移动端渲染问题（#45）。这是由于 Webkit 的一个 bug 引起的，强制删除了对根 `summary` 的自定义。
  - 修复相对链接问题（#47）。
- 0.14.5
  - 处理别名作为特殊情况（#49）。
- 0.14.4
  - 升级到 Obsidian 1.1 版本。
  - 升级依赖项以修复 CVE-2022-46175。
- 0.14.3
  - 修复问题（#37），本地 URL 不应该被编码为 URI。
  - 修复标签部分不应该被编码为 URI。
- 0.14.2
  - 修复问题（#38），标签 URL 不应该被编码为 URI。
- 0.14.1
  - 修复问题（#36），当标签以空格分隔时，标签应该被规范化。
- 0.14.0
  - （**破坏性更改**）重构标记并使用 [Solid.js](https://www.solidjs.com/) 替代纯 DOM。
  - （**破坏性更改**）规范化自定义属性。请参阅 [自定义颜色和符号](https://github.com/arnau/obsidian-metatable/blob/main/docs/sections/customising_colours_and_symbols.md) 获取完整列表。
  - 添加叶子类型的部分（数字、布尔、空值、ISO 日期）。
  - 添加新的 [文档](./docs)。**它作为一个 Obsidian 保险库工作**。
  - 添加侧边栏视图。
  - 添加实验性的“紧凑”边界，当容器小于 260px 时更改样式。如果 Obsidian 有支持 [CSS 容器查询](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) 的 Web 渲染器，将会撤销此更改。
  - 添加 Markdown 自动链接。

请参阅 [更新日志](./CHANGELOG.md) 获取完整的版本列表。或者查看 [决策日志](./docs/decision_log/) 获取主要设计选择。

## 配置

在“社区插件”部分启用插件后，您就可以开始使用了。

要查看效果，您需要打开一个新文档或重新启动保险库。

请查看 [文档](./docs/index.md) 以获取入门指南、自定义策略、示例等更多信息。

安装

从 Obsidian：

- 确保启用了社区插件。
- 浏览社区插件，搜索**metatable**。
- 点击安装。
- 在“社区插件”设置部分启用插件。
- 打开一个文件（请注意，之前打开的文件在重新打开或更改之前不会受到插件的影响）。

从发布版本：

- 从所选发布版本下载 `obsidian-metatable-{version}.zip` 文件，例如 [最新发布版本]。
- 在设置中确保启用了“社区插件”。
- 确保您的存储库目录中存在 `.obsidian/plugins/` 目录。
- 将 zip 文件解压缩到 `.obsidian/plugins/` 目录中，使 `obsidian-metatable` 目录直接位于 `plugins` 下。
- 在“社区插件”设置部分启用插件。
- 打开一个文件（请注意，之前打开的文件在重新打开或更改之前不会受到插件的影响）。

从源代码：

- 克隆 [源代码存储库]。
- 运行 `npm install`。
- 运行 `npm run build`。
- 在您的存储库的 `.obsidian/plugins/` 目录下创建一个 `obsidian-metatable` 目录。
- 复制 `main.js`、`versions.json` 和 `manifest.json`。
- 在“社区插件”设置部分启用插件。
- 打开一个文件（请注意，之前打开的文件在重新打开或更改之前不会受到插件的影响）。

## 许可证

Arnau Siches 根据 [MIT许可证](./LICENCE) 发布

[Obsidian]: <https://www.obsidian.md/>
[最新版本]: <https://github.com/arnau/obsidian-metatable/releases/latest>
[源代码仓库]: <https://github.com/arnau/obsidian-metatable>



