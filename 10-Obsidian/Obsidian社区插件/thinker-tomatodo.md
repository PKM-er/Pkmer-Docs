---
uid: 1793625623037000
title: "Obsidian 插件：Thinker TomaTodo"
tags: ["第三方工具集成", "日历与时间", "效率工具", "obsidian插件"]
description: "Mirrors a Thinker stopwatch session onto the TomaTodo desktop client: start one, and the other starts too. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Thinker TomaTodo

> [!Note] 插件名片
> - 插件名称：Thinker TomaTodo
> - 插件作者：Depthinker
> - 插件说明：Mirrors a Thinker stopwatch session onto the TomaTodo desktop client: start one, and the other starts too. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/depthinker925/Thinker-TomaToDo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?thinker-tomatodo)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/depthinker925/Thinker-TomaToDo/master/README.md)



## 概述

Thinker TomaTodo 旨在解决手机与电脑间专注计时不同步的痛点，核心功能是将 Thinker 的正计时状态实时镜像到番茄ToDo桌面客户端。当你在手机端启动 Thinker 计时，电脑端的对应待办也会自动开始计时；反之，手机端停止时，电脑端也会同步暂停。该插件仅读取 Thinker 的计时状态，不会修改其任何数据，且只支持正计时模式，不涉及番茄钟功能。

典型使用场景是跨设备专注工作。例如，你在通勤路上用手机 Thinker 开始记录阅读时间，回到办公室打开电脑后，番茄ToDo 会自动接续计时，无需手动操作。另一个场景是家庭办公，你在客厅用手机计时，在书房电脑端查看进度，两端状态始终保持一致，确保专注时间的完整记录。

相比其他同步插件，Thinker TomaTodo 的特色在于其非侵入性设计，它不修改 Thinker 数据，仅通过高频轮询读取状态。此外，它提供了“检查连接”功能，能具体定位联动失败的原因，如窗口未找到或待办名称不匹配，便于用户快速排查问题。插件还允许配置“必要时重启客户端”，以解决番茄ToDo单实例限制导致的调试端口丢失问题。

使用前需注意，该插件仅限桌面端使用，且要求电脑端番茄ToDo中预先创建与设置中名称完全一致的待办项，并选择正计时类型。它不适合需要番茄钟同步、移动端控制或跨平台（如 Mac/Linux）的用户。由于依赖客户端内部结构，若番茄ToDo更新导致页面变动，联动可能失效，需及时检查连接状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


