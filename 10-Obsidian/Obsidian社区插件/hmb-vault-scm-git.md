---
uid: 1793625613755001
title: "Obsidian 插件：HMB Vault SCM Git"
tags: ["文件管理", "备份与恢复", "第三方工具集成", "obsidian插件"]
description: "Version your vault with git: commit, push, pull, review changes and browse history. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HMB Vault SCM Git

> [!Note] 插件名片
> - 插件名称：HMB Vault SCM Git
> - 插件作者：Herber Madrigal
> - 插件说明：Version your vault with git: commit, push, pull, review changes and browse history. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hmadrigal/hmb-vault-scm-git)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hmb-vault-scm-git)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hmadrigal/hmb-vault-scm-git/master/README.md)



## 概述

HMB Vault SCM Git 将 Git 版本控制直接集成到 Obsidian 中，让你无需离开笔记软件即可管理库的变更。核心功能包括提交、推送、拉取代码，以及审查待处理的修改和浏览历史。它通过调用系统安装的 Git 程序工作，利用你现有的 SSH 密钥或凭据管理器进行远程同步，确保数据流转安全且符合你现有的开发习惯。

典型场景包括日常笔记的自动备份与多设备同步。例如，你可以开启自动提交功能，插件会在你停止输入 30 秒后，每隔设定时间自动提交所有更改，并可选择自动推送到远程仓库。另一场景是回顾笔记演变，通过历史面板查看某篇笔记或整个库的提交记录，点击特定提交即可在编辑器标签页中查看差异，甚至恢复旧版本，方便追踪思路变化或误删内容的找回。

相比其他插件，其特色在于提供了类似 VS Code 源代码控制视图的变更面板，支持以文件夹树或列表形式展示暂存与未暂存文件，并能直接从面板将文件加入 .gitignore。此外，它具备“安全拉取”机制，使用 rebase 和 autostash 策略，若发生冲突会自动中止并通知，确保本地文件不被意外覆盖。自动提交产生的记录带有特定标记，且支持将未推送的自动提交合并为一个整洁的提交，保持历史清晰。

使用前需注意，该插件目前仅支持桌面端，且要求系统已安装 Git。若库是从其他用户账户复制而来，可能遇到“Git 不信任目录”的问题，需在设置中信任该仓库。它不适合需要移动端实时同步的用户，因为移动端支持尚在计划中。此外，插件仅执行 Git 命令，不读取你的 SSH 密钥或全局 Git 配置，也不包含任何遥测或广告，适合注重隐私且习惯使用 Git 进行版本管理的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


