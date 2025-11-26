---
uid: 7143
title: 关于Bases中的标签
tags: [obsidian, bases]
description: 关于Bases中的标签
author: Moy
type: other
draft: false
editable: false
modified: 20251126232418
forum_url: https://forum.pkmer.net/t/6476
---

# 关于Bases中的标签

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: Moy
> - 原始链接: [关于Bases中的标签](https://forum.pkmer.net/t/6476)

---

# 关于Bases中的标签
## 概述
Bases 中有 `tags` **标签属性**和 `file tags` **文件内标签**，本文分析了两种标签的差异以及如何应用。

## 两种标签的差异
`tags` 是更明确的属性内标签，即 Property 中的 tags 这个特定属性；
`file tags` 是这个笔记内带有的标签，包括属性标签和出现在正文中的标签。

在公式中，仅用 `tags` 获取的是「属性区的标签属性」，`file.tags` 获取到的是全文（包括属性区）的标签。

![250606_bases更新记录-img-250815_124653.webp](https://cdn.pkmer.cn/original/1X/8c2e121daadf295a5d90f80514e14ba9e536633d.webp)

下图可以看出两种标签的区别：
![250606_bases更新记录-img-250815_124844.webp](https://cdn.pkmer.cn/original/1X/57ff1c67dc534dc04baa0e24e209e4d95cbaf2fd.webp)
通常来说，笔记内标签数量会大于等于属性内标签。

而过滤器中的 `has tag` （公式中的 `file.hasTag()` 匹配的也是 ` file tags `，范围更广的那个。
只想匹配属性的话，应该用 `tags.Contains()` 函数。

> 在过滤器中填写时，应该会自动添加上 `#` 前缀。

## 公式中的标签
`file.tags.filter(value != "#task")` 才是有效的，即，`file.tags` 中的字符串均带有 `#` 前缀，而 `tags` 则是不带井号前缀的。
在进行交叉匹配时需要考虑到这点。

### 提取仅出现在正文的标签
使用 `filt.tags.filter()` 进行过滤，并且用 `slice(1)` 去掉字符开头的 `#` 来适配。

完整代码：
```js
file.tags.filter(!tags.contains(value.slice(1)))
```

如此一来可以获得「未出现在属性内，仅出现在正文」的“提及标签”：
![250606_bases更新记录-img-250815_130147.webp](https://cdn.pkmer.cn/original/1X/ded6dc50f8d8dd893c417f7377ed6b24fe51c070.webp)

## 实际应用
例如，我配合 TasksNote 插件，使用单独的「任务笔记」进行任务管理。

为了筛选出“任务笔记”，我需要明确提取带有特定属性 `tags: #task` 的笔记，但是希望忽略掉那些笔记内带有 `#task` 这种文章内标签的情况。

这个时候，使用 `file.hasTag("task")` 就会显示过多无关的结果，需要用 `tags.contains("task")` 才能精准匹配出“任务笔记”。
