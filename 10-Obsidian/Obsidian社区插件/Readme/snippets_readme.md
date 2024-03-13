---
uid: 2023080322271332
title: Obsidian 插件：Snippets plugin
tags: ['自动化', '编程', 'obsidian插件', 'readme']
description: 这个插件允许你在 Obsidian 中运行一些简单的脚本，用于启动一些对应服务，如 Java、Python
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Snippets plugin

> [!Note] 插件名片
> - 插件名称：Snippets plugin
> - 插件作者：Pelao
> - 插件说明：这个插件允许你在 Obsidian 中运行一些简单的脚本，用于启动一些对应服务，如 Java、Python
> - 插件分类：[' 自动化 ', ' 编程 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cristianvasquez/obsidian-snippets-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?snippets)

## 概述

这个插件允许你在 Obsidian 中运行一些简单的脚本，用于启动一些对应服务，如 Java、Python

![Snippets plugin](https://cdn.pkmer.cn/covers/snippets.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cristianvasquez/obsidian-snippets-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[snippets]] 插件的自述翻译

日期更新：'2020-06-22'

版本：0.0.4

# 运行代码片段插件

该插件允许您在 obsidian.md 内部运行 Python、Javascript 等代码片段。

它适用于简单的用途，比如启动服务、运行程序等。我只在 Linux 上进行了测试，并且是实验性的。

该插件会读取您的“代码片段插件设置”，其中包含每种语言的配置信息。

使用方法

### 预览模式

该插件为识别到的（shell）代码片段显示一个“运行”按钮。

![预览模式示例](./img/preview.png)

如果您点击该按钮，将会打开火狐浏览器。

## 编辑模式

1. 将光标放在代码片段的顶部。

![write mode example](./img/shell_date.png)

1. 按下 `Ctrl/Cmd`+`Shift`+`Enter`，或从调色板中选择 `Snippets: Run` 命令。

代码将（希望）运行，并且任何输出都将附加在代码片段之后。

![write mode example result](./img/shell_date_result.png)

您还可以调用一些 Python 代码！

![write mode python result](./img/python.png)

## 变量

以下占位符被识别：

|                |                           |
| -------------- | ------------------------- |
| {{vault_path}} | vault 的路径               |
| {{folder}}     | 文件夹的名称              |
| {{file_name}}  | 文件的名称                |
| {{file_path}}  | 文件的绝对路径            |

### 示例

```sh
echo {{vault_path}} 
echo {{folder}} 
echo {{file_name}} 
echo {{file_path}}
```

```output
/home/cvasquez/obsidian
snippets-plugin
readme.md
/home/cvasquez/obsidian/snippets-plugin/readme.md
    
```

## 配置

这是默认的配置。它包含每种语言的一个条目。

```json
{
  "python": {
    "template": "python3 -c \"{{src}}\"",
    "showModal": true,
    "appendOutputContents": true,
    "showRunButtonInPreview": true
  },
  "javascript": {
    "template": "node -e \"{{src}}\"",
    "showModal": true,
    "appendOutputContents": true,
    "showRunButtonInPreview": true
  },
  "sh": {
    "template": "{{src}}",
    "showModal": true,
    "appendOutputContents": true,
    "showRunButtonInPreview": true
  }
}
```

### 属性

|                        |                                        |
| ---------------------- | -------------------------------------- |
| Template               | {{src}} 将被替换                         |
| showModal              | 在模态框中显示输出                       |
| appendOutputContents   | 在代码块后面写入输出                     |
| showRunButtonInPreview | 在预览模式中显示按钮                     |
| options                | [附加选项](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) ，如 shell 或 encoding|

### 默认 shell

在 Unix 上，默认 shell 是 '/bin/sh'，在 Windows 上是 process.env.ComSpec。可以使用 'options' 属性配置其他 shell。

以下是使用 powershell 的示例：

```json
  "sh": {
    "template": "{{src}}",
    "options": {"shell":"powershell.exe"},
    "showModal": true,
    "appendOutputContents": true,
    "showRunButtonInPreview": true
  }
```

## 手动安装

安装依赖项

    npm install

生成 main.js bundle

    npm run build

将 main.js、manifest.json 和 styles.css 复制到您的 vault 的插件文件夹中，

位于 [YourVaultFolder]/.obsidian/plugins/review-obsidian/。

## 观察

这个原型是非常实验性的；我写它是因为我想在 Obsidian 中使用 Python。

开发者

欢迎并感谢您的 Pull 请求。 :)

版本

### 0.0.4

- 添加了 JavaScript 选项。
- 添加了 Shell 选项。
- 当 Markdown 视图不存在时不会出现错误。

感谢：

* [catworld](https://github.com/catword)
* [mgmeyers](https://github.com/mgmeyers)
