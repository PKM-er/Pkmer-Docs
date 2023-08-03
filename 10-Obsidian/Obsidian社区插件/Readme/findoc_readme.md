---
uid: 20230803203959
title: Obsidian 插件：【Readme】Financial Doc
tags: ['obsidian插件', 'readme']
description: 在Obsidian中直接使用CSV格式和Chart.js进行财务文件和跟踪。
author: Studio Webux
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Financial Doc

> [!Note] 插件名片
> - 插件名称：Financial Doc
> - 插件作者：Studio Webux
> - 插件说明：在Obsidian中直接使用CSV格式和Chart.js进行财务文件和跟踪。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/yet-another-tool/obsidian-findoc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?findoc)

## 概述

在Obsidian中直接使用CSV格式和Chart.js进行财务文件和跟踪。

![Financial Doc](https://cdn.pkmer.cn/covers/findoc.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yet-another-tool/obsidian-findoc/main/README.md)
> 

---

## Readme(翻译）

下面是 [[findoc]] 插件的自述翻译


<div align="center">

<img src="./docs/findoc-logo-256.png" alt="Findoc Logo" width="256">

<h2>又一个工具 - Fin Doc</h2>

<p>Obsidian.md插件，用于读取和编辑CSV文件，然后将其用作数据源生成图表。</p>
<p>欢迎您提出PR和问题，分享您的想法、改进等。</p>

<p align="center">
  
  ·
  
</p>
</div>

---

<details open="open">
  <summary>目录</summary>
  <ol>
    <li>
      
    </li>
    <li></li>
    <li>
      
    </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ol>
</details>
---
## 关于

- 在 Obsidian 中打开和编辑 CSV 文件
- 直接在 Obsidian 中使用 CSV 文件和自定义代码块生成图表
- 可以通过少量设置进行配置
- 支持桌面和移动设备（在 Windows、MacOS 和 iPhone 上进行了测试）
- 使用 [Chart.js](https://www.chartjs.org)
- 适用于 [Obsidian.md](https://obsidian.md) 的插件

## 安装

现在它处于Beta版本，您可以下载一个发布版本并将其安装在您的本地obsidian插件中。

> 一旦CSV方面稳定，我将在Obsidian插件注册表中开放一个PR。

```bash
npm install
npm run build
```

将`main.js`和`manifest.json`移动到名为`findoc`的目录中的插件目录中。

### 发布和 Github Actions

```bash
git tag -a X.Y.Z -m "版本 X.Y.Z"
git push origin tags/X.Y.Z
```

使用方法

### 模型

-   **expenses**
-   **expensesMonthly**
-   **portfolio**
-   **incomeYearly**
-   **income**
-   **all**
-   **mortgage**
-   **mortgageRate**
-   **dividend**

创建一个PR来创建新的模型。  
您可以直接在设置选项卡中进行编辑。

### 代码块

您可以直接在笔记中定义此代码块。

<pre>
```findoc
filename: finance.csv
model: portfolio
```
</pre>

> 有关所有可用模型，请参见上面的内容。

一旦定义了代码块，钩子将尝试通过读取csv文件来生成图表。

### CSV文件

CSV文件的表头是：

```csv
Type,Id,Value,TimeStamp,Extra
```

其中**Type**可以是以下之一：

-   **Portfolio**（投资组合）
-   **Income**（收入）
-   **Mortgage**（抵押贷款）
-   **Mortgage Rate**（抵押贷款利率）
-   **Cotisation**（社保费）
-   **Dividend**（股息）
-   **House Expenses**（房屋费用）
-   **Expenses**（其他费用）

**Id**最好是_对于一组来说是唯一的_，否则会出现奇怪的行为和错误的分组。

**Value**必须是**数字**

**Timestamp**只是一个使用以下格式的_日期_：`'YYYY-MM-DD'`

**Extra**字段未使用。

**我可以使用任何软件并导出CSV文件吗**：可以。

**什么是类别？**：这是_Id_，例如，您可以有一个关于`Tax`（<-类别）的`House Expenses`（<-类型）

## 截图

![股息图表](./docs/DividendChart.png)
![带有缺失数据点的收入图表](./docs/IncomeChartMissingData.png)
![收入片段](./docs/IncomeSnippet.png)
![删除行](./docs/V0.5.0/delete-row.png)
![在设置中选择类别](./docs/V0.5.0/categories-settings.png)

## 更新日志

### TODO

-   [x] 使用Github Actions并创建一个发布版本，将此alpha版本发布到Obsidian仓库
-   [x] 修复CSV文件的保存系统（使用至少1000的防抖）
-   [x] 改进设置选项卡（编辑、添加和删除颜色）
-   [x] 支持移动设备
-   [x] 支持Windows
-   [x] 设置选项卡中默认下拉值的错误
-   [x] 添加下拉菜单以选择交易类型（而不是查看文档）
-   [x] 添加CSS和CSV编辑器的设置选项
-   [-] 编辑CSV文件时复制粘贴功能失效（无法重现）
-   [] 改进设置选项卡（编辑、添加和删除模型）
-   [] 添加更多处理和分析数据的功能
-   [] 编写更好的文档
-   [] 添加更多图表类型，目前仅支持折线图
-   [] 使用饼图或类似的方式添加报告
-   [] 添加表格视图的报告

### V0.5.1 - Beta - 2023-05-05

-   移除了nodejs路径依赖（在Windows、macOS和Iphone上进行了测试）
-   移除了自定义的防抖函数，在设置中验证防抖输入，无效的默认值。
-   将所有内联样式移动到styles.css中
-   重新设计了颜色分配，注入颜色，替换了将参数传递给函数的方式。

<details>
  <summary>### V0.5.0 - Beta - 2023-05-03</summary>

-   修复了错误并进行了重构
-   可编辑内容更直观，不会有破坏一切的风险
-   您可以使用Tab键导航表格
-   添加了删除行按钮
-   添加、编辑和删除颜色
-   改进了设置选项卡中的类别选择
-   UI和信息添加

![删除行](./docs/V0.5.0/delete-row.png)
![编辑和删除颜色](./docs/V0.5.0/colors.png)
![在设置中选择类别](./docs/V0.5.0/categories-settings.png)

</details>
<details>
  <summary>### V0.4.1 - Beta - 2023-05-02</summary>

-   修复了错误
-   下拉菜单选择交易类型

![下拉菜单类型](./docs/V0.4.1/dropdown.png)

</details>

<details>
  <summary>### V0.4.0 - Beta - 2023-05-02</summary>

-   改进了编辑CSV文件时的UI，将表格包装在具有可编辑内容的div中。我认为这是两种解决方案中最好的。
-   保存系统应该更好，因为不再处理csv分隔符

![表格视图](./docs/V0.4.0/table_view.png)
![表格视图按钮](./docs/V0.4.0/table_view_btn.png)

</details>

<details>
  <summary>### V0.3.4 - Alpha - 2023-04-20</summary>

-   修复了移动设备上的CSV编辑问题，添加了边距以显示所有文本（仅在Iphone上进行了测试）
-   改进了错误处理和用户交互
-   更新了准备数据的方法名称
-   在页脚中添加了图表详细信息

</details>

<details>
  <summary>### V0.3.3 - Alpha - 2023-04-20</summary>

-   修复了移动设备支持
-   修复了下拉菜单当前值的选择

</details>

<details>
  <summary>### V0.3.2 - Alpha - 2023-04-19</summary>

-   添加了准备图表的新方法
-   按类型筛选而不是按类别
-   发现问题：**未修复**。在复制粘贴CSV文件中的行时出现保存问题

</details>

<details>
  <summary>### V0.3.1 - Alpha - 2023-04-13</summary>

-   添加了Windows支持

</details>

<details>
  <summary>### V0.3.0 - Alpha - 2023-04-13</summary>

-   添加了移动设备支持

</details>

<details>
  <summary>### V0.2.0 - Alpha - 2023-04-13</summary>

-   添加了新类型：`Expenses`
-   开始将typescript的`any`切换为正确的类型
-   将代码移动到较小的文件中
-   添加了Github Action Pipeline
-   使用此实现似乎防抖更好（仍然经常备份文件）
-   处理数据类型以显示正确的符号
-   修复了错误
-   处理无效的CSV行
-   处理空行

</details>

<details>
  <summary>### V0.1.0 - Alpha - 2023-04-11</summary>

-   重构代码
-   使用Obsidian设置添加配置
-   添加了截图
-   修复了一些错误
-   指定默认值并进行测试
-   修复了内联CSV文件的一些问题（经常备份文件！）
-   保存系统仍然存在一个错误，我不得不找到一个不太好的解决方法。

</details>

<details>
  <summary>### V0.0.0 - Alpha - 2023-04-09</summary>

-   在Obsidian中打开和编辑CSV文件
-   在Obsidian中生成图表
-   提供了一些模型以查看财务进展

</details>

---

## 贡献

1. 创建一个功能分支
2. 提交您的更改
3. 推送您的更改
4. 创建一个PR

<details>
<summary>使用本地分支</summary>

**切换分支:**

```bash
git checkout -b <feature|fix|release|chore|hotfix>/prefix-name
```

> 您的分支名称必须以[feature|fix|release|chore|hotfix]开头，并在名称之前使用/；
> 使用连字符作为分隔符；
> 前缀对应于您的看板工具ID（例如abc-123）

**同步您的分支:**

```bash
git fetch origin
git rebase origin/master
```

**提交您的更改:**

```bash
git add .
git commit -m "<feat|ci|test|docs|build|chore|style|refactor|perf|BREAKING CHANGE>: commit message"
```

> 遵循此约定 commitlint 以获取您的提交消息结构

**推送您的更改:**

```bash
git push origin <feature|fix|release|chore|hotfix>/prefix-name
```

**示例:**

```bash
git checkout -b release/v1.15.5
git checkout -b feature/abc-123-something-awesome
git checkout -b hotfix/abc-432-something-bad-to-fix
```

```bash
git commit -m "docs: added awesome documentation"
git commit -m "feat: added new feature"
git commit -m "test: added tests"
```

</details>

### 本地开发

```bash
npm install
npm run build
```

## 许可证

根据 MIT 许可证进行分发。有关更多信息，请参阅 LICENSE。

## 联系方式

-   Tommy Gingras @ tommy@studiowebux.com | Studio Webux

<div>
<b> | </b>
<a href="https://www.buymeacoffee.com/studiowebux" target="_blank"
      ><img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="height: 30px !important; width: 105px !important"
/></a>
<b> | </b>
<a href="https://webuxlab.com" target="_blank"
      ><img
        src="https://webuxlab-static.s3.ca-central-1.amazonaws.com/logoAmpoule.svg"
        alt="Webux Logo"
        style="height: 30px !important"
/> Webux Lab</a>
<b> | </b>
</div>



