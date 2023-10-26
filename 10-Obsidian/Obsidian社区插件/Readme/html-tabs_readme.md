---
uid: 2023102611075996
title: Obsidian 插件：【Readme】HTML Tabs
tags: ['obsidian插件', 'readme']
description: 在您的笔记中创建和渲染标签和标签面板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】HTML Tabs

> [!Note] 插件名片
> - 插件名称：HTML Tabs
> - 插件作者：Patrick Tournet
> - 插件说明：在您的笔记中创建和渲染标签和标签面板。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ptournet/obsidian-html-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-tabs)

## 概述

在您的笔记中创建和渲染标签和标签面板。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ptournet/obsidian-html-tabs/master/README.md)
> 

---

## Readme(翻译）

下面是 [[html-tabs]] 插件的自述翻译


# Obsidian HTML-Tabs

此插件允许您在笔记中轻松嵌入选项卡控件。
![HTML标签演示](docs/images/HTML%20标签演示.gif)
安装
### 从Github下载

这是安装插件的唯一方式，等待其验证后才会出现在官方社区插件列表中：
1. 前往https://github.com/ptournet/obsidian-html-tabs/releases
2. 下载最新版本。
3. 解压并将三个文件（`main.js`，`style.css`，`manifest.json`）放入文件夹`{{obsidian_vault}}/.obsidian/plugins/html-tabs`
4. 在`设置 > 社区插件`中，激活**HTML Tabs**。
### 从插件商店安装

按照以下步骤安装 **HTML Tabs**：
1. 打开 `设置 > 社区插件`
2. 在社区插件部分点击 `浏览`
3. 搜索 `HTML Tabs`
4. 点击 `安装` 然后点击 `启用`
## 用法

包含3个选项卡的选项卡控件的定义具有以下结构：
```markdown
~~~tabs
---tab <第一个选项卡的标签>
<第一个选项卡的内容>
---tab <第二个选项卡的标签>
<第二个选项卡的内容>
---tab <第三个选项卡的标签>
<第三个选项卡的内容>
~~~
```
或者：
~~~markdown
```tabs
---tab <第一个选项卡的标签>
<第一个选项卡的内容>
---tab <第二个选项卡的标签>
<第二个选项卡的内容>
---tab <第三个选项卡的标签>
<第三个选项卡的内容>
```
~~~

选项卡的`<标签>`是纯文本（不允许使用Markdown），而其`<内容>`可以使用完整的Obsidian Markdown语法。可以特别嵌入另一个笔记（使用语法`![[要嵌入的笔记]]`）或者使用围栏代码块。

在这种情况下，您必须小心不要使用与定义选项卡的字符相同的字符：如果您使用了
```
~~~tabs
~~~
```
那么选项卡中的代码块应该定义为：
~~~
```<语言>
```
~~~
但是，如果您习惯于将代码块定义为：
```
~~~<语言>
~~~
```
那么您应该将选项卡定义为：
~~~
```tabs
```
~~~
## 自定义

目前，如果您想要更改选项卡的外观，您需要使用一个`CSS Snippet`。

为此，您首先需要在`snippets`目录中创建一个`html-tabs.css`文件。如果您不知道它在硬盘上的位置，您可以在Obsidian `Settings`中的`Appearance`页面底部找到它。

然后，您可以覆盖插件目录中`styles.css`文件中定义的`html-tab*`类。
## 贡献

欢迎通过错误报告、错误修复、文档或一般改进来为这个插件做出贡献。对于重要的功能，请提出一个关于您的想法的问题/与我联系，以便我可以决定是否以及如何最好地实现它。
## 价格

该插件免费提供给所有人使用，但如果您想表示感谢或帮助支持持续开发，请随意通过以下方法之一向我捐赠一点点：

[![GitHub 赞助商](https://img.shields.io/github/sponsors/ptournet?style=social)](https://github.com/sponsors/ptournet)
[![Paypal](https://img.shields.io/badge/paypal-ptournet-yellow?style=social&logo=paypal)](https://paypal.me/ptournet)
## 鸣谢
感谢 `gapmiss/obsidian-alpinejs`，它帮助我集成了 Alpine.js，使得选项卡切换功能得以实现。
## 待办事项
- [x] README的第一个版本
- [x] 在Android上进行验证
- [x] 创建一个测试保险库并修改*dev*脚本
- [x] 发布v1.0.0版本
- [ ] 创建第一个设置
- [x] 标签的Markdown渲染
- [ ] 在笔记大纲中集成标签
- [ ] 能够在特定的标签/选项卡上打开笔记
- [ ] 改进标准编辑体验（将光标放在正确的选项卡的正确位置）
- [ ] 改进嵌入式编辑体验（如果选项卡内容在另一个笔记中，允许编辑该笔记）
- [ ] 按钮以便轻松创建/编辑选项卡
- [ ] 更多的视觉配置（适用于不熟悉CSS的人）



