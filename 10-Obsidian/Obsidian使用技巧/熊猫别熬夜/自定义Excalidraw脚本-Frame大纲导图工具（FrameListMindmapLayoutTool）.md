---
uid: 20260423111620
title: 自定义 Excalidraw 脚本 -Frame 大纲导图工具（FrameListMindmapLayoutTool）
tags: [Excalidraw脚本]
description: FrameListMindmapLayoutTool 是一个功能强大的 Excalidraw 脚本，专门用于管理和布局 Frame（框架）元素，将其转换为可视化的大纲导图结构。该工具提供了完整的 Frame 树形结构管理、自动布局、手动层级编号等功能。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260423111835
---

# 自定义 Excalidraw 脚本 -Frame 大纲导图工具（FrameListMindmapLayoutTool）

### 脚本介绍

**FrameListMindmapLayoutTool** 是一个功能强大的 Excalidraw 脚本，专门用于管理和布局 Frame（框架）元素，将其转换为可视化的大纲导图结构。该工具提供了完整的 Frame 树形结构管理、自动布局、手动层级编号等功能。

### 功能介绍

|    界面组件    |        功能描述        | 主要特性                                                                                                              |
| :--------: | :----------------: | ----------------------------------------------------------------------------------------------------------------- |
|  **大纲面板**  | 显示所有 Frame 的树形结构视图 | • **拖拽支持**：支持拖拽排序和层级调整<br>• **键盘支持**：支持 Tab/Shift+Tab 调整节点层级                                                      |
| **操作按钮栏**  |   位于面板顶部的全局控制按钮    | • `➕` 全部展开按钮；<br>• `➖` 全部折叠按钮<br>• `🔢` 生成序号按钮<br>• `🔤` 移除序号按钮<br>• `⚙️` 布局设置按钮<br>• `🔄` 强制刷新按钮<br>• `❌` 关闭面板按钮 |
| **节点操作菜单** |   鼠标悬停时显示的节点操作按钮   | • `🖉` 修改标题<br>• `❏` 向下复制当前节点<br>• `⧉` 向下复制当前 + 子项<br>• `+` 添加同级节点<br>• `↳` 添加子节点<br>• `×` 删除节点（包含子项）             |

### 使用场景

1. **思维导图制作**：快速创建和布局思维导图结构
2. **流程图设计**：管理复杂的流程图节点关系
3. **知识整理**：整理知识体系的结构化展示
4. **演示文稿**：创建层次分明的演示内容结构

### 效果演示

![260423_自定义Excalidraw脚本：Frame大纲导图工具（FrameListMindmapLayoutTool）](https://cdn.pkmer.cn/images/File-20260423111135557.png!pkmer)

#### 使用流程

1. **启动脚本**：在 Excalidraw 中运行脚本，打开大纲面板
2. **构建结构**：使用箭头连接 Frame 建立父子关系
3. **自动布局**：点击刷新按钮自动排列 Frame
4. **编辑管理**：通过大纲面板进行节点操作
5. **编号整理**：使用序号功能为节点添加层级编号

### 安装链接

复制下述代码，粘贴到 md 空白文档，阅读模式下会显示为按钮，点击安装即可。

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/FrameListMindmapLayoutTool.md
```
````
