---
uid: 1793625624103000
title: "Obsidian 插件：Vault Loss Alarm"
tags: ["文件管理", "备份与恢复", "安全与隐私", "obsidian插件"]
description: "Show a warning when notes or attachments vanish, such as deleted notes. The alert lists the missing files, each with its last known size. Use it to check vault file loss in sync or backup. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Loss Alarm

> [!Note] 插件名片
> - 插件名称：Vault Loss Alarm
> - 插件作者：theluckystrike
> - 插件说明：Show a warning when notes or attachments vanish, such as deleted notes. The alert lists the missing files, each with its last known size. Use it to check vault file loss in sync or backup. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/vault-loss-alarm)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-loss-alarm)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/vault-loss-alarm/master/README.md)



## 概述

Vault Loss Alarm 是一款专注于文件完整性监控的插件，旨在解决笔记或附件在同步、备份过程中意外消失却难以察觉的问题。它通过记录文件元数据建立基准，自动检测缺失的文件路径、被清空内容的 Markdown 笔记以及高频删除事件。当检测到异常时，插件会生成详细报告，列出缺失文件及其最后已知的大小，帮助用户快速定位数据丢失的具体位置，从而及时介入处理。

典型使用场景包括日常同步后的状态确认与突发删除事件的排查。例如，当云同步服务出现延迟导致部分文件暂时不可见时，插件会在启动后等待同步稳定，若仍有文件缺失则发出警报；或者在用户误操作批量删除文件夹时，插件会统计十分钟内的删除事件，一旦超过阈值立即提示，防止重要资料被彻底清除而未被察觉。

相比同类工具，该插件的特色在于其精细化的检测逻辑与灵活的阈值设置。它不仅监控文件是否存在，还能识别原本有内容但变为空的笔记，并支持针对特定文件夹设置独立的报警规则。此外，Pro 版本提供了三十天的历史清单对比功能，允许用户回溯不同时间点的文件状态差异，以及生成恢复检查清单，将报警转化为可执行的任务列表，极大提升了数据恢复的效率。

需要注意的是，该插件仅记录文件元数据，无法直接恢复笔记文本或附件内容，用户仍需依赖外部备份工具进行实际恢复。此外，云盘离线加载或应用关闭期间的重命名操作可能引发误报，建议在确认同步状态后再接受新的基准。它不适合用于实时内容版本控制，也不适合对移动端或 Linux 环境有强依赖的用户，因为部分场景尚未经过充分测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


