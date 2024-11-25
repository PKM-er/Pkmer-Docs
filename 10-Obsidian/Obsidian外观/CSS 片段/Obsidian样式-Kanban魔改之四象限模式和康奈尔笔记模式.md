---
uid: 20241124223411
title: Obsidian 样式 -Kanban 魔改之四象限模式和康奈尔笔记模式
tags: [kanban, CSS片段, 康奈尔笔记, 四象限]
description: Kanban 魔改之四象限模式和康奈尔笔记模式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241124223836
---

# Obsidian 样式 -Kanban 魔改之四象限模式和康奈尔笔记模式

突发奇想改了下 Kanban 的布局样式，默认是无差异的，依赖 CssClasses 的特性给不同看板定义不同的布局：

![24.11.22_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202411242234100.png!pkmer)

## 可提供的模式

- **四象限模式**：定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-four-quadrants`。
	- ![24.11.22_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202411242234019.png!pkmer)
	- 配合 Task 的任务查询 [^1]，结果如下：
		- ![24.11.22_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202411242234316.png!pkmer)
- **康奈尔笔记模式**：定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-cornell-note`。
	- ![24.11.22_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202411242234764.png!pkmer)
	- - 这种模式比较定制化，只适用于 3 个卡片的布局，当然也可以手动修改布局，采用的是网格布局，可以自行修改为其他布局类型 (需要点 CSS 基础)。
	- 编辑效果体验：除了保存有点不习惯，其他的在 Kanban 中编辑与正常编辑基本无差别，Kanban 编辑中可以使用自定义快捷键和嵌入图片文档之类的。

## CSS Snippets

```css
/* !在左右侧边栏中不显示工具栏 */
.workspace-split.mod-horizontal.mod-right-split,
.workspace-split.mod-horizontal.mod-left-split {
  .workspace-leaf-content[data-type="kanban"]>.view-header {
    display: none !important;
  }

  .workspace-leaf-content[data-type="kanban"] {
    .markdown-preview-view>*, .cm-content>* {
      font-size: 16px !important;
    }
  }
}

/* !正常堆叠模式 */
.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__board>div {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: flex-start;
    width: 100%;
    gap: 20px 15px;
    overflow: auto;
  }

  .kanban-plugin__lane-placeholder.kanban-plugin__placeholder {
    display: none;
  }
}

/* !Kanban：四象限模式 */
.kanban-four-quadrants.kanban-plugin .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
  flex: 0 0 calc(50% - 20px);
  height: calc(50% - 20px);
  overflow: auto;
}

/* !Kanban： 康奈尔笔记 */
.kanban-cornell-note.kanban-plugin {
  background-color: var(--background-primary);
  .kanban-plugin__board>div {
    display: grid;
    width: 100%;

    grid-template-columns: 3fr 7fr;
    grid-template-rows: 7fr 3fr;
    grid-template-areas:
      "cue note"
      "cue summary";
    gap: 20px;
  }

  .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
    min-width: 100%;
    min-height: 100%;
    overflow: auto;
    &:nth-child(1) {
      grid-area: cue;
    }
    &:nth-child(2) {
      grid-area: note;
    }
    &:nth-child(3) {
      grid-area: summary;
    }
  }

  /* 隐藏按钮 */
  .kanban-plugin__lane-collapse,
  .kanban-plugin__item-prefix-button-wrapper,
  /* 隐藏占位符 */
  .kanban-plugin__lane-placeholder.kanban-plugin__placeholder {
    display: none;
  }

  /* 字体大小设置 */
  .kanban-plugin__item-content-wrapper {
    .markdown-preview-view>*, .cm-content>* {
      font-size: 22px !important;
    }
  }
}
```

## Reference

- 24.06.12_Obsidian 样式 -Kanban 插件的堆叠模式 by Huajin

[^1]: [[基于 QuickAdd+Modal Form的任务 (Task) 编辑器]]