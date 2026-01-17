---
uid: 20250507193946
title: 通过Dataviewjs 实现卡片式任务面版（管理 task 插件原生任务列表）
tags: [dataview, Dataviewjs, 任务管理]
description: 通过Dataviewjs实现卡片式任务面版
author: alan777
type: advanced
draft: false
editable: false
modified: 20250507194210
---

# 通过 Dataviewjs 实现卡片式任务面版（管理 task 插件原生任务列表）

![](https://cdn.pkmer.cn/images/501cf8a8d9750ba52f753f601b10e8ca.png!pkmer)

## 通过 Dataviewjs 代码实现

- 收集多个文件夹下的全部任务；
- 按照时间状态分类（逾期、进行中、待办、今天、明天、一周内、一周后（未来）、已完成）；
- 点击卡片切换分类任务面板；
  - 当点击「逾期」分类时，下方只显示「逾期」的任务列表
  - 当点击「进行中」分类时，下方只显示「进行中」的任务列表
- 使用 tasks 插件语法动态生成查询并渲染任务列表，直接应用于现有任务列表，无需任何更改
  - 需要对任务进行修改时，直接在点击任务文字后的编辑图标即可；点击任务文本最后的超链接，直接跳转到任务所在文件。
卡片样式自适应。

## 使用说明

- 自定义要收集任务的文件目录，在代码最开始的 1.收集任务中的 dv.pages 中设置；有几个文件夹就定义几个 tasks，前后序号要一致。
- 需要调整分类卡片的顺序，可以在 3.分类定义中调整前后顺序。
- 需要修改 task 的样式、优先级、排序等，在 6.渲染任务块中的构建任务查询代码块中按需修改，完全采用 task 插件原生语法。
- 修改默认展示的任务分类，在 7.默认加载 " 今天 " 分类中修改数字 3 为你希望的分类对应的序号（序号从 0 开始，即第一个分类序号为 0）
- 对于卡片样式修改，自行在 CSS 样式代码中修改。

## Dataviewjs 代码

```dataviewjs
// ==== 1. 收集任务 ====
let tasks1 = dv.pages('"01Projects"').file.tasks;
let tasks2 = dv.pages('"02Business"').file.tasks;
let tasks3 = dv.pages('"00Todolist"').file.tasks;
let tasks4 = dv.pages('"07People"').file.tasks;
let tasks5 = dv.pages('"00Journal"').file.tasks;

let tasks = [...tasks1, ...tasks2, ...tasks3, ...tasks4, ...tasks5];

let today = dv.date("today");
let tomorrow = dv.date("tomorrow");
let oneWeekLater = today.plus({ days: 6 });

// ==== 2. 分类任务 ====
let expiredTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() < today.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() < today.toJSDate())
));
let ongoingTasks = tasks.filter(t => t.status === "/");
let todoTasks = tasks.filter(t => t.status === " " && (!t.due && !t.scheduled));
let todayTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate().toDateString() === today.toJSDate().toDateString()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate().toDateString() === today.toJSDate().toDateString())
));
let tomorrowTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate().toDateString() === tomorrow.toJSDate().toDateString()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate().toDateString() === tomorrow.toJSDate().toDateString())
));
let thisWeekTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() > tomorrow.toJSDate() && dv.date(t.due).toJSDate() <= oneWeekLater.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() > tomorrow.toJSDate() && dv.date(t.scheduled).toJSDate() <= oneWeekLater.toJSDate())
));
let afterSevenDaysTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() > oneWeekLater.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() > oneWeekLater.toJSDate())
));
let completedTasks = tasks.filter(t => t.status === "x");

// ==== 3. 分类定义 ====
const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';

let categories = [
  { name: "逾期", query: ` (not done) AND ((due before today) OR (scheduled before today)) AND (status.type is not IN_PROGRESS)`, tasks: expiredTasks, color: "#ff4c4c" },
  { name: "进行中", query: `status.type is IN_PROGRESS`, tasks: ongoingTasks, color: "#4caf50" },
  { name: "待办", query: `(not done) AND ((no due date) AND (no scheduled date)) AND (status.type is not IN_PROGRESS)`, tasks: todoTasks, color: "#ff9800" },
  { name: "今天", query: ` (not done) AND ((scheduled on today) OR (due on today)) AND (status.type is not IN_PROGRESS)`, tasks: todayTasks, color: "#ffffff" },
  { name: "明天", query: ` (not done) AND ((due on tomorrow) OR (scheduled on tomorrow)) AND (status.type is not IN_PROGRESS)`, tasks: tomorrowTasks, color: "#00bcd4" },
  { name: "一周内", query: ` (not done) AND ((due after tomorrow) AND (due before in 7 day)) OR ((scheduled after tomorrow) AND (scheduled before in 7 day)) AND (status.type is not IN_PROGRESS)`, tasks: thisWeekTasks, color: "#8bc34a" },
  { name: "未来", query: ` (not done) AND ((due after in 7 day) OR (scheduled after in 7 day)) AND (status.type is not IN_PROGRESS)`, tasks: afterSevenDaysTasks, color: "#bbbbbb" },
  { name: "已完成", query: `done`, tasks: completedTasks, color: "#9e9e9e" },
];

// 当前选中分类索引（用于高亮）
let currentIndex = 0;

// ==== 4. 渲染分类卡片 ====
categories.forEach((cat, index) => {
  let card = cardsContainer.createDiv({ cls: "card" });

  // 卡片点击事件：高亮并切换任务
  card.onclick = () => {
    currentIndex = index;
    Array.from(cardsContainer.children).forEach((c, i) => {
      c.classList.toggle("active", i === index);
    });
    showTasks(index);
  };

  // 数字（即使为 0 也显示）
  let numberDiv = card.createDiv({ cls: "number", text: cat.tasks.length.toString() });
  numberDiv.style.color = cat.color;

  // 标签文字
  let labelDiv = card.createDiv({ cls: "label", text: cat.name });

  // 下划线颜色
  let underline = card.createDiv({ cls: "underline" });
  underline.style.backgroundColor = cat.color;
});

// ==== 5. 创建任务显示区域 ====
const taskListContainer = document.createElement('div');
taskListContainer.className = 'task-list';

// ==== 6. 渲染任务块 ====
function showTasks(index) {
  // 清空并重新挂载结构
  dv.container.innerHTML = "";
  dv.container.appendChild(cardsContainer);
  dv.container.appendChild(taskListContainer);

  let queryContainer = taskListContainer.createDiv();

  // 查询路径条件
  let basePaths = `(path includes 01Projects) OR (path includes 02Business) OR (path includes 00Todolist) OR (path includes People) OR (path includes 00Journal)`;

  // 构建任务查询代码块
  let query = [
    categories[index].query,
    basePaths,
    "sort by priority",
    "sort by created reverse",
    "short mode",
    "show tree"
  ].join("\n");

  // ✅ 构造完整 Markdown 代码块
  let fullBlock = "```tasks\n" + query + "\n```";

  // ✅ 插入查询语句（作为纯 Markdown 块，由 Obsidian Task 插件解析）
  dv.paragraph(fullBlock, queryContainer);
}

// ==== 7. 默认加载“今天”分类 ====
currentIndex = 3;
Array.from(cardsContainer.children).forEach((c, i) => {
  c.classList.toggle("active", i === currentIndex);
});
showTasks(currentIndex);
```

## 卡片样式 CSS 代码

```css
/* ------ 卡片式任务面版样式 -----*/
.dropdown-container {
  margin-bottom: 1em;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1px; /* 控制卡片左右间距 */
  row-gap: 2px;     /* 控制卡片上下间距 */
  margin: 1px 0px; 
}

.card {
  background: var(--background-secondary);
  border-radius: 4px; /* 12px */
  box-shadow: var(--shadow-s); 
  padding: 8px 0px; /*10px*/
  margin: 0px 1px;
  width: 60px;
  height: 60px;
  min-width: 45px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease; /* background 0.3s; */
}

.card:hover {
  transform: scale(1.05);
  background: #333;
}

.card .number {
  font-size: 1em;
  font-weight: bold;
  margin-top: -7px;
  padding-top: 0px;
}

.card .label {
  font-size: 0.8em;
  color: var(--text-muted);
  margin-top: 4px;
}


.underline {
  width: 36px;
  height: 1.5px;
  margin: 1px auto 0;
  border-radius: 1px;
}

.task-list {
  margin-top: 2px;
  padding-top: 0px;
  border-top: 1.5px solid #444;
}

.task-item {
  margin: 5px 0;
  font-size: 14px;
}

/* .cards-container .card.active {
/*   border: 1px solid var(--text-accent); /*让激活卡片采用高亮边框*/
/*  background-color: var(--background-secondary-alt); 
/*   transform: scale(1.05);
/* } */

.cards-container .card.active {
  background-color: var(--background-modifier-hover); /*var(--interactive-accent)：让激活卡片采用主题强调色背景。*/
  color: white;
}

.cards-container .card.active .number,
.cards-container .card.active .label {
  color: white;
}

.cards-container .card.active .underline {
  background-color: white;
}
```

## 「首页」展示版

对于想在首页作为任务管理展示用，可对代码进行精简，只展示任务分类和数量，而不展示具体的任务列表（没有任务交互功能），代码如下：

```dataviewjs
// ==== 1. 收集任务 ====
let tasks1 = dv.pages('"01Projects"').file.tasks;
let tasks2 = dv.pages('"02Business"').file.tasks;
let tasks3 = dv.pages('"00Todolist"').file.tasks;
let tasks4 = dv.pages('"07People"').file.tasks;
let tasks5 = dv.pages('"00Journal"').file.tasks;

let tasks = [...tasks1, ...tasks2, ...tasks3, ...tasks4, ...tasks5];

let today = dv.date("today");
let tomorrow = dv.date("tomorrow");
let oneWeekLater = today.plus({ days: 6 });

// ==== 2. 分类任务 ====
let expiredTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() < today.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() < today.toJSDate())
));
let ongoingTasks = tasks.filter(t => t.status === "/");
let todoTasks = tasks.filter(t => t.status === " " && (!t.due && !t.scheduled));
let todayTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate().toDateString() === today.toJSDate().toDateString()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate().toDateString() === today.toJSDate().toDateString())
));
let tomorrowTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate().toDateString() === tomorrow.toJSDate().toDateString()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate().toDateString() === tomorrow.toJSDate().toDateString())
));
let thisWeekTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() > tomorrow.toJSDate() && dv.date(t.due).toJSDate() <= oneWeekLater.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() > tomorrow.toJSDate() && dv.date(t.scheduled).toJSDate() <= oneWeekLater.toJSDate())
));
let afterSevenDaysTasks = tasks.filter(t => t.status === " " && (
    (t.due && dv.date(t.due).toJSDate() > oneWeekLater.toJSDate()) ||
    (t.scheduled && dv.date(t.scheduled).toJSDate() > oneWeekLater.toJSDate())
));
let completedTasks = tasks.filter(t => t.status === "x");

// ==== 3. 分类设置 ====
const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';

let categories = [
  { name: "逾期", tasks: expiredTasks, color: "#ff4c4c" },
  { name: "进行中", tasks: ongoingTasks, color: "#4caf50" },
  { name: "待办", tasks: todoTasks, color: "#ff9800" },
  { name: "今天", tasks: todayTasks, color: "#ffffff" },
  { name: "明天", tasks: tomorrowTasks, color: "#00bcd4" },
  { name: "一周内", tasks: thisWeekTasks, color: "#8bc34a" },
  { name: "未来", tasks: afterSevenDaysTasks, color: "#bbbbbb" },
  { name: "已完成", tasks: completedTasks, color: "#9e9e9e" },
];

// 当前选中分类索引
let currentIndex = -1;

// 显示分类卡片
categories.forEach((cat, index) => {
  let card = cardsContainer.createDiv({cls: "card"});
  let numberDiv = card.createDiv({cls: "number", text: String(cat.tasks.length)});
  numberDiv.style.color = cat.color;
  let labelDiv = card.createDiv({cls: "label", text: cat.name});
  let underline = card.createDiv({cls: "underline"});
  underline.style.backgroundColor = cat.color;

  card.onclick = () => {
    // 取消旧高亮
    if (currentIndex !== -1) {
      cardsContainer.children[currentIndex].classList.remove("active");
    }
    // 添加当前高亮
    card.classList.add("active");
    currentIndex = index;
  };
});

dv.container.appendChild(cardsContainer);
```
