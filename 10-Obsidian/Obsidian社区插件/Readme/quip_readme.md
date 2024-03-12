---
uid: 20231220112631
title: Obsidian 插件：Quip
tags: ['obsidian插件', 'readme']
description: 发布Obsidian笔记到Quip.com的命令
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quip

> [!Note] 插件名片
> - 插件名称：Quip
> - 插件作者：sblakey
> - 插件说明：发布 Obsidian 笔记到 Quip.com 的命令
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sblakey/obsidian-quip)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quip)

## 概述

发布 Obsidian 笔记到 Quip.com 的命令

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sblakey/obsidian-quip/master/README.md)

---

## Readme(翻译）

下面是 [[quip]] 插件的自述翻译

# Obsidian 的 Quip 插件

这是一个简单的 Obsidian 插件（<<https://obsidian.md>），用于与> Quip（Salesforce 的轻量级文档工具，而不是牙刷）进行通信。>

**注意：** Obsidian API 仍处于早期测试阶段，随时可能发生变化！

目前，该插件提供了两个命令：

- **发布为新的 Quip 文档**，使用 Obsidian 内部功能创建一个用于导入到 Quip 的 HTML 文档。
- **更新现有的 Quip 文档**，使用 Obsidian 的最新渲染覆盖现有的 Quip 文档。

有关如何使用这个代码库的注意事项，请参阅 [DEVELOPING.md](./DEVELOPING.md)。

## 将此插件安装为 Beta 测试者

1. 在 Obsidian 的 Community Plugins 中安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. 复制链接<https://github.com/sblakey/obsidian-quip>
3. 打开命令面板并运行命令**BRAT: Add a beta plugin for testing**
4. 使用第 2 步的链接，将其复制到打开的模态框中
5. 点击 "Add Plugin" -- 等待几秒钟，BRAT 会告诉您正在发生什么
6. 在 BRAT 确认安装后，进入设置，转到**Community plugins**选项卡。
7. 刷新插件列表
8. 找到刚刚安装的 Beta 插件 - "Obsidian Quip" - 并启用它。

链接到您的企业 Quip 实例

您需要为此插件提供两个设置：门户 API 端点和您的开发者密钥。

您使用 Quip 的企业帐户必须满足 [访问自动化API的许可要求](https://quip.com/dev/automation/documentation/current#section/License-Requirements)。

| 如果您通常在浏览器中使用 quip 的网址为 | 您的 API 主机名为 | 您可以在以下网址获取您的开发者令牌 |
| ------------------------------------------ | ---------------------------- | ------------------------------------- |
| quip.com                                   | platform.quip.com            | <https://quip.com/dev/token>            |
| CUSTOMER.onquip.com                        | platform.CUSTOMER.onquip.com | <https://CUSTOMER.onquip.com/dev/token> |
| quip-CUSTOMER.com                          | platform.quip-CUSTOMER.com   | <https://quip-CUSTOMER.com/dev/token>   |

请注意，您在所有自动化工具中一次只能拥有一个“开发者令牌”：命令行脚本、Greasemonkey/Tampermonkey 浏览器扩展和像这样的插件。与其只是从“/dev/token” URL 中复制粘贴，我强烈建议将此令牌保存在您选择的密码管理器中（Bitwarden、1Password、KeePass 等）。

什么有效，什么无效

基于 Obsidian 的 [如何格式化您的笔记](https://help.obsidian.md/How+to/Format+your+notes) 的测试表格

| Obsidian Markdown | 发布到 Quip              |
| ----------------- | ---------------------- |
| 内部链接          | :x:                    |
| 嵌入              | 请参见下文              |
| 标题              | :white_check_mark:     |
| 无序列表          | :white_check_mark:     |
| 有序列表          | :white_check_mark:     |
| 嵌套列表          | :white_check_mark:     |
| 任务列表          | :x:                    |
| 外部图片          | :white_check_mark:     |
| 调整图片大小      | :x:                    |
| 嵌入图片          | :white_check_mark:     |
| 块引用            | :x:                    |
| 表格              | :white_check_mark:     |
| 脚注              | :x:                    |
| 数学公式          | :x:                    |
| 代码              | :white_check_mark:     |
| 高亮              | :x:                    |
| Callouts          | :x:                    |
| 评论              | :white_check_mark:     |
| 嵌入画布          | :x:                    |
| Mermaid           | :x:                    |

### 可配置的处理

该插件努力以你期望的方式对内容进行处理，这些处理可以在设置中禁用：

1. 如果存在的话，将会在发布之前将 [YAML前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front-matter) 从内容中剥离。
2. 如果存在的话，将会递归解析并内联 [嵌入笔记](https://help.obsidian.md/How+to/Embed+files)。



