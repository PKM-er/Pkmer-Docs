---
uid: 1793625607955001
title: "Obsidian 插件：Bibliography Path Audit"
tags: ["文件管理", "学术与科研", "效率工具", "obsidian插件"]
description: "Find invalid local bibliography paths saved in citation tool settings. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bibliography Path Audit

> [!Note] 插件名片
> - 插件名称：Bibliography Path Audit
> - 插件作者：theluckystrike
> - 插件说明：Find invalid local bibliography paths saved in citation tool settings. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '学术与科研', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bibliography-path-audit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bibliography-path-audit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bibliography-path-audit/master/README.md)



## 概述

Bibliography Path Audit 旨在解决引用工具因本地文献库路径配置错误而无法加载参考文献的问题。它通过读取 Citations 或 Citation Extended 插件中保存的本地路径字段，诊断路径中的常见故障，如首尾空格、隐藏的文件后缀或无效的相对路径。该插件提供只读审计功能，展示路径候选项供用户复制，但不会自动修改设置、重命名文件或导入记录，确保操作安全可控。

典型场景包括：当你的 Vault 中明明存在 .bib 或 .json 文件，但引用插件却提示找不到文献库时；或者当你发现路径末尾多了一个空格，导致工具无法识别文件时。例如，插件能识别出以 .bib.md 结尾的文件名，并警告这可能意味着参考文献被误存为 Markdown 笔记，帮助用户判断是否应使用原始文件还是修正后的路径。

相比其他工具，其特色在于细致的路径故障可视化与格式样本检查。它能高亮显示路径中的不可见字符，并读取文件前 4096 字符以验证内容是否匹配所选格式（BibTeX 或 CSL JSON）。此外，当路径指向的文件缺失时，它会在同一目录下搜索最多 8 个同名文件供参考，并明确标记出 Windows 驱动器路径等外部路径，避免在同步 Vault 时产生混淆。

使用前需注意，该插件仅支持 Citations 和 Citation Extended 的本地配置，不支持远程源或未知格式。它不执行批量检查，每次运行仅审计一个选定的配置文件。此外，格式样本检查仅作为诊断线索，无法证明整个文献库的完整性。如果你需要自动修复路径、管理远程文献源，或进行大规模批量路径校验，此插件并不适合，建议结合其他文献管理工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


