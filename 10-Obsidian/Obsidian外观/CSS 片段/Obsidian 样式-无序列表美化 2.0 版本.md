---
uid: 20240812001139
title: Obsidian 样式：无序列表美化 2.0 版本
tags: [无序列表, quickadd, 样式与美化]
description: Obsidian 样式：无序列表美化 2.0 版本
author: 淡水鱼、上善若水
type: other
draft: false
editable: false
modified: 20240812001744
---

# Obsidian 样式：无序列表美化 2.0 版本

## css 来源

本 css 是群友 **@上善若水** 在 [PKMer_Obsidian 样式 - 无序列表卡片式美化]( https://pkmer.cn/show/20240331011456 ) 基础上进行迭代的全新版本！

具体优化点为：

1. 优化了 css 的代码框架
2. 新增了时间轴模式
3. 新增或优化表格化阅览、单卡片阅览、卡片号阅览的表现效果

本篇同时收录了 **@熊猫别熬夜** 写的一个巨巨巨实用的 quickadd 脚本，该脚本支持在编辑模式下自由切换无序列表美化 2.0 版本这个 css 片段的各种模式。

![无序-卡片化阅览快速切换css的js脚本展示|603x500](upload://6DgzaktqiHQte6pQMcKJCJYQjVi.gif)

没用过之前的版本，不会 quickadd 插件的用法也没有关系，以下是整个新版本的完整介绍，以及 quickadd 脚本的跟练式配置教程。

再再再夸一句， **@上善若水** 和 **@熊猫别熬夜** 真的是两个小天才！！٩(๑òωó๑)۶

## 2.本 css 的特点

本 css 具有以下特点 ：

1. **支持多种样式：** 本 css 主要针对 obsidian 的无序列表优化，主要有 4 种效果可以选择： **无序 - 时间轴阅览**、**无序 - 表格化阅览** 、**无序 - 单卡片视图** 、 **无序 - 卡片化阅览**
2. **可定制性强：** 支持使用 style setting 中根据自己的需要调整效果，同时支持在文章中使用：cssclass 控制特定文件的样式

## 3.基础效果说明

### 无序 - 时间轴阅览

![97e3db6587cc576a42f50cfc5bac4736|690x436](upload://eKsSsUqWlS7KI5pOS3G78ZTcDg2.png)

在属性的 cssclasses 中配置【无序 - 时间轴阅览】后会将无序列表渲染为时间轴模式，以下参数可以同时存在：

- cssclasses 参数 1：无序 - 时间轴阅览，默认参数，必填，配置后激活效果
- cssclasses 参数 2：标题下划线模式，顾名思义在标题处增加横线。值得注意的时，标题判断的标准是，**一层级之下的第一个二层级的第一个无序列表**
- cssclasses 参数 3：移动端模式，为适配移动端而设计的模式，可根据情况调用。

### 无序 - 表格化阅览

在属性的 cssclasses 中配置【无序 - 表格化阅览】后会将无序列表渲染为表格，【无序 - 表格化阅览】共支持 3 种效果，分别为：

- 默认效果：无序 - 表格化阅览，配置后激活效果
- 看板模式：无序 - 表格化阅览 - 看板，配置后激活效果
- 表格列合并模式：无序 - 表格化阅览 - 下，配置后激活效果

![无序表格化阅览|690x483](upload://tryuKfOqkwllgu3ym7mMzmGtF0E.png)

注：值得注意的是，在这 3 个效果模式外，【无序 - 表格化阅览】这个模式还有一个特殊的参数：**自适应模式**，顾名思义是可以支持表格的自适应效果。具体如下图所示：

![自适应效果|690x329](https://cdn.pkmer.cn/optimized/1X/7EieMzeCwS5I5AIpAxLTf8TZ8z5.png?dl=1)

### 无序 - 单卡片阅览

在属性的 cssclasses 中配置【无序 - 单卡片阅览】后会将无序列表渲染为卡片的样式。可以根据需要控制一个界面内想要显示的“列”数。

- 默认效果：无序 - 单卡片阅览，配置后激活效果。默认效果自动适配界面宽度，会根据界面宽度来调整一页内显示多少列卡片。
- 控制界面显示数列的参数：无序 - 单卡片阅览 -X（x 为 1-4 的整数）。

![无序单卡片阅览|690x437](upload://3PxWYvvhqSDE9oDauouNmtl00Ip.png)

### 无序 - 卡片化阅览

在属性的 cssclasses 中配置【无序 - 卡片化阅览】后会将无序列表渲染为卡片的样式。【无序 - 卡片化阅览】共支持 3 种效果，分别为：

- 默认效果：无序 - 卡片化阅览，配置后激活效果，从第 3 层级开始展开
- 无序 - 卡片化阅览 -1：配置后激活效果，从第 1 层级开始展开
- 无序 - 卡片化阅览 -2：配置后激活效果，从第 2 层级开始展开

![无序卡片化阅览|690x403](upload://2H0DjiFMSD6vc22khXX8N1P6KfW.jpeg)

注：值得注意的是，在这 3 个效果模式外，【无序 - 卡片化阅览】这个模式还有一个特殊的参数用来**控制界面显示卡片列数**，当前支持的列数为 2-4 列，配置反思为在**cssclass 中额外添加：无序 -X 列（X=二、三、或四）**。即无序 - 二列、无序 - 三列、无序 - 四列 ![分裂效果展示|428x500](upload://glB2DXAhGW8zDIWKHnStv1EmhMZ.png)

## 4.style setting

使用 style setting 可以自定义表格的无序列表美化所有模式的样式，本次版本设置比较简单，这边就不进行展开。（有好的配色参考记得到在留言区补充哦）

附 1：style setting 设置界面样式

![style setting界面|354x500](upload://onLbbyBlTnIiUaKBCSqDK3kLkoQ.png)

## 5.quickadd 脚本

使用 **Quickadd 插件**和 **Commander 插件**可以实现快捷切换这个 css 片段的各种模式，以下为具体效果展示：

- [PKMer_Obsidian 插件：QuickAdd 自动化操作的编辑器]( https://pkmer.cn/show/20230508001129 )
- [PKMer_Obsidian 插件：Commander 添加自定义功能按钮]( https://pkmer.cn/show/20230329145312 )

![无序-卡片化阅览快速切换css的js脚本展示|603x500](upload://6DgzaktqiHQte6pQMcKJCJYQjVi.gif)

由于 **Quickadd 插件**属于很实用，但是属于公认的折腾，以下我会比较详细地介绍怎么配置。比较熟悉这个插件的朋友们直接查看具体的 quick 脚本。

### 5.1 使用 quickadd 添加一个命令

### 5.11 将 js 代码添加到 js 文件夹中

1. 新建一个文件夹用于存放 js 文件，本来库中有存放 js 文件的文件夹这步可以忽略。
2. 右击文件夹进入资源管理器，在当前文件夹下新建一个文本文档，命名为：**【无序列表样式 - 上善若水】样式切换器.js**
3. 用记事本打开文件将如下代码复制进去：

```js quickadd
    // 注：本片段来自“ 【PKMer】熊猫别熬夜 ”大佬

const activeFile = app.workspace.getActiveFile();
const choices = ["默认视图", "无序-卡片化阅览", "无序-卡片化阅览-1", "无序-卡片化阅览-2", "无序-卡片化阅览 无序-二列", "无序-卡片化阅览 无序-三列", "无序-卡片化阅览 无序-四列", "无序-表格化阅览", "无序-表格化阅览-看板", "无序-表格化阅览-下", "无序-表格化阅览-下 自适应模式", "无序-单卡片阅览", "无序-单卡片阅览 无序-单卡片阅览-1", "无序-单卡片阅览 无序-单卡片阅览-2", "无序-单卡片阅览 无序-单卡片阅览-4", "无序-时间轴阅览", "无序-时间轴阅览 标题下划线模式", "无序-时间轴阅览 移动端模式", "无序-时间轴阅览 移动端模式 标题下划线模式"];
module.exports = async (params) => {
  const quickaddApi = app.plugins.plugins.quickadd.api;
  const choice = await quickaddApi.suggester(choices, choices);
  if (!choice) return;

  await app.fileManager.processFrontMatter(activeFile, fm => {
    if (!fm["cssclasses"]) fm["cssclasses"] = [];
    // 清除所有选项
    fm["cssclasses"] = fm["cssclasses"].filter(item => !choices.includes(item));

    // 根据选择的选项添加对应的视图
    for (let i = 1; i < choices.length; i++) {
      if (choice === choices[i]) {
        fm["cssclasses"].push(choices[i]);
        return;
      }
    }
  });
  console.log("运行完成");
};
```

1. 在 Quickadd 插件中将模板的位置设置为 js 文件夹所在的位置 ![设置模板文件位置|690x474](upload://b08BioGlFwnjmh325Fx7ZEdPKZB.png)

### 5.12 利用 Quickadd 插件调用 js 文件

1. 打开 quickadd 插件的设置界面，点击 `Manage Macros` 按钮 ![点击 manage macro 按钮|690x464](upload://p2nrf0fsYyn42IgoryCCS81cVI3.png)
2. 给新建的宏命名，本处以：【无序列表 - 快捷切换】为例，点击 `Add macro` 按钮。

   * 新安装插件的话会发现界面是空的![Pasted image 20240718213923|572x500](upload://kYGszrLUk5WhksfXxwAb9ZbW6UP.png)
   * 成功添加后的效果：![Pasted image 20240718230139|570x500](upload://zp3oFzCexpl21gcYR8LqN0Y9KNs.png)

3. 点击 `Configure` 按钮进入如下界面，选择相应的 js 文件，点击 `add` ! ![Pasted image 20240718230721|622x500](upload://9EXeopYx0CcuhweTWo6jsj7g29c.png)
4. 回到 quickadd 初始界面，新建一个命令，此处以：【无序列表快捷切换】为例 ![Pasted image 20240718231049|690x233](upload://x1fwjIT7mIhT5pltjfA2j2H1urH.png)
5. 成功添加命令后，会发现初始界面最上方多了一行命令，点击设置的图标，可以调整调整命令的参数，具体如图所示 ![调整命令的具体参数|588x500](upload://cThK5vIC2G3P37FdPRhxcBAsOrC.png)
6. **点亮的小闪电，正式启动命令。（这一步真的巨容易漏）** ![点亮小闪电|690x144](upload://vXGO9RGu6W0ZSHMNS8ngMfhqQRe.png)


- 成功启动后，我们会发现我们可以在命令面板中搜到之前这个命令：![命令面板|690x194](https://cdn.pkmer.cn/original/1X/kCrQcBxd2BQja8C7zOoo7GLO1px.png)

### 5.2 使用 Commander 插件在界面上创建一个图标

1. 在你想要添加图标的地方点击添加命令，此处以页首为例：![页首|690x368](upload://saSNiG1sZjvyJlMRFtpgk9EXqHC.png)
2. 在弹出的界面中，搜索并选中【5.1 使用 quickadd 添加一个命令】中我们创建的命令，即：无序列表快速切换。![Pasted image 20240718232634|690x198](upload://5f3obQKcOAI5yTgDd9uulSHYha0.png)
3. 系统会提示可以挑选：图标与自定义命令别称 ![挑选图标|569x500](upload://e4Es3WRIxOwRbi1urwVcId9IH0o.png) ![自定义名称|690x84](upload://lBgD7QQFtw85zISHLycRpFFnaCi.png)
4. 成功使用 Commander 插件在界面上创建一个图标，完结撒花~~
![Pasted image 20240718233148|387x271](upload://fgQi3pAc8u45XyOKM5Apm7gc5eO.png)

## 6.css 片段

```css
/* @settings
name: 【无序List】卡片化阅览
id: wxlbMH
from: 【PKMer】上善若水
settings:
  -
    id: wxlbMH-STMS
    title: 视图模式选择
    type: class-select
    allowEmpty: false
    default: wxlbMH-STMS-cssclasses
    options:
      -
        label: cssclasses模式
        value: wxlbMH-STMS-cssclasses
  -
    id: wxlbMH-KPHYL
    title: 【无序-卡片化阅览】
    type: heading
    level: 1
    collapsed: true
  -
    id: wxlbMH-wxlbMH-kphYL-list-1
    title: 【列表设置】一级
    type: heading
    level: 2
    collapsed: true
  -
    id: wxlbMH-list-1-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-1-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-BJ-color-tmd-light
    title: 【背景】颜色透明度（浅色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-1-BJ-color-tmd-dark
    title: 【背景】颜色透明度（深色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-wxlbMH-kphYL-list-2
    title: 【列表设置】二级
    type: heading
    level: 2
    collapsed: true
  -
    id: wxlbMH-list-2-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-2-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-BJ-color-tmd-light
    title: 【背景】颜色透明度（浅色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-2-BJ-color-tmd-dark
    title: 【背景】颜色透明度（深色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-wxlbMH-kphYL-list-3
    title: 【列表设置】三级
    type: heading
    level: 2
    collapsed: true
  -
    id: wxlbMH-list-3-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-3-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-XT-color
    title: 【悬停】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-BJ-color-tmd-light
    title: 【背景】颜色透明度（浅色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-3-BJ-color-tmd-dark
    title: 【背景】颜色透明度（深色模式）
    type: variable-number-slider
    default: 50
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-3-XT-color-tmd-light
    title: 【悬停】颜色透明度（浅色模式）
    type: variable-number-slider
    default: 20
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-3-XT-color-tmd-dark
    title: 【悬停】颜色透明度（深色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-wxlbMH-kphYL-list-1
    title: 【列表设置】四级
    type: heading
    level: 2
    collapsed: true
  -
    id: wxlbMH-list-4-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-4-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-XT-color
    title: 【悬停】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-BJ-color-tmd-light
    title: 【背景】颜色透明度
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-4-BJ-color-tmd-dark
    title: 【背景】颜色透明度（深色模式）
    type: variable-number-slider
    default: 50
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-4-XT-color-tmd-light
    title: 【悬停】颜色透明度（浅色模式）
    type: variable-number-slider
    default: 90
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-list-4-XT-color-tmd-dark
    title: 【悬停】颜色透明度（深色模式）
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-dkpYL
    title: 【无序-单卡片阅览】
    type: heading
    level: 1
    collapsed: true
  -
    id: wxlbMH-cards-btZT-color
    title: 【标题字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-cards-zwZT-color
    title: 【正文字体】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-cards-BK-color
    title: 【边框】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-cards-BJ-color
    title: 【背景】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-cards-btXHX-color
    title: 【标题下划线】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-cards-BJ-tmd
    title: 【背景】颜色透明度
    type: variable-number-slider
    default: 10
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-Timeline
    title: 【无序-时间轴阅览】
    type: heading
    level: 1
    collapsed: true
  -
    id: wxlbMH-Timeline-ZbtZT-color
    title: 【左侧标题字体】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-YbtZT-color
    title: 【右侧标题字体】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-zwZT-color
    title: 【正文字体】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-yqTA-color
    title: 【圆圈】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-BJ-color
    title: 【背景】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-BK-color
    title: 【边框】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-XHX-color
    title: 【下划线】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-sjzXT-color
    title: 【时间轴】颜色
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-Timeline-BJ-tmd
    title: 【背景】颜色透明度
    type: variable-number-slider
    default: 10
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-Timeline-BK-tmd
    title: 【边框】颜色透明度
    type: variable-number-slider
    default: 100
    min: 0
    max: 100
    format: "%"
  -
    id: wxlbMH-Timeline-BK-2-tmd
    title: 【边框2】颜色透明度
    type: variable-number-slider
    default: 80
    min: 0
    max: 100
    format: "%"
  -
*/
.theme-light {
  --无序-卡片化阅览-一级列表-边框-颜色:rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
  --无序-卡片化阅览-一级列表-背景-颜色:rgba(var(--wxlbMH-list-1-BJ-color,210, 210, 200),var(--wxlbMH-list-1-BJ-color-tmd-light,1));
  --无序-卡片化阅览-一级列表-字体-颜色:rgba(var(--wxlbMH-list-1-ZT-color,28,28,28),1);
  --无序-卡片化阅览-一级列表-字体-大小:var(--wxlbMH-list-1-ZT-size,14px);

  --无序-卡片化阅览-二级列表-边框-颜色:rgba(var(--wxlbMH-list-2-BK-color,148, 146, 128, 0.4)) 0px 0px 2px 1px, rgba(15, 15, 15, 0.4) 0px 0px 0px 2px;
  --无序-卡片化阅览-二级列表-背景-颜色:rgba(var(--wxlbMH-list-2-BJ-color,243, 242, 235),var(--wxlbMH-list-2-BJ-color-tmd-light,1));
  --无序-卡片化阅览-二级列表-字体-颜色:rgba(var(--wxlbMH-list-2-ZT-color,28,28,28),1);
  --无序-卡片化阅览-二级列表-字体-大小:var(--wxlbMH-list-2-ZT-size,14px);

  --无序-卡片化阅览-三级列表-边框-颜色:rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.5)) 0px 0px 0px 2px;
  --无序-卡片化阅览-三级列表-背景-颜色:rgba(var(--wxlbMH-list-3-BJ-color,189, 191, 167),var(--wxlbMH-list-3-BJ-color-tmd-light,1));
  --无序-卡片化阅览-三级列表-字体-颜色:rgba(var(--wxlbMH-list-3-ZT-color,28,28,28),1);
  --无序-卡片化阅览-三级列表-悬停-颜色:rgba(var(--wxlbMH-list-3-XT-color,137, 139, 65),var(--wxlbMH-list-3-XT-color-tmd-light,0.2));
  --无序-卡片化阅览-三级列表-字体-大小:var(--wxlbMH-list-3-ZT-size,14px);

  --无序-卡片化阅览-四级列表-边框-颜色:rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.8)) 0px 0px 2px 1px;
  --无序-卡片化阅览-四级列表-背景-颜色:rgba(var(--wxlbMH-list-4-BJ-color,214, 213, 198),var(--wxlbMH-list-4-BJ-color-tmd-light,1));
  --无序-卡片化阅览-四级列表-字体-颜色:rgba(var(--wxlbMH-list-4-ZT-color,28,28,28),1);
  --无序-卡片化阅览-四级列表-悬停-颜色:rgba(var(--wxlbMH-list-4-XT-color,255, 253, 221),var(--wxlbMH-list-4-XT-color-tmd-light,0.9));
  --无序-卡片化阅览-四级列表-字体-大小:var(--wxlbMH-list-4-ZT-size,14px);

  --无序-卡片化阅览-五级列表-边框-颜色:rgba(var(--wxlbMH-list-5-BK-color));
  --无序-卡片化阅览-五级列表-背景-颜色:rgba(var(--wxlbMH-list-5-BJ-color));
  --无序-卡片化阅览-五级列表-字体-颜色:rgba(var(--wxlbMH-list-5-ZT-color));
  --无序-卡片化阅览-五级列表-悬停-颜色:rgba(var(--wxlbMH-list-5-color-XT));
  --无序-卡片化阅览-五级列表-字体-大小:var(--wxlbMH-list-4-ZT-size);

  --无序-卡片化阅览-六级列表-边框-颜色:rgba(var(--wxlbMH-list-6-BK-color));
  --无序-卡片化阅览-六级列表-背景-颜色:rgba(var(--wxlbMH-list-6-BJ-color));
  --无序-卡片化阅览-六级列表-字体-颜色:rgba(var(--wxlbMH-list-6-ZT-color));
  --无序-卡片化阅览-六级列表-字体-颜色-悬停:rgba(var(--wxlbMH-list-6-color-XT));
  --无序-卡片化阅览-六级列表-字体-大小:var(--wxlbMH-list-6-ZT-size);

  --无序-单卡片阅览-标题字体-颜色:rgba(var(--wxlbMH-cards-btZT-color,28,28,28),1);
  --无序-单卡片阅览-正文字体-颜色:rgba(var(--wxlbMH-cards-zwZT-color,28,28,28),1);
  --无序-单卡片阅览-背景-颜色:var(--wxlbMH-cards-BJ-color,210, 210, 200,1);
  --无序-单卡片阅览-边框-颜色:rgba(var(--wxlbMH-cards-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
  --无序-单卡片阅览-标题下划线-颜色:rgba(var(--wxlbMH-cards-btXHX-color,91, 100, 27),1);

  --无序-时间轴阅览-左侧标题字体-颜色:rgba(var(--wxlbMH-Timeline-ZbtZT-color,28,28,28),1);
  --无序-时间轴阅览-右侧标题字体-颜色:rgba(var(--wxlbMH-Timeline-YbtZT-color,28,28,28),1);
  --无序-时间轴阅览-正文字体-颜色:rgba(var(--wxlbMH-Timeline-zwZT-color,28,28,28),1);
  --无序-时间轴阅览-圆圈图案-颜色:rgba(var(--wxlbMH-Timeline-yqTA-color,175, 200, 40),var(--wxlbMH-Timeline-yqTA-tmd,1));
  --无序-时间轴阅览-背景-颜色:rgba(var(--wxlbMH-Timeline-BJ-color,162, 162, 111),var(--wxlbMH-Timeline-BJ-tmd,0.1));
  --无序-时间轴阅览-边框-颜色:rgba(var(--wxlbMH-Timeline-BK-color,143, 157, 70),var(--wxlbMH-Timeline-BK-tmd,1));
  --无序-时间轴阅览-边框2-颜色:rgba(var(--wxlbMH-Timeline-BK-color,143, 157, 70),var(--wxlbMH-Timeline-BK-2-tmd,0.8));
  --无序-时间轴阅览-右侧标题下划线-颜色:rgba(var(--wxlbMH-Timeline-XHX-color,153, 178, 75));
  --无序-时间轴阅览-时间轴线-颜色:rgba(var(--wxlbMH-Timeline-sjzXT-color,150, 160, 30),0.15);
}
.theme-dark {
  --无序-卡片化阅览-一级列表-边框-颜色:rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15),1)0px 0px 0px 3px;
  --无序-卡片化阅览-一级列表-背景-颜色:rgba(var(--wxlbMH-list-1-BJ-color,46, 61, 95),var(--wxlbMH-list-1-BJ-color-tmd-dark,1));
  --无序-卡片化阅览-一级列表-字体-颜色:rgba(var(--wxlbMH-list-1-ZT-color,146,198,253),1);
  --无序-卡片化阅览-一级列表-字体-大小:var(--wxlbMH-list-1-ZT-size,14px);

  --无序-卡片化阅览-二级列表-边框-颜色:rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1)) 0px 0px 0px 2px;
  --无序-卡片化阅览-二级列表-背景-颜色:rgba(var(--wxlbMH-list-2-BJ-color,26, 39, 69),var(--wxlbMH-list-2-BJ-color-tmd-dark,1));
  --无序-卡片化阅览-二级列表-字体-颜色:rgba(var(--wxlbMH-list-2-ZT-color,198,208,245),1);
  --无序-卡片化阅览-二级列表-字体-大小:var(--wxlbMH-list-2-ZT-size,14px);

  --无序-卡片化阅览-三级列表-边框-颜色:rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
  --无序-卡片化阅览-三级列表-背景-颜色:rgba(var(--wxlbMH-list-3-BJ-color,59, 83, 248),var(--wxlbMH-list-3-BJ-color-tmd-dark,0.5));
  --无序-卡片化阅览-三级列表-字体-颜色:rgba(var(--wxlbMH-list-3-ZT-color,198,208,245),1);
  --无序-卡片化阅览-三级列表-悬停-颜色:rgba(var(--wxlbMH-list-3-XT-color,59, 83, 248),var(--wxlbMH-list-3-XT-color-tmd-dark,1));
  --无序-卡片化阅览-三级列表-字体-大小:var(--wxlbMH-list-3-ZT-size,14px);

  --无序-卡片化阅览-四级列表-边框-颜色:rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
  --无序-卡片化阅览-四级列表-背景-颜色:rgba(var(--wxlbMH-list-4-BJ-color,33, 33, 33),var(--wxlbMH-list-4-BJ-color-tmd-dark,0.5));
  --无序-卡片化阅览-四级列表-字体-颜色:rgba(var(--wxlbMH-list-4-ZT-color,198,208,245),1);
  --无序-卡片化阅览-四级列表-悬停-颜色:rgba(var(--wxlbMH-list-4-XT-color,24, 115, 168),var(--wxlbMH-list-4-XT-color-tmd-dark,1));
  --无序-卡片化阅览-四级列表-字体-大小:var(--wxlbMH-list-4-ZT-size,14px);

  --无序-卡片化阅览-五级列表-边框-颜色:rgba(var(--wxlbMH-list-5-BK-color));
  --无序-卡片化阅览-五级列表-背景-颜色:rgba(var(--wxlbMH-list-5-BJ-color));
  --无序-卡片化阅览-五级列表-字体-颜色:rgba(var(--wxlbMH-list-5-ZT-color));
  --无序-卡片化阅览-五级列表-悬停-颜色:rgba(var(--wxlbMH-list-5-XT-color));
  --无序-卡片化阅览-五级列表-字体-大小:var(--wxlbMH-list-4-ZT-size,14px);

  --无序-卡片化阅览-六级列表-边框-颜色:rgba(var(--wxlbMH-list-6-BK-color));
  --无序-卡片化阅览-六级列表-背景-颜色:rgba(var(--wxlbMH-list-6-BJ-color));
  --无序-卡片化阅览-六级列表-字体-颜色:rgba(var(--wxlbMH-list-6-ZT-color));
  --无序-卡片化阅览-六级列表-悬停-颜色:rgba(var(--wxlbMH-list-6-XT-color));
  --无序-卡片化阅览-六级列表-字体-大小:var(--wxlbMH-list-6-ZT-size,14px);
  
  --无序-单卡片阅览-标题字体-颜色:rgba(var(--wxlbMH-cards-btZT-color,218,218,218),1);
  --无序-单卡片阅览-正文字体-颜色:rgba(var(--wxlbMH-cards-zwZT-color,218,218,218),1);
  --无序-单卡片阅览-背景-颜色:var(--wxlbMH-cards-BJ-color,59, 83, 248);
  --无序-单卡片阅览-边框-颜色:rgba(var(--wxlbMH-cards-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
  --无序-单卡片阅览-标题下划线-颜色:rgba(var(--wxlbMH-cards-btXHX-color,59, 83, 248),1);

  --无序-时间轴阅览-左侧标题字体-颜色:rgba(var(--wxlbMH-Timeline-ZbtZT-color,218,218,218),1);
  --无序-时间轴阅览-右侧标题字体-颜色:rgba(var(--wxlbMH-Timeline-YbtZT-color,218,218,218),1);
  --无序-时间轴阅览-正文字体-颜色:rgba(var(--wxlbMH-Timeline-zwZT-color,218,218,218),1);
  --无序-时间轴阅览-圆圈图案-颜色:rgba(var(--wxlbMH-Timeline-yqTA-color,71, 108, 255),var(--wxlbMH-Timeline-yqTA-tmd,1));
  --无序-时间轴阅览-背景-颜色:rgba(var(--wxlbMH-Timeline-BJ-color,59, 83, 248),var(--wxlbMH-Timeline-BJ-tmd,0.1));
  --无序-时间轴阅览-边框-颜色:rgba(var(--wxlbMH-Timeline-BK-color,15, 15, 15),var(--wxlbMH-Timeline-BK-tmd,1));
  --无序-时间轴阅览-边框2-颜色:rgba(var(--wxlbMH-Timeline-BK-color,15, 15, 15),var(--wxlbMH-Timeline-BK-2-tmd,0.8));
  --无序-时间轴阅览-右侧标题下划线-颜色:rgba(var(--wxlbMH-Timeline-XHX-color,59, 83, 248));
  --无序-时间轴阅览-时间轴线-颜色:rgba(var(--wxlbMH-Timeline-sjzXT-color,134 134,134),0.15);
}
.无序-卡片化阅览:is(.markdown-preview-view) .list-bullet{
  display: none !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-卡片化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
  content: unset;
}
.无序-卡片化阅览:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
.markdown-rendered.无序-卡片化阅览:is(.markdown-preview-view) .list-collapse-indicator {
  margin-inline-start: -1em;
  padding-inline-end: 100%;
}
.无序-卡片化阅览:is(.markdown-preview-view) .markdown-rendered .internal-link {
  text-decoration-line: none;
}
@media (max-width:426px) {
  .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
    flex: 1 1 100% !important;
  }
}
.无序-卡片化阅览:is(.markdown-preview-view) ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.1em 0.5em 0em 0.5em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.2em 0em 0.1em 0.3em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul {
  flex-direction: row;
  margin: 0.2em 0em 0.1em 0.3em;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  margin: 0em 0em 1.5em 0em;
  flex: 1 1 100%;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.5em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex: 1 1 20%;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-二级列表-边框-颜色);
  border-radius: 2pt;
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-二级列表-边框-颜色);
  border-radius: 2pt;
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
  color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
  color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
  color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
  color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-四列 ul>li:not(.task-list-item) {
  flex: 1 1 20% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-四列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-三列 ul>li:not(.task-list-item) {
  flex: 1 1 30% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-三列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-二列 ul>li:not(.task-list-item) {
  flex: 1 1 40% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-二列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 20% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
body.theme-light .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-light .无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) .list-bullet{
  display: none !important;
}
.无序-卡片化阅览-1:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-卡片化阅览-1:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
  content: unset;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
.markdown-rendered.无序-卡片化阅览-1:is(.markdown-preview-view) .list-collapse-indicator {
  margin-inline-start: -1em;
  padding-inline-end: 100%;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) .markdown-rendered .internal-link {
  text-decoration-line: none;
}
@media (max-width:426px) {
  .无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
    flex: 1 1 40% !important;
  }
  .无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    flex: 1 1 100% !important;
  }
}
.无序-卡片化阅览-1:is(.markdown-preview-view) ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.2em 0em 0.1em 0.3em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  margin: 8px 8px 8px 8px;
  flex: 1 1 20%;
  padding:2px 1px;
}
.无序-卡片化阅览-1:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  padding:2px 1px;
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-二级列表-边框-颜色);
  border-radius: 2pt;
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-二级列表-边框-颜色);
  border-radius: 2pt;
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-三级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
  box-shadow: var(--无序-卡片化阅览-四级列表-边框-颜色);
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
  color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
  color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
  color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
  color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:hover {
  background: var(--无序-卡片化阅览-三级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-light .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
body.theme-dark .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:hover {
  background: var(--无序-卡片化阅览-四级列表-悬停-颜色);
  transition-duration:200ms;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) .list-bullet{
  display: none !important;
}
.无序-卡片化阅览-2:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-卡片化阅览-2:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
  content: unset;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
.markdown-rendered.无序-卡片化阅览-2:is(.markdown-preview-view) .list-collapse-indicator {
  margin-inline-start: -1em;
  padding-inline-end: 100%;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) .markdown-rendered .internal-link {
  text-decoration-line: none;
}
@media (max-width:426px) {
  .无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
    flex: 1 1 40% !important;
  }
  .无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    flex: 1 1 100% !important;
  }
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.2em 0em 0.1em 0.3em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  margin: 0em 0em 1em 0em;
  flex: 1 1 100%;
  padding: 3px 3px;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  margin: 8px 8px 8px 8px;
  flex: 1 1 20%;
  padding:2px 1px;
}
.无序-卡片化阅览-2:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  padding:2px 1px;
}
body {
  --单卡片-最小宽度: 180px;
  --单卡片-最大宽度: 1fr;
  --单卡片-内边距: 1.2em;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
@media (max-width:426px) {
  .无序-单卡片阅览 {
    --单卡片-最小宽度: 100% !important;
    --单卡片-列数: repeat(
      auto-fit,
      minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
    ) !important;
  }
}
.无序-单卡片阅览.markdown-preview-view .list-bullet,
.无序-单卡片阅览.markdown-preview-view .list-collapse-indicator,
.无序-单卡片阅览.markdown-preview-view.markdown-rendered.show-indentation-guide
  li > ul::before {
  display: none !important;
}
.无序-单卡片阅览.markdown-preview-view div > ul > li > a {
  --link-decoration: none;
  --link-external-decoration: none;
  font-weight: var(--bold-weight);
}
.无序-单卡片阅览.无序-单卡片阅览-1 {
  --单卡片-最小宽度: 100%;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
.无序-单卡片阅览.无序-单卡片阅览-2 {
  --单卡片-最小宽度: 40%;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
.无序-单卡片阅览.无序-单卡片阅览-4 {
  --单卡片-最小宽度: 20%;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
.无序-单卡片阅览.无序-单卡片阅览-5 {
  --单卡片-最小宽度: 16%;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
.无序-单卡片阅览.无序-单卡片阅览-6 {
  --单卡片-最小宽度: 14%;
  --单卡片-列数: repeat(
    auto-fit,
    minmax(var(--单卡片-最小宽度), var(--单卡片-最大宽度))
  );
}
.无序-单卡片阅览.markdown-preview-view div > ul {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: var(--单卡片-列数);
  padding: 0;
  line-height: var(--line-height-tight);
}
.无序-单卡片阅览.markdown-preview-view div > ul > li {
  padding: calc(var(--单卡片-内边距) / 2);
  border-radius:3px;
  overflow: hidden;
  margin: 0px 0px;
}
body.theme-light .无序-单卡片阅览.markdown-preview-view div > ul > li {
  background-color: rgba(var(--无序-单卡片阅览-背景-颜色));
  box-shadow: var(--无序-单卡片阅览-边框-颜色);
}
body.theme-dark .无序-单卡片阅览.markdown-preview-view div > ul > li {
  background-color: rgba(var(--无序-单卡片阅览-背景-颜色),var(--wxlbMH-cards-BJ-tmd,0.1));
  border: 1.5px solid rgba(var(--wxlbMH-cards-BK-color,15, 15, 15, 0.5));
}
.无序-单卡片阅览.markdown-preview-view div > ul >li {
  color: var(--无序-单卡片阅览-标题字体-颜色);
  font-size: var(--wxlbMH-cards-btZT-size);
}
.无序-单卡片阅览.markdown-preview-view div > ul ul >li {
  color: var(--无序-单卡片阅览-正文字体-颜色);
}
.无序-单卡片阅览.markdown-preview-view div > ul > li > ul {
  margin-top: 3px ;
  border-top: 2px solid var(--无序-单卡片阅览-标题下划线-颜色);
}
.无序-单卡片阅览.markdown-preview-view ul ul {
  display: block;
  width: 100%;
  margin: calc(var(--单卡片-内边距) / -4) 0;
  padding: calc(var(--单卡片-内边距) / 2) 0;
}
.无序-单卡片阅览.markdown-preview-view div ul ul ul {
  padding-bottom: calc(var(--单卡片-内边距) / 4);
}
.无序-单卡片阅览.markdown-preview-view div ul ul > li {
  display: block;
}

body.theme-dark .无序-单卡片阅览.markdown-preview-view div > ul > li:hover{
  background-color: rgba(var(--无序-单卡片阅览-背景-颜色),var(--wxlbMH-cards-xtBJ-tmd,0.3));
  transition-duration:150ms;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0em 1em 0em;
  align-items: center;
  padding: 3px 3px;
  align-items: stretch;
  flex-wrap: wrap;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  margin: 1px -6px -7px -6px;
  justify-content: center;
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul {
  display: flex;
  margin: 1px -6px -11px -6px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  padding-top: 4px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul {
  display: flex;
  margin: 3px -6px -6px -6px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul ul {
  display: flex;
  margin: 3px -4px -4px -4px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul ul ul {
  display: flex;
  margin: 3px -4px -4px -4px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
  display: list-item;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 0pt;
  margin: 0px 0px 30px 0px;
  flex-wrap: nowrap;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  flex: 1 1 100%;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -0px -1px -0px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 0pt;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  flex:auto;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
  display: list-item;
  justify-content: center;
  margin: -1px -1px 4px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 3px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 3px;
  padding-right:3px;
  padding-bottom: 3px;
  padding-left: 3px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 3px;
  padding-right:3px;
  padding-bottom: 3px;
  padding-left: 3px;
}
.无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 3px;
  padding-right:3px;
  padding-bottom: 3px;
  padding-left: 3px;
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
.无序-表格化阅览-下:is(.markdown-preview-view) .list-bullet{
display: none;
}
.无序-表格化阅览-下:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
content: unset;
}
.无序-表格化阅览-下:is(.markdown-preview-view).markdown-rendered .list-collapse-indicator {
margin-inline-start: -10px;
padding-inline-end: 100%;
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) ul li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
  color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) ul li:not(.task-list-item) {
  font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
  color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-下:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-下:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
.无序-表格化阅览-下:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul {
  flex-wrap: nowrap;
  flex-direction: column;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul {
  flex-wrap: wrap;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul ul {
  margin: 1px -6px -7px -6px;
  flex-wrap: wrap;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul ul ul {
  margin: 3px -6px -6px -6px;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul ul ul ul {
  margin: 3px -4px -4px -4px;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
  margin: -1px -1px -1px -1px;
}
.无序-表格化阅览-下.自适应模式:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
  margin: -1px -1px -1px -1px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0em 1em 0em;
  align-items: center;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  align-items: stretch;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  margin: 0px -6px -7px -6px;
  justify-content: center;
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul {
  display: flex;
  margin: 0px -6px -6px -6px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 4px;
  padding-right: 0px;
  padding-bottom: 1px;
  padding-left: 0px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul {
  display: flex;
  margin: 2px -6px -5px -6px;
  flex-direction: column;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul ul {
  display: flex;
  margin: 3px -4px -5px -4px;
  flex-direction: column;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul ul ul {
  display: flex;
  margin: 3px -4px -5px -4px;
  flex-direction: column;
  align-items: stretch;
  width: auto;
  padding-top: 3px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
display: list-item;
flex-direction:column;
justify-content: flex-start;
align-items: center;
text-align: center;
border-radius: 0pt;
margin: 0px 0px 30px 0px;
flex-wrap: nowrap;
padding-top: 5px;
padding-right: 5px;
padding-bottom: 5px;
padding-left: 5px;
flex: 1 1 100%;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -0px -1px -0px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 0pt;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-right: 5px;
  padding-bottom: 4px;
  padding-left: 5px;
  flex: 1 1 100%;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
  display: list-item;
  justify-content: center;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 4px;
  padding-right: 5px;
  padding-bottom: 4px;
  padding-left: 5px;
  flex: 1 1 100%;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 4px;
  padding-right:3px;
  padding-bottom: 4px;
  padding-left: 3px;
  flex: 1 1 100%;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 4px;
  padding-right:3px;
  padding-bottom: 4px;
  padding-left: 3px;
  flex: 1 1 100%;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul ul ul>li:not(.task-list-item) {
  display: list-item;
  margin: -1px -1px -1px -1px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 4px;
  padding-right:3px;
  padding-bottom: 4px;
  padding-left: 3px;
  flex: 1 1 100%;
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: var(--无序-卡片化阅览-一级列表-边框-颜色);
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) .list-bullet{
display: none;
}
.无序-表格化阅览-看板:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
.无序-表格化阅览-看板:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
content: unset;
}
.无序-表格化阅览-看板:is(.markdown-preview-view).markdown-rendered .list-collapse-indicator {
  margin-inline-start: -10px;
  padding-inline-end: 100%;
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览-看板:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
.无序-时间轴阅览:is(.markdown-preview-view) .list-bullet{
display: none;
}
.无序-时间轴阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-时间轴阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
content: unset;
}
.无序-时间轴阅览 ul {
  display: flex;
  flex-direction: column;
  margin: auto auto auto -30px;
}
.无序-时间轴阅览 ul ul {
  display: flex;
  background-color: var(--无序-时间轴阅览-背景-颜色);
  border-radius: 3px;
  padding: 3px 10px;
  border-left: 4px solid var(--无序-时间轴阅览-边框-颜色);
  margin: 5px 0px 0px 0px;
}
.无序-时间轴阅览 ul ul ul {
  border-left: 2px solid var(--无序-时间轴阅览-边框2-颜色);
  margin: 4px -10px -3px 0px;
}
.无序-时间轴阅览 ul ul > li:not(.task-list-item):first-child {
  padding: 0px 0px;
  border-bottom: 0px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
  color: var(--无序-时间轴阅览-右侧标题字体-颜色);
  width: auto;
  margin: 1px 0px 0px 10px;
}
.无序-时间轴阅览 ul ul ul > li:not(.task-list-item):first-child {
  padding: 0px 0px;
  border-bottom: 0px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
  color: var(--无序-时间轴阅览-右侧标题字体-颜色);
}
.无序-时间轴阅览 ul ul > li:not(.task-list-item):not(:first-child) {
  padding: 5px 0px;
  color: var(--无序-时间轴阅览-正文字体-颜色);
  width: auto;
  margin: 0px 0px -5px 10px;
}
.无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item) {
  display: grid;
  column-gap: 1.5rem;
  grid-template-columns: 70px auto 1fr;
  color: var(--无序-时间轴阅览-左侧标题字体-颜色);
  font-weight: 600;
  word-break: break-all;
}
.无序-时间轴阅览 ul ul > li:not(.task-list-item) {
  word-break: break-all;
  width: 100%;
  font-weight: 400;
}
.无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item)::after {
  content: " ";
  position: absolute;
  background: var(--无序-时间轴阅览-圆圈图案-颜色);
  height: 1rem;
  width: 1rem;
  border: 0.3rem solid var(--background-primary);
  left: 83.9px;
  top: 15px;
  transform: translateY(-50%);
  border-radius: 50%;
}
.无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item)::before {
  content: "";
  height: 100%;
  width: 0.3rem;
  grid-column: 2 / span 1;
  grid-row-start: 1;
  grid-row-end: span 1000;
  background-color: var(--无序-时间轴阅览-时间轴线-颜色);
  opacity: 0.15;
  margin: 2px 0px;
}
@media (max-width:426px) {
  .无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item)::before {
    grid-column: 1 / span 1!important;
  }
  .无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item)::after {
    left: -10.5px!important;
  }
  .无序-时间轴阅览 ul:not(ul ul) > li:not(.task-list-item) {
    grid-template-columns: 0% 1fr!important;
  }
}
.无序-时间轴阅览.移动端模式 ul:not(ul ul) > li:not(.task-list-item)::before {
  grid-column: 1 / span 1!important;
}
.无序-时间轴阅览.移动端模式 ul:not(ul ul) > li:not(.task-list-item)::after {
  left: -10.5px!important;
}
.无序-时间轴阅览.移动端模式 ul:not(ul ul) > li:not(.task-list-item) {
  grid-template-columns: 0% 1fr!important;
}

.无序-时间轴阅览 .contains-task-list.has-list-bullet{
  background-color:transparent;
  border-left: 0px solid transparent;
  margin: auto auto auto -30px;
}
.无序-时间轴阅览.去下划线模式 ul ul ul {
  margin: 4px -10px -3px 0px;
}
.无序-时间轴阅览.去下划线模式 ul ul > li:not(.task-list-item):first-child {
  border-bottom: 0px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
  margin: 1px 0px 0px 10px;
}
.无序-时间轴阅览.去下划线模式 ul ul > li:not(.task-list-item):not(:first-child) {
  margin: 0px 0px -5px 10px;
}
.无序-时间轴阅览.标题下划线模式 ul ul ul {
  margin: 4px -10px -3px 0px;
}
.无序-时间轴阅览.标题下划线模式 ul ul > li:not(.task-list-item):first-child {
  border-bottom: 3px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
  margin: 1px 0px 5px 1px;
}
.无序-时间轴阅览.标题下划线模式 ul ul ul > li:not(.task-list-item):first-child {
  border-bottom: 3px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
  margin: 0px 0px 0px 10px;
}
.无序-时间轴阅览.标题下划线模式 ul ul > li:not(.task-list-item):not(:first-child) {
  margin: 0px 0px -5px 10px;
}
.无序-时间轴阅览.标题下划线模式 ul ul ul > li:not(.task-list-item):first-child {
  border-bottom: 0px solid var(--无序-时间轴阅览-右侧标题下划线-颜色);
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul {
  display: flex;
  justify-content: flex-start;
  margin: 1em 0em 1em 0em;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  flex-wrap: wrap;
  flex-direction: row;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul {
  display: flex;
  flex: auto;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  flex-wrap: nowrap;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul {
  display: flex;
  flex: auto;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  flex-wrap: nowrap;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul {
  display: flex;
  flex: auto;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  width: auto;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  flex-wrap: nowrap;
  align-content: flex-start;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-radius: 0pt;
  margin: 10px 0px 10px 0px;
  flex-wrap: nowrap;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
  word-break: break-all;
  flex: 1 1 100%;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
  display: flex;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 0pt;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
  flex: 1 1 100%;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
  display: flex;
  justify-content: flex-start;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
  flex: 1 1 100%;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
  display: flex;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
  flex: 1 1 100%;
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-一级列表-背景-颜色);
box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 1)) 0px 0px 0px 3px;
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-二级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-三级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: var(--无序-卡片化阅览-四级列表-背景-颜色);
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
.无序-表格化阅览:is(.markdown-preview-view) .list-bullet{
display: none;
}
.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
content: unset;
}
.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered .list-collapse-indicator {
  margin-inline-start: -2em;
  padding-inline-end: 100%;
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-一级列表-字体-大小);
color: var(--无序-卡片化阅览-一级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-二级列表-字体-大小);
color: var(--无序-卡片化阅览-二级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-三级列表-字体-大小);
color: var(--无序-卡片化阅览-三级列表-字体-颜色);
}
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--无序-卡片化阅览-四级列表-字体-大小);
color: var(--无序-卡片化阅览-四级列表-字体-颜色);
}
.无序-表格化阅览:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}

```