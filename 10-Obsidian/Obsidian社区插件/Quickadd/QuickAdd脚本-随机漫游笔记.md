---
uid: 20240225172801
title: QuickAdd 脚本 - 随机漫游笔记
tags: [随机漫游, 随机性]
description: 随机打开库里的一篇笔记
author: calmwaves
type: other
draft: false
editable: false
modified: 20240225173527
---

# QuickAdd 脚本 - 随机漫游笔记

## 前言

随机笔记是很有乐趣的：很多用户发现这个功能能让他们重新想起那些已经遗忘了的想法，从而将这些想法利用起来。它还给大脑带来与我们沉迷于社交媒体相同的刺激。

随机漫游笔记是一种充满惊喜和发现的笔记方式。它不同于传统的笔记系统，没有严格的分类和结构，而是让你的笔记像一颗颗散落的种子，在心灵的原野上自由生长。它像一个神奇的指南针，指引你走向被遗忘的田野。在随机漫游的过程中，你可能会偶然发现一些意想不到的联系，这些联系或许能激发出新的灵感，或者解决一直困扰你的问题。

核心插件 [[漫游笔记]] 的漫游范围是全库，很多时候，我们并不想随机漫游到某些笔记

已经有一些插件对此进行了优化：[[advanced-random-note]]，[[improved-random-note]]，[[canvas-randomnote]]，[[smart-random-note]]

还有  [[obsidian-spotlight]] 插件，可以将随机的粒度缩小到块 a block of note

而我使用自己写的脚本，既少装个插件，而且可控性高，自由筛选，添加一些个性化功能

## 功能

1. 可按照文件夹筛选漫游范围
2. 不考虑笔记的新增/删除/修改，每一次随机都是独立的
3. 最近半个月回顾过的不要重复回顾：把回顾时间写进笔记的 properties 里  `random_review_date 📋`，然后在筛选时进行比较

## 代码

```js
module.exports = async (params) => {
    const currentDate = new Date();
    const halfMonthAgo = new Date(
        currentDate.getTime() - 15 * 24 * 60 * 60 * 1000
    );

    const files = app.vault
        .getMarkdownFiles()
        .filter((f) => f.path.startsWith("4-zettelkasten/")) //更改目标文件夹
        .filter((f) => {
            const reviewDate =
                app.metadataCache.getFileCache(f).frontmatter
                    .random_review_date;
            return (
                !reviewDate ||
                reviewDate == null ||
                new Date(reviewDate) <= halfMonthAgo
            );
        });

    if (files.length == 0) {
        new Notice("没有近半个月未漫游的笔记");
        return;
    }

    const randomIndex = Math.floor(Math.random() * files.length);
    const randomFile = files[randomIndex];
    app.workspace.openLinkText(randomFile.path, "");
    const KEY = "random_review_date";
    app.fileManager.processFrontMatter(randomFile, (fm) => {
        fm[KEY] = currentDate.toISOString().slice(0, 10);
    });
};
```
