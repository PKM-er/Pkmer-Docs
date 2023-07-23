---
uid: 20230618095446
title: 文科生工作流 -zotero 配置
tags: [文科生, 个人知识管理, zotero, 配置]
description: 文科生工作流 -zotero 配置
author: 二宝学长
type: other
draft: false
editable: false
modified: 20230618103401
---

# 文科生工作流 -zotero 配置

## 必看说明

这次我们用到的软件是 zotero6 及其插件。

Zotero6 下载地址：<https://www.zotero.org/>

插件需要：

1. better bibtex for zotero:<https://retorque.re/zotero-better-bibtex>
2. Jasminum:<https://github.com/l0o0/jasminum>
3. Zotfile:<https://github.com/jlegewie/zotfile>

## 为什么需要下载这些？

- 理由一：zotero 是一款免费、非常容易上手使用、全平台的文献管理工具，可以帮助你存放各类文献元数据，方便你引用，另外 zotero 也拥有非常丰富的插件系统，这意味着上限很高，对比其他商业文献管理软件，没有商业套路和丰富的插件是我选择它的重要理由；
- 理由二：
  - 扮演老大哥的是 better bibex，它能帮助 zotero 生成 pandoc 可识别的 citation key，方便我们快速引用文献，而 citation key 的定位和作用将在下面重点介绍；
  - 茉莉花插件是获取中文文献的辅助插件，例如对知网的支持（zotero 毕竟是国外软件，本土不服，然后国人就开发了这个插件），该插件还需要搭配 zotero 的浏览器 [插件](https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc) 一起使用；
  - zotfile 是搭配茉莉花和浏览器插件安装一定规则改名的插件，可以帮助按照一定的格式生成统一的文件名。

## 配置参考和说明

1. zotero 的插件及其使用教程：<https://space.bilibili.com/390369526/channel/collectiondetail?sid=1049321&ctype=0>

   （视频可以更直观的展现，我个人就没必要采用文字的形式再啰嗦一遍）

2. 这里要重点说下 better bib 和 zotfile

### better bib

这个插件最重要的功能就是帮我们生成每篇文献的唯一 citation key，这个 citation key 可以被 pandoc 识别，这意味着不仅可以调用它表示引用文献，而且还可以生成指定文献的参考文献引用样式（citation style language[^1]），也就是你调用 citation key 本身意味着调用了这个 citation key 对应文献的所有数据，并且可以由 zotero 等不同途径帮你管理参考文献。

citation key 的生成样式可以自定义，生成语法规则比如 `auth.lower + shorttitle(3,3) + year`，`auth.lower + year` 等等，具体在 [这里](https://retorque.re/zotero-better-bibtex/citing/#functions)。

我自用的样式是”auth(0,1)+year“，表示作者全称小写 + 文献发表年份，例如 xuedanni2022，表示薛丹妮 2022 年发表的一篇文献；如果出现同一作者在同一年份发表了多篇论文，则会自动生成 xuedanni2022a,xuedanni2022b 的样式，具体的样式更改在插件设置的 Citation key formula 里，可以上面提供的手把手教程。

现在我们想在 Markdown 中插入参考文献，直接调用 citation key 就行（调用的方式很多，Mac 推荐用 Alfred【也许你还说其他的类似同类软件，但是我自用体验下来，它们都没有 Alfred 调用来的便捷】，Windows 推荐用 quicker，当然如果笔记软件里也有很多联动插件方便你调用，例如 obsidian 里的 citation 就支持，推荐的这两款软件都是效率神器，它们做的只是中介途径，不局限在任何软件，也就是只要你想要调用 zotero 里的 citation key 就可以用这俩软件帮你调用，而且在效率和体验上远比 zotero 自带的调用框好 [^2]）

- 单条目引用方式：[@citekey]，例如**这世界有那么多人 [@weilaijianshi2017]**
- 多条目引用方式：[@citekey1;@citekey2]，例如**这世界有那么多人 [@yangzhao2022; @weilaijianshi2017]**
- 略去作者的引用方式：[-@citekey]，例如这世界有那么多人 [@yangzhao2022]，可以生成的样式有这世界有那么多人（杨照，2022），但是用了 [-@citekey] 后，（杨照，2022）在实际的生产过程中就没了。
- 句中引用方式：@citekey，不加括号，例如 xxx（2020）认为，==如果使用这种引用方式，@前面一定要记得有一个空格
- 如果是著者 - 出版年的样式，在句中引用时，引用同一作者不同年份的文献需要这样写：`@yangzhao2022 [@yangzhao2022]`
- 如果要引用的是书籍页码，则引用代码为：[@makesi2009e, p. 233]，注意要用英文的逗号和句号，并且句号和页码之间有一个空格，这里的例子表示我引用了马恩文集第五卷的第 233 页

[1]: 中文 citation style language 及其 DIY：<https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl> 和 <https://editor.citationstyles.org/searchByName/>

[2]: Alfred 和 quicker 都需要付费，但是这俩会很超值，Alfred 用到的 workflow 主要由德国程序员 pseudometa chrisgrieser 大佬开发，包括调用 zotero 文献的 [bibetex-citation-picker](https://github.com/chrisgrieser/alfred-bibtex-citation-picker) 和 [annotation extractor](https://github.com/chrisgrieser/pdf-annotation-extractor-alfred)，quicker 的话 [快速插入引用](https://getquicker.net/Sharedaction?code=2b761521-8216-4442-3bdc-08d95984e346)，[批注](https://getquicker.net/Sharedaction?code=f1cc5785-c68f-4bee-4729-08da2019a39f) 其他场景可以自己在 [官网](https://getquicker.net/) 搜索。

![微信图片_20230618095250.png|685](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230618095250.png!pkmer)

### zotfile

Zotfile 是一个 Zotero 插件，用于管理你的附件：自动重命名，移动，并附加 PDF（或其他文件）到 Zotero 项目，同步 PDF 从您的 Zotero 库到您的（移动的）PDF 阅读器（例如，PDF 阅读器）。iPad、Android 平板电脑等）并从 PDF 文件中提取注释。

![微信图片_20230618095247.png|604](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230618095247.png!pkmer)

好吧可能其他人是用它同步文件，我就把它拿来管理文件名=-=

这里重点介绍改名的用法

ZotFile 根据当前选择的 Zotero 项目的书目信息重命名文件。您可以在 zotfile 首选项窗口的重命名规则下更改重命名规则（ZotteroActions-> ZotFile 首选项）。“重命名格式”选项允许您使用通配符创建自定义的重命名规则，通配符将被所选 Zotero 项目的元数据替换。Zotfile 还支持可选和独占通配符。可选通配符意味着 `{-%y}` 只包含分隔符 - 如果定义了 `%y` ，则在文件名中。排他通配符（如 `%s|%j` ）将生成 `%s` 的条目（如果存在），否则生成 `%j` 的条目。通配符和条形之间的其他字符将被忽略（ `%s | stuff %j | - more %p` 等同于 `%s|%j|%p` ）。详细规则在 [这里](http://zotfile.com/#renaming-rules)

![微信图片_20230618095244.png|460](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230618095244.png!pkmer)

为啥我只用改名，因为搭配 Alfred 的 annotation 工作流，自动抓取文件名从而生成高亮笔记到 obsidian=-=

这里还是分享我的自用配置 `{%b}{_%t}` 表示重新命名文件的规则为【citation key——文献标题】，例如**wangdefeng2005_ 论马克思的资本批判的原则高度**，实际效果一清二楚。

## 我的整个工作流展示和专栏写作计划

[工作流展示](https://www.bilibili.com/video/BV1sa4y1g71R/?spm_id_from=333.999.0.0)

写作计划：（挖坑，暂定）

1. 工作流的理论部分（已经完成，见 [这里](https://pkmer.cn/Pkmer-Docs/30-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%BA%94%E7%94%A8/%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6/%E6%96%87%E7%A7%91%E7%94%9F%E7%9A%84%E5%AD%A6%E6%9C%AF%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E4%BD%9C%E6%B5%81-%E4%B8%8A%E7%AF%87/)）
2. zotero 适配的主要配置和原理介绍（本篇）
3. 文科生需要知晓的 pandoc 的用法和及其模板分享
4. Obsidian 和 Zotero 的联动
5. Obsidian 的学术写作配置分享：在 Obsidian 里完成你的论文
6. 整合 GPT 辅助学术研究：AI 不仅能帮你翻译、头脑风暴、整合素材，还能帮你写论文，会在这篇分享自用的 prompt。















