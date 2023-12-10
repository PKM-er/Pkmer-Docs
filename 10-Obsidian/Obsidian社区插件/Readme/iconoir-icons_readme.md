---
uid: 2023120719305359
title: Obsidian 插件：【Readme】Iconoir Icons
tags: ['obsidian插件', 'readme']
description: 一个用于创建和显示定制的SVG Iconoir图标的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Iconoir Icons

> [!Note] 插件名片
> - 插件名称：Iconoir Icons
> - 插件作者：@gapmiss
> - 插件说明：一个用于创建和显示定制的 SVG Iconoir 图标的插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gapmiss/iconoir-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?iconoir-icons)

## 概述

一个用于创建和显示定制的 SVG Iconoir 图标的插件。

![Iconoir Icons](https://cdn.pkmer.cn/covers/iconoir-icons.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gapmiss/iconoir-icons/main/README.md)
>

---

## Readme(翻译）

下面是 [[iconoir-icons]] 插件的自述翻译

# iconoir-icons

一个用于在 [Obsidian](https://obsidian.md) 中创建和显示自定义 SVG [Iconoir Icons](https://iconoir.com/) 的插件。

> ⚠️ 注意
>
> 版权所有 (c) 2023 Luca Burgio - <https://iconoir.com;> 许可证 - <https://github.com/lucaburgio/iconoir/blob/main/LICENSE> (代码：MIT 许可证)

## 特点

### 图标搜索建议

![iconoir suggester](https://cdn.pkmer.cn/covers/iconoir-icons_2_0.gif!pkmer)

### 自定义 `CSS` 样式

![iconoir suggester](https://cdn.pkmer.cn/covers/iconoir-icons_2_1.gif!pkmer)

## 语法

要触发图标名称建议界面，请连续按两次和号键（`&&`），然后开始输入查询。

图标组件的语法如下：

```markdown
`~![ICON|COLOR|W|H|STYLE]`

分隔符是管道符号 `|`。

ICON   = 图标的名称，例如 iconoir-peace-hand
COLOR  = 图标的 CSS 颜色，例如 purple
W      = 图标的 CSS 宽度，例如 1em
H      = 图标的 CSS 高度，例如 1em
STYLE  = 图标组件的 CSS 规则，例如 float:right;

只有 ICON 名称是必需的。其他所有参数都是可选的，但不能留空。

`~![iconoir-peace-hand|purple|1em|1em|float:right;]`
```

请参阅 `examples` 目录以获取其他示例代码。

### 基本块

```markdown
阿尔法 布拉沃 `~![iconoir-antenna|green|22px|22px]` 查理 德尔塔 `~![iconoir-wristwatch|red|22px|22px]` 伊科 福克斯特罗特 高尔夫 `~![iconoir-golf|green|22px|22px]` 酒店 印度 朱利叶特 基洛 `~![iconoir-airplane|red|22px|22px]` 利马 迈克 南尼亚 `~![iconoir-calendar|magenta|22px|22px]` 奥斯卡 帕帕 魁北克 罗密欧 西尔拉 `~![iconoir-compass|var(--color-orange)|22px|22px]` 坦戈 统一 维克多 `~![iconoir-dashboard-dots|red|22px|22px]` 惠斯基 克斯雷 燕克 奥斯卡
```

#### 结果

![基本块的屏幕截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_2.png!pkmer)

```markdown
`~![iconoir-leaf|green|48px|48px|float:right;]` lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi bibendum commodo congue. vivamus efficitur aliquam felis, id viverra eros blandit sit amet. nam feugiat purus ac sem aliquam, sit amet dictum dui bibendum. sed tincidunt porttitor odio at feugiat. cras sed viverra libero. suspendisse potenti. nulla eu ullamcorper quam, in tempus nulla. quisque accumsan euismod finibus.
```

#### 结果

![区块部分的截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_3.png!pkmer)

### 列表

```markdown
- `~![iconoir-rocket|var(--color-purple)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
- `~![iconoir-rocket|var(--color-yellow)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
- `~![iconoir-rocket|var(--color-red)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
- `~![iconoir-rocket|var(--color-blue)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
- `~![iconoir-rocket|var(--color-green)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
- `~![iconoir-rocket|var(--color-orange)]` 阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 高尔夫
```

#### 结果

![列表截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_4.png!pkmer)

```markdown
- [ ] `~![iconoir-calendar-minus|currentColor]` 任务列表 一个任务列表 一个任务列表
- [ ] `~![iconoir-calendar-plus|currentColor]` 任务列表 一个任务列表 一个任务列表
- [ ] `~![iconoir-check-circle|currentColor]` 任务列表 一个任务列表 一个任务列表
- [ ] `~![iconoir-clipboard-check|currentColor]` 任务列表 一个任务列表 一个任务列表
- [ ] `~![iconoir-redo-circle|currentColor]` 任务列表 一个任务列表 一个任务列表
- [ ] `~![iconoir-refresh-circular|currentColor]` 任务列表 一个任务列表 一个任务列表
```

#### 结果

![任务截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_5.png!pkmer)

### 标题

# `~！[iconoir-code-brackets|currentColor]` 一个带有 Iconoir 图标的标题

## 一个带有 Iconoir 图标的标题 `~![iconoir-code|currentColor]`

### 一个带有 Iconoir 图标的标题 `~![iconoir-code-brackets|currentColor]`

#### 一个带有 Iconoir 图标的标题 `~![iconoir-code-brackets|orange]`

##### `~！[iconoir-code-brackets|red|1.5em|1.5em]` 一个带有 Iconoir 图标的标题

###### 一个带有 Iconoir 图标的标题 `~![iconoir-code|green|1.5em|1.5em]`

#### 结果

![标题的截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_6.png!pkmer)

### 引用样式块

```markdown
`~![iconoir-brain|currentColor|48px|48px]` **Lorem Ipsum Dolor Sit Amet** consectetur adipiscing elit. morbi bibendum commodo congue. vivamus efficitur aliquam felis, id viverra eros blandit sit amet. nam feugiat purus ac sem aliquam, sit amet dictum dui bibendum. sed tincidunt porttitor odio at feugiat. cras sed viverra libero. suspendisse potenti. nulla eu ullamcorper quam, in tempus nulla. quisque accumsan euismod finibus.
```

```css
p:has(iconoir-icon[name=iconoir-brain]) {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  color: var(--text-muted);
  border-radius: 6px;
  border: 2px dashed var(--color-purple);
  padding: 9px 18px;
  background-color: rgba(var(--color-purple-rgb), 0.15);
  text-align: justify;
}
iconoir-icon[name=iconoir-brain] {
  color:var(--color-purple);
  display:flex;
  margin-right: 7px;
}
strong {
  color:var(--color-purple);
  font-size: 1.88em;  
  text-align: center;
  flex-grow: 1;
}
```

#### 结果

![callout的屏幕截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_7.png!pkmer)

### 表格

> **注意：** 在表格中使用图标时，需要使用反斜杠 `\` 转义 PIPE `|` 符号
> 例如：`\|`

```markdown
|                  图标                  | 名称         |
|:--------------------------------------:| ------------ |
| `~![iconoir-bread-slice\|saddlebrown]` | bread-slice  |
| `~![iconoir-peace-hand\|currentColor]` | peace-hand   |
|     `~![iconoir-pizza-slice\|red]`     | pizza-slice  |
| `~![iconoir-wifi\|var(--color-cyan)]`  | wifi         |
```

### 结果

![html表格的截图](https://cdn.pkmer.cn/covers/iconoir-icons_2_8.png!pkmer)

### 支持额外的 `CSS` 类

- 当在 `<th>` 或 `<td>` 内使用图标时，会向元素添加 `special-iconoir-th-callout` 或 `special-iconoir-td-callout` 的 CSS 类。
- 当在 `<li>` 内使用图标时，会向元素添加 `special-iconoir-list-callout` 的 CSS 类。
- 此外，还会向相同的元素添加一个 `data-icon` 属性，其中包含图标名称，以增加特定性。

```html
<td class="special-iconoir-th-callout" data-icon="iconoir-heart">
 <icon-component>
</td>

<li class="special-iconoir-list-callout" data-icon="iconoir-peace-hand">
 <icon-component>
</li>
```

## 插件安装

从 Obsidian 的设置或首选项中：

1. ~~社区插件 > 浏览~~
2. ~~搜索 "iconoir"~~

或者：

1. 下载最新的 [发布存档](https://github.com/gapmiss/iconoir-icons/releases/download/1.0.0/iconoir-icons.zip)
2. 解压下载的存档
3. 将 `iconoir-icons` 文件夹移动到 `/path/to/vault/.obsidian/plugins/`
4. 设置 > 社区插件 > 重新加载 **已安装的插件**
5. 启用插件

或者：

1. 下载 `dist/main.js`、`manifest.json` 和 `styles.css`
2. 创建一个新文件夹 `/path/to/vault/.obsidian/plugins/iconoir-icons`
3. 将所有 3 个文件移动到 `/path/to/vault/.obsidian/plugins/iconoir-icons`
4. 设置 > 社区插件 > 重新加载 **已安装的插件**
5. 启用插件

## 截图

![iconoir-icons-light](https://cdn.pkmer.cn/covers/iconoir-icons_2_9.png!pkmer)

![iconoir-icons-dark](https://cdn.pkmer.cn/covers/iconoir-icons_2_10.png!pkmer)

发展

### 克隆这个仓库

```bash
cd /path/to/vault/.obsidian/plugins
git clone https://github.com/gapmiss/iconoir-icons.git
cd iconoir-icons
```

### 安装包并运行

```bash
npm i
npm run dev
```

### 启用插件

1. 打开 `设置` → `社区插件`
2. 启用 `Iconoir Icons` 插件。

## 注意事项

- 2023 年 2 月 9 日 目前没有已知的注意事项。
- 2023 年 5 月 27 日 目前没有已知的注意事项。



