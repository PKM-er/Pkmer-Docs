---
uid: 1793625614194001
title: "Obsidian 插件：Index Card"
tags: ["文件管理", "效率工具", "学习与教育", "obsidian插件"]
description: "Creates index card notes named like N1-3F and N1-3R, without Untitled. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Index Card

> [!Note] 插件名片
> - 插件名称：Index Card
> - 插件作者：sevetech
> - 插件说明：Creates index card notes named like N1-3F and N1-3R, without Untitled. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sevehub/obsidian-index-card)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?index-card)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sevehub/obsidian-index-card/master/README.md)



## 概述

Index Card 插件旨在解决 Obsidian 中新建笔记默认命名为“Untitled”的痛点，通过模拟实体索引卡的工作流，自动创建带有特定编号的笔记。它会在预设的根目录下，根据当前激活笔记所在的节点文件夹，自动分配下一个可用的卡片编号，并生成如 `N1-3F`（正面）和 `N1-3R`（背面）这样的文件名。每张新笔记会自动预填三行日期信息：ISO 标准日期、当年第几天以及 ISO 周日期，确保每张卡片从创建之初就具备清晰的时间标识和唯一的身份标识，无需手动重命名。

典型的使用场景是构建基于节点的知识管理系统。例如，当你正在 `N1` 文件夹中整理笔记时，点击“新建卡片”命令，插件会自动找到该节点下最小的空闲编号，创建 `N1-3F.md` 并打开，让你直接开始记录。如果你需要记录卡片的背面内容，只需在 `N1-3F` 中执行“打开或创建另一面”命令，插件会自动定位到 `N1-3R`，若该文件不存在则立即创建，实现了正反面笔记的无缝切换与关联。

相比通用的模板插件，Index Card 的特色在于其严格的编号逻辑和双面笔记支持。它强制要求笔记结构符合 `N1` 至 `N8` 的节点文件夹规范，并自动处理编号递增，避免了手动维护编号的繁琐。此外，其内置的日期模板不仅包含常规日期，还引入了序数日期和 ISO 周日期，这对于需要按周或按年进行时间序列分析的用户非常实用。这种设计特别适合那些希望将数字笔记与实体纸质笔记本参考系统保持一致的用户。

使用前需注意，该插件对文件夹结构有严格要求，必须在根目录下存在 `N1` 到 `N8` 八个节点文件夹，且默认每个节点最多 20 张卡片，这些参数均可在设置中修改。它不适合需要自由命名笔记、不使用固定节点结构或不需要双面笔记功能的用户。此外，由于插件版本尚早且未经大规模测试，建议先备份数据再启用，以确保工作流的稳定性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


