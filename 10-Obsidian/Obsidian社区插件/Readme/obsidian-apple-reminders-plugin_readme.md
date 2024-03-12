---
uid: 20240227160841
title: Obsidian 插件：【Readme】Apple Reminders
tags: ['第三方工具集成', '移动端', 'obsidian插件', 'readme']
description: 一个插件，试图将苹果提醒带入Obsidian。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Apple Reminders

> [!Note] 插件名片
> - 插件名称：Apple Reminders
> - 插件作者：Rishi Raval
> - 插件说明：一个插件，试图将苹果提醒带入 Obsidian。
> - 插件分类：[' 第三方工具集成 ', ' 移动端 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/urishiraval/obsidian-apple-reminders-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-apple-reminders-plugin)

## 概述

一个插件，试图将苹果提醒带入 Obsidian。

![Apple Reminders](https://cdn.pkmer.cn/covers/obsidian-apple-reminders-plugin_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/urishiraval/obsidian-apple-reminders-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-apple-reminders-plugin]] 插件的自述翻译

# Apple 提醒事项

![与每日笔记一起使用的提醒事项插件](https://cdn.pkmer.cn/covers/obsidian-apple-reminders-plugin_2_0.gif)

这是一个尝试将 Apple 提醒事项带入 [Obsidian](https://obsidian.md) 的插件。

注意：这个插件可能会有点重，但我已经尽可能地使它高效。欢迎任何建议。

（我不对任何数据丢失负责...尽管这个插件从不删除任何提醒事项，只会修改它们的属性）

##### 更新日志

v2.0：

- !! 对整个代码库进行了大规模改进
- 添加了更好的刷新功能
- 添加了设置选项
- 修复了在较新的 MacOS 版本中阻止提醒访问的错误

v0.2：

- 实现了基本的过滤功能
- 显示了更多的数据
- UI 改进

# 需求

该插件使用 Apple 脚本进行同步，因此只能在 Apple 设备上使用。

# 安装说明

### 手册

1. 下载并解压缩发布文件夹 `obsidian-apple-reminders-plugin.zip`
2. 将 `obsidian-apple-reminders-plugin` 文件夹复制到 `.obsidian/plugins` 文件夹中
3. 启动 Obsidian
4. 在 `第三方插件` 中启用 `Apple Reminders`

从“社区插件”选项卡中添加此插件。

# 如何使用

创建一个如下所示的代码块：

```markdown
'''apple-reminders
list: List Name
'''
```

这将获取列表 `List Name` 中所有未完成的提醒事项。

注意：

  - 如果列表不存在，它将被创建。
  - 这使用了 [yaml](https://yaml.org) 格式规范。
  - 嵌套（也称为“缩进”）的提醒事项不起作用。这是因为苹果尚未通过 Apple 脚本公开此功能的原因。（真遗憾，我知道。）

## 附加功能

#### 拉取特定提醒事项

```yaml
list: 列表名称
reminders:
  - 提醒事项 1
  - 提醒事项 2
```

这将执行两个操作：

 1. 如果“提醒事项 1”或“提醒事项 2”不存在，则创建它们。
 2. 如果“提醒事项 1”或“提醒事项 2”存在，则获取并显示其状态。
  - （即使提醒事项已完成，它也会获取提醒事项，从而绕过默认设置，只获取尚未完成的提醒事项。）

#### 过滤器

```yaml
list: 列表名称
reminders:
  - 一些随机（可能已完成）的不重要提醒
filters:
  - date: 从今天到下个月
  - priority: 高
```

目前只有 ```date``` 和 ```priority``` 字段可以进行过滤，因为这些是我主要关注的内容。（如果您希望实现其他字段，请创建一个问题）

注意事项：

1. ```date``` 字段使用 [Chrono.js](https://github.com/wanasit/chrono) 库进行解析，因此具有该库的所有功能（和问题）。请参考其文档以了解可用的功能。
  - 但请注意，日期是使用 [Moment.js](https://momentjs.com/docs/#/query/is-same/)（具体是 isSame 和 isBetween（包含）函数）进行比较的，并且日期限制为“day”值。这意味着忽略了时间。
    - 例如，如果您尝试提取 ```6点到下午5点之间的提醒```，这将只提取当天的所有提醒，而不限制在该时间段内。
1. 过滤器是“与”操作。即上面示例中的过滤器变为 `date在今天和下个月之间` **且** `priority为高`。
2. ```date``` 字段有一个特殊的关键字。如果您输入：

```yaml
- date: 每日笔记
```

过滤器将被替换为笔记的标题。这有一个注意事项，如果您的每日笔记具有不常见的日期格式（无法由 Chrono.js 解析），则此过滤器将无效，并且可能导致不显示任何提醒。（如果您使用此功能并出现此注意事项，请创建一个问题或在现有问题上发表评论）。

# 附加说明

区块同步时间为每几分钟一次。同步时间可以在插件设置中进行设置。

目标

要添加到此列表中，请在问题中创建一个功能请求，我将很乐意将其添加到此列表中。

（无特定顺序）

- [x] 从 Reminders.app 中获取数据以在 Obsidian 中使用
  - [x] 弄清楚如何始终获取数据
    - 使用 [AppleScript](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html)，目前使用 [此库](https://www.npmjs.com/package/node-osascript) 执行它，直到找到更高效的方法为止

- [ ] 以最可用和使用 Obsidian 构造的方式在 Obsidian 中显示数据
  - [x] 弄清楚如何最好地显示提醒数据
    - 使用 Svelte（就像 [obsidian-todoist-plugin](https://github.com/jamiebrynes7/obsidian-todoist-plugin) 正在做的那样。非常感谢！）
  - [ ] 找到一种将嵌套或“缩进”的提醒带入 Obsidian 的方法（目前不支持 applescript）
  - [ ] 使刷新按钮更好用（目前只刷新 UI 而不是模型，即它不从 Apple 获取）
  - [ ] 过滤
    - [x] 自定义列表获取内容
    - [x] 按日期过滤
    - [ ] ~~按时间过滤~~
      - 目前似乎不需要。但是，如果有足够多的人想要更精细的控制，状态可能会改变:)
    - [x] 按优先级过滤
    - [ ] 按位置过滤
  - [x] 创建状态栏图标和消息，以显示插件正在进行的操作。
  - [ ] 创建一个界面，同时显示 Obsidian 中的所有列表
  - [ ] ~~创建一个“今天”列表（??现在实施了过滤器，这是否多余？）~~
- [ ] 创建一种机制，允许通过 Obsidian 高效编辑提醒事项
  - [x] 通过 Obsidian 创建提醒事项
  - [x] 通过 Obsidian 标记提醒事项为已完成
  - [ ] 编辑提醒事项的到期日期和提醒日期
  - [ ] 编辑列表颜色
  - [ ] 研究将列表“标志”带入 Obsidian
- [ ] 使此插件尽可能可配置，以适应多种用例
  - [x] 在 Obsidian 菜单中创建一个设置选项卡
  - [x] 使同步时间可配置
  - [ ] 使 UI 更可配置（标准化类名并创建文档）
  - [x] 设置合理的默认值
- [ ] 开发事项
  - [x] 创建文档
  - [ ] ~~创建 AppleScripts 文件以允许自定义~~

# 反馈

任何错误或功能/建议都可以通过在此存储库上创建问题来提出。
