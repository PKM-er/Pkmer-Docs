---
uid: 2023080322294615
title: Obsidian 插件：Workspaces Plus
tags: ['工作区', '效率', '界面相关', 'obsidian插件', 'readme']
description: 快速切换管理工作区的布局。你可以按照你不同的习惯，规划工作区。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Workspaces Plus

> [!Note] 插件名片
> - 插件名称：Workspaces Plus
> - 插件作者：NothingIsLost
> - 插件说明：快速切换管理工作区的布局。你可以按照你不同的习惯，规划工作区。
> - 插件分类：[' 工作区 ', ' 效率 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nothingislost/obsidian-workspaces-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workspaces-plus)

## 概述

快速切换管理工作区的布局。你可以按照你不同的习惯，规划工作区。

![Workspaces Plus](https://cdn.pkmer.cn/covers/workspaces-plus.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nothingislost/obsidian-workspaces-plus/master/README.md)

---

## Readme(翻译）

下面是 [[workspaces-plus]] 插件的自述翻译

# Workspaces Plus

![Artboard-2-3](https://user-images.githubusercontent.com/46250921/133352216-e0a2c9b6-070b-46f7-9a6f-d3a18f0c69b1.png)

Workspaces Plus 是一个扩展 [Obsidian](https://obsidian.md/) 中 [工作区](https://help.obsidian.md/Plugins/Workspaces) 功能的插件。

## 特点

### 工作区指示器

- 在状态栏中显示当前活动的工作区
- 单击状态栏中的工作区名称以打开工作区选择菜单
- `shift-click` 状态栏图标或工作区名称以保存工作区
<img src="https://user-images.githubusercontent.com/46250921/133325073-af2d58ec-e8a1-48fb-a48c-792b348235fd.png" width="350">

### 工作区选择器

- 切换、删除、重命名和创建新的工作区
<img src="https://user-images.githubusercontent.com/46250921/133325287-94a36543-f0ee-4956-9ad5-91c572e5b3c4.png" width="350">

### 工作区切换器模态框

- 使用可分配的热键打开
- 切换、删除、重命名和创建新的工作区
<img src="https://user-images.githubusercontent.com/46250921/133325396-bc429aa5-696f-4e44-8e78-4a9bd504867e.png" width="400">

### 快捷键

- 打开工作区加强切换器模态框
- 通过名称打开特定的工作区

### 插件选项

- 切换工作区选择器的键盘快捷键开/关
- 切换工作区删除确认开/关
- 将默认工作区切换行为设置为在切换时始终保存

### 主题选项

- Workspaces Plus 在 HTML 文档的 body 元素上添加了一个数据属性，可以用于设置特定工作区的样式
  - 数据属性是 body[data-workspace-name="My Workspace"]
  - 该属性将在加载任何新工作区时更新

### 工作区覆盖

- 使用模板变量覆盖工作区中的页面的能力。

如何使用

在设置菜单中启用插件后，您会发现工作区图标已添加到界面右下角的状态栏中。如果您已经在 Obsidian 中使用工作区，您会注意到您当前活动工作区的名称位于该图标旁边。

> :warning: **必须激活 Obsidian 的核心工作区插件才能使 Workspaces Plus 正常工作**

### 创建工作区

您可以通过工作区选择器或工作区切换器模态框以相同的工作流程创建工作区。

1. 在输入框中输入您的新工作区名称
2. 使用 `shift-enter` 创建新的工作区

重命名工作区

通过单击工作区名称旁边的铅笔图标，可以从选择器或模态框中重命名工作区。

### 删除工作区

可以通过在工作区名称旁边使用垃圾桶图标或在菜单中选择工作区时按下快捷键 `shift-delete` 来删除工作区。

### 打开工作区

1. 通过快捷键或点击状态栏中的工作区图标或名称来打开工作区切换器。
2. 您可以通过鼠标点击或使用键盘上的上/下箭头导航到工作区后按下回车键来打开工作区。

### 保存工作区

- 默认情况下，切换工作区时不会自动保存
- 您可以通过在状态栏中的工作区图标或名称上进行 `shift-click` 来保存工作区
- 无论是在切换菜单中，您都可以使用 `shift-enter` 来保存当前活动的工作区，或者使用 `alt-enter` 来保存当前活动的工作区并切换到您选择的新工作区
- 在插件选项菜单中（位于 Obsidian 的设置中），您可以切换一个设置，该设置将在切换时自动保存活动的工作区

### 在工作区中覆盖页面

- 在设置中向下滚动并打开要修改的工作区。
- 在页面 ID 旁边的文本框中输入要加载的字符串，其中包含模板变量。
  - 示例：1 Journal/{{date:YYYY}}/{{date:YYYY-MM}}/{{date:YYYY-MM-DD}}.md
- 切换到工作区，页面将使用覆盖中的值加载，并替换变量。

## 额外

<details>
  <summary>紧凑的工作区选择器CSS代码片段</summary>


![image](https://user-images.githubusercontent.com/46250921/135287222-ada674cf-e8e9-4bbf-9d99-07c9892b8e76.png)

  ```css
.workspaces-plus-modal.quick-switch {
  padding: 0px;
  border-radius: 5px;
  min-width: 13em;
}

.workspaces-plus-moda.quick-switch .workspace-item {
  padding-left: 2em;
  padding-right: 4em;
  font-size: 0.9em;
}

.workspaces-plus-modal.quick-switch .prompt-results {
  padding-top: 0;
}

.workspaces-plus-modal.quick-switch .prompt-results::-webkit-scrollbar {
  display: none;
}

.workspaces-plus-modal.quick-switch .workspace-results {
  padding: 0px;
}

.workspaces-plus-modal.quick-switch .workspace-item.is-selected {
  border-radius: 0px !important;
}

.workspaces-plus-modal.quick-switch input.prompt-input {
  font-size: 0.9em;
  padding: 0px 1em;
  border-top-left-radius: 5px !important;
  border-top-right-radius: 5px !important;
  border-radius: 0px;
  border: none !important;
  border-bottom: 1px solid var(--background-modifier-border) !important;
}

.workspaces-plus-modal.quick-switch input.prompt-input:focus {
  box-shadow: none;
  border: none !important;
  border-bottom: 1px solid var(--background-modifier-border) !important;
}

.workspaces-plus-modal.quick-switch .delete-workspace {
  right: 0.7em !important;
}

.workspaces-plus-modal.quick-switch .rename-workspace {
  right: 2em !important;
}
```

</details>

## 安装

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-workspaces-plus/` 文件夹中。
- 通过 Obsidian Community Plugins 浏览器安装。

## 反馈

通过 [github](https://github.com/nothingislost/obsidian-workspaces-plus/issues)，使用我们的 [Workspaces Plus反馈调查](https://airtable.com/shrETC7GS1MOYSTAI)，或在 Discord 上标记作者来分享反馈、问题和想法！

## 鸣谢

- 该插件由 [Johnny ✨](https://github.com/jsmorabito) 和 [Nothingislost](https://github.com/nothingislost) 开发。
- 工作区选择器和模态框基于 [Kenset](https://github.com/kenset) 的 [Obsidian Theme Picker](https://github.com/kenset/obsidian-theme-picker)。

## 更新日志

- 0.4.17 - Beta
  - 修复了使用制表符的工作区无法正确解析覆盖的问题。
  - 添加了如何在模板文件和路径中使用覆盖的详细信息。
- 0.3.1
  - 修复了工作区重命名逻辑中的错误，该错误导致无法重新分配快捷键。
- 0.3.0
  - 添加了加载特定工作区的快捷键支持
    - 此功能将为您的保险库中的每个工作区创建一个命令，然后可以将其绑定到快捷键
    - 此功能支持在保持关联快捷键的同时重命名工作区
    - 您可以将这些工作区加载命令添加到 cMenu 中，工作区重命名也将自动更新 cMenu 按钮
  - 在 HTML 文档的 body 上添加了一个数据属性，指示当前活动的工作区名称
    - 选择器如下：body[data-workspace-name="My Workspace"]



