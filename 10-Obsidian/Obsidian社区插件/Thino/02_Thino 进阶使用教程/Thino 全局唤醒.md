---
uid: 20231227185818
title: Thino 全局唤醒
tags: [thino]
description: 
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20231228144511
---

# Thino 全局唤醒

Thino 的全局唤醒功能

- Thino 2.1.5 版本于 2023.12.27 日更新了全局唤醒功能
- 顾名思义，全局唤醒功能即再 电脑端（Win 端、Mac 可用，鸿蒙系统暂不支持）阅读时，随时唤醒 thino ，以达到快速摘录的目的。

如何使用 Thino 的全局唤醒功能

1. **开启设置**：
    - 在 Thino 的【设置】--【Advanced】中开启【Enable Opening Thino Globally】选项。
      ![|600](https://cdn.pkmer.cn/images/202312271907056.png!pkmer)

     - 设置全局唤醒 Thino 的快捷键，系统默认快捷键为：【 CommandOrControl + Shift + T 】。其中 `CommandOrControl` 区分大小写，代表<kbd>command</kbd>或者<kbd>ctrl</kbd>键。值得注意点是，在 ob 内使用这组快捷键，可能会和原来的快捷键有一定冲突可能。如有需要，可以在【Key for opening thino globally】中设置一个新的快捷键。
     - 【Show nearby mouse】功能
        勾选后，全局唤醒 Thino 时，弹窗会出现在鼠标所在的位置；
        取消勾选，全局唤醒 Thino 时，弹窗会出现在默认位置：界面正中

2. **重启 Obsidian**
3. **使用命令激活全局唤醒功能**：
     - 【ctrl + p 】打开命令面板，在面板中搜索【 Init global copy events 】
       ![|500](https://cdn.pkmer.cn/images/202312271909562.png!pkmer)

     - 值得注意点是：这个全局唤醒后，点击关闭，需要重新输入命令激活全局唤醒功能。个人推荐结合 [[buttons]] [[quickadd]] 插件绑定 `Init global copy events` 命令实现快速摘录，方便功能的使用。

> [!Warning] 注意
> - 此特性不是默认开启，以防止和你已经设定的快捷键冲突
> - 需要你先在插件设置中开启，如图，并重启 Obisidian