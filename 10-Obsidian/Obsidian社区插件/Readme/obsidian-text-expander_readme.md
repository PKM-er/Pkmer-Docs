---
uid: 20230804181808
title: Obsidian 插件：Text Expander
tags: ['自动化', 'obsidian插件', 'readme']
description: 在编辑器中扩展文本快捷键，运行shell命令和python脚本
author: AI
type: readme
draft: false
editable: false
modified: 20230816110627
---

# Obsidian 插件：Text Expander

> [!Note] 插件名片
> - 插件名称：Text Expander
> - 插件作者：Nikita Konodyuk
> - 插件说明：在编辑器中扩展文本快捷键，运行 shell 命令和 python 脚本
> - 插件分类：[' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/konodyuk/obsidian-text-expander)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-text-expander)

## 概述

在编辑器中扩展文本快捷键，运行 shell 命令和 python 脚本

![Text Expander|363](https://cdn.pkmer.cn/covers/obsidian-text-expander_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/konodyuk/obsidian-text-expander/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-text-expander]] 插件的自述翻译

⚠️ 不支持基于 CM6 的编辑器（Obsidian 版本大于等于 v13.0.0 的默认选项）。请考虑使用传统编辑器。

# 文本扩展插件

该插件在按下<kbd>Tab</kbd>键时替换格式为 `{{<text>}}` 的快捷方式。替换可以是静态文本，也可以是执行任意命令的结果。

> ⚠️ 目前，该插件仅部分支持 Windows。请参阅已知问题部分。

## 使用案例

- 静态文本模板的快捷方式：`{{trigger}}` -> `一些模板文本`
- 动态值：`{{now}}` -> `14:23`，`{{date}}` -> `2021-01-15`
- Python 表达式：`{{eval:2**10}}` -> `1024`，`{{eval:len(open("<note_path>").readlines())}}`，`{{py:from numpy import*;print(linalg.inv(triu([1,2,3,4])))}}`，...
- Shell 命令：`{{shell:ls <vault_path>/attachments}}`
- 自定义工具：`{{mytool:extract_all_lines_starting_with_(#tag)}}` -> `#tag 文本\n#tag ...`

## 安装

打开“设置 > 第三方插件 > 社区插件 > 浏览”，然后搜索“Text Expander”，点击“安装”。

## 设置

快捷方式被定义为一个 JSON 列表，每个条目包含三个字段：`regex`（必需）、`replacement`（可选）和 `command`（可选）。

- `regex` 字段定义了触发模式。条目按顺序尝试，直到 `regex` 与输入匹配。
- 如果提供了 `replacement`，则简单地替换快捷方式。
- `command` 包含在 shell 中运行的命令。快捷方式被其输出替换。

### 默认快捷键

以下是可以在“设置 > 插件选项 > 文本扩展 > 快捷键”中更改的默认配置：

```json
[
    {
        "regex": "^trigger$",
        "replacement": "## 示例替换\n- [ ] ",
    },
    {
        "regex": "^now$",
        "command": "printf `date +%H:%M`",
    },
    {
        "regex": "^py:",
        "command": "echo <text> | cut -c 4- | python3"
    },
    {
        "regex": "^eval:",
        "command": "echo <text> | cut -c 6- | python3 -c 'print(eval(input()), end=\"\")'"
    },
    {
        "regex": "^shell:",
        "command": "echo <text> | cut -c 7- | sh"
    },
    {
        "regex": "^tool:",
        "command": "echo <text> | cut -c 6- | python3 <scripts_path>/tool.py"
    },
    {
        "regex": "^sympy:",
        "command": "echo <text> | cut -c 7- | python3 <scripts_path>/sympy_tool.py"
    }
]
```

### 变量

使用 `<variable_name>` 可以在执行 `command` 字段之前将变量的值插入其中。可以使用以下变量：

- `<text>` 括号内的内容，带有转义的单引号。在大多数情况下推荐使用。
- `<text_raw>` 与 `<text>` 相同，但不进行任何转义。
- `<vault_path>` 当前 vault 的绝对路径。
- `<inner_path>` 在 Obsidian 文件浏览器中当前笔记的目录。例如，在 `<vault_path>/folder/folder2/note.md` 中，其值将为 `folder/folder2`。
- `<note_name>` 当前笔记的文件名，即上面示例中的 `note.md`。
- `<note_path>` `<inner_path>/<note_name>` 的快捷方式。
- `<scripts_path>` `<vault_path>/.obsidian/scripts` 的快捷方式。

### 示例流程

#### 示例 #1

- `{{trigger}}`<kbd>Tab</kbd> 被输入
- `^trigger$` 匹配 `trigger` -> 使用第一个快捷方式
- 第一个快捷方式的 `replacement` 字段替换 `{{trigger}}`

#### 示例 #2

- `{{now}}`<kbd>Tab</kbd>
- `^trigger$` 不匹配 `now` -> 继续到第二个快捷方式
- `^now$` 匹配 `now` -> 使用第二个快捷方式
- `command` 字段在指定的 shell 中执行，然后将输出用于替换 `{{now}}`

#### 示例 #3

- `{{sympy:latex(integrate(x, x))}}`<kbd>Tab</kbd>
- 只有最后一个快捷方式的 `regex` 与输入匹配
- 变量被处理：`echo <text> | cut -c 7- | python3 <scripts_path>/sympy_tool.py` -> `echo 'sympy:latex(integrate(x, x))' | cut -c 7- | python3 /path/to/vault/.obsidian/scripts/sympy_tool.py`
- 命令被执行：`cut` 剪切了 `sympy:` 前缀，`latex(integrate(x, x))` 作为输入传递给 `sympy_tool.py`
- `sympy_tool.py` 输出 `\frac{x^{2}}{2}`，替换了 `{{sympy:latex(integrate(x, x))}}`

### 自定义脚本

您可以将任何脚本放置在 `<vault_path>/.obsidian/scripts` 中以在命令中使用它们。[示例](https://github.com/konodyuk/obsidian-text-expander/tree/master/examples/scripts) 文件夹包含两个示例脚本，启用 `{{tool:` 和 `{{sympy:` 快捷方式。

## 安全性

由于插件是由 shell 驱动的，只需键入 `{{shell:rm -rf ...}}`<kbd>Tab</kbd>就可以轻松运行破坏性命令。当光标位于类似 `{{shell:...}}` 的内容上时，请三思而后按下<kbd>Tab</kbd>键。我也强烈不建议使用 `{{shell:...}}` 模式，这个模式主要是为了演示目的而添加的，建议使用 Python 脚本来代替。

## 未来工作

- `<cursor>` 占位符，定义替换后的光标位置。示例用法：`{{texenv:cases}}` -> `\begin{cases}\n\t<cursor>\n\end{cases}`。如果在单个快捷方式中使用了多个 `<cursor>` 占位符，则 <kbd>Tab</kbd> 键将在它们之间切换光标位置，直到所有占位符都被访问。
- 特殊语法（类似 `{*{<text>}}`）用于预览时渲染，而不是立即替换。
- 仅对 Windows 提供静态支持。

## 已知问题

- 长时间运行的命令可能会导致问题。例如，如果您输入 `{{shell:sleep 10 && echo 1}}`<kbd>Tab</kbd>，并在它完成之前输入 `{{now}}`<kbd>Tab</kbd>，那么 `{{now}}` 将被替换为 `1`。
- 目前对 Windows 的支持有限：
    - 带有 `replacement` 字段的快捷方式会被正确处理
    - 要在 Windows 上使用 `command` 字段，您需要安装一个 [WSL子系统](https://docs.microsoft.com/en-us/windows/wsl/install-win10)，并将 `Settings > Plugin Options > Text Expander > Shell executable` 设置为 `<your os name>.exe`（例如 Ubuntu 的 `ubuntu.exe`），还要确保您使用的任何 Python 包都已安装
    - 或者将 `Settings > Plugin Options > Text Expander > Shell executable` 设置为 `powershell`，并在命令中使用 PowerShell 语法。

## 鸣谢

该项目受到了 [Poc文本扩展实现](https://github.com/akaalias/text-expander-plugin) 的启发。我还借鉴了 [Run Snippets插件](https://github.com/cristianvasquez/obsidian-snippets-plugin) 的一些想法。

## 发布说明

### 1.1.0

- 添加了对 `:now` 语法的支持。使用 `{{py: long command}}` 语法来处理包含空格字符的触发器，使用 `:trigger` 来处理不包含空格的短触发器
- 当 "Shell executable" 的值发生变化时，Shell 可执行文件现在会自动重新启动

### 1.0.1

- 修复由于 "Shell 可执行文件 " 值不正确而导致的错误
- [[obsidian-text-expander]]
