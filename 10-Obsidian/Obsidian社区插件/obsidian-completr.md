---
uid: 20231008192312
title: Obsidian 插件：Completr 自动联想补全插件
tags: [Obsidian, completr, 联想, 自动补全, Callout, latex, obsidian插件]
description: 这个插件为 LaTeX, Frontmatter，callout 提供了自动补全功能，你还可以提供文件作为联想的文字。
author: Huajin
type: other
draft: false
editable: false
modified: 20231010212803
---

# Obsidian 插件：Completr 自动联想补全插件

## 概述

插件提供了 LaTex，Frontmatter，callout 的自动联想补全功能，还提供了扫描当前文件所有文字作为联想备选文字的功能。另外，你还可以自己提供放了文字的文件作为联想的数据。

> [!Note] 插件名片
> - 插件名称：Completr
> - 插件作者：tth05
> - 插件说明：这个插件为 LaTeX, Frontmatter，callout 提供了自动补全功能，你还可以提供文件作为联想的文字。
> - 插件项目地址：[点我跳转](https://github.com/tth05/obsidian-completr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-completr)

## 效果展示

- 支持 Latex
    - 无需以 `\` 开头
    - 包含所有 MathJax 命令
    - 允许为所有环境补全 `\begin...`
    - 支持插入带有占位符的片段
- 支持 YAML Front Matter
    - 学习任何键和任何值，并为其提供补全
- 支持单词列表
    - 加载每行为一个单词的文件
    - 即使对于非常大的 [列表](#寻找单词列表)，也具有高性能
- 扫描您的存储库以查找单词
    - 扫描当前文件或整个存储库以查找新单词，然后可以提供建议
- 输入 `-[` 就会出现所有 ob 提供的 callout，点击确认即可自动补全

![Pasted image 20231008194346.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231008194346.png!pkmer)

- 提供字库作为联想备用文字

![Pasted image 20231008194600.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231008194600.png!pkmer)

- 自动补全 LaTex

![1696765683995.png](https://cdn.pkmer.cn/images/1696765683995.png!pkmer)

![Pasted image 20231008195141.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231008195141.png!pkmer)

## 简单配置

默认无法扫描到中文，如果需要中文联想，需要在设置的第一项 Word character regex 的开头插入：`\u4e00-\u9fa5`，这样就可以扫描到中文了

> [!warning] 注意
> 不要去掉原来的 `a-zA-ZöäüÖÄÜß`，那是用来匹配字母的。结果为 `\u4e00-\u9fa5a-zA-ZöäüÖÄÜß`；

插件提供的可以修改的设置有

- 最小开始联想的字符；
- 替换的方式（是否忽略大小写，是直接替换还是结尾补全等）
- 是否启用 LaTex 补全（以及是否需要在代码块中提供补全，是否忽略大小写等）
- 是否启用 Frontmatter 补全（以及是否忽略大小写，是否添加后缀）
- 是否需要扫描文件作为补全的字库（以及是否包括当前文件）
- 是否需要我们自己提供文件作为字库；
- 是否启用 Callout 补全功能；

## 与 various complments 有何不同

我之前用的联想插件是：[[various-complements]] (后简称 vc) 两者各有优劣。

vc 虽然能做的更多，但是学习成本更高。completr 配置很简单，并且拥有足够的联想功能。

- vc 可以自定义联想替换的格式，如果有这个需求可以用他。
- completr 配置很简单，没有 vc 那么高的学习成本。
	- 提供作为联想字库的文件时，completr 可以手动选择文件，而 vc 只能自己填写联想字库文件的路径；
	- completr 内置了联想生成 callout 的设置，vc 则需要自己写一份补全 callout 的文件，并且联想只能一个个联想；