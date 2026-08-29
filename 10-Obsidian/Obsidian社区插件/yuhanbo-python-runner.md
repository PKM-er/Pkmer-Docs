---
uid: 1786577083900001
title: 'Obsidian 插件：Yuhanbo Python Runner'
tags: ['编程与脚本', '第三方工具集成', '效率工具', '自定义命令', 'obsidian插件']
description: '用本地解释器运行 Python 代码块，还能在笔记里查看运行结果。——Obsidian 官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Yuhanbo Python Runner

> [!Note] 插件名片
> - 插件名称：Yuhanbo Python Runner
> - 插件作者：yuhanbo
> - 插件说明：用本地解释器运行 Python 代码块，还能在笔记里查看运行结果。——Obsidian 官方人员尚未对该插件进行人工审核。
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yuhanbo758/obsidian-yuhanbo-python)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yuhanbo-python-runner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yuhanbo758/obsidian-yuhanbo-python/master/README.md)



## 概述

### Yuhanbo Python Runner插件总结
1. **主要功能**：在Obsidian内使用本地Python解释器运行代码块，并查看输出。为渲染后的Python代码块添加“Run Python”按钮，在模态框中显示标准输出和错误信息，可将执行结果复制到剪贴板，支持配置Python可执行文件路径，会停止超过30秒的执行。
2. **适用场景**：适用于在Obsidian笔记中编写和测试Python代码，无需离开Obsidian环境。仅支持桌面端，因需启动本地Python进程，不适用Obsidian Mobile。
3. **核心特色**：操作便捷，在阅读视图即可运行代码；可灵活配置Python解释器路径；注重安全，虽无沙盒但会尽力清理临时目录，且自身无遥测、网络请求和广告。
4. **使用建议**：在笔记中创建Python代码块，在阅读视图点击“Run Python”查看输出。若系统路径中无“python”，可在插件设置中配置路径。仅运行来自可信任的Vault和笔记的代码，以防安全风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


