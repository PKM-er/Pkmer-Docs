---
uid: 20230329145808
title: Obsidian 插件：Outliner plugin
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230428121145
public: yes
---

# Obsidian 插件：Outliner plugin

为 Obsidian 的大纲添加快捷操作，像在 Workflowy 或 RoamResearch 中一样，使用快捷键调整大纲的顺序和层级变化，移动大纲上的项目。

> [!Note] 插件名片
> - 插件名称：Outliner plugin
> - 插件作者：Viacheslav Slinko
> - 插件说明：为 Obsidian 的大纲添加快捷操作
> - 插件项目地址：[点我跳转](https://github.com/vslinko/obsidian-outliner)

## 效果&特性

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Outliner plugin
3. 安装
4. 开启插件

## 使用

注意：项目符号只能用减号！星号与有序清单皆无法使用。

部份按键必须在【设定】→【编辑器】→【智慧列表】或【摺叠缩排】启用状态才能生效

| Windows/Linux  | MacOS          | 说明                                                   |
| -------------- | -------------- | ------------------------------------------------------ |
| Tab/Shift+Tab  | Tab/Shift+Tab  | 向下/向上一层；会检查层阶正确性                        |
| Ctrl+↑         | Cmd+↑          | 收起子项目（启用列表折叠功能）                         |
| Ctrl+↓         | Cmd+↓          | 展开子项目（启用列表折叠功能）                         |
| Ctrl+Shift+↑   | Cmd+Shift+↑    | 向上移动项目的位置                                     |
| Ctrl+Shift+↓   | Cmd+Shift+↓    | 向下移动项目的位置                                     |
| 退格键         | 退格键         | 光标在第一个字元时按倒退可删除当前项目（启用智能列表） |
| Enter          | Enter          | 新增同层项目（启用智能列表）                           |
| Ctrl+ 退格键   | Cmd+ 退格键    | 清除当前项目光标左侧的内容                             |
| Ctrl+A         | Cmd+A          | 第一次选当前项目，第二次提取整个列表                   |
| Ctrl+A, Delete | Ctrl+A, Delete | 删除当前项目内容                                       |
| Ctrl+D         | Cmd+D          | 預設的刪除段落按鍵，可刪除項目整行                     |
