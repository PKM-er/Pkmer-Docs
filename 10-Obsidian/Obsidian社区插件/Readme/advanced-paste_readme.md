---
uid: 2023080322134618
title: Obsidian 插件：Advanced Paste
tags: ['obsidian插件', 'readme']
description: 该插件提供了高级粘贴命令，并使您能够创建自定义的粘贴转换。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced Paste

> [!Note] 插件名片
> - 插件名称：Advanced Paste
> - 插件作者：kxxt
> - 插件说明：该插件提供了高级粘贴命令，并使您能够创建自定义的粘贴转换。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kxxt/obsidian-advanced-paste)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-paste)

## 概述

该插件提供了高级粘贴命令，并使您能够创建自定义的粘贴转换。

![Advanced Paste](https://cdn.pkmer.cn/covers/advanced-paste_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kxxt/obsidian-advanced-paste/master/README.md)
>

---

## Readme(翻译）

下面是 [[advanced-paste]] 插件的自述翻译

# Obsidian 高级粘贴

[![赞助商](https://img.shields.io/badge/sponsor-via%20paypal-blue)](https://www.paypal.com/paypalme/tokxxt)

![许可证](https://img.shields.io/github/license/kxxt/obsidian-advanced-paste)

![GitHub清单版本](https://img.shields.io/github/manifest-json/v/kxxt/obsidian-advanced-paste)

该插件提供了高级粘贴命令，并使您能够创建自定义转换以进行粘贴。

用法：为要使用的命令分配一个热键，然后按下热键粘贴内容。

个人而言，我喜欢将<kbd>Alt</kbd>+<kbd>V</kbd>分配给 [`智能连接`](#smart-join)

和将<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>分配给 [`删除空行`](#remove-blank-lines)。

> **警告**
> 永远不要将不受信任的脚本添加到脚本目录中，因为它可能会破坏您的 Vault 或更糟！

**您需要禁用并重新启用此插件才能将更改应用到脚本目录。**

# 特点

默认

该插件提供了一个比 Obsidian 内置更好的默认转换功能。您可以在插件设置中禁用它（需要重新启动 Obsidian 才能应用更改）。

它与 [自动链接标题插件](https://github.com/zolrath/obsidian-auto-link-title) 兼容，但可能与某些干扰剪贴板的其他插件不兼容。

**如果您之前将<kbd>Ctrl</kbd>+<kbd>V</kbd>绑定到此命令，请解除绑定，因为底层机制已更改。**

默认转换将使用 [turndown](https://github.com/mixmark-io/turndown) 和 [turndown-plugin-gfm](https://github.com/mixmark-io/turndown-plugin-gfm) 将 HTML 转换为 Markdown。它还将删除空标题和链接。

![展示](images/remove-empty-links.gif)

### 待办事项

- [ ] 尝试消除转换后的 Markdown 中的额外空行。

## 智能连接

此命令会修剪所有行并在粘贴之前用空格连接它们。它会自动连接由连字符分隔的单词。

当从 PDF 文件中粘贴时，此命令特别有用。

合并行

此命令在粘贴之前不修剪所有行。

删除空行

此命令在粘贴之前删除所有的空行。

当你从网页上复制内容并直接粘贴到 Obsidian 时，如果发现有太多的空行，可以使用此命令。

此命令粘贴了复制内容的原始 HTML。

## 自定义转换

您可以通过编写 JavaScript 来定义自己的自定义转换。

1. 在此插件的设置中设置脚本目录（或保持默认设置）。
2. 在脚本目录中创建一个 JavaScript 源文件（`*.js` 或 `*.mjs`）。
   （您不能在 Obsidian 中进行此操作。您需要像 VSCode 这样的编辑器）
3. 编辑 JavaScript 文件以添加您的自定义转换。
4. 禁用此插件，然后重新启用以应用更改。
5. 现在您可以在命令面板中找到您的自定义转换，并为其分配一个热键。

# 创建自定义转换

JavaScript 源文件将作为 ES 模块导入。

要创建一个转换，您需要创建一个导出的函数：

```javascript
export function myTransform(input) {
    return input;
}
```

函数名（以 start case 形式）将成为您自定义转换的名称。

您可以在单个 JavaScript 源文件中编写多个转换。

默认情况下，转换的输入是剪贴板中的文本。

要支持其他 MIME 类型，您可以将转换的 `type` 字段设置为 `"blob"`：

```javascript
export async function myBlobTransform(input) {
    if (!input.types.includes("text/html")) {
        return { kind: "err", value: "剪贴板中未找到HTML！" };
    }
    const html = await input.getType("text/html");
    return html.text();
}
myBlobTransform.type = "blob";
```

这样，转换的输入就是

[`ClipboardItem`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem)

而不是一个字符串。

您的转换函数应该返回一个 `string` 或 `TransformResult`

（当然，您也可以返回一个解析为它们之一的 `Promise`）。

`TransformResult` 是一个可辨识联合类型。它的类型只能是 `ok` 或 `err`。

当您从转换函数返回一个 `ok` 变体时，

`value` 字段应该是您最终转换结果的字符串。

当您返回一个 `err` 变体时，将显示一个通知，其中 `value` 字段将作为错误显示给最终用户。

```javascript
{ kind: "ok", value: "字符串" }
{ kind: "err", value: "发生错误！" }
```

高级：实用工具

transform 函数可以接受一个可选的第二个参数 `utils`，其中包含一些有用的辅助函数。

目前，提供了 [turndown服务](https://github.com/mixmark-io/turndown) 作为一个实用工具。您可以调用 `turndown.turndown` 将 HTML 转换为 Markdown。

您可以调用 `saveAttachment` 将 Blob 保存到 vault 中。函数签名如下：

```typescript
saveAttachment: (name: string, ext: string, data: ArrayBuffer) =>
    Promise<TFile>;
```

`lodash`、`moment.js` 和 `mime` 也作为实用工具提供。请查看以下示例：

```javascript
export async function myTransform(
    input,
    { turndown, _, moment, mime, saveAttachment }
) {
    if (input.types.includes("text/html")) {
        const html = await input.getType("text/html");
        return turndown.turndown(await html.text());
    }
    const text = await input.getType("text/plain");
    return text.text();
}
myTransform.type = "blob";
```

`remark` 和 `remark` 插件也作为实用工具提供，这使您可以转换 Markdown AST。请查看以下示例，它会在粘贴之前删除所有的图像：

```javascript
export async function noImage(
    input,
    {
        turndown,
        remark: {
            remark,
            remarkGfm,
            remarkMath,
            unistUtilVisit: { visit, SKIP },
        },
    }
) {
    if (input.types.includes("text/html")) {
        const html = await input.getType("text/html");
        const md = turndown.turndown(await html.text());
        return remark()
            .use(remarkGfm)
            .use(remarkMath)
            .use(() => (tree, file) => {
                visit(tree, "image", (node, index, parent) => {
                    parent.children.splice(index, 1);
                    return [SKIP, index];
                });
            })
            .processSync(md)
            .toString();
    }
    return { kind: "err", value: "No html found in clipboard!" };
}
noImage.type = "blob";
```

目前，提供了以下与 remark 相关的实用工具：

```typescript
remark: {
    unified: typeof import("unified").unified;
    remark: typeof import("remark").remark;
    remarkGfm: typeof import("remark-gfm").default;
    remarkMath: typeof import("remark-math").default;
    remarkParse: typeof import("remark-parse").default;
    remarkStringify: typeof import("remark-stringify").default;
    unistUtilVisit: typeof import("unist-util-visit");
    unistUtilIs: typeof import("unist-util-is");
}
```

如果您需要更多的实用工具，请随时提出问题或提交 PR。
