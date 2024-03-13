---
uid: 20231215133000
title: 使用简悦 SimpRead 与 Thino 进行联动
tags:
  - obsidian
  - thino
  - 简悦
description: 通过 Thino HTTP Api 实现简悦 SimpRead 与 Thino 的联动
author: Alexinea
type: other
draft: false
editable: false
modified: 20231220113611
id: 29f5cf727b2a03f6
---

# 使用简悦 SimpRead 与 Thino 进行联动

[[01_Thino Basic Tutorial|Thino]]出于 Memos 而胜于 Memos，从 2.1.4 版本开始支持通过 HTTP APIs 创建 thino 条目。因此，可以通过简悦 SimpRead 的 Webhook 来实现这种联动。

在简悦配置界面的 <kbd>服务</kbd> / <kbd>Webhook</kbd> 一节增加配置：

```json
{"name":"Webhook2Thino","url":"http://localhost:43999/create","type":"POST","fmt":"md","headers":{"Content-Type":"application/json"},"body":{"isList":true,"type":"DAILY","text":"{{content}}"}}
```

参数说明：

- 服务名为 `Webhook2Thino`，阁下可自定义
- 使用 Markdown 格式写入
- 默认写入日记（DAILY 模式）
- 非 TODO 模式

随后，在网页的阅读模式下，菜单选择 <kbd>动作</kbd> / <kbd>保存</kbd> 一节选择 `Webhook2Thino` 服务即可
