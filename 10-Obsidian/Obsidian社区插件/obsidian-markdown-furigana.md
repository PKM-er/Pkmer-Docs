---
uid: 20230329145808
title: Obsidain 插件：Markdown Furigana（日文学习如何增加假名）
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidain 插件：Markdown Furigana（日文学习如何增加假名）

学习日文时经常需要知道汉字的发音（假名），Markdown Furigana 插件可以很方便的输入与显示振假名（振り反名／ふりがな），同时也能处理注音符号与汉语拚音。

> [!Note] 插件名片
> - 插件名称：Markdown Furigana
> - 插件作者：Steven Kraft
> - 插件说明：日语书写中给对应的汉字生成注音假名
> - 插件项目地址：[点我跳转](https://github.com/steven-kraft/obsidian-markdown-furigana)

## 语法

{漢字|かんじ}，{漢字|ㄏㄢ ˋ|ㄗ ˋ}，{漢字|han|zi}

{地球|ほし} {漢|おとこ} {強敵|とも} {本気|マジ} {凝視|みつめ} る

![Pasted image 20230126195656](https://cdn.pkmer.cn/images/7507a79e4a47f4178e9b57e126ac5c4f_MD5.png)

1. {漢字|ㄏㄢ ˋ ㄗ ˋ}： {漢字|ㄏㄢ ˋ ㄗ ˋ}

```
    <ruby>漢字<rt>ㄏㄢˋㄗˋ</rt></ruby>
```

1. {漢字|ㄏㄢ ˋ|ㄗ ˋ}：{漢字|ㄏㄢ ˋ|ㄗ ˋ}

```
<ruby>漢<rt>ㄏㄢˋ</rt>字<rt>ㄗˋ</rt></ruby>
```

![Pasted image 20230126195843](https://cdn.pkmer.cn/images/5ab1ca163822e3dd4fb2695d5762f43b_MD5.png)

## 扩展阅读

HTML 标签 ruby

> ruby (印刷用字)

> 旁注标记（ruby character），或称注音标示、加注音、Ruby 字元、ruby 或 rubi，是一种表意文字的音标印刷方式，广泛地运用于日文及中文。一般这些字是放于表意文字的上方或右边，作为文字的拼音或注释。

### 样式 ruby-position

#### 注音样式在上

```
<ruby  style="ruby-position:over">漢字<rt>ㄏㄢˋ ㄗˋ</rt></ruby>
```

#### 注音样式在下

```
<ruby  style="ruby-position:under">漢字 <rt>ㄏㄢˋㄗˋ </rt></ruby>
```
