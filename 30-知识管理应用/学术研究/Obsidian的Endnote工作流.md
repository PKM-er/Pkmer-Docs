---
uid: 20230719025219
title: Obsidian 的 Endnote 工作流（先行讨论版）
tags: [学术, 知识管理, 参考文献, 文献引用, 工作流]
description: Obsidian的Endnote工作流
author: 山人
type: other
draft: false
editable: false
modified: 20230723214735
---

# Obsidian 的 Endnote 工作流（先行讨论版）

本文主要介绍在使用 obsidian 进行科学论文写作中，endnote 参考文献引用的工作流，需要先行学习二宝学长的 [[文科生的学术知识管理工作流-上篇]] ，[[文科生工作流-zotero配置]]，用 endnote 替换 zotero，进行 markdown 格式的论文写作。

> [!note] 免责说明
> **此工作流，刚开始构建，请先行测试，如果直接在已有论文上，测试，导致信息丢失，本文作者无法为此负责。**

## 前置知识要点

### Endnote 中相关的知识要点

**1）显示文献列表的 record number 列**

右击参考文献列表的表头，勾选 Record Number（在 endnote 文献库中，此为默认的文献条目 ID 字段），添加到参考文献展示列表中。

![aabf2b5c6ebddcf43dd254e04d16f0dd](https://cdn.pkmer.cn/images/202307232205166.png!pkmer)

**2） 使用 word 中 endnote 插件，将文中引用转换成 unformatted Citations 格式**

endnote 的 unformatted Citations 格式：`{第一作者的姓, 出版年份 #record·number}`。可以于下图圈 1 的左侧，选择对应期刊的 style，然后使用下面的 Update Citations and Bibliography，完成引文格式转换。

![6c65fef059d503ef69055db514fba528](https://cdn.pkmer.cn/images/202307232205359.png!pkmer)

**3）自定义 endnote 的 Unformatted Citations 格式**

Unformatted Citations 格式，是 endnote 的 citekey，其可以在 菜单 file→Zotero Preferences 中自定义样式。比如 { } ，# 和替换 record·number 的自定义 Label 等字段。这里的 # 号，可能需要修改，因为在 obsidian 中，# 为标签的标记符号，还要考虑 longform 长文写作（合并成单文档时，支持格式处理脚本），pandoc reference list，linter 交叉引用等插件，pandoc 导出处理。{ } 可能因为避开数学公式，也需要考虑是否替换；可能还要考虑 zotero 在 obsidian 中做引用，使用的标志符。待后续探索后，添加相关测试结果。

![9b915724254ccbe3e9e8dcb28f5249ec](https://cdn.pkmer.cn/images/202307232206501.png!pkmer)

**4）为 word 中参考文献，创建单独的 endnote 随身库**

word 中 endnote20 插件中，可以对 word 中已经引用的文献，创建一个单独的随身库，record number 编号重新从 1 开始。可以将 word 文稿和这个随身库，一起发给导师，从 word 插件中，打开 endnote，选择这个随身库，可以随心添加文献，当然调整段落顺序，文献顺序自动修正，也不在话下。

![04de0672d73c4d4994d6dc3b7249911c](https://cdn.pkmer.cn/images/202307232206297.png!pkmer)

### Obsidian 中相关的知识要点

## 前置条件

1） 根据二宝学长提供的教程，[[文科生的学术知识管理工作流-上篇]] ，[[文科生工作流-zotero配置]]，配置 pandoc 按照 预先配置的 word 模板，将 obsidian 的 markdown 格式，导出为 word 格式。

2）需要自己，预先配置好，符合要求的 word 模板

## 配置步骤

### 设置 Endnote 展示 unformatted Citation 格式

设置**output style**在 endnote 的右侧预览面板中，显示自己配置好的 unformatted Citation 格式（即 endnote 的 citekey）方便复制粘贴到 obsidian

1） 在菜单里，依次点击 **Tools** → **Output Styles** → **New Style…**

![db2253ff7367cf6c7c902a71840d6aff](https://cdn.pkmer.cn/images/202307232206843.png!pkmer)

2）打开输出样式配置窗口

配置 endnote 主界面的右下侧展示窗口，显示文中引用格式，为 unformatted Citation 格式的 Citekey，用于复制粘贴到 obsidian 的 markdown 文本中。就是将文末引文格式，配置成与文中引用一样的格式，用于展示与复制粘贴 citekey，到 obsidian 的 markdown 中。

在打开的 style 配置窗口，参考上文中，在 Endnote Prefrences 的 Temporary Citation 预先配置的 citekey，默认为 ` {Author, year, #record·number}` ，其中 Author（作者），Year（年份）等字段，是依次选择，添加文献条目中的字段。

![dfb850ed0d61e66a123b519ff22e5dec](https://cdn.pkmer.cn/images/202307232206644.png!pkmer)

3）限制 Author list 只使用第一作者

![5ae4b72788d9e2425dafae32c2fd5bd2](https://cdn.pkmer.cn/images/202307232206356.png!pkmer)

4）限制 Author 只使用第一作者的姓

![ad415a545b525533cf2be73694f906ad](https://cdn.pkmer.cn/images/202307232206727.png!pkmer)

5）保存自己定制的 output style，

文件名可以随意取，推荐命名 复制粘贴 citekey 到 obsidian，反正记得，然后可搜索就行，点击下图 红圈 3，从 output style 管理器中，调出配置的自定义样式，如果样式多，endnote 会未响应，耐心等待管理器的加载，红色箭头表示右下角展示窗口，根据选择的样式，进行展示，并提供 copy 按钮，方便一键复制粘贴。

![33e6c60271a86384750913f5d8ba8ed7](https://cdn.pkmer.cn/images/202307232206905.png!pkmer)

根据自己命名，按照 name 列排序，进行查找，勾选，

![26eef9140a2b76460555b08949950ebd](https://cdn.pkmer.cn/images/202307232206047.png!pkmer)

6）右侧展示面板中为配置好的 unformatted Citation 格式，可用 copy 按钮，一键复制粘贴到 obsidian。

![9a909d84483da5d2d8d04cfd15b49725](https://cdn.pkmer.cn/images/202307232206238.png!pkmer)

### 在 obsidian 中粘贴 endnote 的 citekey

**1）一句单个引用，直接粘贴**

```
 {Yingying, 2023 #2}
```

**2）一句多个引用，需要处理包裹符号**

在 obsidian 中，如果同一句话，引用多个参考文献，需要将中间的 `{ }`（根据自己的设置包裹符号），手动修改成英文分号 ` ; `，才能在在超过 2 个引用时，更新 citation 后在一个 `[ ]` 中，尤其是数字形式的文中引用格式，才能显示像 `[1-3]` 这样的引用，不然就是 `[1][2][3]`。

### 使用 word 的 endnote 插件，生成引文

参考二宝学长的教程，将 obsidian 中的论文，按照 word 模板，导出成 word 文档，使用 word 中的 endnote 插件，更新引用，和引文格式，处理 unformatted Citation 格式，并在文末，添加引文列表。

**此时，必须确保打开的是对应的 endnote 库（推荐为每篇文章，创建 endnote 随身库），record number （或自己选择的替换的字段）是对应上的。**

![9e859f773d2d274425f9ea00a25c7170](https://cdn.pkmer.cn/images/202307232206835.png!pkmer)
