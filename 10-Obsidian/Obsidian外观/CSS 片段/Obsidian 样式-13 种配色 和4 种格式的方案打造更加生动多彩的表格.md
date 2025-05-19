---
uid: 20250519194411
title: Obsidian 样式：13 种配色 +4 种格式的方案打造更加生动多彩的表格
tags: [Table, 表格样式, CSS美化, CSS片段]
description: 13 种配色 +4 种格式的方案打造更加生动多彩的表格
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250519194922
---

# Obsidian 样式：13 种配色 +4 种格式的方案打造更加生动多彩的表格

在使用 Obsidian 进行知识管理时，表格是最常用的信息组织方式之一，参考官方提供的 [Table样式参数](https://docs.obsidian.md/Reference/CSS+variables/Editor/Table) 对 Obsidian 的表格样式进行一些调整，设置了 13 种不同配色的表格头部样式和 4 种表格格式，使 Ob 的表格看起来更加生动一些。

![250519_Obsidian样式：13种配色方案打造多彩表格的样式.md](https://cdn.pkmer.cn/images/202505191943439.png!pkmer)

## 样式安装与配置

1. 在 Obsidian 设置中，找到 CSS 片段管理
2. 添加上述 CSS 代码为新的片段
3. 在 Style Setting 插件设置中可以选择以下配置项：

| 配置项    | 说明                      |
| ------ | ----------------------- |
| 表格格式   | 有 4 种模式：默认、虚线框、加粗线宽、三线表 |
| 表格头部颜色 | 13 种预设颜色可选              |
| 斑马纹    | 是否启用交替行颜色               |
| 深色模式   | 深色模式下采用灰色表格头部           |

![250519_Obsidian样式：13种配色方案打造多彩表格的样式.md](https://cdn.pkmer.cn/images/202505191943227.png!pkmer)

---

![250519_Obsidian样式：13种配色方案打造多彩表格的样式.md](https://cdn.pkmer.cn/images/202505191943890.png!pkmer)

---

> 注意：「深色模式」选项是用于避免深色主题下表格还是太刺眼而设置的，默认样式在深浅主题下配置了不同的配色，但如果还觉得深色主题下表格样式还是太亮眼的话，建议启动该选项，或者手动调整配色。

启用深色模式与不启用深色模式的情况：

![250519_Obsidian样式：13种配色方案打造多彩表格的样式.md](https://cdn.pkmer.cn/images/202505191943451.png!pkmer)

## 配色方案一览

![250519_Obsidian样式：13种配色方案打造多彩表格的样式.md](https://cdn.pkmer.cn/images/202505191943955.png!pkmer)

## CSS Snippets

```css
/* @settings
name: 【Table-熊猫】多彩表格样式
id: colorful-table-styles
settings:
    - 
        id: table-type-class
        title: 表格格式
        description: 
        type: class-select
        allowEmpty: false
        default: table-type-normal
        options:
            - 
                label: 默认模式
                value: 
            - 
                label:  虚线框模式
                value: table-type-borderless
            - 
                label:  加粗线宽模式
                value: table-type-bolder
            - 
                label:  三线表
                value: table-type-three-line
    - 
        id: table-header-color-class
        title: 表格头部颜色
        description: 
        type: class-select
        allowEmpty: false
        default: table-header-color-blue
        options:
            - 
                label: 灰色
                value: table-header-color-gray       
            - 
                label: 红色
                value: table-header-color-red
            - 
                label: 粉色
                value: table-header-color-pink
            - 
                label: 葡萄紫
                value: table-header-color-grape
            - 
                label: 紫罗兰
                value: table-header-color-violet
            - 
                label: 靛蓝
                value: table-header-color-indigo
            - 
                label: 蓝色
                value: table-header-color-blue
            - 
                label: 青色
                value: table-header-color-cyan
            - 
                label: 蓝绿
                value: table-header-color-teal
            - 
                label: 绿色
                value: table-header-color-green
            - 
                label: 青柠
                value: table-header-color-lime
            - 
                label: 黄色
                value: table-header-color-yellow
            - 
                label: 橙色
                value: table-header-color-orange
    -
      id: table-row-alt-background-option
      title: 是否启用斑马纹
      type: class-toggle
      addCommand: true
      default: true
    -
      id: table-dark-mode
      title: 深色模式
      description: 深色模式下采用灰色表格头部
      type: class-toggle
      addCommand: true
      default: true
*/

/* 表格的样式修改 */
.theme-light, .theme-dark {
  --table-border-width: 1px;
  --table-header-background-hover: var(--table-header-background);
  --table-cell-vertical-alignment: middle;

  /* 表格悬浮样式配色不改变 */
  --table-row-background-hover: var(--table-background);

  &.table-row-alt-background-option {
    --table-row-alt-background: var(--background-secondary);
  }

  --table-row-alt-background-hover: var(--table-row-alt-background);


  /* 无线框模式 */
  &.table-type-borderless {
    --table-border-width: 1px;

    .markdown-preview-view, .markdown-source-view.is-live-preview {
      table td, table th {
        border-style: dotted;
      }
    }
  }

  /* 加粗线宽模式 */
  &.table-type-bolder {
    --table-border-width: 3px;
  }

  /* 三线表 */
  &.table-type-three-line {
    --table-border-width: 0px;

    .markdown-preview-view, .markdown-source-view.is-live-preview {
      table>thead {
        border-bottom: 1px solid var(--table-header-border-color);
      }
    }

    --table-header-border-width: 3px;
    --table-row-last-border-width: 3px;
  }

}



.theme-light {
  --table-border-color: black;
}

.theme-dark {
  /* --table-border-color: white; */
  --table-header-color: white
}


.table-header-color-gray {
  &.theme-light {
    --table-header-background: #868e96;
  }

  &.theme-dark {
    --table-header-background: #495057;
  }
}


.table-header-color-red {
  &.theme-light {
    --table-header-background: #ffa8a8;
  }

  &.theme-dark {
    --table-header-background: #ff8787;
  }
}


.table-header-color-pink {
  &.theme-light {
    --table-header-background: #faa2c1;
  }

  &.theme-dark {
    --table-header-background: #f783ac;
  }
}

.table-header-color-grape {
  &.theme-light {
    --table-header-background: #e599f7;
  }

  &.theme-dark {
    --table-header-background: #da77f2;
  }
}

.table-header-color-violet {
  &.theme-light {
    --table-header-background: #b197fc;
  }

  &.theme-dark {
    --table-header-background: #9775fa;
  }
}

.table-header-color-indigo {
  &.theme-light {
    --table-header-background: #91a7ff;
  }

  &.theme-dark {
    --table-header-background: #748ffc;
  }
}

.table-header-color-blue {
  &.theme-light {
    --table-header-background: #74c0fc;
  }

  &.theme-dark {
    --table-header-background: #4dabf7;
  }
}

.table-header-color-cyan {
  &.theme-light {
    --table-header-background: #66d9e8;
  }

  &.theme-dark {
    --table-header-background: #3bc9db;
  }
}

.table-header-color-teal {
  &.theme-light {
    --table-header-background: #63e6be;
  }

  &.theme-dark {
    --table-header-background: #38d9a9;
  }
}

.table-header-color-green {
  &.theme-light {
    --table-header-background: #69db7c;
  }

  &.theme-dark {
    --table-header-background: #51cf66;
  }
}

.table-header-color-lime {
  &.theme-light {
    --table-header-background: #a9e34b;
  }

  &.theme-dark {
    --table-header-background: #94d82d;
  }
}

.table-header-color-yellow {
  &.theme-light {
    --table-header-background: #ffe066;
  }

  &.theme-dark {
    --table-header-background: #ffd43b;
  }
}

.table-header-color-orange {
  &.theme-light {
    --table-header-background: #ffc078;
  }

  &.theme-dark {
    --table-header-background: #ffa94d;
  }
}

.theme-dark.table-dark-mode {
  --table-border-color: white;
  --table-header-background: #495057;
}


/* 2024-05-31_18-23 表格的一些优化设置 by 熊猫 */
table:not(.dataview):not(.ab-table-timeline) {

  /* 如果包含图片，则图片居中显示并强制宽度一致 */
  tbody tr td:has(span>img) {
    text-align: center !important;
    vertical-align: middle;
  }

  thead th {
    text-align: center !important;
    height: 100% !important;
  }

  /* 2024-06-25_02-16 编辑模式下表格内容左侧空隙删除 */
  .table-cell-wrapper>.cm-s-obsidian>.cm-editor .cm-gutters {
    display: none;
  }

  /* 跨行居中 */
  td[colspan] {
    text-align: center !important;
  }
}
```

## Reference

- [Table - Developer Documentation (obsidian.md)](https://docs.obsidian.md/Reference/CSS+variables/Editor/Table)

