---
uid: 2023120522264365
title: Obsidian 插件：【Readme】Quick Tagger
tags: ['obsidian插件', 'readme']
description: 快速添加和删除标签。对标签搜索结果进行批量标记，并为您的收藏夹添加专用按钮/命令！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Quick Tagger

> [!Note] 插件名片
> - 插件名称：Quick Tagger
> - 插件作者：Gorkycreator
> - 插件说明：快速添加和删除标签。对标签搜索结果进行批量标记，并为您的收藏夹添加专用按钮/命令！
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Gorkycreator/obsidian-quick-tagger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-tagger)

## 概述

快速添加和删除标签。对标签搜索结果进行批量标记，并为您的收藏夹添加专用按钮/命令！



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Gorkycreator/obsidian-quick-tagger/master/README.md)
> 

---

## Readme(翻译）

下面是 [[quick-tagger]] 插件的自述翻译


# Obsidian 快速标签工具

这是一个为 [Obsidian](https://obsidian.md) 开发的插件，它添加了命令和一个图形界面，用于选择要放入笔记元数据中的标签。

最初是为了改善我的个人工作流程而开发的，与 [Obsidian Commander](https://github.com/phibr0/obsidian-commander) 结合使用非常方便。
## 特点
- 右键单击笔记以批量添加标签
- 批量搜索标签结果
- 可以使用快捷键的命令面板条目来添加或删除标签
- 可配置的[星标标签](https://github.com/Gorkycreator/obsidian-quick-tagger#starred-tags)，以便更快地访问您的收藏夹
- 通过功能区图标向当前笔记添加或删除标签[^1]

[^1]: 不幸的是，目前无法通过功能区图标轻松获取当前选定的文件，因此批量标记仅限于右键单击上下文菜单。
## 演示
![演示](images/quick_tagger_demo.gif)

请注意，此演示是在移动设备上录制的，并通过Obsidian Commander在标题栏上添加了按钮。需要进行一些组装。在独立插件中提供了功能区图标和命令面板操作，但这是我首选的工作流程。
### 菜单选项
![file-menu](images/file-right-click-menu.png)

![search-menu](images/search-results-menu.png)
### 星标标签
星标标签具有以下功能，每个功能都可以独立配置：
  - 在使用插件选择标签时，将标签添加到列表顶部
  - 添加右键菜单项
  - 添加一个 Obsidian 命令，用于在活动笔记上切换标签
  - 添加一个状态栏按钮，用于在活动笔记上切换命令

![starred-tag-demo](images/starred-tag-demo.gif)
免责声明
该插件按原样提供，使用需自负风险。我个人已经进行了测试并在我的保险库中使用它，但我无法确认它在每种情况下都是完全可靠的。

该插件不会跟踪撤销/重做队列中的更改，请在使用时注意这一点，特别是在批量标记或删除所有标签时。
## 路线图
- [x] 为删除所有标签添加确认警告
- [x] 改进设置菜单
- [x] 星标标签（改进的优先级标签）
- [x] 添加星标标签的命令
- [x] 在状态栏中添加星标标签按钮
- [x] 为星标标签添加右键菜单选项
- [x] 调整右键行为，在给单个笔记打标签时切换标签
- [x] 允许从标签选择器中添加新标签
- [x] 切换最近使用的标签命令
- [ ] 标签链（循环使用一组标签）
- [ ] 对话框添加多个标签到笔记
- [ ] 对话框将标签转换为链接列表项（反之亦然）[^2]

[^2]: 由于某种原因，我认为“链接列表”是一个更正式的术语。显然，我只是从[1.4.0版本发布说明](https://obsidian.md/changelog/2023-07-26-desktop-v1.4.0/)的示例中学到了这个术语，并加以运用。
手动安装插件

将 `main.js` 和 `manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-quick-tagger/` 目录下。
开发笔记
[标签的官方文档](https://help.obsidian.md/Editing+and+formatting/Tags#Tag+format)中指出只支持字母数字、下划线、连字符和正斜杠。我在标签中使用了很多表情符号，这让我开始思考并测试了数千个Unicode字符。我在[常量文件](https://github.com/Gorkycreator/obsidian-quick-tagger/blob/master/src/constants.ts)中包含了我发现的不合适的字符。如果你发现通过了这个过滤器的无效字符，请在常量文件上提出问题或创建PR。
特别感谢...
- [Supercharged links](https://github.com/mdelobelle/obsidian_supercharged_links) 和 [Obsidian Variables](https://github.com/jffaust/obsidian-variables) 提供了添加和删除设置元素的示例。
- [QuickAdd](https://github.com/chhoumann/quickadd) 提供了添加和删除命令的示例。
- [Toggl Track](https://github.com/mcndt/obsidian-toggl-integration) 和 [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) 提供了与状态栏元素一起使用的示例。



