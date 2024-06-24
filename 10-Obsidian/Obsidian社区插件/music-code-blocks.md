---
uid: 20230822234744
title: Obsidian 插件：ABC Music Notation 让 Obsidian 变成乐谱编辑器
tags: [音乐相关, Obsidian, Obsidian插件]
description: 通过abcjs使用ABC音乐符号直接从代码块渲染乐谱
author: OS
type: basic
draft: false
editable: false
modified: 20230921152358
---

# Obsidian 插件：ABC Music Notation 让 Obsidian 变成乐谱编辑器

## 概述

通过 abcjs 使用 ABC 音乐符号直接从代码块渲染乐谱

> [!Note] 插件名片
> - 插件名称：ABC Music Notation
> - 插件作者：Til Blechschmidt
> - 插件说明：通过 abcjs 使用 ABC 音乐符号直接从代码块渲染乐谱
> - 插件分类：[' 音乐相关 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/abcjs-music/obsidian-plugin-abcjs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?music-code-blocks)

![ABC Music Notation](https://cdn.pkmer.cn/covers/music-code-blocks.png!pkmer)

使用 `abc` 语言指定符号，从代码块中渲染 ABC 音乐符号。在底层，它使用 [abcjs](https://paulrosen.github.io/abcjs/) 库，并支持 abcjs 提供的所有功能。

## 示例

### 简单的歌曲

    ```music-abc
    X:1
    T:传统爵士舞曲
    M:6/8
    L:1/8
    R:爵士舞曲
    K:G
    GFG BAB | gfg gab | GFG BAB | d2A AFD |
    GFG BAB | gfg gab | age edB |1 dBA AFD :|2 dBA ABd |:
    efe edB | dBA ABd | efe edB | gdB ABd |
    efe edB | d2d def | gfe edB |1 dBA ABd :|2 dBA AFD |]
    ```

### 合唱音乐

    ```music-abc
    X: 1
    T: 合唱
    V: T1 clef=treble name="女高音"
    V: T2 clef=treble name="女低音"
    V: B1 clef=bass name="男高音"
    V: B2 clef=bass name="男低音"
    L:1/8
    K:G
    P:第一部分
    [V: T1]"C"ed"Am"ed "F"cd"G7"gf |
    [V: T2]GGAA- A2BB |
    [V: B1]C3D- DF,3 |
    [V: B2]C,2A,,2 F,,2G,,2 |
    ```

### 自定义选项

您可以通过在代码块顶部添加一个 JSON 字符串并在其后加上 `---` 来将自定义选项传递给 `renderAbc` 函数。请注意，在 JSON 之前或之后不能有任何空格。

    ```music-abc
    {
      "tablature": [{"instrument": "violin"}]
    }
    ---
    X:1
    T: Cooley's
    M: 4/4
    L: 1/8
    R: reel
    K: G
    |:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
    ```

当 JSON 无效时，插件仍会尝试渲染音乐块，但会在顶部显示一个大红色横幅以显示错误，以便您不会错过它。

要查看您可以使用的所有选项的完整参考，请参阅 [官方abcjs文档](https://paulrosen.github.io/abcjs/visual/render-abc-options.html)。

维护和贡献

该插件由 [abcjs-music](https://github.com/abcjs-music) 组织的志愿者维护，包括原作者 Til Blechschmidt。

如果您有任何反馈，请随时提出问题。如果您熟悉源代码，请考虑提交拉取请求！欢迎所有贡献。
