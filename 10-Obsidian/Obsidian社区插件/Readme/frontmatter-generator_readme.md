---
uid: 20231220112631
title: Obsidian 插件：【Readme】Frontmatter generator
tags: ['obsidian插件', 'readme']
description: 从JSON和JavaScript生成您的笔记的前言
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Frontmatter generator

> [!Note] 插件名片
> - 插件名称：Frontmatter generator
> - 插件作者：Hananoshika Yomaru
> - 插件说明：从 JSON 和 JavaScript 生成您的笔记的前言
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/Obsidian-Frontmatter-Generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-generator)

## 概述

从 JSON 和 JavaScript 生成您的笔记的前言

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/Obsidian-Frontmatter-Generator/main/README.md)

---

## Readme(翻译）

下面是 [[frontmatter-generator]] 插件的自述翻译

# Obsidian 前置生成器

在保存时生成您的前置内容。

✅ 强大而简单

## 使用方法

1. 安装插件后，访问插件的设置页面
2. 更改前置元数据模板

例如，以下前置元数据模板

```ts
{
 folder: file.parent.path,
 title: file.basename,
 test: ["1", "2"]
}
```

将在保存时生成以下内容，保存在文件 `Good recipes/scrambled egg.md` 中。

```yaml
folder: Good recipes
title: scrambled egg
test:
  - '1'
  - '2'
```

1. 安装 [obsidian-custom-save](https://github.com/HananoshikaYomaru/obsidian-custom-save) 并将 `frontmatter-generator: run file` 命令添加到自定义保存操作中

- 基本演示： <https://youtu.be/Cz9d5e1WQVM>
- 标签属性演示： <https://www.youtube.com/watch?v=lyhrOG2Sn88&t=16>
高级用法

### 条件表达式

```ts
file.properties?.type === 'kanban'
 ? {
   folder: file.parent.path,
   title: file.basename
   }
 : {}
```

### 函数

```ts
{
 test: (() => {
  return { test: 'test' }
 })()
}
```

### 数据视图

```ts
{
 numberOfPages: dv.pages('#ai').length
}
```

## 前言模板的语法

它可以是一个返回对象的 JSON 或 JavaScript 表达式。

![](https://cdn.pkmer.cn/covers/frontmatter-generator_1_0.jpeg!pkmer)

<small>^ 甚至函数也可以工作</small>

## 可以访问的变量

- `file`，[`TFile`](https://docs.obsidian.md/Reference/TypeScript+API/TFile/TFile) 对象
- `file.properties` 将访问当前文件的 yaml 对象
- `file.tags`，一个 `string[]`，将访问当前文件的标签。例如 `["#book", "#movie"]`
- `dv`，[dataview](https://blacksmithgu.github.io/obsidian-dataview/) 对象（只有在安装和启用 dataview 插件后才能访问）
- `z`，zod 对象
安装
您可以在 Obsidian 插件市场上找到它。

### 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. 运行 `cd obsidian-frontmatter-generator && bun install && bun run build`
4. 完成！🎉

## 注意事项

1. 要停止在文件上生成内容，可以在前置元数据中添加 `yaml-gen-ignore: true`。您也可以在设置中忽略整个文件夹。
2. 您可以访问的上下文是 [TFile](https://docs.obsidian.md/Reference/TypeScript+API/TFile/TFile)。这可能会在将来更新。它非常灵活。
3. 该插件还附带了一些在文件夹和整个存储库中运行的命令。
4. 如果您想要贡献代码，请先打开一个问题。
5. 🚨 该插件仍在开发中，请不要尝试使用奇怪的关键字或访问模板中的全局变量来进行黑客攻击。这样做可能不会起作用，但如果您找到了一种黑客攻击的方法，它只会破坏您自己的存储库。
如何发布

# 更新 package.json 中的版本号

bun version

git add .

git commit -m <message>

git tag -a <version> -m <version>

git push origin <version>

git push

# 发布工作流完成后，在 github 上更新发布文档