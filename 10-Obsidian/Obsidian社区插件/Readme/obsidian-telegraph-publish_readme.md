---
uid: 20230803204844
title: Obsidian 插件：【Readme】Telegraph Publish
tags: ['obsidian插件', 'readme']
description: 将你的Obsidian笔记发布到Telegraph页面上。
author: Reorx
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Telegraph Publish

> [!Note] 插件名片
> - 插件名称：Telegraph Publish
> - 插件作者：Reorx
> - 插件说明：将你的Obsidian笔记发布到Telegraph页面上。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/reorx/obsidian-telegraph-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-telegraph-publish)

## 概述

将你的Obsidian笔记发布到Telegraph页面上。

![Telegraph Publish](https://cdn.pkmer.cn/covers/obsidian-telegraph-publish.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/reorx/obsidian-telegraph-publish/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-telegraph-publish]] 插件的自述翻译


## Obsidian Telegraph 发布

将你的 Obsidian 笔记发布到 Telegraph 页面。

特点：
- 将当前文件发布到新的 Telegraph 页面（创建）。
- 将当前文件发布到现有的 Telegraph 页面（更新）。
- 清除当前文件的已发布内容。

即将推出的功能：
- [ ] 支持图片上传。

## 安装

目前该插件正在审核中，但您可以通过以下两种方式尝试：
1. 从GitHub手动下载[最新版本](https://github.com/reorx/obsidian-telegraph-publish/releases)，并将文件解压到`$YOUR_VAULT/.obsidian/plugins/obsidian-telegraph-publish`目录中。
2. 使用[BRAT插件](https://github.com/TfTHacker/obsidian42-brat)。

## 格式支持

Telegraph对HTML标签的支持有限，因此发布非常复杂的页面并不实际。您可以查看[展示](https://telegra.ph/2022031122-Test-telegraph-publish-02-03-12)页面，其中包含了[示例笔记](./sample_note.md)的渲染。

|Markdown语法|支持|
|---|---|
|**内联**| |
|`**加粗**`|✔|
|`*斜体*`|✔|
|`代码`|✔|
|`~~删除线~~`|x|
|`==高亮==`|x|
|`[外部链接](/)`|✔|
|`[[内部链接]]`|渲染为外部链接到`#`|
|`![[嵌入图片]]`|计划支持|
|**块级**| |
|`- 列表`|嵌套列表将被展开|
|`> 引用块`|引用块中的列表将被分隔|
|<code>\`\`\`代码块</code>|✔|
|`<table>`|渲染为代码块|

如何使用

### 创建一个Telegraph账户

在发布任何页面之前，您需要先创建一个Telegraph账户。

打开**Telegraph Publish**的设置

![](images/settings.png)

您可以看到**Access token**是空的，点击**创建新账户**按钮，新账户将被创建并自动填充访问令牌。

![](images/settings-done.png)

您可以点击`auth_url`在浏览器中对该账户进行身份验证，以便稍后编辑已发布的页面。

发布新页面

要发布新页面，首先需要打开一个Markdown文件，然后点击侧边栏按钮或运行名为“发布到Telegraph”的命令。

![](images/command-create.png)

在确认模态框中点击“是”：![](images/create-confirm.png)

然后等待片刻，页面成功创建后，您将在下一个模态框中看到Telegraph页面的URL：

![](images/create-success.png)

点击URL在浏览器中打开页面，如果您已经通过设置中的`auth_url`进行了身份验证，您将能够在页面右侧看到“编辑”按钮。

![](images/telegraph-edit.png)

现在返回到笔记，并切换到源代码模式，您会注意到frontmatter已更新了两个新键：`telegraph_page_url`和`telegraph_page_path`。它们用于跟踪笔记与Telegraph页面之间的连接。

![](images/frontmatter.png)

### 更新现有页面

如果您已经发布了一篇笔记，您可以更改其内容，然后再次运行**"发布到Telegraph"**来更新现有页面。模态框将显示如下：

![](images/update-confirm.png)

只要frontmatter正确且访问令牌未更改，您始终可以更新与新页面相关联的页面。

### 清除已发布的内容

由于 Telegraph 不提供删除页面的 API，该插件提供了一个**清除 Telegraph 上已发布内容**的命令来删除已发布页面的内容。

![](images/command-clear.png)

运行该命令后，您将看到以下模态框：

![](images/confirm-clear.png)

点击**是**并等待清除过程完成。

![](images/clear-success.png)

再次打开 URL，您将看到页面的内容只剩下一个`已删除`的单词。



