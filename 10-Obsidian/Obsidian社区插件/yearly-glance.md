---
uid: 20250813083511
title: Obsidian 插件：Yearly Glance 周期性事件管理的最佳实践 - 完美支持农历
tags:
  - 日历与时间
  - 图表与可视化
  - 效率工具
  - 自定义命令
  - obsidian插件
description: 还在愁 Obsidian 怎么管理家人农历生日和各种纪念日吗？试遍了各种日历和任务插件总觉得差点意思？强烈推荐 yearly-glance 这款宝藏插件！它专为事件管理而生，拥有惊艳的年历视图和超棒的交互，最关键的是——完美支持农历。这可能就是你一直在找的那个能让 Obsidian 充满生活温度的神器。
author: 麦冬
type: other
draft: false
editable: false
modified: 20250816083511
---

# Obsidian 插件：Yearly Glance 周期性事件管理的最佳实践 - 完美支持农历

上次分享的 [[Periodic Notes：知行合一，从周期笔记开始]] 实践 OKR 目标管理的。日记里面记录待办和心情，然后周月年逐级自动汇总；

但是对于管理那些充满人情味儿的、**周期性**的日子，比如家人的生日、重要的纪念日，类似 **Google 日历**的用法，跟踪自己的生活，之前一直没有找到好的方案。

这类事件是需要周期性的自动出现在未来（比如生日我设置好出生日期，后面每年都会自动出现)；我们需要的不是一个任务，而是一个提醒，一种仪式感。特别是对于我们中国人来说，生日习惯用**农历**，这就给许多工具带来了挑战。

> [!Note] 插件名片
> - 插件名称：Yearly Glance
> - 插件作者：Moy & RavenHogWarts
> - 插件说明：一年纵览——年度事件概览，还有可自定义的管理选项哦。
> - 插件分类：[' 日历与时间 ', ' 图表与可视化 ', ' 效率工具 ', ' 自定义命令 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Moyf/yearly-glance)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yearly-glance)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Moyf/yearly-glance/master/README.md)

## 旧方案的困境

相信你可能也像我一样，走过一些弯路。市面上的插件，要么是为**待办事项**设计的，要么对农历的支持不尽人人意：

* **单纯的日历**：像 `OZ Calender`、`Chronology`,不支持周期性事件管理，农历支持不好
* **任务型日历**：像 `Obsidian-Tasks-Calendar` 或 `BigCalendar`，它们很棒，但核心是 Task。将生日看作任务，每年手动创建或依赖复杂的循环规则，总感觉 `文不对题`。
* **功能强大的通用日历**：比如 `FullCalendar`，交互和功能都非常完善，但它的定位更偏向于一个全能的日程中心，对于仅仅想管理 `纪念日` 这个单纯的需求来说，显得有些重了，而且农历支持同样不够原生。
* **元数据方案**：我也尝试过用 `dataview` 配合 YAML 元数据来管理，但很快就发现，为了几个日期，可能需要生成一堆 `空` 笔记，不仅污染了笔记库，查询和维护起来也相当繁琐。

寻寻觅觅，今天给我找到了 `Yearly Glance` 社区插件。分享给大家。

## 效果&特性

## 一图胜千言：快速预览

这款由大神 `Moyf` 和 `RavenHogWarts` 开发的插件，设计得实在是太通透了，交互 UI 都很赞。

 

<iframe width="100%" height="600px"  src="https://player.bilibili.com/player.html?isOutside=true&aid=115021958879194&bvid=BV1JpbYzmEUa&cid=31673812545&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

**年历视图：一览无余**

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__1](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__1.png!pkmer)

**自定义布局：随心所欲**

12x1 布局

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__2](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__2.png!pkmer)

6x2 布局

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__3](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__3.png!pkmer)

**事件管理：清晰直观**

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__4](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__4.png!pkmer)

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__5](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__5.png!pkmer)

**添加事件：简单高效**

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__6|548x712](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__6.png!pkmer)

**工作区布局：一键直达**

![obsidian 日历最佳实践 - 完美支持农历-20250727094747__7](https://cdn.pkmer.cn/images/obsidian%20%E6%97%A5%E5%8E%86%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%20-%20%E5%AE%8C%E7%BE%8E%E6%94%AF%E6%8C%81%E5%86%9C%E5%8E%86-20250727094747__7.png!pkmer)

## 亮点功能剖析

`Yearly Glance` 的交互做得非常出色，几乎没有学习成本，但其背后的功能设计却直击痛点。

* 🗓️ **年度日历视图**：一屏尽览全年日历，年度规划一目了然
* 🎉 **多事件类型**：支持节日、生日、自定义事件等
* 🎂 **生日管理**：记录年龄、生肖、星座等属性
* 🎨 **高度可定制**：多种布局与配色风格，支持 emoji
* 🖱️ **交互界面**：点击即可查看和编辑事件
* 🔍 **事件筛选**：按类型过滤、隐藏空日期
* 🌙 **农历支持**：原生支持中国农历
* 🌏 **多语言**：支持简繁中文和英文语言

## 轻量纯粹：独立的数据存储

所有事件数据都存储在插件目录下的 `.obsidian/plugins/yearly-glance/data.json` 文件中，而不是散落在你的笔记库里。它完全不会干扰你的笔记生态，保持了库的整洁和高性能。对于有数据洁癖的用户来说，这一点至关重要。

数据格式示例

```json
[
    {
        "id": "birth-a36a3e03",
        "text": "张老师生日",
        "eventDate": {
            "isoDate": "2022-04-03",
            "calendar": "LUNAR",
            "userInput": {
                "input": "2022-04-03",
                "calendar": "LUNAR"
            }
        },
        "dateArr": [
            "2025-04-30"
        ],
        "nextBirthday": "2026-05-19",
        "age": 3,
        "animal": "Rén Yīn Tiger",
        "zodiac": "Aries"
    }
]
```

## 插件地址

你可以在 Obsidian 的社区插件市场搜索 `Yearly Glance` 直接安装，也可以访问开发者的 GitHub 主页。

**GitHub 地址:** [<https://github.com/Moyf/Yearly> Glance](<https://github.com/Moyf/Yearly> Glance)

## 总结

在追求效率和知识管理的道路上，我们有时会忽略那些柔软的、感性的需求。`Yearly Glance` 恰好弥补了这一环。它没有贪多求全，而是选择在 `纪念日管理` 这个细分领域做得恰到好处。解决了困扰我的**农历**和**周期性事件管理**的难题。