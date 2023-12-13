---
uid: 2023120719245659
title: Obsidian 插件：【Readme】Code Emitter
tags: ['obsidian插件', 'readme']
description: 一个黑曜石插件，可以在沙盒环境中交互式执行代码块，支持的语言有Rust、Kotlin、Python、Javascript、TypeScript等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Code Emitter

> [!Note] 插件名片
> - 插件名称：Code Emitter
> - 插件作者：YISH
> - 插件说明：一个黑曜石插件，可以在沙盒环境中交互式执行代码块，支持的语言有 Rust、Kotlin、Python、Javascript、TypeScript 等。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mokeyish/obsidian-code-emitter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-emitter)

## 概述

一个黑曜石插件，可以在沙盒环境中交互式执行代码块，支持的语言有 Rust、Kotlin、Python、Javascript、TypeScript 等。

![Code Emitter](https://cdn.pkmer.cn/covers/code-emitter.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mokeyish/obsidian-code-emitter/master/README.md)
>

---

## Readme(翻译）

下面是 [[code-emitter]] 插件的自述翻译

# Obsidian 代码发射器

![GitHub发布（包括预发布）的最新版本](https://img.shields.io/github/v/release/mokeyish/obsidian-code-emitter?display_name=tag&include_prereleases)

![GitHub所有版本的下载量](https://img.shields.io/github/downloads/mokeyish/obsidian-code-emitter/total?style=flat-square)

该插件允许以类似 jupyter 笔记本的方式执行代码块。它基于 HTTP REST API 和 JS 沙箱和 Webassembly 技术，不需要本地环境要求，因此支持 Obsidian 支持的所有平台。

支持的平台包括：

- Windows
- MacOS
- Linux
- Android
- IOS

目前支持的语言：

| 支持的语言 | 方式                                                         |
| ---------- | ------------------------------------------------------------ |
| Rust       | <https://play.rust-lang.org>                                   |
| Kotlin     | <https://play.kotlinlang.org>                                  |
| V          | <https://play.vosca.dev/>                                      |
| JavaScript | JS 沙箱（[qiankun](https://github.com/umijs/qiankun/blob/master/src/sandbox/index.ts)） |
| TypeScript | [TypeScript](https://www.typescriptlang.org/) 编译器 + JS 沙箱 |
| Wenyan     | [Wenyan](https://github.com/wenyan-lang/wenyan) 编译器 + JS 沙箱 |
| Python     | WebAssembly（[Pyodide](https://github.com/pyodide/pyodide)）  |
| Java       | [Sololearn](https://www.sololearn.com)                       |
| Go         | [Sololearn](https://www.sololearn.com)                       |
| c/c++      | [Sololearn](https://www.sololearn.com)                       |
| CSharp     | [Sololearn](https://www.sololearn.com)                       |
| Swift      | [Sololearn](https://www.sololearn.com)                       |

**注意**：只有 `Python`、`TypeScript`、`JavaScript` 在本地沙箱（js / webassembly）中运行。其他语言将发送代码到第三方网站以评估结果（例如：<https://play.kotlinlang.org，https://play.rust-lang.org）。请注意避免发送可能包含敏感信息的源代码。>

**广告**：您可能会喜欢我的其他插件🤪

- [Obsidian增强导出](https://github.com/mokeyish/obsidian-enhancing-export)

---

![.](https://cdn.pkmer.cn/covers/code-emitter_2_0.gif)

## 安装

1. 在 [obsidian](https://obsidian.md/) 的社区插件中搜索 `Code Emitter`，并安装它。

## 例子

### Python

通过 `micropip` 安装 numpy。所有可用的包都在 [这里](https://github.com/mokeyish/pyodide-dist/find/master) 列出（搜索 `whl`）。

```python
import micropip
await micropip.install('numpy')  
import numpy as np
a = np.random.rand(3,2)
b = np.random.rand(2,5)

print(a@b)
```

### 任何支持 CORS 的语言

以下是支持 Ruby 的示例。

```typescript
const url = 'https://api2.sololearn.com/v2/codeplayground/v2/compile';

const runCode = async (code: string, lang: 'cpp' | 'go' | 'c' | 'java' | 'cs' | 'swift' | 'rb') => {
  const header = {
    'User-Agent': 'Obsidian Code Emitter/0.1.0 (如果不允许，请告诉我)',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'Content-Type': 'application/json',
  };
		
  const res = await fetch(url, {
    'headers': header,
    'body': JSON.stringify({
      'code': code,
      'codeId': null,
      'input': '',
      'language': lang
    }),
    'method': 'POST',
  });
  return (await res.json()) as {
    success: boolean,
    errors: string[],
    data: {
      sourceCode: number,
      status: number,
      errorCode: number,
      output: string,
      date: string,
      language: string,
      input: string,
    }
  };
};

const ruby_code = `
puts "Hello World12"
`;


console.log((await runCode(ruby_code, 'rb')).data.output);
```

## 许可证

此插件沙箱包含来自 [https://github.com/umijs/qiankun](https://github.com/umijs/qiankun/blob/master/src/sandbox/index.ts) 的代码，该代码根据以下许可证进行许可：

- MIT 许可证（LICENSE-MIT 或 [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)）

其他代码根据以下许可证进行许可：

- GPL-3.0 许可证（LICENSE-GPL-3.0 或 [https://opensource.org/licenses/GPL-3.0](https://opensource.org/licenses/GPL-3.0))



