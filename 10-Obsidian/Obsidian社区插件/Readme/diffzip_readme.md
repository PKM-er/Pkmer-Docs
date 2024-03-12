---
uid: 20240312193744
title: Obsidian 插件：【Readme】Differential ZIP Backup
tags: ['obsidian插件', 'readme']
description: Back our vault up with lesser storage.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Differential ZIP Backup

> [!Note] 插件名片
> - 插件名称：Differential ZIP Backup
> - 插件作者：vorotamoroz
> - 插件说明：Back our vault up with lesser storage.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vrtmrz/diffzip)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?diffzip)

## 概述

Back our vault up with lesser storage.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vrtmrz/diffzip/main/README.md)

---

## Readme(翻译）

下面是 [[diffzip]] 插件的自述翻译

【机翻】

# 差异化 ZIP 备份

![screenshot](https://cdn.pkmer.cn/covers/diffzip_1_0.gif!pkmer)

这是一个为 [Obsidian](https://obsidian.md) 设计的保险库备份插件。

我们可以将所有已修改的文件存储到一个 ZIP 文件中。

## 安装

1. 从 [Beta Reviewers Auto-update Tester](https://github.com/TfTHacker/obsidian42-brat) 安装此插件。

## 如何使用

### 创建备份

1. 从命令面板执行 `创建差异备份`。
2. 我们将在 `备份` 文件夹中获得 `backupinfo.md` 和一个 zip 文件 `YYYY-MM-DD-SECONDS.zip`
   - `备份` 文件夹可以在设置对话框中配置。

### 恢复文件

1. 从命令面板执行“从备份中恢复”。
2. 选择要恢复的文件。
3. 选择要恢复的备份。
4. 选择保存恢复文件的位置。
5. 我们得到了一个旧文件。

## 设置

| 键                     | 描述                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 启动时开始备份         | 当插件加载后，差异备份将自动创建。                                                                                                                             |
| 备份文件夹             | 存储备份的文件夹。                                                                                                                                             |
| 恢复文件夹             | 存储恢复文件的文件夹。                                                                                                                                         |
| 包括隐藏文件夹         | 备份配置、插件、主题和代码片段。                                                                                                                              |
| ZIP 分割大小           | 处理大文件不方便，因此此插件将备份 ZIP 文件分割为此大小。这些分割的 ZIP 文件可以由 7Z 或其他压缩软件处理。 |

## 什么是 `backupinfo.md`？

这个 markdown 文件包含了一个文件信息列表。列表以 YAML 格式存储。`backupinfo.md` 也存储在每个 Zip 文件中。

为了简单起见，假设我们有三个文件，做一个备份，改变其中一个文件，然后再做另一个备份。

然后我们得到以下内容。

```yaml
Untitled.md:
  digest: 452438bd53ea864cdf60269823ea8222366646c14f0f1cd450b5df4a74a7b19b
  filename: Untitled.md
  mtime: 1703656274225
  history:
    - zipName: 2023-12-28-41265.zip
      modified: 2023-12-27T05:51:14.225Z
  storedIn: 
Untitled 2.md:
  digest: 7241f90bf62d00fde6e0cf2ada1beb18776553ded5233f97f0be3f7066c83530
  filename: Untitled 2.md
  mtime: 1703656274225
  history:
    - zipName: 2023-12-28-41265.zip
      modified: 2023-12-27T05:51:14.225Z
Untitled 1.md:
  digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
  filename: Untitled 1.md
  mtime: 1708498190402
  history:
    - zipName: 2023-12-28-41265.zip
      modified: 2023-12-27T05:51:14.225Z
    - zipName: 2024-2-21-56995.zip
      modified: 2024-02-21T06:49:50.402Z
```

以下条目很重要。

| key     | value                                                    |
| ------- | -------------------------------------------------------- |
| digest  | 文件的 SHA-1。DZB 通过这个哈希检测所有的更改。 |
| history | 存档的 ZIP 文件名称和当时的时间戳。        |

注意：由于 ZIP 文件的分辨率不足，修改时间已经被存储，但这对我们来说是信息。

### ZIP 文件

我们将得到以下的 zip 文件。

| 2023-12-28-41265.zip | 2024-2-21-56995.zip |
| -------------------- | ------------------- |
| Untitled.md          |                     |
| Untitled 1.md        |                     |
| Untitled 2.md        | Untitled 1.md       |
| backupinfo.md        | backupinfo.md       |

聪明的人可能已经注意到，我们可以从最新的 ZIP 文件中找到我们想要的文件，而无需任何特殊工具！

---

许可证：MIT
