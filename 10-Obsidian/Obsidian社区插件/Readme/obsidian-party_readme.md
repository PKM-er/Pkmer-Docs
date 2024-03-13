---
uid: 2023080322242950
title: Obsidian 插件：Party🎉
tags: ['obsidian插件', 'readme']
description: Obsidian上的party.js实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Party🎉

> [!Note] 插件名片
> - 插件名称：Party🎉
> - 插件作者：Shap Po
> - 插件说明：Obsidian 上的 party.js 实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/shap-po/obsidian-party)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-party)

## 概述

Obsidian 上的 party.js 实现。在您的笔记中创建五彩纸屑、火花，甚至自定义效果！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/shap-po/obsidian-party/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-party]] 插件的自述翻译

<h1 align="center">
    <img src="https://raw.githubusercontent.com/yiliansource/party-js/main/.github/banner.svg"/>
</h1>

<p align="center">
     &bull;
     &bull;

</p>

<p align="center">


</p>

# Party🎉

一个为 [Obsidian](https://obsidian.md) 实现的 [party.js](https://party.js.org/) 库。

# 特点

- 创建五彩纸屑和闪光效果

<img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/confetti.gif" width="40%"/> <img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/sparkles.gif" width="40%"/>

- 为复选框添加效果（还支持 dataview 任务和任务插件）

<img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/checkbox.gif" width="40%"/> <img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/snowflakes.gif" width="40%"/>

- 大量自定义选项

<img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/customization.png" width="40%"/>

- 自定义形状

<img src="https://raw.githubusercontent.com/shap-po/obsidian-party/master/images/custom-shapes.png" width="40%"/>

- Kanban 兼容性
- 还有什么你想要的？（我愿意听取建议！）

# 安装

在 Obsidian 插件列表中搜索 "Party🎉"。

## 手动安装

1. 前往 [Releases](https://github.com/shap-po/obsidian-party/releases) 下载最新版本
2. 在 Obsidian 设置中启用插件
3. 将 zip 文件的内容解压到 Obsidian 插件文件夹中
4. 你应该有一个名为 "obsidian-party" 的文件夹，其中包含 "main.js" 和 "manifest.json" 文件
5. 重新启动 Obsidian 并在插件列表中启用该插件

## 手动构建

1. 克隆代码库
2. 运行 `npm i` 或 `yarn` 安装依赖
3. 运行 `npm run dev` 构建插件

# 例子

## 复选框效果

1. 打开插件设置
2. 选择效果类型
3. 享受！

自定义元素/ API

为元素添加 `confetti` 或 `sparkles` 类，或者利用 [party模块](https://party.js.org/docs) 的所有功能，可以通过 `window.party` 访问！

此外，最好不要滥用粒子，因为这可能会导致性能问题。

<button class="confetti">点击我！</button>

（如果您启用了此插件，点击此按钮将会发射彩带）

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
