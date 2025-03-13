---
uid: 20250313104601
title: Obsidian 样式 - 重新定义 Obsidian 脚注之侧边显示 footnote 的优雅体验
tags: [footnote, 笔记与注释, 样式美化]
description: 将脚注常驻显示在笔记的侧边，效果显著提升了信息的获取效率与便捷性。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250313105433
---

# Obsidian 样式 - 重新定义 Obsidian 脚注之侧边显示 footnote 的优雅体验

## 样式介绍

新版 Obsidian 脚注 (footnote) 功能在阅读模式下可以进行直接修改，这一新特性为我们的笔记提供了更多可能性。我设想了一个新的展示方式：将脚注常驻显示在笔记的侧边，效果显著提升了信息的获取效率与便捷性。[^1]

| 悬浮预览编辑                                                                                                             | 双向定位脚注                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131051757.gif) | ![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131051432.gif) |

> 这个效果完全是 Obsidian 原生态语法，就是把显示样式改了下，比之前弄的那个 [[Obsidian样式-调整HTML的detail样式为简单评论区|Details样式]] 要好得多。

## 样式的 Style Setting 设置介绍

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131046509.png!pkmer)

### 隐藏或显示脚注面板

一般默认情况下，如果你的当前笔记不存在脚注，该「脚注面板」是不会显示的，因为你的界面元素不存在这个元素类型。不过有些情况下，需要临时隐藏掉该面板的话，本样式也提供了一个快捷方式来隐藏脚注面板 (注：借助的是 style settings 的 `addCommand: true` 设置)，即：在命令面板中搜索「隐藏侧边栏脚注 (footnote)」命令并运行，效果如下，演示中借助 Commander 插件设置了按钮在工具栏中。

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131046914.gif!pkmer)

### 脚本面板居左居右显示

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047432.gif!pkmer)

可以通过命令面板 (`Ctrl + P`) 搜索“修改侧边栏脚注 (footnote) 的位置 (左/右)”或简写“(左/右)”命令，可以调整 footnote 侧边栏显示的位置是在左侧还是右侧，默认左侧。

当然你也可以直接在 Style Settings 插件设置中设置。

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047113.png!pkmer)

### 跳转链接全局化

在 Style Settings 插件设置中，可以将 footnote 的跳转链接全局化，类似于 Zotero 的标注，点击卡片直接跳转，==不过缺点就是不能直接选中卡片中的颜色了，具体设置看你是在乎颜值还是看重功能了，默认是全局模式。==[^2]

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047526.png!pkmer)

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047965.png!pkmer)

## Tip：Obsidian 的 insert footnote 命令

可以给 Obsidian 的 `insert footnote` 命令设置一个快捷键，可以立即添加脚注。

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047630.png!pkmer)

效果如下：

## Tip：新版 Ob 的脚注支持 better footnote 的语法

![【Draft】250312_Obsidian样式：重新定义 Obsidian 脚注之侧边显示footnote的优雅体验.md](https://cdn.pkmer.cn/images/202503131047728.png!pkmer)

## CSS 样式

```css
/* @settings
name: 【Footnote-熊猫】Sidebar Footnote 
id: sidebar-footnote
settings:
  - id: sidebar-footnote-status
    title: 隐藏侧边栏脚注(footnote)
    type: class-toggle
    default: false
    addCommand: true
  - id: sidebar-footnote-backref
    title: 全局化脚注(footnote)的跳转链接
    description: 即不显示跳转链接↩︎，而是点击脚注即跳转
    type: class-toggle
    default: true
    addCommand: true
  - id: footnote-sidebar-position
    title: 修改侧边栏脚注(footnote)的位置(左/右)
    type: class-toggle
    default: true
    addCommand: true
*/


.sidebar-footnote-status {
  div:has(>section.footnotes) {
    display: none;
  }
}


.footnote-sidebar-position div:has(>section.footnotes) {
  left: unset;
  right: 20px;
}

.sidebar-footnote-backref {
  .footnote-backref {
    /*! 全局化 */
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}

sup.footnote-ref {
  font-size: medium;

  &.is-flashing {
    background-color: red !important;
  }
}

div:has(>section.footnotes) {
  display: block;
  position: fixed !important;
  width: 22vi;
  top: 20vb;
  left: 20px;
  overflow: auto;

  height: fit-content;
  max-height: 70vb;
  background-color: var(--background-secondary);
  border-radius: 10px;
  counter-reset: footnote-counter;

  .footnotes {
    hr {
      display: none;
    }

    &>ol {
      list-style-type: none;
      margin: 10px;


      span:has(img) {
        margin-left: auto;
        margin-right: auto;
      }

      li:not(:hover) {
        opacity: 0.8;
      }

      li+li {
        margin-top: 10px;

      }

      li::before {
        counter-increment: footnote-counter;
        content: "["counter(footnote-counter)"]：";
        float: left;
        color: var(--interactive-accent);
        display: block;
        width: fit-content;
        height: fit-content;
      }

      li {
        margin-left: 0px;
        position: relative;
        padding: 10px;
        background-color: var(--background-primary);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        /* 阴影 */
        border: 1px solid var(--background-modifier-border);
        /* 边框 */

        .footnote-backref {
          display: block;
          position: absolute;
          bottom: 0px;
          right: 0px;
        }

        &:has(.footnote-backref:active) {
          background-color: var(--interactive-accent)
        }
      }
    }
  }
}
```

## Reference

- [[Obsidian样式-调整HTML的detail样式为简单评论区]]

[^1]: 可以完美替代评论了，无污染，双向跳，还可以阅读模式下编辑。
[^2]: 全局跳转