---
uid: 20230817224052
title: Obsidian 插件：Contextual Comments
tags: ['obsidian插件', 'readme']
description: 一般评论或与语言相关的内容（在代码块中）+ 2个命令修剪末尾的行（所有文档/代码块）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Contextual Comments

> [!Note] 插件名片
> - 插件名称：Contextual Comments
> - 插件作者：1C0D
> - 插件说明：一般评论或与语言相关的内容（在代码块中）+ 2 个命令修剪末尾的行（所有文档/代码块）。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/1C0D/Obsidian-Contextual-Comments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contextual-comments)

## 概述

一般评论或与语言相关的内容（在代码块中）+ 2 个命令修剪末尾的行（所有文档/代码块）。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/1C0D/Obsidian-Contextual-Comments/master/README.md)

---

## Readme(翻译）

下面是 [[contextual-comments]] 插件的自述翻译

# 上下文注释

（建议使用快捷键<kbd>ctrl :</kbd>进行行注释，<kbd>shit alt a</kbd>进行块注释）

- 改进了对普通注释 `%%...%%` 的处理
- 在代码块中切换注释（与语言相关）：
  - 行注释，例如：`//....` 或 `#....`
      - 如果选择了 1 行：
        - 整行，光标位置处，无需选择。
        - 从选择的开头开始。
      - 多行选择：
        - 整行
          - 例如：

            ```   
            // 这是第一行注释  
            // 这是第二行注释
            ```

          - 一些像 HTML 这样的语言将围绕选择（而不是按行）进行，但是整行被选择

              ```
              \<!-- 这是第一行注释       
              这是第二行注释 --\>
              ``` 

  - 块注释，例如：`/* ... */` 或 `<!-- ... -->`
    - 如果选择了 1 行或多行：
      - 在选择周围

          ```
          this /* 这是第一行注释      
          这是第二行注释 */
          ```

    - 与行注释不同，如果没有选择，可以在光标位置创建新的注释（即使在空行上）
<!-- -->
- 两个命令用于删除末尾的空行：
  - 一个用于整个文档，
  - 一个仅在代码块中（最有用）。

（如果您需要更多的代码块前缀，请随时在我的 GitHub 上提问。如果我漏掉了一些，请告诉我。）
