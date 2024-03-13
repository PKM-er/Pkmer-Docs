---
uid: 2023080322213423
title: Obsidian 插件：Linked Data Vocabularies
tags: ['obsidian插件', 'readme']
description: 将国会图书馆主题词表（LCSH）作为元数据添加到您的笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Linked Data Vocabularies

> [!Note] 插件名片
> - 插件名称：Linked Data Vocabularies
> - 插件作者：kometenstaub
> - 插件说明：将国会图书馆主题词表（LCSH）作为元数据添加到您的笔记中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kometenstaub/linked-data-vocabularies)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linked-data-vocabularies)

## 概述

将国会图书馆主题词表（LCSH）作为元数据添加到您的笔记中。

![Linked Data Vocabularies](https://cdn.pkmer.cn/covers/linked-data-vocabularies.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kometenstaub/linked-data-vocabularies/main/README.md)

---

## Readme(翻译）

下面是 [[linked-data-vocabularies]] 插件的自述翻译

# Obsidian Linked Data Vocabularies 插件

> [!important]
>
> 如果您是现有用户，您需要更新您的数据。为此，您需要将 Linked Data Helper 插件更新到 1.0.0 版本，并再次按照其设置中概述的步骤进行操作。

> [!note] 为什么您应该使用这个插件？
>
> 它允许您向笔记中添加链接数据。
> 请参阅 [@brimwats](https://github.com/brimwats) 的 [解释](#explanation-of-linked-data) 以更好地理解链接数据。

![modal](./assets/modal.png)

![result](assets/result.png)

目前，支持 Library of Congress Subject Headings。

该插件为所选标题、URL（可选）、更广泛的、更狭窄的和相关的标题添加了 YAML 键。它还支持将其作为内联 YAML 插入到当前选择中，以便与 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 一起使用。

**要生成所需的数据，您必须安装 [Linked Data Helper](https://github.com/kometenstaub/linked-data-helper) 插件。** 要使用 Obsidian Sync 同步数据，您需要在同步设置中启用“同步所有其他类型”。

## 配置

**您需要输入存储 JSON 文件的保险库中的文件夹。**

您可以设置要显示的查询限制。默认设置为 100。您还可以设置模糊搜索的敏感度。

您可以在设置中设置 `heading`、`altLabel`、`uri`、`lcc`、`broader`、`narrower` 和 `related` 的键名。

`lcc` 是 LC 分类。

除了 `heading` 之外，所有内容都可以在设置中禁用。

> [!note]
>
> 还有一个选项可以在 Obsidian 启动时加载 LCSH 建议器数据。这可以提高在较慢设备上的性能。默认情况下禁用此选项。
>
> 这不推荐在移动设备上使用，因为它会减慢每次启动的速度，而这可能更频繁发生。

## 用法

在编辑器中，打开命令面板并执行“LCSH”命令。或者，您可以为其设置一个热键。

有两个选项：您可以使用<kbd>Enter</kbd>将数据插入为 YAML 格式。

如果没有 YAML 块存在，将创建一个新的 YAML 块。如果已经存在 YAML，则新的 YAML 将附加到当前 YAML 上。

或者，您可以使用<kbd>Shift</kbd> + <kbd>Enter</kbd>将其插入为当前选择的内联 YAML。

通过点击<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Enter</kbd>，您可以在美国国会图书馆网站上打开标题。

如果您按下<kbd>Alt</kbd> + <kbd>Enter</kbd>，您还可以在授权标题后添加一个细分。[这里](#subdivisions--complex-subjects) 是 [@brimwats](https://github.com/brimwats) 对细分的解释。

当然，您也可以使用鼠标。

> [!warning]
>
> 插入 YAML 将覆盖现有的键值或删除新标题不使用的旧键名。如果您想将另一个标题与注释关联起来，这将非常有用。
>
> 因此，请确保从一开始就决定要使用的键名，否则插件将无法覆盖现有键。
>
> 还要确保不要将相同的 YAML 键用于其他数据，因为此插件将覆盖它们。

模态框显示标题为粗体，下方显示变体标签和注释（如果有）。

标题旁边显示 LC 分类（如果有）。

## 推荐

使用此插件与 [Breadcrumbs](https://github.com/SkepticMystic/breadcrumbs) 一起使用。您可以在其设置中设置层次结构，并在笔记中创建的标题层次结构中拥有一个面包屑视图，以便导航。

# 链接数据的解释

感谢 [@brimwats](https://github.com/brimwats) 提供的链接数据解释！

该插件允许在 Obsidian 笔记中使用结构化的链接数据词汇作为元数据。在使用此插件时，有一些概念需要理解。

在文化遗产机构（如图书馆）接收到新物品时，必须经过几个步骤才能使其可用。最重要的是，该物品必须通过**主题标目**进行**编目**。**主题标目**是一个旨在作为书籍的关键词或主题解释的术语。如果您曾经使用过标签或关键词，您就能理解其目的。**编目**意味着给物品至少分配一个主题标目，例如“贵宾犬”或（更常见的是）多个标目，例如“1. 狗”和“2. 贵宾犬”。

当我们谈论“贵宾犬”或“拉布拉多猎犬”时，这似乎是显而易见的，但当试图组织成千上万个物品时，情况变得非常混乱。大型机构每天都要处理这种情况，因此它们必须**确保**所有标目具有相同的含义。对于分类目的，一个“拉布拉多猎犬”（拉布拉多和贵宾犬的后代）应该被视为贵宾犬还是拉布拉多？那么“金毛贵宾犬”（金毛猎犬和贵宾犬的后代）呢？“约克贵宾犬”呢？“巴哥贵宾犬”呢？“可卡贵宾犬”、“马尔济斯贵宾犬”或“波士顿梗贵宾犬”呢？

这就是控制词汇和信息检索词库的作用。

当大多数人谈到词库时，他们可能会想到风格词库，包括 [Thesaurus.com](https://www.thesaurus.com/) 这样的网站，或者像《罗杰斯词库》这样的书籍，它们提供与某个词或短语相似或不相似的替代词。对于单词“信息”，Thesaurus.com 提供了同义词“建议”、“线索”或“数据”，以及反义词“无知”、“问题”、“沉默”。

词库中存在三个基本规则，即 UF、BT/NT 和 RT。

1. 使用/用于（USE/UF），
2. 更广泛的术语和更窄的术语（BT/NT），
3. 相关术语（RT）。

根据美国国会图书馆的说法：

> USE 引用是从未经授权或非首选术语指向经授权或首选标题。在所指的标题下，代码 UF（Used For）在未使用的术语之前。USE 引用是从未经授权或非首选术语指向经授权或首选标题。在所指的标题下，代码 UF（Used For）在未使用的术语之前。代码 USE 和 UF 作为互补功能。

这是词库中最严格的规则。它告诉编目员在另一个词语的位置使用一个词（USE FOR），或者他们正在寻找的材料在另一个术语下（USE）。

例如：

**Cars (Automobiles)**

→ 使用 Automobile

**Automobiles**

→ UF Cars (Automobiles)

USE 引用是从同义词、变体拼写、表达形式的变体、标题的替代构造以及早期标题形式中进行的。当决定即使标题和未使用的词语并不真正同义词时，也会进行 USE 引用。

### 更广泛的术语和更狭窄的术语

缩写词**BT**（更广泛的术语）和**NT**（更狭窄的术语）表示层次关系。

代码**BT**指的是标题所属的类别。因此，Automobiles 是 Volvos 的更广泛的术语。Dogs 是 Poodles 的更广泛的术语。

代码**NT**指的是出现在**NT**下的标题所代表的类别的成员。因此，Volvos 是 Automobiles 的更狭窄的术语。Poodles 是 Dogs 的更狭窄的术语。

最广泛（父级）的术语往往是非常模糊的概念，比如“艺术”，通常需要进一步缩小范围才能有用，因此它会有多个**NT**，或者更狭窄的术语，例如

**艺术**

→ **NT** 西方艺术

→ **NT** 土著艺术

→ **NT** 亚洲艺术

→ [等等]

这些**NT**通常会有进一步的**NT**，所以

艺术

- **NT** 西方艺术
    - **NT** 西方雕塑
        - **NT** 现代雕塑
            - **NT** [等等]

### 相关术语

缩写词**RT**（相关术语）用于链接两个标题，这两个标题以某种方式与层次结构（**BT**s/**NT**s）之外的方式相关联。例如，

鸟类

→ **RT** 鸟类学

鸟类学

→ **RT** 鸟类

从最基本的意义上讲，**RT**仅仅表明当前主题词与另一个主题词之间存在联系。对于编目员来说，这使他们能够考虑使用相关术语对其材料进行编目。对于用户来说，这使他们能够在两个主题标题下查找，以确保他们已经审查了所有相关信息。

**RT**允许更广泛的信息机构控制术语。

## 搜索词汇

- 您可以在这里搜索美国国会图书馆主题词表（LCSH）：[https://id.loc.gov/authorities/subjects.html](https://id.loc.gov/authorities/subjects.html)
- 一个词汇库存储库在这里：<https://lov.linkeddata.es/dataset/lov/>

对于 LCSH，这个插件还支持所谓的“**[Subdivisions](https://www.loc.gov/aba/publications/FreeSHM/H0180.pdf)**”或**复杂主题**。分部是目录员（也就是插件用户，也就是你）用来更具体地描述通用主题的一种方式。

例如，如果我想将我的笔记编目为讨论古代腓尼基人及其宗教，我会使用这个插件将“腓尼基人”添加到我的笔记中。这可以满足很多人的需求。但是如果我有很多关于“腓尼基人”的笔记，如果我想区分“古代”和“普通”腓尼基人的笔记，或者如果我想区分关于腓尼基人“宗教”的笔记和关于他们的“神”的笔记呢？

LCSH 没有“古代腓尼基神”，所以就有了分部！分部是跟在第一个主题后面的“附加”术语。当没有更具体的主题存在时，使用这个次要术语跟在第一个主题后面。

首先找到“腓尼基人”，然后按下“alt+enter/return”进入复杂模式，在这里你可以选择“-- 宗教”或“-- 古代”。

## 各种细分

有五种不同的细分方式：

- [主题细分](http://id.loc.gov/authorities/subjects/collection_TopicSubdivisions)，表示第一个术语的行动、属性或方面。
    - 例如 `Helicopters--Flight testing`（直升机 - 飞行测试）；`Drinking water--Aluminum content`（饮用水 - 铝含量）；`Mental health--Nutritional aspects`（心理健康 - 营养方面）。主题细分被用作表达概念、方法或技术的标准方式，这些概念、方法或技术在多个领域中都是常见的。
- [体裁形式细分](http://id.loc.gov/authorities/subjects/collection_GenreFormSubdivisions)，表示物品的**性质**而不是**内容**。如果你有一个特定类型的注释，你可以使用这个细分方式。
    - 例如，最常用的形式细分是 `--Bibliography`（-- 参考书目）、`--Juvenile literature`（-- 少儿文学）和 `--Periodicals`（-- 期刊）。
- [时间细分](http://id.loc.gov/authorities/subjects/collection_TemporalSubdivisions)，表示作品内容涵盖的时间段。这通常与对某一主题的历史处理相关，并在细分 `--History`（-- 历史）之后使用。
    - 例如，`Women--History--Nineteenth Century`（妇女 - 历史 - 十九世纪）。
- [地理细分](http://id.loc.gov/authorities/subjects/collection_GeographicSubdivisions)，表示对某一主题的处理范围限定在特定地理区域。它们可以指示某物的位置，或者某物的来源，具体取决于主题。
    - 例如：
- [语言细分](http://id.loc.gov/authorities/subjects/collection_LanguageSubdivisions)，表示物品所使用的语言。
    - 例如：`Bees--French Language`（蜜蜂 - 法语）。不过，如果你点击这个链接，你会发现这是一个空白页面——这个细分方式正在逐步淘汰！

有关细分的更多信息

如果您对阅读更多内容感兴趣，这里是来自美国国会图书馆的关于 [细分类型和目的的文档](https://www.loc.gov/aba/publications/FreeSHM/H1075.pdf)。

这里还有 [另一个解释](https://www.librarianshipstudies.com/2018/01/library-of-congress-subject-headings-lcsh.html#:~:text=are%20free-floating.-,SUBDIVISIONS,are%20listed%20in%20LCSH.,-In%20order%20to) 关于细分的解释。

## 鸣谢

该插件使用了 'fuzzysort' npm 模块（<https://www.npmjs.com/package/fuzzysort>，<https://github.com/farzher/fuzzysort>）。许可证文件可以在 [这里](https://github.com/kometenstaub/obsidian-linked-data-vocabularies/blob/main/esbuild.mjs) 找到。
