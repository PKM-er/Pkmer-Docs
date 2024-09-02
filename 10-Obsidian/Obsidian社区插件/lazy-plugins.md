---
uid: 20240902164727
title: Obsidian 插件：Lazy Plugin Loader 插件重度用户的福音，Obsidian 启动缓慢终结者
tags: ['数据处理', '笔记链接', 'ANKI', 'obsidian插件']
description: 将您保险库中的一个文件夹中的闪卡与Anki同步。纯Markdown语法。毫不费力。
author: OS
type: other
draft: false
editable: false
modified: 20240902175053
---

# Obsidian 插件：Lazy Plugin Loader 插件重度用户的福音，Obsidian 启动缓慢终结者

## 概述

很多时候大家聊起 Obsidian 会用插件丰富来概括它的特点，当我第一次接触 obsidian 之后，也被其丰富的插件数量所震撼，时至两年后的今天，我依然有这种感觉，Obsidian 的第三方插件时长，依然以一种肉眼可见的速度在增长。

但很多用户使用一段时间之后，随着插件数量增多，启动缓慢，逐渐开始对如何裁剪插件产生困惑。对于有着“鱼与熊掌我想兼得”的想法的使用者，之前需要了解，脚本，利用 template 等插件的脚本方法来完成，对于初学者或者对配置，或者脚本不太了解的用户，难度较高，所以之前 [[Blue Topaz 示例库简介]] 中就有类似的方案，可以大家简单迁移。

Lazy Plugin Loader 就是为了解决 Obsidian 插件过度，启动速度被拖累而诞生的。而且它通过交互操作界面，就可以让你完成对应的调整。

> [!Note] 插件名片
> - 插件名称：Lazy Plugin Loader
> - 插件作者：Alan Grainger
> - 插件说明：让 obsidian 的插件具有延迟加载功能，提升启动速度。
> - 插件分类：[' 插件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/alangrainger/obsidian-lazy-plugins)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lazy)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20240902170017.png!pkmer)

- 可以针对插件设置多种延迟时间挡位
- 可以针对新安装插件默认归类到某个延迟挡位
- 可以批量切换插件到某个延迟挡位
- 支持针对每个插件设置对应的挡位

## 使用

### 四种挡位来管理你的插件

- Disable plugins：禁止改插件启动
- Instant：随着 Obsidian 打开，立刻启动【注意这里说的是在 Obsidian 插件加载时，立刻记载】
- Short Delay：根据你设置的 `Short Delay` 时间进行延迟对应插件的启动
- Long Delay：根据你设置的 `Long Delay` 时间进行延迟对应插件的启动

## 挡位设置

- Short Delay：以秒为计量单位，比如输入 5（默认），就是 5s 后启动这个挡位下的插件
- Long Delay：以秒为计量单位，比如输入 15（默认），就是 15s 后启动这个挡位下的插件
- Default startup type：可以针对所有新安装的插件设置自动归类到某个挡位下

## 其他设置

- Set the delay for all plugins at once：一次性对所有插件进行统一设置

## 活用

- 推荐将打开 Obsidian 就立刻就需要的插件进行优先加载，比如你不熟悉 md 语法，编辑依赖 [[editing-toolbar]] 这样的插件，那么就可以把它考虑设置为 `instant`
- 推荐把一些无关紧要的统计插件，或者附属插件延迟启动

总结，比如我们可以把打开 Obsidian 就需要立刻使用的插件进行处理，注意，除了图形化让操作和更入门者易用外，我们并没有对比和两个插件效果，和延迟启动测算效果。