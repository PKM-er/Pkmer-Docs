---
uid: 20230803204808
title: Obsidian 插件：【Readme】Style Settings
tags: ['样式工具', '界面相关', '美化', 'obsidian插件', 'readme']
description: 为主题、插件提供图形化设置，很多主题和插件作者会提供一些样式功能样式，都可以通过此插件调整。
author: mgmeyers
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Style Settings

> [!Note] 插件名片
> - 插件名称：Style Settings
> - 插件作者：mgmeyers
> - 插件说明：为主题、插件提供图形化设置，很多主题和插件作者会提供一些样式功能样式，都可以通过此插件调整。
> - 插件分类：['样式工具', '界面相关', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mgmeyers/obsidian-style-settings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-style-settings)

## 概述

为主题、插件提供图形化设置，很多主题和插件作者会提供一些样式功能样式，都可以通过此插件调整。

![Style Settings](https://cdn.pkmer.cn/covers/obsidian-style-settings.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mgmeyers/obsidian-style-settings/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-style-settings]] 插件的自述翻译


# Obsidian Style Settings 插件

该插件允许片段、主题和插件的 CSS 文件定义一组配置选项。然后，它允许用户在一个设置面板中查看所有可调整的设置。Style Settings 允许在 `body` 元素上切换类的开启和关闭，以及设置数字、字符串和颜色的 CSS 变量。

**[这个 CSS Snippet](obsidian-default-theme.css) 可用于调整默认 Obsidian 主题的每个 CSS 变量。**

可配置的设置由 CSS 文件中以 `/* @settings` 开头的注释定义。这些注释必须包含带有 `name`、`id` 和 `settings` 属性的 YAML。Style Settings 将扫描 Obsidian 加载的所有 CSS 文件以查找这些注释。

例如，将以下内容添加到您的 vault 中的 CSS Snippet 中：

```css
/* @settings

name: Your Section Name Here
id: a-unique-id
settings:
    - 
        id: my-title
        title: My Settings
        type: heading
        level: 3
    - 
        id: accent
        title: Accent Color
        type: variable-color
        format: hsl-split
        default: '#007AFF'
    - 
        id: text
        title: UI font
        description: Font used for the user interface
        type: variable-text
        default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

*/
```

将会得到：

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-style-settings/main/screenshots/example01.png" alt="Example output of plugin" />

每个设置定义必须用破折号（`-`）分隔。有 7 种设置类型。

所有设置定义必须具有以下参数：

- `id`：设置参数的唯一标识符
- `title`：设置的名称
- `description`（可选）：设置的描述
- `type`：设置的类型。可以是以下之一：
  - `heading`：用于组织设置的标题元素
  - `class-toggle`：在 `body` 元素上切换类的开关
  - `class-select`：下拉菜单，用于在 `body` 元素上添加预定义选项的类
  - `variable-text`：基于文本的 CSS 变量
  - `variable-number`：数值型 CSS 变量
  - `variable-number-slider`：由滑块表示的数值型 CSS 变量
  - `variable-select`：以下拉菜单形式显示的基于文本的 CSS 变量，包含预定义选项
  - `variable-color`：带有相应颜色选择器的颜色 CSS 变量

## `heading`

`heading`可以用来将设置组织和分组到可折叠的嵌套部分中。除了必需的属性外，`heading`必须包含一个介于`1`和`6`之间的`level`属性，并且可以选择包含一个`collapsed`属性：

```css
/* @settings

name: 在这里输入您的部分名称
id: 一个唯一的ID
settings:
    - 
        id: 这是一个标题
        title: 我的标题
        type: heading
        level: 2
        collapsed: true

*/
```

## `class-toggle`

`class-toggle`会在`body`元素上切换一个CSS类，允许CSS主题和片段切换功能的开启和关闭。设置的`id`将被用作类名。`default`参数可以选择设置为`true`。

```css
/* @settings

name: 在这里输入您的部分名称
id: 一个唯一的id
settings:
    - 
        id: my-css-class
        title: 我的切换
        description: 将my-css-class添加到body元素
        type: class-toggle

*/
```

## `class-select`

`class-select`创建了一个预定义选项的下拉菜单，用于CSS变量。设置的`id`将被用作变量名。

- 当`allowEmpty`为`false`时，**必须**指定一个`default`选项。
- 当`allowEmpty`为`true`时，`default`属性是可选的，可以设置为`none`。

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: theme-variant
        title: 主题变体
        description: 主题的变化
        type: class-select
        allowEmpty: false
        default: my-class
        options:
            - my-class
            - my-other-class
            - and-yet-another

*/
```

选项也可以添加标签：

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: theme-variant
        title: 主题变体
        description: 主题的变化
        type: class-select
        allowEmpty: false
        default: my-class
        options:
            - 
                label: 我的类
                value: my-class
            - 
                label: 我的其他类
                value: my-other-class
*/
```

## `variable-text`

`variable-text`代表任何基于文本的CSS值。设置的`id`将被用作变量名。`variable-text`设置需要一个`default`属性。

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: text
        title: UI字体
        description: 用于用户界面的字体
        type: variable-text
        default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

*/
```

这将输出变量：

```
--text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
```

## `variable-number`

`variable-number`代表任何数字型的CSS值。设置的`id`将被用作变量名。`variable-number`设置需要一个`default`属性。可选地，可以设置一个`format`属性。这个值将被附加到数字后面。例如，`format: px`将会得到`42px`。

```css
/* @settings

name: 在这里填写你的部分名称
id: 一个唯一的id
settings:
    - 
        id: line-width
        title: 线宽
        description: 最大线宽，以rem为单位
        type: variable-number
        default: 42
        format: rem

*/
```

这将输出变量：

```
--line-width: 42rem;
```

`variable-number-slider`表示任何数字型的CSS值。设置的`id`将被用作变量名。`variable-number-slider`设置需要一个`default`属性，以及以下三个属性：

- `min`：滑块的最小可能值
- `max`：滑块的最大可能值
- `step`：滑块每个“刻度”的大小。例如，步长为100将只允许滑块以100的增量移动。

可选地，可以设置一个`format`属性。这个值将附加到数字后面。例如，`format: px`将得到`42px`

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: line-width
        title: 线宽
        description: 最大线宽，以rem为单位
        type: variable-number-slider
        default: 42
        min: 10
        max: 100
        step: 1

*/
```

这将输出变量：

```
--line-width: 42;
```

`variable-select`创建了一个预定义选项的下拉菜单，用于CSS变量。设置的`id`将被用作变量名。`variable-select`设置需要一个`default`属性以及一个`options`列表。

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: text
        title: UI字体
        description: 用于用户界面的字体
        type: variable-select
        default: Roboto
        options:
            - Roboto
            - Helvetica Neue
            - sans-serif
            - Segoe UI

*/
```

选项可以选择性地添加标签：

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    - 
        id: text
        title: UI字体
        description: 用于用户界面的字体
        type: variable-select
        default: Roboto
        options:
            - 
                label: 最好的字体
                value: Roboto
            - 
                label: 次好的字体
                value: Helvetica Neue
*/
```

这将输出变量：

```css
--text: Roboto;
```

## `variable-color`

`variable-color`创建了一个带有多种输出格式选项的颜色选择器。`hex`或`rgb`格式的`default`属性是必需的。**注意：hex颜色值必须用引号括起来。**`format`属性也是必需的。

可选参数：
- 将`opacity`设置为`true`将在所有输出格式中启用透明度支持。
- 可以通过`alt-format`设置提供备用输出格式的列表

```css
/* @settings

name: 在这里输入您的部分名称
id: 一个唯一的id
settings:
    - 
        id: accent
        title: 强调颜色
        type: variable-color
        opacity: false
        format: hex
        alt-format:
            -
                id: accent-rgb
                format: rgb
        default: '#007AFF'

*/
```

这将输出变量：

```
--accent: #007AFF;
--accent-rgb: rgb(0, 123, 255);
```

## `variable-themed-color`

`variable-themed-color`与`variable-color`相同，只是它生成了两个颜色选择器，用于生成浅色和深色变体。

```css
/* @settings

name: 在此处输入您的部分名称
id: 一个唯一的ID
settings:
    - 
        id: accent
        title: 强调颜色
        type: variable-themed-color
        format: hex
        opacity: false
        default-light: '#007AFF'
        default-dark: '#2DB253'

*/
```

这将输出以下变量：

```
body.theme-light.css-settings-manager { --accent: #007AFF; } 
body.theme-dark.css-settings-manager { --accent: #2DB253; }
```

### `variable-color` 格式选项

有7个格式选项：

- `hex`

```
--accent: #007AFF;
```

当 `opacity` 设置为 `true` 时：

```
--accent: #007AFFFF;
```

- `rgb`

```
--accent: rgb(0, 122, 255);
```

当 `opacity` 设置为 `true` 时：

```
--accent: rgba(0, 122, 255, 1);
```

- `rgb-values`

```
--accent: 0, 122, 255;
```

当 `opacity` 设置为 `true` 时：

```
--accent: 0, 122, 255, 1;
```

- `rgb-split`

```
--accent-r: 0;
--accent-g: 122;
--accent-b: 255;
```

当 `opacity` 设置为 `true` 时：

```
--accent-r: 0;
--accent-g: 122;
--accent-b: 255;
--accent-a: 1;
```

- `hsl`

```
--accent: hsl(211, 100%, 50%);
```

当 `opacity` 设置为 `true` 时：

```
--accent: hsla(211, 100%, 50%, 1);
```

- `hsl-values`

```
--accent: 211, 100%, 50%;
```

当 `opacity` 设置为 `true` 时：

```
--accent: 211, 100%, 50%, 1;
```

- `hsl-split`

```
--accent-h: 211;
--accent-s: 100%;
--accent-l: 50%;
```

当 `opacity` 设置为 `true` 时：

```
--accent-h: 211;
--accent-s: 100%;
--accent-l: 50%;
--accent-a: 1;
```

`color-gradient`函数会在两个已存在的颜色变量之间的渐变中输出固定数量的颜色。还需要一个`format`属性。*注意：必须在样式设置中设置`to`变量才能生成渐变。此外，渐变只会使用在当前样式设置`id`下定义的颜色。*

参数：
- `from`：起始颜色，或者在步骤0处的颜色
- `to`：结束颜色，或者在步骤100处的颜色
- `step`：输出CSS变量的增量。例如，将`step`设置为`10`将输出`--var-0`，`--var-10`，`--var-20`等...
- `format`：可以是以下之一：`hsl`，`rgb`或`hex`；
- `pad`?：当设置时，变量的数字部分将用`0`填充，直到包含指定的位数。例如，将`pad`设置为`3`，`step`设置为`10`将输出`--var-000`，`--var-010`，`--var-020`

```css
/* @settings

name: 在这里输入你的部分名称
id: 一个唯一的id
settings:
    -
        id: color-base
        type: color-gradient
        from: color-base-00
        to: color-base-100
        step: 5
        pad: 2
        format: hex

*/
```

本地化支持

可以通过使用以下后缀为Obsidian支持的每种语言提供标题和描述的翻译：

```
en: 英语
zh: 简体中文
zh-TW: 繁體中文
ru: 俄语
ko: 韩语
it: 意大利语
id: 印度尼西亚语
ro: 罗马尼亚语
pt-BR: 巴西葡萄牙语
cz: 捷克语
de: 德语
es: 西班牙语
fr: 法语
no: 挪威语
pl: 波兰语
pt: 葡萄牙语
ja: 日语
da: 丹麦语
uk: 乌克兰语
sq: 阿尔巴尼亚语
tr: 土耳其语（部分）
hi: 印地语（部分）
nl: 荷兰语（部分）
ar: 阿拉伯语（部分）
```

例如：

```
```css
/* @settings

name: 在这里输入您的部分名称
id: 一个唯一的ID
settings:
    - 
        id: my-css-class
        title: 我的切换
        title.de: 我的切换
        title.ko: 내 토글
        description: 将my-css-class添加到body元素
        description.de: 将my-css-class添加到body元素
        description.ko: my-css-class를 body 요소에 추가합니다.
        type: class-toggle

*/
```
```



