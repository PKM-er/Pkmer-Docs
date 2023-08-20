---
uid: 20230715051519
title: Obsidian 插件：advanced paste 定制化的粘贴插件
tags: [粘贴, 自定义, 表格, 文本处理]
description: 一个可以定制化的粘贴插件，可以在粘贴到 Obsidian 之前处理文本。比如 csv 转 md 表格，网页 html 转 md 表格
author: Nathaniel
type: basic
draft: false
editable: false
modified: 20230717131108
---

# Obsidian 插件：advanced paste 定制化的粘贴插件

> [!Note] 插件名片
> - 插件名称：advanced-paste
> - 插件版本：2.5.1
> - 插件作者：[kxxt](https://github.com/kxxt) (国人)
> - 插件描述：此插件可以提供多个高级命令并允许创建用于粘贴的自定义转换功能
> - 插件项目地址：[点我跳转](https://github.com/kxxt/obsidian-advanced-paste)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-paste)

## 特性&效果

> [!note]
> 插件默认提供了几个命令，也可以自己编写脚本用于实现特殊需求

![Pasted image 20230715053646](https://cdn.pkmer.cn/images/Pasted%20image%2020230715053646.png!pkmer)

- 默认转换（Default）
	- convert html to markdown (将 html 处理为 markdown 格式)
- 智慧链接（smart Join）
	- 处理所有行，并使用空格链接在粘贴之前，适用于修复意外断行的情况（比如复制 pdf 上内容出现内容断行）。这个命令在从 PDF 文件粘贴时特别有用。
- 连接所有的行（Join Lines）
	- 在粘贴之前，连接所有的行
- 移除空行（Remove Blank Line）
	- 删除所有的空行。当你从一个网页复制一些东西，你发现有太多的空白行直接粘贴到 obsidian 时，这个命令是有用的。
- 原始 HTML（Raw HTML）
	- 会粘贴剪切板中内的原始 HTML 格式。如果从网页上复制，则会粘贴网页的 HTML 格式内容

## 使用

使用很简单。在粘贴之前，调用命令进行转换（transform），转换内容就是最终粘贴到 obsidian 中内容。

此插件值得关注的功能就是可以**自定义转换**。

### 自定义转换

你可以使用 JavaScript 编写属于你自己的转换功能，步骤如下：

1. 在插件中选项中为你的自定义脚本设置一个储存目录，或者选择默认设置
2. 在脚本储存目录中创建 JavaScript 源文件（`*.js ` 或 `*.mjs`）（您不能在 obsidian 中操作，可以使用编辑器如 VCode）
3. 编写 JavaScript 脚本用于添加你的自定义转换
4. 禁用插件，然后重新启用来应用改变
5. 然后你就可以在 obsidian 的命令面板（command platte）中找到此转换命令，并且可以为其分配一个快捷键便于调用

>[!note]
>进阶内容：如何使用 advanced-paste 插件编写一个自定义转换

### 自定义转换示例

#### 网页表格，CSV 表格转 markdown 表格

使用自定义（第三方）转换需要进行如下配置

1. 配置脚本储存目录
2. 重启 obsidian
3. 分配一个快捷键（可选）
4. 粘贴之前执行命令

**详细步骤**

1. 配置脚本储存目录
进入 插件选项（option）
![Pasted image 20230715061414](https://cdn.pkmer.cn/images/Pasted%20image%2020230715061414.png!pkmer)
设置一个目录路径，比如当前是 `attachments/adpaste-scripts` 表示根目录下的 `attachment` 文件夹下的 `adpaste-scripts` 文件夹（前提需要有这个文件夹）
![Pasted image 20230715061432](https://cdn.pkmer.cn/images/Pasted%20image%2020230715061432.png!pkmer)
在此文件夹下创建一个后缀为 `.js` 的文件（比如 `my-script.js`），并在其中编写代码（可以直接将**源码**中内容复制）
![Pasted image 20230715061738](https://cdn.pkmer.cn/images/Pasted%20image%2020230715061738.png!pkmer)
2. 重启 obsidian
此时，可以在快捷键设置中中查看添加的命令
![Pasted image 20230715061937](https://cdn.pkmer.cn/images/Pasted%20image%2020230715061937.png!pkmer)
![Pasted image 20230715061949](https://cdn.pkmer.cn/images/Pasted%20image%2020230715061949.png!pkmer)
3. 分配一个快捷键（可选）
4. 粘贴之前执行命令
![Pasted image 20230715062103](https://cdn.pkmer.cn/images/Pasted%20image%2020230715062103.png!pkmer)
效果
![Pasted image 20230715062135](https://cdn.pkmer.cn/images/Pasted%20image%2020230715062135.png!pkmer)
源码：

```js
export function transformHTMLTableToMDTable(input) {
    // split the input with '\r\n' to  array lines
    let lines = input.split("\r\n");
    lines.forEach((line, index) => {
        if (line.length === 0) lines.splice(index, 1);
    });
    // header from the first element of lines
    let header = lines[0].split("\t");
    // split each elemenent of  lines as row  with '\t' to array bodyData
    let bodyData = lines.splice(1).map((row) => row.split("\t"));
    // compare all elements of bodyData to each other, get a array composed of the max length computed by the max content length of all columns from  sub-element of n-th
    let maxLengthArr = header.map((h, i) => {
        return Math.max(...bodyData.map((b) => b[i].length), h.length);
    });
    let headerWithPipe = concatPipeLine(header);
    let bodyWithPipe = concatPipeLine(bodyData);
    const rowPipe =
        "|" + maxLengthArr.map((length) => `${repeatValue("-", length)}|`).join("");
    let markdownTable = headerWithPipe + "\n" + rowPipe + "\n" + bodyWithPipe;
    /**
     *
     * @param {*} targetRow
     * @param {*} maxLengthArr
     * @returns
     */
    function concatPipeLine(targetRow) {
        if (targetRow[0] instanceof Array) {
            let rowsArr = targetRow.map((body) => {
                return (
                    "|" +
                    fillWithSpace(body, maxLengthArr)
                        .map((col) => `${col}|`)
                        .join("")
                );
            });
            return rowsArr.join("\n");
        } else {
            let rowArr = fillWithSpace(targetRow, maxLengthArr).map(
                (col) => `${col}|`
            );
            rowArr.unshift("|");
            return rowArr.join("");
        }
    }

    /**
     * 得到填充 空格后的 header
     *
     * 情况1：如果 gapNum 为偶数，则 给  header的列字符数 左右 添加 gapNum/2 的空格
     * 情况2：如果 gapNum 为奇数，则 给  header的列字符数 左 添加 gapNum-1/2 的空格，右添加 gapNum-1/2 +1 的空格
     * @param {*} header
     * @param {*} maxLengthArr
     * @returns
     */
    function fillWithSpace(row, maxLengthArr) {
        return maxLengthArr.map((col, index) => {
            let gapNum = col - row[index].length;
            // even number
            if (gapNum % 2 === 0) {
                return addPrefixAndSuffix(
                    row[index],
                    repeatValue(" ", gapNum / 2),
                    repeatValue(" ", gapNum / 2)
                );
            } else {
                return addPrefixAndSuffix(
                    row[index],
                    repeatValue(" ", (gapNum - 1) / 2),
                    repeatValue(" ", (gapNum - 1) / 2 + 1)
                );
            }
        });
    }
    /**
     * 给指定字符串 str 添加指定前缀 prefix 和 后缀 suffix
     * @param {*} str
     * @param {*} prefix
     * @param {*} suffix
     * @returns
     */
    function addPrefixAndSuffix(str, prefix, suffix) {
        return `${prefix}${str}${suffix}`;
    }

    /**
     * 重复指定字符串 targetStr n 次
     * @param {*} value
     * @param {*} n
     * @returns
     */
    function repeatValue(targetStr, n) {
        return targetStr.repeat(n);
    }
    return markdownTable;
}
```

> [!Attention]
> 此功能在插件早期没有对应预置命令，因此笔者自己编写实现一个命令。虽然当前版本已有相关的实现（默认转换），但是转换的表格没有对齐，而笔者编写的转换可以进行对齐，方便源代码查看。不过现在 已有越来越多的插件可以脱离直接在 obsidian 中手动编辑，似乎对齐功能不重要了。
>
> 此功能仅是针对表格部分而不是网页全部内容，须知！

> [!warning]
> 目前的脚本没考虑到中文，其他特殊字符（全角）的宽度影响，因此仅适用于 英文字符内容情况下的对齐，后续会改进。

假设这是网页中包含表格的部分

![Pasted image 20230715060823](https://cdn.pkmer.cn/images/Pasted%20image%2020230715060823.png!pkmer)

复制它

![Pasted image 20230715060834](https://cdn.pkmer.cn/images/Pasted%20image%2020230715060834.png!pkmer)

然后转到 Obsidian 中，在粘贴之前，调用命令（或者按下设定好的快捷键）触发执行

![Pasted image 20230715060840](https://cdn.pkmer.cn/images/Pasted%20image%2020230715060840.png!pkmer)

转换后的效果：

![Pasted image 20230715060746](https://cdn.pkmer.cn/images/Pasted%20image%2020230715060746.png!pkmer)

对比使用插件内置的**默认转换**的效果

![Pasted image 20230715060722](https://cdn.pkmer.cn/images/Pasted%20image%2020230715060722.png!pkmer)

除了网页上的表格，CSV 中的表格也可以在粘贴前转换（前提是简单的，非合并的表格）

CSV( Excel ) 中的表格

![Pasted image 20230715062958](https://cdn.pkmer.cn/images/Pasted%20image%2020230715062958.png!pkmer)

处理后的效果

![Pasted image 20230715063026](https://cdn.pkmer.cn/images/Pasted%20image%2020230715063026.png!pkmer)

![Pasted image 20230715063039](https://cdn.pkmer.cn/images/Pasted%20image%2020230715063039.png!pkmer)

（完）