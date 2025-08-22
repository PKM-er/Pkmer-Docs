---
uid: 7174
title: Bases用例：使用Base数据库追踪项目状态
tags: [obsidian, bases]
description: Bases用例：使用Base数据库追踪项目状态
author: Moy
type: other
draft: false
editable: false
modified: 20250822113500
forum_url: https://forum.pkmer.net/t/6507
---

# Bases用例：使用Base数据库追踪项目状态

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: Moy
> - 原始链接: [Bases用例：使用Base数据库追踪项目状态](https://forum.pkmer.net/t/6507)

---

这是一个用于追踪项目进度，或者进行任务管理的基础数据库模板。
你可以在这个基础上，将它调整成适合自己的结构。

示例：
![250819_Bases用例：使用Base数据库追踪项目状态-img-250819_132454.webp](https://cdn.pkmer.cn/original/1X/d52584dbf7ad976bd1595cd5abe9c98d02252884.webp)

基本上来说，这个 Base 有三种类型的属性：
1. 🟥 红色的「数据来源」，这些直接对应笔记属性，比如 Status 状态、Progress 进度（下文会专门说明）
2. 🟩 绿色的「显示用数据」，它会将数据转成更容易阅读的形式，例如 Emoji 图标、进度条图形，又或者是根据剩余天数组合成的显示文本
3. 🟦 蓝色的「排序用数据」，将数据按照规则转成数字，用来排序

你可以在这个基础上，添加不同的筛选条件创建自己的视图，或者修改属性来满足自己的笔记格式。

![250819_Bases用例：使用Base数据库追踪项目状态-img-250819_134147.webp](https://cdn.pkmer.cn/original/1X/0c47157cc3a36c40289080071c676bf789d6c40a.webp)
*例如添加图片并使用 Card View 来显示成画廊*

## 基础数据
以下是一个基础的项目属性：

![250819_Bases用例：使用Base数据库追踪项目状态-img-250819_132827.webp](https://cdn.pkmer.cn/original/1X/63aae86b0acd307519d27f99ae2aa5daad86095d.webp)

```yaml
---
status: In Progress
passion: 5
deadline: 2025-08-19T12:51:00
progress: 60
---

```

`status` （text）代表当前状态，根据不同的状态，会显示不同的图标。**可用于排序**。

默认的可选项：
- To Do
- In Progress
- Focus
- On Hold
- Cancelled
- Completed

*（你可以改成自己的状态选项，在 base 文件中批量替换文本即可）*

`passion` （number） 是从 1~5 的数字，代表你的热情，也可以转换成优先级。

`progress` （number） 是 0~100 的数字，代表当前进度，会自动转换成进度条图形。

`deadline` （date） 是截止日期，会自动转换成带有不同指示灯图标的动态文本，指示剩余天数。**可用于排序**。

`status` 是最核心的数据，只有填写这个属性的笔记才会被视作一个 Project。
其他的（例如 `passion`）都是可选项，按需使用即可。

## 说明
这个模板提供了一些 Base 的使用技巧参考，例如：
- 用 `if()` 来根据属性的不同数值，显示成不同的文本
- 通过将文本属性转换成数字，来按自己的需要进行排序
- 动态地将日期根据条件转换成不同的显示文本

希望能给你的 Base 带来启发。

### 技巧：嵌入图片
使用 `file.embeds[0]` 可以获取到笔记中的第一个嵌入文件，可以创建成一个公式并作为 Card 视图的图像数据源，从而实现「将第一张图片作为封面」的效果。

### 技巧：不同视图
你可以使用 `` 来直接显示正在进行中的工程视图。

所有的 View 都可以用这种方式来指定。

## Base 文件

```base
filters:
  and:
    - "!status.isEmpty()"
formulas:
  prog_percent: progress / 100
  prog_text: if(formula.prog_percent > 0, (formula.prog_percent * 100).round(), "0") + "%"
  prog_bar: if(formula.prog_percent * 10 > 0, "▰".repeat (number(formula.prog_percent * 10))) + if((formula.prog_percent * 10).floor() < 10, "▱▱▱▱▱▱▱▱▱▱".slice( 0, 10 - (formula.prog_percent * 10).floor()), "").toString()
  lucide-icon: if(status=="In Progress", "arrow-right".icon(), if(status=="Focus", "flame".icon(), if(status=="On Hold", "pause".icon(), "")))
  prog: formula.prog_bar
  sortByStatus: |-
    number(
    if(status=="In Progress", 4, 
    if(status=="Focus", 5, 
    if(status=="To Do", 3, 
    if(status=="On Hold", 1, 0
    )))))
  dead_icon: if(date(deadline) < today(), "skull".icon(), "")
  titleLink: link(file, if(title, title, file.basename))
  TillDDL: number((date(deadline)-today()).days)
  statusOfDDL: |-
    if(formula["TillDDL"].isEmpty(),"❔ None", 
    if(formula["TillDDL"]>= 15, "🟠 Long Term", 
    if(formula["TillDDL"] < 1 && formula["TillDDL"] >= 0, "🛑 Due Today", 
      (
       if(formula["TillDDL"]< 0, "🔴 Overdue ",
       if(formula["TillDDL"]<= 5, "🟡 Only ", "🟢 Still "))
      ) + (date(deadline)-today())
    )))
  statusAsEmoji: |-
    if(status=="In Progress", "▶️", if(status=="Focus", "🔥", 
    if(status=="To Do", "🚩", 
    if(status=="Cancelled", "❌", if(status=="On Hold", "📚", ""
    )))))
  titleAsLink: link(file, if(icon, icon+" ", "")+title)
  passionText: if(passion== 5, "😤SUPER HIGH", if(passion==4, "😄HIGH", if(passion==3, "🙂NORMAL", if(passion==2, "🤔LOW", if(passion==1, "😮‍💨QUIT", "NONE")))))
  sortByDDL: if(formula["TillDDL"].isEmpty(),"5-❔ None", if(formula["TillDDL"]>= 15, "3-🟠 Long Term", if(formula["TillDDL"] <= 3 && formula["TillDDL"] >= 0, "2-🟡 Near ", (if(formula["TillDDL"]< 0, "0-🔴 Overdue ", if(formula["TillDDL"]<= 7, "2-🟡 Near ", "4-🟢 Easy "))) )))
  embededImage: file.embeds[0]
properties:
  formula.prog_text:
    displayName: prog_text
  formula.prog_percent:
    displayName: prog_percent
  formula.lucide-icon:
    displayName: Icon
  file.name:
    displayName: name
  property.type:
    displayName: type
  property.icon:
    displayName: icon
  property.deadline:
    displayName: 死线
  property.passion:
    displayName: passion
  formula.prog:
    displayName: progress
  note.status:
    displayName: Status
  formula.titleLink:
    displayName: project
  note.passion:
    displayName: passion
  note.deadline:
    displayName: DDL
  note.progress:
    displayName: ​prog
  note.icon:
    displayName: " "
  formula.titleAsLink:
    displayName: project
  formula.passionText:
    displayName: passionText
  formula.embededImage:
    displayName: embeds
views:
  - type: table
    name: All Projects
    order:
      - formula.statusAsEmoji
      - status
      - formula.titleLink
      - passion
      - formula.passionText
      - progress
      - formula.prog
      - deadline
      - formula.statusOfDDL
      - formula.sortByDDL
      - formula.sortByStatus
    sort:
      - property: formula.sortByDDL
        direction: ASC
      - property: formula.sortByStatus
        direction: DESC
      - property: formula.TillDDL
        direction: ASC
      - property: passion
        direction: DESC
      - property: progress
        direction: DESC
    columnSize:
      formula.statusAsEmoji: 133
      note.status: 114
      formula.titleLink: 173
      formula.passionText: 133
      note.progress: 63
      formula.prog: 212
      note.deadline: 165
      formula.statusOfDDL: 169
      formula.sortByDDL: 123
      formula.sortByStatus: 140
  - type: table
    name: Ongoing
    order:
      - formula.statusAsEmoji
      - status
      - formula.titleLink
      - passion
      - formula.passionText
      - progress
      - formula.prog
      - deadline
      - formula.statusOfDDL
      - formula.sortByDDL
      - formula.sortByStatus
    sort:
      - property: formula.sortByStatus
        direction: DESC
      - property: formula.TillDDL
        direction: ASC
      - property: passion
        direction: DESC
      - property: progress
        direction: DESC
    limit: 5
    columnSize:
      formula.statusAsEmoji: 31
      note.status: 114
      formula.titleLink: 169
      formula.passionText: 133
      note.type: 124
      note.progress: 55
      formula.prog: 212
      note.deadline: 146
      formula.statusOfDDL: 154
      formula.sortByDDL: 123
      formula.sortByStatus: 140
  - type: cards
    name: Gallery
    filters:
      and:
        - progress >= 0
    order:
      - formula.titleLink
      - formula.prog
      - formula.statusAsEmoji
      - deadline
    limit: 30
    imageAspectRatio: 0.5
    image: formula.embededImage

```
