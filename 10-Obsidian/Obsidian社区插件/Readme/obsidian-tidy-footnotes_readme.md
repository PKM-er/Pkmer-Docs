---
uid: 2023080322281799
title: Obsidian 插件：【Readme】Tidy Footnotes
tags: ['文件重构', 'obsidian插件', 'readme']
description: 可以将所有注脚都合并到一个地方，也能给注脚重新排序
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Tidy Footnotes

> [!Note] 插件名片
> - 插件名称：Tidy Footnotes
> - 插件作者：Charlie Chao
> - 插件说明：可以将所有注脚都合并到一个地方，也能给注脚重新排序
> - 插件分类：['文件重构', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/charliecm/obsidian-tidy-footnotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tidy-footnotes)

## 概述

可以将所有注脚都合并到一个地方，也能给注脚重新排序

![Tidy Footnotes](https://cdn.pkmer.cn/covers/obsidian-tidy-footnotes.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/charliecm/obsidian-tidy-footnotes/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-tidy-footnotes]] 插件的自述翻译


# Obsidian整理脚注

在[Obsidian](https://obsidian.md)中添加一个命令，可以整理你的[脚注](https://help.obsidian.md/How+to/Format+your+notes#Footnotes)，使其易于阅读：

- 将所有脚注定义整合到一个地方，并按出现顺序排序
- 重新索引编号脚注（例如，`[^1][^4][^2]` 变为 `[^1][^2][^3]`）

![演示](https://raw.githubusercontent.com/charliecm/obsidian-tidy-footnotes/main/demo.gif)

灵感来自[obsidian-footnotes](https://github.com/akaalias/obsidian-footnotes)插件。

## 安装方法

从Obsidian内部：
1. 进入设置 → **社区插件**。
2. 禁用**安全模式**。
3. 点击**浏览**，搜索**Tidy Footnotes**，然后点击**安装**。
4. 点击切换按钮以启用插件。

对于手动安装，请下载此存储库并将`main.js`和`manifest.json`复制到您的保险库中：`VaultFolder/.obsidian/plugins/tidy-footnotes/`。

如何使用

从命令面板中运行“整理脚注：整理脚注”。或者，从设置→**热键**中设置它为热键。

## 注意事项

- 目前，代码块中的脚注也会被解析，而不是被忽略。
- 脚注定义的原始位置不会被保留。插件总是会将所有定义移动到找到第一个定义的位置。
- 非编号的脚注（例如 `[^abc]`）不会影响编号脚注的重新索引。

## 开发

1. 克隆这个仓库。
2. 运行 `npm i` 或 `yarn` 安装依赖。
3. 运行 `npm run dev` 以启动编译并进入监听模式。
4. 运行 `bash install-built.sh /path/to/your/vault -d` 以在你的 vault 中创建内置文件的符号链接，以便进行快速开发。
5. 运行 `npm run test` 以运行单元测试。

**注意：** [CodeMirror](https://github.com/codemirror/CodeMirror) 被导入用于与 `Doc` 接口进行测试。如果版本不再与 Obsidian 使用的版本匹配，可能会出现问题。

## 发布

1. 运行 `yarn build`。
2. 在 `manifest.json` 和 `versions.json` 中升级版本。
3. 在 `CHANGELOG.md` 中添加变更内容。
4. 在 Github 中创建一个新的发布，附上变更日志文本以及构建好的 `main.js` 和 `manifest.json`。

## 支持

如果您真的喜欢这个插件并希望支持它的开发，请考虑[给我买杯咖啡](https://www.buymeacoffee.com/charliecm) 🙂 谢谢！





