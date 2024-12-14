---
uid: 20241214165026
title: Obsidian 插件样式 - 修改 note toolbar 插件布局像 cmenu 那样显示
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20241214171631
---

# Obsidian 插件样式 - 修改 note toolbar 插件布局像 cmenu 那样显示

Note Toolbar 它可以为不同的文件夹配置不同的工具栏，并能够在文件夹之间自适应切换，而且可以非常方便的编辑工具栏按钮。

![24.12.14_Obsidian插件样式：定制Note Toolbar布局以模拟Cmenu显示.md](https://cdn.pkmer.cn/images/202412141716376.png!pkmer)

可以用下面的样式定制 Note Toolbar 布局以模拟 Cmenu 显示

![24.12.14_Obsidian插件样式：定制Note Toolbar布局以模拟Cmenu显示.md](https://cdn.pkmer.cn/images/202412141716981.png!pkmer)

## 样式设置

您可以将 Note Toolbar 的显示样式更改为类似于 Cmenu 插件的样式。这种设置仅在工具栏名称中包含“cmenu”时生效。

![24.12.14_Obsidian插件样式：定制Note Toolbar布局以模拟Cmenu显示.md](https://cdn.pkmer.cn/images/202412141716382.png!pkmer)

---

- 将工具栏的位置设置为“置顶（固定位置）”即可，其他设置保持默认。
- 注意：目前，该设置暂不支持移动端，因此建议在移动设备上隐藏此工具栏。

![24.12.14_Obsidian插件样式：定制Note Toolbar布局以模拟Cmenu显示.md](https://cdn.pkmer.cn/images/202412141716747.png!pkmer)

> [!tip] 自带的分割符和行号符可以正常运行
> ![24.12.14_Obsidian插件样式：定制Note Toolbar布局以模拟Cmenu显示.md](https://cdn.pkmer.cn/images/202412141716129.png!pkmer)

## CSS 样式

```css
/* NoteToolbar 像 Cmenu那样显示 */
div[data-name *="cmenu"] {
  z-index: var(--layer-status-bar);
  position: absolute;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent !important;

  div.callout, .callout-content {
    background-color: transparent !important;
    border: 0 !important;
    margin: 0 !important;
    opacity: 1 !important;
    width: fit-content;
    height: fit-content;
  }

  ul[role="menu"] {
    width: fit-content;
    max-width: 450px;
    /* display: grid !important;
    grid-template-columns: repeat(10, minmax(0, 1fr)); */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 8px 5px !important;

    padding: 10px !important;
    transition: 200ms ease;
    height: auto;
    min-width: fit-content;
    border-radius: 6px !important;

    z-index: var(--layer-status-bar);
    box-shadow: 0px 3px 32px rgb(31 38 135 / 15%);
    margin: 40px !important;
    border: 1px solid var(--background-modifier-border);

    /* 添加毛玻璃效果 */
    backdrop-filter: blur(10px) !important;
    background-color: rgba(255, 255, 255, 0.3) !important;

    li {
      border-radius: 6px;
      background-color: var(--background-secondary) !important;

      &>span {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px !important;

        svg {
          transform: scale(1.2);
        }

      }

      .cg-note-toolbar-item-label {
        display: none;
      }
    }

  }

}
```