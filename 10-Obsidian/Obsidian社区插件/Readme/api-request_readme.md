---
uid: 2023080322140709
title: Obsidian 插件：【Readme】APIRequest
tags: ['obsidian插件', 'readme']
description: 从API中请求和检索数据。响应以JSON格式传递，以便与您的笔记轻松集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：APIRequest

> [!Note] 插件名片
> - 插件名称：APIRequest
> - 插件作者：rooyca
> - 插件说明：从 API 中请求和检索数据。响应以 JSON 格式传递，以便与您的笔记轻松集成。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Rooyca/obsidian-api-request)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?api-request)

## 概述

从 API 中请求和检索数据。响应以 JSON 格式传递，以便与您的笔记轻松集成。

![APIRequest](https://cdn.pkmer.cn/covers/api-request.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Rooyca/obsidian-api-request/master/README.md)
>

---

## Readme(翻译）

下面是 [[api-request]] 插件的自述翻译

# APIR - Api 请求

Obsidian 插件，允许您向 API 发送请求并以 JSON 块或 Obsidian 变量的格式接收响应。

![conf_img](config_img.png)

## Obsidian 社区插件浏览器

- 进入设置 -> 第三方插件
- 确保限制模式为**关闭**
- 点击浏览社区插件
- 搜索 "API 请求 "
- 点击安装

## 手动安装

- 将 `main.js` 和 `manifest.json` 复制到您的 vault 中。`VaultFolder/.obsidian/plugins/obsidian-api-request/`。

使用方法

### 使用配置

要使用该插件，请按下 `Ctrl+P` 并搜索 "API Request"。插件将向您展示两个选项：

1. 在模态框中显示响应
2. 将响应粘贴到当前文档（在当前行）

选择适合您需求的选项。此外，您还可以配置插件以将响应输出为 JSON 块格式或作为 Obsidian 变量。可以通过插件的设置访问此选项。

### 使用 Markdown 块

要使用该插件，创建一个语言设置为 `apir` 的代码块。在代码块内部，您可以指定 URL 和要显示的请求内容。插件将自动用 API 的响应替换代码块。以下是一个快速示例：

```apir
url: https://jsonplaceholder.typicode.com/todos/1
showthis: title
```

或者您只需输入 URL，插件将显示整个响应。

## 设置

该插件有一些可以配置的设置：

- **URL**：要发送请求的 URL。
- **输出格式**：选择 JSON 块或 Obsidian 变量之间的选择。
- **请求方法**：选择 GET、POST、PUT 和 DELETE 之间的选择。
- **请求数据**：要与请求一起发送的数据。数据应该是 JSON 格式的。
- **响应数据**：要显示的响应数据。如果为空，将显示所有数据。

## 待办事项

- [x] 添加更多的请求类型（POST、PUT、DELETE）
- [ ] 添加对认证的支持
- [x] 添加模态输出的可定制性（例如，仅显示特定字段、更改颜色方案、添加自定义 CSS）
- [x] 添加变量输出的可定制性（例如，仅显示特定字段、更改变量名称）
- [ ] 改进错误处理并提供有意义的错误消息
- [ ] 提供全面的文档和示例供用户参考

反馈和贡献

如果您遇到任何问题或对插件有任何反馈，请随时在 [GitHub存储库](https://github.com/Rooyca/obsidian-api-request) 上提出问题。也欢迎贡献！
