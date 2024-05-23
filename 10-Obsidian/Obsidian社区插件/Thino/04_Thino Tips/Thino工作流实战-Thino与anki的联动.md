---
uid: 20240501103908
title: Thino 工作流实战：Thino 与 anki 的联动
tags:
  - Obsidian
  - Thino
  - anki
description: Thino 工作流实战：Thino 与 anki 的联动
author: dusk
type: other
draft: false
editable: false
modified: 20240501104432
id: 858b4177c00bddca
---

# Thino 工作流实战：Thino 与 anki 的联动

这是大家熟悉的界面

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302244643.png)

这是大家熟悉的 anki 卡片界面

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302245654.png)

按本教程进行插件的调整，就可以借助 anki 对 thino 卡片进行回顾了。

在开始写具体的教程前，先简单说下我在 thino 里记录的内容表现样式，其信息组织的灵感来自于徐子沛老师的《第二大脑》这本书（我在得到 APP 上看的）。

本质一则卡片就是「信息块 + 标签」的组织方式。建议看看徐老师的书，里面对这种信息组织的好处讲的非常详细，相信对你会非常有启发。

所以如上图所示，我在 thino 的每则卡片都是基于同样的架构形式，也非常合适在 anki 里进行回顾。

好的，进入配置正题。

# 二，插件准备

所需插件：obsidian to anki，官方插件名现在为：Export to Anki，下文简称「插件」

插件配置介绍略

# 三，具体配置过程

## 1，anki 里建议建立 thino 专用卡片样式

主界面进 Browse

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302255976.png)

找到 note type，为 thino 卡片单独弄个卡片样式，好处是后期要改样式，更加方便（本教程中直接延续原有的卡片样式）

![400](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302256678.png)

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302257509.png)

![350](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302257575.png)

如下图所示，thino 专用卡片样式新建成功

![250](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302258553.png)

## 2，obisidian to anki 的相关设置

1，先将 anki 新增的卡片样式导到插件中

![800](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302300581.png)

正常生成后，就如下图所示：

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302300346.png)

2，进行「问答题 thino」的相关设置

![](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302303002.png)

相关语法：

```
^>\s\[!thino\]\s(.+)\n*((?:\n(?:^[^\n#].{0,2}$|^[^\n#].{3}(?<!<!--).*))+)
```

好了，至此配置完毕。

# 四，开始测试

值得注意的是：我使用 thino 的保存形式为「单文件」形式，本文的配置方法也是基于这个形式。别的类型我没用过。

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302307030.png)

1，在正常输入框中，正常输入「信息块 + 标签」形式

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302304822.png)

2，进到「单文件」的那个文件里，进行一处调整，即指定「卡组名」，方便刷卡

默认的文件名应该就是 basic.thino.md，可点上图第 2 点的位置直接进入。

![600](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302309406.png)

如上图第 1 处所示：加个「卡组名」。

正常使用中，在 thino 里写完笔记后中，就运行下 obsidian to anki 这个插件，如果在上图第 2 处出现卡片的 ID，就说明是正常生成卡片了。

以下几张图分别是展示了 anki 软件中的卡组、thino 原文件中正常生成卡片的形式、anki 软件中标签的正常生成。

![400](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302312801.png)

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302313956.png)

![500](https://ppicbed.oss-cn-hangzhou.aliyuncs.com/img/202404302313476.png)

可以看到卡片和标签都能正常被读取。

关于这个多级卡片是如何生成的，见我在社区里的另一篇文章，里面介绍了如何对插件进行调整。

[[obsidian-to-anki-plugin]]
