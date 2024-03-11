---
uid: 20240311175436
title: QuickAdd 脚本 -Project 项目选项栏
tags: [Project, quickadd脚本]
description: Project 项目选项栏
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240311180921
---

# QuickAdd 脚本 -Project 项目选项栏

## 背景

当使用 Project 插件时，只能设置一个默认的项目视图，其他项目视图需要手动切换或者在插件里面添加快捷指令，之后设置 Button 或者 Advanced URI 来的便捷打开指定的 Project 项目。

为了不用单独建一个页面来存放这些按钮，就采用 JS 获取 Project 的快捷指令，出现一个下拉选项，这样不用单独设置按钮了，通过下拉菜单选择指定项目来跳转。

![2024-03-08_QuickAdd脚本-Project项目选项栏_IMG-1](https://cdn.pkmer.cn/images/202403111756343.png!pkmer)

> [!caution]+ 只会获取 Project 已勾选的的项目
> ![2024-03-08_QuickAdd脚本-Project项目选项栏_IMG-2](https://cdn.pkmer.cn/images/202403111756344.png!pkmer)

## 代码

```js quickadd
const projeckIds = Object.keys(app.commands.commands)
    .filter(key => key.includes("obsidian-projects:show:"));
const projeckNames = ProjectCommands.map(i => app.commands.commands[i].name);

const quickAddApi = app.plugins.plugins.quickadd.api;
const id = await quickAddApi.suggester(projeckNames, projeckIds);
app.commands.executeCommandById(id);
```

可用 QuickAdd 的 Marco 或者 Capture 来调用

### Quickadd 配置 Macro

将下述脚本放在 Quickadd 的配置文件夹下，保存为 `ShowProjects.js` 文件，在 Quickadd 插件设置添加 Macro 动作，注意设置名称：

![2024-03-08_QuickAdd脚本-Project项目选项栏_IMG-3](https://cdn.pkmer.cn/images/202403111756345.png!pkmer)

在 Scripts 中选择对应的 `ShowProjects.js` 脚本，点击添加即可：

![2024-03-08_QuickAdd脚本-Project项目选项栏_IMG-4](https://cdn.pkmer.cn/images/202403111756346.gif!pkmer)
