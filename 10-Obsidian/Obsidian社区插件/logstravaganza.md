---
uid: 2024052909022568
title: Obsidian 插件：Logstravaganza
tags: ['编辑工具', '数据处理', '日志与记录', 'obsidian插件']
description: 一个简单的代理，用于将`console.*()`调用的日志消息和未捕获的异常复制到一个注释中。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Logstravaganza

> [!Note] 插件名片
> - 插件名称：Logstravaganza
> - 插件作者：Carlo Zottmann
> - 插件说明：一个简单的代理，用于将 `console.*()` 调用的日志消息和未捕获的异常复制到一个注释中。
> - 插件分类：[' 编辑工具 ', ' 数据处理 ', ' 日志与记录 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/czottmann/obsidian-logstravaganza)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logstravaganza)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/czottmann/obsidian-logstravaganza/main/README.md)

## 概述

Logstravaganza 是 Obsidian 的一个插件，可将所有控制台输出和未捕获的异常复制到您的笔记中。主要面向开发人员，使移动插件的调试更容易。您可以要求客户安装此插件，并在报告错误时向您发送日志笔记。插件初始化后立即开始记录。日志笔记将在您的 Vault 根目录中创建。当插件被激活并代理 `console` 调用时，所有输出将显示为来自 `plugin:logstravaganza`。通过 Obsidian 工作方式，插件无法知道初始化前发生的控制台输出。适用于日志记录和调试需求。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



