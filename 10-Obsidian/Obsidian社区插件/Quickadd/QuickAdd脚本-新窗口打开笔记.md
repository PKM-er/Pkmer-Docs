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

# QuickAdd 脚本 - 新窗口打开笔记

![tmp1718195414477_2024-04-20_QuickAdd脚本-新窗口打开笔记_IMG-1.gif](https://cdn.pkmer.cn/images/202406122032991.gif!pkmer)

脚本的主要功能是打开一个新窗口并把当前活动窗口的内容显示在新窗口上，并且使新窗口保持在屏幕的最前端。

## QuickAdd Macro 脚本

将下述 JavaScript 代码复制并粘贴到 QuickAdd 的配置路径为 `.js` 文件：

![2024-04-20_QuickAdd脚本-新窗口打开笔记_IMG-2.png](https://cdn.pkmer.cn/images/202406122032473.png!pkmer)

```js
module.exports = async (params) => {
  // 打开模式
  const options = ["open-in-new-window", "move-to-new-window"];
  // const quickAddApi = app.plugins.plugins.quickadd.api;
  // const option = await quickAddApi.suggester(options, options);
  option = options[0];
  if (!option) return;

  // 获取激活窗口的位置和大小
  var activeWindowLeft = activeWindow.screenX;
  var activeWindowTop = activeWindow.screenY;
  var activeWindowWidth = activeWindow.outerWidth;
  var activeWindowHeight = activeWindow.outerHeight;

  // 相邻窗口打开
  var newWindowLeft = activeWindowLeft + activeWindowWidth + 5; 
  var newWindowTop = activeWindowTop+100;

  // // 屏幕中间打开
  // var screenWidth = activeWindow.screen.width;
  // var screenHeight = activeWindow.screen.height;
  // // 计算窗口左上角的坐标，使其位于显示器中央
  // var newWindowLeft = (screenWidth - newWindowWidth) / 2;
  // var newWindowTop = (screenHeight - newWindowHeight) / 2;

  // 设置默认的窗口大小
  var newWindowWidth = 450;
  var newWindowHeight = 480;

  if (option === options[0]) {
    // 在新窗口打开一个当前文档
    app.commands.executeCommandById("workspace:open-in-new-window");
  } else if (option === options[1]) {
    // 发送到新窗口
    app.commands.executeCommandById("workspace:move-to-new-window");
  }

  // 暂停100ms
  await new Promise(resolve => setTimeout(resolve, 1));

  //  将激活 窗口置顶
  activeWindow.electronWindow.setAlwaysOnTop(true);

  // 设置窗口的位置和大小
  activeWindow.resizeTo(newWindowWidth, newWindowHeight); // 调整窗口大小为宽度，高度
  activeWindow.moveTo(newWindowLeft, newWindowTop);
};
```

## Tip：针对外部窗口样式进行修改

将下述 CSS，保存为 `.css` 文件至 Obsidian 的 `.obsidian/snippets/` 文件夹下。

> 注：该 CSS 针对外部窗口生效。

![tmp1718195508729_2024-04-20_QuickAdd脚本-新窗口打开笔记_IMG-3.png](https://cdn.pkmer.cn/images/202406122032143.png!pkmer)

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