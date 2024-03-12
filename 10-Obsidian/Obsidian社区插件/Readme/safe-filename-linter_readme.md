---
uid: 20230901084916
title: Obsidian 插件：【Readme】Safe Filename Linter
tags: ['obsidian插件', 'readme']
description: 检查文件名中的无效或有问题的字符
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Safe Filename Linter

> [!Note] 插件名片
> - 插件名称：Safe Filename Linter
> - 插件作者：sneaky-foxes
> - 插件说明：检查文件名中的无效或有问题的字符
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sneaky-foxes/obsidian-safe-filename-linter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?safe-filename-linter)

## 概述

检查文件名中的无效或有问题的字符

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sneaky-foxes/obsidian-safe-filename-linter/main/README.md)

---

## Readme(翻译）

下面是 [[safe-filename-linter]] 插件的自述翻译

# Obsidian 文件名检查插件

使用插件

### 手动调用

该插件添加了两个命令。

- `安全文件名检查器：检查当前文件名`
- `安全文件名检查器：检查存储库中的所有文件名`

这些命令通过将无效或有问题的字符替换为您选择的字符来重命名文件。重命名操作使用 Obsidian 的重命名调用，并将根据您的存储库设置更新内部链接（提示或自动）。如果您的存储库需要进行许多重命名操作，请准备好耐心。

自动调用

尚不可用。

### 鸣谢

我们感谢 Obsidian 的开发者为这个插件提供了 [Obisidan Sample Plugin](obsidianmd/obsidian-sample-plugin) 的基础，并且在开始编写我们自己的插件之前，我们阅读并尝试了 [Obsidian Filename Emoji Remover Plugin](https://github.com/YTolun/obsidian-filename-emoji-remover) 的代码。

安装插件

### 手动安装

1. 在命令行中，导航到你的 vault 的 `.obsidian/plugins` 目录，并运行以下命令：
   `git clone https://github.com/sneaky-foxes/obsidian-safe-filename-linter`
2. 在 Obsidian vault 中，从 Community Plugins 设置部分启用此项目
3. 在 Safe Filename Linter Community Plugins 部分设置你偏好的字符替换方式
社区插件目录

目前尚不可用。

开发插件

### 初始设置

1. 安装 [nvm](https://github.com/nvm-sh/nvm)
2. 创建一个沙盒 Obsidian 保险库
3. 在沙盒 Obsidian 保险库中，启用社区插件。这将创建一个 `plugins` 目录
4. 在 `plugins` 目录中，安装 [Hot Reload 插件](https://github.com/pjeby/hot-reload)（可选；强烈建议）
5. 在 `plugins` 目录中，克隆项目
6. 在克隆的项目目录中，使用 nvm 安装 node v18.x
7. 在克隆的项目目录中，安装依赖项：`npm install`
8. 在克隆的项目目录中，启动开发模式：`npm run dev`
9. 在沙盒 Obsidian 保险库中，启用此项目和（可选）Hot Reload 插件

### 开发中

在开发过程中，请确保运行 `npm run dev` 来保持项目构建的变化。

### 贡献

我们欢迎对于任何在 Obsidian 或其运行平台上引起问题的字符的问题和拉取请求。我们也欢迎任何额外的替换字符。该插件不打算处理除了功能性文件名用例之外的字符检查。

有关如何提交代码的详细信息，请参阅 [CONTRIBUTING](./CONTRIBUTING.md)。

测试

目前没有设置任何自动化测试。

### 代码检查

- 要使用 eslint 分析此项目，请使用以下命令：
  - `eslint .src`
  - eslint 将根据文件和行号创建一个报告，提供代码改进的建议。

### 代码格式化

- 使用以下命令使用 prettier 格式化源代码：
  - `npx prettier src --write`

### Obsidian API 更新

要更新 Obsidian API，请在存储库文件夹下的命令行中运行 `npm update`。

发布

### 创建新版本

1. 更新清单、版本和包：`npm version [major|minor|patch]`
2. 删除自动生成的标签：`git tag -d [tag]`
3. 提交更改并创建拉取请求
4. 一旦拉取请求合并完成，拉取新的 `main` 分支：`git checkout main && git pull origin main`
5. 给发布提交打上标签：`git tag -a [version number without v] -m "[version number without v]"`。例如：`git tag -a 1.1.0 -m "1.1.0"`
6. 推送标签以触发发布的 GitHub Action 工作流程：`git push --tags`
7. 前往 <https://github.com/sneaky-foxes/obsidian-safe-filename-linter/releases> 发布发布版本

注意：由于我们使用的是 Github 的 rebase 合并策略，我们需要解决 Github 不进行快进提交，而是为 rebase 创建新提交的问题。当我们允许标签在拉取请求中时，标签将位于一个无头提交上。这种方法确保标签位于 `main` 分支上。

更多发布详情请参见：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>

### 将插件添加到社区插件列表

- [x] 检查 <https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md>
- [x] 发布初始版本。
- [x] 确保在存储库的根目录中有一个 `README.md` 文件。
- [ ] 在 <https://github.com/obsidianmd/obsidian-releases> 上创建一个拉取请求，以添加您的插件。
Obsidian API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>
