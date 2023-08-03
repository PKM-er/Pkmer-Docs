---
uid: 2023080322141183
title: "Obsidian 插件：April's Automatic Timelines"
tags: ['obsidian插件', 'readme']
description: 故事讲述者的简易时间线生成器
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：April's Automatic Timelines

> [!Note] 插件名片
> - 插件名称：April's Automatic Timelines
> - 插件作者：April Gras
> - 插件说明：故事讲述者的简易时间线生成器
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/April-Gras/obsidian-auto-timelines)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aprils-automatic-timelines)

## 概述

故事讲述者的简易时间线生成器

![April's Automatic Timelines](https://cdn.pkmer.cn/covers/aprils-automatic-timelines.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/April-Gras/obsidian-auto-timelines/master/README.md)
>

---

## Readme(翻译）

下面是 [[aprils-automatic-timelines]] 插件的自述翻译

# 四月自动生成时间线

一个与主题无关的时间线生成器，适用于 [Obsidian](https://obsidian.md/)。

<img src="https://user-images.githubusercontent.com/1866440/232319031-7eeb18ef-da01-488d-b0cc-f528e7760574.png" width=480 />

这个插件允许你通过标签来生成时间线。它的设计初衷是为了讲故事。

## 带有基本示例的样本保险库

[TimelineSampleVault.zip](https://github.com/April-Gras/obsidian-auto-timelines/files/12065143/TimelineSampleVault.zip)

这是一个带有各种基本示例的 Obsidian 保险库，可以帮助您构建时间轴。

或者，[Josh Plunkett](https://www.youtube.com/@JoshPlunkett) 制作了一个 [教程视频](https://www.youtube.com/watch?v=992o1j8zRSk)，介绍了基础知识。

### 如何使用

首先，在您希望在时间轴中显示的笔记中添加一些元数据。

```yml
aat-event-start-date: 359 # 必填
aat-event-end-date: 435 # 可选，如果要跨越整个时间轴，则可以设置为“true”
aat-render-enabled: true # 启用此笔记在时间轴中呈现
timelines: [timeline, event] # 此笔记应在名为“timeline”或“event”的时间轴中呈现
```

一旦您标记了至少一个笔记，请创建一个新的笔记，并添加一个新的 Markdown 代码块，使用三个反引号标记为 `aat-vertical`，并将时间轴的名称添加为其内容。

您还可以通过使用逗号分隔值来为时间轴指定多个名称（此值可以在设置中更改）

![image](https://github.com/April-Gras/obsidian-auto-timelines/assets/1866440/78de88e6-7048-47a6-b943-fe7bbae58c69)

这将扫描存储库中所有标记为在“timeline”时间轴内呈现的笔记

在幕后，插件将解析内容并为每个笔记生成一个卡片。在时间轴中创建卡片所需的唯一手动内容是开始日期。

#### 附加元数据键

有时候笔记的内容并不完全是你想要出现在卡片上的内容。

为了解决这个问题，插件默认提供了三个键：

```yml
aat-event-title: 新标题 # 用于覆盖生成卡片的标题。
aat-event-body: 新卡片内容 # 用于覆盖生成卡片的文本内容。
aat-event-picture: https://f4.bcbits.com/img/a1344871335_65 # 一些外部链接，目前不支持内部链接
```

#### 高级日期格式

有时候，传统的“年 - 月 - 日”时间格式对于你的世界来说并不够用，你可能会使用更复杂的时间系统。

该插件提供了 3 个主要设置，以帮助实现您所需的时间格式。

在深入了解太多细节之前，请确保您熟悉正则表达式和其中的命名捕获组。如果不是这种情况，fireship.io 有一个 [适合初学者的优秀视频](https://www.youtube.com/watch?v=sXQxhojSdZM) 可以开始您的学习之旅。

##### 日期解析正则表达式

默认情况下，插件将依赖于以下正则表达式：

```regex
(?<year>-?[0-9]*)-(?<month>-?[0-9]*)-(?<day>-?[0-9]*)
```

正如您所看到的，它将捕获任何遵循以下格式的日期：`数字-数字-数字`。

但是这里有一个小细节。命名捕获组 `<year>` `<month>` 和 `<day>`。这些将在后面变得重要。

##### 日期解析器组优先级

此设置应直接基于先前创建的正则表达式。在默认正则表达式中，我们有 3 个主要的标记。`year` `month` 和 `day`。您可以在命名捕获组中找到它们。

在此设置中，您应按权重对标记进行排序。所以在我们的例子中：`year,month,day`

每个标记应遵循先前正则表达式中命名捕获组中使用的相同语法，并用单个逗号（`,`）分隔。

##### 日期显示格式

这是三种日期格式设置中最直接的一种。这是卡片实际显示的模板。只需将每个标记包裹在 `{}` 中，并按照您喜欢的方式进行格式化。例如，要显示 `yyyy-MM-dd`，我们将编写：`{year}-{month}-{day}`。

##### 示例幻想日期格式

循环 - 月相 - 日

让我们稍微疯狂一点，想象一个时间以这种方式跟踪的世界

- `循环` 是时间的最高值，每个循环可以看到 3 个月相的变化。
- `月相` 比循环更频繁，由阶段组成。
- `阶段` 比每个循环的月相更频繁，由日组成。
- `日` 是这个系统中最低的相关时间单位。

假设在我们的元数据中，我们想要将值存储为以下格式

```yml

# 14 phases & 23 days on the 2'nd moon of the 687'th cycle
aat-event-start-date: 14&23-2M-687C
```

我们的正则表达式将如下所示

```regexp
(?<phase>[0-9]*)\&(?<day>[0-9]*)-(?<moon>[0-9]*)M-(?<cycle>[0-9]*)C
```

每个日期标记都可以找到一个捕获组。

现在来设置我们的日期解析器组的优先级：

`cycle,moon,phase,day`

假设我们希望有一个相当简洁的显示格式，只显示周期和月份。

```
cycle {cycle}, {moon}
```

我们最初声明的元数据的最终结果将类似于：`cycle 687, 2`。

##### 日期令牌类型

在某些情况下，将日期显示为纯数字可能不够直观。这就是日期令牌类型的用途。目前有两种类型：

- `numerical`：这些日期令牌应该显示为默认格式，例如 `06 july 2018` 中的 `day` 和 `year` 都是数字日期令牌。`day` 令牌的最小长度为 `2`，`year` 令牌的最小长度为 `4`。
- `string`：这些类型的配置可能会有些麻烦，但能提供更好的可见性。例如，在我们之前的例子中（`06 july 2018`），`month` 令牌是一个 `string` 日期令牌。
要配置日期令牌，请转到插件设置并使用 `Date Format Settings` 设置流程或使用高级模式进行编辑。

##### 时间轴特定设置覆盖

在某些情况下，设置中使用的输出格式对于某些时间轴来说太宽泛了。假设我们定义了以下标记：

- 年
- 月
- 日
- 小时
- 分钟

我们可以将默认输出格式设置为 `{day} {month} {year}`，以涵盖许多用例。但是假设我们有一个时间轴，其中的事件可能相隔几分钟。

与其试图妥协其他时间轴的显示，我们可以直接编写如下内容：

![image](https://github.com/April-Gras/obsidian-auto-timelines/assets/1866440/6ce32770-7ba6-4fe6-b1f8-eb629d960114)

这将覆盖全局设置，但仅适用于此时间轴。

语法如下：`dateDisplayFormat: whatever {token-name} some more whatever {other-token-name}`。您可以根据需要使用任意数量的标记，只要它们在全局设置中先定义过。

## 内联事件

内联事件默认情况下是启用的，但如果您不需要它们，您可以随时禁用它们，以减少每个笔记的处理周期。

通过这个功能，您可以在一个笔记中定义事件。该事件将忽略在其位置之上的任何内容，并从那里开始解析笔记。这意味着您可以在一个笔记中描述单个时间轴的所有事件。

以下示例可以在您的笔记中间。或者在最后。或者任何地方都可以。只是不要在前置元数据之前。

```markdown
%%aat-inline-event
aat-event-start-date: 54
aat-event-end-date: true
aat-render-enabled: true
timelines: [timeline-name]
%%
```

键是您在设置中设置的键。请查看 [示例库](https://github.com/April-Gras/obsidian-auto-timelines#sample-vault-with-basic-examples) 以获取更多关于此的示例。

开发

根据 obsidians 的 [非官方文档](https://marcus.se.net/obsidian-plugin-docs/getting-started)：

- 在测试保险库中克隆存储库
- 运行 `npm install` 安装依赖项
- 运行 `npm run dev` 启动开发监视器

## 测试

在启动单元测试之前，请确保使用 `npm run install` 安装依赖项，并使用 `npm run prepare-vitest` 设置一些更改，以便 vitests 正确地与 obsidians 包配合工作。

一旦完成上述步骤，使用 `npm run test` 来启动测试。

使用 `npm run test-ui` 来运行 UI 并在浏览器中查看覆盖率。
