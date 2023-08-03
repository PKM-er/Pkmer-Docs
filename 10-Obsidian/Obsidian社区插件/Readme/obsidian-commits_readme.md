---
uid: 20230803212141
title: Obsidian 插件：【Readme】Commits
tags: ['文件历史', '统计', 'obsidian插件', 'readme']
description: 跟踪和回顾 Obisidian 仓库指定项目的变更情况。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Commits

> [!Note] 插件名片
> - 插件名称：Commits
> - 插件作者：darakah
> - 插件说明：跟踪和回顾 Obisidian 仓库指定项目的变更情况。
> - 插件分类：['文件历史', '统计', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-commits)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-commits)

## 概述

跟踪和回顾 Obisidian 仓库指定项目的变更情况。

![Commits](https://cdn.pkmer.cn/covers/obsidian-commits.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-commits/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-commits]] 插件的自述翻译



# Obsidian Commits
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-commits)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-commits/total)

跟踪和审查Obsidian Vault或指定项目中的更改。（类似于Github的提交审查）

## 示例

<img src="https://raw.githubusercontent.com/Darakah/obsidian-commits/main/images/Example_1_2.png"/>

## 特点
- 跟踪黑曜石保险库/项目的增长
- 增长分为4个类别：
  - 创建：创建新的笔记
  - 扩展：增加已存在笔记的大小（可以在设置中更改变化的阈值，默认为大小增加15%）
  - 链接：标记/链接一个笔记（新的连接）
  - 重构：重构包括删除文件，按一定数量减小文件大小（默认为15%），重命名，取消标记和取消链接

- 工作单位称为提交，并分为上述4个类别之一
- 显示每天的提交次数
- 显示每周的提交次数
- 显示最近的提交
- 跟踪特定的项目或保险库
- 自定义不同渲染块的宽度/高度/对齐方式/填充颜色/网格颜色

**重要提示：文件大小更改/标记和链接更改每5分钟更新一次！**

## 用法

- 要显示特定的块，请使用相应的块ID：`commits-recents`，`commits-type`，`commits-weekly`，`commits-daily`
- 每行表示一个特定的参数。参数的标识符采用以下语法：`argumentName`=`argumentValue`，例如，要设置div宽度：`divWidth=50`，将容器宽度设置为笔记宽度的50%。
- 每个参数必须单独放在一行上。
- 参数可以以任何顺序出现。
- 未指定的参数将设置为默认值。
- 参数包括：`project`，`topCommits`，`borderColor`，`gridColor`，`fillColor`，`divWidth`，`divHeight`和`divAlign`。
- 对于块`commits-type`，`commits-weekly`，`commits-daily`，参数如下：
   * `项目路径`，默认情况下只跟踪整个vault并可以显示`/`。要跟踪新项目，请使用插件的设置选项卡。
   * `div宽度（百分比）`
   * `高度（像素）`
   * `填充颜色`
   * `边框颜色`
   * `网格颜色`
   * `div容器对齐方式`，即`right`或`left`

- 对于块`commits-recents`，参数如下：
   * `项目路径`，默认情况下只跟踪整个vault并可以显示`/`。要跟踪新项目，请使用插件的设置选项卡。
   * `div宽度（百分比）`
   * `高度（像素）`
   * `填充颜色`
   * `要显示的每个类别的最近提交的顶部数量`
   * `div容器对齐方式`，即`right`或`left`

<img src="https://raw.githubusercontent.com/Darakah/obsidian-commits/main/images/Example_2_2.png"/>

## 设置：
<img src="https://raw.githubusercontent.com/Darakah/obsidian-commits/main/images/Settings_1.png"/>
<img src="https://raw.githubusercontent.com/Darakah/obsidian-commits/main/images/Settings_2.png"/>

## 发布说明

### v0.2.2
- 代码改进和优化

### v0.1.2
- 初始版本发布

## 支持

[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)



