---
uid: 20230803231105
title: Obsidian 插件：Any Block
tags: ['obsidian插件', 'readme']
description: 您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如`列表转表格`。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232618
---

# Obsidian 插件：Any Block

> [!Note] 插件名片
> - 插件名称：Any Block
> - 插件作者：LincZero
> - 插件说明：您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如 `列表转表格`。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/LincZero/obsidian-any-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?any-block)

## 概述

您可以通过某种方式灵活地创建一个“块”。它还提供了一些有用的功能，比如 `列表转表格`。

![Any Block](https://cdn.pkmer.cn/covers/any-block.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LincZero/obsidian-any-block/main/README.md)
>

---

## Readme(翻译）

下面是 [[any-block]] 插件的自述翻译

[其他语言](./docs/)

（Github Pages 施工中………………利于多语言文档的建设，以及日益增多的处理器的介绍）

# obsidian-any-block

一个 Obsidian 插件。您可以通过某种方式灵活地创建一个“块”。

用途

功能：块转换、列表转表格或其他树状图，请参阅 `demo` 示例文件夹以获取详细信息

[用法教程和示例库](./docs/en)

如果有错误，请尝试关闭“严格换行”。

支持的命令

查看设置面板或 [使用教程和示例库](./docs/en)

以下是一些常见的处理器：

- list2table（2datatable）
- list2listtable
- list2mermaid（graph LR）
- list2mindmad（mermaid v9.3.0 mindmap）
- list2tab
- list2timeline
- title2list + list2somthing

![](docs/en/png/list2table.png)

![](docs/en/png/list2tableT.png)

![](docs/en/png/list2lt.png)

![](docs/en/png/list2tab.png)

![](docs/en/png/list2mermaid.png)

![](docs/en/png/list2mindmap.png)

![](docs/en/png/titleSelector.png)

![](docs/en/png/addTitle.png)

![](docs/en/png/scroll.png)

![](docs/en/png/overfold.png)

![](docs/en/png/flod.png)

![](docs/en/png/heimu.gif)

![](docs/en/png/userProcessor.png)

## 支持

开发不易，赞助入口（可备注：OB 插件支持）

![](docs/en/png/support_zfb.png)![](docs/en/png/support_wechat.png)

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-any-block%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

## 待办事项

**(不要在问题中重复提及)**

- 首要任务
	- 可视化编辑表格
	  （这三个点要依次渐进实现，实现前一个才能实现下一个）
		1. `| ` 增加下级项=>`\ ` 或 `/ ` 或 `& ` 增加同级项（能更好地压缩高度，也有主于 ul 表格的生成。开发难度：`|` 和 `\` 混杂在一起不好处理）
		2. `表格项` 的接口需要扩展，加多一个接口项：来表明这个项是通过换行生成还是 `|` 或 `\`，否则难以做到下面的问题
		3. 可视化编辑表格（实现难度：必须先解决上面的问题，否则反向编辑会有问题（会将内联块拆除掉了））
	- 其他
		- 增加处理器或选择器。例如：转置表格、QA 处理器
- 加强
	- 处理器
		- 优化 2ultable，在这个模式中让内联换行变成同级换行而非下级换行的意思
	- 层级
		- 负级列表开关
		- 根据层级关系，推荐合理的处理器（如检测到树相关的就推荐树类处理器）
	- 样式
		- 树表格的间隔着色样式获取可以优化
		  方案 1：例如多行的格可以视情况使用渐变（单数不用，复数需要，但会不会有不统一的问题）？
		  方案 2：仿 mindmap 的着色，后面的列就不要隔行着色了
	- 转化
		- 右键选择转化为：md 原生 (表格)/html 格式/图片
- 修复错误
	- **引用块内的列表/列表内的引用块无法识别**
	- **表格转置与表头符号冲突、转置模式目前是纯 css 实现的。如果大家的行高不相同，会出现不匹配的情况。**
	  后续会将 css 实现改进为转化 table 元素实现

参考、导入

- [html-to-md](https://github.com/stonehank/html-to-md)
- [mermaid](https://github.com/mermaid-js/mermaid)



