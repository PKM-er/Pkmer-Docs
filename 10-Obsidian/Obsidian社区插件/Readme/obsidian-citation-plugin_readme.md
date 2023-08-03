---
uid: 2023080322155591
title: Obsidian 插件：【Readme】Citations
tags: ['编辑工具', '第三方工具集成', '链接处理', 'obsidian插件', 'readme']
description: 将你的学术资料 在 Obsidian 中使用，如自动从Zotero库中搜索和插入引文。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Citations

> [!Note] 插件名片
> - 插件名称：Citations
> - 插件作者：Jon Gauthier
> - 插件说明：将你的学术资料 在 Obsidian 中使用，如自动从Zotero库中搜索和插入引文。
> - 插件分类：['编辑工具', '第三方工具集成', '链接处理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/hans/obsidian-citation-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-citation-plugin)

## 概述

将你的学术资料 在 Obsidian 中使用，如自动从Zotero库中搜索和插入引文。

![Citations](https://cdn.pkmer.cn/covers/obsidian-citation-plugin.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hans/obsidian-citation-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-citation-plugin]] 插件的自述翻译


# obsidian-citation-plugin

这个插件为[Obsidian](https://obsidian.md)将你的学术参考文献管理器与Obsidian编辑体验整合在一起。

![](screenshot.png)

该插件支持读取[BibTeX / BibLaTeX `.bib`格式][4]和[CSL-JSON格式][1]的参考文献。

## 设置

您可以通过Obsidian的“第三方插件接口”安装此插件。它需要Obsidian 0.9.20或更高版本。

安装完插件后，您需要提供一个参考文献文件：

- 如果您使用**Zotero**与[Better BibTeX][2]：
  - 在Zotero的左侧边栏中选择要导出的集合。
  - 点击`文件` -> `导出库...`。选择`Better BibLaTeX`或`Better CSL JSON`作为格式。（我们建议使用BibLaTeX导出，除非您遇到性能问题。BibLaTeX格式包含更多信息，您可以从Obsidian中引用，例如关联的PDF附件，但加载速度比JSON导出慢。）
  - 您可以选择“保持更新”以自动重新导出集合-这是推荐的！
- 如果您使用其他参考管理器，请查阅其文档以了解BibLaTeX或CSL-JSON导出支持。我们计划在将来正式支持其他管理器。

现在打开Obsidian首选项并查看“引用”选项卡。将导出文件的路径（根据您选择的格式为`.bib`或`.json`）粘贴到标有“引用导出路径”的文本字段中。关闭设置对话框后，您现在应该能够在Obsidian中搜索您的参考文献了！

## 用法

该插件目前提供了四个简单的功能：

1. **打开文献笔记** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>)：自动创建或打开一个特定参考文献的文献笔记。可以在插件设置中配置笔记的标题、文件夹和初始内容。
2. **插入文献笔记引用** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>)：插入指向特定参考文献的文献笔记链接。
3. **在当前窗格中插入文献笔记内容** (默认没有快捷键)：将描述特定参考文献的内容插入当前窗格。（这对于更新已有的文献笔记但缺少参考信息的情况很有用。）
4. **插入Markdown引用** (默认没有快捷键)：插入特定参考文献的[Pandoc风格引用][3]。（可以在插件设置中配置引用的确切格式。）

### 模板
您可以为文献笔记的标题和内容设置自己的模板。可以使用以下变量：

```
* {{citekey}}
* {{abstract}}
* {{authorString}}
* {{containerTitle}}
* {{DOI}}
* {{eprint}}
* {{eprinttype}}
* {{eventPlace}}
* {{page}}
* {{publisher}}
* {{publisherPlace}}
* {{title}}
* {{titleShort}}
* {{URL}}
* {{year}}
* {{zoteroSelectURI}}
```
例如，您的文献笔记标题模板可以简单地为`@{{citekey}}`，内容模板可以如下所示：
```
---
title: {{title}}
authors: {{authorString}}
year: {{year}}
---
{{abstract}}
```

MIT许可证。

## 贡献者

- Jon Gauthier ([hans](https://github.com/hans))
- [raineszm](https://github.com/raineszm)
- [Luke Murray](https://lukesmurray.com/)
- [valmaev](https://github.com/valmaev)

[1]: https://github.com/citation-style-language/schema#csl-json-schema
[2]: https://retorque.re/zotero-better-bibtex/
[3]: https://pandoc.org/MANUAL.html#extension-citations
[4]: http://www.bibtex.org/



