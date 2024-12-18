---
uid: 20241218150423
title: Obsidian 样式 - 设置界面网格卡片式布局
tags: [CSS美化, 设置面板]
description: 将 Obsidian 的设置界面的快捷键、核心插件、第三方插件的显示样式变为卡片模式。
author: 熊猫别熬夜,Huajin
type: other
draft: false
editable: false
modified: 20241218150642
---

# Obsidian 样式 - 设置界面网格卡片式布局

本样式参考了 Huajin 的 [obsidian-settings-management](https://github.com/xhuajin/obsidian-settings-management/) 插件的样式，将 Obsidian 的设置界面的快捷键、核心插件、第三方插件的显示样式变为卡片模式。

| 快捷键                                                                     | 核心插件                                                                    | 第三方插件                                                                   |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![image.png](https://cdn.pkmer.cn/images/202412181504917.png!pkmer)<br> | ![image.png](https://cdn.pkmer.cn/images/202412181504780.png!pkmer)<br> | ![image.png](https://cdn.pkmer.cn/images/202412181505186.png!pkmer)<br> |

## Style Setting 设置

在 Style Setting 设置中可以关闭某个界面的卡片化。

![241218_Obsidian样式：设置界面网格卡片式布局.md](https://cdn.pkmer.cn/images/202412181502569.png!pkmer)

```css

/* @settings

name: Obsidian-Setting-Grid-Layout
description: 一个用于 Obsidian 设置页面的网格布局
id: obsidian-setting-grid-layout
settings:
    - 
        id: Grid-Layout-info-text
        title: Information
        description: "本样式参考了Huajin的[obsidian-settings-management](https://github.com/xhuajin/obsidian-settings-management/)插件的样式。"
        type: info-text
        markdown: true
    - 
        id: hotkey-layout
        title: 关闭快捷键列表卡片化
        type: class-toggle
        default: false
    - 
        id: plugin-layout
        title: 关闭核心插件列表卡片化
        type: class-toggle
        default: false
    - 
        id: installed-plugin-layout
        title: 关闭第三方插件列表卡片化
        type: class-toggle
        default: false
*/

/* 设置界面的宽度设置 */
.modal.mod-settings.mod-settings.mod-settings.mod-settings {
  /* min-width: 1200px !important; */
}

/* 2024-12-17 参考Huajin的obsidian-settings-management插件的样式 https://github.com/xhuajin/obsidian-settings-management/blob/master/src/styles.css */
/* 快捷键列表 */
body:not(.hotkey-layout) .vertical-tabs-container .vertical-tab-content>.hotkey-list-container,
/* 核心插件列表 */
body:not(.plugin-layout) .vertical-tabs-container .plugin-list-plugins>div:not(.setting-item),
/* 第三方插件列表 */
body:not(.installed-plugin-layout) .vertical-tabs-container .installed-plugins-container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  /* 子项目设置 */
  .setting-item:not(:has(~.setting-item-heading)):not(.setting-item-heading) {
    border: 1px solid var(--background-modifier-border);
    border-radius: 8px;
    padding: 1em;
  }

  .setting-item:is(:has(~.setting-item-heading), .setting-item-heading) {
    grid-column: 1 / -1;
  }

  .setting-item-info {

    overflow: hidden;
    overflow-wrap: anywhere;
  }
}

/* 第三方插件列表 按钮微调*/
.installed-plugins-container .setting-item.mod-toggle {
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  .setting-item-info {
    flex: 2 0 auto;
    width: 100%;
    margin-left: 10px;
  }
}

.installed-plugins-container .setting-item-control {
  flex: 0;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  right: 0px;
  justify-content: right;
}
```