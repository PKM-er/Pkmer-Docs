---
uid: 20230803213244
title: Obsidian 插件：【Readme】Source Code Note
tags: ['obsidian插件', 'readme']
description: 帮助您轻松组织源代码注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Source Code Note

> [!Note] 插件名片
> - 插件名称：Source Code Note
> - 插件作者：Waiting
> - 插件说明：帮助您轻松组织源代码注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/waiting0324/obsidian-code-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?source-code-note)

## 概述

帮助您轻松组织源代码注释。

![Source Code Note](https://cdn.pkmer.cn/covers/source-code-note_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/waiting0324/obsidian-code-note/master/README.md)
> 

---

## Readme(翻译）

下面是 [[source-code-note]] 插件的自述翻译



# Obsidian源代码笔记插件

[Chinese Documentation](./README-zh.md)

技术支持 [AntV X6](https://x6.antv.antgroup.com/)

## 功能

- 解析Obsidian笔记中的代码块，绘制方法调用链接的图形，并将代码块保留在画布上以便于查看
![演示](img/demo.gif)

如何使用

### 1. 在Markdown的代码块的代码注释部分，使用关键字写入相关信息

| 支持的关键字 | 效果                          |
| ------------ |-----------------------------|
| @class       | 对应方法的类名                    |
| @function    | 方法名                        |
| @call        | 调用相关方法，支持多个方法。格式：类名 @ 方法名 |

**示例**

```Java
/** 
 * 注册元数据字符串。
 * 
 * @class ShenyuClientHttpRegistryController
 * @function registerMetadata(@RequestBody final MetaDataRegisterDTO metaDataRegisterDTO)
 * @call RegisterClientServerDisruptorPublisher @ publish(final DataTypeParent data)
 * 
 * @param metaDataRegisterDTO 元数据注册DTO  
 * @return 字符串  
 */
@PostMapping("/register-metadata")  
@ResponseBody  
public String registerMetadata(@RequestBody final MetaDataRegisterDTO metaDataRegisterDTO) {  
    // 通过 Publisher 注册 元数据对象  
    publisher.publish(metaDataRegisterDTO);  
    return ShenyuResultMessage.SUCCESS;  
}
```

```Java
/** 
 * 注册元数据字符串。 
 * 
 * @class RegisterClientServerDisruptorPublisher
 * @function publish(final DataTypeParent data)
 * 
 * @param metaDataRegisterDTO 元数据注册DTO  
 * @return 字符串  
 */
@Override  
public void publish(final DataTypeParent data) {  
    // 获取 DisruptorProvider 
    DisruptorProvider<Collection<DataTypeParent>> provider = providerManage.getProvider();  
    // 调用 DisruptorProvider 的 onData 方法，发送数据  
    provider.onData(Collections.singleton(data));  
}
```

### 2. 点击Obsidian左侧的按钮打开画布



