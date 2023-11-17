---
uid: 20231027184031
title: Obsidian 插件：CodeBlock Tabs 为连续的 CodeBlocks 创建标签组样式
tags:
  - obsidian插件
description: Obsidian 插件：CodeBlock Tabs 为连续的 CodeBlocks 创建标签组样式
author: OS
type: basic
draft: false
editable: false
modified: 20231117115756
---

# Obsidian 插件：CodeBlock Tabs 为连续的 CodeBlocks 创建标签组样式

> [!Note] 插件名片
> - 插件名称：CodeBlock Tabs
> - 插件作者：Jemin Mau
> - 插件说明：为连续的 CodeBlocks 创建标签组样式
> - 插件分类：['obsidian 插件 ',' 代码域 ',' 美化 ']
> - 项目地址：[点我访问](https://github.com/JeminMau/Obsidian-CodeBlock-Tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codeblock-tabs)

## 概述

为连续的代码域（CodeBlocks）创建标签组，非常适合几个事情：

- 比如一段代码需要多种语言编写，记录不同的语言书写内容
- 比如一个功能，多种语言的实现方式

## 效果&特性

![CodeBlock Tabs](https://cdn.pkmer.cn/covers/codeblock-tabs.gif!pkmer)

## 用法

~~~markdown
```dataview {'title':"Top-10"}
table lang
from "halloworld"
sort lang asc
limit 10
```

```Python {'title':'hallo.py'}
print("Hello World")
```

```Java {'title':'hallo.java'}
import java.io.*;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
```

```Go {'title':'hallo.go'}
println('Hello World");
```

```Cpp {'title':'hallo.cpp'}
#include <iostream>
 
int main() {
    std::cout << "Hello World";
    return 0;
}
```

```JavaScript {'title':'hallo.js'}
console.log("Hello World");
```

```TypeScript {'title':'hallo.ts'}
console.log 'Hello World'
```

```C {'title':'hallo.c'}
#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
```

```Rust {'title':'hallo.rs'}
fn main() {
    println!("Hello, world!");
}
```

```Swift {'title':'hallo.swift'}
println('Hello World');
```

```HTML {'title':'hallo.html'}
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1>Hello World<h1>
    </body>
</html>
```
~~~

