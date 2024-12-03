---
uid: 20231229165015
title: Obsidian URI
tags: [Link, URI, 基础使用]
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240106234005
---

> [!cite] 原文来自 [Obsidian URI - Obsidian Help](https://help.obsidian.md/Concepts/Obsidian+URI)

# Obsidian URI

Obsidian URI 是 Obsidian 支持的自定义 URI 协议，可让您触发各种操作，例如打开笔记或创建笔记。

Obsidian URI 通常采用以下格式：

```link
obsidian://action?param1=value&param2=value
```

- `action` 参数是您要执行的操作。

> [!caution] Encoding 编码
> 确保您的值经过正确的 **URI 编码**。例如，正斜杠字符 `/` 必须编码为 `%2F`，空格字符必须编码为 `%20`。这一点尤其重要，因为编码不正确的“保留”字符可能会破坏 URI 的解释，请参考：[Percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding)。

## 注册 Obsidian URI

在 Windows 和 macOS 上，运行一次应用程序就足以在您的计算机上注册 Obsidian URI 协议。

### Linux

在 Linux 上，这是一个更加复杂的过程：

1. 确保您创建一个 `obsidian.desktop` 文件。[详细信息请参见此处。](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. 确保您的桌面文件将 `Exec` 字段指定为 `Exec=executable %u`。`%u` 用于将 `obsidian://` URI 传递给应用程序。
3. 如果您使用的是 AppImage 安装程序，则可能必须使用 `Obsidian-x.y.z.AppImage --appimage-extract` 对其进行解压。然后确保 `Exec` 指令指向解压的可执行文件。

## 打开笔记 (Open notes)

打开 Obsidian 仓库，或打开该仓库内的文件。

### 案例 (Examples)

- `obsidian://open?vault=my%20vault`这将打开名为 `my vault` 的仓库。如果该仓库已经打开，则切换至仓库对应的窗口。
- `obsidian://open?vault=ef6ca3e3b524d22f` 这将打开由 ID `ef6ca3e3b524d22f` 标识的仓库。
- `obsidian://open?vault=my%20vault&file=my%20note` 假设文件存在，这将打开库 `my vault` 中的注释 `my note.md`。
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note` 这将查找包含路径 `/home/user/my vault/path/to/my note` 的任何仓库。然后，路径的其余部分将传递给 `file` 参数。例如，如果库存在于 `/home/user/my vault`，则这相当于将 `file` 参数设置为 `path/to/my note`。

> [!tip] 打开标题 (head) 或者块 (block)
> 通过正确的 **URI 编码**，您可以导航到注释中的标题或块。`Note%23Heading` 将导航到名为“Heading”的标题，而 `Note%23%5EBlock` 将导航到名为“Block”的块。

### 参数 (Parameters)

- `vault` 可以是仓库名称或仓库 ID[^1]。
- `file` 可以是**文件名**，也可以是**从库根到指定文件的路径**。*如果文件扩展名是 `md`，则可以省略扩展名*。
- `path` 文件的绝对文件系统路径。
	- 使用此参数将覆盖 `vault` 和 `file`。
	- 这将导致应用程序搜索包含指定文件路径的最具体的仓库。
	- 然后路径的其余部分替换 `file` 参数。

## 打开搜索 (Open search)

此 Obsidian URI 可以在指定的仓库中打开 [搜索](https://help.obsidian.md/Plugins/Search)，并可选择执行搜索查询。

### 案例 (Examples)

- `obsidian://search?vault=my%20vault` 这将打开仓库 `my vault`，并打开搜索。
- `obsidian://search?vault=my%20vault&query=Obsidian` 这将打开库 `my vault`，打开搜索，并执行 `Obsidian` 搜索。

### 参数 (Parameters)

- `vault` 可以是仓库名称，也可以是仓库 ID [^1]。与操作 `open` 相同。
- `query`（可选）要执行的搜索查询。

## 创建笔记 (Create note)

这个 URI 可以在 vault 中创建一个新的笔记，可以选择添加一些内容。

### 示例 (Examples)

- `obsidian://new?vault=my%20vault&name=my%20note` 这将打开仓库 `my vault`，并创建一个名为 `my note` 的新笔记。
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note` 这将打开仓库 `my vault`，并在 `path/to/my note` 处创建一个新笔记。

### Parameters(参数)

- `vault` 可以是仓库名称，也可以是仓库 ID [^1]。与操作 `open` 相同。
- `name` 要创建的文件名。如果指定了此项，将根据您的“新笔记的默认位置”首选项选择文件位置。
- `file` 库绝对路径，包括名称。如果指定，将覆盖 `name`。
- `path` 全局绝对路径。与 `open` 操作中的 `path` 选项类似，它将覆盖 `vault` 和 `file`。
- `content`（可选）注释的内容。
- `silent`（可选）如果您不想打开新笔记，请包含此参数。
- `append`（可选）包含此参数可附加到现有文件（如果存在）。
	- `overwrite`（可选）如果存在，则覆盖现有文件，但前提是未设置 `append`。
- `x-success`（可选）请参阅 [x-callback-url](https://help.obsidian.md/Concepts/Obsidian+URI#x-callback-url).

## Integrate with Hook

此 Obsidian URI 终端点将与 [Hook](https://hookproductivity.com/) 一起使用。

### 案例 (Examples)

`obsidian://hook-get-address`

### 参数 (Parameters)

- `vault`（可选）可以是仓库名称，也可以是仓库 ID[^1]。如果未提供，则将使用当前或最后一个聚焦的仓库。
- `x-success`（可选）请参阅 [x-callback-url](https://help.obsidian.md/Concepts/Obsidian+URI#x-callback-url)。
- `x-error`（可选）请参阅 [x-callback-url](https://help.obsidian.md/Concepts/Obsidian+URI#x-callback-url)。

如果定义了 `x-success`，则此 API 将使用它作为 x-callback-url。否则，它会将当前焦点笔记的 Markdown 链接复制到剪贴板，作为 `obsidian://open` URL。

## 使用 x-callback-url 参数

某些终端点将接受 x-callback-url 参数 `x-success` 和 `x-error`。提供后，Obsidian 将为 `x-success` 回调提供以下内容：

- `name` 文件名，不带文件扩展名。
- `url` 此文件的 `obsidian://` URI。
- `file` (desktop only) the `file://` URL for this file.
    `file`（仅限桌面）此文件的 `file://` URL。

例如，如果黑曜石收到 `obsidian://…..x-success=myapp://x-callback-url`,响应将是 `myapp://x-callback-url?name=…&url=obsidian%3A%2F%2Fopen…&file=file%3A%2F%2F…`

`obsidian://…..x-success=myapp://x-callback-url`，响应将是 `myapp://x-callback-url?name=…&url=obsidian%3A%2F%2Fopen…&file=file%3A%2F%2F…`

## 速记格式 (Shorthand formats)

除了上述格式之外，还有两种“Shorthand”格式可用于打开仓库和文件：

1. `obsidian://vault/my vault/my note` 相当于 `obsidian://open?vault=my%20vault&file=my%20note`。
2. `obsidian:///absolute/path/to/my note` 相当于 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`。

## References

- [Obsidian URI - Obsidian Help](https://help.obsidian.md/Concepts/Obsidian+URI)
- 拓展：[[obsidian-advanced-uri]] 插件可以增强 Obsidian 的 URI 能力

[^1]: 仓库ID 是分配给仓库的随机 16 个字符代码，例如 `ef6ca3e3b524d22f`。此 ID 对于计算机上的每个文件夹都是唯一的。可以通过打开仓库切换器并单击所需仓库的上下文菜单中的“复制仓库 ID”来找到该 ID。