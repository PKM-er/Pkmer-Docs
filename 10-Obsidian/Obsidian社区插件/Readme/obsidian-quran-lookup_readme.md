---
uid: 2023080322253082
title: Obsidian 插件：【Readme】Quran Lookup
tags: ['obsidian插件', 'readme']
description: 使用这个文本替换插件，轻松在Obsidian中添加古兰经经文和翻译。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quran Lookup

> [!Note] 插件名片
> - 插件名称：Quran Lookup
> - 插件作者：Abu Ibrahim
> - 插件说明：使用这个文本替换插件，轻松在 Obsidian 中添加古兰经经文和翻译。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/abuibrahim2/quranlookup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-quran-lookup)

## 概述

使用这个文本替换插件，轻松在 Obsidian 中添加古兰经经文和翻译。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/abuibrahim2/quranlookup/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-quran-lookup]] 插件的自述翻译

## 以真主的名义，最仁慈的，最怜悯的

# Obsidian Quran Lookup 插件

[![CodeQL](https://github.com/abuibrahim2/quranlookup/actions/workflows/codeql.yml/badge.svg)](https://github.com/abuibrahim2/quranlookup/actions/workflows/codeql.yml)

这是一个简单的 Obsidian 实用工具/文本替换插件，根据 surah:verse(s) 的简写形式填充古兰经的阿亚特（经文）。它使用“当前编辑器选择命令”的功能来用查找结果替换所选文本。

它根据 `Surah-Number:Ayah-Number` 或 `Surah-Name:Ayah-Number` 语法进行查找。对于 Surah-Name 的查找，它使用 Fuse.js 进行“模糊搜索”，因为它是英文音译。它将该语法替换为显示经文 + 阿亚名称、阿拉伯语和英语的 Obsidian call-out。

## 如何使用

1. 在 Obsidian.md 中打开一个笔记
2. 在笔记中，按照下面的示例输入 `surah:verse`
3. 选择最近输入的文本
4. 在命令面板中（cmd+P 或 ctrl+P），选择“检索阿亚特”命令
5. 或者，您可以为该命令分配一个快捷键（如 cmd+shift+k）

## 示例

- 单个句子查询
  - `112:1`

![obsidian quran lookup single](/docs/quran-lookup-single.gif?raw=true)

- 多个句子范围
  - `56:24-26`

![obsidian quran lookup range](/docs/quran-lookup-range.gif?raw=true)

- 模糊搜索章节标题
  - `Zumar:3-5`
  - `Zomar:3`
  - `Zumaar:6`
- 连接在一起的单行（用空格分隔）
  - `Zumar:12 6:10-11 7:3-4 Maryam:12 1:3`

![obsidian quran lookup range](/docs/quran-lookup-chained.gif?raw=true)

## 设置

该插件有一些小的自定义选项：在 `Community Plugins > Installed Plugins > QuranLookup (Options)` 中。

![obsidian quran lookup settings](/docs/settings.png?raw=true)

### 翻译类型

- 您可以根据 [API语言选择](http://api.alquran.cloud/v1/edition/language/en) 选择多种英文翻译类型：

  | 选项 | 翻译者 |
  | ------------| ---------|
  | en.ahmedali | 艾哈迈德·阿里|
  | en.ahmedraza | 艾哈迈德·拉扎·汗|
  | en.arberry | A. J. 阿贝里|
  | en.asad | 穆罕默德·阿萨德|
  | en.daryabadi | 阿卜杜勒·马吉德·达里亚巴迪|
  | en.hilali | 穆罕默德·塔基·乌德丁·阿尔 - 希拉利和穆罕默德·穆辛·汗|
  | en.pickthall | 穆罕默德·马尔马杜克·威廉·皮克索尔|
  | en.qaribullah | 哈桑·法提·卡里布拉和艾哈迈德·达尔维什|
  | en.sahih | Saheeh International|
  | en.sarwar | 穆罕默德·萨尔瓦尔|
  | en.yusufali | 阿卜杜拉·尤素福·阿里|
  | en.maududi | 阿布·阿拉·莫迪迪|
  | en.shakir | 穆罕默德·哈比卜·沙基尔|
  | en.transliteration | 英文音译|
  | en.itani | Talal Itani 的清晰古兰经|

### 删除括号内容

#### ${🛑\ {\color{red}实验性}}\ 🛑\$

- 有些翻译在括号（）和方括号\[\] 中提供额外的评论和解释，以提供上下文并允许译者解释一个微妙而复杂的术语。虽然这在某些情况下很有用，但它使文本非常冗长，并且打破了读者的流畅阅读。启用切换后，此插件将删除该额外文本，使翻译简洁，就像阿拉伯语一样。
- 请参见下面的示例：

![obsidian quran remove paren](/docs/quran-lookup-remove-paren.png?raw=true)

- 注意：这是实验性的，虽然我已经尝试过测试，但它可能不是 100％都能正常工作，因此需要额外的眼睛进行 QA！

归属

《古兰经》API 和来源

《古兰经》经文来自以下来源：

- [alquran.cloud](https://alquran.cloud/api)：由 [伊斯兰网络](https://islamic.network/)（[github](https://github.com/islamic-network)）及其 [贡献者](https://alquran.cloud/contributors) 开发的开源《古兰经》API。

### 模糊搜索

模糊搜索功能是通过以下方式实现的：

- [Fuze.js](https://fusejs.io/)：一个功能强大且轻量级的模糊搜索库，无任何依赖项（[github](https://github.com/krisk/Fuse)）

如何使用

- 安装并启用插件（参见下面的 [部分](#手动安装插件)）
- 在您的笔记中选择 ayah 引用字符串
- 使用命令面板或热键应用替换命令

## 工作原理

该查找功能使用 api.alquran.cloud API 来根据章节和节号查找经文。

对于模糊名称搜索，它使用一个简单的索引文件 surahSlim.json 和 fuse.js 来找到最接近的章节名称并检索其索引号。

## 未来功能想法（登录 [项目问题](https://github.com/abuibrahim2/quranlookup/issues)）

- [ ] 添加“未找到章节”或“诗句索引超出范围”的错误通知（如果尝试使用无效字符串，则当前不执行任何操作）
- [ ] 在设置中显示译者姓名
- [ ] 切换显示诗句引用部分的方式：例如，仅显示阿拉伯语，仅显示翻译
- [ ] 阿拉伯文本的从右到左对齐
- [ ] 支持显示其他阿拉伯字体
- [ ] 添加对其他语言翻译的支持
- [ ] 允许在设置中自定义呼出样式（例如，摘要、信息、注释、成功、问题、警告、失败、危险、错误、示例、引用、自定义、无）
- [ ] 提供每次显示对话框的选项，包括预览和样式选项（类似于 Admonition 插件的“插入 Admonition”对话框）
- [ ] 添加切换使用“Admonition”样式语法而不是 obsidian 呼出样式的选项
- [ ] 在网站（如 quran.com）中提供到诗句的外部链接
- [ ] 添加“离线模式”选项，从本地保存的库中下载和检索诗句和翻译，而不是调用 API
- [ ] 添加使用搜索 API 搜索诗句的命令（在对话框中显示结果）
- [ ] 添加音频播放功能，以播放诗句
- 其他想法？... 随时 [提出建议](https://github.com/abuibrahim2/quranlookup/issues)！

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/quranlookup/` 中。
- 重新加载 Obsidian 以加载插件的新版本。
- 在设置窗口中启用插件。

如何贡献

我只是一个人，因为我想在我的笔记中加入这个功能，所以很快就把它放在一起。这仍然需要进行大量的重构和改进。

- [有关问题或功能请求](https://github.com/abuibrahim2/quranlookup/issues)
- [进行贡献](./CONTRIBUTING.md)

## 相似项目

- [Obsidian Quran Vault](https://github.com/AmmarCodes/obsidian-quran-vault)
- [Obsidian Bible Reference](https://github.com/tim-hub/obsidian-bible-reference) - 值得一提的是，我在这个自述文件中采用了他们的样式。



