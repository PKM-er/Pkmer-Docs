---
uid: 20230803212631
title: Obsidian 插件：【Readme】Keyshots
tags: ['obsidian插件', 'readme']
description: 添加来自像Visual Studio Code或JetBrains Family等流行IDE的经典热键/快捷键命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Keyshots

> [!Note] 插件名片
> - 插件名称：Keyshots
> - 插件作者：KrazyManJ
> - 插件说明：添加来自像Visual Studio Code或JetBrains Family等流行IDE的经典热键/快捷键命令。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/KrazyManJ/obsidian-keyshots)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?keyshots)

## 概述

添加来自像Visual Studio Code或JetBrains Family等流行IDE的经典热键/快捷键命令。

![Keyshots](https://cdn.pkmer.cn/covers/keyshots.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/KrazyManJ/obsidian-keyshots/master/README.md)
> 

---

## Readme(翻译）

下面是 [[keyshots]] 插件的自述翻译



<a href="https://github.com/KrazyManJ/obsidian-keyshots">
    <img src="assets/readme_banner.svg" alt="" width="100%">
</a>

Keyshots是一个[Obsidian](https://obsidian.md)插件，它添加了来自流行的IDE（如Visual Studio Code或JetBrains Family）的经典热键/快捷键命令。
## 🌟 特点

### 在编辑器中切换 Obsidian 设置

- 可读的行长度
- 显示行号
- 显示内联标题

### 编辑行操作

- 上移或下移行
- 复制行或选择
- 在上方或下方插入行
- 合并选定的行
- 将选择拆分为新行
- 扩展行选择
- 对选定的行进行排序
- 对选定的行进行随机排序
- *反转行（尚未实现）*

### 插入/删除插入符号/选择

- 向上或向下插入插入符号（文本光标）
- 选择所有或多个单词实例
- 按行拆分选择

### 转换选择

- 裁剪选择
- **切换大小写**：
  - 蛇形
  - 烤串
  - 小写
  - 大写
  - 标题
- **多重切换**：
  - 粗体
  - 斜体
  - 代码
  - 高亮
  - 注释
  - 删除线
  - 下划线
  - 键盘输入 (\<kbd\>)

### 在编辑器中插入组件

- 插入序号编号
- 插入代码块

### 其他

- 打开开发者工具
- 在编辑器中更改Keyshots的预设
- 切换Keyshots命令的大小写敏感性
- 打开Keyshots设置选项卡

## 🌠 可视化示例

Keyshots 添加了一些操作，如上移或下移行...

![](assets/gifs/line_move.gif)

...在光标上方或下方添加插入符...

![](assets/gifs/add_caret.gif)

...在上方或下方插入行...

![](assets/gifs/insert_line.gif)

...上移或下移复制行...

![](assets/gifs/vscode_duplicate_line.gif)

...复制文本或选择...

![](assets/gifs/jetbrains_duplicate.gif)

...在编辑器内切换可读行长度...

![](assets/gifs/toggle_readable_line_length.gif)

...在编辑器内切换行号...

![](assets/gifs/toggle_line_numbers.gif)

...编码或解码 URI 文本...

![](assets/gifs/uri_encode_decode.gif)

...将选定的文本转换为小写、大写或首字母大写...

![](assets/gifs/transform_text.gif)

...将选定的行合并为一行...

![](assets/gifs/join_lines.gif)

...将选择拆分为新行并修剪选择...

![](assets/gifs/split_sel_on_line_and_trim.gif)

...使用字母数字比较对选定的行进行排序...

![](assets/gifs/sort_selected_lines.gif)

...将选择转换为或从蛇形命名法...

![](assets/gifs/transform_to_from_snakecase.gif)

...**还有更多要探索的命令！** *(更多即将推出)*

## ⌨️ IDE映射

这是所有可用映射的完整列表。如果缺少IDE操作的热键，则使用Keyshots的映射热键。

| 命令名称                                       | Keyshots映射                      | Visual Studio Code              | JetBrains IDEs                    | Microsoft Visual Studio     |
|------------------------------------------------|-----------------------------------|---------------------------------|-----------------------------------|-----------------------------|
| 向下添加光标                                   | <kbd>Ctrl + Alt + ↓</kbd>         | <kbd>Ctrl + Alt + ↓</kbd>       |                                   | <kbd>Shift + Alt + ↓</kbd>  |
| 向上添加光标                                   | <kbd>Ctrl + Alt + ↑</kbd>         | <kbd>Ctrl + Alt + ↑</kbd>       |                                   | <kbd>Shift + Alt + ↑</kbd>  |
| 向下复制行                                     | <kbd>Shift + Alt + ↓</kbd>        | <kbd>Shift + Alt + ↓</kbd>      |                                   |                             |
| 复制行或选择                                   | <kbd>Ctrl + Alt + D</kbd>         |                                 | <kbd>Ctrl + D</kbd>               | <kbd>Ctrl + D</kbd>         |
| 向上复制行                                     | <kbd>Shift + Alt + ↑</kbd>        | <kbd>Shift + Alt + ↑</kbd>      |                                   |                             |
| 扩展行选择                                     | <kbd>Alt + E</kbd>                | <kbd>Ctrl + L</kbd>             | <kbd>Ctrl + W</kbd>               | <kbd>Shift + Alt + =</kbd>  |
| 更改Keyshots预设                               | <kbd>Ctrl + Shift + P</kbd>       |                                 |                                   |                             |
| 插入代码块                                     | <kbd>Ctrl + Shift + \`</kbd>      |                                 |                                   |                             |
| 在上方插入行                                   | <kbd>Ctrl + Shift + Enter</kbd>   | <kbd>Ctrl + Shift + Enter</kbd> | <kbd>Ctrl + Alt + Enter</kbd>     | <kbd>Ctrl + Enter</kbd>     |
| 在下方插入行                                   | <kbd>Shift + Enter</kbd>          | <kbd>Ctrl + Enter</kbd>         | <kbd>Shift + Enter</kbd>          | <kbd>Shift + Enter</kbd>    |
| 插入序数编号                                   | <kbd>Shift + Alt + N</kbd>        |                                 |                                   |                             |
| 合并选定行                                     | <kbd>Ctrl + Shift + J</kbd>       | <kbd>Shift + J</kbd>            | <kbd>Ctrl + Shift + J</kbd>       |                             |
| 向下移动行                                     | <kbd>Alt + ↓</kbd>                | <kbd>Alt + ↓</kbd>              | <kbd>Shift + Alt + ↓</kbd>        | <kbd>Alt + ↓</kbd>          |
| 向上移动行                                     | <kbd>Alt + ↑</kbd>                | <kbd>Alt + ↑</kbd>              | <kbd>Shift + Alt + ↑</kbd>        | <kbd>Alt + ↑</kbd>          |
| 多重切换粗体                                   | <kbd>Ctrl + Shift + B</kbd>       |                                 |                                   |                             |
| 多重切换代码                                   | <kbd>Ctrl + Shift + C</kbd>       |                                 |                                   |                             |
| 多重切换注释                                   | <kbd>Ctrl + Shift + /</kbd>       |                                 |                                   |                             |
| 多重切换高亮                                   | <kbd>Ctrl + Shift + H</kbd>       |                                 |                                   |                             |
| 多重切换斜体                                   | <kbd>Ctrl + Shift + I</kbd>       |                                 |                                   |                             |
| 多重切换删除线                                 | <kbd>Ctrl + Shift + M</kbd>       |                                 |                                   |                             |
| 打开开发者工具                                 | <kbd>F12</kbd>                    |                                 |                                   |                             |
| 打开Keyshots设置选项卡                          | <kbd>Ctrl + Alt + ,</kbd>         |                                 |                                   |                             |
| 选择所有单词实例                               | <kbd>Ctrl + Shift + L</kbd>       | <kbd>Ctrl + Shift + L</kbd>     | <kbd>Ctrl + Shift + Alt + J</kbd> | <kbd>Shift + Alt + \`</kbd> |
| 选择多个单词实例                               | <kbd>Ctrl + D</kbd>               | <kbd>Ctrl + D</kbd>             | <kbd>Alt + J</kbd>                | <kbd>Shift + Alt + .</kbd>  |
| 随机排序选定行                                 | <kbd>Ctrl + Shift + Alt + S</kbd> |                                 |                                   |                             |
| 排序选定行                                     | <kbd>Ctrl + Shift + S</kbd>       |                                 |                                   |                             |
| 按行拆分选择                                   | <kbd>Ctrl + Alt + L</kbd>         |                                 |                                   |                             |
| 在新行上拆分选择                               | <kbd>Alt + S</kbd>                |                                 |                                   |                             |
| 切换“内联标题”设置                            | <kbd>Ctrl + Alt + T</kbd>         |                                 |                                   |                             |
| 切换“行号”设置                                | <kbd>Ctrl + Alt + N</kbd>         |                                 |                                   |                             |
| 切换“可读行长度”设置                          | <kbd>Ctrl + Alt + R</kbd>         |                                 |                                   |                             |
| 切换Keyshots大小写敏感性                       | <kbd>Ctrl + Alt + I</kbd>         |                                 |                                   |                             |
| 切换大小写（JetBrains）                        | <kbd>Ctrl + Shift + U</kbd>       |                                 | <kbd>Ctrl + Shift + U</kbd>       |                             |
| 切换键盘输入（\<kbd\>）                        | <kbd>Ctrl + Shift + K</kbd>       |                                 |                                   |                             |
| 切换选择kebabcase                             | <kbd>Alt + -</kbd>                |                                 |                                   |                             |
| 切换选择snakecase                             | <kbd>Shift + Alt + -</kbd>        |                                 |                                   |                             |
| 切换选择URI编码/解码字符串                     | <kbd>Ctrl + Alt + U</kbd>         |                                 |                                   |                             |
| 切换下划线                                     | <kbd>Alt + N</kbd>                |                                 |                                   |                             |
| 将选择转换为小写                               | <kbd>Alt + L</kbd>                |                                 |                                   | <kbd>Ctrl + U</kbd>         |
| 将选择转换为标题大小写（首字母大写）           | <kbd>Alt + C</kbd>                |                                 |                                   |                             |
| 将选择转换为大写                               | <kbd>Alt + U</kbd>                |                                 |                                   | <kbd>Ctrl + Shift + U</kbd> |
| 剪裁选择                                       | <kbd>Alt + T</kbd>                |                                 |                                   |                             |

## ✌️⌨️ 双键命令

双键命令是 JetBrains IDE 中的一项功能，它在按下特定键两次后执行特定的操作。

现在 Keyshots 有两个双键命令：

- <kbd>Ctrl</kbd> - 按住最后一个键然后按下 <kbd>↑</kbd> 或 <kbd>↓</kbd>，将添加光标，就像 `添加向上光标` 或 `添加向下光标` 一样
- <kbd>Shift</kbd> - 如果你启用了内部插件 `快速切换器`，那么这个快捷键将打开快速切换器窗口，就像 <kbd>Ctrl + O</kbd> 一样

如果你不喜欢它们，可以在设置中禁用它们。

## 🎛️ 设置

通过IDE预设，添加了选择默认热键映射的功能。您还可以配置某些命令的行为。

您可以从以下IDE预设中进行选择：

- 清除（所有内容为空白；在安装Keyshots时设置为默认）
- Visual Studio Code
- JetBrains IDE系列（IntelliJ IDEA，PyCharm，WebStorm，...）
- Microsoft Visual Studio
- Keyshots默认热键映射

您还可以通过在Obsidian中使用命令"Change Keyshots preset"并使用<kbd>Ctrl + Shift + P</kbd>快捷键打开模态窗口来进行更改。

## ⚠️ 可能的冲突：

一些IDE命令有热键，这些热键已经被设置为其他Obsidian操作，导致冲突。

以下是所有可能的冲突列表：

| 热键                          | Visual Studio Code     | JetBrains IDEs         | Microsoft Visual Studio | Obsidian操作                        |
|-------------------------------|------------------------|------------------------|-------------------------|-------------------------------------|
| <kbd>Ctrl + L</kbd>           | 扩展行选择             |                        |                         | 切换复选框状态                      |
| <kbd>Ctrl + Enter</kbd>       | 在下方插入行           |                        | 在上方插入行            | 在新标签页中打开光标下的链接         |
| <kbd>Ctrl + W</kbd>           |                        | 扩展行选择             |                         | 关闭当前标签页                      |
| <kbd>Ctrl + Alt + Enter</kbd> |                        | 在上方插入行           |                         | 在右侧打开光标下的链接              |

### 我的冲突处理

对于默认的Keyshots映射，我将处理所有与Obsidian热键冲突的问题。然而请注意，我只能处理Obsidian热键，插件热键是无关紧要且无法处理的，因为插件数量是无限的。

此外，Obsidian团队建议不要为命令设置默认热键，这就是为什么Keyshots安装时带有“清除”预设的原因！



