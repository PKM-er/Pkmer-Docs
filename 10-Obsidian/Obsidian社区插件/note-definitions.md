---
uid: 20240611085920
title: Obsidian 插件：Note Definitions
tags: ['编辑工具', '文字处理', '自定义命令', 'obsidian插件']
description: 打造笔记的个人词典
author: jenemy
type: auto
draft: false
editable: false
modified: 20240614220057
---

# Obsidian 插件：Note Definitions

> [!Note] 插件名片
> - 插件名称：Note Definitions
> - 插件作者：Dominic Let
> - 插件说明：打造笔记的个人词典
> - 插件分类：[' 编辑工具 ', ' 文字处理 ', ' 自定义命令 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/dominiclet/obsidian-note-definitions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-definitions)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dominiclet/obsidian-note-definitions/master/README.md)

![Note Definitions](https://cdn.pkmer.cn/covers/note-definitions.png!pkmer)

## 概述

Obsidian Note Definitions 是一个个人词典插件，可以在笔记中方便地查找。只需在 Obsidian vault 的根目录下创建一个名为 `definitions` 的文件夹，然后在其中创建定义文件，并按照定义规则添加定义。一旦定义注册成功，笔记中的单词将被下划线标记，右键单击单词或使用命令即可触发下拉菜单显示单词的定义。此外，还可以通过编辑器菜单和命令来预览或跳转到单词的定义。插件使用 Markdown 语法解析定义文件，需要遵循严格的规则，包括单词、别名（可选）和定义的顺序，以及使用三个破折号作为分隔符。插件可以帮助用户快速查找笔记中的单词定义，提高阅读效率。

本篇文章向大家推荐一款新上架的小插件：[dominiclet/obsidian-note-definitions](https://github.com/dominiclet/obsidian-note-definitions)，目前版本：0.9.1。

这个插件的主要作用就是为特定的文字，比如专业术语，英文单词简写等提供一个浮框来显示其定义或者解释文字。

其实还有另外一款类似的插件 [vschroeter/obsidian-glossary](https://github.com/vschroeter/obsidian-glossary)，它是其于文件来定义术语。两者相比较，我们要介绍地这个插件它可以在单个文件中定义多个术语，所以极力推荐使用。

这个看似简单的功能，我们能玩出什么花样呢？其有哪此应用场景，相信读者看完本文后会发现本地 Obsidian 插件库又多了一员小将。

## 如何使用

插件的安装很简单，去 Obsidian 插件市场搜索关键词就可以了。

这个插件的配置选项就 2 项：

![Pasted image 20240612185528](https://cdn.pkmer.cn/images/202406142158595.png!pkmer)

在根目录定义一个放置术语的文件夹，然后在这里填写上就可以了。这个插件目前作者还在持续更新中，我这里有点意外地是这个目录不能像其它插件那样自动给出一个目录列表供选择，而是手动输入，希望作者能改进一下。

这个插件的使用也非常简单，下面我在 `术语/Obsidian 插件.md` 中定义两个插件描述信息：

````
# Obsidian II Quicker

*Obsidian-II-Quicker*

The main feature of this plugin is to quickly insert common Markdown code and HTML code, including Sup, Sub, Audio, Video, Iframe, Left-Center-Right Alignment, Variables, Footnotes, Callout, Anchor Points, HTML Comments and so on.

---

# Obsidian Note Definitions

*Note Definitions*

A personal dictionary that can be easily looked-up from within your notes.
````

其中一级标题用于定义术语，紧跟标题后的加粗部分表示术语的别名，然后就是描述信息了，多个术语之前使用 `---` 水平线进行分隔，是不是很简洁，下面看一下实际效果：

![动画2 54](https://cdn.pkmer.cn/images/202406142158596.gif!pkmer)

## 应用举例

下面我们来看一下这一小小地插件能给我们带哪些不一样的笔记体验。

### 示例一：为插件名称添加描述信息

这一个案例是结合作者写作 Obsidian 相关插件教程而定制的，把这些插件的名称和简单的介绍信息放置在 `术语/Obsidian 插件.md` 文件中，然后我们再结合 Templater 插件来将插件名作为选项，减少输入内容（哈哈，能偷懒就不必要苦干），如果插件有别名设置，我们进一步弹出一个 PROMPT 框让用户确认。

在定义插件时统一使用命名，并且单词首字母大写，别名通常省略掉 `Obsidian` 前缀和 `Plugin` 后缀。

例如：

- `Templater-Obsidian-Plugin` -> `Templater`
- `Obsidian-Text-expand` -> `Text Expand`
- `Obsidian-II-Quicker` -> `II Quicker`
- `Obsidian-Note-Definitions` -> `Note Definitions`

下面是具体实现参考：

````
%% 模板/插入插件名称.md %%

<%-*
const definitionFile = "术语/Obsidian 插件.md"
const tfile = tp.file.find_tfile(definitionFile)
const content = await app.vault.read(tfile)
const lines = content.split('\n')
const { headings, sections } = app.metadataCache.getFileCache(tfile)
// [标题，行数]
const pluginNames = []
const pluginAliases = []
headings.filter(h => h && h.level === 1)
   .forEach(h => {
        pluginNames.push([h.heading.trim(), h.position.start.line])
    })
const selectedHeading = await tp.system.suggester(name => name[0], pluginNames)
const aliasReg = /(?<=\*)(.+?)(?=\*)/g
const aliases = lines[selectedHeading[1] + 2]
let result
if (aliasReg.test(aliases)) {
    const ok = tp.system.prompt('使用别名？', aliases.match(aliasReg)[0])
    if (ok) {
        result = aliases.match(aliasReg)[0]
    } else {
        result = selectedHeading[0]
    }
} else {
    result = selectedHeading[0]
}
-%>

<%- result -%>
````

结果：

![动画2 55](https://cdn.pkmer.cn/images/202406142158597.gif!pkmer)

### 示例二：英文学习单词注解

这个插件启发了我，让我想到了在看书学习英文地时候，面对陌生地单词我们我习惯性在单词空白处写上对应的中文意思。而电子书时代我们会使用批注，通常左边正文内容，右边生僻单词注解。有了这个插件我们在通过 Obsidian 学习英文，摘录文章时，可以优雅地处理词汇问题。当然作者目前没有去研究英文学习相关的插件，这里只是借助这个插件所能联想到的应用场景。

下面是网上摘抄的一段英文，选择了 2 个单词将其定义在了 `术语/英文单词.md` 中，定义就不展示了。

````
But science does provide us with the best available guide to the future, and it is critical that our nation and the world base important policies on the best judgments that science can provide concerning the future consequences of present actions.
````

效果如下：

![动画2 56](https://cdn.pkmer.cn/images/202406142158598.gif!pkmer)

从上面的 GIF 图片来看效果还是挺不错的。

## 总结

这个插件很有用，但是也有些注意事项:

1. 英文前后需要添加空格，但是在中文 `。` 后面的英文内容添加空格又显得太宽，不加不生效。
2. 不支持多个别名设置，且别名设置所在行前不能有空白内容。

读者可以定义一个 `Templater` 的词条来测试下面的内容：

````
中文语句后。Templater 前没有空格。❌
中文语句后。 Templater 前没有空格。✔

中文括号（Templater）❌
中文括号（ Templater ）✔

插件：Templater ❌
插件： Templater ✔
插件:Templater ✔
插件 Templater。❌
插件 Templater 。✔

乔布斯那句话是怎么说的？「Templater」❌
乔布斯那句话是怎么说的？「 Templater 」✔
````

同时作者也提了一个 [ISSUE](https://github.com/dominiclet/obsidian-note-definitions/issues/38) 给插件仓库，希望能更好地支持中英文混合排版的场景。

## 参考

- [dominiclet/obsidian-note-definitions (github.com)](https://github.com/dominiclet/obsidian-note-definitions)
- [Obs159｜Obsidian術語詞彙整合－Note Definitions外掛 – 簡睿隨筆 (jdev.tw)](https://jdev.tw/blog/8450/obsidian-definitions-plugin)
- [中英混排中的标点符号问题 | Hutrua Space](https://www.hutrua.com/blog/2018/07/22/punctuation.html)
- [mzlogin/chinese-copywriting-guidelines: Chinese Copywriting Guidelines：中文文案排版指北（简体中文版） (github.com)](https://github.com/mzlogin/chinese-copywriting-guidelines)





