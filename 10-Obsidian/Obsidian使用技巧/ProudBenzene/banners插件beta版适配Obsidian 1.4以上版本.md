---
uid: 19840124160001
title: banner 插件 beta 版适配 Obsidian 1.4 以上版本
tags: [banners, 适配]
description: 最新beta版banners插件升级过程
author: ProudBenzene
type: basic
draft: false
editable: false
modified: 20240408191106
---

# banner 插件 beta 版适配 Obsidian 1.4 以上版本

## 更新介绍

虽然距离 Obsidian 推出 1.4 版本，更新 Properties 功能已经过去了很长时间，但是 Banners 插件依然没有发布正式版更新解决 banner 图和 properties 抢位置的问题。

但这并不意味着作者没有尝试修复这个问题。事实上，作者在这之后先后推出了许多测试版，并最终停留在 2.0.5-beta 版本。

使用 2.0.5-beta 版本后，banner 图和 properties 的冲突问题即可解决。同时，由于 Properties 值支持了双链，因此 banners 2.0 将默认 metadata 格式由 `![[]]` 修改为 `[[]]`。升级后用户还需要手动点击按钮将库内原有笔记的 banners 格式进行转换。

## 升级步骤

1. 下载 Banners 插件 2.0.5-beta 版，可以通过 [GitHub](https://github.com/noatpad/obsidian-banners/releases) 或 [PKMer](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-banners) 下载安装包。
2. 安装后打开插件设置，划到最下方，点击更新按钮：![](https://cdn.pkmer.cn/images/202403291721586.png!pkmer)
3. 在弹出的弹窗中点击 update，等待插件更新笔记中链接完成（注意提前备份好笔记以免发生意外）![](https://cdn.pkmer.cn/images/202403291732734.png!pkmer)

之后 Banners 插件即可正常使用，一切与 1.4 之前一样且不会发生与 properties 的冲突。