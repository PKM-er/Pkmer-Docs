---
uid: 20230803231105
title: Obsidian 插件：MetaEdit
tags: ['编辑工具', '效率', 'obsidian插件', 'readme']
description: 帮你快捷管理 meta信息，你可以为meta 信息项设置可选项。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232543
---

# Obsidian 插件：MetaEdit

> [!Note] 插件名片
> - 插件名称：MetaEdit
> - 插件作者：Christian B. B. Houmann
> - 插件说明：帮你快捷管理 meta 信息，你可以为 meta 信息项设置可选项。
> - 插件分类：[' 编辑工具 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chhoumann/MetaEdit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metaedit)

## 概述

帮你快捷管理 meta 信息，你可以为 meta 信息项设置可选项。

![MetaEdit](https://cdn.pkmer.cn/covers/metaedit.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chhoumann/MetaEdit/master/README.md)
>

---

## Readme(翻译）

下面是 [[metaedit]] 插件的自述翻译

# MetaEdit for Obsidian

![v554FnTthq](https://user-images.githubusercontent.com/29108628/118363633-9933de80-b595-11eb-9603-31a3be0e0ccc.gif)

## 特点

- 轻松添加或更新 Yaml 属性和 Dataview 字段
- 忽略属性以将其从菜单中隐藏
- 自动属性具有可通过建议器选择的可自定义的预定义值
- 多值模式允许您从值中检测和向量化/创建数组
- 进度属性自动更新属性/字段
  - 适用于总任务、已完成任务和未完成任务计数。将任务标记为已完成（从任何地方），文件将更新为新计数。
- 在 YAML 和 Dataview 之间转换属性
- 轻松删除属性
- 在从看板板上的车道更改时自动更新链接到的文件中的属性
- 通过文件菜单编辑元数据
- 编辑标签中的最后一个值 - 也适用于 [Obsidian Tracker](https://github.com/pyrochlore/obsidian-tracker)。
- 在其他插件和 Templater 模板中使用的 API。

## 安装

此插件位于 Obsidian 的社区插件浏览器中。搜索 MetaEdit，然后您可以从那里安装它。

### 手动安装

1. 前往 [Releases](https://github.com/chhoumann/MetaEdit/releases) 并下载最新版本的 ZIP 文件。
2. 将该 ZIP 文件解压到 Obsidian 插件文件夹中。如果您不知道该文件夹的位置，可以在 Obsidian 中进入 `Community Plugins`。在 `Installed Plugins` 右侧有一个文件夹图标。点击它即可打开插件文件夹。
3. 将 ZIP 文件的内容解压到该文件夹中。
4. 现在，您应该在插件文件夹中有一个名为 'metaedit' 的文件夹，其中包含一个 `main.js` 文件、一个 `manifest.json` 文件和一个 `styles.css` 文件。

<https://user-images.githubusercontent.com/29108628/119513092-3223e000-bd74-11eb-9060-3e0cae4dbef3.mp4>

## 指南

### 看板助手指南

<https://user-images.githubusercontent.com/29108628/121333246-ebf48200-c918-11eb-889b-23b9a80299b2.mp4>

## API

您可以通过使用 `app.plugins.plugins["metaedit"].api` 来访问 API。

我建议使用解构的方式来使用 API，如下所示：

```js
const {autoprop} = this.app.plugins.plugins["metaedit"].api;
```

### `autoprop(propertyName: string)`

接受一个包含属性名称的字符串。在用户设置中查找该属性，并打开一个建议器，显示该属性的可能值。

返回所选的值。如果未选择任何值，或者在设置中未找到该属性，则返回 `null`。

这是一个异步函数，所以你应该使用 `await` 来调用它。

### `update(propertyName: string, propertyValue: string, file: TFile | string)`

在给定的文件中，将具有给定名称的属性更新为给定的值。

如果文件是一个字符串，则应该是文件路径。否则，可以使用 `TFile`。

这是一个异步函数，所以你应该使用 `await` 来调用它。

### `getPropertyValue(propertyName: string, file: TFile | string)`

获取给定文件中给定属性的值。

如果文件是一个字符串，则应该是文件路径。否则，可以使用 `TFile`。

这是一个异步函数，所以你应该使用 `await` 来调用它。

### API 示例

#### 新任务模板（需要 [Templater](https://github.com/SilentVoid13/Templater) 插件）

```
<%*
const {autoprop} = this.app.plugins.plugins["metaedit"].api;
_%>
#任务
完成状态:: 0
项目::
状态:: <% await autoprop("Status") %>
优先级:: <% await autoprop("Priority") %>
截止日期::

完成状态:: 0
能量::
预计时间::

总数:: 1
已完成:: 0
未完成:: 1

---

- [ ] <% tp.file.cursor() %>
```

![3EfcPLYkj6](https://user-images.githubusercontent.com/29108628/119262986-85175f00-bbdd-11eb-8073-424fe9ec93c2.gif)

#### 在 Dataview 表格中完成任务（按钮版本）

需要 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 和 [Buttons](https://github.com/shabegom/buttons/) 插件。

````````
```dataviewjs
const {update} = this.app.plugins.plugins["metaedit"].api
const {createButton} = app.plugins.plugins["buttons"]

dv.table(["Name", "Status", "Project", "Due Date", ""], dv.pages("#tasks")
    .sort(t => t["due-date"], 'desc')
    .where(t => t.status != "Completed")
    .map(t => [t.file.link, t.status, t.project, t["due-date"], 
    createButton({app, el: this.container, args: {name: "Done!"}, clickOverride: {click: update, params: ['Status', 'Completed', t.file.path]}})]))
````
````````

![CBrFA0qHr4](https://user-images.githubusercontent.com/29108628/119342641-ab003a80-bc95-11eb-8f0a-15a6ced6b36d.gif)

#### 在 Dataview 表格中完成任务（HTML 按钮版本）

需要 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件。

````dataviewjs
const {update} = this.app.plugins.plugins["metaedit"].api;
const buttonMaker = (pn, pv, fpath) => {
    const btn = this.container.createEl('button', {"text": "完成！"});
    const file = this.app.vault.getAbstractFileByPath(fpath)
    btn.addEventListener('click', async (evt) => {
        evt.preventDefault();
        await update(pn, pv, file);
    });
    return btn;
}
dv.table(["名称", "状态", "项目", "截止日期", ""], dv.pages("#tasks")
    .sort(t => t["due-date"], 'desc')
    .where(t => t.status != "已完成")
    .map(t => [t.file.link, t.status, t.project, t["due-date"], 
    buttonMaker('状态', '已完成', t.file.path)]))
```
````

![BnAVIV4XCM](https://user-images.githubusercontent.com/29108628/119342519-7d1af600-bc95-11eb-8ff8-09f19027131e.gif)

---

### 开发者信息

由 Christian B. B. Houmann 制作

Discord：Chhrriissyy#6548

Twitter：[https://twitter.com/chrisbbh](https://twitter.com/chrisbbh)

如果您有任何问题，请随时@我。

另外来自开发者：[NoteTweet：直接从Obsidian发布推文。](https://github.com/chhoumann/notetweet_obsidian)
