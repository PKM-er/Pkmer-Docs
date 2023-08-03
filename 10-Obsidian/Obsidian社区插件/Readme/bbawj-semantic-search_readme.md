---
uid: 20230803231105
title: Obsidian 插件：Semantic Search
tags: ['obsidian插件', 'readme']
description: 使用OpenAI的文本嵌入进行文件的语义搜索。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232615
---

# Obsidian 插件：Semantic Search

> [!Note] 插件名片
> - 插件名称：Semantic Search
> - 插件作者：bbawj
> - 插件说明：使用 OpenAI 的文本嵌入进行文件的语义搜索。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bbawj/obsidian-semantic-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bbawj-semantic-search)

## 概述

使用 OpenAI 的文本嵌入进行文件的语义搜索。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bbawj/obsidian-semantic-search/main/README.md)
>

---

## Readme(翻译）

下面是 [[bbawj-semantic-search]] 插件的自述翻译

基于您的意图查找所需内容。这是一个由 OpenAI 的嵌入式 API 提供支持、使用 WASM 和 Rust 构建的新文件切换工具。

## 命令

|命令|描述|
|-------|-----------|
|生成输入|根据笔记中的章节生成输入的 csv 文件。目前，章节被定义为标题之间的文本块。生成的输入保存在根文件夹中的 `input.csv` 文件中。
|生成嵌入|通过 OpenAI 的 `text-embedding-ada-002` 嵌入模型获取嵌入。这需要先成功执行生成输入命令。生成的嵌入保存在根文件夹中的 `embedding.csv` 文件中。
|打开查询模态框|使用生成的嵌入在笔记中进行语义搜索。
|使用当前选择推荐链接|使用当前编辑器的选择作为查询输入，自动创建一个带有您选择的 markdown 链接。也可以通过鼠标右键在上下文菜单中触发。

## 配置

|设置|描述|
|-------|-----------|
|API 密钥| 您的 OpenAI API 密钥，可以在 [此处](https://platform.openai.com/account/api-keys) 找到。此密钥将存储在 `data.json` 中，与所有 Obsidian 插件设置数据一样，请确保不要将此文件提交到存储库中。
|节分隔符| 用于确定当前行是否是新节的正则表达式。节用于将相关内容分组在一起。默认为 `.`，表示每行都是一个新节的开始。例如，匹配每个标题：`^#{1,6} `
|要忽略的文件夹| 生成输入时要忽略的文件夹。输入文件夹路径时请使用换行符分隔。
|批次数量| 用于调用 OpenAI 端点的批次数量。如果您有大量数据，并且遇到无效请求错误，请尝试增加此数字。
|启用使用 `{{}}` 进行链接推荐| 使用 `{{}}` 作为触发文件链接的语义搜索建议的方式。

*所有设置当前都需要重新加载才能生效*。

<https://user-images.githubusercontent.com/53790951/231014867-ce37c097-3b22-412a-9b1a-74204b0f167c.mp4>

安装

从 Obsidian v1.0.0 开始，可以在 Obsidian 内部激活此插件：

1. 打开设置 > 第三方插件
2. 确保安全模式已关闭
3. 点击浏览社区插件
4. 搜索“语义搜索”
5. 点击“安装”按钮
6. 安装完成后，关闭社区插件窗口
7. 在“已安装插件”部分，启用语义搜索

从 Github

1. 下载 [最新版本发布](https://github.com/bbawj/obsidian-semantic-search/releases)
2. 将发布的 zip 文件内容解压到您的 vault 的插件文件夹中：<vault>/.obsidian/plugins/ 注意：在 MacOS 上，默认情况下，.obsidian 文件夹可能是隐藏的。
3. 重新加载 Obsidian
4. 打开设置，第三方插件，确保安全模式已关闭，并从那里启用“语义搜索”。

贡献

欢迎贡献！

### 开始

1. 克隆仓库
2. 进入新创建的文件夹并运行 `yarn install`
3. 运行 `yarn run dev`

## 注意

目前，这个插件仍处于实验阶段，请自行承担使用风险。测试是在 Windows 上进行的。

感谢 [罗伯特的博客文章](https://reasonabledeviations.com/2023/02/05/gpt-for-second-brain/?utm_source=pocket_saves) 提供的思路和灵感！
