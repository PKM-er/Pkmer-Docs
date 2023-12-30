---
uid: 20231202184706
title: Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区
tags: [评论, 美化样式, CSS自定义]
description: 通过修改 Html 语法中的details语法的样式来使它更像一个评论信息。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231230141204
---

# Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区

## 样式效果

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044735.png!pkmer)

通过修改 Html 语法中的 `<details>评论区</details>` 语法的样式来使它更像一个评论信息。

## 注意事项

> [!caution] 存在问题
> 一般来 `<details>评论区</details>` 里面不支持 ob 的语法格式，单纯以文本形式展出，也就是不支持图片、双链、Markdown 语法等，只支持 Html 语法。

### 如何实现渲染

如果 `<details>` 在一个段落中可以渲染包括图片甚至是嵌入文档的渲染：

**源码模式：**

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044736.png!pkmer)

**阅读模式：**

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044737.png!pkmer)

> [!caution] 实时模式直接隐藏：
> ![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044738.png!pkmer)
> 实时模式是直接隐藏不见的，鼠标放到注释区域才会显示，如果需要显示的话请自行修改 CSS 文件。

## 如何快捷输入

> [!tip] 最好给 `<details>` 里面的添加标签，方便后期检索

### 注释选中的文本 by QuickAdd

#### 效果

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044739.gif!pkmer)

#### 配置

配置 `QuickAdd` 的 Capture：

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044740.png!pkmer)

```
=={{selected}}==<details>#Details<br>{{mvalue}}</details>
```

### 配置高级输入框 (可添加标签) by QuickAdd + ModalForm

#### 效果

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044741.gif!pkmer)

#### 配置

配合 `QuickAdd` + `ModalForm` 这 2 个插件使用，`ModalForm` 的只需安装即可，`QuickAdd` 配置 Capture：

![Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区](https://cdn.pkmer.cn/images/202312300044742.png!pkmer)

````md
```js quickadd
let selection = window.getSelection();
selection = selection.toString();
const modalForm = app.plugins.plugins.modalforms.api;
const values = {
    Details: selection,
    Tags: ["Details"]
};
const result = await modalForm.openForm({
    title: "输入Details注释",
    fields: [
        {
            name: "Details",
            description: selection,
            label: "输入注释",
            input: {
                type: "textarea"
            }
        },
        {
            name: "Tags",
            description: "添加标签到开头",
            input: { type: "tag" }
        },
    ]
}, {
    values: values
});
let detailsText = result.getValue('Details').value;
let tags = result.getValue('Tags').value;
const tagsStr = "#" + tags.join(" #");

let output;
if (selection) {
    output = `==${selection}==<details>${tagsStr}<br>${detailsText}</details>`;
} else {
    output = `<details>${tagsStr}<br>${detailsText}</details>`;
}
return output;
```
````

## CSS 代码

```css
/* ! details 样式修改 */
/* 2023-12-13 details样式修改 */
.theme-light .markdown-preview-view details {
  background-color: rgba(252, 255, 203, 0.9);
}
.theme-dark .markdown-preview-view details {
  background-color: rgba(56, 55, 56, 0.9);
}

.markdown-source-view.mod-cm6 details {
  display: none;
}

/* 在better-search-views中正常显示 */
.markdown-preview-view:not(.better-search-views-file-match.markdown-rendered)
  details {
  position: absolute;
  font-weight: lighter;
  font-size: smaller;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  padding: 2px 3px 2px 3px;
  display: block;
  transform: translateY(-3rem);
  z-index: 1;
  border-inline-start: 5px solid;
  white-space: pre-wrap;
}

.markdown-preview-view:not(.better-search-views-file-match.markdown-rendered)
  details[open] {
  max-width: 500px;
  max-height: 400px;
  overflow: auto;
  z-index: 2;
}

details:not(details[open]) {
  right: 1rem;
  min-width: 20px;
}

:not(.callout-content)details[open] {
  max-width: 400px;
  z-index: 2;
}

details[open],
.popover.hover-editor details,
:not(.callout-conten) details {
  right: 1rem;
}

/* 在callout中不生效 */
.callout-content details[open] {
  transform: translateX(1rem) !important;
  position: relative !important;
  max-width: unset !important;
}

```