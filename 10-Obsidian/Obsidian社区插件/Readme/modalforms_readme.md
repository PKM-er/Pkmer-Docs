---
uid: 2023120522261236
title: Obsidian 插件：【Readme】Modal forms
tags: ['obsidian插件', 'readme']
description: 定义一种能够从任何可以运行JavaScript的地方打开的数据捕获表单。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Modal forms

> [!Note] 插件名片
> - 插件名称：Modal forms
> - 插件作者：Danielo Rodriguez
> - 插件说明：定义一种能够从任何可以运行 JavaScript 的地方打开的数据捕获表单。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/danielo515/obsidian-modal-form)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?modalforms)

## 概述

定义一种能够从任何可以运行 JavaScript 的地方打开的数据捕获表单。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/danielo515/obsidian-modal-form/master/README.md)
>

---

## Readme(翻译）

下面是 [[modalforms]] 插件的自述翻译

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H7Q0U9G)

# Obsidian 模态表单插件

这个适用于 [Obsidian](https://obsidian.md) 的插件允许定义可以从任何可以运行 JavaScript 的地方打开的表单，因此您可以将其与其他插件（如 [Templater](https://github.com/SilentVoid13/Templater) 或 [QuickAdd](https://github.com/chhoumann/quickadd)）结合使用。

<https://github.com/danielo515/obsidian-modal-form/assets/2270425/542974aa-c58b-4733-89ea-9c20ea11bee9>

## 特点

- 表单在模态窗口中打开并返回值，因此您可以从以下位置触发它：
  - Templater 模板
  - QuickAdd 捕获
  - DataviewJS 查询
  - 许多其他地方...
- 使用简单的 JSON 格式定义表单
- 创建和管理一组表单，每个表单都有唯一的名称
- 用户界面用于创建新表单
- 多种输入类型
  - 数字
  - 日期
  - 时间
  - 滑块
  - 切换（真/假）
  - 自由文本
  - 带有自动完成的文本（来自文件夹或根目录的注释名称）
  - 带有自动完成的文本（来自 dataview 查询，需要 dataview 插件）
  - 多项选择输入
  - 从列表中选择
    - 固定值列表
    - 来自文件夹的注释列表

![示例表单](media/example.png)

为什么要使用这个插件？

Obsidian 是一个很好的笔记工具，但也是一个很好的数据管理工具。

然而，当需要捕捉结构化数据时，它并没有提供很多便利。

一些插件，如 [模板插件](https://github.com/SilentVoid13/Templater) 或 [快速添加插件](https://github.com/chhoumann/quickadd) 通过模板/自动化来缓解这个问题，可以轻松创建具有预定义结构的笔记，但是你必须手动填写数据。

上述插件（模板插件、快速添加插件）有一些小的便利输入，但它们也有一些权衡/问题：

- 它们只能一次输入一个值
- 它们没有标签，也没有关于正在填写的字段的详细描述
- 你不能跳过字段，你总是会一个接一个地提示输入所有字段

所有提到的工具在它们的工作中都非常出色，并释放出超级便利的工作流程。

因此，与其提供一种替代方案，这个插件被设计为它们的补充，提供一些基本的构建模块，可以与你现有的模板和工作流程集成。

## 模态表单的好友

- [Templater](https://github.com/SilentVoid13/Templater) 用于从模板中打开模态框
- [QuickAdd](https://github.com/chhoumann/quickadd) 用于快速从模态框中捕获数据
- [dataview](https://github.com/blacksmithgu/obsidian-dataview) 用于提供自动完成的值

## 本插件的范围

本插件的范围有意地很窄。正如前一节中提到的，它被设计为一个构建模块，因此您可以将其与其他插件和工作流集成。

我只会考虑添加一些改进表单本身的功能。

使用方法

### 从 JavaScript 调用表单

由于该插件的主要用途是打开表单并获取其数据，让我们从这方面开始。如果您想学习如何创建表单，请跳到下一节 [定义表单](define-a-form)。

该插件公开了一个 API，可以从任何具有对全局 `app` 对象的访问权限的 JavaScript 代码中访问。因此，为了获取 API，您可以执行以下操作：

```javascript
const modalForm = app.plugins.plugins.modalforms.api;
````

从这里，您可以调用 API 的任何主要方法，`openForm` 允许您通过名称打开表单并获取数据。让我们看一个例子：

```javascript
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm('example-form');
```

结果是一种特殊类型的对象，其中包含表单的数据。

它还具有一些方便的方法，可帮助您处理返回的数据。

其中之一是 `asFrontmatterString`，它将数据作为字符串返回，可以在 frontmatter 块中使用。让我们看一个使用模板的例子：

#### 使用 Templater

```javascript
---
<%* 
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm('example-form');
tR += result.asFrontmatterString();
-%>
---
```

当您将此模板插入到笔记中时，它将打开表单，一旦您提交表单，它将将数据作为 frontmatter 块插入到笔记中。

#### 使用 QuickAdd

为了从 QuickAdd 捕获中打开一个表单，您需要创建一个捕获并激活捕获格式，然后在格式文本区域中，您必须创建一个语言定义为 `js quickadd` 的代码块，并复制下面的代码：

```javascript
	```js quickadd
	const modalForm = app.plugins.plugins.modalforms.api;
	const result = await modalForm.openForm('example-form');
	return result.asDataviewProperties();
	``` 
````

这里是一个示例截图，显示了它应该是什么样子：

![quick capture example](media/image.png)

### 在打开表单时提供默认值

在打开表单时，您可以为表单字段提供默认值。这可以通过将对象作为 `FormOptions` 参数的一部分传递给 `openForm` 或 `limitedForm` 方法来实现。该对象应该具有与表单定义相同的结构，其中每个键对应一个字段名，其值为该字段的默认值。

以下是一个示例：

```typescript
const values = {
  title: 'My Default Title',
  description: 'This is a default description.',
};

const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm('example-form', { values: values });
```

在此示例中，表单将以 `title` 字段预填为 `My Default Title`，并以 `description` 字段预填为 `This is a default description.`。

**注意**：如果默认值对象中的字段在表单定义中不存在，则会被忽略。

### FormResult 方法

当您打开一个表单时，您会得到一个 `FormResult` 对象。该对象包含表单的数据以及一些帮助您处理数据的方法。

`openForm` 方法返回的 `FormResult` 对象具有几个可以用于处理表单数据的方法。以下是每个方法的简要描述：

#### asFrontmatterString()

该方法将表单数据作为字符串返回，可以在 frontmatter 块中使用。它使用 YAML 语法格式化数据。以下是如何使用它的示例：

#### asDataviewProperties（）

此方法将表单数据作为 dataview 属性的字符串返回。表单数据中的每个键值对都会转换为格式为 `key:: value` 的字符串。以下是如何使用它的示例：

#### getData()

该方法返回表单数据的副本。当您需要操作表单数据而不影响原始数据时，可以使用该方法。

asString(template: string) 方法将表单数据格式化为与提供的模板匹配的字符串。模板是一个字符串，可以包含格式为 `{{key}}` 的占位符，它将被表单数据中对应的值替换。以下是在模板中使用它的示例：

```
<%* 
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm('example-form');
tR += result.asString('{{Name}} is {{age}} years old and his/her favorite food is {{favorite_meal}}. Family status: {{is_family}}');
-%>
```

#### 高级用法

有关 `FormResult` 方法的更高级用法，请参阅此处的 FormResult 的具体文档 [here](docs/managing-results.md)。

### 定义一个表单

创建一个新表单

创建一个新表单很简单，你只需要打开管理表单视图，可以通过点击功能区图标或使用命令面板（`Obsidian modal form: New form`）来打开。

一旦打开，点击“+”按钮，你将看到一个表单，用于创建一个命名的表单定义。

表单是自解释的，但以下是一些需要记住的关键点：

- 名称必须是唯一的，并且在从 JavaScript 中打开表单时将用于标识表单，区分大小写
- 标题是在打开表单时在模态窗口中看到的标题
- 除非所有字段都有效（即它们具有名称和类型），否则无法保存表单

![表单编辑器/创建器](media/editor.png)

#### Dataview 集成

![dataview](media/dataview.png)

#### 内联表单

该插件还支持内联表单，即在调用 openForm 方法时定义的表单。当您想要创建一个只在一个地方使用且足够简单的表单时，这非常有用。然而，请注意手动输入的格式有点冗长且容易出错，所以除非是非常小的表单，否则您很可能更喜欢使用命名表单。

以下是如何使用它的示例：

```javascript
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm({
	title: 'Example form',
	fields: [
		{
			name: 'name',
			label: 'Name',
			description: 'Your name',
			input: { type: 'text'} ,
		},
		{
			name: 'age',
			label: 'Age',
			description: 'Your age',
			input: { type: 'number'} ,
		},
		{
			name: 'favorite_meal',
			label: 'Favorite meal',
			description: 'Your favorite meal',
			input: { type: 'text'} ,
		},
		{
			name: 'is_family',
			label: 'Is family',
			type: 'toggle',
			description: 'Are you family?',
			required: true,
			input: { type: 'toggle'} ,
		},
	],
});
```

您可以通过删除一些可选字段（如 description 或 label）来使其更小，但我真的鼓励您定义它们全部。

安装插件

您可以直接从 Obsidian 插件商店安装插件，或通过 [BRAT](obsidian://show-plugin?id=obsidian42-brat) 进行安装。

### 使用 BRAT 安装

1. 安装 [BRAT](obsidian://show-plugin?id=obsidian42-brat) 插件（GitHub 页面）并启用它。
2. 打开命令面板，运行命令 BRAT: Add a beta plugin for testing。
3. 在模态框中输入 `https://github.com/danielo515/obsidian-modal-form`，然后点击添加插件按钮。
4. 返回设置，导航到 Community plugins 选项卡。
5. 启用该插件。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/modalForm/` 中。

## 开发步骤

- 克隆该仓库。
- 确保你的 NodeJS 版本至少为 v16 (`node --version`)。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 发布新版本

- 在手动更新 `manifest.json` 中的 `minAppVersion` 后，运行 `npm version patch`、`npm version minor` 或 `npm version major`。
- 将文件 `manifest.json`、`main.js`、`styles.css` 作为二进制附件上传。注意：`manifest.json` 文件必须在两个位置上，首先是您的存储库的根路径，然后是发布中。
- 发布版本。

> 命令 `npm version whatever` 将在 `manifest.json` 和 `package.json` 中增加版本，并将新版本的条目添加到 `versions.json` 中。