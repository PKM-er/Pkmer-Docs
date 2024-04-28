---
uid: 20240417152147
title: Obsidian 样式 - 多彩便笺背景
tags:
  - 多彩便笺
  - css
  - quickadd脚本
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240420155158
---

# Obsidian 样式 - 多彩便笺背景

## 效果

参考 [[QuickAdd脚本-双语文档的中英文视图切换显示]] 的方法，用 cssclasses+quickadd 来控制笔记样式，采用 Obsidian 自带的 cssclasses 属性，设置对应 Snippets，通过 QuickAdd 脚本及 Commander 插件设置按钮，实现以下效果，模拟切换笔记背景的便笺：

![2024-04-16_Obsidian样式-多彩便笺背景_IMG-1](https://cdn.pkmer.cn/images/202404171534290.gif!pkmer)![2024-04-16_Obsidian样式-多彩便笺背景_IMG-2](https://cdn.pkmer.cn/images/202404171534291.jpg!pkmer)

## QuickAdd Macro 脚本

```js
const activeFile = app.workspace.getActiveFile();
const choices = ["默认视图", "YellowNote", "GreenNote", "PinkNote","PurpleNote","BlueNote","BlackNote"];
module.exports = async (params) => {
  const quickaddApi = app.plugins.plugins.quickadd.api;
  const choice = await quickaddApi.suggester(choices, choices);

  await app.fileManager.processFrontMatter(activeFile, fm => {
    if (!fm["cssclasses"]) fm["cssclasses"] = [];
    // 清除所有选项
    fm["cssclasses"] = fm["cssclasses"].filter(item => !choices.includes(item));

    // 根据选择的选项添加对应的视图
    for (let i = 1; i < choices.length; i++) {
      if (choice === choices[i]) {
        fm["cssclasses"].push(choices[i]);
        return;
      }
    }
  });
  console.log("运行完成");
};
```

## Snippets CSS

```css
.view-content:has(> .YellowNote) {
  --background-primary: rgb(255, 247, 209) !important;
}

.view-content:has(> .GreenNote) {
  --background-primary: rgb(228, 249, 224);
}

.view-content:has(> .PinkNote) {
  --background-primary: rgb(255, 228, 241);
}

.view-content:has(> .PurpleNote) {
  --background-primary: rgb(242, 230, 255);
}

.view-content:has(> .BlueNote) {
  --background-primary: rgb(226, 241, 255);
}

.view-content:has(> .BlackNote) {
  --background-primary: rgb(105, 105, 105);
  --text-faint: rgb(255, 255, 255);
  --text-normal: rgb(255, 255, 255);
  --checklist-done-color: rgb(255, 255, 255);
}
```

## Reference

- [[QuickAdd脚本-双语文档的中英文视图切换显示]]

## 拓展：Obsidian-colorful-sticky-notes

基于此灵感，做了一个 [Obsidian 多彩便笺小库](https://github.com/PandaNocturne/Obsidian-colorful-sticky-notes)，可以体验一下：

![2024-04-16_Obsidian样式-多彩便笺背景_IMG-3](https://cdn.pkmer.cn/images/202404201550475.gif!pkmer)