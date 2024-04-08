---
uid: 20240316115055
title: QuickAdd 脚本：刷新当前页面
tags: [quickadd脚本, 刷新, quickadd]
description: 刷新当前Obsidian页面
author: ProudBenzene,calmwaves
type: other
draft: false
editable: false
modified: 20240320183744
---

# QuickAdd 脚本：刷新当前页面

## 需求

由于 Obsidian 的缓存机制等问题，有些笔记中的改变可能不会立即生效，而是在页面重新加载后才会体现。因此为 Obsidian 提供一个刷新按钮可以大大方便某些情况下的笔记编辑。

## 脚本

能实现该功能的脚本有两种：

### 非代码型

这种脚本的原理简单粗暴，即先关闭标签页，再将其迅速打开，从而达到刷新效果：

> - 关闭当前标签页
> - Wait for 300ms
> - 重新打开标签页

### 代码型

这个脚本由 calmwaves 提供，通过 JavaScript 脚本使 Obsidian 重新加载当前页面：

```JavaScript
module.exports =  async (params) => {
    await app.workspace.activeLeaf.rebuildView()
  }
```

> [!tip] 使用方法
> QuickAdd 脚本的使用方法，参见 [Obsidian 插件：QuickAdd 自动化操作的编辑器](https://pkmer.cn/show/20230508001129) 中的 Macro 部分。