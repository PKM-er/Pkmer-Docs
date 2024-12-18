---
uid: 20241124223411
title: Obsidian 样式 -Kanban 魔改之四象限模式和康奈尔笔记模式
tags: [kanban, CSS片段, 康奈尔笔记, 四象限]
description: Kanban 魔改之四象限模式和康奈尔笔记模式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241218145504
---

# Obsidian 样式 -Kanban 魔改之四象限模式和康奈尔笔记模式

突发奇想改了下 Kanban 的布局样式，默认是无差异的，依赖 CssClasses 的特性给不同看板定义不同的布局：

![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453965.png!pkmer)

## 布局的模式

可提供的布局模式：

- **四象限模式**：定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-four-quadrants`。
	- ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453641.png!pkmer)
	- 配合 Task 的任务查询^[[[2024-04-30_利用 QuickAdd+Modal Form 表单创建一个便捷的任务 (Task) 编辑器]]]，结果如下：
		- ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453063.png!pkmer)
- **康奈尔笔记模式**：定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-cornell-note`。
	- ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453480.png!pkmer)
	- 这种模式比较定制化，只适用于 3 个卡片的布局，当然也可以手动修改布局，采用的是网格布局，可以自行修改为其他布局类型 (需要点 CSS 基础)。
	- 编辑效果体验：除了保存有点不习惯，其他的在 Kanban 中编辑与正常编辑基本无差别，Kanban 编辑中可以使用自定义快捷键和嵌入图片文档之类的。

### 四象限模式

- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-four-quadrants`。
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453962.png!pkmer)
- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-four-quadrants2`。
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453387.png!pkmer)

### 康奈尔笔记模式

- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-cornell-note`。
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453788.png!pkmer)
- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-cornell-note2`。
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453399.png!pkmer)

### 每周任务周报

- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-weekly-report`。
  - 配合 tasks 查询语法搭建的，参考的 [taskCalendar 1](https://github.com/702573N/Obsidian-Tasks-Calendar?tab=readme-ov-file) 的界面：
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181453905.png!pkmer)

每周周报 Tasks 查询文档：

````md
---

kanban-plugin: board
cssclasses:
  - kanban-weekly-report

---

## 星期一

- [ ] ```tasks
    (done on this Monday) OR (happens on this Monday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期二

- [ ] ```tasks
    (done on this Tuesday) OR (happens on this Tuesday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期三

- [ ] ```tasks
    (done on this Wednesday) OR (happens on this Wednesday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期四

- [ ] ```tasks
    (done on this Thursday) OR (happens on this Thursday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期五

- [ ] ```tasks
    (done on this Friday) OR (happens on this Friday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期六

- [ ] ```tasks
    (done on this Saturday) OR (happens on this Saturday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```


## 星期天

- [ ] ```tasks
    (done on this Sunday) OR (happens on this Sunday)
    show tree
    group by status.name reverse
    group by filename
    short mode
    ```




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false,false],"new-card-insertion-method":"prepend-compact"}
```
%%
````

### 堆叠模式

- 定义当前 Kanban 文件的 cssclasses 属性值为：`kanban-stack`。
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181454670.png!pkmer)

原文：[【Kanban】中国图书分类法简表.md · GitHub 7](https://gist.github.com/PandaNocturne/80ff0bd4dc8d5f9dd9ed9f1e1b956194)

参考： [中国图书馆分类法简表-清华大学图书馆 (tsinghua.edu.cn)](https://lib.tsinghua.edu.cn/info/1011/4429.htm)

可以结合 FolderNotes+ 它的查询语法管理自己的领域分类：

![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181454225.png!pkmer)

## 卡片模式

Kanban 子项目的卡片化展示，用于美化和减少占位。

![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181454775.gif!pkmer)

主要用以下 2 种模式：`kanban-col-items`、`kanban-card-items`。

这 2 种模式在四象限模式以及自带的 List 模式下有奇效。

- 四象限模式推荐用 `kanban-col-items`
- 自带的 List 模式推荐用 `kanban-card-items`

### Kanban 卡片子项目模式

- cssclasses 值为 `kanban-card-items`
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181454457.png!pkmer)

### Kanban 子项目分栏模式

- cssclasses 值为 `kanban-col-items`
  - ![241122_Obsidian样式-Kanban魔改之四象限模式和康奈尔笔记模式.md](https://cdn.pkmer.cn/images/202412181454017.png!pkmer)

## CSS Snippets

```css
/* https://github.com/mgmeyers/obsidian-style-settings */
/* @settings

name: Kanban Styles
id: kanban-styles
settings:
  - id: kanban-fold
    title: 折叠Kanban子项目
    type: class-toggle
    addCommand: true
  - id: kanban-card-items
    title: Kanban卡片子项目
    type: class-toggle
    addCommand: true
*/

/* !折叠模式 */
.kanban-fold .kanban-plugin__lane-wrapper .kanban-plugin__item-title-wrapper:not(:hover) {
  .kanban-plugin__markdown-preview-view>:not(:first-child) {
    display: none;
  }
}

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

/* ! 堆叠模式 */
.kanban-stack.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__board>div {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px 10px;
    overflow: auto;
  }

  .kanban-plugin__lane-wrapper {
    &.collapse-horizontal {
      max-width: fit-content;
    }

    &:not(.collapse-horizontal) {
      min-width: 100%;
      max-height: 300px;
    }
  }

  .kanban-plugin__lane-placeholder.kanban-plugin__placeholder {
    display: none;
  }
}

/*  !Kanban：四象限模式*/
.kanban-four-quadrants.kanban-plugin {
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

  .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
    flex: 0 0 calc(50% - 20px);
    height: calc(50% - 20px);
    overflow: auto;
  }
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
    /* overflow: auto; */

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


/* !Kanban： 康奈尔笔记2 */
.kanban-cornell-note2.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__board>div {
    display: grid;
    width: 100%;

    grid-template-columns: 2fr 8fr;
    grid-template-rows: 3fr 3fr 2fr;
    grid-template-areas:
      "cue note"
      "cue note"
      "summary summary";
    gap: 20px;
  }

  .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
    min-width: 100%;
    min-height: 100%;

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

/* !Kanban： 四象限任务板模式2 */
.kanban-four-quadrants2.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__board>div {
    display: grid;
    width: 100%;

    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "area0 area1 area2"
      "area0 area3 area4";
    gap: 20px;
  }

  .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
    min-width: 100%;
    min-height: 100%;
    overflow: auto;

    &:nth-child(1) {
      grid-area: area0;
    }

    &:nth-child(2) {
      grid-area: area1;
    }

    &:nth-child(3) {
      grid-area: area2;
    }

    &:nth-child(4) {
      grid-area: area3;
    }

    &:nth-child(5) {
      grid-area: area4;
    }
  }

  /* 隐藏按钮 */
  .kanban-plugin__lane-collapse,
  /* 隐藏占位符 */
  .kanban-plugin__lane-placeholder.kanban-plugin__placeholder {
    display: none;
  }
}


/* !Kanban： 每周任务周报 */
.kanban-weekly-report.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__board>div {
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 2fr 1fr;
    gap: 10px;
  }

  .kanban-plugin__lane-wrapper:not(.collapse-horizontal) {
    min-width: 100%;
    min-height: 100%;
    grid-column: span 2;

    &:nth-child(6) {
      grid-column: span 5;
    }

    &:nth-child(7) {
      grid-column: span 5;
    }
  }


  /* 隐藏占位符 */
  .kanban-plugin__lane-placeholder.kanban-plugin__placeholder {
    display: none;
  }

  .kanban-plugin__item-prefix-button-wrapper {
    visibility: hidden;
    width: 0.8rem;
  }
}

/* ! Kanban：卡片子项目模式 */
.kanban-card-items .kanban-plugin,
.kanban-card-items.kanban-plugin {
  background-color: var(--background-primary);

  /* 只当标题有标签是才启用子项目卡片模式 */
  /* .kanban-plugin__lane:has(.kanban-plugin__lane-title-text a.tag) */
  .kanban-plugin__lane-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 10px;
    height: calc(100% - 40px);
    overflow-y: auto;
    overflow-x: hidden;

    align-content: flex-start;
    justify-items: stretch;
    align-items: stretch;

    .kanban-plugin__item-wrapper {

      /* border: 2px solid #ee0000; */

      .kanban-plugin__item {
        height: 100%;
        display: grid;

        .kanban-plugin__item-title-wrapper {
          /* justify-self: stretch;
          align-self: stretch; */
          /* min-height: 150px; */
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: start;
        }
      }

    }
  }
}

/* ! Kanban：子项目分栏模式 */
.kanban-col-items.kanban-plugin {
  background-color: var(--background-primary);

  .kanban-plugin__lane-items {
    display: block;
    column-width: 280px;
    column-gap: 0.5rem;
    overflow-y: auto;
    overflow-x: hidden;

    .kanban-plugin__item-wrapper {
      max-width: 100%;

      .kanban-plugin__item {
        display: grid;

        .kanban-plugin__item-title-wrapper {
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: start;
        }
      }

    }
  }
}

/* !补丁 */
.kanban-plugin__lane {
  padding-bottom: 10px;
}


.kanban-plugin__lane-wrapper.collapse-horizontal {
  max-width: fit-content !important;
}

.kanban-plugin__item-input {
  min-height: 100px;
}
```

## Reference

- 240612_Obsidian 样式 -Kanban 插件的堆叠模式 by Huajin
- [[基于 QuickAdd+Modal Form的任务 (Task) 编辑器]]