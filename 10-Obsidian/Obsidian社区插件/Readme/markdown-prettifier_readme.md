---
uid: 20230817224053
title: Obsidian 插件：Markdown prettifier
tags: ['文件重构', 'obsidian插件', 'readme']
description: 修复并格式化丑陋的Markdown。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Markdown prettifier

> [!Note] 插件名片
> - 插件名称：Markdown prettifier
> - 插件作者：pelao
> - 插件说明：修复并格式化丑陋的 Markdown。
> - 插件分类：[' 文件重构 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cristianvasquez/obsidian-prettify)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-prettifier)

## 概述

修复并格式化丑陋的 Markdown。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cristianvasquez/obsidian-prettify/master/README.md)

---

## Readme(翻译）

下面是 [[markdown-prettifier]] 插件的自述翻译

注意：不再维护

对于类似的功能，我推荐使用：[obsidian-linter](https://github.com/platers/obsidian-linter)（我自己正在使用它🙂）

# Obsidian 的 Markdown 美化工具

尝试修复和重新格式化丑陋的 Markdown，并添加诸如“修改日期”等内容。

默认的快捷键是 `Ctrl+Alt+L`。

## 例子

### 标签管理员

假设你有以下内容：

```markdown

A #new and #exciting paragraph!
```

在“更新字段”之后：

```markdown
---
tags:
    - '#new'
    - '#exciting'

---

A #new and #exciting paragraph!


```

### 更新 frontmatter 中的值

之前:

```markdown

我写了这个，但我不记得是什么时候！

```

之后:

```markdown
---
date updated: '2020-11-23T16:47:37+01:00'
---

我写了这个，但我不记得是什么时候！

```

可以通过模板配置标题，以添加日期或 ID

要生成日期，可以使用 [moment.js格式](https://momentjs.com/docs/#/displaying/format)，例如

```
date created: '{{date}}'
```

```
date updated: '{{date:YYYY-MM-DDTHH:mm:ssZ}}'
```

要生成 RFC4122 UUID（通用 ID），请使用以下格式：

```
id: {{UUID}}
```

### 自动链接文字

**示例**

之前：

```markdown
www.example.com, https://example.com, and contact@example.com.
```

之后：

```markdown
[www.example.com](http://www.example.com), <https://example.com>, and <contact@example.com>.
```

### 有序列表

将有序列表标准化。

**示例**

之前：

```markdown
1. foo
    1. aaa
    1. bbb
    4. ccc
1. bar
1. baz
```

之后：

```markdown
1.  foo
    1.  aaa
    2.  bbb
    3.  ccc
2.  bar
3.  baz
```

### 表格

规范化表格格式。

**示例**

之前：

```markdown
**A**|**B**|**C**
|---:|:---|---|
a |b |c
x |y |z
```

之后：

```markdown
| **A** | **B** | **C** |
| ----: | :---- | ----- |
|     a | b     | c     |
|     x | y     | z     |
```

其他类似的插件

其他可供参考的替代品 :)

- [obsidian-plugin-prettier](https://github.com/hipstersmoothie/obsidian-plugin-prettier)
- [Obsidian Linter](https://github.com/platers/obsidian-linter)

这个插件使用了以下库：

- [remark](https://github.com/remarkjs/remark)
- [remark-gfm](https://github.com/remarkjs/remark-gfm#readme)
- [remark-images](https://github.com/remarkjs/remark-images)
- [remark-frontmatter](https://github.com/wooorm/remark-frontmatter)

如何编译插件

首先，使用以下命令安装依赖项：

```bash
npm i
```

然后，可以使用以下命令编译插件：

```bash
npm run build
```

这将在项目根目录中创建一个 `main.js` 文件。这是插件的入口点。

## 手动安装

从 [GitHub发布页面](https://github.com/cristianvasquez/obsidian-prettify/releases) 下载 zip 压缩包。

将压缩包解压到 `<vault>/.obsidian/plugins` 目录下。

或者，使用 bash 命令：

```bash
OBSIDIAN_VAULT_DIR=/path/to/your/obsidian/vault
mkdir -p $OBSIDIAN_VAULT_DIR/.obsidian/plugins
unzip ~/Downloads/obsidian-prettify-0.1.zip -d $OBSIDIAN_VAULT_DIR/.obsidian/plugins
```

版本历史

### v.1.1

- 修复了一些转义错误
- 删除了前置元数据的空格

### v.0.0.9

- 新的标题模板和更新模板之间的分离
- UUID 支持

### v.0.0.7

- 新的重构标签功能（ctrl+shift+o）
- 可以将表情符号添加为标签

### v.0.0.6

修复了前言错误

### v.0.0.5

为列表添加了缩进

将设置设置为推荐值

### v.0.0.4

修复了一个逃逸 \\ 的错误

为用户添加了一些反馈

### v0.0.3

启用了 frontmatter 和 settings！

包含：[remark-frontmatter](https://github.com/wooorm/remark-frontmatter)

### v0.0.2

添加了测试！

包括：[remark-gfm](https://github.com/remarkjs/remark-gfm#readme) 和 [remark-images](https://github.com/remarkjs/remark-images)

### v0.0.1

初始版本，第一次尝试使用 Obsidian 和插件。没有设置，只有最少的功能。

## 免责声明

该插件按原样提供，并专注于我在 Linux 上使用 Obsidian 的个人需求。因此，它并未在所有操作系统和 Obsidian 的功能上进行全面测试。

---

欢迎并感谢 Pull requests。 :)

> 我喜欢咖啡，你可以在这里给我买一杯： <https://www.buymeacoffee.com/pelado> :D