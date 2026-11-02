---
uid: 1793625613470000
title: "Obsidian 插件：Graph Exclusions"
tags: ["图谱", "界面优化", "效率工具", "obsidian插件"]
description: "Add an Exclusions section to graph view filters to hide notes by path, tag, or file name, with a toggle for each rule. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Exclusions

> [!Note] 插件名片
> - 插件名称：Graph Exclusions
> - 插件作者：matteo
> - 插件说明：Add an Exclusions section to graph view filters to hide notes by path, tag, or file name, with a toggle for each rule. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matteoandradeboschi/graph-exclusions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-exclusions)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matteoandradeboschi/graph-exclusions/master/README.md)



## 概述

Graph Exclusions 旨在解决 Obsidian 图谱视图中节点杂乱的问题，通过在全局和本地图谱的过滤器面板中新增“排除”区域，让你能够灵活隐藏特定笔记。其核心功能是提供可复用的排除规则，每条规则都配有独立的开关，允许你根据路径、标签或文件名快速隐藏内容，而无需每次重新编写复杂的搜索过滤器。

典型使用场景包括整理长期归档或临时草稿。例如，你可以创建一条 `path:Archive` 规则来隐藏所有位于归档文件夹下的笔记，保持当前工作区图谱的清爽；或者使用 `file:draft` 规则暂时隐藏所有包含“draft”字样的未完成文件。当你需要查看这些内容时，只需点击对应规则的开关即可恢复显示，无需删除或修改规则本身。

相比仅依赖单一搜索框的传统过滤方式，该插件的特色在于规则的持久化与独立控制。所有排除规则在全局图谱和所有本地图谱间共享，且匹配过程不区分大小写，支持引号包裹含空格的值。此外，当笔记被排除时，指向或源自该笔记的连线也会一并隐藏，从而在视觉上彻底移除干扰项，使图谱结构更加清晰直观。

需要注意的是，由于 Obsidian 图谱视图缺乏公开的过滤 API，该插件通过挂钩内部渲染器实现功能，未来版本更新可能导致兼容性问题失效，若出现异常需查看开发者控制台日志。该插件完全本地运行，不访问网络或库外文件，适合追求图谱整洁的用户，但不适合需要动态实时调整过滤逻辑或依赖复杂脚本交互的高级自动化需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


