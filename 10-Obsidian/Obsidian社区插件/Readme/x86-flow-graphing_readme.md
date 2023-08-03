---
uid: 20230803205039
title: Obsidian 插件：【Readme】x86 Assembly Flow Graphing
tags: ['obsidian插件', 'readme']
description: 将格式良好的x86汇编代码转换为适当的流程图，使用Obsidian画布。
author: icebear
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：x86 Assembly Flow Graphing

> [!Note] 插件名片
> - 插件名称：x86 Assembly Flow Graphing
> - 插件作者：icebear
> - 插件说明：将格式良好的x86汇编代码转换为适当的流程图，使用Obsidian画布。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dwolfe884/obsidian-x86-flow-graph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?x86-flow-graphing)

## 概述

将格式良好的x86汇编代码转换为适当的流程图，使用Obsidian画布。

![x86 Assembly Flow Graphing](https://cdn.pkmer.cn/covers/x86-flow-graphing.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dwolfe884/obsidian-x86-flow-graph/main/README.md)
> 

---

## Readme(翻译）

下面是 [[x86-flow-graphing]] 插件的自述翻译


# Obsidian X86流程图

![Obsidian文件颜色横幅](./docs/images/x86.png)

这是一个用于[Obsidian](https://obsidian.md)的插件，它可以将x86汇编代码转换为使用Obsidian Canvases的流程图。

## 用法

该插件添加了一个名为`x86-create-flow-diagram`的命令。要使用该插件，您必须突出显示一个有效的x86代码块（不包括开头和结尾的\`\`\`），然后运行该命令。

该插件需要汇编代码的特定格式，以便正确生成流程图的节点和边。

关键格式特点如下：

1. 所有指令必须缩进
2. 跳转的位置名称前不能有空格
3. jmp指令必须用于无条件跳转（1个分支）
4. 以j开头的任何其他指令都被视为条件跳转（2个分支）
5. 所有跳转指令只能有一个参数，且该参数必须是位置名称（jmp location1）

以下是一个可与该插件一起使用的有效x86代码块示例

```x86
	cmp [ebp+var_8], 1
	jz loc_401027
	cmp [ebp+var_8], 2
	jz loc_40103D
	cmp [ebp+var_8], 3
	jz loc_401053
	jmp loc_401058
loc_401027
	Case 1的代码
	jmp loc_401058
loc_40103D
	Case 2的代码
	jmp loc_401058
loc_401053
	Case 3的代码
loc_401058
	程序结束
```

在上述代码块上运行`x86-create-flow-diagram`将在当前笔记所在目录中生成以下图形：

![示例图1](./docs/images/graph2.png)

一开始它看起来可能不太好看，所有的块都会混在一起，您需要拖动它们来使其看起来漂亮一些。我正在努力改进这一点...

### 插件实践

https://user-images.githubusercontent.com/43447026/216844597-0f27621c-f269-47f4-a5e0-7084a5444184.mp4

## 路线图

### 待办事项：
- [x] 为边添加真/假标签
- [x] 处理选定文本两侧的\`\`\`字符
- [x] 将节点移动到左侧或右侧以增加可读性（有点）
- [ ] 在代码块下方插入链接到图表
- [ ] 测试，测试，测试...

我正在购买
<div align="center">
  <a href="https://www.buymeacoffee.com/djwolfe">
    <img src="https://media1.giphy.com/media/TDQOtnWgsBx99cNoyH/giphy.gif" />
  </a>
</div>



