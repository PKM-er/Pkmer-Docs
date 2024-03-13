---
uid: 2023080322241337
title: Obsidian 插件：OpenWeather
tags: ['obsidian插件', 'readme']
description: 该插件以可配置的字符串格式返回OpenWeather的当前天气。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：OpenWeather

> [!Note] 插件名片
> - 插件名称：OpenWeather
> - 插件作者：willasm
> - 插件说明：该插件以可配置的字符串格式返回 OpenWeather 的当前天气。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/willasm/obsidian-open-weather)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-weather)

## 概述

该插件以可配置的字符串格式返回 OpenWeather 的当前天气。

![OpenWeather](https://cdn.pkmer.cn/covers/open-weather.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/willasm/obsidian-open-weather/master/README.md)

---

## Readme(翻译）

下面是 [[open-weather]] 插件的自述翻译

# Obsidian 的 OpenWeather 插件

## 特点

- 在状态栏中显示当前天气
- 将当前天气插入到您的文档中
- 提供四个可自定义的天气字符串
- 可自定义的状态栏天气字符串
- [模板支持](#template-support)，可自动将天气插入到您的新文档中
- [DIV支持](#div-support)，实现动态天气显示

默认天气字符串与示例截图

#### **状态栏字符串**

`' | %desc% | 当前温度：%temp%°C | 体感温度：%feels%°C | '`

![状态栏](/images/Statusbar-1.png)

`'%desc% • 当前温度：%temp%°C • 体感温度：%feels%°C\n'`

![Format One](/images/Format1-1.png)

'%name%: %dateMonth4% %dateDay2% - %timeH2%:%timeM% %ampm1%\n 当前温度: %temp%°C • 体感温度: %feels%°C\n 风速: %wind-speed% km/h，来自 %wind-dir%^，阵风可达 %wind-gust% km/h^\n 日出时间: %sunrise% • 日落时间: %sunset%\n'

#### **天气格式字符串三**

`'%icon%&nbsp;%dateMonth4% %dateDay2% %dateYear1% • %timeH2%:%timeM% %ampm1% • %desc%<br>&nbsp;记录温度：%temp% • 体感温度：%feels%<br>&nbsp;风速：%wind-speed% 公里/小时，来自%wind-dir%^，阵风高达%wind-gust% 公里/小时^<br>&nbsp;日出时间：%sunrise% • 日落时间：%sunset%'`

![格式三](/images/Format3-1.png)

#### **天气格式字符串四**

`'%icon%&nbsp;%dateMonth4% %dateDay2% %dateYear1% • %timeH2%:%timeM% %ampm1% • %desc%<br>&nbsp;当前温度：%temp% • 体感温度：%feels%<br>&nbsp;风速：%wind-speed% 公里/小时，来自 %wind-dir%^，阵风可达 %wind-gust% 公里/小时^<br>&nbsp;日出时间：%sunrise% • 日落时间：%sunset%'`

![格式四](/images/Format4-1.png)

#### **在 DIV 中使用格式字符串三和四，并使用 CSS 进行样式化**

格式字符串三...

![格式三](/images/Format3-2.png)

格式字符串四...

![格式四](/images/Format4-2.png)

注意：在设置中编辑时不需要 `\n`。只需输入 `return` 以添加新行，保存的设置文件中将添加 `\n`。字符串格式 3 和 4 中的 `<br>` 在 HTML 中使用时是必需的。

请参阅 [EXAMPLE.md](EXAMPLE.md) 以了解我如何在我的每日模板中使用此功能的示例。

## 设置

#### **输入位置**

输入您所在城市的名称（必填）

#### **OpenWeather API 密钥**

在此处输入您的 OpenWeather API 密钥（必填）

插件需要一个免费的 OpenWeather API 密钥才能正常工作。

请访问<https://openweathermap.org>进行注册并获取密钥。

注册页面的直接链接为<https://home.openweathermap.org/users/sign_up>。

注意：您需要验证您的电子邮件地址，然后您的 API 密钥将通过电子邮件发送给您。密钥本身可能需要几个小时才能激活。所有这些信息都将包含在他们发送给您的电子邮件中。

#### **度量单位**

可以在这里选择标准、公制和英制单位。（注意：标准单位是开尔文，在大多数情况下并不实用）

#### **排除文件夹**

要从自动 [模板](#template-support) 字符串替换中排除的文件夹。这应该设置为您的保险库模板文件夹。

#### **天气字符串格式化**

在这里定义你的天气字符串（最多可用 4 个字符串）

提示：这些字符串可以包含任何你想要的内容，不仅仅是天气信息。

#### **在状态栏中显示天气** 注意：此功能不会在移动应用程序上显示

切换在状态栏中显示当前天气的开关

#### **天气字符串格式状态栏** 注意：此内容不会在移动应用上显示

在这里定义您的状态栏天气字符串

#### **更新频率**

在状态栏和 [DIV](#div-support) 中显示的天气更新的时间间隔（1、5、10、15、20、30 或 60 分钟）

## 天气字符串占位符

这些宏将在天气字符串中被相应的数据替换。

- 天气描述 `%desc%`
- 天气图标 `%icon%` - 请参阅下面的注释
- 当前温度 `%temp%`
- 体感温度 `%feels%`
- 最低温度 `%tempmin%`
- 最高温度 `%tempmax%`
- 大气压力 `%pressure%`
- 湿度 `%humidity%`
- 海平面气压 `%pressure-sl%`
- 地面气压 `%pressure-gl%`
- 能见度 `%visibility%`
- 风速 `%wind-speed%` - 公制单位为千米/小时，英制单位为英里/小时
- 风向 `%wind-dir%` - 例如：西北风
- 阵风 `%wind-gust%` - 请参阅下面的注释
- 日出时间 `%sunrise%` - 08:30:30（24 小时制）
- 日落时间 `%sunset%` - 19:30:30（24 小时制）
- 城市名称 `%name%` - 例如：埃德蒙顿
- 云量 `%clouds%`（百分比）
- 过去 1 小时降雨量 `%rain1h%`（毫米）
- 过去 3 小时降雨量 `%rain3h%`（毫米）
- 过去 1 小时降雪量 `%snow1h%`（毫米）
- 过去 3 小时降雪量 `%snow3h%`（毫米）
- 过去 1 小时降水量 `%precipitation1h%`（毫米 - 雨或雪）
- 过去 3 小时降水量 `%precipitation3h%`（毫米 - 雨或雪）
- （日期和时间）- OpenWeather API 可用的最新数据信息的日期和时间
  - 年份 1 `%dateYear1%` - 2022
  - 年份 2 `%dateYear2%` - 22
  - 月份 1 `%dateMonth1%` - 1
  - 月份 2 `%dateMonth2%` - 01
  - 月份 3 `%dateMonth3%` - 一月
  - 月份 4 `%dateMonth4%` - January
  - 日期 1 `%dateDay1%` - 02
  - 日期 2 `%dateDay2%` - 2
  - 上午/下午 1 `%ampm1%` = "AM"
  - 上午/下午 2 `%ampm2%` = "am"
  - 小时 1 `%timeH1%` - 23（24 小时制）
  - 小时 2 `%timeH2%` - 1（12 小时制）
  - 分钟 `%timeM%` - 05
  - 秒钟 `%timeS%` - 05
- ### 天气占位符注释
  - `%Icon%` - 这将被图像标签 `<img src={Icon Url} />` 替换。如果它嵌入在 [div](#div-support) 代码块中，将更加有用。
  - `%wind-gust%` 只有当条件存在时，API 才会返回这个数据。如果你希望在字符串中将这个数据设为可选项，可以用尖括号括起来。
  - 例如：`风速 %wind-speed% km/h^，阵风可达 %wind-gust% km/h^`
  - 带有阵风数据时，将转换为：`风速 10 km/h，阵风可达 20 km/h`
  - 没有阵风数据时，将转换为：`风速 10 km/h`（尖括号括起来的阵风文本将被删除）

## OpenWeather 插件命令

- `插入天气格式一` - 将天气格式字符串一插入到当前文档中。
- `插入天气格式二` - 将天气格式字符串二插入到当前文档中。
- `插入天气格式三` - 将天气格式字符串三插入到当前文档中。
- `插入天气格式四` - 将天气格式字符串四插入到当前文档中。
  - 注意：如果在运行这些命令时在当前文档中选择了文本，它将被插入的天气字符串替换。
- `替换模板字符串` - 这将用相应定义的天气字符串替换所有出现的字符串 `%weather1%`、`%weather2%`、`%weather3%` 和 `%weather4%`。另请参见 [模板支持](#template-support)。

## 模板支持

您可以在模板中放置以下字符串，当使用模板创建新文档时，它们将自动替换为相应的天气字符串。

- `%weather1%` - 插入天气字符串格式一
- `%weather2%` - 插入天气字符串格式二
- `%weather3%` - 插入天气字符串格式三
- `%weather4%` - 插入天气字符串格式四

## DIV 支持

您可以在文档中插入以下 DIV，以提供动态天气，该天气将根据 [设置_更新频率_](#update-frequency) 中设置的频率进行更新。请参阅 [EXAMPLE.md](EXAMPLE.md) 以了解我如何在我的每日模板中使用它们的演示。

```html
<div class="weather_current_1"></div>
```

您可以使用以下类来插入相应的天气字符串格式：

- "weather_current_1" 插入天气字符串格式一
- "weather_current_2" 插入天气字符串格式二
- "weather_current_3" 插入天气字符串格式三
- "weather_current_4" 插入天气字符串格式四

### 重要提示

这还需要您在要显示当前天气的笔记的 frontmatter 中添加以下行...

```
---
cssclass: openweather
---
```

然后将以下 css 片段（将其命名为 'openweather.css' 或您喜欢的任何名称）添加到您的 vault 片段文件夹 `vault-name/.obsidian/snippets`（如果不存在，请创建 snippets 文件夹）...

不要忘记在设置/外观中启用片段（在底部）。

请随意修改此片段以实现您想要的布局...

```css
.openweather {
    padding-left: 25px !important;
    padding-right: 25px !important;
    padding-top: 20px !important;
}

/* 当前天气一、二、三和四的设置 */
/* 这些不是必需的，但演示了如何样式化天气字符串 */
.weather_current_1, .weather_current_2, .weather_current_3, .weather_current_4 {
    display: flex;
    float: left;
    clear: left;
    color: #c4caa5;
    background-color: #133e2c;
    align-items: center;
    top: 80px;
    left: 35px;
    position: absolute;
    font-family: monospace;
    font-size: 14pt !important;
    margin: 10px 5px;
    padding: 10px 20px;
    box-shadow: 3px 3px 2px #414654;
}
```