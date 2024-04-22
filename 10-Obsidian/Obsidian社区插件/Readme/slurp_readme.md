---
uid: 2024042221322874
title: Obsidian 插件：【Readme】Slurp
tags: ['obsidian插件', 'readme']
description: Slurps网页并将它们保存为干净、整洁的Markdown。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Slurp

> [!Note] 插件名片
> - 插件名称：Slurp
> - 插件作者：inhumantsar
> - 插件说明：Slurps 网页并将它们保存为干净、整洁的 Markdown。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/inhumantsar/slurp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?slurp)

## 概述

Slurps 网页并将它们保存为干净、整洁的 Markdown。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/inhumantsar/slurp/main/README.md)

---

## Readme(翻译）

下面是 [[slurp]] 插件的自述翻译

# 吸取

吸取网页内容，清除所有杂质，并将它们保存为漂亮整洁的 Markdown 文件到 Obsidian 中。想象一下 Pocket，但更好。

![演示](demo/demo.gif)

## 目标

* 将来自非结构化网页的信息与 Obsidian 管理的更结构化的笔记、图表和其他数据整合在一起。
* 使信息持久化、可索引，并更易于消化。
* 绘制保存页面之间的语义连接，以鼓励重复使用，并可能展示思想之间意想不到的联系。

## 特点

* 使用命令面板创建新的笔记，包括属性。
* 笔记属性包括正确格式的日期，因此每日笔记会自动链接起来。

## 用法

### 从 URL 创建笔记

1. _Ctrl+P_ 或 _Cmd+P_ 打开命令面板
2. 搜索 _Slurp_
3. 选择 _从 URL 创建笔记_
4. 粘贴 URL 并按下 _Enter_ 或点击 _Slurp_ 按钮
5. Slurp 将保存笔记到一个名为 _Slurped Pages_ 的文件夹并打开它

### 使用书签工具或浏览器扩展（即将推出™️）

Slurp 暴露了一个自定义的 URI，可以用于一键保存。

对于那些喜欢的人来说，书签工具是一个简单的选择。只需使用以下 URL 设置创建一个新的书签：

```
javascript:(() => document.location.href=`obsidian://slurp?url=${document.URL}`)();
```

浏览器扩展也适用于 Firefox、Chrome 和其他兼容标准 Web 扩展规范的浏览器，尽管它们目前处于测试阶段，必须手动安装。有关详细信息，请参见<https://github.com/inhumantsar/slurp-extension>。

### 设置

* `显示空属性`：Slurp 是否应该添加所有笔记属性，即使它们是空的？（仅影响新笔记）

## 已知问题和限制

* 社交媒体链接通常效果不佳，例如：
  * Twitter 链接将会失败，因为 Twitter 会积极过滤非浏览器。
  * 评论将会从 HackerNews 链接中捕获（大部分情况下），但所有的线程将会丢失。
  * Reddit 链接将会被处理，但只会捕获链接、作者和 Reddit 侧边栏内容。
* Slurp _ 不会 _ 绕过付费墙。
* 转换有时会留下一些问题，主要是奇怪的标记和换行。

## 显著版本

* 0.1.3 - 添加了移动支持，书签工具的自定义 URI，以及即使为空也显示所有属性的选项。
* 0.1.2 - 初始公开发布

## 待办事项

* [ ] _进行中_ 为一键下载添加浏览器扩展
* [ ] 添加设置以更改默认保存位置，选择性禁用属性等
* [ ] 确保视频和其他嵌入内容可靠捕获
* [ ] 导入 Pocket 保存的内容，手动和自动化
* [ ] 从其他来源（包括浏览器）导入书签
* [ ] LLM 摘要和标签
* [ ] 确保 Slurp 与其他插件（如 Dataview）良好兼容
* [ ] 捕获 Reddit 和 Hacker News 的讨论主题以及链接页面
* [ ] 保存页面的 PDF 和/或 HTML 版本以及 Markdown 版本

## 开发环境

### direnv（可选）

有一个 `direnv` 配置，可以用来快速配置一个完全隔离的本地环境。不过设置它需要一些额外的步骤。

1. 安装 Nix 包管理器：`sh <(curl -L https://nixos.org/nix/install) --no-daemon`
2. 确保启用了 `flakes` 和 `nix-command`，例如：`mkdir -p ~/.local/nix && echo "experimental-features = nix-command flakes" >> nix.conf`
3. 安装 `direnv`，根据需要调整或删除 `bin_path`：`curl -sfL https://direnv.net/install.sh | bin_path=~/.local/bin bash`
4. `direnv` 会指导您在 `.bashrc` 中添加一行，完成后运行 `direnv allow`。

### 构建

```
npm install     # 如果使用direnv，则不需要
npm run dev     # 启用main.js的热重建
```

### 测试保险库

[`test-resources/vault`](./test-resources/vault) 是一个可以用于测试的 Obisidian 保险库。作为一个附带好处，这是一个保存开发笔记的地方。

在保险库的 [插件目录](./test-resources/vault/.obsidian/plugins/) 中有一个符号链接，它使用相对路径来引用存储库根目录。克隆后，这可能适用于您，也可能不适用。如果 Obsidian 没有正确看到插件，请删除并重新创建它。

_注意_：如果您尚未 [构建](#building) 项目，则插件将无法工作（甚至可能无法识别）！

### 热重载

[热重载](https://github.com/pjeby/hot-reload) 是 Obsidian 插件开发中常用的插件。它会监视已修改的插件，并在运行中的 Obsidian 实例中自动重新加载它。它作为一个子模块包含在测试保险库中，因此您需要在首次克隆时更新它：

```
git submodule update
```

## 测试

### URI 处理程序

在 Linux 上：

```
xdg-open "obsidian://slurp?url=https://..."
```

## 鸣谢

* [Mozilla's Readability](https://github.com/mozilla/readability) 支持底层转换。

## 许可证

[MIT](./LICENSE)
