---
uid: 2023080322253616
title: Obsidian 插件：React Components
tags: ['自动化', 'obsidian插件', 'readme']
description: 在你的笔记中使用并编写React（Jsx）组件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：React Components

> [!Note] 插件名片
> - 插件名称：React Components
> - 插件作者：Elias Sundqvist
> - 插件说明：在你的笔记中使用并编写 React（Jsx）组件。
> - 插件分类：[' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/elias-sundqvist/obsidian-react-components)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-react-components)

## 概述

在你的笔记中使用并编写 React（Jsx）组件。

![React Components](https://cdn.pkmer.cn/covers/obsidian-react-components_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/elias-sundqvist/obsidian-react-components/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-react-components]] 插件的自述翻译

[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/elias-sundqvist/obsidian-react-components?style=for-the-badge&sort=semver)](https://github.com/elias-sundqvist/obsidian-react-components/releases/latest)

![GitHub所有发布](https://img.shields.io/github/downloads/elias-sundqvist/obsidian-react-components/total?style=for-the-badge)

# Obsidian React 组件

这是 Obsidian（<https://obsidian.md）的一个插件。>

它允许您在 Obsidian 笔记中使用带有 Jsx 的 React 组件。

强烈建议在使用此插件时，同时安装 [Editor Syntax Highlight Plugin](https://github.com/deathau/cm-editor-syntax-highlight-obsidian)。

## 演示

![React组件演示](https://user-images.githubusercontent.com/9102856/131183517-e136e585-044c-482a-b6d1-fddc3134bac8.gif)

开始使用

创建 React 组件有两种方法。

### 使用代码块

在您的笔记中的任何位置添加一个注释，并给它设置属性 `defines-react-components`。您还可以选择使用 `react-components-namespace` 属性设置特定的命名空间（由点分隔的一系列单词）。

这可以通过在前置元数据中完成，如下所示：

```yaml
---
defines-react-components: true
react-components-namespace: projects.test
---
```

或者（如果已安装 dataview）可以使用 dataview 内联属性

```m
defines-react-components:: true
react-components-namespace:: projects.test
```

然后，在您的笔记中，要定义一个组件，请编写如下的代码块

````md
```jsx:component:MyComponent
return <div>Hello {props.name}!</div>
```
````

这将创建一个名为 `MyComponent` 的组件，位于 `projects.test` 命名空间中（如果您未指定属性，则位于全局命名空间中）。

然后，您可以像这样使用该组件：

````md
```jsx:
<MyComponent name={"World"}/>
```
````

或者，使用内联语法。

````md
`jsx:<MyComponent name={"World"}/>`
````

如果您在使用单独的命名空间的笔记中，可以通过以下方式访问该组件：

````md
`jsx:<projects.test.MyComponent name={"World"}/>`
````

### 使用组件注释

创建组件的另一种方法是*组件注释*。这种方法将整个 markdown 文件视为单个 react 组件的定义。

这种方法的好处是，您可以在例如 Visual Studio Code 中打开注释，以获得完整的语法高亮和一些代码自动完成。

为了使用组件注释，您必须首先指定一个文件夹用于 Jsx 函数/React 组件。

![image](https://user-images.githubusercontent.com/9102856/131140527-a7acbcd0-6524-4daa-bcd5-17fa4be176cd.png)

该目录中的每个注释都将被解释为 Jsx 函数的内容（隐式形式为 `props=>{your code here}`）。

每个文件都成为一个具有与注释相同名称的函数/React 组件。

## 编写组件

编写组件的语法是常规的 [Jsx 语法](https://reactjs.org/docs/introducing-jsx.html)。

组件文件的内容会被隐式地包裹在 `props=>{...}` 中。这意味着你*不需要*自己编写函数签名。但是，你需要在代码中包含 `return` 关键字。

还有一些需要注意的事项：

* 由于注释被解释为函数变量，所以它们必须遵循 JavaScript 变量命名规则。
    * 变量名不能包含空格。
    * 变量名必须以字母、下划线 (_) 或美元符号 ($) 开头。
    * 变量名只能包含字母、数字、下划线或美元符号。
    * 变量名区分大小写。
    * 某些单词不能用作变量名，因为它们在 JavaScript 中有其他含义。请查看这个 [保留字的完整列表](https://www.dummies.com/cheatsheet/javascriptforkids)。
* 为了作为 React 组件使用，函数的首字母必须大写。

## 使用组件

可以像这样使用组件：

````md
```jsx:
<MyComponent name={"World"}/>
```
````

或者，使用内联语法。

````md
`jsx:<MyComponent name={"World"}/>`
````

如果您在使用单独命名空间的笔记中，可以这样访问组件：

````md
`jsx:<projects.test.MyComponent name={"World"}/>`
````

当使用代码块语法（` ```jsx: `）时，代码可以有多行。最后一条语句会被隐式返回和渲染。

## 组件作用域

React 组件可以访问全局命名空间中的所有内容。

除此之外，组件还可以访问 `React`、`ReactDOM`、`useState` 和 `useEffect`。这使得您可以轻松编写功能组件。

除此之外，您还可以通过钩子调用 `useContext(ReactComponentContext)` 来访问*文件上下文*。然后可以使用它来访问 frontmatter，例如：

````md
```jsx:component:ComponentWithFrontmatter
const ctx = useContext(ReactComponentContext);
var frontmatter = ctx.markdownPostProcessorContext.frontmatter;

return <h1>{frontmatter.title}</h1>
```
````

## 贡献

欢迎贡献。

您可以创建一个 [问题](https://github.com/elias-sundqvist/obsidian-react-components/issues) 来报告错误，提出对此插件的改进建议，提问等。

您可以创建一个 [拉取请求](https://github.com/elias-sundqvist/obsidian-react-components/pulls) 来贡献此插件的开发。

## 更新日志

### 0.1.6（2022 年 1 月 22 日）*支持 Obsidian v0.13.19*

* jsx 代码块在最近的 Obsidian 更新中出现问题（参见问题＃26）。通过此更新，它们应该再次正常工作。
* 在 `Markdown` 组件中添加了对嵌入式笔记的支持（参见问题＃25）。

### 0.1.5 (2022-01-03) *移除调试日志*

* 在添加实时预览支持时使用了大量的 `console.log` 调用，现已将其移除。

### 0.1.4（2022 年 1 月 2 日）*应用修复*

* 插件现在应该再次在 Obsidian 应用版本上正常工作。

### 0.1.3 (2022-01-01) *基本实时预览支持*

* 支持代码块和内联代码。

![实时预览](https://user-images.githubusercontent.com/9102856/147861506-abb023d1-4ba1-4e46-bb33-504bf259a2ca.gif)

### 0.1.2 (2021-12-03) *组件代码块 + 启动和稳定性改进*

* 在视图之间导航时，组件不再消失。
* 修复了启动时组件闪烁的问题。
* 现在可以像这样编写代码块：
  * ````markdown
    ```jsx::ComponentName
    someText
    ```
    ````

    这等同于

     ````markdown
    ```jsx:
    <ComponentName src={`someText`}/>
    ```
    ````

    但更简洁。

    示例:

    ![Component Codeblock Example](https://user-images.githubusercontent.com/9102856/144520183-5dbdee07-76ae-49a6-aca6-732f53971a55.png)

### 0.1.1 (2021-08-29) *改进组件卸载*

* 在重新渲染过程中，旧组件现在更可靠地被移除/销毁。

### 0.1.0 (2021-08-27) *添加了替代的代码块语法和命名空间*

* 插件现在支持使用 `jsx:` 代替 `jsx-` 进行编写。
  * 这种新的语法与 [Editor Syntax Highlight Plugin](https://github.com/deathau/cm-editor-syntax-highlight-obsidian) 兼容：![syntax highlighting demo](https://user-images.githubusercontent.com/9102856/131139119-0c4e4bf5-914b-4e24-a917-cdac730b270b.gif)
* 现在您还可以通过 `react-components-namespace` 属性限制访问组件的方式和来源。详见 Readme。
* 已更新 Readme。

### 0.0.9 (2021-08-26) *支持 Frontmatter 和 Header 组件*

* 现在可以向组件笔记中添加 Frontmatter 数据（将被 JavaScript 解析器忽略）。
* 具有 Frontmatter 属性 `use-as-note-header` 的笔记将用作存储库中所有笔记的标题。
  * 这使您可以做类似于以下的事情：![header component demo](https://user-images.githubusercontent.com/9102856/130989310-8e99ceb3-701b-440e-8bb6-245cddfaa95e.gif)
  * * 注意：* 只在最多一个存储库组件上使用此 Frontmatter 属性。

### 0.0.8（2021-08-25）*小的渲染修复*

* 已解决在启动 Obsidian 时加载组件的问题。（问题＃19）

### 0.0.7 (2021-07-20) *增加对移动设备和 Typescript 的支持*

* 解决了在 Obsidian 移动版上加载插件的问题。
* 现在支持 Typescript 语法。
* 删除了未使用的依赖项。

### 0.0.6 (2021-06-19) *添加对 skypack 导入的支持，修复了一些错误*

* 添加了对基于 URL 的导入的支持，例如 `import styled from 'https://cdn.skypack.com/styled-components/'`
  * *示例:* ![](https://user-images.githubusercontent.com/9102856/121813903-8123ad80-cc6e-11eb-8c65-b8c77faf51a6.gif)
* 改进了组件加载的稳定性

### 0.0.5 (2021-05-22) *启用 Markdown 渲染组件的动态更新，进行了一些小的更改*

* 更新 `Markdown` 组件的 `src` 属性之前不会导致组件重新渲染，现在已经修复。
* 对于开发者：现在你可以创建一个 `.vault_plugin_dir` 文件，其中包含插件在你的 vault 中的路径：（例如 `path\to\my\vault\.obsidian\plugins\obsidian-react-components`）。然后 `yarn build` 将自动将编译后的文件复制到正确的位置。因此，你只需要在 Obsidian 中重新加载插件即可看到更改生效。

### 0.0.4 (2021-05-20) *改进组件加载和错误处理 + useIsPreview*

* 添加一个新的设置来禁用组件刷新
  * 如果组件重新渲染成本较高，例如组件进行 API 调用，则此设置非常有用。
* 提高组件加载的可靠性（解决问题＃13）
* 显著改进错误处理
  * 所有错误都呈现为 React 组件。您可以点击组件中的按钮将错误显示在控制台中。
* 添加一个命令来手动刷新组件
  * `Obsidian React Components: Refresh React Components`
* 用 `useIsPreview` 替换 `isPreviewMode`，它检查组件所附加的面板而不是当前活动的组件（解决问题＃12）

  示例：

    ```js
    const isPreview = useIsPreview()
    if(isPreview) {
      // 仅当组件所附加的面板处于预览模式时才会发生这种情况。
    }
    ```

### 0.0.3 (2021-05-10) *Markdown 渲染组件、更多的 hooks 和小修复*

* 根据 [社区插件PR](https://github.com/obsidianmd/obsidian-releases/pull/280) 的反馈进行了一些小修复。
* 添加了一个 `Markdown` 组件，可以用来渲染 markdown。
  * 用法：``` `jsx-<Markdown src={"* 这是一个项目符号"}/>` ```。
* 在组件作用域中添加了 `obsidian`。
* 添加了更多的 hooks：`useCallback`、`useContext`、`useMemo`、`useReducer`、`useRef`。

### 0.0.2 (2021-05-10) *新增功能、错误修复和重构*

* @lucasew 在组件范围内添加了一个 `isPreviewMode` 函数。 (PR #5)

  > 在 React 中有一个规则，即必须在每次渲染时调用相同的 hooks，因此早期返回不好。
  >
  > 用户可以轻松检查笔记是否处于预览模式，并在组件内返回 null。

* 当子组件代码被修改时，包含子组件的组件现在会正确更新。 (PR #11)
* 创建具有无效名称的组件时，现在会向用户发出警告。 (PR #10)

### 0.0.1 (2021-05-04) *首次发布*

* 实现了插件的基本功能

## 示例组件

```jsx
// 文件：Counter.md
const [count, setCount] = useState(0)
return (
<div>
  <p>你点击了我 {count} 次！！！</p>
  <button onClick={() => setCount(count + 1)}>
	{props.source}
  </button>
</div>
)
```

```jsx
// 文件：Clock.md
 const [date, setDate] = useState(new Date());
 useEffect(() => {
  var timerID = setInterval( () => setDate(new Date()), 1000 );
  return function cleanup() {
      clearInterval(timerID);
    };
 });
return (
  <div>
	<h1>你好，世界！</h1>
	<h2>现在是 {date.toLocaleTimeString()}。</h2>
  </div>
); 
```

```jsx
// 文件：rand.md
return Math.random()
```

```jsx
// 文件：DiceRoller.md
let diceRoll = ()=>Math.ceil(rand()*props.sides)
let [num, setNum] = useState(diceRoll())
return (<span>
	<button onClick={()=>setNum(diceRoll())}> 掷一个 {props.sides} 面的骰子</button>
	<span>数字是 {num}</span>
</span>)
```

```jsx
// 文件：Testcomponent.md
return (
<div style={{color: "blue"}}>
	<Clock/>
	<Counter source={props.source}/>
</div>
)
```

## 许可证

[Obsidian React Components](https://github.com/elias-sundqvist/obsidian-react-components) 使用 GNU AGPLv3 许可证。有关更多信息，请参阅 [LICENSE](https://github.com/elias-sundqvist/obsidian-react-components/blob/master/LICENSE.TXT)。
