---
uid: 20231025123837
title: Obsidian 插件：Version History Diff (Sync, File Recovery & Git) 文件历史对比一键搞定
tags: [obsidian插件]
description: 比较同步和文件恢复插件以及当前文件的Git版本历史。添加一个命令来打开同步插件的版本历史。
author: OS
type: other
draft: false
editable: false
modified: 20231025154412
modie240: 20231025153747
---

# Obsidian 插件：Version History Diff (Sync, File Recovery & Git) 文件历史对比一键搞定

## 概述

比较同步和文件恢复插件以及当前文件的 Git 版本历史。添加一个命令来打开同步插件的版本历史。

> [!Note] 插件名片
> - 插件名称：Version History Diff (Sync, File Recovery & Git)
> - 插件作者：kometenstaub
> - 插件说明：比较同步和文件恢复插件以及当前文件的 Git 版本历史。添加一个命令来打开同步插件的版本历史。
> - 插件分类：['obsidian 插件 ',' 文件历史 ',' 文件恢复 ']
> - 项目地址：[点我访问](https://github.com/kometenstaub/obsidian-version-history-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-version-history-diff)

## 效果&特性

![Version History Diff (Sync, File Recovery & Git)](https://cdn.pkmer.cn/covers/obsidian-version-history-diff.png!pkmer)

1. 显示当前活动文件的**同步**差异
2. 和**文件恢复**差异
3. 和**Git**版本历史记录
   1. 为了使其正常工作，需要安装 [Obsidian Git](https://obsidian.md/plugins?id=obsidian-git) 插件。
4. 在模态框中打开所选版本
5. 将其渲染为 Markdown 或纯文本
6. 您还可以使用此版本覆盖文件。
7. 提供色盲模式
8. 还添加了一个命令，用于打开 Obsidian 的原生同步历史视图，否则只能通过文件菜单访问。

## 使用

> [!Warning] 重要
> 该插件使用私有 API，因此可能随时中断。请自行承担风险。

打开插件，会看到双列布局。右侧选择的版本应该比左侧的版本更新，以便使差异有意义。新增内容会 用 + 号和绿色背景色表示，删除内容会 用 - 号和红色背景色表示。

个人认为文件恢复的差异更好，因为它们不太频繁，比较容易和你的记忆产生有机关联。

对于*同步*，它只显示同步版本。对于*文件恢复*和*Git*，它还显示磁盘上的文件的当前状态作为最新版本。

### 同步差异示例

![image.png](https://cdn.pkmer.cn/images/20231025153854.png!pkmer)

### Git Diff 示例，使用色盲模式

![image.png](https://cdn.pkmer.cn/images/20231025153912.png!pkmer)
