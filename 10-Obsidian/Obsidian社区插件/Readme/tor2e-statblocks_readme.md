---
uid: 2023080322281176
title: Obsidian 插件：The One Ring 2E Statblocks
tags: ['obsidian插件', 'readme']
description: 为《指环王2E角色扮演游戏》渲染 NPC 和对手状态块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：The One Ring 2E Statblocks

> [!Note] 插件名片
> - 插件名称：The One Ring 2E Statblocks
> - 插件作者：Michael Hansen
> - 插件说明：为《指环王 2E 角色扮演游戏》渲染 NPC 和对手状态块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/modality/obsidian-the-one-ring-2e-statblocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tor2e-statblocks)

## 概述

为《指环王 2E 角色扮演游戏》渲染 NPC 和对手状态块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/modality/obsidian-the-one-ring-2e-statblocks/main/README.md)
>

---

## Readme(翻译）

下面是 [[tor2e-statblocks]] 插件的自述翻译

这个插件用于渲染《魔戒》第二版的对手属性块。

非常感谢@ben 创建了 [13th Age statblocks插件](https://github.com/ben/obsidian-13th-age-statblocks)，本插件是基于该插件进行改编的。

感谢@vehrka 对样式的贡献。

### 开发

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/tor2e-statblocks/` 目录下。
  - 如果你运行了 `npm run dev`，这些文件将在根目录中。
  - 这些文件的预构建版本可以在 [releases](https://github.com/modality/obsidian-the-one-ring-2e-statblocks/releases) 中找到。
- 在 Obsidian 中，导航到 Preferences > Community plugins。打开 `The One Ring 2E Statblocks` 的开关。

### 创建一个状态块

可以使用以下语法在笔记中定义状态块。字段大多是可选的。如果状态块“消失”，那是因为有一个字段的格式不正确。尝试逐个添加字段。

状态块中的参数被解析为 YAML。某些 Obsidian 约定（例如，双方括号：`[[]]`）可能无法正常工作，因为 YAML 有自己对此的解释。尝试用双引号 `""` 包裹它们。

#### 字段

- `name` - 对手的名称
- `blurb` 或 `description` - 关于对手的口味文本描述。
  - 此字段以 Markdown 格式呈现：Obsidian 链接 `[[]]` 在此处有效。
- `features` - 一系列独特的特征
- `level` - 对手的属性等级
- `endurance` - 耐力点数
- `might` - 力量评级
- `hate` 或 `resolve` - 使用其中之一，正确的标签将显示
- `parry` - 格挡评级
- `armour` 或 `armor` - 护甲评级
- `proficiencies` - 战斗熟练度。这些由以下格式的 YAML 字典列表表示：
  - `name` - 攻击名称
  - `rating` - 攻击评级
  - `damage` - 伤害评级
  - `injury` - 伤害阈值
  - `special` - 特殊伤害机会
    - 此字段以 Markdown 格式呈现：Obsidian 链接 `[[]]` 在此处有效。如果它们没有呈现为链接，请尝试用双引号括起来。
- `abilities` - 一系列堕落能力
  - 此字段以 Markdown 格式呈现：Obsidian 链接 `[[]]` 在此处有效。如果它们没有呈现为链接，请尝试用双引号括起来。

````
```tor2e
名称: 贪婪的潜伏者
描述: 贪婪的潜伏者是一种生活在地下的蠕虫状生物。它有着强大的抓握爪，当它在自己的领地上移动时，它的爪子会与洞穴壁撞击在一起，寻找那些试图偷走它的财宝的入侵者。
特征:
- 贪婪
等级: 7
耐力: 70
力量: 2
仇恨: 7 # 或者决心
格挡: 0
护甲: 3 # 或者装甲
熟练度:
- 名称: 撕裂
  评级: 3
  伤害: 5
  伤害值: 16
  特殊: "[[特殊伤害选项#夺取|夺取]]"
- 名称: 粉碎
  评级: 3
  伤害: 7
  伤害值: 12
  特殊: "[[特殊伤害选项#破盾|破盾]]"
能力:
- "[[邪恶能力#对火焰的恐惧|对火焰的恐惧]]"
- "[[邪恶能力#恐怖之物|恐怖之物]]"
- "[[邪恶能力#厚皮|厚皮]]"
```
````