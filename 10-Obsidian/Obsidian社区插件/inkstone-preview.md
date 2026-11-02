---
uid: 1793625614231000
title: "Obsidian 插件：InkStone Preview"
tags: ["发布工具", "第三方工具集成", "界面优化", "obsidian插件"]
description: "Preview notes as your InkStone site renders them, live beside the editor, and commit and push your site folder with Git. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：InkStone Preview

> [!Note] 插件名片
> - 插件名称：InkStone Preview
> - 插件作者：airenare
> - 插件说明：Preview notes as your InkStone site renders them, live beside the editor, and commit and push your site folder with Git. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/airenare/inkstone-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inkstone-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/airenare/inkstone-obsidian-plugin/master/README.md)



## 概述

InkStone Preview 解决了 Obsidian 阅读视图与 InkStone 网站实际渲染效果不一致的痛点。它直接在编辑器旁运行本地 InkStone 实例，实时展示笔记在最终网站上的真实呈现。无论是缩进、换行、标题还是提示框，预览内容均与线上站点完全一致，让你无需经历提交、推送和等待部署的繁琐流程，即可即时确认排版细节。

典型场景包括撰写博客文章或构建多语言站点时。例如，当你调整一段代码块的缩进或修改标题层级时，右侧预览会随保存动作自动刷新，无需手动点击刷新按钮。若你在预览中点击某个链接，编辑器会直接打开对应的源笔记，这种双向导航机制让你能像访客一样检查链接有效性、Slug 设置及语言变体，极大提升了内容校对效率。

相比其他仅模拟渲染的插件，InkStone Preview 的核心优势在于它直接调用 InkStone 自身的输出，而非重新实现渲染逻辑，确保了视觉效果的绝对准确。此外，它内置了 Git 集成，允许你在 Obsidian 内部直接执行拉取、查看差异、提交和推送操作，无需切换终端或粘贴令牌。同时，通过切换“所有者视图”，你可以查看包含私有内容的完整站点状态，而普通预览则仅显示访客可见的部分。

使用前需注意，该插件目前处于早期版本（0.x），仅在 macOS 和 Linux 上经过充分测试，Windows 用户虽受代码支持但缺乏实际运行验证，可能遇到未预见的兼容性问题。它仅支持 Obsidian 桌面版，移动端因无法启动本地进程而不被支持。此外，若你的站点文件夹位于公共 Git 仓库中，请勿使用“私有页面”功能，因为访问令牌会以明文形式存储在笔记中，存在泄露风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


