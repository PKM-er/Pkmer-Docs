---
uid: 20230803231105
title: Obsidian 插件：Table of Contents
tags: ['编辑工具', '目录/标题', 'obsidian插件', 'readme']
description: 为笔记内生成静态目录。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232457
---

# Obsidian 插件：Table of Contents

> [!Note] 插件名片
> - 插件名称：Table of Contents
> - 插件作者：hipstersmoothie
> - 插件说明：为笔记内生成静态目录。
> - 插件分类：[' 编辑工具 ', ' 目录/标题 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hipstersmoothie/obsidian-plugin-toc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-toc)

## 概述

为笔记内生成静态目录。

![Table of Contents](https://cdn.pkmer.cn/covers/obsidian-plugin-toc.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hipstersmoothie/obsidian-plugin-toc/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plugin-toc]] 插件的自述翻译

# obsidian-plugin-toc

为笔记创建目录。

![内容创建示例](example.gif)

## 特点

该插件提供以下命令：

| 操作                                          | 快捷键           |
| ----------------------------------------------- | ---------------- |
| 创建完整目录                   | 默认为空 |
| 创建下一个标题级别的目录 | 默认为空 |

以及以下设置：

| 设置              | 类型                 | 默认值    |
| -------------------- | -------------------- | ---------- |
| 列表样式           | 'bullet' 或 'number' | 'bullet'   |
| 标题                | 'string'             | undefined' |
| 最小标题深度 | 数字               | 2          |
| 最大标题深度 | 数字               | 6          |

## 用法

该插件将为当前标题级别的子标题创建一个目录。

**示例：**

_输入：_ 在二级标题下运行“目录”
_输出：_ “目录”只包含该二级标题的子标题

安装

要么直接从 Obsidian 安装最新版本，要么将最新版本解压缩到 `<vault>/.obsidian/plugins/` 文件夹中。

安装完插件后，您需要确保“目录”开关已打开。

设置完成后，您将在命令面板（`CMD + P`）中看到此插件的命令。

您可以将命令分配给热键以便于使用。

这是我的设置：

- 创建完整的目录 => `CMD + SHIFT + T`
- 为下一个标题级别创建目录 => `CMD + T`

定制化

### 详细的嵌套有序列表

如果你想让目录使用嵌套列表计数（例如：1.1，1.2），请在 Obsidian 中添加以下 CSS 代码片段。

这将影响你笔记中的所有有序列表。

```css
ol {
  counter-reset: item;
}

ol li {
  display: block;
}

ol li:before {
  content: counters(item, ".") ". ";
  counter-increment: item;
  padding-right: 5px;
}
```

> 注意：确保在 Obsidian 的选项中启用该代码片段。