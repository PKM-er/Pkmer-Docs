---
uid: 20230329145808
title: Obsidian 插件：Tag Wrangler
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230430000346
public: yes
---

# Obsidian 插件：Tag Wrangler

## 概述

该插件改善 Obsidian 标签管理的体验：

- 想要设置标签，就必须得先创建带有该标签的文档；
- 想要批量修改标签，只能通过写脚本来实现快速修改；
- 不支持拖拽插入标签。

> [!Note] 插件名片
> - 插件名称：Tag Wrangler
> - 插件作者：PJ Eby
> - 插件说明：增强的标签管理体验，从标签面板中重命名、合并、切换和搜索标签面面俱到。
> - 插件项目地址：[点我跳转](https://github.com/pjeby/tag-wrangler)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/ce795fc29fd5aa2960cc698dbd9ebb86_MD5.png)

- 重命名标签（及其所有子标签）
- 开始新的标签搜索（类似于简单的点击）
- 将标签作为需求 ( `tag:#whatever`) 添加到当前搜索
- 将标签 ( `-tag:#whatever`) 的排除项添加到当前搜索中
- 打开带有该标签的随机笔记
- 折叠标签窗格中同一级别的所有标签
- 在标签窗格中展开同一级别的所有标签

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Tag Wrangler
3. 安装
4. 开启插件

## 使用方法

在标签面板中任意一个标签上点击右键，即可看到如下几个选项：

![Pasted image 20230424221209](https://cdn.pkmer.cn/images/2c979cb739decf30700a079a45ca0da8_MD5.png)

- 选项一：更改标签名称
    可批量更改此标签及其嵌套标签的名称。
- 选项二：打开标签页面
    点击就会自动创建一个带 YAML 语法的笔记，“别名”对应标签名。
    具体用法稍后介绍。
- 选项三：基于标签搜索相关内容
- 选项四：搜索不带该标签的其他内容

直接拖拽标签，可将该标签快速插入到文中任意位置。

### 标签面板

可以 **手动创建标签页面来快速输入各种标签**。

在参考完官方文档后，我设计了一个标签文档，专门用来管理标签。

官方文档：[tag-wrangler - GitHub](https://link.zhihu.com/?target=https%3A//github.com/pjeby/tag-wrangler)

### 标签搜索

在 Tag wrangler 标签树下，在任意一个标签上右键，可在弹出的菜单中将该标签其加入搜索

![image.png](https://cdn.pkmer.cn/images/18c6c4a2c588b441fdcd91b360671a9e_MD5.png)

![image.png](https://cdn.pkmer.cn/images/be3ce565d1bad9660f0dcaecc6e67ee1_MD5.png)
