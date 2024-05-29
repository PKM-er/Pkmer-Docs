---
uid: 2024052908390215
title: Obsidian 插件：AI Zhipu
tags: ['自动化与AI', '数据处理', 'obsidian插件']
description: 使用ZhipuAI API 生成文本。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Zhipu

> [!Note] 插件名片
> - 插件名称：AI Zhipu
> - 插件作者：Tarslab
> - 插件说明：使用 ZhipuAI API 生成文本。
> - 插件分类：[' 自动化与 AI', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/TarsLab/obsidian-ai-zhipu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-zhipu)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/TarsLab/obsidian-ai-zhipu/main/README.md)

![AI Zhipu](https://cdn.pkmer.cn/covers/ai-zhipu.gif!pkmer)

## 概述

AI-zhipu 是一个 Obsidian 插件，帮助您利用 Zhipu API 生成内容、从文本创建图片、基于知识数据库回答问题等 AI 功能。您可以自定义提示模板，构建基于 Zhipu AI 的独家知识管理系统。

使用方法：

- 初始化插件后，会在 vault 目录下自动创建 `Aizhipu` 文件夹，并创建提示模板文件，包括中英文模板。
- 在 [ZhiPu网站](https://open.bigmodel.cn) 注册账户，获取 API 密钥，并在插件设置中输入。
- 进入编辑模式
- 选择提示，激活“从选定的文本/行/块生成”，然后选择提示模板。
- 查看最后一次对话的详细信息，包括提示和 token 使用情况。

要求：

- 需要 [ZhiPu AI](https://open.bigmodel.cn) 的 API 密钥
- 使用“从选定的文本/行/块生成”命令时需要网络连接
- 使用 ZhiPu API 会产生费用，详细费用信息请参考 [ZhiPu官方网站](https://open.bigmodel.cn)，生成图片消耗大量 token。

安装方式：

1. 从发布页面下载 `manifest.json` 和 `main.js` 到 `<vault>/.obsidian/plugins/ai-zhipu`
2. 刷新已安装的插件
3. 启用 AI Zhipu。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



