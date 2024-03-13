---
uid: 2024022117282793
title: Obsidian 插件：【Readme】Hill Charts
tags: ['obsidian插件', 'readme']
description: Add hill charts to your notes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Hill Charts

> [!Note] 插件名片
> - 插件名称：Hill Charts
> - 插件作者：stufro
> - 插件说明：Add hill charts to your notes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/stufro/obsidian-hill-charts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hill-charts)

## 概述

Add hill charts to your notes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/stufro/obsidian-hill-charts/master/README.md)

---

## Readme(翻译）

下面是 [[hill-charts]] 插件的自述翻译

【机翻】

# 黑曜石山图表

[![GitHub license](https://img.shields.io/github/license/stufro/obsidian-hill-charts)](https://github.com/stufro/obsidian-hill-charts/blob/main/LICENSE.txt)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/stufro/obsidian-hill-charts)

一个用于在笔记中添加山图表的 Obsidian 插件。

- 通过编写少量的 YAML 内联创建山图表。
- 可自定义样式和大小
- [什么是山图表？](https://www.hillchart.co/blog/hill-chart-guide/)

![](https://cdn.pkmer.cn/covers/hill-charts_2_0.png!pkmer)

## 安装

您可以使用 [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件来安装这个插件。

## 用法

安装完成后，您可以在代码块中定义一个 hillchart，如下所示：

```
```hillchart
points:
  - position: 30
    text: Admin Dashboard
  - position: 85
    text: User Auth
  - position: 65
    text: Subscriptions
 ```
```

您可以为每个点传递 5 个可用选项：

```
- position: 30
  text: Admin Dashboard
  color: "#fb3590"
  size: 15
  opacity: 0.5
```

默认大小和不透明度可以在插件设置中配置。

## 贡献

您可以按照 [Obsidian说明](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin) 设置开发存储库中的插件，将 git 克隆命令替换为此存储库而不是示例插件。

如果您想修复错误或添加新功能，请：

1. [分叉项目](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)。
2. 创建一个功能分支（`git checkout -b my-new-feature`）。
3. 进行更改。包括您更改的测试，否则我可能会在将来意外破坏它们。
4. 使用 `npm exec jest` 命令运行测试。确保它们仍然通过。
5. 编写 [描述性提交消息](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)。
6. 将分支推送到 GitHub（`git push origin my-new-feature`）。
7. [创建一个拉取请求](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) 并提交以与主分支合并。

### 发布

```
npm version [patch|minor|major]
git push origin master --tags
```

## Credits

- <https://github.com/nagi1/hill-chart>



