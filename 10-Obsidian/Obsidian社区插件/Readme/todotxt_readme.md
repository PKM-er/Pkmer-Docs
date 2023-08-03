---
uid: 2023080322283238
title: Obsidian 插件：【Readme】TodoTxt
tags: ['obsidian插件', 'readme']
description: 管理Todo.txt文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：TodoTxt

> [!Note] 插件名片
> - 插件名称：TodoTxt
> - 插件作者：Mark Grimes
> - 插件说明：管理Todo.txt文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mvgrimes/obsidian-todotxt-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todotxt)

## 概述

管理Todo.txt文件。

![TodoTxt](https://cdn.pkmer.cn/covers/todotxt.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mvgrimes/obsidian-todotxt-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[todotxt]] 插件的自述翻译


# Obsidian TodoTxt 插件

在 Obsidian 中管理 [\*.todotxt](https://github.com/todotxt/todo.txt) 文件。

![Obsidian 中的样本 TodoTxt 文件](docs/screenshot.png)

安装插件并将你的 todo 文件放在 Obsidian vault 中，使用 `.todotxt` 扩展名（例如，`TODO.todotxt`）。

## 附加功能

TodoTxt插件支持一些基本todotxt规范的扩展：

### 截止日期

可以通过在TODO事项的文本中包含`due:yyyy-mm-dd`来指定截止日期。插件将突出显示截止日期，并在日期接近时变为橙色，然后在截止日期被错过时变为红色。日期必须以`yyyy-mm-dd`格式指定（如果需要，可以用`0`填充月份或日期），并且不能包含任何空格。

### 待定

将来可能会实现规范的其他扩展，包括阈值日期（`t:`）和重复任务（`rec:`）。

## 如何安装

- 克隆此仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run dev` 以启动编译并进入监视模式。

手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/todotxt-plugin/` 目录下。

    cp dist/* VaultFolder/.obsidian/plugins/todotxt-plugin/

## 键盘快捷键

使用 `tab` 和 `shift-tab` 来浏览你的待办事项。

- `n` 创建一个新的待办事项
- `e` 或 `enter` 编辑当前的待办事项
- `d` 删除当前的待办事项
- `space` 切换完成状态

## TODO

- [ ] 处理parseTodo()错误
- [x] 删除一个Todo
- [x] 编辑一个Todo
- [x] 快捷键创建新的Todo
- [ ] 全局快捷键创建新的Todo
- [ ] 命令面板命令创建新的Todo
- [ ] 配置菜单设置默认的.todotxt文件
- [x] 键盘导航通过TODOs
- [x] 优先级颜色有点亮

开发过程中有用的命令：

  $ npm run dev # 通过 esbuild 将 typescript 编译到 ./dist
  $ npm run css # 通过 postcss 将 css 编译到 ./dist
  $ npm run cp # 将文件从 ./dist 复制到 Obsidian 插件目录中

## 感谢

* 感谢[todotxt](https://github.com/todotxt)的作者们。
* 感谢[SwiftoDo](https://swiftodoapp.com/)的作者们为规范文档中的截止日期和重复任务扩展做出的贡献。



