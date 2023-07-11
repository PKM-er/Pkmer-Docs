---
uid: 20230711130445
title: Obsidian 插件：Yaml Manager 避免直接修改 Yaml 区字段，让 frontmatter 修改变得简单
tags: [obsidian, 插件, 效率, frontmatter]
description: Obsidian 插件：避免直接修改 Yaml 区字段，让 frontmatter 修改变得简单
author: Nathaniel
type: basic
draft: false
editable: false
modified: 20230711145619
---

# Obsidian 插件：Yaml Manager 避免直接修改 Yaml 区字段，让 frontmatter 修改变得简单

## 前言

在 Obsidian 中操作 YAML( frontmatter) 是一个麻烦事情，如果需要操作的字段少，手动修改即可，如果有很多字段需要修改，这将是一个噩梦。插件 Yaml Manager 提供一个图形窗口，通过在窗口中选择，点击实现修改，后面会同步修改文档中的 frontmatter 区对应的字段。

> [!Note] 插件名片
> - 插件名称：Yaml Manager
> - 插件版本：1.3.3
> - 插件作者：lijyze
> - 插件描述：避免直接操作 YAML frontmatter
> - 插件项目地址：[点击跳转](https://github.com/lijyze/obsidian-state-switcher)

## 特性&功能

> [!Warning] 提示
> 此插件上架插件市场的名称是 Yaml Manager，而本地插件文件夹名称为 obsidian-state-switcher。

此插件总体上功能比较简单。对于 yaml (frontmatter) 区域的字段操作分类如下：

![Pasted image 20230711140859](https://cdn.pkmer.cn/images/Pasted%20image%2020230711140859.png!pkmer)

- bulk update （批量更新）：即选择多个字段更新
- key-value update （单值字段更新）：更新字段为单个值的字段
- key-array insert （单个添加）：为具有多个值的字段添加值。比如 tag 字段可能会有多个值，每个值就是一个 tag 文本
- key-array remove（单个移除）：为具有多个值的字段移除指定值（同上）

两种模式：

- key-value：相当于单选，后续使用时，只能选择字段值列表中的一个
- key-array：相当于多选，后续使用时，可以选择字段值列表中多个

对于 key-value 适用于命令是 `bulk update` 和 `key-value update`

对于 key-array 适用于命令是 `key-array insert` 和 `key-array remove`

## 使用

1. 插件开启后，需要到设置中进行配置
2. 后续在文档中调出命令面板选择功能

此插件机制是事先在设置中配置可能需要用到的 字段及字段值（列表），后续在文档中使用插件操作时，“更新/移除”的数据来源此配置的内容。

插件默认配置了一个多值字段 `state`。此字段用于描述文档内容完成状态（ waiting——类似 TODO,ongoing——类似 Doing，completed——类似 DONE）。

![Pasted image 20230711134811](https://cdn.pkmer.cn/images/Pasted%20image%2020230711134811.png!pkmer)

下面分别演示 `key-value` 和 `key-array` 模式的字段配置

点击设置中 “+” 号可以添加一个字段配置项

![Pasted image 20230711135353](https://cdn.pkmer.cn/images/Pasted%20image%2020230711135353.png!pkmer)

### key-value 模式

1，添加字段

假设需要在文档中添加一个字段 `author`，且字段的值是相对不变的若干值，`foo`, `bar`,`baz`。这种情况下就适合使用 **“多个值”** 的 情况。使用此插件进行配置，后续如需使用此字段，无需手动在 frontmatter 区域中编辑，而是直接调出命令面板选择即可。

![Pasted image 20230711140221](https://cdn.pkmer.cn/images/Pasted%20image%2020230711140221.png!pkmer)

> [!warning] 注意
> 如果模式是 key-value，即单选，则上面关于字段操作的 后面两个选择无效。因为这两个选项适用于 多个值且多选的情况，如 tag
> ![Pasted image 20230711141604](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141604.png!pkmer)

2，使用

下例中选择 **bulk update** 演示 字段的添加（当前是一个空文档，没有任何字段）

![Pasted image 20230711141127](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141127.png!pkmer)

点击 Confim 后，文档中的效果

![Pasted image 20230711141151](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141151.png!pkmer)

现在已有字段，后续操作就是**更新**

下面尝试更新字段 `author`，选择第二个选项

![Pasted image 20230711141721](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141721.png!pkmer)

回车，后会显示已有的字段列表，选择 `author` 字段

![Pasted image 20230711141830](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141830.png!pkmer)

回车，会显示字段对应的字段值列表，更换一下值，选择 `foo`

![Pasted image 20230711141852](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141852.png!pkmer)

此时文档中的字段值变为了 `foo`

![Pasted image 20230711141956](https://cdn.pkmer.cn/images/Pasted%20image%2020230711141956.png!pkmer)

### key-array 模式

1，添加字段

key-array 模式以 tag 为例。假设预设的 tag 值字段有 `obsidian`,`插件`,`教程`。

![Pasted image 20230711142936](https://cdn.pkmer.cn/images/Pasted%20image%2020230711142936.png!pkmer)

2，使用

1）插入值

第一次可以批量添加

![Pasted image 20230711143303](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143303.png!pkmer)

![Pasted image 20230711143237](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143237.png!pkmer)

效果:

![Pasted image 20230711143326](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143326.png!pkmer)

 > [!warning] 注意
 > 这里的 tag 风格 与 配置选择有关
 > ![Pasted image 20230711143406](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143406.png!pkmer)

当然添加值也可选择 `key-array insert`

2）移除值

![Pasted image 20230711143501](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143501.png!pkmer)

![Pasted image 20230711143511](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143511.png!pkmer)

假设移除 `教程` 值

![Pasted image 20230711143538](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143538.png!pkmer)

效果：

![Pasted image 20230711143547](https://cdn.pkmer.cn/images/Pasted%20image%2020230711143547.png!pkmer)

## 总结

- 插件使用需要事先在插件中配置值，需要先确定，稳定字段需求
- 如果需要操作的字段较多，通过 `buik update` 面板操作还是挺有负担的（字段，值太多，看的眼花缭乱）
- 总体上对于特定插件的需求非常适合（比如上面例子的 `author` 选择)



