---
uid: 2023120522271474
title: Obsidian 插件：【Readme】Tag Breakdown Generator
tags: ['obsidian插件', 'readme']
description: 将嵌套标签拆分为多个父标签
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tag Breakdown Generator

> [!Note] 插件名片
> - 插件名称：Tag Breakdown Generator
> - 插件作者：Hananoshika Yomaru
> - 插件说明：将嵌套标签拆分为多个父标签
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/obsidian-tag-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-breakdown-generator)

## 概述

将嵌套标签拆分为多个父标签

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/obsidian-tag-generator/main/README.md)

---

## Readme(翻译）

下面是 [[tag-breakdown-generator]] 插件的自述翻译

# Obsidian 标签生成器

或者应该称之为 Obsidian 标签拆分器。它将嵌套的标签拆分成父标签，并在点击保存时添加到文件的顶部。例如，

```md
#ai/image #a/b/c/d #a/b/c/c

将生成以下内容

#a #a/b #a/b/c #ai
```

演示： <https://www.youtube.com/watch?v=8M2VLRibpnQ>

✅ 简单易用

## 使用方法

1. 首先需要安装自定义保存插件
2. 然后将“标签生成器：在当前文件上运行”命令绑定到自定义保存操作
3. 完成！🎉
你可以在 Obsidian 社区插件商店上下载它。

## 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. 运行 `cd obsidian-tag-generator && bun install && bun run build`
4. 完成！🎉

### 更新

1. 切换到 `.obsidian/plugins/obsidian-tag-generator` 目录
2. 执行 `git pull` 命令
3. 执行 `bun install && bun run build` 命令
4. 完成！🎉

## 注意事项

1. 此插件仅适用于正文中的标签。前置元数据中的标签将被忽略。
2. 生成器将识别注释块。如果注释块不存在，它将在文件顶部创建该块。如果存在，则将替换该块。
3. 要跳过此生成过程，您可以在前置元数据中添加 `tag-gen-ignore: true`。
4. 要进行贡献，请先在 GitHub 上提出问题。
如何发布

# 更新 package.json 中的版本号

bun version

git add .

git commit -m <message>

git tag -a <version> -m <version>

git push origin <version>

git push

# 发布工作流完成后，在 github 上更新发布文档