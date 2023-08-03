---
uid: 2023080322180706
title: Obsidian 插件：【Readme】Fantasy Content Generator
tags: ['游戏', '编辑器', '效率', 'obsidian插件', 'readme']
description: 用于生成基于种族的幻想内容，例如 战利品、酒馆、饮品和角色的名称等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Fantasy Content Generator

> [!Note] 插件名片
> - 插件名称：Fantasy Content Generator
> - 插件作者：Gregory-Jagermeister
> - 插件说明：用于生成基于种族的幻想内容，例如 战利品、酒馆、饮品和角色的名称等。
> - 插件分类：['游戏', '编辑器', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Gregory-Jagermeister/Fantasy-Content-Generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fantasy-content-generator)

## 概述

用于生成基于种族的幻想内容，例如 战利品、酒馆、饮品和角色的名称等。

![Fantasy Content Generator](https://cdn.pkmer.cn/covers/fantasy-content-generator.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Gregory-Jagermeister/Fantasy-Content-Generator/master/README.md)
> 

---

## Readme(翻译）

下面是 [[fantasy-content-generator]] 插件的自述翻译


# 幻想内容生成器

这是一个为 Obsidian（<https://obsidian.md>）设计的插件，用于根据种族生成旅馆、定居点和角色名称等幻想内容。

## 鸣谢和资源

我想要感谢以下我在创建这个项目时使用的库和资源：

- Fantasy-names (<https://github.com/Snake4life/fantasy-names>) 的 GitHub 页面，它帮助我理解了这些生成器的工作原理。
- Fantasy Name Generator 包 (<https://www.npmjs.com/package/fantasy-name-generator>)
- Fantasy Content Generator 包 (<https://www.npmjs.com/package/fantasy-content-generator>)

## 如何使用

1. 在功能区中选择书籍图标
2. 选择您想要使用的生成器
3. 根据您的喜好编辑设置
4. 点击生成并将生成内容复制到剪贴板中。

### 示例

![示例](Obsidian-Fantasy-Content-Generator-Compressed.gif)

## 自定义来源

在插件的设置中，您将找到设置和选项，以将自己的单词和短语添加到生成器中，目前并非所有都已添加，除非我收到对特定生成器的压倒性请求，否则没有当前计划添加更多。目前可以自定义的生成器有：

- 战利品生成器
- 酒馆生成器
- 定居点生成器
- 饮料生成器
- 团队生成器
- 货币生成器
- 地牢生成器

## 内联生成器

如果你发现自己需要一个快速的精灵名字，或者真的想要一个快速的地牢描述，那么不要再找其他的了，直接使用内联生成器吧。你可以通过使用Callout令牌（默认设置为'@'，可以在设置中更改）并浏览可能的生成器列表来激活它。

### 内联示例

![示例](Obsidian_mrGSNRjLpe.gif)

配置

下面是此插件中所有设置的表格
| 设置 | 选项 |
| ------- | ------- |
| 重置 | 点击重置按钮返回默认值 |
| 呼叫 | 修改使用内联生成器时使用的呼叫 |
| 货币 | 启用生成中的货币使用，设置其出现频率和稀有度 |
| 定居点 | 修改可用于生成定居点的前缀和后缀数组 |
| 酒馆 | 修改用于生成酒馆的前缀、类型、名词、描述和谣言数组 |
| 饮品 | 修改用于饮品生成器的形容词和名词数组 |
| 战利品 | 修改用于战利品生成器的形容词和名词数组 |
| 群体 | 调整群体生成器的形容词、名词、复数名词、群体类型和单一描述符 |
| 地牢 | 调整地牢生成器使用的形容词、名词、位置、地牢类型和随机描述 |

## 待办事项

- ~~添加更多设置，以帮助为某些生成器构建自定义生成设置，这些生成器包括：~~
  - ~~战利品生成器~~
  - ~~酒馆生成器~~
  - ~~定居点生成器~~
  - ~~饮品生成器~~
  - ~~团队生成器~~
- ~~在备注中进行随机化。~~
- 可能会有更多的生成类型。
- 更好的用户界面
- ~~JSON导入和导出~~



