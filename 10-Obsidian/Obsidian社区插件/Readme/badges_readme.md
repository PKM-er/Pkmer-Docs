---
uid: 20230803212014
title: Obsidian 插件：【Readme】Badges
tags: ['obsidian插件', 'readme']
description: 在笔记中添加内联徽章/标注。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Badges

> [!Note] 插件名片
> - 插件名称：Badges
> - 插件作者：@gapmiss
> - 插件说明：在笔记中添加内联徽章/标注。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/gapmiss/badges)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?badges)

## 概述

在笔记中添加内联徽章/标注。

![Badges](https://cdn.pkmer.cn/covers/badges.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gapmiss/badges/master/README.md)
> 

---

## Readme(翻译）

下面是 [[badges]] 插件的自述翻译



徽章

### 简介

这是一个轻量级的插件，用于在 [Obsidian.md](https://github.com/obsidianmd) 中显示内联的“徽章”，类似于一个键值存储（数据库），可以通过默认搜索或 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件进行查询。

- [用法](#usage)
	- [Github 风格的徽章](#Github)
	- [纯文本](#Plain-text)
	- [自定义](#custom)
- [安装](#Installation)
- [CSS 样式](#CSS)
- [Dataview 插件](#Dataview)
- [开发](#Development)
- [注意事项](#Notes)

> 下载：[演示 markdown 文件](assets/badges-demo.md)

### 用法

###### 默认语法

```markdown
`[!!KEY:VAL]`
```

| 语法   | 详情                             |
| ------ | ------------------------------- |
| `KEY`  | `ICON` 的类型和名称              |
| `VAL`  | 显示的值和文本                   |

> ⚠️ 注意：
> `VAL` 不能包含 `|` 管道符号或 `:` 冒号符号，因为它们被用作自定义语法的分隔符。

```markdown
`[!!注意:note]`
`[!!信息:info]`
`[!!待办:todo]`
...
`[!!引用:cite]`
```

###### 结果

![](assets/Badges-demo-Obsidian-v1.3.7-20230709144540.png)

![](assets/Badges-demo-Obsidian-v1.3.7-20230709144545.png)

```markdown
`[!!紧急: 紧急]`
`[!!禁止: 禁止]`
`[!!停止: 停止]`
…
`[!!奖励: 奖励]`
`[!!保险库: 保险库]`
```

###### 结果

![](assets/Badges-demo-Obsidian-v1.3.7-20230709170950.png)

![](assets/Badges-demo-Obsidian-v1.3.7-20230709170943.png)

#### Github

###### 语法

```markdown
`[!!|GHX>KEY:VAL]`
```

| 语法             | 详情                                                                                   |
| --------------- | ---------------------------------------------------------------------------------- |
| <code>\|</code> | 开始管道符号                                                                  |
| `GHX`           | Github风格，可以选择`ghb`表示蓝色风格或`ghs`表示绿色成功风格 |
| `>`             | 大于符号（分隔符）                                                    |
| `KEY:VAL`       | `KEY`是类型或标签，`VAL`是显示的值文本。例如`release:1.0.0` |

> ⚠️ 注意:
> `VAL`不能包含`|`管道符号或`:`冒号符号，因为它们被用作自定义语法的分隔符。

```markdown
`[!!|ghb>发布:1.2.1]`
`[!!|ghb>问题:2]`
`[!!|ghb>未解决问题:0]`
`[!!|ghb>已解决问题:2]`
`[!!|ghb>贡献者:3]`
`[!!|ghb>许可证:MIT]`
`[!!|ghs>检查:成功]`
`[!!|ghs>构建:成功]`
```

###### 结果

![](assets/Badges-demo-Obsidian-v1.3.7-20230709171043.png)

![](assets/Badges-demo-Obsidian-v1.3.7-20230709171053.png)

### 纯文本

```markdown
`[!!|KEY:VAL]`
```

| 语法             | 详情                                   |
| --------------- | ------------------------------------- |
| <code>\|</code> | 开始管道符号                           |
| `KEY:VAL`       | `KEY` 是类型，`VAL` 是值                 |

```markdown
`[!!|foo:bar]`
```

###### 结果

![](assets/Badges-demo-Obsidian-v1.3.7-20230709171707.png)

![](assets/Badges-demo-Obsidian-v1.3.7-20230709171713.png)

### 自定义

```markdown
`[!!|ICON|KEY:VAL|COLOR-RGB]`
```

| 语法             | 详细说明                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <code>\|</code> | 开始管道符号                                                                                                            |
| `ICON`          | 图标的名称。例如：`lucide-dice`                                                                                          |
| <code>\|</code> | 管道符号                                                                                                                |
| `KEY:VAL`       | `KEY` 是类型或标签，`VAL` 是显示的值文本。例如：`release:1.0.0`                                                          |
| <code>\|</code> | 管道符号                                                                                                                |
| `COLOR-RGB`     | 3个（R.G.B.）数字（0-255）值，用逗号分隔。例如：`144,144,144` 或 CSS 变量例如：`var(--color-red-rgb)` |

> ⚠️ 注意：
> `VAL` 不能包含 `|` 管道符号或 `:` 冒号符号，因为它们被用作自定义语法的分隔符。

```markdown
`[!!|message-square|comment:edited by j.d.|var(--color-cyan-rgb)]`
`[!!|dice|roll:eleven|120,82,238]`
`[!!|gem|mineral:emerald|var(--my-custom-rgb)]`
`[!!|apple|fruit:snack|var(--color-red-rgb)]`
`[!!|brain|brain:pkm|var(--color-purple-rgb)]`
`[!!|sun|weather:sunny|var(--color-yellow-rgb)]`
`[!!|cloudy|weather:cloudy|var(--mono-rgb-100)]`
`[!!|sunset|weather:8.44pm|var(--color-orange-rgb)]`
`[!!|dumbbell|reps:3 sets of 50|var(--mono-rgb-00)]`
`[!!|gift|event:wedding|var(--color-blue-rgb)]`
`[!!|plus-square|credit:$100|var(--color-green-rgb)]`
`[!!|minus-square|debit:$10|var(--color-pink-rgb)]`
```

###### 结果

![](assets/Badges-demo-Obsidian-v1.3.7-20230709171541.png)
![](assets/Badges-demo-Obsidian-v1.3.7-20230709171534.png)

### 安装

从Obsidian的设置或首选项中：

1. ~~社区插件 > 浏览~~ 等待官方审核
2. ~~搜索“Badges”~~

或者：

1. 下载最新的[发布存档](https://github.com/gapmiss/badges/releases/download/1.0.0/badges-v1.0.0.zip)
2. 解压下载的存档
3. 将`badges`文件夹移动到`/path/to/vault/.obsidian/plugins/`目录下
4. 设置 > 社区插件 > 重新加载**已安装的插件**
5. 启用插件

或者：

1. 下载`main.js`、`manifest.json`和`styles.css`
2. 创建一个新的文件夹`/path/to/vault/.obsidian/plugins/badges`
3. 将所有3个文件移动到`/path/to/vault/.obsidian/plugins/badges`目录下
4. 设置 > 社区插件 > 重新加载**已安装的插件**
5. 启用插件

### CSS

可以通过CSS片段应用自定义的CSS样式。所有的颜色和样式都可以被覆盖。

请参阅[CSS片段 - Obsidian帮助](https://help.obsidian.md/Extending+Obsidian/CSS+snippets)。

##### 变量

```css
body {
	/* 边框 */
	--inline-badge-border-color: 透明;
	--inline-badge-border-radius: var(--radius-s);
	--inline-badge-border: 1像素实线 var(--inline-badge-border-color);
	/* 示例自定义颜色 */
	--my-custom-rgb: var(--color-green-rgb);
}
/* 示例CSS自定义 */
.inline-badge[data-inline-badge^="vault"] {
	--badge-color: var(--color-green-rgb);
	color: rgba(var(--badge-color), .88);
	background-color: rgba(var(--badge-color),.22);
}
```

### 数据视图

查看并复制示例数据视图查询：[badges-dataview](assets/badges-dataview.md)

### 开发

###### 克隆这个仓库

```bash
cd /path/to/vault/.obsidian/plugins
git clone https://github.com/gapmiss/badges.git
cd badges
```

安装包并运行

```bash
npm i
npm run dev
```

###### 启用插件

1. 打开 `设置` → `社区插件`
2. 启用 `徽章` 插件。

### 注意事项

[Lucide](https://github.com/lucide-icons/lucide) 图标：https://lucide.dev

Lucide 图标许可证：https://lucide.dev/license



