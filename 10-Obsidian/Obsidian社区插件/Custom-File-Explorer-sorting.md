---
uid: 20230329145808
title: Obsidian 插件：Custom File Explorer sorting（给文件夹和文件自定义排序）
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230401230258
public: yes
---

# Obsidian 插件：Custom File Explorer sorting（给文件夹和文件自定义排序）

可以达到这样的效果。 参考：

<https://support.microsoft.com/en-us/help/171815/how-to-sort-files-in-the-file-explorer>

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
>

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

- [![Inactive](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-inactive.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-inactive.png)  插件未生效，没有自定义排序生效。
- [![Active](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-active.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-active.png)  插件已激活，并且生效了自定义排序。
- [![Error](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-error.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-error.png)  自定义排序配置中的语法错误。
- [![General Error](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-general-error.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-general-error.png)  插件未生效，有一般性错误。
- [![Sorting not applied](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-not-applied.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-not-applied.png)  插件已激活，但未应用自定义排序。
- [![Static icon](https://github.com/SebastianMC/obsidian-custom-sort/raw/master/docs/icons/icon-mobile-initial.png)](https://github.com/SebastianMC/obsidian-custom-sort/blob/master/docs/icons/icon-mobile-initial.png)  仅适用于 iPad 等大屏幕移动设备）。插件已启用。但未应用自定义排序。
    在小屏幕移动设备（手机）上，图标是静态的：
- ![Pasted image 20230310135953](https://s1.vika.cn/space/2023/03/15/926a1f7d9ca84dd1a5a377b5716d9ebe)

### 基本排序语法速查

- `order-asc: a-z` -  按字母顺序排列，又名自然排序
    - 'a' 在 'z' 之前，数字会特殊处理 2 会排在 11 之前
- `order-desc: a-z`  按字母逆序排列，又名逆自然排序，或降序排列
    - 'z' 在 'a' 之前，数字会特殊处理 11 会排在 2 之前
- `order-asc: true a-z` - **true alphabetical order**
    - 'a' goes before 'z' and numbers are treated as texts and 11 goes before 2
- `order-desc: true a-z` - **true reverse alphabetical order**, aka descending true alphabetical
    - 'z' goes before 'a' and numbers are treated as texts and 11 goes before 2
- `order-asc: created` - **by creation date**
    - the oldest notes go first. Sub-folders pushed to the top, alphabetically
- `order-desc: created` - **by creation date, descending**
    - the newest notes go first. Sub-folders pushed to the bottom, alphabetically
- `order-asc: advanced created` - **by creation date, also for folders**
    - the oldest notes and sub-folders go first
    - for sub-folders the creation date of the oldest contained note is taken as folder's creation date
    - sub-folders not containing any notes are pushed to the top, alphabetically
- `order-desc: advanced created` - **by creation date, descending, also for folders**
    - the newest notes and sub-folders go first
    - for sub-folders the creation date of the newest contained note is taken as folder's creation date
    - sub-folders not containing any notes are pushed to the bottom, alphabetically
- `order-asc: modified` - **by modification date**
    - the most dusty notes go first. Sub-folders pushed to the top, alphabetically
- `order-desc: modified` - **by modification date, descending**
    - the most recently modified notes go first. Sub-folders pushed to the bottom, alphabetically
- `order-asc: advanced modified` - **by modification date, also for folders**
    - the most dusty notes and sub-folders go first
    - for sub-folders the modification date of the most dusty contained note is taken as folder's modification date
    - sub-folders not containing any notes are pushed to the top, alphabetically
- `order-desc: advanced modified` - **by modification date, descending, also for folders**
    - the most recently modified notes and sub-folders go first
    - for sub-folders the modification date of the most recently modified contained note is taken as folder's modification date
    - sub-folders not containing any notes are pushed to the bottom, alphabetically
