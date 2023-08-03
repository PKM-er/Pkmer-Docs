---
uid: 2023080322180777
title: Obsidian 插件：【Readme】Fantasy Statblocks
tags: ['界面相关', '样式工具', '游戏', 'obsidian插件', 'readme']
description: 在Obsidian 中创建TTRPG风格的模块，TTPRG可以理解做桌面角色扮演游戏，比如著名的《龙与地下城》
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Fantasy Statblocks

> [!Note] 插件名片
> - 插件名称：Fantasy Statblocks
> - 插件作者：Jeremy Valentine
> - 插件说明：在Obsidian 中创建TTRPG风格的模块，TTPRG可以理解做桌面角色扮演游戏，比如著名的《龙与地下城》
> - 插件分类：['界面相关', '样式工具', '游戏', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/javalent/fantasy-statblocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-5e-statblocks)

## 概述

在Obsidian 中创建TTRPG风格的模块，TTPRG可以理解做桌面角色扮演游戏，比如著名的《龙与地下城》

![Fantasy Statblocks](https://cdn.pkmer.cn/covers/obsidian-5e-statblocks.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/javalent/fantasy-statblocks/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-5e-statblocks]] 插件的自述翻译


# 幻想统计数据块


> 警告：我们正在所有Javalent存储库中开始将Readme转换为[Javalent的插件文档](https://plugins.javalent.com/home)。请收藏此链接并首先查看它，然后再参考此Readme。


在[Obsidian](https://obsidian.md/)中创建、管理和查看幻想怪物手册。

<img src="https://raw.githubusercontent.com/valentine195/obsidian-5e-statblocks/beta/images/example.PNG">

# 用法

可以使用下面的语法在笔记中定义一个状态块。

所有字段都是可选的 - 如果未提供，该状态块将不会呈现这些字段。

`monster`字段可以与其他字段组合以覆盖该字段。参见[覆盖字段](#覆盖字段)。

施法特性需要一个特殊字段（`spells`）- 请参见[施法](#施法)。

> **:warning: YAML语法**
>
> 请注意，状态块中提供的参数被解析为[yaml](https://yaml.org/spec/1.2.2/)。
>
> YAML非常强大，但您必须注意语法，否则可能会出现错误！
>
> 常见错误包括：不在带有`:`或`*`的参数周围加上引号（例如**近战武器攻击：**），以及缩进不正确。

````
```statblock
monster: <SRD/Homebrew怪物名称>
```
````

或者

````
```statblock
image: [[图像的维基链接]]
name: 字符串
size: 字符串
type: 字符串
subtype: 字符串
alignment: 字符串
ac: 数字
hp: 数字
hit_dice: 字符串
speed: 字符串
stats: [数字, 数字, 数字, 数字, 数字, 数字]
fage_stats: [数字, 数字, 数字, 数字, 数字, 数字, 数字, 数字, 数字]
saves:
  - <能力值>: 数字
skillsaves:
  - <技能名称>: 数字
damage_vulnerabilities: 字符串
damage_resistances: 字符串
damage_immunities: 字符串
condition_immunities: 字符串
senses: 字符串
languages: 字符串
cr: 数字
spells:
  - <描述>
  - <法术等级>: <法术列表>
traits:
  - name: <特性名称>
    desc: <特性描述>
  - ...
actions:
  - name: <特性名称>
    desc: <特性描述>
  - ...
legendary_actions:
  - name: <传奇动作名称>
    desc: <传奇动作描述>
  - ...
bonus_actions:
  - name: <特性名称>
    desc: <特性描述>
  - ...
reactions:
  - name: <反应名称>
    desc: <反应描述>
  - ...
```
````

使用[骰子掷子器](https://github.com/valentine195/obsidian-dice-roller)

您可以将骰子掷子器插件集成到您的状态块中，这将允许您在状态块内进行掷骰子。此集成需要以下步骤：

1. 安装并启用[骰子掷子器](https://github.com/valentine195/obsidian-dice-roller)插件。
2. 在设置中启用[集成骰子掷子器](#integrate-dice-roller)，或在笔记的状态块中添加`dice: true`参数。

然后，插件将解析常见类型的骰子掷子的怪物属性。插件将为以下字符串创建骰子掷子器：

1. 攻击掷骰（`+15 to hit`）
2. 伤害/治疗（`19 (2d10 + 8)`）
3. 豁免（`Strength +5`）

> 想要更改如何添加骰子掷子器吗？在设置中创建[自定义布局](#layouts)。

### 渲染的骰子

如果打开了[渲染骰子结果](#render-dice-rolls)设置或在属性块中添加了`render: true`参数，属性块中的骰子投掷结果可以在屏幕上滚动3D骰子。

<img src="https://raw.githubusercontent.com/valentine195/obsidian-5e-statblocks/beta/images/render.gif">

## 图片

可以使用`image`参数将图片添加到状态块中。这应该是一个指向存储在您的vault中某个位置的图片的wikilink。

图片将被放置在名称旁边，居中于一个75px的圆内。

## 覆盖字段

`monster`字段可以与其他字段结合使用，以覆盖指定SRD怪物的字段。例如：

````
```statblock
monster: Ancient Black Dragon
name: Paarthurnax
```
````

<img src="https://raw.githubusercontent.com/valentine195/obsidian-5e-statblocks/beta/images/override.PNG">

## 添加到字段

任何是普通字符串或数组的字段都可以通过指定字段名称后跟 `+` 来进行添加。例如：

````
```statblock
monster: Ancient Black Dragon
name: Paarthurnax
traits+:
  - name: Appended Trait
    desc: This trait will be appended to the existing traits list, instead of overwriting all of them.
```
````

## 扩展

`extends`键可以用于扩展现有的生物，类似于在覆盖字段中显示的`monster`键。不同之处在于生成的怪物不会合并；它保持与基础生物的链接。这允许您创建一个命名版本的哥布林，例如；对基础哥布林的任何更改都会传播到扩展中。

该键支持单个生物名称或生物数组。后面指定的生物字段将优先，而在statblock中直接定义的字段将最终优先。

该字段也是完全递归的；扩展一个扩展了另一个生物的生物将会一直级联这些扩展。

````
```statblock
name: Paarthurnax
extends: Ancient Black Dragon
```
````

````
```statblock
name: Extended Paarthurnax
extends:
- Paarthurnax
- Goblin
```
````

## 特性

特性，以及行动、反应和传奇行动，应通过指定名称和描述（desc）来添加：

```yaml
traits:
  - name: 水陆两栖
    desc: 龙可以在空气和水中呼吸。
  - name: 传奇抗性（每天3次）
    desc: 如果龙未能通过一次豁免扔骰，它可以选择成功通过。
```

## 施法

施法特性需要使用以下语法的特殊`spells`字段：

> **请注意：**
>
> 覆盖现有怪物的法术会替换掉原有的法术，_而不是合并_。

````
```statblock
spells:
  - 大法师是一名18级法术施放者。它的法术施放能力为智力（法术豁免 DC 17，法术攻击命中加值 +9）。大法师可以随意施放变装术和隐形术，并准备了以下巫师法术
  - 零级法术（随意施放）：火球术、光明术、法师之手、戏法、电击术
  - 1级法术（4个法术位）：侦测魔法、鉴定、法师护甲*、魔法飞弹
  - 2级法术（3个法术位）：侦测思想、镜像术、迷雾步
  - 3级法术（3个法术位）：反制法术、飞行、闪电箭
  - 4级法术（3个法术位）：放逐术、火焰护盾、石肤术*
  - 5级法术（3个法术位）：寒冰锥、窥视术、力场墙
  - 6级法术（1个法术位）：无敌之球
  - 7级法术（1个法术位）：传送术
  - 8级法术（1个法术位）：心灵空白*
  - 9级法术（1个法术位）：时间停止
  - "* 大法师在战斗前会对自己施放这些法术。"
```
````

## 幻想时代

使用幻想时代插件的用户可以使用`fage_stats`来设置九个属性。

### 完整示例

````
```statblock
image: [[Ancient Black Dragon.jpg]]
name: 古老黑龙
size: 庞大
type: 龙
subtype:
alignment: 混乱邪恶
ac: 22
hp: 367
hit_dice: 21d20
speed: 40尺，飞行80尺，游泳40尺
stats: [27, 14, 25, 16, 15, 19]
saves:
  - 敏捷: 9
  - 体质: 14
  - 智力: 9
  - 魅力: 11
skillsaves:
  - 感知: 16
  - 潜行: 9
senses: 60尺盲视，120尺黑暗视觉，被动感知26
languages: 通用语，龙语
damage_resistances: 非魔法攻击的钝击、穿刺和挥砍伤害
damage_immunities: 火焰，毒素
condition_immunities: 魅惑，恐惧，擒抱，麻痹，石化，中毒，俯卧，束缚
cr: 21
traits:
  - name: 水陆两栖
    desc: 龙可以在空气和水中呼吸
  - name: 传奇抗性（每日3次）
    desc: 如果龙未能通过一次豁免扔骰，它可以选择成功通过。
actions:
  - name: 多重攻击
    desc: "龙可以使用其恐怖存在。然后，它进行三次攻击：一次咬击和两次爪击。"
  - name: 咬击
    desc: "近战武器攻击：+15命中，射程15尺，一目标。命中：19（2d10 + 8）穿刺伤害加上9（2d8）酸性伤害。"
  - name: 爪击
    desc: "近战武器攻击：+15命中，射程10尺，一目标。命中：15（2d6 + 8）挥砍伤害。"
  - name: 尾巴
    desc: "近战武器攻击：+15命中，射程20尺，一目标。命中：17（2d8 + 8）钝击伤害。"
  - name: 恐怖存在
    desc: "在龙选择的120尺范围内，每个意识到龙存在的生物必须通过一次DC 19感知豁免才能不惧怕1分钟。生物可以在自己的回合结束时重复进行豁免扔骰，成功则结束对自己的影响。如果生物的豁免扔骰成功或效果结束，该生物对龙的恐怖存在免疫24小时。"
  - name: 酸性吐息（5-6回合重置）
    desc: 龙在一个90尺长、10尺宽的直线上喷吐酸液。该直线上的每个生物必须进行一次DC 22敏捷豁免，未通过则受到67（15d8）酸性伤害，通过则受到一半伤害。
reactions:
  - name: 水陆两栖
    desc: 龙可以在空气和水中呼吸。
  - name: 传奇抗性（每日3次）
    desc: 如果龙未能通过一次豁免扔骰，它可以选择成功通过。
legendary_actions:
  - name: 检测
    desc: 龙进行一次感知（智力）检定。
  - name: 尾巴攻击
    desc: 龙进行一次尾巴攻击。
  - name: 翅膀攻击（消耗2个行动）
    desc: 龙拍动翅膀。在龙周围15尺范围内的每个生物必须通过一次DC 23敏捷豁免，否则受到15（2d6 + 8）钝击伤害并被击倒。然后，龙可以飞行其飞行速度的一半。
spells:
  - 大法师是一个18级的法术施放者。它的法术施放能力为智力（法术豁免DC 17，法术攻击命中+9）。大法师可以随意施放变装和隐形术，并准备以下巫师法术
  - 零级法术（随意）：火焰飞弹，光明，法师之手，戏法
  - 1级法术（4个法术位）：侦测魔法，鉴定，法师护甲*，魔法飞弹
  - 2级法术（3个法术位）：侦测思想，镜像术，迷雾步
  - 3级法术（3个法术位）：反制法术，飞行，闪电箭
  - 4级法术（3个法术位）：放逐术，火焰护盾，石肤*
  - 5级法术（3个法术位）：寒冰锥，窥视，力场墙
  - 6级法术（1个法术位）：无敌之球
  - 7级法术（1个法术位）：传送
  - 8级法术（1个法术位）：心灵空白*
  - 9级法术（1个法术位）：时间停止
  - "* 大法师在战斗前对自己施放这些法术。"
```
````

对于Fate Core，可以使用相同的布局来处理任何事物 - 实体、派系、地点、物品等，只需要名称和方面即可。要添加（或更改）自定义压力轨迹，请复制布局并编辑“stress”块。

### 完整示例

````
```statblock
布局：基本命运核心布局
图片："[[bear.png]]"
名称：巴拉萨尔
描述：一个笨拙的太阳熊
方面："
  - 辛德拉尔地区的走私女王\n
  - 大部分忠诚的船员\n
  - 悔恨是软弱者的表现\n
  - [[我的船，死亡交易者]]\n
  - 我把法律揣在口袋里"
临时方面："
  - 欠[[玩家角色]]一个人情\n
  - [[麦克高飞]]的现任拥有者"
压力：[4, 5]
后果：
  - 名称：轻微（2）
    描述："以前骨折的骨头仍在愈合"
  - 名称：中度（4）
    描述：""
  - 名称：严重（6）
    描述：""
技能：
  - 名称：极好（+6）
    描述："欺骗，战斗"
  - 名称：超群（+5）
    描述："射击，盗窃"
  - 名称：很棒（+4）
    描述："资源，意志"
  - 名称：良好（+3）
    描述："联系人，注意力"
  - 名称：普通（+2）
    描述："手艺，潜行"
  - 名称：平均（+1）
    描述："知识，体质"
特技：
  - 名称：以眼还眼（欺骗）
    描述："在社交场合中使用欺骗代替同理心来制造优势。"
  - 名称：假动作大师（欺骗）
    描述："在物理冲突中使用欺骗来制造优势时，+2。"
  - 名称：还击（战斗）
    描述："如果你在战斗防御中成功地达到了风格，你可以选择造成2点伤害而不是获得一个增益。"
物品：
  - 名称：+1剑
    描述：""
  - 名称：+1皮甲
    描述："一个磨损的[[皮甲]]，内衬是红色亚麻衬衫"
```
````

<img src="https://i.imgur.com/9u308Z9.png">

## 第13纪元

您可以使用“基本第13纪元怪物布局”为**第13纪元**创建一个统计块。大多数块都是有条件的，这意味着除非将其添加到YAML中，否则不会显示“特征”、“更恶劣的特殊能力”和“触发动作”块。此外，您可以编写嵌套特征以描述对各种自然点数的影响的攻击/动作。

在此处查看带有空字段的完整统计块[here](./src/layouts/13th%20age/monster/base-monster-statblock.md)。

### 完整示例

````
```statblock
name: 奇美拉
image: [[chimera-tile.png]]
flavor_text: "在通过历代插图兽书复制下来的插图兽书中，奇美拉的三个身体被整齐地融合在一起：狮子、龙和山羊。实际上，鳞片和毛发、蹄子和爪子都以混乱的形式交织在一起。没有两个奇美拉是完全相同的，大多数都包含其他野兽的适度部分，以及标准的三个身体。它们扭曲的形态给它们带来痛苦。它们把痛苦发泄在其他一切上。"
size: 大型
level: 9级
role: 破坏者
type: 野兽
initiative: 15
vulnerability: 无
ac: 24
pd: 20
md: 16
hp: 320
actions:
    - name: 獠牙、爪子和角 +14 对 AC（3次攻击）
      desc: 25伤害
      traits:
          - name: 自然14-15
            desc: 目标被头部撞击晕眩，持续到奇美拉的下一个回合结束。
          - name: 自然16-17
            desc: 目标从抓击中受到20持续伤害。
          - name: 自然18-20
            desc: 奇美拉作为一个自由动作进行一次“火焰吐息”攻击。
          - name: 有限使用
            desc: 每场战斗3次
triggered_actions:
    - name: 火焰吐息 +14 对 PD（最多3个附近的敌人）
      desc: 3d10火焰伤害
traits:
    - name: 野兽的脱粒者
      desc: "每当一个生物用近战攻击未命中奇美拉时，奇美拉的多个锋利部分对攻击者造成3d10伤害。"
nastier_traits:
    - name: 现在它生气了！
      desc: 当一个攻击者对奇美拉造成暴击并且奇美拉幸存时，它在下一个回合的攻击投掷中除了自己的结果外，还会产生较低结果的效果；例如，18-20的投掷将使目标晕眩并受到20持续伤害，同时触发火焰吐息。
description: "<h2>图标</h2><p>据说受原始巫师国王训练的巫师将自己独特奇美拉的创造视为成年礼。作为帝国的捍卫者，大法师显然鄙视这种误用力量的行为。当然，个别的巫师在自己的主动行动中可能会证明按照大法师的配方创建的奇美拉更加优越。咳咳。</p><p>在现代，铁腕的十字军和兽人领主的力量对奇美拉对屠杀和折磨的需求毫不羞耻。</p>"
```
````

#### 单列

![13th Age Chimera 1-col](src/layouts/13th%20age/monster/publish/chimera-1-col.png)

#### 两列

![13th Age Chimera 2-cols](src/layouts/13th%20age/monster/publish/chimera-2-cols.png)

## 列

如果渲染的统计块很长且有足够的空间，插件将智能地创建两列。

<img src="https://raw.githubusercontent.com/valentine195/obsidian-5e-statblocks/beta/images/columns.png">

您可以使用几个不同的参数自定义列的行为：

| 参数           | 行为                                                         | 默认值  |
| -------------- | ------------------------------------------------------------ | :-----: |
| `columns`      | 自定义要渲染的列数。                                         |         |
| `columnWidth`  | 自定义列的宽度（以像素为单位）。                              |   400   |
| `columnHeight` | 列在换行之前的最大高度（以像素为单位）。                      |   600   |
| `forceColumns` | 插件将创建列，而不考虑笔记页面的大小。                       |  false  |

> **:pencil: 注意！**
>
> 如果设置了`columns`，插件将始终尝试将统计块分割为指定的列数，而不考虑高度。
>
> 它仍然会遵守笔记的宽度，除非设置了`forceColumns`。

# 野兽图鉴

statblock插件维护了一系列可以在statblocks中引用并在其他插件中使用的生物，比如[倡议追踪器](https://github.com/valentine195/obsidian-initiative-tracker)。

您可以通过几种方式将自定义怪物添加到这个怪物图鉴中。

在笔记中创建生物

#### 手动保存生物
自定义生物可以通过在笔记中创建一个自定义怪物的状态块代码块来保存，如[使用部分](#usage)所述。

您可以完全定义自己的自定义怪物，也可以使用现有的怪物在您的怪物手册中，并[覆盖字段](#overriding-fields)。

当状态块被渲染后，您可以通过点击右上角的菜单图标并选择“保存到怪物手册”来保存生物。

<img src="https://raw.githubusercontent.com/valentine195/obsidian-5e-statblocks/beta/images/save.png">

#### 在Frontmatter中创建生物
由于插件使用YAML语法，使用statblock代码块创建的statblock在frontmatter中是有效的。

如果在frontmatter中给出了`statblock: true`参数的笔记，并且在[设置](#settings)中打开了[解析笔记的Frontmatter](#parse-frontmatter-for-creatures)选项，或者使用了"解析笔记的Frontmatter"命令，那么它的frontmatter将被解析为自定义怪物。

**该笔记的frontmatter还必须有一个`name`参数来保存该生物。其他字段都是可选的。**

一旦在笔记中找到了该生物，它将被添加到怪物手册中，并与笔记内容同步。

如果移除了statblock字段或将其设置为false，或者删除了该笔记，该生物将从怪物手册中移除。

#### 自动化内联生物注册
如果前置信息指定了 `statblock: inline` 并且[解析笔记中的前置信息](#解析生物的前置信息)，那么笔记中的第一个 statblock 将自动在插件中注册，就像你将其 YAML 复制到前置信息中一样。

### 在设置中创建生物

可以通过单击“添加生物”按钮直接在设置中的[自制生物](#homebrew-creatures)部分创建生物。

可以使用上面显示的YAML语法或JSON来创建生物。

### 导入生物

可以从各种常见来源将生物导入到[设置](#import-creatures)中的魔兽图鉴中。

**:warning: 请只导入您拥有并具有合法访问权限的内容。**

此外，生物还可以作为纯粹的JSON导入。

访问图鉴

您的图鉴存储在插件中，并且可以在可以运行JavaScript的插件中以编程方式访问，例如[Dataview](https://github.com/blacksmithgu/obsidian-dataview)、[Templater](https://github.com/SilentVoid13/Templater)或[CustomJS](https://github.com/samlewis0602/obsidian-custom-js)。

只读的图鉴副本可在`window`对象上使用，并可以在您的脚本中像这样访问：

```js
const bestiary = app.plugins.getPlugin("obsidian-5e-statblocks").bestiary;
//或者
const bestiary = window.bestiary;
```

这将为您提供一个只读的JavaScript [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)。

生物按名称存储在图鉴中-您可以像这样从图鉴中检索生物：

```js
const ancient_black_dragon = bestiary.get("Ancient Black Dragon");
```

或者，获取所有生物的列表：

```js
const creatures = bestiary.values();
```

自动生成的状态块可以使用[CSS片段](https://help.obsidian.md/How+to/Add+custom+styles#Use+Themes+and+or+CSS+snippets)进行自定义。

使用`.statblock` CSS类可以在CSS中定位渲染的statblock。

此外，如果您正在使用[布局](#layouts)，则布局名称的slugified版本将添加到statblock元素中。

例如，默认情况下，"Basic 5e Layout"将添加到statblock容器中，类名为`.basic-5e-layout`。

### 针对特定怪物进行定位

与布局一样，怪物名称会被转换为slug格式，并作为类添加到statblock容器中。

例如，渲染一只古老黑龙的statblock将会获得`.ancient-black-dragon`类。

## 颜色

该插件创建并使用4个CSS变量来确定statblocks的颜色。

```css
:root {
    --statblock-primary-color: #7a200d;
    --statblock-rule-color: #922610;
    --statblock-bar-color: #e69a28;
    --statblock-background-color: #fdf1dc;
}
```

这些可以在全局范围内被覆盖（在`:root`元素上）以全局地改变默认颜色，或者直接应用于statblock容器本身以[针对特定的statblocks](#targeting-a-statblock)。

# 布局

从Fantasy Statblocks v2.0.0开始，可以在设置中创建自定义布局。基本的5e布局将始终存在，但插件使用的默认布局可以更改。

使用布局

除非在statblock参数中指定了布局，否则statblock将使用在设置中指定的默认布局：

````
```statblock
monster: Ancient Black Dragon
layout: My Custom Layout
```
````

创建布局

通过设置可以创建新的布局，可以通过点击“新建布局”按钮或复制现有布局并点击“编辑”按钮来进行操作。

这将打开布局创建器，在布局中可以添加和管理[**布局块**](#blocks)。

### 名称

布局必须被赋予名称，并且这些名称**必须是唯一的**。

### 区块

Statblock布局由多个区块组成。有几种类型的区块，每个区块可以与怪物的**属性**相关联。

可以通过点击“添加区块”按钮将区块添加到布局中，然后可以选择区块的类型。一旦区块被添加到布局中，可以通过点击“编辑区块”按钮来编辑它，当鼠标悬停在区块上时，该按钮会出现；也可以通过点击“删除区块”按钮来删除它。

此外，可以通过点击拖动手柄并将其拖动到其他位置来移动区块。

### 创建块

布局块具有**类型**，类型决定了它的渲染方式和可用的选项。一旦创建了一个块，它的类型就无法更改。

块还具有会影响其渲染方式的**属性**。

#### 块属性

除了[group](#group-blocks)和[inline](#inline-blocks)之外，所有块都将具有以下属性字段：

| 属性                  | 描述                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------- |
| Link Monster Property | 块将尝试访问怪物对象上的“property”（例如，“name”）的属性。                                |
| Conditional           | 如果将块设置为条件，则如果属性不存在，则不会呈现该块。                                   |
| Fallback              | 如果属性不存在但块未被条件限制，则显示备用内容。                                       |
| Has Rule              | 在属性后将显示一条水平线。                                                             |
| Parse for Dice\*      | 插件将尝试从块中解析常见的骰子投掷字符串。                                               |
| Link Dice to Property | 布局将使用提供的属性生成骰子投掷器。                                                     |
| Dice Callback\*†      | 可以提供JavaScript代码来确定如何解析骰子的字符串。                                       |

<sup>\* 需要插件。</sup><br/>
<sup>† 高级选项。</sup>

特定的块类型可能具有其他属性字段。

此外，块还有“高级选项”。高级选项允许您提供JavaScript回调来解析怪物属性，并应返回字符串。

#### 分组块

分组块允许将多种不同类型的块组合在一起。可以使用上下文菜单（三个点）或将块拖放到方框中来添加其他块到分组块中。

#### 内联块

内联块类似于组块，但是组块内部的块将会水平排列而不是垂直排列。可以使用上下文菜单（三个点）或将块拖动到方框中来添加其他块到组块中。

#### 标题块

标题块将以较大的字体呈现文本（例如基本5e布局的名称）。

> 属性类型必需：标题块应指向一个字符串类型的怪物属性。

#### 子标题块

子标题块用于较小的属性，例如基本5e布局中的怪物类型。

子标题块允许将多个怪物属性与其关联。

> 属性类型必需：子标题块应指向可以转换为字符串的怪物属性。插件将递归地将非字符串项转换为字符串。

#### 图像块

如果链接属性是指向图像的链接，图像块将显示该图像。该链接应该是指向存储库中图像的Obsidian内部链接。也可以使用指向外部网站的链接，但可能会遇到隐私设置的问题。

> 属性类型必需：图像块应该指向一个怪物属性，该属性将是一个字符串。

#### 属性块

属性块是标准的块。它将显示怪物的属性名称和属性的值 - 例如，`Armor Class: 16`。

> 属性类型必需：属性块应指向可以转换为字符串的怪物属性。插件将递归地将非字符串项转换为字符串。

属性块还有一个额外的高级选项，可以提供一个回调函数来解析属性并将其用作字段的值。回调函数将接收怪物对象和插件作为参数。

例如，基本的5e布局的熟练加值属性使用此选项来确定其属性值：

```js
if ("cr" in monster && monster.cr in plugin.CR) {
    return `+${Math.floor(2 + ((plugin.CR[monster.cr]?.value ?? 0) - 1) / 4)}`;
}
return "";
```

#### 保存属性

保存属性用于显示保存属性和技能保存属性，例如：`力量：+3`。

> 属性类型必需：保存属性块应指向一个怪物属性，该属性是一个字符串数字对的**对象**，例如：

````
```statblock
saves:
  - strength: 3
  - dexterity: 5
```
````

#### 法术块

法术块是插件显示法术的方式。有关法术块属性的格式，请参阅[法术部分](#spellcasting)。

#### 表格块

表格块将显示一个包含标题和值的表格。

表格块有一个额外的块属性叫做“表头”。**布局只会显示有表头的值。** 这意味着如果你的怪物属性有6个值，但你只指定了5个表头，**只有前五个值会被显示。**

> 属性类型要求：表格块应该指向一个怪物属性，该属性是一个**数字数组**。

#### 特征块

特征块是插件显示动作、反应和特征等内容的方式。

特征块还有一个额外的可选块属性，称为“节标题”。这将在特征显示之前添加到状态块中。

> 属性类型必需：特征块应指向一个怪物属性，该属性是一个**由[string, string]值组成的数组**。

### 在布局中使用骰子掷子器

您可以将骰子掷子器插件集成到您的状态块中，从而可以进行掷骰子。此集成需要以下步骤：

1. 安装并启用[Dice Roller](https://github.com/valentine195/obsidian-dice-roller)插件。
2. 在设置中启用[集成骰子掷子器](#integrate-dice-roller)。
3. 切换要解析的块的[解析骰子](#block-properties)块属性。

然后，插件将尝试解析常见的骰子掷子字符串。插件默认解析以下字符串：

1. 攻击命中（`+15 to hit`）
2. 伤害/治疗（`19 (2d10 + 8)`）
3. 救援（`力量 +5`）

或者，您可以在[链接骰子到属性](#block-properties)块属性中指定一个怪物的属性作为骰子字符串。这应该是一个骰子字符串，例如`5d10 + 50`。

#### 骰子回调

如果打开了[高级选项](#show-advanced-options)，您还可以为该块提供一个`骰子回调`函数。这允许您解析属性字符串以获取您想要的_确切_骰子点数。

回调函数将接收`plugin`、`monster`和`property`参数。

布局可以在[此讨论](https://github.com/valentine195/obsidian-5e-statblocks/discussions/41)中共享。

将布局添加到插件中可以通过打开一个拉取请求来完成。

您应该在[layouts](src/layouts)文件夹中添加一个新的布局文件，并将布局添加到[layout index](src/layouts/index.ts)文件的`DefaultLayout`导出中。

# 设置

启用导出为PNG

该插件将添加一个选项，可以将渲染的统计块导出为PNG文件。

插件将与Dice Roller插件集成，并将骰子投掷结果添加到渲染的统计块中。

渲染骰子掷骰将默认使用图形化骰子。

尝试渲染维基链接

该插件将解析 statblock 中的所有文本，并尝试将任何维基链接渲染为 Obsidian 链接。

请注意：这些链接不会出现在图表上！

## 注意解析

### 解析生物的前言

该插件将自动解析在[Bestiary Folder](#bestiary-folder)中指定的文件夹中的生物。

如果关闭了该功能，可以使用"Parse Frontmatter for Creatures"命令来告诉插件解析生物。

### 图鉴文件夹

该插件只会解析该文件夹中的生物文件。

布局

### 默认布局

插件在渲染统计块时将默认使用此布局。

显示高级选项

编辑布局块将显示额外的高级选项。

导入生物

自制生物可以从这里的各种来源导入。

## 魔法生物

一个包含当前怪物手册中所有生物的列表。

可以在此处使用YAML或JSON [创建](#creating-creatures-in-settings) 其他生物。

在此部分可以对生物进行筛选、删除、编辑和预览。

# 安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## 来自GitHub

- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`  
  注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
  否则，请前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

您可以按照相同的步骤来更新插件。

# 警告

该插件没有稳定性保证，可能会导致数据丢失的错误。
请确保您有自动备份。

# TTRPG插件

如果您正在使用Obsidian来运行/计划TTRPG，您可能会发现我的其他插件很有用：

- [Obsidian Leaflet](https://github.com/valentine195/obsidian-leaflet-plugin) - 在Obsidian.md笔记中添加交互式地图
- [Dice Roller](https://github.com/valentine195/obsidian-dice-roller) - 在Obsidian.md中进行内联掷骰
- [Initiative Tracker](https://github.com/valentine195/obsidian-initiative-tracker) - 在Obsidian中跟踪TTRPG的先攻顺序



归属

第13纪元社区许可披露
Fantasy Statblocks使用Fire Opal Media Inc.拥有的商标和/或版权，这些商标和/或版权在Fire Opal Media Inc.的第13纪元社区使用政策下使用。
我们被明确禁止向您收费以使用或访问此内容。
Fantasy Statblocks未经Fire Opal Media Inc.的出版、认可或特别批准。

### PF2E社区使用披露
Fantasy Statblocks使用Paizo Inc.拥有的商标和/或版权，根据Paizo的社区使用政策(paizo.com/communityuse)使用。
我们被明确禁止向您收费以使用或访问此内容。
Fantasy Statblocks未经Paizo的出版、认可或特别批准。
有关Paizo Inc.和Paizo产品的更多信息，请访问paizo.com。



