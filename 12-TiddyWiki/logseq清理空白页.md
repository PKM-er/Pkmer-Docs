---
uid: 20240324135331
title: logseq 清理空白页
tags: []
description: logseq 清理空白日志
author: 明玥
type: other
draft: false
editable: false
modified: 
---

# logseq 清理空白页

[Zacharia2/logseq-clean-empty-pages: logseq 删除所有空白页 (github.com)](https://github.com/Zacharia2/logseq-clean-empty-pages)

# Logseq Plugin: _clean-empty-pages_

![[instruction.gif]]

## 如何安装

下载此仓库 zip 文件，然后使用 logseq 的本地安装的方法安装。

PS：因搞不明白 actions 自动化，所以暂时用这种办法吧。

## 如何使用

仅注册了 PageMenuItem，删除空白日志。所以可以在页标题上又单击召出菜单使用。

## 关于开发

空白页的定义：页面中的每个块 children 长度为 0，并且这些 content=""。关于“没有任何引用，且没有任何内容”中没有任何引用，可以去掉，因为当页是空白页，引用一定是写在别的页上的链接，有没有引用无所谓，信息不回丢失，到时候再创建即可。

在 logseq 中，ctrl+shift+i 开发者模式，F5 可以刷新 logseq。并且可以使用 `pnpm run dev` 命令实时生成代码。