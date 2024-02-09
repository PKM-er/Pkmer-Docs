---
uid: 20231225112802
title: Obsidian 插件：Tag buddy 简单易用的添加标签汇总、编辑工具
tags: ['obsidian插件', '标签', '统计']
description: Obsidian 插件：Tag buddy 简单易用的添加标签汇总、编辑工具
author: Chenghuang
type: other
draft: false
editable: false
modified: 20231225113550
---

# Obsidian 插件：Tag buddy 简单易用的添加标签汇总、编辑工具

## 概述

此插件可在在阅读模式下添加、编辑和移除标签，或是在阅读和编辑模式下复制、移动或编辑添加了标签的块。其他标签汇总方式，可见笔者 [一网打尽，带你了解 Obsidian 中标签汇总方案]( https://pkmer.cn/show/20231127165619 )。

> [!note] 插件名片
> - 插件名称：Obsidian buddy
> - 插件作者：moremeyou
> - 插件说明：此插件可在阅读模式下添加、编辑和移除标签，或是在阅读和编辑模式下复制、移动或编辑添加了标签的块
> - 插件项目地址：[点我跳转](https://github.com/moremeyou/Obsidian-Tag-Buddy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-buddy)

## 用例

> [!example]+ 用例 1：在阅读模式下添加标签
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图1.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE1.gif!pkmer)
> 在阅读模式下，`CTRL/CMD并单击鼠标右键` 为文本块/区域添加标签。在移动端则是 `按三下`。最近添加的的标签会在浮动菜单中自动显示以供选择，[[#设置|在设置中]] 锁定最近标签列表，可有效创建标签收藏夹 ^72dff4

> [!example]+ 用例 2：在阅读模式下移除标签
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图2.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE2.gif!pkmer)
> 在阅读模式下，`鼠标左键单击标签` 可移除当前笔记、嵌入笔记/块或由插件生成的标签汇总块中的标签。在移动端则是 `按两下`。`CTRL/CMD并单击鼠标左键` 可启动软件自带标签搜索。[[#设置|可在插件设置中自定义]] ^a1d8c9

> [!example]+ 用例 3：在阅读模式下编辑嵌套标签
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图3.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE3.gif!pkmer)
> 如果存在嵌套标签，插件会按顺序依次移除标签，[[#设置|可在插件设置中自定义]] ^26621c

> [!example]+ 用例 4：在阅读模式下将标签转换为文本
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图4.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE4.gif!pkmer)
> 在阅读模式下，`ALT/OPT并鼠标左键单击标签` 可将标签转换为文本，在手机端则是 `长按`，[[#设置|可在插件设置中自定义]] ^5c80c6

> [!example]+ 用例 5：在标签汇总中添加/编辑标签
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图5.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE5.gif!pkmer)
> 可在当前笔记、嵌入内容以及标签汇总块中编辑标签，标签汇总块语法如下：
>
>> [!example]+ **语法示例**
>>
>> ````
>> ```tag-summary
>> tags: #标签1 #标签2 // 会输出包含标签1或标签2的全部结果
>> include: #标签3 #标签4 // 输出必须包括以上列出的所有标签（可选项）
>> exclude: #标签5 #标签6 // 输出必须排除以上列出的所有标签（可选项）
>> max: n // 限制结果的数量（可选项）
>> ```
>> ````
>
> 感谢 `tag summary` 插件为汇总功能提供初始代码

> [!example]+ 用例 6：复制/移除添加了标签的段落
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图6.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE6.gif!pkmer)
> - `复制按钮`：将段落复制到剪贴板
> - `移除标签按钮`：同时从原文段落和汇总页中移除查询到的标签
> 	- 手滑了？点击弹出提醒可轻松跳转到原笔记
> [[#设置|这些按钮可以在插件设置中启用]] ^013f55

> [!example]+ 用例 7： 复制/移动标签段落到当前笔记标题下
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图7.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE7.gif!pkmer)
> 粘贴到当前笔记指定标题的按钮：将带反向链接段落粘贴到当前笔记中的标题区域。也可通过 `CTRL/CMD并单击鼠标左键` 来移除标记，从而有效地将段落粘贴到章节中。这些按钮在你在标签汇总块中添加如下代码就会出现（最多三处），[[#设置|可在插件设置中自定义]]
>
>> [!example]+ **语法示例**
>>
>> ````
>> ```tag-summary
>> tags: #标签1 #标签2 
>> sections: 小标题1, 小标题2 （小标题必须存在于当前笔记中）
>> ```
>> ````
>
> 感谢 `QuickAdd` 插件提供在标题下插入内容的逻辑 ^69fd60

> [!example] 用例 8： 创建标签汇总笔记
> ![Obsidian 插件：tag buddy 在阅读模式下轻松添加、编辑或移除标签 图8.gif](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%EF%BC%9Atag%20buddy%20%E5%9C%A8%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BD%BB%E6%9D%BE%E6%B7%BB%E5%8A%A0%E3%80%81%E7%BC%96%E8%BE%91%E6%88%96%E7%A7%BB%E9%99%A4%E6%A0%87%E7%AD%BE%20%E5%9B%BE8.gif!pkmer)
>`汇总按钮`：利用标签汇总块自带的 `include`、`exclude` 和 `max` 参数，可用添加了标签的内容自定义和创建新笔记。复制汇总块、在新笔记中生成汇总笔记、在当前笔记中生成汇总笔记。[[#设置|这些按钮可以在插件设置中启用]] ^969d47

## 设置

由于软件设置页面为英文，为方便比对，故 `选项文本` 首先列出原文以便比照

|选项文本|打开时|关闭时|
|--------------|--------------|--------------|
|`Override native tag search on click`: 覆盖鼠标左键单击标签的原生标签搜索功能 [[#^a1d8c9\|见用例2]]|启用 `鼠标左键单击标签` 为在阅读模式下移除标签|恢复 `鼠标左键单击标签` 为搜索标签，启用 `CTRL/CMD并鼠标左键单击标签` 在阅读模式下移除标签。|
|`Convert tag to text (remove #)`：标签转文本 [[#^5c80c6\|见用例4]]|启用 `ALT/OPT并鼠标左键单击标签` 在阅读模式下将标签转为普通文本|启用 `ALT/OPT并鼠标左键单击标签` 为搜索标签|
|`Remove nested tags first`：优先移除子标签 [[#^26621c\|见用例3]]|启用 `SHIFT并鼠标左键单击标签` 优先移除子标签|
|`Override native mobile tag search`：覆盖移动端原生标签搜索|恢复 `手指单击标签` 进行手机本地标签搜索，并启用 `手指长按标签` 移除标签|
|`Show mobile notices`：显示弹出提醒 [[#^013f55\|见用例6]]|在移除添加了标签的段落时，会弹出通知，点击可前往原文位置||
|`Show tag summary paragraph buttons`： 在汇总页的段落下显示功能按钮 [[#^013f55\|见用例6]]|启用 `复制段落`、`移除原文段落和汇总页中的标签` 两个功能按钮||
|`Show tag summary buttons`：在汇总页下显示功能按钮 [[#^969d47\|见用例8]]|启用 `刷新`、`复制汇总块`、`在新笔记中生成汇总笔记`、`在当前笔记中生成汇总笔记` 四个功能按钮||
|`Copy to section prefix`：[[#^69fd60\|见用例7]]|可自定义粘贴至某笔记的前缀||
|`Recent tags`：最近标签 [[#^72dff4\|见用例1]]|最近由 `tag buddy` 添加的标签会储存在这里，它们会在下次添加时优先显示||
|`Lock recent tags`：锁定最近标签 [[#^72dff4\|见用例1]]|创建标签收藏夹||

## 注意事项

- 切换到编辑模式可撤销当前笔记中的任何编辑
	- 嵌入/汇总页中的编辑无法撤销（除非该笔记是在标签页中打开的），正在考虑在弹出界面增加撤销按钮
- 设计宗旨：`tag buddy` 旨在帮助你在回顾/批注/处理笔记过程中维持既定的思维状态。比方说，我不想只是为了移除 " 书/高亮/新 " 标签中的 " 新 "，亦或是想在某处快速添加 " 待办事项 " 标签的时候非要切换到编辑模式。此外，我认为在 Obsidian 中添加/编辑/移除标签已经非常容易，因此我并不计划将 `tag buddy` 的这些功能引入编辑模式。不过，如果您有这方面的需要，请告诉我

> [!warning] 已知限制：
> - 目前暂不支持在某些其他插件或未知视图类型中编辑标签。如果您有这方面的需要，请告诉我
> - 勾选框看似在汇总中生效，但实际上源文件并不会发生更改。这一功能可能超出了本插件的范围。但我会添加警告信息
> - 同一篇笔记中涉及相同标签的两个（或多个）标签汇总或嵌入将不会同步，我已经添加了警告信息。解决方法：用标签汇总下方的**刷新按钮**手动更新