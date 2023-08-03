---
uid: 20230803211915
title: Obsidian 插件：【Readme】Advanced Merger
tags: ['obsidian插件', 'readme']
description: 合并一个文件夹的笔记以便更容易导出。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced Merger

> [!Note] 插件名片
> - 插件名称：Advanced Merger
> - 插件作者：Anto Keinänen
> - 插件说明：合并一个文件夹的笔记以便更容易导出。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/antoKeinanen/obsidian-advanced-merger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-merger)

## 概述

合并一个文件夹的笔记以便更容易导出。

![Advanced Merger](https://cdn.pkmer.cn/covers/advanced-merger.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/antoKeinanen/obsidian-advanced-merger/master/README.md)
> 

---

## Readme(翻译）

下面是 [[advanced-merger]] 插件的自述翻译



# Obsidian高级合并

合并一个笔记文件夹以便更容易导出。该插件是为[obsidian](https://obsidian.md/)应用程序设计的。

![预览](https://github.com/antoKeinanen/obsidian-advanced-merger/blob/master/media/1%200Ghz5j7MB_oKJdxoIc5-lg.gif?raw=true)

<p align="center">
插件预览。图片由

提供
</p>

# 安装

## 通过Obsidian社区市场安装

现在可以在Obsidian的社区插件选项卡中安装此插件。[链接](obsidian://show-plugin?id=advanced-merger)

1. 打开Obsidian设置面板。
2. 打开社区插件选项卡。
3. 浏览社区插件。
4. 搜索“Advanced Merger”。
5. 安装并启用插件。

## 手动安装

1. 从[发布页面](https://github.com/antoKeinanen/obsidian-advanced-merger/releases)下载最新版本。
2. 解压缩zip文件。
3. 将2个文件（`manifest.json`和`main.js`）移动到`<你的Obsidian存储文件夹>/.obsidian/plugins/obsidian-advanced-merger`。
4. 启动Obsidian，进入设置>社区插件，打开`Advanced merger`。

# 使用方法

使用高级合并工具非常简单！只需右键单击一个文件夹，然后选择“合并文件夹”。

# 贡献

为了构建和测试这个仓库，建议创建一个新的vault。将该仓库克隆到`<你的obsidian vault文件夹>/.obsidian/plugins/`，然后在其中运行`yarn install`和`yarn build`或`npm install`和`npm build`。然后在Obsidian中切换插件的开关以刷新它。

欢迎所有的贡献，但在做任何重大更改之前，请考虑在问题选项卡中开始讨论。

# 行为准则

-   确保你的代码使用 `npm/yarn run format` 脚本进行格式化。
-   使用 Angular 提交消息风格。更多信息请参考[这里](https://github.com/antoKeinanen/obsidian-advanced-merger#commit-message-format)。
-   请**不要**修改 `manifest.json`，因为这会破坏插件下载系统。对于 beta 版本的发布，请使用[BRAT](https://tfthacker.com/Obsidian+Plugins+by+TfTHacker/BRAT+-+Beta+Reviewer's+Auto-update+Tool/Quick+guide+for+using+BRAT#Testing+Plugins)并升级 `manifest-beta.json`。

## 提交信息格式

_本规范受到并取代了[AngularJS提交信息格式](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)的启发。_

这种格式可以使提交历史更易于阅读。
所有的提交信息都必须符合这种格式：

```
<header>
<空行>
<body>
```

## 提交头部

type字段是必需的。当升级版本时，摘要是可选的。如果提交与问题相关，请引用它。每个提交应只包含一个类型。

```
<type>(<issue-id>): <short summary>
  │						│
  │						└─⫸ 摘要使用现在时态。不要大写。结尾不要加句号。
  │
  └─⫸ 提交类型：build|docs|feat|fix|refactor|test
```

### 类型

**示例**: `fix(#123): 修复一个关于XYZ的bug`，`bump-version`，`feat(#123): 添加一个XYZ的功能`
必须是以下之一：

-   build: 影响构建系统或外部依赖的更改
-   docs: 仅文档更改
-   feat: 新功能
-   fix: 修复bug
-   refactor: 既不修复bug也不添加功能的代码更改
-   test: 添加新测试或更正现有测试

摘要

使用摘要字段提供对变更的简洁描述：

- 使用祈使句，使用现在时态："change"而不是"changed"或"changes"
- 不要将首字母大写
- 结尾不要加句号(.)

- 可选但建议
- 就像在<主题>中使用祈使句、现在时态一样：“改变”，而不是“改变了”或“改变”。

支持

您可以通过在[buymeacoffee.com](https://www.buymeacoffee.com/antokeinanen)上给我买杯咖啡来支持我！



