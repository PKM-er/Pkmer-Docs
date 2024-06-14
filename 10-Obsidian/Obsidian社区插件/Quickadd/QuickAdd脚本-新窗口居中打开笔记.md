---
uid: 20240612203135
title: QuickAdd 脚本 - 新窗口打开笔记
tags: [quickadd脚本, 窗口管理, 新窗口]
description: 脚本的主要功能是打开一个新窗口并把当前活动窗口的内容显示在新窗口上，并且使新窗口保持在屏幕的最前端。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240612203323
---

# QuickAdd 脚本 - 新窗口居中打开笔记

![2024-04-20_QuickAdd脚本-新窗口打开笔记](https://cdn.pkmer.cn/images/202406141221959.gif!pkmer)


脚本的主要功能是打开一个新窗口并把当前活动窗口的内容显示在新窗口上，并且使新窗口保持在屏幕的最前端。

## QuickAdd Macro 脚本

将下述 JavaScript 代码复制并粘贴到 QuickAdd 的配置路径为 `.js` 文件：

![2024-04-20_QuickAdd脚本-新窗口打开笔记_IMG-2.png](https://cdn.pkmer.cn/images/202406122032473.png!pkmer)

```js
module.exports = async (params) => {
  // 获取笔记的基本路径
  const filePath = app.workspace.getActiveFile().path;
  // 设置默认的窗口大小
  const newWindowWidth = 450;
  const newWindowHeight = 480;
  await app.workspace.openPopoutLeaf({ width: newWindowWidth, height: newWindowHeight }).openFile(app.vault.getAbstractFileByPath(filePath));

  // 窗口置顶
  activeWindow.electronWindow.setAlwaysOnTop(true);

  // 控制界面缩放
  activeWindow.electronWindow.webContents.zoomFactor = 0.7;
};
```

## Tip：针对外部窗口样式进行修改

将下述 CSS，保存为 `.css` 文件至 Obsidian 的 `.obsidian/snippets/` 文件夹下。

> 注：该 CSS 针对外部窗口生效。

```css
.is-popout-window {
  .workspace-tabs .workspace-tab-header-container,
  .cm-gutter,
  .status-bar {
    display: none !important;
  }

  /*! 缩减笔记下方空白大小 */
  .markdown-preview-sizer,
  .cm-s-obsidian .cm-content {
    padding-bottom: 0px !important;
  }

  /*去除顶部多余白边 */
  .markdown-preview-view {
    padding-top: 0;
    padding-right: 20px;
    padding-left: 20px;
  }

  /* !阅读和编辑模式下边框间距的调整 */
  .view-content>.markdown-source-view.mod-cm6>.cm-editor>.cm-scroller {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 20px;
  }

  /* ! 直接隐藏掉关闭和最小化按钮 */
  /* 不显示最大最小化后，使那块区域可以双击及拖动 */
  .mod-windows .titlebar-button,
  .is-hidden-frameless:not(.is-fullscreen) .workspace-tabs.mod-top-right-space .workspace-tab-header-container:after {
    display: none;
  }

  /* !工具面板设置 */
  .view-header {
    /* 工具栏设置可以拖动的属性 */
    -webkit-app-region: drag;
    /* 其他样式设定 */
    background: transparent;
    /* 空余部分给Obsidian图标使用 */
    width: calc(100%);
    margin-right: 0px;
    padding: 0px 0px;
    /* justify-content:center; */
  }

  
/* 只显示个别按钮 */
  .view-header>.view-actions button:not([aria-label*="该面板处于"], [aria-label*="更多选项"]) {
    display: none;
  }

  /* 不显示路径 */
  .view-header .view-header-title-parent {
    display: none;
  }
}
```