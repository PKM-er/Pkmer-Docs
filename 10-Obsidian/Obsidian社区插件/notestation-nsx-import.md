---
uid: 1793625618583000
title: "Obsidian 插件：Note Station NSX Import"
tags: ["第三方工具集成", "文件管理", "备份与恢复", "obsidian插件"]
description: "Import a Synology Note Station backup as notes. Select an NSX file and migrate notebooks, dates, tags and local attachments into a new folder. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Station NSX Import

> [!Note] 插件名片
> - 插件名称：Note Station NSX Import
> - 插件作者：theluckystrike
> - 插件说明：Import a Synology Note Station backup as notes. Select an NSX file and migrate notebooks, dates, tags and local attachments into a new folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/notestation-nsx-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notestation-nsx-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/notestation-nsx-import/master/README.md)



## 概述

Note Station NSX Import 专为解决 Synology Note Station 备份迁移至 Obsidian 的痛点而设计。它允许用户直接选择本地的 NSX 备份文件，将笔记本结构、日期、标签及本地附件完整迁移到新的文件夹中。插件会保留源数据的 ID、创建与修改时间，并将 HTML 内容转换为 Markdown，同时生成一份详细的导入报告，帮助用户在迁移后快速检查缺失的资源或链接。

典型场景包括将旧 NAS 上的笔记库整体搬迁至 Obsidian，或定期同步新的备份数据。例如，当你从 Note Station 导出备份后，只需运行导入命令，预览笔记数量与标题，确认笔记本文件夹映射无误后，即可一键生成包含所有笔记、附件及元数据的新目录。若后续有新的备份，Pro 版还支持对比两次备份的差异，自动识别新增、修改或删除的笔记，方便增量更新。

相比同类工具，该插件在数据完整性上表现突出。它通过 MD5 映射精确关联附件，避免链接失效，并严格处理文件名冲突与路径安全。此外，它保留了源标签的原始形式，同时提供清理后的标签供 Obsidian 使用。对于加密笔记，插件不会尝试解密，而是将其作为代码块保留并记录在报告中，确保数据透明。这种对元数据的细致保留和错误报告机制，使其在迁移复杂笔记库时更具可靠性。

使用前需注意，插件仅支持未加密、未分割且大小在 20 MiB 以内的 NSX 文件，不支持 ZIP64 格式。输出文件夹必须是全新的，若存在同名文件（包括大小写不同）将中止导入。此外，插件不自动监控备份文件，需手动选择。如果你需要自动同步、处理超大文件（超过 20 MiB）或解密加密笔记，此插件并不适合。建议保留原始 NSX 文件直至确认导入无误，并妥善保管 `Source snapshot.json` 以便后续对比。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


