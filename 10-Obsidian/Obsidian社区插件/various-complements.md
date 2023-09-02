---
uid: 20230622230954
title: Obsidian 插件：Various Complements 强大自动补全快捷输入工具
tags: [Obsidian, 插件, 自动补全, 快捷输入, 效率]
description: Obsidian 插件：Various Complements 强大自动补全快捷输入工具
author: OS
type: basic
draft: false
editable: false
modified: 20230829153026
---

# Obsidian 插件：Various Complements 强大自动补全快捷输入工具

## 概述

Various Complements 是 Obsidian 插件，提供了一些功能增强自动填充能力，可以为用户提供更好的使用体验和工作效率。

> [!Note] 插件名片
> - 插件名称：Various Complements
> - 插件版本：8.3.1
> - 插件作者：tadashi-aikawa
> - 插件描述：这个 Obsidian 插件让你能够自动完成完成单词，和自定义内容的输入。
> - 插件分类：[' 编辑工具 ', ' 效率 ', ' 中文处理 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/blob/8.3.1/manifest.json)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?various-complements)

## 效果&特性

![Various Complements](https://cdn.pkmer.cn/covers/various-complements.png!pkmer)

![image.png|190](https://cdn.pkmer.cn/images/20230623003900.png!pkmer)

## 使用

Various Complements 提供多种笔记内的补全方案，让你灵活搭配实现快速输入，提升效率的效果。

### 基于内链进行补全

- 使用内部链接提示和填充文本，不需要输入 `[[`。这意味着你可以专注于写句子，而不用担心这个词是否已经作为一个链接存在。
- 在插件设置种，启用“Enable Internal link complement”选项即可

![internal-link-complement-demo1.gif|424](https://cdn.pkmer.cn/images/internal-link-complement-demo1.gif!pkmer)

### front matter 自动补全

- 当编辑 front matter 区域时，该功能才生效，会基于键入内容提示并完成文本。
- 在插件设置种，启用“Enable Front matter complement”选项即可

![front-matter-complement-demo.gif](https://cdn.pkmer.cn/images/front-matter-complement-demo.gif!pkmer)

### 基于当前笔记自动补全

- 建议并使用当前笔记中的内容来完成输入建议。
- 在插件设置种，启用“Enable Current file complement”选项即可

![current-file-complement-demo.gif](https://cdn.pkmer.cn/images/current-file-complement-demo.gif!pkmer)

### 基于当前笔记仓库自动补全

- 建议并使用当前库中的文件中的内容来完成输入建议。
- 在插件设置种，启用“Enable Current vault complement”选项即可

![current-vault-complement-demo.gif](https://cdn.pkmer.cn/images/current-vault-complement-demo.gif!pkmer)

### 基于自定义字典自动补全

- 建议并使用当前库中设置的自定义词典内容来完成输入建议。

![custom-dictionary-complement-demo.gif|568](https://cdn.pkmer.cn/images/custom-dictionary-complement-demo.gif!pkmer)

- 设置方法
	- ⚙️ Enable Custom dictionary complement: 打开 (必须)
	- ⚙️ Custom dictionary paths: 设定自定义词典的路径，可以就在你笔记仓库内，注意这里要使用相对路径，比如 _Privates/dictionary-test.md，如图是我的自己设定的我仓库路径
	- ⚙️ Column delimiter: Pipe，设定每个建议的列分割方式
	- ⚙️Word regex pattern：我这里设置的是空
	- ⚙️ Delimiter to hide a suggestion：我这里设置的是 “+=”
	- ⚙️ Delimiter to divide suggestions for display from ones for insertion：我这里设置的“=>”
	- ⚙️ Caret location symbol after complement: `$END$`

![image.png|559](https://cdn.pkmer.cn/images/20230623093222.png!pkmer)

#### 词典

##### 词语定义说明

- Inserted text，插入的文本
	- 插入的文本用于在选择建议后插入文本，但不用于匹配。
- Displayed text，显示的文本
	- 用于显示匹配的建议结果
![image.png](https://cdn.pkmer.cn/images/20230623002501.png!pkmer)

#### 活用

- 基于这种可以自定义的丰富功能，你可以尝试将很多难记忆的语法，格式放入建议的触发快捷提示中。
- 比如我们可以参考下面示例
	- 可以将需要输入的 callout 格式快速加入自定义词典。
	- 可以把多栏需要记忆语法放入，参考 [[Obsidian能像其他笔记样分栏嘛]]
	- 比如你想使用时间线 callout 样式

```词典实例
%% Callouts %% 
co-abstract=>> [!ABSTRACT] 摘要\n> $END$ | 📔摘要提示区块 |coa|co-summary|co-tldr|摘要
co-bug=>> [!ERROR] Bug🐞\n> $END$ | 🐞Bug提示区块 |cob|ad-bug|bug
co-caution=>> [!CAUTION] 危险☠️\n> $END$ | ☠️危险提示区块 |cod|ad-caution|co-caution|caution|危险
co-error=>> [!ERROR] 错误\n> $END$ | ⚡错误提示区块 |coe|co-error|co-danger|ad-error|error|错误
co-example=>> [!EXAMPLE] 例子📝\n> $END$ | 📝例子提示区块 |coex|ad-example|例子
co-fail=>> [!FAIL] 失败❌\n> $END$ | ❌失败提示区块 |cof|ad-fail|fail|失败
co-info=>> [!INFO] infoℹ️\n> $END$ | ℹ️info提示区块 |coi|ad-info|info|信息
co-note=>> [!NOTE] 重点⭐\n> $END$ | ⭐重点提示区块 |con|ad-note|重点
co-quote=>> [!QUOTE] 引用\n> $END$ | ✨引用提示区块 |cquote|quote|引用
co-question=>> [!QUESTION] 问题❓\n> $END$ | ❓问题提示区块 |coq|ad-q|question|问题
co-success=>> [!SUCCESS] 完成✅\n> $END$ | ✅完成提示区块 |cos|co-done|ad-done|ad-suc|成功
co-warning=>> [!WARNING] 注意⚠️\n> $END$ | ⚠️警告提示区块 |cow|ad-war|wwarning|警告
co-tip=>> [!TIP] 技巧💡\n> $END$ | 💡技巧提示区块 |cot|ad-tip|tips|提示
co-lol=>> [!lol] 有趣\n$END$ | 😁有趣提示区块 |col|co-LOL
co-comment=>> [!comment] 建议 \n> $END$ | 建议提示区块 |coc|建议
co-reference=>> [!REFERENCE] 参考 \n> $END$ | 📖參考提示区块 |cor|参考
co-mulit=>> [!multi-column]\n>\n>> [!note]+ 栏位1\n>>\n>>\n>\n>>[!note]+ 栏位2\n>>\n>>  $END$ | 📖双列提示区块 |co-mulit|mulit-co|双列
co-tri=>> [!multi-column]\n>\n>> [!note]+ 栏位1\n>>\n>>\n>\n>>[!note]+ 栏位2\n>>\n>>\n>\n>> [!note]+ 栏位3\n>>\n>> $END$ | 📖三列提示区块 |tri-col|co-tri|三列
co-time=>> [!timeline]\n>>左栏时间内容\n>---\n>右栏内容\n>> 左栏位时间内容\n>\n>右栏位内容\n>>左栏位时间内容\n>\n>右侧栏位内容\n>> $END$ | 📆timeline示区块 |co-timeline| co-time | 时间线
```

### 兼容

- 支持语言

|语言|是否支持|
|:--|:--|
|英语系|支持|
|日语|支持|
|阿拉伯|支持|
|中文|支持|
|韩文|不支持|

- 支持编辑模式

|模式|是否支持|
|:--|:--|
|源码模式|支持|
|实时预览|支持|
|传统编辑器|支持|

- 支持设备

|设备和系统|是否支持|
|:--|:--|
|Windows|支持|
|Mac|  |
|Linux|  |
|Android|支持|
|iPhone|  |
|iPad|支持|
