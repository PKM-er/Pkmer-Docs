---
uid: 20230710193144
title: Obsidian 插件开发
tags: [插件开发]
description: Obsidian 插件开发参考资料
author: windilycloud
type: other
draft: false
editable: false
modified: 20230710195840
---

# Obsidian 插件开发

## 参考资料

- web 开发
	- [Frontend Developer Roadmap](https://roadmap.sh/frontend)：前端开发路线 Github 最高 Star 的一个项目，有 [中文版](https://github.com/goodjack/developer-roadmap-chinese)，但是很久未更新了，可以参考下
	- [Web 开发技术 | MDN](https://developer.mozilla.org/zh-CN/docs/Web)：这个网站可以当作 Web 开发的权威参考，可以查看任何 HTML，CSS，JavaScript 等细节，此处是其打造的一套中文教程，非常容易上手
	- [freecodecamp.org](https://www.freecodecamp.org/chinese/)：目前来说最大的免费开源教程组织，几乎所有编程内容都能在上面找到非常详细的教程
	- [现代 JavaScript 教程](https://zh.javascript.info/)：一套完全免费且开源的 JavaScript 教程，深入浅出，几年来一直在孜孜不倦的更新新内容
- Obsidian 插件开发
	- [Home - Developer Documentation](https://docs.obsidian.md/Home)：Obsidian 官方的插件开发文档，暂时没有中文翻译
	- [obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)：Obsidian 官方提供的插件模板
	- [Obsidian Plugin Developer Docs](https://marcus.se.net/obsidian-plugin-docs/)：Obsidian 社区建设的插件开发文档
	- [Obsidian 插件开发文档](https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/)：Obsidian 社区建设的开发文档的中文翻译
	- [Taitava/obsidian-shellcommands](https://github.com/Taitava/obsidian-shellcommands)：shell command 插件，被社区里称为插件开发的典范。代码注释，README，插件交互，提交等都非常优雅和值得学习。对新手来说体量稍微有点大，可以先找找其它插件练练手。
	- [在 Obsidian 中构建用户输入弹窗以及给流行插件贡献代码](https://www.bilibili.com/video/BV11e4y1q7JS/)：Obsidian的B站官方号有一些插件开发视频，质量很高，都是大佬录的，但是是英文的，还是生肉......
	- [程序员高效使用 Obsidian -- 插件开发](https://www.bilibili.com/video/BV1rL4y1F7h5/)：这个视频大致展示了插件开发流程。

## 新手路线

1. 建立web开发鸟瞰图：快速浏览[Frontend Developer Roadmap](https://roadmap.sh/frontend)和[Web 开发技术 | MDN](https://developer.mozilla.org/zh-CN/docs/Web)，建立对web开发的大致规划，了解一些基础的概念和前置内容。
2. 快速学习web开发技术：从[Web 开发技术 | MDN](https://developer.mozilla.org/zh-CN/docs/Web)提供的教程开始，快速学习教程内容，不要拘泥于细节，web开发内容非常多，用的时候再查阅。
3. 了解前端工程化：所谓的工程化就是一套工具链，用于提升开发效率和体验的工具，包括：
	1. [Git - Book](https://git-scm.com/book/zh/v2)：Git Pro，最受欢迎的Git教程，内容丰富，但内容丰富容易让人抓不住重点，大致了解下用了再琢磨更好
	2. [什么是 npm —— 写给初学者的编程教程](https://www.freecodecamp.org/chinese/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)：npm除了作为包管理器，还用于创建和运行前端项目
	3. [esbuild - 极速 JavaScript 打包器](https://esbuild.docschina.org/)：前端打包工具，Obsidian用的这个，但实际上只是用的话不需要学习。但如果想用前端开发更高级的特性，则需要学习。其作用就是把写的一大堆模块化的代码打包成一个`main.js`供obsidian使用。除此之外，还有vite，rollup等打包工具
4. 练习开发插件：跟着[Obsidian 插件开发文档](https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/)做做插件，了解Obsidian的API，运行和开发流程，学完就可以开始撸插件了。这个时候看[程序员高效使用 Obsidian -- 插件开发](https://www.bilibili.com/video/BV1rL4y1F7h5/)就知道他在干嘛了。

## 老手路线

- 跟着[Obsidian 插件开发文档](https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/)做做插件，了解Obsidian的API，运行和开发流程，学完就可以开始撸插件了。