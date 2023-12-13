---
uid: 2023120719422010
title: Obsidian 插件：【Readme】Run
tags: ['obsidian插件', 'readme']
description: 从dataview查询和JavaScript生成Markdown。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Run

> [!Note] 插件名片
> - 插件名称：Run
> - 插件作者：Hananoshika Yomaru
> - 插件说明：从 dataview 查询和 JavaScript 生成 Markdown。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/obsidian-run)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?run)

## 概述

从 dataview 查询和 JavaScript 生成 Markdown。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/obsidian-run/main/README.md)
>

---

## Readme(翻译）

下面是 [[run]] 插件的自述翻译

# Obsidian Run

从 dataview 查询和 javascript 生成 markdown。

- ✅ 强大而简单
- ✅ 基于 Markdown，适用于所有 Markdown 编辑器/渲染器
- ✅ 与 Dataview、Templater、Obsidian 发布功能完美配合

演示： <https://www.youtube.com/watch?v=_UAr6e6hlVI&t=71s>

安装

### 插件市场

您可以从 Obsidian 插件商店下载此插件。

### 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. 运行 `cd obsidian-run && bun install && bun run build`
4. 完成！🎉

## 使用方法

1. 安装此插件并安装 [obsidian-custom-save](https://github.com/HananoshikaYomaru/obsidian-custom-save)
2. 将 `run: run file` 命令添加到自定义保存操作中
3. 定义一个起始标签

```md
%% run start 3+4%%
```

1. 保存文件
2. 你的 Markdown 将变成如下所示

```md
%% run start
3+4
%%
7
%% run end %%
```

### 语法

每个运行块包含三个部分：起始标签（必需）、生成的内容和结束标签。

#### 起始标签（必需）

您可以在起始标签中定义表达式。该表达式将用于计算内容。这是运行块的唯一必需部分。

```md
%% run start <expression> %%
```

或者您也可以编写多行语句。请注意，如果您使用多行编写，则必须返回一个值。

````md
%% run start

```ts|js
<your expression in codeblock>
```

%%
````

您可以与 [CodeblockCustomizer](https://github.com/mugiwara85/CodeblockCustomizer) 一起使用，以获得折叠代码块。

![](https://cdn.pkmer.cn/covers/run_1_0.png!pkmer)
生成的内容

#### 结束标签

结束标签用于关闭运行块。

```md
%% run end <metadata> %%
```

## 选项

1. 生成结束标签元数据：启用后，运行块的更新时间和错误（如果有）将显示在结束标签中。
2. 忽略文件夹：列出的文件夹将被此插件忽略。
高级用法

### 访问文件对象

```md
%% run start file.basename %%
```

文件对象是 [TFile](https://docs.obsidian.md/Reference/TypeScript+API/TFile/TFile)，但它被打补丁了 `file.properties`，这是文件的 yaml 属性。

### 页面级变量

```md
---
bar: "foo"
---

%% 运行开始 file.properties.bar %%
```

### 数据视图

如果您已安装并启用了数据视图插件，您可以访问 `dv` 对象。

````md
%% run start

```ts
return dv.markdownList(dv.pages("#ai/image").map((page) => page.file.link));
```

%%
````

如果您安装并启用了 templater 插件，您可以访问 `tp` 对象。

> 然后您需要进入模板设置并手动设置一个启动模板。这样做的原因是 templater 默认情况下不会初始化 `tp` 对象，因此它将为 undefined。了解更多信息并观看视频：<https://github.com/HananoshikaYomaru/obsidian-run/issues/14#issuecomment-1749945619>。如果您不想设置启动模板，您可以在每次启动 obsidian 时手动运行 templater。只要 templater 运行一次，`tp` 对象就会被定义。

![](https://cdn.pkmer.cn/covers/run_1_1.gif)

Templater 允许用户拥有自定义的函数和脚本。了解更多信息，请访问<https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html>。

### 功能

您可以在起始标签代码块中编写复杂的函数。

### 异步函数

您可以在运行块中执行任何类型的异步操作。异步函数是非阻塞的。在所有同步操作解决之后，结果将被解析。您可以使用 obsidian 的 [request](https://docs.obsidian.md/Reference/TypeScript+API/request) 函数来获取数据。

![](https://cdn.pkmer.cn/covers/run_1_2.gif)
调试

您可以在起始标签代码块中使用 `console.log`。它将在开发者工具中输出。

## 注意事项

1. 如果您想要贡献，请给项目点赞并在 GitHub 上开启一个 issue。
2. 这个插件功能强大，但仍处于早期开发阶段。语法可能会发生变化，但会尽可能保持向后兼容。
3. 您可能希望与 [CodeblockCustomizer](https://github.com/mugiwara85/CodeblockCustomizer) 一起使用，以折叠您的代码块。
4. 您可能希望将以下代码块保存为模板，以便您可以轻松使用。

````md
%% run start

```ts fold
return;
```

%%
````

## 支持

如果您喜欢这个插件，请通过在 <https://www.buymeacoffee.com/yomaru> 上给我买杯咖啡来支持我的工作和热情。
