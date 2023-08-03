---
uid: 20230803211908
title: Obsidian 插件：【Readme】Adamantine Pick
tags: ['obsidian插件', 'readme']
description: Obsidian的可嵌入式Pikchr图表渲染器插件
author: AI
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
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/notlibrary/obsidian-adamantine-pick/master/README.md)
> 

---

## Readme(翻译）

下面是 [[adamantine-pick]] 插件的自述翻译



![GitHub发布（包括预发布）的最新日期](https://img.shields.io/github/v/release/notlibrary/obsidian-adamantine-pick?style=for-the-badge&sort=semver)
![GitHub所有发布](https://img.shields.io/github/downloads/notlibrary/obsidian-adamantine-pick/total?style=for-the-badge)
# 金刚石镐

金刚石镐是一个可嵌入的[Pikchr](https://pikchr.org)图表渲染插件，适用于[Obsidian](https://obsidian.md)。它可以在Obsidian笔记中直接输出可查看的SVG格式的最终用户图表，而无需编译安装Pikchr本身，且可以在客户端离线使用。

演示

![adamantine-pick-demo](https://user-images.githubusercontent.com/40695473/214959908-ae7b23f2-02f4-4c54-815e-7204ae318911.gif)

使用带有3个反引号（波浪线）的注释来标记`pikchr`，以获取SVG

	```pikchr
	box "今天我们要做什么" "第二大脑？" fit 
	arrow
	box "我们每天都做同样的事情" "征服世界！" fit
	```

> ...也许（或者不是）在这些文本注释中的一个快速pikchr图表对于任何人来说都非常有用

使用`adamantine`类属性选择器从代码中操作它

> GPT-3鹦鹉＃39402817203 pikchr随机空间站地图adamantine图表注释
> 并修复其中的9000个椭圆

看到了吗？3页免费包装脚本（插件）的“荒谬的书呆子价值”

![adamantine_note_sample](https://github.com/notlibrary/obsidian-adamantine-pick/assets/40695473/82085fce-46fc-4bed-b14a-e8e7d9eb5cab)

电阻器颜色表计算？当然

![resistor_calculator_sample](https://github.com/notlibrary/obsidian-adamantine-pick/assets/40695473/e16d1b41-e408-40d8-98b4-884812cb2708)

## 安装

由于`pikchr.c`已经使用emcc预编译，安装此插件允许用户直接从客户端标记图表，而无需安装编译pikchr本身。这使得插件可以嵌入使用，"开箱即用"，"客户端"和"离线"。

使用用户界面
- 确保安全模式处于**关闭**状态
- 设置 > 社区插件 > 打开社区插件
- 点击浏览社区插件或直接打开安装URL `obsidian://show-plugin?id=adamantine-pick`
- 搜索"Adamantine Pick"
- 点击安装
- 不要忘记使用紫色滑块将其**打开**
- 设置 > 社区插件 > 已安装插件 > Adamantine Pick

手动安装
- 将`main.js`、`manifest.json`、`styles.css`复制到您的Vault文件夹中
`VaultFolder/.obsidian/plugins/adamantine-pick/`

测试安装
- 将[此插件仓库链接](https://github.com/notlibrary/obsidian-adamantine-pick)粘贴到[测试其他插件](https://github.com/TfTHacker/obsidian42-brat)的插件中

拾取和推送坚固图表笔记

要拾取坚固图表笔记，请使用单独的“坚固拾取”命令<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F5</kbd>
如果有互联网连接，它将尝试从github插件发布页面获取整个笔记集合的JSON `adamantine-diagram-notes.json`，然后检查它的解码并在您的`VaultFolder/adamantine`中生成笔记

或者，您可以通过将此插件存储库中的`src/*.md`文件复制到您的`VaultFolder/adamantine`，或者从最新的[发布页面](https://github.com/notlibrary/obsidian-adamantine-pick/releases)下载`adamantine-diagram-notes.zip`并将其解压缩到您的`VaultFolder/adamantine`中，手动拾取它

要将自己的坚固图表笔记设计推送到插件集合中，请使用以下检查列表：

- 以英文为编码的utf-8文本文件（最好）
- 小于等于4kb（4096字节）大小，适合单个硬盘块
- 小写字母（a-z），长度小于等于8个字符的唯一文件名，带有扩展名.md 8 + 2
- 其中包含一个或多个pikchr图表的数学jax markdown（可选）
- 在Obsidian中选择时适合单个屏幕
- 使用yaml `--- tag: adamantine ---`和`#adamantine`进行标记
- 紧密的网络安全性，其中没有恶意可执行代码（例如perl一行代码）
- 没有广告干扰他人的个人数据（OP自签名可以接受）
- 可嵌入到位，不依赖云互联网连接或动态链接
- 可以使用标准计算机硬件解码
- 不重复现有的坚固图表笔记集合（还具有唯一的文件名）
- 拾取它是值得记住的，具有一定的可重用性，酷炫的极客/黑客价值
- 易于人类理解和阅读，可以在原地共享，具有清晰的语义和知识的片段
- 不一定是STEM/EE/ME备忘单，发挥您自己的想象力，展示一些努力
- 易于丢弃和处理，您不断想用它擦屁股紫色卫生纸

然后[fork此存储库](https://github.com/obsidian/adamantine_pick)，将其提交到`src`文件夹，然后创建拉取请求线程并等待批准

当然，要满足要求是困难的，坚固图表笔记很少见，它类似于带有恐龙的CCG或贴纸相册，操作流行的笔记应用程序的开源矢量图形堆栈，希望能帮助您的工作流程，基本上就是这样

远程抓取坚固图表笔记

这是最滑稽的用例，当您在远程虚拟化服务器上虚拟化解码器桌面盒子（安装了黑曜石和插件，并在其中选择了笔记集合），然后通过网络共享超级监视器虚拟机播放器或远程帧缓冲键盘协议与目标主机屏幕浏览器或VNC窗口，以便您可以完全观察远程解码的笔记。

我用neverinstall盒子进行了测试，您可以随时重试。
如果您经营YouTube频道，可以向订阅者展示这个技巧。
“开箱坚固图表笔记”，哈哈，无论如何，要实现真正可重复使用的城市屏幕非常困难。

如何构建插件

使用emsdk安装和激活[emcc](https://emscripten.org)

```
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
emsdk activate
```

将[此插件存储库](https://github.com/notlibrary/obsidian-adamantine-pick)克隆到您的Vault中的`VaultFolder/.obsidian/plugins/adamantine-pick`文件夹中

```
cd VaultFolder/.obsidian/plugins
git clone https://github.com/notlibrary/obsidian-adamantine-pick adamantine-pick
cd adamantine-pick
```

安装node.js开发包

```
npm install
```

从`pick.c`构建`pick.js`，并将其包装到`pikchr.c`构件中

```
npm run pikchr
```

编译器一行命令如下

```
emcc src/pick.c -DPIKCHR_SHELL -Wall -Wextra -lm -O2 --memory-init-file 0 -sWASM=0 -sMODULARIZE=1 -sEXPORT_NAME=pick -sEXPORTED_FUNCTIONS=_pick,_pick_width,_pick_height -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -o src/pick.js
```

编码`adamantine-diagram-notes.json`数据库

```
npm run notes
```

从`main.ts`包装器构建`main.js`的捆绑构建（和压缩）

```
npm run build
```

要在循环中调试包装器

```
npm run dev
```

构建服务器操作工作流也可用于自动化此过程（和版本升级）
[请参阅来自github actions的emsdk](https://github.com/mymindstorm/setup-emsdk)

- [手册](https://pikchr.org/home/doc/trunk/doc/userman.md)
- [示例](https://pikchr.org/home/doc/trunk/doc/examples.md)
- [规范](https://pikchr.org/home/doc/trunk/doc/grammar.md)
- [源代码](https://pikchr.org/home/artifact/da1b3e3f21)

## 注意事项

实验性的臃肿丑陋的包装器，但完全在js环境中运行的可能性超过了安全性的缺点

- 不要编辑`pikchr.c`，它是从原始工件自动生成的，供集成者使用
- 不要将其用于CAD/CAM绘图、营销演示、电子表格图表、函数图形（曲线图）和专业的STEM图表
- 承认原始的Pikchr开发人员

使用包装后的二进制大小约为75-100KB（取决于压缩算法）
因此，它适合在桌面L2缓存中与编码的图表一起使用，并且甚至还有一些额外的空间供其他用途使用
常见的输出MIME类型`image/svg+xml`使其易于在任何地方进行协商和解码

*tl, dr:* 对于那些读到最后的人来说，“BanKan”图表

	```pikchr
	box "DONE"; box "IN" ; box "DO" ; down; move from first box.n

	DONE: [ box "Shit" ] ; right 
	IN: box "Random"
	DO: box "Task 1" "Task 2" "Task 3"
	```
	
*附言* 尽管这不是最佳实践，因为“Digital? Every Idiot Can Count to One”(c)
我将我的笨拙备忘录测试OPamp电路图注释推送到了单独的`src/opamp.md`中



