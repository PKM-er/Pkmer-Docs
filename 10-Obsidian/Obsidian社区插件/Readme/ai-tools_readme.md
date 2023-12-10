---
uid: 2023120719221662
title: Obsidian 插件：【Readme】AI Tools
tags: ['obsidian插件', 'readme']
description: 将强大的语义搜索、生成式答案和其他人工智能工具添加到Obsidian，使用Supabase + OpenAI。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI Tools

> [!Note] 插件名片
> - 插件名称：AI Tools
> - 插件作者：solderneer
> - 插件说明：将强大的语义搜索、生成式答案和其他人工智能工具添加到 Obsidian，使用 Supabase + OpenAI。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/solderneer/obsidian-ai-tools)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-tools)

## 概述

将强大的语义搜索、生成式答案和其他人工智能工具添加到 Obsidian，使用 Supabase + OpenAI。

![AI Tools](https://cdn.pkmer.cn/covers/ai-tools_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/solderneer/obsidian-ai-tools/master/README.md)
>

---

## Readme(翻译）

下面是 [[ai-tools]] 插件的自述翻译

# Obsidian AI

> 与自己的 LLM 克隆进行对话，甚至为其他人提供主机以进行对话

该插件旨在将**所有有用的 AI 功能**带到 Obsidian，同时保持自托管的理念。目前，它提供了强大的语义搜索和生成式问答功能。未来，我计划添加诸如笔记自动标记、更快的混合搜索等功能。

由 [Supabase Vector](https://supabase.com/vector) 和 [OpenAI API](https://platform.openai.com/docs/introduction) 提供支持。

## 特点

- ✅ 对笔记进行语义搜索
- ✅ 与笔记对话
- ✅ 简单统一的用户界面
- ✅ 提供公共端点，允许他人与您的笔记进行对话

## 愿望清单

- 建议将相关的笔记链接到活动笔记中
- 为笔记建议标签
- 使用关键词和语义匹配进行混合搜索
- 使用自然语言查询前置信息，并进行 SQL 翻译
- （我还有更多的梦想！）

如果您有任何请求，请通过开启一个问题来告诉我 :)

## 演示

![](https://cdn.pkmer.cn/covers/ai-tools_2_0.gif!pkmer)

## 安装

该插件使用 Supabase，您可以选择远程项目或本地项目。我将提供设置的说明。出于方便和可靠性的考虑，我建议使用远程方式。

### 先决条件

1. 一个 Supabase 项目。您可以通过访问 [Supabase 仪表板](https://supabase.com/dashboard/projects) 并按照说明进行设置。
2. 一个 OpenAI 账户和 API 密钥。您可以在 [OpenAI 网站](https://platform.openai.com/docs/quickstart) 上注册一个。

### 指示

#### 设置 Supabase 项目

_使用 Supabase CLI_

1. 按照 [这些说明](https://supabase.com/docs/guides/cli) 安装 Supabase CLI。
2. 登录 Supabase CLI

   ```bash
   supabase login
   ```

3. 克隆此仓库

   ```bash
   git clone git@github.com:solderneer/obsidian-ai.git
   cd obsidian-ai
   ```

4. 链接到远程项目

   ```bash
   supabase link --project-ref <project-id>
   # 你可以从项目的仪表盘 URL 中获取 <project-id>：https://supabase.com/dashboard/project/<project-id>

5. 部署数据库

   ```bash
   supabase db push
   ```

5. 如果你想为公共文档创建一个公共端点，部署 Supabase 函数。

   ```bash
   supabase functions deploy
   ```

_手动_

1. 在项目仪表盘中导航到 **SQL 编辑器**。
2. 在另一个标签页中，导航到此仓库中的 SQL 迁移，并将其复制到一个新的查询中。
3. 运行查询，并验证 **表编辑器** 是否显示了两个表，`document` 和 `document_section`。

#### 安装插件

_从社区插件中_

现在可以直接从 Obsidian 社区插件中获取此插件。导航到设置 > 社区插件 > 浏览，然后搜索 `AI Tools` 来找到并安装它。或者，[点击这里](https://obsidian.md/plugins?id=ai-tools)。然后，您可以继续下面的设置部分。

_手动安装_

1. 前往 [最新版本发布页面](https://github.com/solderneer/obsidian-ai/releases)，下载 `main.js`、`manifest.json` 和 `styles.css`。
2. 将它们复制到您的 Obsidian Vault 中的一个新文件夹 `VaultFolder/.obsidian/plugins/obsidian-id/` 中。
3. 如果 Obsidian 已经在运行，请重新启动 Obsidian。
4. 现在，进入**Obsidian 设置**，导航到**社区插件选项卡**。
5. 您应该在列表中看到 Obsidian AI，点击切换按钮以启用。

#### 设置插件

1. 在**Obsidian 设置**下导航到**Obsidian AI 设置**。
2. 转到之前设置的 Supabase 项目，在**项目设置**下找到 Supabase URL 和 Supabase Service Role Key。
3. 将 Supabase URL 和 Service Role Key 复制到**Obsidian AI 设置**中的相应输入框中。
4. 接下来，转到您的 OpenAI 帐户，获取您的 API 密钥，并将其复制到**Obsidian AI 设置**中的相应输入框中。
5. 您应该看到一个状态指示器，显示为 `✨ [AI] Ready`。这意味着一切正常！
6. 在此时，请记住配置排除的目录，以排除您不想索引的任何目录。
7. 按下 `Cmd/Ctrl + p`，然后搜索 `Obsidian AI: Refresh Index`。执行此操作将计算所有嵌入并将其索引到 Supabase 数据库中。_这可能需要一些时间，请耐心等待。_
8. 完成后，状态指示器应切换回 `✨ [AI] Ready`，并且 Supabase 表应该被填充了条目！

#### 使用方法

1. 按下 `Cmd/Ctrl + p` 并搜索 `Obsidian AI: AI Search`。
2. 选择命令，将出现统一的 UI 模态窗口！
3. 我建议为 AI 搜索配置一个热键，我个人使用的是 `Cmd + a`。

### 使用本地 Supabase 项目替代

#### 先决条件

1. 本地 Supabase 环境。请按照 [Supabase 网站](https://supabase.com/docs/guides/getting-started/local-development) 上的说明进行操作。

#### 指示

不要按照上面的 Supabase 指示，而是执行以下操作。

1. 克隆此存储库并导航到它

   ```bash
   git clone git@github.com:solderneer/obsidian-ai.git
   cd obsidian-ai
   ```

2. 在本地启动 Supabase（还需要安装 docker）

   ```bash
   supabase start
   ```

3. 应用迁移以设置表

   ```bash
   supabase db reset
   ```