---
uid: 20230630175244
title: Obsidian 样式：建立书籍电影的卡片化视图
tags: [Obsidian, 样式, 书籍电影, 卡片化, 视图, 美化]
description: Obsidian 样式：建立书籍电影的卡片化视图
author: OS
type: other
draft: false
editable: false
modified: 20230701232836
---

# Obsidian 样式：建立书籍电影的卡片化视图

## 引言

Obsidian 被很多人认为是“All in one”的绝佳选择，抛开主观感受不谈，Obsidian 的可玩性和自定义自由度，确实是很多同类软件，应用无法比拟的，这是它的闪光点之一。

但是很多人因为不太容易入门折腾，对别人效果心驰神往，又对高门槛望而却步。比如今天要介绍的，将书籍、电影生成卡片墙。

## 使用

很多人有这样的需求，详细是看到 Minimal 和 Blue-Topaz 的一些示例库，其中好看的卡片墙。

比如：

![image.png](https://cdn.pkmer.cn/images/20230630180522.png!pkmer)

明明已经按照示例库中 dataview 写好了代码，一字不差，但是始终无法达成上面的卡片效果。

这里面的主要原因就是因为没有在 front-matter 中声明 cssClasses。你需要按照步骤这样做：

1. 在当前笔记最顶部增加 front-matter，参考 [[Obsidian的YAML和Frontmatter]]
2. 声明 cssClasses

````YAML
---
cssclasses: cards
---
````

当然你也可以参考 [Blue-topaz主题示例库](https://github.com/PKM-er/Blue-topaz-example)