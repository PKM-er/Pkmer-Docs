---
uid: 2023120719260472
title: Obsidian 插件：【Readme】Custom File Explorer sorting
tags: ['obsidian插件', 'readme']
description: 允许在文件资源管理器中手动和自动，基于配置驱动的重新排序和排序文件和文件夹。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Custom File Explorer sorting

> [!Note] 插件名片
> - 插件名称：Custom File Explorer sorting
> - 插件作者：SebastianMC
> - 插件说明：允许在文件资源管理器中手动和自动，基于配置驱动的重新排序和排序文件和文件夹。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SebastianMC/obsidian-custom-sort)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-sort)

## 概述

允许在文件资源管理器中手动和自动，基于配置驱动的重新排序和排序文件和文件夹。

![Custom File Explorer sorting](https://cdn.pkmer.cn/covers/custom-sort.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SebastianMC/obsidian-custom-sort/master/README.md)
>

---

## Readme(翻译）

下面是 [[custom-sort]] 插件的自述翻译

这是一个简单版本的 README，重点介绍**基本场景和最常用的功能**

[长而且更详细的高级README.md在这里](./advanced-README.md)

在文件资源管理器中自由排列笔记和文件夹（<<https://obsidian.md> 插件）>

完全控制笔记和文件夹的顺序：

- 将文件夹和文件视为相同或不同，由您决定
- 细粒度的文件夹级别甚至笔记组级别的规范
- 支持完全手动排序
  - 明确列出笔记和文件夹名称，或仅使用前缀或后缀
  - 支持通配符名称匹配
- 按照笔记自定义元数据分组和排序
- 支持按照标准和非标准规则自动排序
- 还支持手动和自动排序的混合使用
- 按照前缀、后缀（例如后缀中的日期）或中间的复合数字排序
- 支持罗马数字，也支持复合罗马数字
- 按前缀、后缀或前缀和后缀分组
  - 即使在同一个文件夹内，每个组也可以有不同的排序规则
- 简单易用但功能丰富的配置选项
- 排序配置直接存储在您的笔记正文中
  - 在 YAML 中使用专用的 `sorting-spec:` 键
- 未设置自定义顺序的文件夹仍然按照标准的 Obsidian 排序
- 支持通过灵活的排除和覆盖逻辑强制继承排序规范

基本场景：为特定文件夹设置自定义排序顺序

在要配置排序的文件夹中创建一个名为 `sortspec` 的新笔记

在新笔记的顶部放置以下 YAML 前置文本：

```yaml
---
sorting-spec: |
  order-desc: a-z
---
```

点击丝带按钮（![Inactive](https://cdn.pkmer.cn/covers/custom-sort_2_3.png!pkmer)或![Static icon](https://cdn.pkmer.cn/covers/custom-sort_2_0.png!pkmer)在手机上），告诉插件读取排序规范并应用它。

排序应该应用到文件夹中。在桌面和平板电脑上，丝带图标应该变为（![Active](https://cdn.pkmer.cn/covers/custom-sort_2_1.png!pkmer)）

!!! **完成！** !!!

您应该看到文件和子文件夹按照字母顺序的相反顺序排序，文件夹和文件交错排列

下面是一个示例图像，显示了应用于某个存储库根文件夹的字母顺序的相反顺序：

![基本示例](./docs/svg/simplest-example-3.svg)

---

### 备注

> 备注：
> - 你的新的 `sortspec` 笔记应该 [看起来像这样](./docs/examples/basic/sortspec.md?plain=1)，除了语法高亮可能不同之外
> - 你会注意到文件夹和文件被同等对待，因此混合在一起
>   - 行为取决于你的文件夹中有哪些文件和子文件夹
> - 通过标准的 Obsidian UI 按钮更改排序顺序不会影响你的文件夹，除非...
>   - ...除非你通过点击丝带按钮将其取消激活 (![Inactive](https://cdn.pkmer.cn/covers/custom-sort_2_3.png!pkmer))
> - 为了清楚起见：笔记 `sortspec` 的底层文件显然是 `sortspec.md`
> - 如果遇到问题，请参考 [高级 README.md 的 TL;DR 部分](./advanced-README.md#tldr-usage)
> - 随意尝试！该插件以非破坏性方式工作，不会修改你的 vault 的内容。
>   它只会改变文件资源管理器中显示文件和文件夹的顺序
> - 缩进在 YAML 中很重要 -> `  order-desc: a-z` 中的两个前导空格是有意的且必需的
> - 这个常见示例只是展示了这个自定义排序插件丰富功能的一小部分。更多详细信息请参阅 [高级版本的 README.md](./advanced-README.md)

基本的自动排序方法列表包括：

- `order-asc: a-z` - **字母顺序**，也称为自然顺序
  - 'a' 在 'z' 之前，数字被特殊处理，2 在 11 之前
- `order-desc: a-z` - **反向字母顺序**，也称为反向自然顺序，也称为降序字母顺序
  - 'z' 在 'a' 之前，数字被特殊处理，11 在 2 之前
- `order-asc: true a-z` - **真正的字母顺序**
  - 'a' 在 'z' 之前，数字被视为文本，11 在 2 之前
- `order-desc: true a-z` - **真正的反向字母顺序**，也称为降序真正的字母顺序
  - 'z' 在 'a' 之前，数字被视为文本，11 在 2 之前
- `order-asc: created` - **按创建日期排序**
  - 最旧的笔记排在前面。子文件夹按字母顺序推到顶部
- `order-desc: created` - **按创建日期排序，降序**
  - 最新的笔记排在前面。子文件夹按字母顺序推到底部
- `order-asc: advanced created` - **按创建日期排序，也适用于文件夹**
  - 最旧的笔记和子文件夹排在前面
  - 对于子文件夹，以最旧的包含笔记的创建日期作为文件夹的创建日期
  - 不包含任何笔记的子文件夹按字母顺序推到顶部
- `order-desc: advanced created` - **按创建日期排序，降序，也适用于文件夹**
  - 最新的笔记和子文件夹排在前面
  - 对于子文件夹，以最新修改的包含笔记的创建日期作为文件夹的创建日期
  - 不包含任何笔记的子文件夹按字母顺序推到底部
- `order-asc: modified` - **按修改日期排序**
  - 最久未修改的笔记排在前面。子文件夹按字母顺序推到顶部
- `order-desc: modified` - **按修改日期排序，降序**
  - 最近修改的笔记排在前面。子文件夹按字母顺序推到底部
- `order-asc: advanced modified` - **按修改日期排序，也适用于文件夹**
  - 最久未修改的笔记和子文件夹排在前面
  - 对于子文件夹，以最久未修改的包含笔记的修改日期作为文件夹的修改日期
  - 不包含任何笔记的子文件夹按字母顺序推到顶部
- `order-desc: advanced modified` - **按修改日期排序，降序，也适用于文件夹**
  - 最近修改的笔记和子文件夹排在前面
  - 对于子文件夹，以最近修改的包含笔记的修改日期作为文件夹的修改日期
  - 不包含任何笔记的子文件夹按字母顺序推到底部

> 备注：
> 在上述列表中，`-asc` 来自 `Ascending`，`-desc` 来自 `Descending`

手动排序

通过排序配置，还可以进行**笔记和文件夹的手动排序**。

有关示例和说明，请参阅 [高级README.md的TL;DR部分](./advanced-README.md#tldr-usage)。

## Ribbon 图标

点击 Ribbon 图标可以在启用和挂起状态之间切换插件。

在大屏设备（台式机、笔记本电脑和 iPad 等平板电脑）上的 Ribbon 图标状态：

- ![Inactive](https://cdn.pkmer.cn/covers/custom-sort_2_3.png!pkmer) 插件已挂起。未应用自定义排序。
- ![Active](https://cdn.pkmer.cn/covers/custom-sort_2_1.png!pkmer) 插件已启用，已应用自定义排序。
- ![Error](https://cdn.pkmer.cn/covers/custom-sort_2_6.png!pkmer) 自定义排序配置中存在语法错误。
- ![General Error](https://cdn.pkmer.cn/covers/custom-sort_2_7.png!pkmer) 插件已挂起。一般错误。
- ![Sorting not applied](https://cdn.pkmer.cn/covers/custom-sort_2_8.png!pkmer) 插件已启用，但未应用自定义排序。
- ![Static icon](https://cdn.pkmer.cn/covers/custom-sort_2_0.png!pkmer) （仅适用于大屏移动设备如 iPad）。插件已启用，但未应用自定义排序。

在小屏移动设备（手机）上，图标是静态的：

- ![Static icon](https://cdn.pkmer.cn/covers/custom-sort_2_0.png!pkmer) 图标作为按钮切换启用和禁用状态。其外观不会改变。

有关图标状态的更多详细信息，请参阅 [Ribbon图标部分的advanced-README.md](./advanced-README.md#ribbon-icon)。

## 小屏移动设备备注

- 即使在共享保险库上在桌面上激活了自定义排序，您可能仍然需要在移动设备上单独激活自定义排序。
- Obsidian 命令面板很容易使用（在小屏移动设备上向下滑动手势），可以通过命令快速控制插件：sort-on 和 sort-off。这可能比导航到并展开功能区更容易。
- 功能区图标是静态的（![静态图标](https://cdn.pkmer.cn/covers/custom-sort_2_0.png!pkmer)），不反映自定义排序的状态。您可以在设置中启用“插件状态更改”通知，仅适用于移动设备。

安装插件

### 来自官方 Obsidian 社区插件页面

插件可以和应该从官方 Obsidian 社区插件列表（<<https://obsidian.md/plugins）或直接在> Obsidian 应用程序中安装。>

通过其名称“CUSTOM FILE EXPLORER SORTING”搜索插件。

> 对于其他安装方法，请参考 [高级README.md中的安装插件部分](./advanced-README.md#installing-the-plugin)。

## 鸣谢

感谢 [Nothingislost](https://github.com/nothingislost) 在 [obsidian-bartender](https://github.com/nothingislost/obsidian-bartender) 中提供的文件资源管理器的猴子补丁思路。

...在你离开之前，也许你想在文件资源管理器中使用可视化分隔符吗？

你想在文件资源管理器中拥有像这样漂亮的水平分隔符吗？

![separators](https://cdn.pkmer.cn/covers/custom-sort_2_12.png!pkmer)

如果是的话，请前往 [指南和更多上下文](https://github.com/SebastianMC/obsidian-custom-sort/discussions/57#discussioncomment-4983763)，

由 [@replete](https://github.com/replete) 提供\

快速简便！

这个功能不依赖于 Custom Sorting 插件。

同时我在这里提到它是因为它是与 [@replete](https://github.com/replete) 的讨论的一个副作用。

我们考虑直接在插件中支持分隔符。最终，这归结为一个非常简洁和智能的基于 CSS 片段的解决方案，与插件无关。去看看，在 Obsidian 的 CSS 片段中复制它，享受更加分组的外观。
