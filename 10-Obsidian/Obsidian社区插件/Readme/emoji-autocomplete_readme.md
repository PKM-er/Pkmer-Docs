---
uid: 2024022117273731
title: Obsidian 插件：【Readme】Emoji Autocomplete
tags: ['obsidian插件', 'readme']
description: 'Smart suggestions when typing emoji shortcodes & more! :star:'
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Emoji Autocomplete

> [!Note] 插件名片
> - 插件名称：Emoji Autocomplete
> - 插件作者：KraXen72
> - 插件说明：Smart suggestions when typing emoji shortcodes & more! :star:
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/KraXen72/obsidian-emoji-autocomplete)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emoji-autocomplete)

## 概述

Smart suggestions when typing emoji shortcodes & more! :star:



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/KraXen72/obsidian-emoji-autocomplete/master/README.md)
> 

---

## Readme(翻译）

下面是 [[emoji-autocomplete]] 插件的自述翻译



# 黑曜石表情符号自动完成

<!-- ![GitHub all releases](https://img.shields.io/github/downloads/phibr0/obsidian-emoji-shortcodes/total) -->

> 通过它们的[短代码](https://emojibase.dev/shortcodes/)轻松插入表情符号
## 特点
- 为表情符号提供**自动完成/提示**功能
- 高亮显示建议的**匹配部分**（可选）
- 在建议中考虑**表情符号历史记录**（可选）
- 支持通过**表情符号标签**进行搜索（可选）
  - 输入`shuffle`将找到🔀（twisted_rightwards_arrow）
  - 当通过标签找到表情符号时，内联显示原始的简码（可选）
- **隐藏不受操作系统支持的表情符号**（可选）
- **立即替换表情符号** / 保留为简码并在预览模式中显示
- 在搜索表情符号时**去除变音符号**（可选）
- 用更好看的字体**替换国旗表情符号**（可选）
- 使用[gemoji](https://github.com/wooorm/gemoji)库始终具有最新的表情符号列表
- 使用[uFuzzy](https://github.com/leeoniya/uFuzzy)库和[自定义排序算法](https://github.com/KraXen72/obsidian-emoji-autocomplete/blob/master/src/main.ts#L148)以获得更好的模糊搜索建议

**示例**

<p>
    <img height="300" src="https://github.com/KraXen72/obsidian-emoji-autocomplete/assets/21956756/7408384f-2f5e-4edb-8db3-fcfdc685e139">
	<!-- <img width="500" align="right" src="https://user-images.githubusercontent.com/59741989/129605183-1295bfbb-760d-4b45-bf94-452f38f2b54c.gif"> -->
</p>

- `:joy:`将变成😂
- `:heart:`将保持为:heart:
## 免责声明
- **此插件与[Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes)（这是一个完整的替代品）和[Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes)不兼容**
## 如何安装
1. 进入您的[Obsidian](https://www.obsidian.md)设置中的**Community Plugins**，并**禁用**安全模式
2. 点击**浏览**，搜索“Emoji Autocomplete”
3. 点击安装
4. 在**Community Plugins**选项卡中切换插件打开
## 如何安装（来自源代码）

目前，该插件尚未发布到 Obsidian 插件商店。
您可以按照以下说明构建它：
1. 将其 `git clone` 到 `<your vault>/.obsidian/plugins`
2. 运行 `npm i` 或 `pnpm i`（最佳）
3. 运行 `npm run dev` 或 `pnpm dev`（最佳）
4. 在 Obsidian 中启用插件
## 支持插件开发
如果您发现这个插件有帮助，请考虑进一步的开发，或者只是说一句小小的感谢。
#### 支持 KraXen72
Emoji自动补全功能的创建者，以及所有基于Emoji短代码的功能

[![liberapay](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/KraXen72) [![kofi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/kraxen72)
#### 支持phibr0
[Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes)的创作者，插件Emoji Autocomplete最初是基于此创建的  

[![kofi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/phibr0)
## 鸣谢
使用但已修改或以其他方式嵌入的库/包（不在package.json中）
- `is-emoji-supported` 使用 `willReadFrequently: true` 和自定义缓存处理修改了canvas
- `country-flag-emoji-polyfill` 使用了字体并编写了自定义应用逻辑
- `lucide` 图标包和 `icones.js.org` 提供了一些漂亮的svg图标



