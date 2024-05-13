---
uid: 20230929120029
title: Dataview 中的字符串操纵函数
tags: [obsidian, 插件, dataview, 语法, function]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240506104846
---

# Dataview 中的字符串操纵函数

谈到字符串，绕不开的就是 [正则表达式]([正则表达式 – 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/regexp/regexp-tutorial.html))，你可以自己花半个钟学习一下正则表达式的简单语法，也可以抛出要求让 AI 替你写对应的正则表达式。

> [!cite] 为什么使用正则表达式？
>典型的搜索和替换操作要求您提供与预期的搜索结果匹配的确切文本。虽然这种技术对于对静态文本执行简单搜索和替换任务可能已经足够了，但它缺乏灵活性，若采用这种方法搜索动态文本，即使不是不可能，至少也会变得很困难。
>
>通过使用正则表达式，可以：
>
> - 试字符串内的模式。
> 例如，可以测试输入字符串，以查看字符串内是否出现电话号码模式或信用卡号码模式。这称为数据验证。
> - 替换文本。
> 可以使用正则表达式来识别文档中的特定文本，完全删除该文本或者用其他文本替换它。
>- 基于模式匹配从字符串中提取子字符串。
> 可以查找文档内或输入域内特定的文本。
>
> 例如，您可能需要搜索整个网站，删除过时的材料，以及替换某些 HTML 格式标记。在这种情况下，可以使用正则表达式来确定在每个文件中是否出现该材料或该 HTML 格式标记。此过程将受影响的文件列表缩小到包含需要删除或更改的材料的那些文件。然后可以使用正则表达式来删除过时的材料。最后，可以使用正则表达式来搜索和替换标记。

### `regextest(pattern, string)`

- **功能**：

字符串的正则匹配，判断字符串是否满足给定的 pattern 模式。（使用 JavaScript regex 引擎）。

- **输入**：pattern, string

需要输入一个用于判断的正则表达式以及一个待判断的字符串。如果字符串**存在符合正则表达式的部分**则返回 true，否则返回 false。

- **示例**：

```
regextest("what", "what's up dog?") // 字符串中存在 "what"，返回 true
```

`\w` 匹配字母、数字、下划线。等价于 `[A-Za-z0-9_]`，`+` 代表前面的字符必须至少出现一次（1 次或多次）

```
regextest("\w+", "hello")   // "hello" 有字母满足匹配，返回 true
```

`.` 匹配除换行符（`\n`、`\r`）之外的任何单个字符，相等于 `[^\n\r]`。

```
regextest(".", "a")   // "a" 中无 \n 和 \r，返回 true
```

`|` 指明两项之间的一个选择。要匹配 `|`，请使用 `\|`。

```
regextest("yes|no", "maybe") // "maybe" 中没有 "yes" 或 "no"，返回 false
```

### `regexmatch(pattern, string)`

- **功能**：

使用 JavaScript regex 引擎检查给定的 regex 模式**是否匹配整个字符串**。

> [!tip] 注意
> 这与 `regextest()` 不同，`regextest()` 只需要匹配文本的一部分就会返回 true，而 `regexmatch()` 需要整个字符串都匹配。

- **输入**：pattern, string

需要输入一个用于判断的正则表达式以及一个待判断的字符串。如果**整个字符串符合正则表达式**则返回 true，否则返回 false。

- **示例**：

语法的解释可以看上一个函数的示例

```
regexmatch("\w+", "hello")             // 全部为字母，返回 true
regexmatch(".", "a")                   // "a" 中没有换行符，返回 true
regexmatch("yes|no", "maybe")          // 返回 false
regexmatch("what", "what's up dog?")   // 只有一部分为 "what"，返回 false
```

### `regexreplace(string, pattern, replacement)`

- **功能**：

**替换**字符串中所有与 regex 模式匹配的情况。底层使用了 JavaScript 替换方法，因此可以使用特殊字符，如 `$1` 匹配第一个 [捕获组](https://www.runoob.com/w3cnote/java-capture-group.html) 等。

- **输入**：string, pattern, replacement

三个输入值分别代表，待替换的字符串，用于匹配的正则表达式以及用于替换匹配部分的替代物。

- **示例**：

```
regexreplace("yes", "[ys]", "a")  // 用 "a" 替换了 "y" 和 "s"，结果为 "aea"
```

`\d` 代表的是匹配数字，加号代表匹配前一个字符的一个或者多个，因此 `\d+` 代表匹配一个或多个数字，例如 `a1000` 会有**一部分**被匹配， `1a1` 会有**两部分**被匹配。

```
regexreplace("Suite 1000", "\d+", "-") // 用 "-" 替换了 1000，结果为 "Suite -"
```

### `replace(string, pattern, replacement)`

- **功能**：

用新字符串替代所有旧字符串中的某些部分。用 "replacement" 替换 "string" 中的所有 "pattern".

- **输入**：string, pattern, replacement

三个输入值分别为：待替换的字符串，用于匹配的字符串以及用于替换匹配部分的替代物。

- **示例**：

用 "h" 替换 "what" 中的所有 "wh"

```
replace("what", "wh", "h") \\ 结果为 "hat"
```

用 "small" 替换 "The big dog chased the big cat." 中的所有 "big"

```
replace("The big dog chased the big cat.", "big", "small") 
\\ 结果为 "The small dog chased the small cat."
```

用 "no" 替换 "test" 中的所有 "test"

```
replace("test", "test", "no") // 结果为 "no"
```

### `lower(string)`

- **功能**：

将字符串转换为全小写。

- **输入**：string
- **示例**：

```
lower("Test") // 全部小写的结果为 "test"
lower("TEST") // 全部小写的结果为 "test"
```

### `upper(string)`

- **功能**：

将字符串转换为全大写。

- **输入**：string
- **示例**：

```
upper("Test") // 全部大写的结果为 "TEST"
upper("test") // 全部大写的结果为 "TEST"
```

### `split(string, delimiter, [limit])`

- **功能**：

==根据给定的分隔符分割字符串==。如果提供第三个参数，则会限制分割的次数。分隔符字符串被解释为正则表达式。如果分隔符中有 [捕获组](https://www.runoob.com/w3cnote/java-capture-group.html)，匹配的捕获组会被拼接到结果数组中，不匹配的捕获组则为空字符串。（可以理解为==如果用了捕获组，分割后将保留分隔符==）

> [!cite] 捕获组
> 捕获组就是把正则表达式中子表达式匹配的内容，保存到内存中以数字编号或显式命名的组里，方便后面引用。当然，这种引用既可以是在正则表达式内部，也可以是在正则表达式外部。

- **输入**：string, delimiter, [limit]

三个参数分别代表：待分割字符串，分隔符，限制分割的次数（可有可无）

- **示例**：

以空格 " " 为分隔符分割 "hello world"

```
split("hello world", " ") \\ 结果为 ["hello", "world"]
```

`\s` 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 `[ \f\n\r\t\v]`。

```
split("hello  world", "\s") // 结果为 ["hello", "world"]
```

以空格 " " 分割并且只留两个

```
split("hello there world", " ", 2) \\ 结果为 ["hello", "there"]
```

`?` 代表前一个字符可以出现 0 次或 1 次。`()` 用于标记一个子表达式的开始和结束位置。例如 `(t?here)` 可以匹配 `there` 或者 `here`。同时因为用了捕获组，捕获组会被保留。

```
split("hello there world", "(t?here)") 
\\ 捕获组 "there" 会保留，结果为 ["hello ", "there", " world"]
```

不匹配的捕获组则为空字符串。两个捕获组中，只有前一个捕获组 `( )` 能匹配上，后者 `(x)` 一直不匹配，保留为空字符。

```
split("hello there world", "( )(x)?") 
\\ 结果为 ["hello", " ", "", "there", " ", "", "world"]
```

### `startswith(string, prefix)`

- **功能**：

检查字符串是否以给定的前缀开头。

- **输入**：string, prefix

输入待匹配字符串和用于判断的前缀字符串。如果前缀匹配则返回 true，否则返回 false.

- **示例**：

```
startswith("yes", "ye") 
// "ye" 是字符串 "yes" 的前缀，返回 true

startswith("path/to/something", "path/") 
// "path/" 是 字符串 "path/to/something" 的前缀，返回 true

startswith("yes", "no")
// "no" 不是字符串 "yes" 的前缀，返回 false
```

### `endswith(string, suffix)`

- **功能**：

检查字符串是否以给定的后缀开头。

- **输入**：string, suffix

输入待匹配字符串和用于判断的后缀字符串。如果后缀匹配则返回 true，否则返回 false.

- **示例**：

```
endswith("yes", "es") = true
// "es" 是字符串 "yes" 的后缀，返回 true

endswith("path/to/something", "something") 
// "something" 是 字符串 "path/to/something" 的后缀，返回 true

endswith("yes", "no")
// "no" 不是字符串 "yes" 的后缀，返回 false
```

### `padleft(string, length, [padding])`

- **功能**：

通过在字符串左侧添加填充，将字符串填充到所需长度。如果没给定填充字符，则默认使用空格。

- **输入**：string, length, [padding]

在 string 左侧填充 padding（默认为空格）至 length 长度。

- **示例**：

```
padleft("hello", 7) 
\\ 把 "hello" 填充到长度为 7，没有给定填充字符默认用空格填充，结果为 "  hello"

padleft("yes", 5, "!")
\\ 把 "yes" 填充到长度为 5，给定填充字符为 "!"，结果为 "!!yes"
```

### `padright(string, length, [padding])`

- **功能**：

等同于 padleft，但在字符串的右侧填充。

- **输入**：string, length, [padding]

在 string 右侧填充 padding（默认为空格）至 length 长度。

- **示例**：

```
padright("hello", 7) = "hello  "
\\ 把 "hello" 填充到长度为 7，没有给定填充字符默认用空格填充，结果为 "hello  "

padright("yes", 5, "!")
\\ 把 "yes" 填充到长度为 5，给定填充字符为 "!"，结果为 "yes!!"
```

### `substring(string, start, [end])`

- **功能**：

字符串的切片，从 start 开始，到 end 结束。（如果未指定，则到字符串的末尾）类似于 `string[start,end]`。

- **输入**：string, start, [end]

输入值为待处理字符串，切片起始位置，切片终止位置（可有可无，默认到末尾）

- **示例**：

```
substring("hello", 0, 2)   \\ 截取 0~2 这个片段的字符串，结果为 "he"
substring("hello", 2, 4)   \\ 截取 2~4 这个片段的字符串，结果为 "ll"
substring("hello", 2)      \\ 截取 2~末尾 这个片段的字符串，结果为 "llo"
substring("hello", 0)      \\ 截取 0~末尾 这个片段的字符串，结果为 "hello"
```

### `truncate(string, length, [suffix])`

- **功能**：

==将字符串截断为给定长度，包括后缀==（默认为...）。一般用于截断表格中的长文本。如果截断长度大于字符串原有长度，不会补全，会返回原字符串。

- **输入**：string, length, [suffix]

输入值为待处理字符串，截断的长度以及后缀（可有可无，默认为...）

- **示例**：

```
truncate("Hello there!", 8)          \\ 保留8位，结果为 "Hello..."
truncate("Hello there!", 8, "/")     \\ 保留8位，以 "/" 作为后缀，结果为 "Hello t/"
truncate("Hello there!", 10)         \\ 保留10位，结果为 "Hello t..."
truncate("Hello there!", 10, "!")    \\ 保留10位，以 "!" 作为后缀，结果为 "Hello the!"
truncate("Hello there!", 20)         \\ 保留20位，不够不会补全，结果为 "Hello there!"
```