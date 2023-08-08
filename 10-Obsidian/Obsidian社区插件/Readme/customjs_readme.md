---
uid: 2023080322165609
title: Obsidian 插件：【Readme】CustomJS
tags: ['自动化', '编程', '效率', 'obsidian插件', 'readme']
description: 允许用户编写自定义Javascript，你可以在任何地方调用，包括dataviewjs块和templater模板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CustomJS

> [!Note] 插件名片
> - 插件名称：CustomJS
> - 插件作者：Sam Lewis
> - 插件说明：允许用户编写自定义 Javascript，你可以在任何地方调用，包括 dataviewjs 块和 templater 模板。
> - 插件分类：[' 自动化 ', ' 编程 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/saml-dev/obsidian-custom-js)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?customjs)

## 概述

允许用户编写自定义 Javascript，你可以在任何地方调用，包括 dataviewjs 块和 templater 模板。

![CustomJS](https://cdn.pkmer.cn/covers/customjs.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/saml-dev/obsidian-custom-js/master/README.md)
>

---

## Readme(翻译）

下面是 [[customjs]] 插件的自述翻译

# CustomJS

CustomJS 是 Obsidian 的一个插件，允许用户编写自定义的 Javascript 代码，您可以在任何可以编写 JS 的地方调用它，包括 `dataviewjs` 块和 templater 模板。

✅ 在桌面和移动设备上都可以使用！

## 安装

推荐的是，在 Obsidian 社区插件浏览器中可以使用 CustomJS。

#### 手动安装

前往 [releases](https://github.com/samlewis0602/obsidian-custom-js/releases) 页面下载最新的 `main.js` 和 `manifest.json` 文件。在 `.obsidian/plugins` 文件夹内创建一个名为 `customjs` 的文件夹，并将这两个文件放入其中。

## 设置

告诉 CustomJS 加载什么代码。

注意：在路径中只使用正斜杠，反斜杠会破坏非 Windows 平台。

### 单个文件

一个以逗号分隔的文件列表，您想要加载的文件。

### 文件夹

指向包含您想要加载的 JS 文件的文件夹的路径。文件夹设置将递归地加载该文件夹中的所有 `*.js` 文件。因此，设置 `scripts` 将加载 `scripts/a.js` 和 `scripts/other/b.js`。

> ⚠️ 为了保持一致性，文件按照***文件名***的字母顺序加载，以便彼此之间可以有依赖关系。

### 注册可调用脚本

允许您将 [可调用脚本](#invocable-scripts) 绑定到热键。

### 启动脚本

在插件加载时执行的 [可调用脚本](#invocable-scripts)。您可以在 Obsidian 加载时使用它来初始化一些内容。

> ⚠️ 在“启动脚本”中对“window.customJS”对象所做的更改可能会被覆盖。为了避免这种情况，请遵循 [状态](#state) 提示。

## 用法/示例

CustomJS 通过编写 JavaScript 类来工作。每个文件只能包含一个类。

````
// 在scripts/coolString.js中的vault中
class CoolString {
    coolify(s) {
        return `😎 ${s} 😎`
    }
}


// *.md中的dataviewjs块
```dataviewjs
const {CoolString} = customJS
dv.list(dv.pages().file.name.map(n => CoolString.coolify(n)))
```

// templater模板
<%*
const {CoolString} = customJS;
tR += CoolString.coolify(tp.file.title);
%>
````

确保将 `scripts/coolString.js` 添加到 CustomJS 的设置页面，完成！当进入 dataviewjs 块的预览模式时，您应该看到所有文件的列表，带有额外的😎 - 插入 templater 模板将输出类似的结果，只显示当前文件名。

## 高级示例

您可以将任何内容作为参数传递给函数，以实现一些令人难以置信的代码重用。以下是我用来管理任务的 dataview 示例：

#### 每日笔记

````
```dataviewjs
const {DvTasks} = customJS
DvTasks.getOverdueTasks({app, dv, luxon, that:this, date:'2021-08-25'})
```

```dataviewjs
const {DvTasks} = customJS
DvTasks.getTasksNoDueDate({app, dv, luxon, that:this})
```

### 今天的任务
```dataviewjs
const {DvTasks} = customJS
DvTasks.getTodayTasks({app, dv, luxon, that:this, date:'2021-08-25'}) 
```

### 每日日记

```
class DvTasks {
  relDateString(d, luxon) {
    if (!(d instanceof luxon.DateTime)) return '–'
    const now = luxon.DateTime.now()
    const days = Math.ceil(d.diff(now, 'days').days)
    if (days < 0) return '逾期 ' + d.toFormat('L/d')
    if (days === 0) return '今天'
    if (days === 1) return '明天'
    if (days < 7) return d.toFormat('cccc')
    return d.toFormat('ccc L/d')
  }

  getButtonStrings(status) {
    const completed = status === 'Completed'
    const btnStr = completed ? '撤销' : '完成'
    const updateStr = completed ? '待办' : '已完成'
    return { btnStr, updateStr }
  }

  getCustomLink(name, target) {
    return `[[${target}|${name}]]`
  }

  getTodayTasks(args) {
    const { luxon, dv, date, that } = args
    const finalDate = date ?? dv.current().file.name
    return this.getTasksTable({
      ...args,
      filterFn: t => t.status != 'Completed' && t.dueDate && t.dueDate?.hasSame(luxon.DateTime.fromISO(finalDate), 'day')
    })
  }

  getOverdueTasks(args) {
    const { luxon, dv, date, that } = args
    const finalDate = date ?? dv.current().file.name
    return this.getTasksTable({
      ...args,
      prependText: '逾期',
      filterFn: t => t.dueDate && t.dueDate < luxon.DateTime.fromISO(finalDate) && t.status != 'Completed'
    })
  }

  getTasksNoDueDate(args) {
    return this.getTasksTable({
      ...args,
      prependText: '无截止日期',
      filterFn: t => !t.dueDate
    })
  }

  getTasksTable(args) {
    const {
      that,
      app,
      dv,
      luxon,
      getSortProp = t => t.dueDate,
      sortOrder = 'asc',
      filterFn = t => t.task,
      completedCol = false,
      prependHeaderLevel = 3,
      prependText
    } = args;
    const { metaedit, buttons } = app.plugins.plugins
    const { update } = metaedit.api
    const { createButton } = buttons


    const dueStr = completedCol ? '已完成' : '截止日期';
    const pages = dv.pages("#task").sort(getSortProp, sortOrder).where(filterFn)
    if (pages.length === 0) {
      // console.log('Empty dataview:', args)
      return
    }

    if (prependText) {
      dv.header(prependHeaderLevel, prependText)
    }

    dv.table(["名称", "类别", dueStr, "", ""], pages
      .map(t => {
        const { btnStr, updateStr } = this.getButtonStrings(t.status)
        return [
          this.getCustomLink(t.task, t.file.name),
          t.category,
          this.relDateString(t.dueDate, luxon),
          createButton({
            app,
            el: that.container,
            args: { name: btnStr },
            clickOverride: { click: update, params: ['状态', updateStr, t.file.path] }
          }),
        ]
      })
    )
  }
}
```

#### 结果
![结果](images/dvTasksExample.png)

### 异步使用

CustomJS通过挂钩一个事件来在Obsidian启动时加载您的模块，该事件表示Obsidian已准备就绪。这是其他插件（如[Templater](https://github.com/SilentVoid13/Templater)及其启动模板）也使用的事件，不幸的是，这意味着如果您想与它们一起使用CustomJS，可能会出现问题。

> `customJS`未定义

如果您发现`customJS`变量未定义，这意味着您希望在脚本继续执行之前强制加载它。为了实现这一点，我们提供了异步函数`forceLoadCustomJS()`，它也在全局范围内定义。这意味着您可以使用`await`来确保在需要时`customJS`将可用。

```js
await forceLoadCustomJS();
```

话虽如此，在大多数情况下，___您不需要这样做___。在Obsidian中进行的绝大多数JavaScript执行中，customJS将被加载。

### 可调用脚本

*可调用脚本* 是具有定义方法的类

```js
async invoke() {
  ...
}
```

您可以通过`CustomJS: Invoke Script`命令运行此类脚本。

此外，您还可以通过[设置](#registered-invocable-scripts)为所需的脚本注册单独的命令，并通过`CustomJS: MyScriptName`命令调用它。此外，您还可以为这些已注册的命令分配自定义热键。

### 状态

每当在保险库中修改任何`js`文件时，`window.customJS`对象都会被覆盖。如果您需要在这些修改期间保留一些数据，请将它们存储在`window.customJS.state`中。

## ☕️ 支持
您觉得CustomJS有用吗？考虑给我买杯咖啡来支持更新和开发更多类似的有用软件。谢谢！





