---
uid: 2023080322175834
title: Obsidian 插件：Execute Code
tags: ['obsidian插件', 'readme']
description: 允许在笔记中执行代码片段。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Execute Code

> [!Note] 插件名片
> - 插件名称：Execute Code
> - 插件作者：twibiral
> - 插件说明：允许在笔记中执行代码片段。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/twibiral/obsidian-execute-code)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?execute-code)

## 概述

允许在笔记中执行代码片段。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/twibiral/obsidian-execute-code/master/README.md)
>

---

## Readme(翻译）

下面是 [[execute-code]] 插件的自述翻译

# Obsidian 执行代码插件

<div align='right'>

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?color=8572db&labelColor=1e1e1e&label=下载量&query=$['execute-code'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json)

![GitHub package.json 版本](https://img.shields.io/github/package-json/version/twibiral/obsidian-execute-code?color=8572db&labelColor=1e1e1e&label=当前版本)

![GitHub 发布日期](https://img.shields.io/github/release-date/twibiral/obsidian-execute-code?color=8572db&labelColor=1e1e1e&label=最新发布)

</div>

该插件允许您在笔记中的代码块中执行代码片段。该插件为支持的语言的代码块添加了一个“运行”按钮。单击按钮会执行代码块的代码。执行完成后，会显示执行结果。当您的代码片段需要用户输入时，会创建一个交互式输入元素。

只有在执行完成后才会显示结果。现在无法在命令行中输入文本到执行的程序中。

![展示插件工作原理的视频。](https://github.com/twibiral/obsidian-execute-code/blob/master/images/execute_code_example.gif?raw=true)

支持以下 [编程语言](#supported-programming-languages-): C, CPP, Dart, Golang, Groovy, Kotlin, Java, JavaScript, TypeScript, Lean, Lua, CSharp, Prolog, Rust, Python, R, Ruby, Wolfram Mathematica, Haskell, Scala, Racket, F#, Batch, Shell & Powershell, Octave 和 Maxima。

Python、Rust 和 Octave 支持嵌入绘图。所有语言都支持 ["魔术"命令](#magic-commands-)，可帮助您访问 Obsidian 中的路径或在笔记中显示图像。

您可以创建在每个相同语言的代码块之前或之后执行的代码块，并定义 [全局代码注入](#global-code-injection-and-reusing-code-blocks-)。

查看 [更新日志](CHANGELOG.md) 以了解最近版本的更改。

<div align='center'>

[![给我们买杯咖啡](https://img.shields.io/badge/-给我们买杯咖啡-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/timwibiral)

</div>

## 特色内容

[![由 I Versus AI 制作的视频](https://img.youtube.com/vi/eQz4eAW3ZDk/0.jpg)](https://www.youtube.com/watch?v=eQz4eAW3ZDk)

"I Versus AI 制作的《逃离 ChatGPT。轻松制作自己的代码解释器》"

## 支持的编程语言 💻

<details>
<summary>JavaScript</summary>

- 要求：已安装 Node.js 并在设置中设置了正确的路径。

```javascript
function hello(name) {
	console.log(`Hello ${name}!`);
}

hello("Bob")
```

- 默认情况下，JavaScript 在笔记本模式下运行。您可以在设置中关闭此功能。

</details>

<details>
<summary>TypeScript</summary>

- 要求：已安装 Node.js，然后在命令行中运行 `npm install typescript -g` 和 `npm install ts-node -g`。（`-g` 表示全局安装）
- 问题：如果您使用全局的 node.js 安装，但它无法正常工作，请尝试在设置中将 `ts-node` 路径设置为 `npx ts-node` 而不是 `ts-node`。

```ts  
let message: string = 'Hello, World!';
console.log(message);  
```

</details>

<details>
<summary>CSharp</summary>

- 要求：安装 dotnet core sdk 并在命令行中运行 `dotnet tool install -g dotnet-script`，然后配置 dotnet-script 的完整路径。

```cs 
Console.WriteLine("Hello, World!");  
```  

</details>

<details>
<summary>Dart</summary>

- 要求：已安装 dart sdk 并在设置中设置了正确的路径。

```dart
void main() {
  print("Hello World");
}
```

</details>

<details>
<summary>Python</summary>

- 要求：已安装 Python 并在设置中设置了正确的路径。

```python
def hello(name):
	print("Hello", name)

if __name__ == "__main__":
	hello("Eve")
```

- 默认情况下，Python 在笔记本模式下运行。您可以在设置中关闭此功能。
- 默认情况下，使用 matplotlib/seaborn 绘制的图表会嵌入在笔记中。您可以在设置中关闭此功能。

```python
import seaborn as sns
import matplotlib.pyplot as plt
sns.set_style("darkgrid")
iris = sns.load_dataset('iris')
sns.FacetGrid(iris, hue ="species", height = 5)
		.map(plt.scatter, 'sepal_length', 'petal_length')
		.add_legend()

plt.show()
```

![嵌入图表的示例。](https://github.com/twibiral/obsidian-execute-code/blob/master/images/plotting_example.png?raw=true)

</details>

<details>
<summary>R</summary>

- 要求：已安装 R 并在设置中设置了正确的路径。

```r
hello <- function(name){
	print(paste("Hello", name, sep = " "))
}

hello("Bob")
```

- 默认情况下，图表可以嵌入在笔记中。您可以在设置中关闭此功能。

```r
y = c(12, 15, 28, 17, 18)
x = 1:length(y)
plot(x, y, type="l")
```

</details>

<details>
<summary>Java</summary>

- 要求：已安装 Java **11 或更高版本**并在设置中设置了正确的路径。

```java
public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("Hello World!");
	}
}
```

</details>

<details>
<summary>Lua</summary>

- 要求：安装 lua 并配置 lua 路径。

```lua
print('Hello, World!')
```

</details>

<details>
<summary>Lean</summary>

- 要求：安装 lean 并配置 lean 路径。

```lean
def main : IO Unit :=
  IO.println s!"Hello, World!"

#eval main
```

</details>

<details>
<summary>C++</summary>

- 要求：已安装 [Cling](https://github.com/root-project/cling) 并在设置中设置了正确的路径。
- 代码将逐行执行，无需主函数。

```cpp
#include <iostream>
#include <string>

using namespace std;

void hello(string name) {
	cout << "Hello " << name << "!\n";
}

hello("Alice);
```

- 可以通过在设置中切换选项来使用主函数作为入口点。

```cpp
#include <iostream>

void main() {
	std::cout << "Hello, World!" << std::endl;
}
```

</details>

<details>
<summary>C</summary>

- 要求：已安装 [Cling](https://github.com/root-project/cling) 并在设置中设置了正确的路径。
- 代码将逐行执行，无需主函数。

```c
#include <stdio.h>

printf("Hello, World!");
```

- 可以通过在设置中切换选项来使用主函数作为入口点。

```c
#include <stdio.h>

int main() {
	printf("Hello, World!");
	return 0;
}
```

</details>

<details>
<summary>Shell</summary>

- 要求：在设置中设置首选 shell 的路径。默认为 Bash。（仅适用于 Linux 和 macOS）

```shell
echo "Hello World!"
ls -la
```

</details>

<details>
<summary>Powershell</summary>

- 要求：用于在 Windows 上执行 shell 命令。默认为 Powershell，但可以在设置中设置为首选 shell。
- 在 MacOS 上：您可能需要在插件设置中将命令从 `powershell` 更改为 `pwsh`。确保设置正确的路径。

```powershell
echo "Hello World!"
```

- 如果您喜欢批处理：在菜单中更改 powershell 的路径设置
![如何使用魔术命令的示例。](https://github.com/twibiral/obsidian-execute-code/blob/master/images/batch_settings.png?raw=true)
</details>


<details>
<summary>Batch</summary>

- **要求**：用于在 Windows 上执行批处理命令（也称为 BAT 或 CMD）。默认为命令提示符，但可以在设置中设置为首选 shell。
- **重要**：<br>
	百分号在批处理文件中用于表示命令行参数：例如%1，%2，... <br>
	在批处理文件中，两个百分号被视为单个百分号：例如%%f <br>
	在执行代码时，如果使用变量，请使用 2 个百分号。更多信息请参阅 [此处](https://stackoverflow.com/questions/14509652/what-is-the-difference-between-and-in-a-cmd-file)<br>

```batch
ECHO Hello World!
```

</details>


<details>
<summary>Prolog</summary>

- 要求：无要求，使用 [Tau-Prolog](https://github.com/tau-prolog/tau-prolog) 工作。
- 重要提示：在代码块中的 "`% query`" 行之后添加您的查询，如下所示

```prolog
likes(john, pizza).
likes(john, cheese).
likes(jane, beer).

% query
likes(john, X).
```

</details>

<details>
<summary>Groovy</summary>

## 魔术命令 🪄

魔术命令是一些可以在代码块中使用的元命令。它们在源代码执行之前由插件处理。

支持以下魔术命令：

- `@vault_path`：将保险库路径插入为字符串（例如 "/User/path/to/vault"）
- `@vault_url`：将保险库 URL 插入为字符串（例如 "app://local/path/to/vault"）
- `@note_path`：将笔记路径插入为字符串（例如 "/User/path/to/vault/Note.md"）
- `@note_url`：将笔记 URL 插入为字符串（例如 "app://local/path/to/vault/Note.md"）
- `@title`：将笔记标题插入为字符串。
- `@show(ImagePath)`：在笔记中显示给定路径的图像。
- `@show(ImagePath, Width, Height)`：在笔记中显示给定路径的图像。
- `@show(ImagePath, Width, Height, Alignment[center|left|right])`：在笔记中显示给定路径的图像。
- `@html(HtmlSource)`：在笔记中显示 HTML。

（`@show(...)` 和 `@html(...)` 目前仅支持 JavaScript 和 Python。）

（旧命令 `@note` 和 `@vault` 仍然受支持，但可能在将来被移除。）

使用 Python 的魔术命令示例：

```python
print("保险库路径：", @vault_path)
print("保险库 URL：", @vault_url)

print("笔记路径：", @note_path)
print("笔记 URL：", @note_url)

print("笔记标题：", @title)
```

```python
@show("image.png")
@show("image.png", 100, 100)
@show("https://upload.wikimedia.org/wikipedia/commons/d/de/TestScreen_square.svg", 10%, 10%, "center")
```

```python
@html("<h1>HTML 标题</h1>")
@html('''
<svg width="100%" height="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="300" cy="300" r="250" style="fill:peru;" />
  <circle cx="200" cy="250" r="50" style="fill:black;" />
  <circle cx="400" cy="250" r="50" style="fill:black;" />
  <circle cx="190" cy="230" r="20" style="fill:white;" />
  <circle cx="390" cy="230" r="20" style="fill:white;" />
  <circle cx="250" cy="400" r="85" style="fill:saddlebrown;" />
  <circle cx="350" cy="400" r="85" style="fill:saddlebrown;" />
  <ellipse cx="300" cy="380" rx="50" ry="35" style="fill:black;" />
  <ellipse cx="130" cy="100" rx="110" ry="70" style="fill:saddlebrown;"/>
<ellipse cx="470" cy="100" rx="110" ry="70" style="fill:saddlebrown;" />
</svg> 
''')
```

自己试试吧！

![使用魔术命令的示例](https://github.com/twibiral/obsidian-execute-code/blob/master/images/magic_example.png?raw=true)

在预览中运行 ⏩

在代码块中的语言名称前添加 `run-`（如下例所示）可以在预览中渲染代码块。

这样可以在预览中执行代码。

`````` 
```run-python
def hello(name):
    print("Hello", name)

if __name__ == "__main__":
    hello("Eve")
``````

## 代码块参数 🏷

代码块支持以 `{key='value', otherkey=['val1', 'val2']}` 的形式指定额外的参数。将它们添加到代码块中，如下所示：

``````
```python {label='my label'}
print('my labelled code block')
```
``````

全局代码注入和代码块重用 📘

有时，在每个相同语言的代码块之前或之后执行代码是很有帮助的。该插件以几种方式支持这一点：

### 设置中的全局注入

所有语言在设置中都有一个“全局注入”选项，允许按语言定义要添加到每个代码块顶部的代码。代码重用在所有语言中完全有效，并且所有现有的魔术命令，包括显示图像和内联绘图输出，都可以使用。这可以用于定义经常使用的函数或导入您喜欢的包或库。

### 全局的前置和后置代码块

您可以使用 `pre` 参数来创建在每个后续代码块之前执行的代码块：

``````
```python {pre}
import pandas as pd
```
``````

这个代码块会在您在笔记中定义的每个 python 代码块之前添加，并导入 pandas 包。

`post` 代码块的工作方式相同，但是 post 代码块中的代码会在其他代码块之后执行。

前置/后置代码块只适用于在它们下面定义的代码块，并且只适用于相同语言的代码块。

您还可以同时指定前置和后置代码块，方法是使用 `{pre, post}`。

注意，`pre`/`post` 参数是特殊的，因为您不需要显式地指定键/值对，但如果您愿意，可以这样做：

`{pre}` 等同于 `{export='pre'}`，`{pre, post}` 等同于 `{export=['pre', 'post']}`。

### 标记的代码块

您可以使用 `label='string'` 参数为特定的代码块添加标签，然后在其他代码块中使用 `import='string'` 或 `import=['string1', 'string2', ...]` 参数显式导入它们，以便它们不会像预处理/后处理块一样自动导入：

`````
```python {label='block 1'}
print('running block 1')
```

```python {label='block 2'}
print('running block 2')
```

```python {import=['block 1', 'block 2']}
print('should run block 1 and 2')
```
`````

标记的代码块将在运行代码块之前执行，但在全局注入和预处理块之后。

### 忽略代码导出

如果您想要手动忽略代码块中的特定导出，例如预/后/全局导出，您可以使用 `ignore` 参数来实现，该参数接受 `pre`、`post`、`global`、这三者中的任意一个的数组，或者 `all` 来忽略所有导出：

`````python {ignore='all'}
print('不应运行任何全局注入或预/后代码块')
```

`````python {ignore=['global', 'pre']}
print('不应运行任何预代码块或全局注入')
```
`````

### 笔记本模式

一些语言（目前支持 JS 和 Python）支持*笔记本模式*。如果一个语言正在使用笔记本模式（可在设置中配置），那么给定文件中的所有代码块将在同一个环境中执行。

在一个代码块中定义的变量、函数等将在其他代码块中可用。代码块按需执行；文件中代码块的顺序不影响它们执行的顺序：

``````
```js
console.log(f)
```
```js
let f = 3;
```
``````

先运行第一个代码块，然后是第二个，再运行第一个，将得到：

```
Uncaught ReferenceError: f is not defined
undefined
3
```

要管理笔记本模式的打开运行时，可以使用命令面板中的“打开代码运行时管理”命令。从侧边栏窗口中，您可以停止内核。**注意：强制停止需要在 Windows 上使用 `taskkill`，在 Unix 上使用 `pkill`。99% 的系统应该预装了这些工具：如果您的系统没有，请 [提交一个问题](https://github.com/twibiral/obsidian-execute-code/issues/new/choose)**。

## 样式设置 🎨

该插件支持使用 [Style Settings插件](https://github.com/mgmeyers/obsidian-style-settings) 自定义样式。可以自定义代码块输出和错误的颜色。

## 安装 💾

在你的保险库中，转到设置 > 社区插件 > 浏览并搜索“执行代码”。选择插件，安装并激活它。

或者

点击 [此链接](https://obsidian.md/plugins?search=execute%20code#)，然后点击“在 Obsidian 中打开”。

## 查找路径设置（例如 JavaScript | Node）

为了避免或解决由于路径错误而导致的错误。

（Mac 和 Windows 用户使用 'where'）---（对于 Linux 用户，将 'where' 替换为 'which'）

1. 在终端中输入 'where node'
   ![在终端中输入 'where node'](https://github.com/twibiral/obsidian-execute-code/blob/master/images/path_location_shell.png?raw=true)
2. 从终端中复制路径（例如 /opt/homebrew/bin/node）
3. 在设置中粘贴路径（例如 Node 路径）
   ![使用步骤 2 中的路径更新设置中的路径](https://github.com/twibiral/obsidian-execute-code/blob/master/images/path_location_settings.png?raw=true)

## 警告 ⚠

不要执行来自你不了解的源代码或者你不理解的代码。执行代码可能会造成无法修复的损害。

## 已知问题 🛠

- 在 Linux 上，使用 Snap/Flatpak/AppImage 安装的 Obsidian 运行在一个隔离的环境中。因此，它们将无法访问您安装的任何程序。如果您使用的是 Linux，请确保安装 `.deb` 版本的 Obsidian。如果您的发行版不兼容 `.deb` 文件，可能会出现问题。
- 切换主题后缺少 `运行` 按钮：尝试关闭并重新打开您的笔记，并等待几分钟。似乎 obsidian 在主题切换后没有调用后处理器。
- 如果文件中包含重复的代码块，则可能不会执行预处理块/后处理块。
- 在 Python 中，当笔记本模式打开时，嵌入的绘图可能无法关闭。

## 未来工作 📑

- 类似于 Jupyter 的笔记本模式
- 执行失败时的错误警告（例如，当未安装 Python 时）
- 测试此插件与 dataview 的组合是否有效。

## 贡献 🤝

欢迎所有的贡献。只需创建一个合并请求或发送电子邮件给我：tim.wibiral(at)uni-ulm.de

如果您想要帮助，未来工作中的要点是一个很好的起点。

## 贡献者 ♥

<a href="https://github.com/twibiral/obsidian-execute-code/graphs/contributors">
  <img alt="List of contributors to this project." src="https://contrib.rocks/image?repo=twibiral/obsidian-execute-code" />
</a>

<sub>使用 [contrib.rocks](https://contrib.rocks) 制作。</sub>
