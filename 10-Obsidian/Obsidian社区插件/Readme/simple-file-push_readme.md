---
uid: 2024031219331726
title: Obsidian 插件：【Readme】Simple File Push
tags: ['obsidian插件', 'readme']
description: 将Markdown文件推送到API端点。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Simple File Push

> [!Note] 插件名片
> - 插件名称：Simple File Push
> - 插件作者：Kim Hudaya
> - 插件说明：将 Markdown 文件推送到 API 端点。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/huedaya/obsidian-simple-file-push)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-file-push)

## 概述

将 Markdown 文件推送到 API 端点。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/huedaya/obsidian-simple-file-push/main/README.md)

---

## Readme(翻译）

下面是 [[simple-file-push]] 插件的自述翻译

# 黑曜石简易文件推送博客

黑曜石插件，简单地将 markdown 文件推送到 POST 端点。<br/>
从<https://github.com/yiglas/obsidian-file-publisher>进行了分叉

## 服务器端

您必须提供一个简单的 POST API 端点，能够接收以下 `JSON` 数据：

```json
{
    "file_name": "{{将填充文件名}}"
    "content": "{{将填充文件内容}}"
}
```

API 必须受到 Bearer 授权 `Bearer YOUR_TOKEN` 的保护。

## 插件设置

- 输入 POST 端点 URL（例如 <https://huedaya.com/api/obsidian-blog/sync>）
- 输入 API 密钥（例如 `test`）
创建一个新文件进行发布
只需点击“笔记”并选择“同步文件到我的博客”
- 如果请求失败，请打开开发者窗口 `View > Toggle Developer Tools`。

## 待办事项

- [ ] 为服务器端示例创建存储库

## 支持

[!["请我喝咖啡"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/huedya)
