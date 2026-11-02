---
uid: 1793625610961000
title: "Obsidian 插件：Close to Tray"
tags: ["效率工具", "界面优化", "obsidian插件"]
description: "Keep the app running in the system tray when its window is closed, so the command line interface keeps working. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Close to Tray

> [!Note] 插件名片
> - 插件名称：Close to Tray
> - 插件作者：King Kunta
> - 插件说明：Keep the app running in the system tray when its window is closed, so the command line interface keeps working. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kingkdot/Traysidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?close-to-tray)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kingkdot/Traysidian/master/README.md)



## 概述

Close to Tray 旨在解决 Obsidian 关闭窗口后应用彻底退出，导致命令行接口（CLI）无法使用的问题。其核心功能是将窗口关闭行为转化为“隐藏至系统托盘”，确保应用在后台持续运行。这样，即使你关掉了所有可见窗口，Obsidian 依然保持活跃状态，使得依赖应用进程存在的 CLI 命令、插件同步及后台任务能够正常执行，无需为了保持 CLI 可用而强制保留一个最小化的窗口。

典型的使用场景包括依赖 Obsidian CLI 进行自动化笔记管理或数据检索的用户。例如，当你通过终端执行 `obsidian://` 链接或调用 CLI 命令时，如果应用未运行，操作会失败；启用该插件后，你可以放心地关闭所有窗口，CLI 依然能即时响应。另一个场景是多库工作流，当你切换不同 Vault 时，可以隐藏当前窗口而不中断其后台插件的运行，保持工作环境的整洁。

相比同类插件，Close to Tray 的特色在于其轻量级与原生集成。它完全在 Obsidian 内部运行，不发起任何网络请求，仅利用 Electron API 拦截窗口关闭事件。它巧妙地区分了“关闭窗口”与“退出应用”，确保 Obsidian 自身的保存和关闭逻辑不受干扰。此外，它支持多 Vault 环境，无论打开多少个库，系统托盘仅显示一个图标，右键菜单可统一控制所有隐藏窗口的显示或彻底退出，避免了托盘图标泛滥的问题。

使用前需注意，该插件目前仅在桌面端有效，且主要经过 Windows 环境验证，macOS 和 Linux 虽使用相同代码路径但未充分测试。它不适合那些希望关闭窗口即彻底终止进程以释放内存的用户，因为应用会常驻后台。此外，若你依赖特定的窗口关闭触发器（如某些自动化脚本监听窗口销毁事件），此插件可能会干扰其逻辑。对于仅需偶尔使用 CLI 的用户，手动保持窗口最小化可能更简单，无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


