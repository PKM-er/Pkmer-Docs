---
uid: 20230803204337
title: Obsidian 插件：【Readme】Micro.publish
tags: ['obsidian插件', 'readme']
description: 发布笔记到Micro.blog。
author: Otavio Cordeiro
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Micro.publish

> [!Note] 插件名片
> - 插件名称：Micro.publish
> - 插件作者：Otavio Cordeiro
> - 插件说明：发布笔记到Micro.blog。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/otaviocc/obsidian-microblog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?microblog-publish-plugin)

## 概述

发布笔记到Micro.blog。

![Micro.publish](https://cdn.pkmer.cn/covers/microblog-publish-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/otaviocc/obsidian-microblog/main/README.md)
> 

---

## Readme(翻译）

下面是 [[microblog-publish-plugin]] 插件的自述翻译


# Micro.publish

Micro.publish是一个由社区维护的插件，用于将Obsidian的笔记发布到Micro.blog博客。

这个插件是否改善了你的工作流程？请用一杯咖啡表示感谢。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z0C9KPT)

安装

这个插件将很快通过*社区插件*提供。

截图

### 首选项

从首选项窗口中，可以使用应用令牌登录到Micro.blog，该令牌可以在[此处](https://micro.blog/account/apps)生成。

![](images/01-preferences.png)

登录后，插件允许设置标签、帖子可见性和默认博客（如果用户有多个托管博客）的默认值。在发布到Micro.blog时，将使用这些默认值。

![](images/02-preferences.png)

### 命令

通过Obsidian的命令面板触发Micro.publish。

![](images/03-command.png)

### 发布

在发布之前，可以编辑标题，覆盖默认值，或选择不同的博客进行发布。

![](images/04-review.png)

发布后，会出现一个带有文章链接的确认窗口。

![](images/05-confirmation.png)

## 从源代码构建

在 Obsidian Vault 中克隆此存储库：

```
$ cd .obsidian/plugins/
$ git clone https://github.com/otaviocc/obsidian-microblog
```

解决插件的依赖关系并构建它：

```
$ cd obsidian-microblog
$ npm i
$ npm run build
```

重新启动 Obsidian，并在首选项的“Community Plugins”中启用该插件。

## 贡献

1. Fork这个仓库，并按照前一节中的步骤使用fork的仓库
2. 为更改创建一个特性分支
3. 提交更改并将其推送到fork的仓库
4. 提交一个拉取请求

免责声明

本项目与Micro.blog和Obsidian无关。这是一个由社区维护的插件。



