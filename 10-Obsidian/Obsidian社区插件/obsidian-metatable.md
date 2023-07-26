---
uid: 20230516142806
title: Obsidian 插件：Metatable 美化 frontmatter 的显示样式
tags: [Obsidian, 插件, 美化, 表格, frontmatter]
description: Obsidian 插件：Metatable 美化 frontmatter 的显示样式
author: OS
type: other
draft: false
editable: false
modified: 20230603020319
---

# Obsidian 插件：Metatable 美化 frontmatter 的显示样式

## 概述

frontmatter 为我们提供每个笔记前页，书写辅助信息的能力，这些信息可以被用于搜索，标签，别名等各种用途。

但原生的显示样式，不太规整。Metatable 就是为了能够以表格形式显示完整的前页块而诞生。不光是简单的表格样式，多个属性值的内容，还会以可以展开收起的简单目录效果。

> [!Note] 插件名片
> - 插件名称：Metatable
> - 插件作者：Arnau Siches
> - 插件说明：通过笔记中的标签，重新组织所有的笔记
> - 插件项目地址：[点我跳转](https://github.com/arnau/obsidian-metatable)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230516143126.png!pkmer)

## 使用

- 安装开启后，就会将所有笔记的 frontmatter 改为表格样式。
- Skip key：对于没有填写内容的信息项，在阅读模式下展示缺省内容，比如在阅读模式统一对未填写内容的值，展示为“未填写”
- Expansion level：控制多数值的项目，是默认展开显示，还是收起。比如 tags
- Nulls：可以控制是否对于某些属性值不显示
- Filter：控制过滤模式

> [!Tip] 提示
> - 如果对是否忽略属性值，或者对忽略特点参数进行设置，需要重新启动 Obsidian 后才能生效。

> [!Tip] 推荐阅读
> - [[frontmatter-alias-display]]：让你的笔记名下直接看到别名
> - [[obsidian-view-mode-by-frontmatter]]：自定义每个笔记的视图
> - [[metaedit]]：帮你快捷管理 Obsidian 的元数据，可以预设 YAML 区域的值
> - [[obsidian-meta-bind-plugin]]：让你的笔记具有交互性，通过各种控件修改笔记信息