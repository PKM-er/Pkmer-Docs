---
uid: 20230803231105
title: Obsidian 插件：Kobo Highlights Importer
tags: ['obsidian插件', 'readme']
description: 从Kobo设备导入亮点
author: AI
type: readme
draft: false
editable: false
modified: 20230803232510
---

# Obsidian 插件：Kobo Highlights Importer

> [!Note] 插件名片
> - 插件名称：Kobo Highlights Importer
> - 插件作者：Kevin Hellemun & Flavio Cordari
> - 插件说明：从 Kobo 设备导入亮点
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OGKevin/obsidian-kobo-highlights-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kobo-highlights-importer-plugin)

## 概述

从 Kobo 设备导入亮点

![Kobo Highlights Importer](https://cdn.pkmer.cn/covers/obsidian-kobo-highlights-importer-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OGKevin/obsidian-kobo-highlights-import/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-kobo-highlights-importer-plugin]] 插件的自述翻译

# Obsidian Kobo 高亮导入插件

该插件旨在使从 Kobo 设备导入高亮更加简单。

- [Obsidian Kobo 高亮导入插件](#obsidian-kobo-高亮导入插件)
	- [如何使用](#如何使用)
	- [模板化](#模板化)
		- [示例](#示例)
		- [变量](#变量)
	- [帮助截图](#帮助截图)
	- [贡献](#贡献)

## 如何使用

安装完成后，将您的亮点直接导入到保险库的步骤如下：

1. 使用适当的 USB 电缆将您的 Kobo 设备连接到电脑上
2. 检查是否已自动挂载，或手动挂载（例如，使用文件管理器打开您的 Kobo 的根文件夹）
3. 使用插件按钮打开导入窗口
4. 在 _.kobo_ 文件夹中找到 _KoboReader.sqlite_（此文件夹是隐藏的，因此如果您看不到它，应该从系统配置中启用显示隐藏文件）
5. 提取

## 模板化

默认模板为：

```markdown

# {{标题}}

{{亮点}}
```

### 示例

```markdown
---
tags:
- books
bookTitle: {{title}}
---
```

# {{标题}}

{{亮点}}

```

### 变量

| 标签        | 描述                                      | 示例          |
|------------|--------------------------------------------------|------------------|
| highlights | 将被替换为提取的亮点。 | `{{highlights}}` |
| title		    | 书籍的标题                            | `{{title}}`      |

## 帮助截图

![](./README_assets/step1.png)
![](./README_assets/step2.png)
![](./README_assets/step3.png)
![](./README_assets/step4.png)

## Obsidian Callouts

Kobo Highlight Importer使用Obsidian callouts来导入的高亮和注释；可以单独配置。关闭此开关将回退到仅使用标准的markdown块引用来表示高亮。

![](./README_assets/Callout_Settings.png)
![](./README_assets/Callouts.png)

请查阅[文档](https://help.obsidian.md/How+to/Use+callouts")以获取Obsidian提供的所有可用callouts的列表。

## 贡献

请随意测试，使用问题发送反馈，并打开拉取请求来改进流程。



