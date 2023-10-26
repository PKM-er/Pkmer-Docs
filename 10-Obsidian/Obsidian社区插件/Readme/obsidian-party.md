---
uid: 20230822234211
title: Obsidian 插件：Party 在你完成任务的时候来些喝彩
tags: [obsidian插件]
description: Obsidian 插件：Party 在你完成任务的时候来些喝彩，Obsidian上的party.js实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！
author: OS
type: basic
draft: false
editable: false
modified: 20230918173522
---

# Obsidian 插件：Party 在你完成任务的时候来些喝彩

## 概述

Obsidian 上的 party.js 实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！

> [!Note] 插件名片
> - 插件名称：Party🎉
> - 插件作者：Shap Po
> - 插件说明：Obsidian 上的 party.js 实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/shap-po/obsidian-party)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-party)

## 效果&特点

- 创建五彩纸屑和闪光效果
- 为复选框添加效果（还支持 dataview 任务和任务插件）
- 自定义形状
- 大量自定义选项
- Kanban 兼容性

![Obsidian 插件：Party 让你完成任务的时候有点喝彩](https://cdn.pkmer.cn/images/234.gif!pkmer)

![Obsidian 插件：Party 让你完成任务的时候有点喝彩](https://cdn.pkmer.cn/images/234.gif!pkmer)

## 使用

- 支持多种位置触发
	- 完成任务，点击 checkbox 复选框时
	- 支持 task 插件
	- 支持 dataview 插件
	- 支持 看板插件
- 动画效果：你支持不同动作设定效果
	- 通过 Tyep 和 Target 的组合，你组合出不同的效果
	- 支持设置数量、速度、频率、展开等
- 形状
	- 你可以自己增加形状
	- 也可以为每个形状定义颜色
![image.png|575](https://cdn.pkmer.cn/images/20230918172608.png!pkmer)

![image.png|675](https://cdn.pkmer.cn/images/20230918172617.png!pkmer)

## DataView JS 支持

````
```dataviewjs
const buttonMaker = (text) => {
  const btn = this.container.createEl('button', {"text": text});
  btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    party.confetti(evt); // <---- 创建彩带
    party.sparkles(evt); // <---- 创建闪光
  });
  return btn;
}

dv.table(["文件", "按钮"],
	dv.pages('"Dataview"')
    .map(t => [
      t.file.link,
      buttonMaker("让我们开始派对吧！")
    ]
  )
)
```
````

## 自定义形状

任何 HTML 代码都可以用作形状。例如，您可以使用 SVG 图像作为形状。

```html
<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1"/></svg>
```

将代码放入插件设置中的“形状 HTML”字段中，给它一个名称，然后您就可以使用它了！现在您可以在效果设置的“形状”字段中选择自定义形状。
