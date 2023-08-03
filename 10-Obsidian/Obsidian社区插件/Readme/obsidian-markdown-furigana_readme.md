---
uid: 20230803204307
title: Obsidian 插件：【Readme】Markdown Furigana
tags: ['图表生成', '日语相关', 'obsidian插件', 'readme']
description: Obsidian的简单Markdown到ふりがな渲染插件。
author: Steven Kraft
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Markdown Furigana

> [!Note] 插件名片
> - 插件名称：Markdown Furigana
> - 插件作者：Steven Kraft
> - 插件说明：Obsidian的简单Markdown到ふりがな渲染插件。
> - 插件分类：['图表生成', '日语相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/steven-kraft/obsidian-markdown-furigana)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-markdown-furigana)

## 概述

Obsidian的简单Markdown到ふりがな渲染插件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/steven-kraft/obsidian-markdown-furigana/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-markdown-furigana]] 插件的自述翻译


## Markdown Furigana 插件（Obsidian）

这是一个简单的 Markdown 到 Furigana 渲染插件，用于在 Obsidian（https://obsidian.md）中显示带有 [Furigana](https://en.wikipedia.org/wiki/Furigana) 的日文文本。

**从 1.2.0 版本开始，该插件不再限于日文文本**

基于 [markdown-it-ruby](https://github.com/lostandfound/markdown-it-ruby) 语法。所有渲染都是在预览时进行的后处理，因此不会修改您的笔记。

### 示例

Markdown|处理为|显示为
---|---|---
{漢字\|かんじ}|`<ruby>漢字<rt>かんじ</rt></ruby>`|<ruby>漢字<rt>かんじ</rt></ruby>
{漢字\|かん\|じ}|`<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>`|<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>
{北京\|ㄅㄟˇ\|ㄐㄧㄥ}|`<ruby>北<rt>ㄅㄟˇ</rt>京<rt>ㄐㄧㄥ</rt></ruby>`|<ruby>北<rt>ㄅㄟˇ</rt>京<rt>ㄐㄧㄥ</rt></ruby>
{北京\|Běi\|jīng}|`<ruby>北<rt>Běi</rt>京<rt>jīng</rt></ruby>`|<ruby>北<rt>Běi</rt>京<rt>jīng</rt></ruby>
{韓國\|한\|국}|`<ruby>韓<rt>한</rt>國<rt>국</rt></ruby>`|<ruby>韓<rt>한</rt>國<rt>국</rt></ruby>

### 附加信息

该插件期望第一部分为汉字或假名，而振仮名部分应为平假名或片假名。如果有多个振仮名部分，则必须与第一部分的字符数相同。振仮名部分也可以为空。

### 参见

如果您更喜欢在笔记中直接使用ruby语法，请同时查看[Obsidian Furigana](https://github.com/uonr/obsidian-furigana)插件。



