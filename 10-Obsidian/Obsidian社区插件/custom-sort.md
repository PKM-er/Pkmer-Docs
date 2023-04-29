---
uid: 20230329145808
title: Obsidian 插件：Custom File Explorer sorting（给文件夹和文件自定义排序）
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181109
---

# Obsidian 插件：Custom File Explorer sorting（给文件夹和文件自定义排序）

可以达到这样的效果。 参考：

<https://support.microsoft.com/en-us/help/171815/how-to-sort-files-in-the-file-explorer>

> [!Note] 插件名片
> - 插件名称：Custom File Explorer sorting
> - 插件作者：SebastianMC
> - 插件说明：通过 YAML 语法给 Obsidian 的文件管理器增加自定义排序的功能
> - 插件项目地址：[点我跳转](https://github.com/SebastianMC/obsidian-custom-sort)

### 原理

可以用一个文件（如 sortspec.md）写好整个仓库 （一个独立的 Obsidian 笔记本）的排序列表，应用后，左侧的导航面板就按照该文件排序了。以后，你只要维护好这个  sortspec.md  文件，就可以完成自定义排序。

### 基本功能

这侧插件可以支持你指定文件夹内部的子文件夹和文件的混排顺序，你可以通俗理解城置顶。也可以按照字母顺序进行排列。

### 准备

1. 进入社区插件市场，如果不会开启社区插件市场，请参考：[[Obsidian 社区插件]]
2. 搜索 Custom File Explorer sorting，下载，并启动

### 配置

1. 在你喜欢的路径建立一个名为 sortspec 的笔记文件；
    - 推荐：使用了 Template 插件的同学，把它放到 Template 目录，这样仓库管理的文件夹比较统一。
    - 如果没有使用 Templaye 插件，完全没关系，可以放在一个固定的文件夹甚至根目录下。
2. 打开插件 Custom File Explorer sorting 的设置
3. 关注 Path to the designated note containing sorting specification 这个选项。
4. 并在这个选项的后面文本框中，输入 输入你在 [1] 中的路径，这个路径是从根目录计算的 比如 在根目录下，写成“sortspec”，在 Book 目录下写成 “/Book/sortspec”。

### 使用

如果你了解 [[YAML]] ,那么下面的内容对你比较容易。

不了解也没关系，我们会尽量简单讲下配置方法。

先看范例：

> [! 范例]
>
> ```YAML
> ---
> sorting-spec: |
> target-folder: /
>  01-笔记...
>  00-小白...
> ---
> ```

语法：

1. `target-folder`：表示要排序的目标文件夹。
    - `target-folder: /` 表示根目录；
    - `target-folder: /Book` 表示仓库路径下 Book 文件夹；
    - 注意目录每一层使用的符号是 `/`
2. 笔记和文件夹，在 `target-folder` 下逐行输入即可，文件/文件夹名
    - 注意要在 `target-folder` 基础缩进一个空格。
    - 可以不必输入全部，只输入可以被识别的名称 + ... 省略也是可以的。
        - 01- 笔记...
        - 00- 小白...

> [! Note]
> target-folder 和你目标文件目录的名字，前面的 [[缩进]] 需要使用空格。

### Ribbon icon 提示

单击功能区图标以自定义排序和默认排序之间切换。

状图标状态方便你查看现在的问题：

- ![image.png](Resource/Images/dfff3100aadf9d8071a8596f88d4f918_MD5.png)：插件未生效，没有自定义排序生效。
- ![image.png](https://cdn.pkmer.cn/images/28da170461b48881ceb144ff0e9e1981_MD5.png)：  插件已激活，并且生效了自定义排序。
- ![image.png](https://cdn.pkmer.cn/images/e0cb82c19128ed14fa03e2bcccb39865_MD5.png)：自定义排序配置中的语法错误。
- ![image.png](Resource/Images/d597a459a1eac7d09dc4704f1dc6e0bc_MD5.png)：插件未生效，有一般性错误。
- ![image.png](Resource/Images/ebf549bb438bbe32a1895be8ca70851b_MD5.png)：  插件已激活，但未应用自定义排序。
- ![image.png](Resource/Images/04b22bea0e95e36999844bb99148755a_MD5.png)：仅适用于 iPad 等大屏幕移动设备）。插件已启用。但未应用自定义排序。
    在小屏幕移动设备（手机）上，图标是静态的：

### 基本排序语法速查

- `order-asc: a-z` -  按字母顺序排列，又名自然排序
    - 'a' 在 'z' 之前，数字 2 会排在 11 之前
- `order-desc: a-z`  按字母逆序排列，又名逆自然排序，或降序排列
    - 'z' 在 'a' 之前，数字 11 会排在 2 之前
- `order-asc: true a-z` - 仅按照字母排序
    - a”在“z”之前，数字被视为文本，11 在 2 之前
- `order-desc: true a-z` - 字母逆序排列，数字逆序排列
    - “Z”在“a”之前，数字被视为文本，11 在 2 之前
- `order-asc: created` - 按创建日期排序笔记
    - 创建日期最早的笔记会优先排列，子文件夹会放在所有同级笔记顶部
- `order-desc: created` - 按创建日期倒序排列笔记
    - 创建日期最新的笔记会优先排列，子文件夹会放在所有同级笔记尾部
- `order-asc: advanced created` - 按创建日期排序笔记和文件夹
    - 创建日期最早的笔记和文件夹会优先排列
    - 文件夹包含比文件夹更早的笔记时，按照文件夹的创建日期计算
    - 不包含任何笔记的空文件夹，按字母顺序推到顶部
- `order-desc: advanced created` - 按创建日期倒序排列笔记和文件夹
    - 创建日期最新的笔记和文件夹会优先排列
    - 文件夹包含比文件夹更新的笔记时，按照文件夹的创建日期计算
    - 不包含任何笔记的空文件夹，按字母顺序推到尾部
- `order-asc: modified` - 按照修改日期排序笔记
    - 修改日期最早的笔记，排在前面。文件夹按字母顺序放置在顶部
- `order-desc: modified` - 按照修改日期排序笔记倒排
    - 修改日期最近的笔记，排在前面。文件夹按字母顺序放置在尾部
- `order-asc: advanced modified` - 按照修改日期排序笔记和文件夹
    - 修改日期最早的笔记和文件夹会优先排列
    - 文件夹包含比文件夹修改日期更早的笔记时，按照文件夹的修改日期计算
    - 不包含任何笔记的空文件夹，按字母顺序推到顶部
- `order-desc: advanced modified` - 按照修改日期倒序排序笔记和文件夹
    - 修改日期最近的笔记和文件夹会优先排列
    - 文件夹包含比文件夹修改日期更早的笔记时，按照文件夹的修改日期计算
    - 不包含任何笔记的空文件夹，按字母顺序推到尾部
