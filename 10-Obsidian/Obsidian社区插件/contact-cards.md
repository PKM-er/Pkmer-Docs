---
uid: 20250113164642
title: Obsidian 插件：Contact Cards 简约风的联系人卡片
tags: []
description: Obsidian 插件：Contact Cards 简约风的联系人卡片
author: OS
type: basic
draft: false
editable: false
modified: 20250113170428
---

# Obsidian 插件：Contact Cards 简约风的联系人卡片

## 概述

> [!Note] 插件名片
> - 插件名称：Contact Cards
> - 插件版本：2.2.3
> - 插件作者：Bryan Stone
> - 插件描述：简约漂亮的联系人卡片
> - 插件项目地址：[obsidian-copilot](https://github.com/aegixx/obsidian-contact-cards)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contact-cards)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20250113165331.png!pkmer)

- 精美的 UI 格式：以简洁卡片式布局显示名称，标题，公司，电子邮件和电话号码等信息
- 简单的语法：只需提供一个带有 YAML 字段的代码块即可，插件将处理其余的样式生成
- 自定义：通过修改插件的 CSS 或创建自己的 Obsidian CSS 片段来调整样式。
- 强大的集成：
	- 根据电子邮件地址自动填充的照片
	- 根据电子邮件域（提供公司名称时）拉动公司徽标
	- 可点击字段以获取更多上下文（电话，电子邮件，位置等）

## 使用

简单的使用范例

```contact-card
	name: Bryan Stone
	email: bryan@steampunk.dev
	company: Steampunk Labs
	title: Founder & Managing Partner
	phone: 2565551234
	location: Madison, AL
```

## 自定义

### 自定义样式

obsidian-contact-cards 插件提供了几个可定制的 CSS 类来帮助你使用更加个性化名片的外观。你可以在自己的样式表中覆盖这些样式，以创建自定义的外观。下面是可用的类及其用途

可用的 CSS class：

- `.contact-card-content`：卡片的外容器，用于布局和尺寸
- `.contact-card`：用于存放个人资料图像、徽标和联系信息的内部容器
- `.contact-card-photo`：联系人的个人资料照片图像
- `.contact-logo` 卡上显示的公司徽标
- `.contact-card-info`：用于存储联系人姓名、职务、公司和其他信息的容器
- `.contact-card-name`：联系人的姓名
- `.contact-card-title`：联系人的头衔/职位
- `.contact-card-separator`：联系人信息中各部分之间的分隔符（例如，姓名和公司之间）
- `.contact-card-error`：联系人卡片分隔符
- `.contact-error` ：应用于显示错误消息的元素

动画样式

- `.contact-card-content`：使用 `Animatop` 动画将背景形状滑入视图
- `.contact-card:after`：卡片后面显示的背景形状