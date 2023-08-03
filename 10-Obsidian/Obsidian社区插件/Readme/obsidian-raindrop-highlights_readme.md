---
uid: 20230803231105
title: Obsidian 插件：Raindrop Highlights
tags: ['obsidian插件', 'readme']
description: 同步你的Raindrop.io重点内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232454
---

# Obsidian 插件：Raindrop Highlights

> [!Note] 插件名片
> - 插件名称：Raindrop Highlights
> - 插件作者：kaiiiz
> - 插件说明：同步你的 Raindrop.io 重点内容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kaiiiz/obsidian-raindrop-highlights-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-raindrop-highlights)

## 概述

同步你的 Raindrop.io 重点内容。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaiiiz/obsidian-raindrop-highlights-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-raindrop-highlights]] 插件的自述翻译

# Obsidian Raindrop Highlights 插件（社区插件）

Obsidian Raindrop Highlights（社区插件）是一个非官方插件，用于将 Raindrop.io 网页文章的高亮/注释同步到你的 Obsidian Vault 中。

虽然已经存在一个类似的项目叫做 [Obsidian Raindrop Plugin](https://github.com/mtopping/obsidian-raindrop)，但它还没有支持从 Raindrop 中提取高亮/注释，所以我决定开发自己的版本...

## 特点

- 将网页文章的高亮同步到 Obsidian 中
- 将网页文章的注释同步到 Obsidian 中（仅限 Raindrop PRO 用户）
- 支持嵌套收藏夹（仅限 Raindrop PRO 用户）
- 使用新的高亮和注释更新现有文件（支持 2 种模式）
  - 将新的高亮追加到现有文件的末尾（默认）
  - 使用最新的 Raindrop 文章高亮和元数据覆盖现有文件
- 通过 [Nunjucks](https://mozilla.github.io/nunjucks/) 模板自定义提取的书签内容和前置信息
- 管理要同步的 Raindrop 收藏夹
- 定时自动同步
- 仅同步带有高亮的书签

## 使用方法

安装插件后，配置插件的设置，然后手动启动第一次同步。之后，可以将插件配置为自动同步或手动同步。

使用侧边栏中的 Raindrop 图标或命令 `Raindrop Highlights: Sync highlights` 来触发手动同步。

使用 `Raindrop Highlights: Show last sync time` 命令来检查每个收藏夹的最后同步时间。

使用 `Raindrop Highlights: Open link in Raindrop` 命令在 Raindrop 中打开相应的链接。

### API 令牌

此插件不使用 OAuth 机制。要获取 API 令牌，请按照以下步骤进行操作：

1. 访问您的 Raindrop 帐户的 [集成](https://app.raindrop.io/settings/integrations) 部分
2. 点击“创建新应用”
3. 复制“测试令牌”
4. 粘贴到 Obsidian 插件设置中

**注意**：令牌使用 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 存储，如果同一个保险库在两个不同的窗口中打开，可能会发生冲突。

### 设置

- `连接`：输入 API 令牌以从 Raindrop 中提取亮点
- `断开连接`：从 Obsidian 中删除 API 令牌
- `追加模式`：禁用追加模式可以保持同步文件与 Raindrop 文章的最新状态，但会失去添加或修改同步文件的灵活性。（即旧文件内容将被覆盖！）
- `自动同步间隔`：设置以分钟为单位的自动同步 Raindrop 亮点的间隔
- `亮点文件夹`：指定 Raindrop 文章的文件夹位置
- `收藏夹`：指定要同步到保险库的收藏夹
- `内容模板`：用于渲染内容的 Nunjuck 模板
- `前置事项模板`：用于渲染前置事项的 Nunjuck 模板
- `重置同步`：将上次同步时间重置为重新同步。此操作不会删除之前从您的保险库同步的任何亮点。

### 同步自上次更新以来的所有新亮点

- 在侧边栏中使用 Raindrop 图标或使用命令：`Raindrop Highlights: Sync highlights`

**注意**：请勿触碰前置属性：`raindrop_id` 和 `raindrop_last_update`。这些属性用于识别现有文章，以防止文件和亮点重复。

## 致谢

本项目受到 Hady Ozman 的 [Obsidian Kindle插件](https://github.com/hadynz/obsidian-kindle-plugin) 和 Wei Chen 的 [Obsidian Hypothesis插件](https://github.com/weichenw/obsidian-hypothesis-plugin) 的启发。许多功能都是从他们的作品中迁移过来的，非常感谢他们的努力！

## 限制

- 为了简化实现，该插件仅支持单向同步（即从 Raindrop 到 Obsidian）。如果您将文件从一个文件夹移动到另一个文件夹，Raindrop 中的文章集合将保持不变。Obsidian 中的集合文件夹仅用于文件创建。
- Raindrop API 有 [速率限制](https://developer.raindrop.io/#rate-limiting)，每个经过身份验证的用户每分钟最多可以发出 120 个请求。该插件尽力避免不必要的请求，它只请求在上次同步时间之后更新的文章。



