---
uid: 20240426233011
title: Obsidian 插件：用 Obsidian 进行 Anki 制卡
tags: ['obsidian插件', 'Obsidian', 'Anki']
description: Obsidian 插件：用 Obsidian 进行 Anki 制卡
author: Dusk
type: other
draft: false
editable: false
modified: 20240426235321
---

# Obsidian 插件：用 Obsidian 进行 Anki 制卡

## 概述

Anki 和 Obsidian 都是收到大家欢迎的软件，两者联动需要依靠一些技巧和配置，对于不太软件熟悉操作的同学，上手具有一定难度，希望这篇文章能帮到你。

> [!Note] 插件名片
> - 插件名称：Obsidian_to_Anki
> - 插件作者：Obsidian_to_Anki (org)
> - 插件说明：从文本或 markdown 文件到 Anki。在 Obsidian 中作为插件运行，或者在命令行中作为 python 脚本运行。支持用户自定义的抽认卡语法。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Pseudonium/Obsidian_to_Anki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?Obsidian-to-Anki)

## 安装准备

- Anki 端：anki connector 插件
- Obsidian 端：在社区插件市场里叫：Export to Anki（原名：Obsidian_to_anki 插件）

注 1：以上插件的安装及配置过程略（可搜索 PKMer 社区，或去知乎、B 站上找下教程）

注 2：Obsidian 下文均简称“ob”，Obsidian_to_anki 插件下均简称为“插件”

## Obsidian_to_anki，插件配置要点

### 准备工作

在以上两个插件均安装完成后，可先运行下“Obsidian_to_anki”插件中 Action 里的“Regenerate”，如描述所示，是将 anki 里的卡片类型给读取至插件中。

![image.png](https://cdn.pkmer.cn/images/20240426233716.png!pkmer)

如下图所示，左侧为 anki 里的卡片形式，读取后，右侧为插件里的样式

![image.png](https://cdn.pkmer.cn/images/20240426233734.png!pkmer)

### 核心设置：卡片的语法形式

注意，本教程仅以最基本的“问答题”进行说明。

![image.png](https://cdn.pkmer.cn/images/20240426233800.png!pkmer)

在**图示红框处**输入内容：

`^#{4}\s(.+)\n*((?:\n(?:^[^\n#].{0,2}$|^[^\n#].{3}(?<!<!--).*))+)`

**上述正则表达式语法的解释**：仅对四级标题及对应内容进行制卡。

拟要实现的功能为：

1. 四级标题，对应：anki 的卡片问题
2. 四级标题下的内容，对应：anki 的卡片答案
注意：以上只是个人的偏好，以四级标题为卡片问题，在我的笔记体系里有两个好处：
一是可以在 `目录` 里可以直观看到一篇笔记里有几个问题卡片
二是方便在别的笔记里进行 `标题级引用`（即对卡片问题进行引用，虽然后面实质上用的也不多）
附一个效果图：
![image.png](https://cdn.pkmer.cn/images/20240426233812.png!pkmer)

### 其他设置

![image.png](https://cdn.pkmer.cn/images/20240426233829.png!pkmer)

解释：

1. 在 anki 中增加可以跳转回 ob 的链接
2. 美化 ID comments 的显示
3. 增加对笔记中标签的读取

## Obsidian 与 anki 的联动方式

### Obsidian 里的基本制卡形式

![image.png](https://cdn.pkmer.cn/images/20240426233845.png!pkmer)

### Anki 里的表现形式

1，牌组级的表现形式

![image.png](https://cdn.pkmer.cn/images/20240426233853.png!pkmer)

2，卡片级的表现形式

![image.png](https://cdn.pkmer.cn/images/20240426233903.png!pkmer)

经过以上三步，已经可以正常通过 ob 批量做 anki 卡片了。

接下来是一些关于美化 anki 卡片或提高效率的做法，有时间建议继续往下看。

## 进阶

### Anki 里的卡片样式美化

一个合适于自己的高亮体系可以促进自己刷卡的效率，推荐做适量的修改。但不建议花太多时间在美化上面，毕竟内容才是最重要的。

另外这是我自己作卡时，对高亮体系的约定，供参考：

1. **加粗**：关键词
2. *斜体*：用于句首，可以理解为卡片的结构化写法
3. ==高亮==：简记的形式——记忆法的延伸
4. 内容断行：先回车，然后“**空一格**”，然后再回车，这样就可以在卡片中进行内容的分隔（这个没有什么特别的说法，单纯是因为插件代码就是这么写的）。
以下是一个示例：
![image.png](https://cdn.pkmer.cn/images/20240426233915.png!pkmer)

以下介绍 anki 中基本的 CSS 代码编写方式，首先在 anki 的页面点击“Browse”

![image.png](https://cdn.pkmer.cn/images/20240426233951.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240426234052.png!pkmer)

*关键点*：找到 Anki 卡片样式的 html 格式对应的是什么标签，然后进行修改

*快捷键*：ctrl+shift+x

*然后会发现*：比如 obsidian to anki 里输出的是 strong 及 em（对应加粗及斜体的样式）。

按下图进行样式的替换

![image.png](https://cdn.pkmer.cn/images/20240426234100.png!pkmer)

发一些代码如参考：

```
.card {
 font-family: arial;
 font-size: 20px;
 text-align: left;
 color: black;
 background-color: white;
}

em {
 #color:white; 
 background-color: #69E147;
 border-radius: 5px;
 padding: 2px 5px;
}

strong {
 color:red;
 font-weight: bolder;
 text-shadow: 2px 2px 5px #ffe600;
}

code {
 color:black;
 font-weight: bolder;
 text-shadow: 2px 2px 5px gray;
}

mark {
 border-radius: 5px;
 padding: 2px 5px;
}

blockquote {
 background-color: #ECECEC;
 padding: 2px 5px;
 border: 2px solid #7F7F7F;
 border-radius: 5px;
}
```

好的，愉快地刷起卡片吧。

### 关于四级标题的快速输入

不知道大家会如何快速打开四个#号，是通过自定义 ob 快捷键来设置，如下图：

![image.png](https://cdn.pkmer.cn/images/20240426234110.png!pkmer)

还是自己连续打四个#号？

我说下我的方法：自定义输入法的短语设置

mac 端，清歌输入法，在“用户词库”这里进行常用符号的输入，甚至包括 `[[` 这样的快捷符号，主打一个偷懒。

如下图所示，我直接输入 `kk`，再按下空格键就可以了，在输入上非常的快捷方便。

![image.png](https://cdn.pkmer.cn/images/20240426234121.png!pkmer)

### 通过 Alfred 快速跳回 ob 对应卡片，进行卡片修改

*一个问题*：复习 anki 时，如何更方便地定位在 Obsidian 中的位置，以便进行修改？

注意：本节方法适用于 mac，windows 应该可以通过 quicker 这个软件实现，期待其他网友进行分享

在我的笔记体系中，有一类就是专门的卡片笔记，如下面几个图所示：

![image.png](https://cdn.pkmer.cn/images/20240426234320.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240426234339.png!pkmer)

对应的 anki 问题如下所示：

![image.png](https://cdn.pkmer.cn/images/20240426234351.png!pkmer)

那么在用 anki 进行复习时，如何可以快速的定位到相关问题以便修改呢？

我是通过 alfred 这个软件实现了跳转的功能。

操作方式，在 anki 时复习时，先点击超链接，跳转到对应的 Obsidian 笔记中

![image.png](https://cdn.pkmer.cn/images/20240426234413.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240426234424.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240426234438.png!pkmer)

以下是在两个软件中具体的设置方法：

其中，alfred 在本文写时的版本号是：5.1.2

在 alfred 中的设置如下：

![image.png](https://cdn.pkmer.cn/images/20240426234446.png!pkmer)

在 Obsidian 中的设置如下：

![image.png](https://cdn.pkmer.cn/images/20240426234500.png!pkmer)

好了，继续愉快地刷卡片吧

### 增加对卡片标题的编号，以便手机端进行快速定位

接上一节，用 Alfred 来进行直接的跳转，那如果在手机端呢？

目前没有特别好的一键跳转的方式，但可以借助给卡片标题进行编号，来相对快速地定位到卡片标题。

需要 Obsidian 插件配合：[[number-headings-obsidian]]

相关的设置如下图所示：

![image.png](https://cdn.pkmer.cn/images/20240426234512.png!pkmer)

实现的效果图如下图所示（mac 端），右侧边栏为目录大纲

![image.png](https://cdn.pkmer.cn/images/20240426234537.png!pkmer)

手机端效果图如下图所示：

![image.png](https://cdn.pkmer.cn/images/20240426234548.png!pkmer)

### 如何删除所有文章中的 anki 的 ID

*目的*：为了重新整理下 anki 里的卡片

*具体操作方式*：用 vs code 里的搜索功能，对文件夹里的所有文件进行批量删除 ID 编码

![image.png](https://cdn.pkmer.cn/images/20240426234603.png!pkmer)

### 实现 Obsidian 与 anki 多级标签的联动

不知用 obsidian to anki 的小伙伴有没有注意过，在卡片里写中文标签是不能被正常读取的，更不要提多级嵌套的标签实现了。但其实通过对源文件进行修改，是可以实现的。

先看下面的图片效果

![image.png](https://cdn.pkmer.cn/images/20240426234616.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240426234624.png!pkmer)

因为最新版的 obsidian to anki 插件还没有更新（github 的代码已经提交），故要使用本节功能要对这个插件源代码进行修改。

步骤如下：

1. 定位到：obsidian vault (就是你的笔记库)，如： ~/Obsidian/
2. 找到插件所在文件夹，通常类似于: ~/Obsidian/.obsidian/plugins/obsidian-to-anki-plugin，这个文件可能是被隐藏的，需要你自己显示隐藏文件
3. 打开 main.js 文件，并查找关键词： OBS_TAG_REGEXP。先对老的语法进行替换，新语法如下（这是第一处），具体功能就是增加对字宣传教育
   `const OBS_TAG_REGEXP  = /#([\p{L}\p{N}\p{Emoji}\p{M}_-\uFF0C/]+)/gu;`
   如下图所示：
![image.png](https://cdn.pkmer.cn/images/20240426234635.png!pkmer)

4. 继续对这个 OBS_TAG_REGEXP 进行搜索，对下图进行代码进行替换（这是第二处）
![image.png](https://cdn.pkmer.cn/images/20240426234645.png!pkmer)

5. 再次继续对这个 OBS_TAG_REGEXP 进行搜索，对下图进行代码进行替换（这是第三处）
![image.png](https://cdn.pkmer.cn/images/20240426234655.png!pkmer)

其中第二处、第三处的代码是一致的，如下：

```
        if (data.add_obs_tags) {
          for (let key in template["fields"]) {
              for (let match of template["fields"][key].matchAll(OBS_TAG_REGEXP)) {
                  let formattedTag = match[1].replace(/\//g, "::"); // 添加这行代码来替换标签
                  this.tags.push(formattedTag); // 修改后的标签被添加到数组
              }
              template["fields"][key] = template["fields"][key].replace(OBS_TAG_REGEXP, "");
          }
       }
```

## 最后，一个问题

我在想是不是将 main.js 这个文件直接放在社区里，然后方便想要尝鲜的人直接进行下载替换就可以？