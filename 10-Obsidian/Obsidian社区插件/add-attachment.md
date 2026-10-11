---
uid: 1791709365184000
title: 'Obsidian 插件：Add Attachment'
tags: ['文件管理', '图片与PDF', '编辑工具', '移动端优化', 'obsidian插件']
description: '一次性向笔记添加多个附件，自动插入链接，支持可选重命名和图片缩放。桌面端和移动端均可使用。- 此插件尚未由 Obsidian 官方团队进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Add Attachment

> [!Note] 插件名片
> - 插件名称：Add Attachment
> - 插件作者：olegg90
> - 插件说明：一次性向笔记添加多个附件，自动插入链接，支持可选重命名和图片缩放。桌面端和移动端均可使用。- 此插件尚未由 Obsidian 官方团队进行人工审核。
> - 插件分类：['文件管理', '图片与PDF', '编辑工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/olegg90/obsidian-add-attachments-plg)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?add-attachment)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/olegg90/obsidian-add-attachments-plg/master/README.md)



## 概述

**主要功能**
该插件允许用户一次性将多个附件文件添加至当前笔记，并自动在光标处插入链接。支持可选的文件重命名（格式为“笔记名_序号”）及图片自动压缩缩放。提供“原始添加”命令以保留文件名且不进行缩放。

**适用场景**
适用于需要批量插入图片、文档等附件的场景，特别是移动端（Android）用户，或希望避免笔记库中堆积大量未压缩手机照片的情况。

**核心特色**
1. **批量高效**：单次操作处理多文件，所有链接插入视为一个撤销步骤，操作便捷。
2. **智能重命名**：采用“最大现有序号+1”机制，防止删除中间文件后新文件覆盖旧文件。
3. **入库即压缩**：在文件进入库前完成图片降质与缩放，节省存储空间。
4. **跨平台轻量**：无需Node.js或原生依赖，桌面与移动端通用。

**使用建议**
1. **检查快捷键**：0.6.0版本后命令ID已变更，请重新绑定快捷键及移动端工具栏按钮。
2. **配置路径**：附件保存位置遵循Obsidian全局设置，请提前确认“新附件默认位置”。
3. **按需选择**：若只需插入链接且无需处理文件，请使用“Attach original files”命令以保留原始状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


