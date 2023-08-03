---
uid: 20230803212716
title: Obsidian 插件：【Readme】Longform
tags: ['文件管理', 'obsidian插件', 'readme']
description: Obsidian 插件，可帮助您编写和编辑小说、剧本和其他长期项目。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Longform

> [!Note] 插件名片
> - 插件名称：Longform
> - 插件作者：Kevin Barrett
> - 插件说明：Obsidian 插件，可帮助您编写和编辑小说、剧本和其他长期项目。
> - 插件分类：['文件管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kevboh/longform)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?longform)

## 概述

Obsidian 插件，可帮助您编写和编辑小说、剧本和其他长期项目。

![Longform](https://cdn.pkmer.cn/covers/longform.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kevboh/longform/main/README.md)
> 

---

## Readme(翻译）

下面是 [[longform]] 插件的自述翻译



长篇是一个为[Obsidian](https://obsidian.md)设计的插件，它帮助你编写和编辑小说、剧本和其他长篇项目。它允许你将一系列笔记或“场景”组织成有序的手稿。它还支持单个笔记的项目，用于较短的作品。主要功能包括：

- 专用的侧边栏，从你的存储库中收集你的项目；
- 可重新排序、可嵌套的场景列表；
- 场景/草稿/项目的字数统计；
- 每日写作会话目标，提供多种选项以适应你的写作风格；
- 基于工作流的编译工具，可以从你的项目中创建手稿；
- 支持单场景项目，使你的较短作品可以使用与较长作品相同的工作流和工具；
- 还有许多命令、模态框和菜单项，帮助你管理你的工作。

接下来是一个入门指南；还有相当完整的[文档](./docs/)。

## 安装

Longform位于Obsidian设置的Community Plugins部分。您也可以通过将发布版本中的`main.js`、`manifest.json`和`styles.css`文件复制到您的vault的`.obsidian/plugins`文件夹中的`longform/`文件夹中进行手动安装。推荐使用Community Plugins界面进行安装。

## 入门指南

Longform通过搜索您的保险库，查找包含名为`longform`的前置条目的任何笔记（如果您不知道这是什么意思，不用担心；Longform包含帮助您生成这些文件的工具）。您可以将这些笔记视为项目的“脊柱”或目录。让我们一起创建两个不同的Longform项目：一本小说和一篇短篇小说。

### 创建一部小说

1. 首先，在你的保险库中找到或创建一个文件夹，你想在其中创建你的小说。右键点击它，选择“创建长篇项目”。

![创建长篇项目菜单项](./docs/res/walkthrough-create-longform-project.png)

2. 一个“创建项目”对话框将出现。这个对话框让我们在多场景和单场景项目类型之间进行选择。我们正在创建一部小说，所以我们将选择多场景。项目类型切换下方的文本解释了每种类型项目的工作原理。

3. 在“标题”字段中，输入你的小说标题。在这个例子中，我们将使用“我的伟大小说”。对话框告诉我们我们正在创建的项目类型以及它将在我们的保险库中创建的索引文件的位置。我们将在稍后了解索引文件是什么。

![填写完整的多场景项目创建对话框](./docs/res/walkthrough-create-multi.png)

> **注意**
>
> 你不必使用这个菜单项和对话框来创建长篇项目。正如你很快将看到的，长篇项目是围绕一些YAML前置元数据组织的一个或多个笔记。你可以随时在你的保险库中的任何地方自己创建一个笔记，并使用“插入多场景前置元数据”和“插入单场景前置元数据”命令来填充笔记 - Longform将自动识别它。虽然不推荐，但你也可以手动编写YAML前置元数据。

4. 点击“创建”。Longform已经创建了承诺的文件。如果我们切换到侧边栏中的[长篇面板](./docs/THE_LONGFORM_PANE.md)，项目已经被选中。你应该看到三个选项卡：场景、项目和编译，而场景应该被选中。

![在长篇面板中新创建的项目](./docs/res/walkthrough-multi-fresh-pane.png)

5. 那个“新场景”占位符是一个文本字段 - 点击它并输入一些听起来像小说第一场景的东西，比如“太阳升起在都柏林”，然后按回车键。现在你应该正在编辑一个以这个名字命名的笔记，你的场景应该出现在场景选项卡中：

![带有新创建场景的“我的伟大小说”小说](./docs/res/multi-walkthrough-2.png)

6. 你的编辑器现在也已经打开并准备好写作。如果你点击项目名称下的小小的“我的伟大小说/Index.md”链接，你将被带回到索引文件，你将在“scenes”前置元数据条目下看到你的新场景列表：

```yaml
scenes:
  - 太阳升起在都柏林
```

这就是Longform跟踪你的工作的方式。

> **警告**
>
> 除非你真的知道你在做什么，否则你应该避免直接编辑索引文件中的“longform”前置元数据。Longform支持直接编辑它，并会尽力同步，但很容易意外搞砸。不过你总是可以恢复你的更改：Longform永远不会根据索引文件中的更改删除文件。

7. 现在你已经准备好写你的小说了。根据需要添加场景。如果你想给你的小说添加结构，你可以将场景向左或向右拖动（或使用缩进/取消缩进命令）以创建具有父场景的场景文件夹。[多场景项目的完整文档](./docs/MULTIPLE_SCENE_PROJECTS.md)可能会有用。

8. 当你准备好为读者生成单一的手稿时，使用[编译](./docs/COMPILE.md)功能。恭喜！你已经写了一部小说。

### 创建一个短篇小说

Longform还支持作为笔记库中的单个笔记存在的[单场景项目](./docs/SINGLE_SCENE_PROJECTS.md)。让我们创建一个。

1. 如前所述，右键单击包含的文件夹，然后选择“创建Longform项目”菜单项。

2. 在创建项目对话框中，选择“Single”。让我们写一些黑色电影风格的东西，称之为“在屋顶上”。

![在创建项目对话框中创建单场景Longform项目](./docs/res/walkthrough-create-single.png)

3. 点击创建。因为这是一个单场景项目，只有一个与之关联的笔记，Longform会自动打开它。顶部的frontmatter告诉Longform如何跟踪你的项目；我们将在笔记本中编写故事。

4. 写下你的故事！当你准备好时，可以使用编译选项卡生成手稿。单场景项目可以按任意顺序使用场景和手稿步骤。

## 草稿和项目

Longform支持为给定项目创建多个“草稿”。在幕后，草稿只是具有相同标题的不同Longform项目 - 然后由Longform分组在一起，并呈现为同一项目的不同版本。

要创建项目的新草稿，请在项目选项卡中使用新草稿（+）按钮，或在其他地方创建一个全新的项目，并在项目选项卡中将标题设置为与现有项目相同。

您可以通过在项目选项卡中右键单击草稿并选择重命名，或者在其“longform”前置数据中设置“draftTitle”属性来重命名草稿。

## 编译

编译选项卡允许您创建自定义工作流，将您的项目转换为手稿。有关更多信息，请参阅[COMPILE.md](https://github.com/kevboh/longform/blob/main/docs/COMPILE.md)。

### 仅限场景的样式

Longform会自动将`.longform-leaf`类附加到任何属于Longform项目的笔记容器窗格上。这意味着您可以向Obsidian添加自定义CSS片段，以样式化您的写作环境，且仅限于您的写作环境。例如，我喜欢Obsidian的暗色主题，但写作时喜欢亮色主题，所以我的写作片段大致如下：

```css
/* 为整个窗格设置一些变量。*/
.longform-leaf {
  --background-primary: white;
  --background-primary-alt: white;
  --background-secondary: white;
  --background-secondary-alt: white;
}

/* 样式化编辑器。*/
.longform-leaf .markdown-source-view {
  --background-primary: white;
  --background-primary-alt: white;
  --background-secondary: white;
  --background-secondary-alt: white;
  --text-selection: #aaa;
  --text-normal: black;
  color: black;
  background-color: white;
}

/* 样式化文本选择。*/
.longform-leaf .suggestion-item.is-selected {
  background-color: var(--text-accent);
}

/* 样式化窗格标题。*/
.longform-leaf .view-header {
  background-color: white;
}

/* 样式化窗格标题的文本内容。*/
.longform-leaf .view-header-title {
  --text-normal: black;
}
```

Longform自己的用户界面在可能的情况下始终使用现有的Obsidian CSS主题变量，因此它应该始终与您的主题相匹配。

故障排除

首先，最重要的是：**Longform专门设计成不会更改您的笔记内容。**它只会重写项目的索引文件。因此，Longform不会删除或丢失您的笔记。

Longform进行了许多复杂的跟踪，以将项目的元数据与磁盘上文件的状态进行桥接。尽管它试图覆盖许多边缘情况，但仍有可能导致Longform认为项目正在发生的情况与实际情况不同步。最常见的情况是项目的前置元数据格式错误或无效。因为项目是根据前置元数据推断出来的，所以如果您的前置元数据正确，您可以重新启动Obsidian（或选择“重新加载但不保存”命令）来强制Longform重新计算项目。

## 赞助

非常感谢任何[赞助](https://github.com/sponsors/kevboh)，尽管这并非必要。

## 许可证

请参阅[LICENSE.md](./LICENSE.md)。您可以在[此处](https://git.sr.ht/~boringcactus/fafol/tree/master/LICENSE.md)查看许可证的历史记录。



