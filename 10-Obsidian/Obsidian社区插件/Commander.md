---
uid: 20230329145808
title: Obisdian 插件：Commander（添加自定义功能按钮）
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230401230258
public: yes
---

# Obisdian 插件：Commander（添加自定义功能按钮）

![Pasted image 20230126231553](https://s1.vika.cn/space/2023/03/15/cf5401fe34cb436184c7e0007687a1e6)

有些时候，常用命令太多，虽然也可以为它们设置快捷键，但是快捷键一多，就不太好记；再加上写东西的时候突然要腾出手来按各种组合键，很打断思路。

这个时候我们会更习惯**「工具栏」（Toolbar）**的形式：**只需点击按钮就能完成各种操作，并且它们通常会搭配图标，很直观。**比如备忘录应用的顶部就是工具条，部分应用还支持自定义工具条。

> [!插件名片]

> - 插件名称：Commander

> - 插件作者：Johnny✨ and phibr0

> - 插件说明：给 Obsidian 的不同功能区增加自定义快捷按钮。

> - 插件项目地址：[点我跳转](https://github.com/phibr0/obsidian-commander)

## 效果&特性

![Pasted image 20230126232048](https://s1.vika.cn/space/2023/03/15/50fd8cc8a2b5427f94acd9ab7ed25fd1)

- 可以把命令添加至 UI 界面的各个区域，包括标题栏、状态栏、侧边栏、页头、文件菜单、右键菜单等，并为命令设置显示的别名与图标
- 隐藏核心插件或社区插件自带的命令图标
- 支持修改显示顺序
- 支持设置移动端、桌面端各显示哪些命令

![Pasted image 20230126231545](https://s1.vika.cn/space/2023/03/15/546497768b51464fa30192c7f590291c)

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Commander
3. 安装
4. 开启插件

## 使用

安装后进入设置，可以在最上方的导航 tab 切换想要设置的 UI 区域：

![Pasted image 20230126232238](https://s1.vika.cn/space/2023/03/15/4232a79271e2453cb47c9bfadc9b5333)

添加命令有两种方式。以左侧栏（Left Ribbon）为例，所有图标的最下方会出现一个小加号 ➕，点击即可添加命令：

![Pasted image 20230126232256](https://s1.vika.cn/space/2023/03/15/fb59985edb19407aae75e3607bbe7f03)

也可以在 Commander 设置中直接添加命令，并且可以把不需要的命令图标隐藏（比如命令面板、快速切换等）

![Pasted image 20230126232339](https://s1.vika.cn/space/2023/03/15/b546ae81b84f480ca2fdda3a898c0d1e)

例如，我想在左侧栏添加一个「加星/取消加星」的命令，只需将其加入列表。并且，支持自定义以下内容（见图示的序号标注）：

1. 显示的图标
2. 显示的别名（即鼠标悬浮时 tooltip 的名称）
3. 显示顺序
4. 显示设备（全部、桌面端、移动端、仅当前设备）

![Pasted image 20230126232356](https://s1.vika.cn/space/2023/03/15/1600a7e060334472bb7f46167a7d5291)

> [! Note]

> 修改别名的好处：有些命令的默认名称特别长，别名能方便我们理解。

设置完毕，左侧栏就变成下图这样：原本核心插件自带的图标没有了，只显示我们刚才添加的「加星/取消加星」命令图标。

![Pasted image 20230126232427](https://s1.vika.cn/space/2023/03/15/12aac29a95334ba1a774de47b089eaaa)

其他 UI 区域的设置方式也是类似，不再赘述。值得一提的是，状态栏（Status Bar）也能够隐藏一些内容（反向链接、编辑器状态、词数统计等）：

![Pasted image 20230126232441](https://s1.vika.cn/space/2023/03/15/a358c6c422c24dcc905c3b801d55206b)
