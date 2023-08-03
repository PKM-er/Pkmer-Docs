---
uid: 20230803231105
title: Obsidian 插件：Version History Diff (Sync, File Recovery & Git)
tags: ['obsidian插件', 'readme']
description: 比较同步和文件恢复插件以及当前文件的Git版本历史。添加一个命令来打开同步插件的版本历史。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232438
---

# Obsidian 插件：Version History Diff (Sync, File Recovery & Git)

> [!Note] 插件名片
> - 插件名称：Version History Diff (Sync, File Recovery & Git)
> - 插件作者：kometenstaub
> - 插件说明：比较同步和文件恢复插件以及当前文件的 Git 版本历史。添加一个命令来打开同步插件的版本历史。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kometenstaub/obsidian-version-history-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-version-history-diff)

## 概述

比较同步和文件恢复插件以及当前文件的 Git 版本历史。添加一个命令来打开同步插件的版本历史。

![Version History Diff (Sync, File Recovery & Git)](https://cdn.pkmer.cn/covers/obsidian-version-history-diff.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-version-history-diff]] 插件的自述翻译

版本历史差异（用于同步和文件恢复核心插件和 Git）

注意

该插件使用私有 API，因此可能随时中断。请自行承担风险。

## 特点

它可以：

1. 显示当前活动文件的**同步**差异
2. 和**文件恢复**差异
3. 和**Git**版本历史记录
   1. 为了使其正常工作，需要安装 [Obsidian Git](https://obsidian.md/plugins?id=obsidian-git) 插件。
4. 在模态框中打开所选版本
5. 将其渲染为 Markdown 或纯文本
6. 您还可以使用此版本覆盖文件。
7. 提供色盲模式
8. 还添加了一个命令，用于打开 Obsidian 的原生同步历史视图，否则只能通过文件菜单访问。

在还原到此状态之前显示笔记的原因是差异可能会误导。

### 同步差异示例

![同步差异更改模态框](https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/demo/sync-diff.png)

![同步差异渲染版本](https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/demo/sync-diff-2.png)

![同步差异纯文本版本](https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/demo/sync-diff-3.png)

### Git Diff 示例，使用色盲模式

![Git Diff暗模式色盲模式删除](https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/demo/git-diff-colorblind.png)

![Git Diff亮模式色盲模式添加](https://raw.githubusercontent.com/kometenstaub/obsidian-version-history-diff/main/demo/git-diff-colorblind-light.png)

用法

有两列。右侧选择的版本应该比左侧的版本更新，以便使差异有意义。

我个人认为文件恢复的差异更好，因为它们不太频繁，但同步的差异也可能有帮助。

对于*同步*，它只显示同步版本。对于*文件恢复*和*Git*，它还显示磁盘上的文件的当前状态作为最新版本。

## 贡献

**在提交 PR 之前，请先提出一个问题。**

## 鸣谢

所有的许可证和归属信息都可以在 `esbuild.mjs` 文件中找到（因此也可以在 `main.js` 发布版本中找到），CSS 许可证在 `src/styles.scss` 中。如果有任何许可证/归属信息缺失，请告诉我，我会进行查找。

特别感谢 @SlRvb 将 CSS 适配到 Obsidian 并制作了色盲模式，以及 @Vinzent03 在 Obsidian Git 插件中创建必要的 API。
