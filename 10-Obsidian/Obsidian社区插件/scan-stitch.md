---
uid: 1793625620964000
title: "Obsidian 插件：Scan Stitch"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: "Combine one-file-per-page scanner output into a single PDF with fast rotation review. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Scan Stitch

> [!Note] 插件名片
> - 插件名称：Scan Stitch
> - 插件作者：Jay Leimer
> - 插件说明：Combine one-file-per-page scanner output into a single PDF with fast rotation review. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/codingjinxx/scan-stitch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scan-stitch)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/codingjinxx/scan-stitch/master/README.md)



## 概述

Scan Stitch 专为解决扫描仪“一页一文件”输出带来的整理难题而设计。它通过监听指定文件夹，自动捕获新产生的 PDF、JPEG 或 PNG 文件，并将它们实时汇总到侧边栏。核心功能在于将分散的扫描页合并为单个 PDF，同时提供直观的旋转审查界面，让你能快速修正页面方向，最终生成一份排版正确、顺序无误的文档，彻底告别手动合并与逐页调整的繁琐过程。

典型场景包括处理日常文档或书籍扫描。例如，当你使用平板扫描仪扫描一叠发票时，只需启动会话，扫描过程中插件会在侧边栏实时显示页码和最新页面预览。若发现某页方向颠倒，结束会话后进入审查界面，按下快捷键即可批量旋转。另一个场景是处理多日累积的扫描文件，插件能自动识别子文件夹中的新文件，即使文件名编号重置也能按写入时间正确排序，确保最终 PDF 的页序准确。

相比其他合并工具，Scan Stitch 的特色在于“键盘优先”的审查体验与对 Obsidian 工作流的深度整合。它支持通过拖拽缩略图重新排序、范围选择旋转以及撤销/重做操作，极大提升了修正效率。此外，它允许将新扫描页追加到库中已有的 PDF 文件末尾，并支持自定义文件名模板。插件还具备会话恢复机制，即使 Obsidian 意外关闭，下次启动时也能继续之前的扫描任务，确保数据不丢失。

需要注意的是，该插件目前仅在 Windows 平台上经过完整测试，macOS 和 Linux 用户可能面临兼容性问题。它仅支持桌面端，移动端无法使用。此外，插件不提供 OCR 功能，生成的 PDF 仅为图像拼接，文字不可搜索；也不支持 TIFF 格式。如果你需要自动识别文字或处理移动端扫描，此插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


