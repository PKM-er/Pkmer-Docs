---
uid: 20250524195831
title: 年倒计时_像素格样式
tags:
description:
author: alan777
type: other
draft: false
editable: false
modified: 20250524200525
---
# 通过Dataviewjs实现像素格样式年倒计时

![](https://cdn.pkmer.cn/images/20250524200923841.png!pkmer)

## 1. 效果

- 表格在大屏下横向展开；
- 在手机等小屏上自动换行；
- `day-box` 之间有间距，标题根据设置对齐；
- 悬停显示具体日期；
- 响应式流畅、紧凑美观。

## 2. DVJS 代码

```dataviewjs
const year = dv.current().year;
const cssClasses = dv.current().cssclasses ?? [];

const titleAlignClass = cssClasses.find(c => c.startsWith("align-")) ?? "align-left";

// 使用 div 显示为块级元素，字体大小和颜色由配套CSS控制
dv.el("div", `${year} 年倒计时`, { cls: `year-title ${titleAlignClass}` });

// 使用标题标签（h4）显示标题，由标题样式控制
// dv.el("h4", `${year} 年倒计时`, { cls: `year-title ${titleAlignClass}` });

const startDate = moment(`${year}-01-01`);
const endDate = moment(`${year}-12-31`);
const today = moment();

const container = dv.el("div", "", { cls: "year-calendar" });

for (let d = startDate.clone(); d.isSameOrBefore(endDate); d.add(1, "day")) {
  const dayBox = document.createElement("div");
  dayBox.classList.add("day-box");
  dayBox.setAttribute("title", d.format("YYYY-MM-DD"));

  if (d.isBefore(today, 'day')) {
    dayBox.classList.add("past");
  } else if (d.isSame(today, 'day')) {
    dayBox.classList.add("today");
  } else {
    dayBox.classList.add("future");
  }

  container.appendChild(dayBox);
}

```

### 使用方法

- 在 `属性` 中添加 `year`，然后值填写所在年数字，如 `2025`。
- 标题中的时间自动读取自 `year` 的值，设置 `cssclasses` 值控制对齐方式：
	- align-left（默认）
	- align-center
	- align-right

## 3. CSS 样式代码

```css
/* 标题样式（支持对齐） */
.year-title {
  margin-bottom: 0.5em;
  font-size: 1.2em;
  color: var(--text-muted);
}

/* 通过 cssclasses 控制标题对齐 */
.align-left .year-title {
  text-align: left;
}
.align-center .year-title {
  text-align: center;
}
.align-right .year-title {
  text-align: right;
}

/* 日历整体容器 */
.year-calendar {
  display: flex;
  flex-wrap: wrap;         /* 自动换行 */
  justify-content: start; /* 默认start左对齐，center是居中，end是右对齐 */
  gap: 0.5px;
}

/* 单个日期方块 */
.day-box {
  width: 10px;
  height: 10px;
  border-radius: 1px;
  margin: 1px;
  background-color: white;
  transition: transform 0.2s;
}

.day-box.past {
  background-color: black;
}

.day-box.today {
  background-color: orange;
}

.day-box.future {
  background-color: white;
  border: 0.5px solid #ddd;
}

/* 悬停效果：日期 tooltip 和缩放 */
.day-box:hover {
  transform: scale(1.4);
  cursor: pointer;
}

/* 响应式调整：小屏自动缩放并保持居中 */
@media (max-width: 600px) {
  .year-calendar {
    justify-content: center;
    gap: 1px;
  }

  .day-box {
    width: 8px;
    height: 8px;
    margin: 0.5px;
  }
}

```