---
uid: 20230802224933
title: Obsidian 插件：【Readme】Adamantine Pick
tags: ['obsidian插件', 'readme']
description: Obsidian的可嵌入式Pikchr图表渲染器插件
author: Urist McMiner
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Adamantine Pick

> [!Note] 插件名片
> - 插件名称：Adamantine Pick
> - 插件作者：Urist McMiner
> - 插件说明：Obsidian的可嵌入式Pikchr图表渲染器插件
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/notlibrary/obsidian-adamantine-pick)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?adamantine-pick)

## 概述

Obsidian的可嵌入式Pikchr图表渲染器插件

![Adamantine Pick](https://cdn.pkmer.cn/covers/adamantine-pick.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [readme](https://ghproxy.net/https://raw.githubusercontent.com/notlibrary/obsidian-adamantine-pick/master/README.md)
> 下面是 [[adamantine-pick]] 插件的自述翻译


## Readme(翻译）


""！[GitHub发布（按日期计算的最新版本，包括预发布）](https://img.shields.io/github/v/release/notlibrary/obsidian-adamantine-pick?style=for-the-badge&sort=semver) ！[GitHub所有发布](https://img.shields.io/github/downloads/notlibrary/obsidian-adamantine-pick/total?style=for-the-badge)

# Adamantine Pick

可嵌入的[Pikchr](https://pikchr.org) [Obsidian](https://obsidian.md)的图表渲染器插件。将终端用户的图表输出为可查看的SVG，在Obsidian的客户端离线，无需编译安装Pikchr本身。

##演示

![adamantine-pick-demo](https://user-images.githubusercontent.com/40695473/214959908-ae7b23f2-02f4-4c54-815e-7204ae318911.gif)

使用标有`pikchr'的3个背号（tildes）栅栏式代码块来获取SVG。

	``pikchr box "我们今天要做什么" "第二大脑？" 适合箭头框 "我们每天都做同样的事情" "要占领世界！" 适合 ````

> ......快速的Pikchr图在其中一个文字说明中，也许（或不） > 对任何人都非常有用

使用`adamantine`类属性选择器，从代码中操作它

> GPT-3 parrot #39402817203 pikchr随机空间站地图adamantine图注 > 并修复其中的9000个椭圆。

看到了吗？"荒谬的书呆子价值 "的3页免费包装脚本(插件)

## 安装

因为`pikchr.c`已经用emcc预编译了，安装这个插件可以让用户直接从客户端标记图表，而不用安装编译pikchr本身。  这使得插件可以 "开箱即用""客户端""离线 "地嵌入使用。

使用用户界面 - 确保安全模式是***关闭的 - 设置 > 社区插件 > 打开社区插件 - 点击浏览社区插件 - 搜索 "Adamantine Pick" - 点击安装

手动安装 - 复制`main.js`, `manifest.json`, `styles.css`到你的Vault`VaultFolder/.obsidian/plugins/adamantine-pick/`。

测试安装 - 将此插件的回购链接粘贴到插件中，用于[测试其他插件](https://github.com/TfTHacker/obsidian42-brat)

## 如何构建插件

使用emsdk安装并激活[emcc](https://emscripten.org)

```git clone https://github.com/emscripten-core/emsdk.git cd emsdk ./emsdk install latest emsdk activate ```.

将[这个插件 repo](https://github.com/notlibrary/obsidian-adamantine-pick)克隆到你的Vault中`VaultFolder/.obsidian/plugins/adamantine-pick`文件夹中。

```cd VaultFolder/.obsidian/plugins git clone https://github.com/notlibrary/obsidian-adamantine-pick adamantine-pick cd adamantine-pick ````。

安装node.js开发包
	
``npm安装 ````

从`pick.c`包裹到`pikchr.c`工件中构建`pick.js`。
	

	
编译器的单行代码是这样的

```emcc src/pick.c -DPIKCHR_SHELL -Wall -Wextra -lm -O1 -sWASM=0 -sMODULARIZE=1 -sEXPORT_NAME=pick -sEXPORTED_FUNCTIONS=_pick,_pick_width,_pick_height -sEXPORTED_RUNTIME_METHODS=ccall, cwrap -o src/pick.js ````

从`main.ts`包装器中捆绑构建（和最小化）`main.js`。

```npm run build ```
 	
在循环中调试包装器



构建服务器行动的工作流程也可以用来实现自动化（和版本升级）[见github行动中的emsdk](https://github.com/mymindstorm/setup-emsdk)

## Pikchr官方文档参考

- [手册](https://pikchr.org/home/doc/trunk/doc/userman.md) - [例子](https://pikchr.org/home/doc/trunk/doc/examples.md) - [规范](https://pikchr.org/home/doc/trunk/doc/grammar.md) - [源代码工件](https://pikchr.org/home/artifact/02f23c6c39)

## 注意

实验性的臃肿丑陋的封装器，但完全在js环境下运行的可能性超过了安全方面的缺陷。

- 不要编辑`pikchr.c`，它是由原始工件自动生成的，旨在供集成商使用 - 不要将其用于CAD/CAM图纸、营销演示、电子表格图表、函数图（图）和专门的STEM图表 - 感谢原始Pikchr开发者

经过压缩的二进制文件大小约为75-100KB（取决于compr算法），因此它适合于桌面二级缓存`箭头<->从A到B斩`和编码的图表，甚至为其他人留下更多的自由空间 常见的输出mime类型`image/svg+xml`使其易于协商，任何人都可以在任何地方解码。

*tl, dr:* 对于那些读到最后的 "BanKan "图来说

	``pikchr 盒子 "DONE"; 盒子 "IN"; 盒子 "DO"; 向下; 从第一个盒子移动.n

	DONE。[盒子 "狗屎"] ; 右边 IN: 盒子 "随机" DO: 盒子 "任务1" "任务2" "任务3" ```.

"""


