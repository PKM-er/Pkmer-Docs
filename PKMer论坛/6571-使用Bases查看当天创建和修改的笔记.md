---
uid: 7258
title: 使用Bases查看当天创建和修改的笔记
tags: [obsidian, bases]
description: 使用Bases查看当天创建和修改的笔记
author: Moy
type: other
draft: false
editable: false
modified: 20251126231650
forum_url: https://forum.pkmer.net/t/6571
---

# 使用Bases查看当天创建和修改的笔记

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: Moy
> - 原始链接: [使用Bases查看当天创建和修改的笔记](https://forum.pkmer.net/t/6571)

---


在研究了一番 Bases 之后，我决定用它来取代我的 DaiylNote 中的“今天我创建/修改/完成了哪些笔记……”的 Dataview 代码块！

效果图：
![image|518x500](https://cdn.pkmer.cn/original/1X/ffdf8cf6e3ad2edae1a8fa8e75798396911405a3.png)


## 使用方法
⬇️ 下载：[base-recentNotes.zip|attachment](upload://km4VNzzCvqk4aGBSPQsYjQci2CR.zip) (2.1 KB)

Gist: [Moy-bases-as-list-en.css](https://gist.github.com/Moyf/435fabebe1013917183daf7ff20ac212#file-base-recentnotes-base)


将这个 bases 文件放入你的库中，并且修改这三个公式属性的值：
  - `createdDate`: created_at
  - `modifiedDate`: modified_at
  - `finishedDate`: done_date

默认值是**我**使用的时间属性，假如说你使用的“修改时间”的属性为 `modified`，那么就将 `modifiedDate` 的值修改为 `modified`，如：
  - `modifiedDate`: modified

> ——关于为什么我会有自己单独的时间属性，参见：
 [为什么要自己管理时间属性（创建时间&修改时间） - 知识管理工具 / 笔记软件 - PKMer](https://forum.pkmer.net/t/topic/6641)

如果你没有特地维护创建和修改时间的 Properties，没关系，留空就好，它会回退到读取文件的 `ctime` 和 `mtime` （即系统记录的文件时间属性，不过可能不太准确，因为这会随着同步等操作而发生变动）

——然后就可以了！直接打开 base 文件或者将它嵌入任意笔记，你就能看到**今天**创建、修改、完成的笔记。

**▌DailyNote 的适配**
值得一提的是，它**专门适配了 DailyNote**：
当你把它放在任意一个 DailyNote 标准命名的笔记中时，它将使用这个笔记对应的日期来呈现结果。

比如你放进 `2025-08-25.md` 中时，它会呈现2025年8月25日当天的相关笔记，而不是实际的“今天”。

## 关于样式
这个构思精巧的列表样式并不是我原创的，它来自 [Discord 频道的 purple penguin]( https://discord.com/channels/686053708261228577/716028884885307432/1405933574149898402 )
荣耀归于原创作者！

⬇️ 下载 CSS：
（也在上面的压缩包里了）

首先，把这个 CSS Snippet 放进你的库里，启用它；
然后你有两种方式让它生效：
1. 在笔记的 `cssclasses` 中添加：`bases-ordered-list` （这针对整个笔记内的 base 生效）
2. 或者，在嵌入 base 时填写：`![[your-base-name.base|ordered-list]` （只针对这个 base 生效）

（我稍稍加了点额外调整，例如隐藏了标题栏，如果你不需要的话可以自行调整 CSS 文件）

## 进一步说明
**▌多种视图**
这个 base 文件里其实包含了6个视图：
![image|361x437](https://cdn.pkmer.cn/original/1X/9058b074a2bd40ec34c9eff7082b3e4751a7db85.png)

你可以按需要去调用：
- **All of Today**：帖子配图中的视图（默认视图），同时显示出所有类型的笔记并且附带说明栏：新建、创建
- **XXed Today**：上面那个视图的零散版，你可以通过 `` 的方式独立调用，或者把它们三个同时显示出来，获得一种更加宽松的显示效果
- **Recently XXed**：有更广的时间范围，会显示最近几天的完成或者修改笔记

**▌完成和收集**
我会给每个“完成”的笔记打上 `done` 的标记以及 `done_date` 日期，用来激励自己。
所以，如果某个笔记在今天完成了，它会额外显示出 ✅ 图标。

另外，我用不同的文件夹区分了“自己的笔记”和“外部收集（比如网络剪藏）”；
所以我在 `Type` 公式属性中额外判断了 `file.inFolder("WebClip")` ，如果是，会显示出 🗃️ 图标。
如果你用不上，不用管它。
如果你也想要这个特性，那么把 `WebClip` 修改成你的“外部资料”文件夹。
