---
uid: 1793625606559000
title: "Obsidian 插件：Auto Pages"
tags: ["文件管理", "自动化与AI", "效率工具", "obsidian插件"]
description: "Rule-driven auto page creation: watch folders, read a frontmatter property, and create a matching page in a target folder. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Pages

> [!Note] 插件名片
> - 插件名称：Auto Pages
> - 插件作者：cybertarian
> - 插件说明：Rule-driven auto page creation: watch folders, read a frontmatter property, and create a matching page in a target folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cybertarian/obsidian-auto-pages)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?autopage)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cybertarian/obsidian-auto-pages/master/README.md)



## 概述

Auto Pages 是一款基于规则驱动的自动页面创建工具，旨在解决笔记库中“收件箱”与“主题页”分离的管理难题。它通过监控指定文件夹，读取笔记 Frontmatter 中的特定属性（如 `topic`），并在目标文件夹中自动生成或维护对应的主题页面。该插件采用幂等和增量处理机制，仅处理新增或修改的笔记，确保已存在的页面不会被意外覆盖，从而让分散的剪藏或笔记能自动归类到统一的索引页中。

典型的使用场景包括浏览器剪藏管理和属性驱动索引。例如，你可以将浏览器插件保存的剪藏放入 `Clippings` 文件夹，并在每篇笔记的 Frontmatter 中设置 `topic` 属性。Auto Pages 会自动在 `10-topics` 文件夹下创建或更新对应的主题页，将零散的剪藏聚合起来。此外，它也可用于任何基于属性的索引需求，如按项目代码、状态桶或标签进行自动归档，只需配置相应的监控文件夹和属性名即可。

相比同类插件，Auto Pages 提供了更灵活的规则配置和重复内容处理能力。它支持多条独立规则，每条规则可自定义监控文件夹、属性名、目标路径及文件命名模板。特别值得一提的是其重复处理机制：当检测到相同来源 URL 的笔记时，可根据设置标记重复项、移至回收站或忽略，且判定逻辑基于创建时间，确保行为确定且可恢复。此外，插件完全本地运行，无任何网络请求，所有数据处理均在 Obsidian 应用内完成，隐私安全性高。

使用前需注意，该插件依赖笔记 Frontmatter 中已存在的有效属性值，若笔记未设置相应属性则不会触发创建。它不适合需要复杂双向链接自动构建或全文内容分析的场景，仅基于元数据属性进行页面映射。同时，虽然插件支持定期清理不再出现的主题页，但建议先在小范围测试规则，以免误删重要索引。对于追求极致自动化但缺乏手动维护意愿的用户，这是一个高效的选择；但若你的笔记结构极度复杂且属性命名不统一，可能需要先规范笔记元数据才能发挥其最大效用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


