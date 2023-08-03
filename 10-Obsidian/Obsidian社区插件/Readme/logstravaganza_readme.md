---
uid: 20230803231105
title: Obsidian 插件：Logstravaganza
tags: ['obsidian插件', 'readme']
description: 一个简单的代理，用于将`console.*()`调用的日志消息和未捕获的异常复制到一个注释中。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232547
---

# Obsidian 插件：Logstravaganza

> [!Note] 插件名片
> - 插件名称：Logstravaganza
> - 插件作者：Carlo Zottmann
> - 插件说明：一个简单的代理，用于将 `console.*()` 调用的日志消息和未捕获的异常复制到一个注释中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/czottmann/obsidian-logstravaganza)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logstravaganza)

## 概述

一个简单的代理，用于将 `console.*()` 调用的日志消息和未捕获的异常复制到一个注释中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/czottmann/obsidian-logstravaganza/main/README.md)
>

---

## Readme(翻译）

下面是 [[logstravaganza]] 插件的自述翻译

# Logstravaganza

**控制台之旅的冒险**

该插件将所有控制台输出和未捕获的异常复制到您的笔记中。它主要面向开发人员，可以更轻松地调试移动插件（效果因人而异）。您可以要求您的客户安装此插件，并在他们报告错误时向您发送日志笔记。

它将在初始化后立即开始记录。日志笔记 `LOGGING-NOTE（设备名称）.md` 将在您的笔记库的根目录中创建。（注意：`设备名称` 是一个占位符，将被实际设备名称替换，由 Sync 核心插件返回。无论是否激活 Sync，都可以使用此功能。）由于 Obsidian 的工作方式，插件无法了解在插件初始化之前发生的过去的日志消息，即 `console` 输出。

**请注意：**当此插件处于活动状态并代理 `console` 调用时，所有输出到实际控制台的输出都将显示为来自 `plugin:logstravaganza`。

欢迎提交错误报告和功能请求，请随时在 GitHub 上 [提交问题](https://github.com/czottmann/obsidian-logstravaganza/issues)。有关讨论，请访问 [插件论坛](https://forum.actions.work/c/logstravaganza-obsidian-plugin/8)（启用了“使用 GitHub 登录”）。

| 时间戳 | 发起者 | 级别 | 消息 |
| --------- | ---------- | ----- | ------- |
| 2023-05-10T17:37:46.457Z | plugin:logstravaganza | INFO | [Logstravaganza] 代理设置完成 (v1.1.1) |
| 2023-05-10T17:37:46.632Z | plugin:actions-uri:10201:11 | LOG | 注册的 URI 处理程序: ["actions-uri","actions-uri/dataview","actions-uri/dataview/table-query", ……… |
| 2023-05-10T17:37:46.632Z | plugin:omnisearch:45:7203 | TIME | Omnisearch - 总索引时间 |
| 2023-05-10T17:37:46.632Z | plugin:omnisearch:45:7325 | LOG | Omnisearch - 共计 42 个文件 |
| 2023-05-10T17:37:46.632Z | plugin:omnisearch:45:7377 | LOG | Omnisearch - Omnisearch - 缓存已启用 |
| 2023-05-10T17:37:46.696Z | plugin:dataview:12571:17 | LOG | Dataview: 所有 42 个文件已在 0.065 秒内完成索引 (40 个缓存，0 个跳过)。 |
| 2023-05-10T17:38:24.580Z | app.js:1:1973721 | LOG | 收到 URL 操作 {"if-exists":"skip","x-error":"actions-for-obsidian://x-callback-url/response? ……… |
| 2023-05-10T17:38:24.608Z | plugin:actions-uri:10201:11 | LOG | 调用已处理: {"params":{"action":"actions-uri/note/create","vault":"Testbed","debug-mode":false, ……… |

## 安装

1. 在 Obsidian 的社区插件浏览器中搜索 "Logstravaganza"。([点击此链接](https://obsidian.md/plugins?id=zottmann) 可以直接打开)
2. 安装插件。
3. 在 Obsidian 的设置中启用插件，选择 "Community plugins"。

就是这样。

## 通过<abbr title="Beta Reviewers Auto-update Tester">BRAT</abbr>进行安装（用于预发布版或测试版）

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)。
2. 将 "Logstravaganza" 添加到 BRAT 中：
    1. 通过设置→社区插件打开 "Obsidian42 - BRAT"。
    2. 点击 " 添加 Beta 插件 "。
    3. 使用存储库地址 `czottmann/obsidian-logstravaganza`。
3. 在设置→选项→社区插件下启用 "Logstravaganza"。

开发

克隆存储库，运行 `pnpm install` 或 `npm install` 来安装依赖项。然后，运行 `pnpm dev` 或 `npm run dev` 来编译并监视文件更改。

## 作者

Carlo Zottmann，<carlo@zottmann.co>，<https://zottmann.co/，https://github.com/czottmann>

免责声明

使用风险自负。事情可能会出现严重问题。我对任何数据丢失或损坏不负责任。你已经被警告。

始终备份你的数据。真的。

## 许可证

MIT，参见 [LICENSE.md](LICENSE.md)。
