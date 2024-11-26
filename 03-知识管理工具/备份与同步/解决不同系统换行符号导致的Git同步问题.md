---
uid: 20241122001017
title: 解决不同系统换行符号导致的 Git 同步问题
tags: [Obsidian]
description: 解决不同系统换行符号导致的 Git 同步问题
author: Moy
type: other
draft: false
editable: false
modified: 20241124225616
aliases: [CRLF Issue]
create_date: 2024-11-22T00:10
modified_date: 2024-11-24T22:08
---

# 解决不同系统换行符号导致的 Git 同步问题

## 说明

首先，这篇文章不是写给大多数用户的，它只适用于满足这两种情况用户：

1. 首先你使用多平台（Windows 和 iOS/macOS/Linux）
2. 其次使用的同步中包括 Git

在上述的情况下，你通常会遇到行末尾差异造成的大量无效同步，虽然不影响内容，但是看着很烦。

在 Github 客户端中，它会显示成这样：

![](https://cdn.pkmer.cn/images/202411242252142.jpg!pkmer)

所谓 `Only whitespace changes found`。

而这篇文章就是为了解决这个问题。

## 结论

首先，一句话总结：==所有系统都使用 LF 作为换行符==

Windows 早年是 `CRLF`，大部分时候冲突也是这个导致的。

苹果和 Linux 都是 `LF`，Obsidian 默认的换行符也是 `LF` [^1]。

而且比起 `CRLF` 所需的 ` \r\n `，`LR` 单独一个 ` \n ` 更清爽，所以总之，我们统一用 `LF`。

那么就有几个步骤要做。

## 配置 Git

在 `.gitattributes` 文件内：

```text
# Auto detect text files and perform LF normalization
* text=auto eol=lf

# 来自：https://forum.obsidian.md/t/being-able-to-select-line-endings-crlf-lf/5294/14
*.md text eol=lf
*.txt text eol=lf
*.css text eol=lf
*.js text eol=lf
*.json text eol=lf
*.py text eol=lf
```

——这样就指定了所有常用文本文件的换行都统一使用 `LF`。

另外，自动转换方面，讨论贴提到的另一个问答 [^2] 中提到了：

```shell
git config --global core.autocrlf false
```

这个的意思就是 **不自动转换行末尾**。

就按这个配置，命令行运行一下。

也可以用 `git config --get core.autocrlf` 来查询当前的配置。

## 重新规范化

```shell
git rm --cached -r .
git reset --hard
git add .
```

（下面这些是 AI 回答）

`git reset --hard` 是一个比较危险的命令，它会：

1. 将当前分支的 HEAD 重置到最后一次提交的状态
2. 同时会重置暂存区（staging area）
3. **最重要的是：会强制重置工作目录中的所有文件到最后一次提交的状态**

这意味着：

- 所有未提交的修改都会被丢弃
- 所有未暂存的更改都会被丢弃
- 工作目录会完全匹配最后一次提交的状态

我为之前直接建议使用这个命令道歉，这可能会导致数据丢失。对于行尾符号的处理，我们可以使用更安全的方式：

```shell
# 1. 首先提交当前的更改（如果有的话）
git add .
git commit -m "Save current changes"

# 2. 然后重新规范化文件
git add --renormalize .
git commit -m "Normalize line endings"
```

## 清理提交记录

最后，Git 上如果因为同步已经出现了一堆的 `Only whitespace changes found` 的文件的话：

![](https://cdn.pkmer.cn/images/202411242252143.jpg!pkmer)

可以用：

```shell
git add --renormalize .
```

这个命令来将所有的文件都转成配置中设置的——也就是上面我们写的—— `LF` 换行符。

这样一来，理论上整个 Git 库里的文件就都是统一的符号了。

然后我们 Windows 上的各个文本编辑器也都统一使用 LF 换行，理应就没啥大问题了。

[^1]: 关于这个的讨论贴：[【Bug】: CRLF would be replaced by LF · Issue ＃164 · Vinzent03/obsidian-git](https://github.com/Vinzent03/obsidian-git/issues/164)
[^2]: StackOverflow 上的问答： [eol - git commit get fatal error "fatal: CRLF would be replaced by LF in" - Stack Overflow](https://stackoverflow.com/questions/20168639/git-commit-get-fatal-error-fatal-crlf-would-be-replaced-by-lf-in/20168775#20168775)