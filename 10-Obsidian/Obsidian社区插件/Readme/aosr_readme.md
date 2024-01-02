---
uid: 2023120719222928
title: Obsidian 插件：【Readme】Aosr
tags: ['obsidian插件', 'readme']
description: 另一种黑曜石间隔重复法。它使用闪卡来帮助复习和记忆知识。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Aosr

> [!Note] 插件名片
> - 插件名称：Aosr
> - 插件作者：linanwx
> - 插件说明：另一种黑曜石间隔重复法。它使用闪卡来帮助复习和记忆知识。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/linanwx/aosr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aosr)

## 概述

另一种黑曜石间隔重复法。它使用闪卡来帮助复习和记忆知识。

![Aosr](https://cdn.pkmer.cn/covers/aosr_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/linanwx/aosr/master/README.md)
>

---

## Readme(翻译）

下面是 [[aosr]] 插件的自述翻译

# Aosr

![GitHub所有版本下载量](https://img.shields.io/github/downloads/linanwx/aosr/total) ![版本](https://img.shields.io/github/v/release/linanwx/aosr)

Aosr 是**A**nother **O**bsidian 插件，用于**S**paced **R**epetition（间隔重复）。

它使用记忆卡片来帮助记忆知识。

该插件类似于 [spaced repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition)，但根据个人习惯进行了一些更改。

# 新功能

- **新的卡组功能：** 我们在 Aosr 中引入了一个新的 [卡组功能](https://github.com/linanwx/aosr#deck-functionality-in-aosr)。这个功能允许您根据自定义规则定义卡组的内容。只需将提供的代码复制粘贴到您的 Obsidian 笔记中，Aosr 插件将自动将其转换为可供复习的卡组。

# 特点

- **丰富的富文本格式支持**：该插件支持音频等富文本格式。这使您可以创建多媒体的闪卡，提供更沉浸式的学习体验。
- **专用复习窗口**：该插件具有独立的复习窗口，允许您在编辑器中对卡片进行更改的同时进行复习。这非常适合快速调整。
- **分钟级复习间隔**：该插件允许您将复习间隔设置到分钟级别。这在安排复习时提供了高度的精确性。
- **三种基本学习类型**：该插件支持三种基本学习类型 - 单行、多行和填空删除。
- **移动设备优化的复习界面**：该插件现在支持移动设备，提供了专为移动用户设计的优化复习界面。这确保了在移动设备上复习卡片时的无缝和用户友好的体验。
- **多语言支持**：支持 Obsidian 中的几乎所有语言。由 ChatGPT 翻译。
- **卡组功能**：Aosr 现在包括一个强大的卡组功能，允许您以高度可定制的方式管理您的闪卡。您可以定义自己的规则来管理卡组，提供个性化的复习体验。

# 演示

![屏幕录制2022-11-08 17 56 11](https://cdn.pkmer.cn/covers/aosr_1_2.gif)

# 格式

## 卡片

一个卡片以 `#Q` 开头，并以一个空行结束。

```
#Q 
这是一个卡片。
在这里，请使用Pattern格式编写您的问题和答案。Pattern的格式如下所述。
只有在#Q和空行之间的内容将被视为复习内容。
超出此范围的Pattern格式将不会被处理。
<- 如果这不是文档的结尾，则应该有一个空行。
```

在卡片中，Pattern 是您的问题和答案。

一个卡片可以包含多个 Pattern。例如，如果您正在学习一个词汇表，您的卡片可以包含多行:: 样式的 Pattern，每个 Pattern 将一个单词与其定义配对。从本质上讲，您可以将卡片视为 Obsidian 中的文本块，而 Pattern 是一个问题及其对应的答案。一个文本块可以包含多个问题及其各自的答案。

使用 `***` 将卡片分割为子卡片。如果您不想编写 `#Q` 并创建一个新卡片，这将非常有用。

```
#Q
卡片1
***
卡片2
```

上述写法的效果与以下写法相同。

```
#Q
卡片1

#Q
卡片2
```

范围卡片（Scope Cards）

范围卡片，也被称为作用域卡片，是 Markdown 格式中的一种特殊类型卡片。它们作为一项新功能被引入，以增强创建闪卡的灵活性。

范围卡片以 `#Q` 开头，以 `#/Q` 结尾。范围卡片的独特之处在于它支持包含空行的格式，使其适用于各种内容类型。以下是一个示例：

```markdown
#Q
...
（空行）
...
（空行）
...
#/Q
```

除此之外，范围卡片在其他方面的行为与块卡片类似。

在范围卡片的上下文中，模式仍然遵循其通常规则。值得注意的是，多行模式不包括完整的空行。然而，在范围卡片中，您可以创建多个多行模式，每个模式之间用空行分隔。在填空删除格式中，问题（即剩余的文本）跨越整个卡片。

这为使用范围卡片提供了一些最佳实践。

1. **创建多个多行问题组**：您可以利用范围卡片的格式创建多个多行模式。这些模式可以单独分组，并用空行分隔，为您提供了一种灵活的组织复杂信息的方式。
2. **创建复杂问题与填空删除答案**：如果您处理复杂的主题，可以创建一个全面的问题，然后使用填空删除格式（`==`）来封装答案。如果您的答案跨越多行，或者您需要将不同部分作为整体答案考虑，您可能需要使用 `#multicloze` 标签将多个答案捆绑在一起。

请注意，如果您的答案过于复杂，涉及许多空行，您可能需要重新考虑问题的结构。极其复杂的答案可能不适合基于闪卡的复习。

模式

一个模式代表一个问题及其对应的答案。

### :: 模式

在卡片中，使用 `::` 符号来分割一行。前半部分将成为问题，后半部分将成为答案。

```
单词::定义
```

每一行将被处理为一个独立的模式。

```
单词::定义
单词::定义
单词::定义
```

您可以使用符号 `:::` 来创建可以从问题到答案和从答案到问题进行复习的卡片。

```
单词:::定义
```

### ? 模式

在卡片中，一行带有 `?` 的线将内容分为问题和答案。前部分将成为问题，后部分将成为答案。

```
问题。
可能有很多行。
?
答案。
可能有很多行。
```

### == 模式

在卡片中，一对 `==` 之间的填空将会将该卡片分割。剩余部分将成为一个问题，而填空部分将成为一个答案。请注意，每个填空将被视为一个单独的模式。

```
一个 ==填空==。
```

```
水果包括 ==西瓜==、==苹果== 和 ==梨子==。
```

请注意，每个填空将被视为一个单独的模式。否则，您应该这样写。

```
水果包括 ==西瓜，苹果和梨子==。
```

此外，您可以在卡片上添加一个 [#multicloze](https://github.com/linanwx/aosr#multicloze-pattern) 标签以获得相同的效果。

##### 多空模式

如果在卡片中找到了 `#multicloze` 标签，Aosr 将把卡片中的所有填空视为一组填空。

```
你应该同时记住==这个==和==那个==。#multicloze
```

# 示例

下面展示了几个示例。它们的写法在文档中是有效的。

```
#Q
word1::ans1
word2::ans2
word3::ans3
word:::definition

#Q
This is a question1.
?
This is an answer.
***
This is a question2.
?
This is an answer.

#Q
This is a very ==important== answer.

#Q
word1::ans1
***
This is a question.
?
This is an answer.
***
This is a very ==important== answer.
***
This is multi-cloze ==question== and ==answer==. #multicloze

#Q

Information

Complex card information

Complex card information

Complex card information

Answer:
==The answer.==

#/Q
```

# 评论

完成文档后，点击侧边栏中的卡片图标开始评论。

<img width="174" alt="屏幕快照 2022-11-15 的 12 59 37 下午" src="https://user-images.githubusercontent.com/16589958/201830351-1f2959d7-3610-4fc1-b0e5-1f031de25ee4.png">

它由三个部分组成。新内容、评论和学习。

<img width="660" alt="Screenshot 2023-06-13 at 11 52 37 AM" src="https://github.com/linanwx/aosr/assets/16589958/572181c7-70e6-4f0a-9db0-2b0c31dd5819">

新内容表示尚未进行评论的新内容。

评论表示需要进行评论的内容。

巩固学习表示需要巩固一些概念。

一旦点击其中一个按钮，评论就开始了。请按照屏幕上的按钮和说明进行评论。

<img width="914" alt="Screenshot 2023-06-13 at 12 09 46 PM" src="https://github.com/linanwx/aosr/assets/16589958/4ce6a725-51c4-46bc-8f13-cd3e7bc216ee">

Aosr 在“Deck”功能中提供了一项独特的功能，允许用户以高度可定制的方式管理他们的闪卡。该功能旨在满足用户的多样化需求，提供了闪卡组织和复习方式的灵活性。

背景

用户在管理他们的闪卡时有不同的偏好。有些人可能更喜欢通过目录来组织他们的卡片，而其他人可能觉得通过标签来管理更方便。为了认识到这一点，Aosr 不会强制使用预设的卡组系统。相反，它赋予用户定义自己的规则来管理他们的卡组的权力。

### Deck 的工作原理

Aosr 中的 Deck 功能利用了由“json-rules-engine”提供支持的基于规则的系统。这使用户可以根据自定义规则定义他们的 Deck 内容。这些规则可以自由定义，以定制 Deck 中的卡片的包含方式。

### 规则示例

以下是一些定义卡组规则的示例：

1. **包含特定路径的卡牌：** 将以下代码中的关键词替换为您想要的关键词。卡组将包含指定路径下的卡牌。

`````
```aosr-deck-config
{
	"rule": {
		"conditions": {
			"all": [{
				"fact": "card",
				"operator": "regexMatch",
				"value": "关键词",    <--  替换为您自己的路径关键词
				"path": "$.path"
			}]
		},
		"event": {
			"type": "match"
		}
	}
}
```
`````

1. **排除路径中包含特定关键词的卡牌：** 您可以创建一个排除路径中包含特定关键词的卡牌的卡组。

`````
```aosr-deck-config
{
	"rule":{
		"conditions":{
			"not":
				{
					"fact":"card",
					"operator":"regexMatch",           
					"value":"关键词",    <-- 替换为您想要过滤的关键词
					"path":"$.path"
				}
		},
		"event":{
			"type":"match"
		}
	}
}
```
`````

1. **过滤具有特定标签的卡牌：** 您可以创建一个包含所有具有特定标签的卡牌的卡组。

`````
```aosr-deck-config
{
	"rule": {
		"conditions": {
			"all": [{
				"fact": "card",
				"operator": "contains",
				"value": "#关键词",    <-- 替换为您想要过滤的标签
				"path": "$.tags"
			}]
		},
		"event": {
			"type": "match"
		}
	}
}
```
`````

1. **在 Frontmatter 中过滤具有特定标签的文件：**

``````
```aosr-deck-config
{
	"rule": {
		"conditions": {
			"all": [{
				"fact": "file",
				"path": "$.tags",
				"operator": "regexMatch",
				"value": "数学"
			}]
		},
		"event": {
			"type": "match"
		}
	}
}
``````

这些示例应该足够满足大多数使用情况。但是，如果您需要更复杂的规则，例如包含特定路径的卡牌，这些卡牌包含某些标签但不包含其他标签，您可能需要编写更复杂的规则。有关编写规则的更多信息，请参阅 [json-rules-engine 文档](https://github.com/CacheControl/json-rules-engine)。此外，您可能需要参考以下模式的事实：

```
interface FactPattern {
	card: {
		path: string
		tags: string[]
		text: string
	}
	file: {
		tags: string[] // 来自 frontmatter
	}
}
```

在你的笔记中使用 Aosr 的 Deck 功能，你可以直接编写自己的 Deck 规则。这样可以让你只在笔记中复习选定的卡片，提供个性化的复习体验。

要使用这些示例，只需将代码复制粘贴到你的 Obsidian 笔记中。如果你已经安装了 Aosr 插件，它会自动识别 `aosr-deck-config` 代码块，并将其转换为可供复习的 Deck。

如果代码块没有自动转换为复习卡片，请确保你的光标不在代码块内。另外，如果出现任何错误提示，请检查规则是否符合正确的 JSON 格式。任何格式错误都会阻止正确转换为复习界面。一旦正确转换，你应该会看到一个类似于在侧边栏点击按钮时生成的界面。这个界面还将包含你需要的复习内容。

<img width="898" alt="截屏2023-07-23 15 02 45" src="https://github.com/linanwx/aosr/assets/16589958/b05aecc8-51f6-40d0-98bc-f07a7ada6221">

# 注释

请注意文档中生成的注释的存在。这是正常的情况，对于插件的功能而言是必不可少的，因为它需要这些数据来计算审阅时间。

<img width="713" alt="Screenshot 2023-06-13 at 12 11 48 PM" src="https://github.com/linanwx/aosr/assets/16589958/624e627e-fa10-4234-8446-fc139b51d355">

我承认这些注释的外观可能不太美观，可能会破坏文档的格式。然而，目前这种安排足以满足我的日常使用。未来我可能会找到解决这个问题的方法。

这些注释将自动附加到文档的末尾。此外，如果需要，它们的位置可以在同一文档中进行调整。

# 使用 Dataview 插件

通过安装 Dataview 插件，您可以查看有关您的审查进度的信息。

<img width="839" alt="截屏2023-07-23 14 17 48" src="https://github.com/linanwx/aosr/assets/16589958/fbc09bf0-aa37-43ed-a5e4-174d1920d6b2">

您可以使用代码 `let patterns = await app.plugins.plugins.aosr.api.getAllPattern();` 获取完整的审查数据。然后，您可以编写 Dataview 代码来显示数据。下面是一个供您复制和运行的示例。

请注意，您需要在 Dataview 中启用相应的选项才能使用 `dataviewjs`！

`````
```dataviewjs
let patterns = await app.plugins.plugins.aosr.api.getAllPattern();

let today = new Date();
today.setHours(0, 0, 0, 0);

let futureLimit = new Date();
futureLimit.setDate(today.getDate() + 15); // 将未来限制设置为从今天起的15天。

let reviewCountsByDate = {};

patterns.forEach(pattern => {
    let nextReviewDate = new Date(pattern.schedule.Next);

    if (nextReviewDate < today) {
        nextReviewDate = today;
    }

    if (nextReviewDate <= futureLimit) {
        nextReviewDate.setHours(0, 0, 0, 0);
        let dateStr = nextReviewDate.toISOString().split('T')[0];
        if (!reviewCountsByDate[dateStr]) {
            reviewCountsByDate[dateStr] = 0;
        }
        reviewCountsByDate[dateStr]++;
    }
});

let tableData = Object.entries(reviewCountsByDate)
    .map(([date, count]) => [date, count])
    .sort((a, b) => new Date(a[0]) - new Date(b[0])); // 按日期排序

dv.header(3, "总审查数量");
dv.table(["数量"], [[patterns.length]])

dv.header(3, "未来所需每日审查数量");
dv.table(["日期", "审查数量"], tableData);


let difficultPatterns = patterns
    .map(pattern => [pattern.TagID.substring(1), pattern.schedule.Ease])
    .sort((a, b) => a[1] - b[1]) // 按Ease排序
    .slice(0, 10); // 只取前10个
dv.header(3, "在审查方面最困难的内容")

dv.table(["TagID", "Ease"], difficultPatterns);
```
`````

> 双冒号 (::) 审查格式与 Dataview 的元数据格式之间存在冲突。可能需要引入一种新的格式来替代双冒号审查格式。

什么是不同之处？

Aosr 和 obsidian-spaced-repetition 之间有什么区别？

- 复习时间以分钟为单位计算，而不是以天为单位。这有助于更准确地计算复习时间。而且，在跨越一天的零点进行复习时，计算也会更准确。例如，在晚上 23:59 和 00:01，复习时间不会粗暴地计算为前一天和后一天。
- 复习界面现在将打开一个标准页面，而不是一个弹出窗口。在标准页面下，您可以同时进行许多 obsidian 活动，例如，您可以同时复习和评论文档。在弹出模式下，此模式会阻碍进一步操作。
- 优化了复习过程。现在添加了一个学习过程，用于学习上次标记为遗忘的项目。
- 重新设计了格式。新的格式对一些细微的更改有所贡献。例如，填空不再会因为添加新的填空而被打乱。此外，新的复习格式也应该更容易开发和扩展。

然而，一些核心功能，如查看复习数据统计，目前还不可用。我会根据我的空闲时间来改进这个功能。

# 注意事项

- 请不要在同一文件中创建相同模式的相同内容，因为当前的实现依赖于唯一字符串匹配，创建重复模式将导致异常并阻止审核。
- 目前，开发和测试仅在关闭“严格换行符”模式下进行。尚未测试开启该模式，因此建议关闭该模式。

# 许可证

- MIT [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

```
react (MIT)   https://github.com/facebook/react
YAML (ISC)    https://github.com/eemeli/yaml
MUI (MIT)     https://github.com/mui/material-ui
```