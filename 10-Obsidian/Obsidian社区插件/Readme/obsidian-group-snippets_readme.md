---
uid: 20231220115812
title: Obsidian 插件：【Readme】Group Snippets
tags: ['obsidian插件', 'readme']
description: 创建代码片段文件夹，一键激活它们！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Group Snippets

> [!Note] 插件名片
> - 插件名称：Group Snippets
> - 插件作者：Mara-Li
> - 插件说明：创建代码片段文件夹，一键激活它们！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-group-snippets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-group-snippets)

## 概述

创建代码片段文件夹，一键激活它们！

![Group Snippets](https://cdn.pkmer.cn/covers/obsidian-group-snippets_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-group-snippets/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-group-snippets]] 插件的自述翻译

-> [法语](docs/README_FR.md)

# Obsidian Group Snippet

这个插件允许你设置一组 CSS 片段来分类并在一次点击（或命令）中启用它们。此外，这个插件还允许你将一组片段“链接”到一个主题，在**切换主题**时启用它！它还适用于在浅色和深色主题之间切换！

使用方法

1. 进入插件的设置
2. 添加一个分组（点击 + 按钮）
3. 为分组添加一个名称
4. 点击“编辑”按钮，为分组添加 CSS 代码片段

完成后，您就拥有了一组 CSS 代码片段！🎉🎉

插件将启用“启用”的代码片段，并禁用“禁用”的代码片段！

要运行命令，您可以：

1. 从命令面板
   1. `reload snippets` 重新加载代码片段组（以及新添加的组）
   2. `Activate the group : ${groupName}` 激活该组
2. 直接从设置选项卡中点击命令窗口图标。

您还可以通过点击“检查”图标来启用组中的所有代码片段。点击叉号将禁用组中的所有代码片段。

此外，这是我的游戏规则！您还可以根据您的主题或颜色方案自动切换组代码片段！

切换基于**组名称**和**主题名称**。组名称**必须**包含主题名称，并根据 `dark` 或 `light` 可选地包含颜色方案名称。[^1]

例如，如果您切换到暗主题或从任何主题切换到 minimal 主题，将启用 `minimal dark`。

> **警告**
> 插件将区分手机和电话：电话是您的“智能手机”，因为此设置基于您的手机尺寸。同样的道理，平板电脑是一个更大的平台。因此，`mobile` 组将同时适用于手机和平板电脑。例如，如果您想为您的 iPhone 和 iPad 创建不同的组，您应该创建一个 `phone` 组（用于您的 iPhone）和一个 `tablet` 组（用于您的 iPad）。

此外，与其他主题（或颜色方案）相关联的代码片段将被禁用😀！

插件还会检测您是否为手机或桌面设置了代码片段。只需输入：

- IOS、Android、Mobile 用于手机组
- Desktop、PC、windows、mac、linux 用于桌面组

最后，每次切换主题/颜色方案时，插件将切换 [^2] 名称中包含的代码片段：

- 您所在的平台相同
- 您所在的主题相同或切换到的主题相同
- 您所在的颜色方案相同或切换到的颜色方案相同
- 任何没有指示平台/主题/颜色方案的代码片段

切换时，插件将禁用组中的代码片段：

- 名称中的平台与当前平台不同
- 主题与您所在的主题或切换到的主题不同
- 颜色方案与您所在的颜色方案或切换到的颜色方案不同

通常情况下，此插件可以完全覆盖代码片段的“外观”！

🗒️一些注意事项：当您删除代码片段时，您需要重新加载代码片段（使用刷新按钮）。但是，不用担心，插件无法激活不存在的代码片段！只是列表需要一些刷新：）。

![](https://cdn.pkmer.cn/covers/obsidian-group-snippets_2_0.gif)

## 🤖 开发

1. 在 GitHub 上 fork 该仓库
2. 在你的电脑上克隆该仓库
3. 在克隆的仓库中运行 `npm install`
4. 在克隆的仓库中运行 `npm run build` 来构建插件，你也可以使用 `npm run dev` 来监视变化！

## 感谢和致谢

- [MySnippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin)
- [Snippets Commands](https://github.com/deathau/snippet-commands-obsidian)

[^1]: 插件的翻译适用于颜色方案，并添加了英文的 `dark` 和 `light`。
[^2]: 在这里，toggle 的意思是插件将禁用组列表中的禁用片段，并启用启用的片段，模仿在外观选项卡的 Snippet CSS 中切换片段的行为。