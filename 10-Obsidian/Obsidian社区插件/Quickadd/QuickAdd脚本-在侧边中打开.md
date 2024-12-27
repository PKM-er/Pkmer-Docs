---
uid: 20241227181944
title: QuickAdd 脚本 - 在侧边中打开
tags: [quickadd脚本, 窗口管理]
description: 模仿浏览器的“在边栏中打开”的选项，是笔记在侧边栏中打开并固定。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241227182041
---

# QuickAdd 脚本 - 在侧边中打开

模仿浏览器的“在边栏中打开”的选项，是笔记在侧边栏中打开并固定。

![241227_QuickAdd脚本：在侧边打开.md](https://cdn.pkmer.cn/images/202412271819910.png!pkmer)

![241227_QuickAdd脚本：在侧边打开.md](https://cdn.pkmer.cn/images/202412271819700.gif)

## QuickAdd Capture

### 侧边打开

````
```js quickadd
const activefile = app.workspace.getActiveFile();
const filePath = app.vault.getAbstractFileByPath(activefile.path)
app.workspace.getLeaf('split', 'vertical').openFile(filePath);

const comm = str => app.commands.executeCommandById(str);

const setPanel = percent => {
    let right = document.querySelector('.workspace-split.mod-vertical.mod-root').lastElementChild;
    right.previousSibling.style.flexGrow = percent;
    right.style.flexGrow = 100 - percent;
};

setTimeout(() => {
    setPanel(75); // 50、80
    comm('editor:focus-right');
    comm("workspace:toggle-pin");
}, 50);

```
````

### 侧边栏打开

````
```js quickadd
const activefile = app.workspace.getActiveFile();
const filePath = app.vault.getAbstractFileByPath(activefile.path)
const rightSidebar = app.workspace.rightSplit;
const leaf = rightSidebar.getLeaf(true);
leaf.openFile(filePath);

const comm = str => app.commands.executeCommandById(str);

setTimeout(() => {
    comm("workspace:toggle-pin");
}, 50);
```
````

## Reference

- [【已解决】Obsidian 左右筆記並列佈局快捷調整左右 layout 比例 (不用滑鼠拖曳) - 3，来自 PlayerMiller - 疑问解答 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/31477/3)
