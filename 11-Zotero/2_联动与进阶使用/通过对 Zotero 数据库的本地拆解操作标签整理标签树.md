---
uid: 20240210014131
title: 通过对 Zotero 数据库的本地拆解操作标签整理标签树
tags: [zotero]
description: 通过对 Zotero 数据库的本地拆解操作标签整理标签树
author: darkluna999
type: other
draft: false
editable: false
modified: 20240210014738
---

# 通过对 Zotero 数据库的本地拆解操作标签整理标签树

## 起因

在初期没有好好设计标签树，当想要重新设计标签树的时候又觉得逐一修改过于麻烦，而且 zotero 的标签管理器不像 ob 一样有树形批量枝干替换的操作方式，于是突发奇想，使用 SQL 直接操作本地数据库来进行重整数据库的操作

## 准备工作

1. 首先我们需要连接到数据库，由于 Zotero 使用的后端是 Sqlite3，具有独占锁，我们需要关闭 Zotero 本体以释放连接后再进行接入
2. 为求简便，本例中仅以 beekeeper 程序来作为 SQL 操作台，其余环境除连接方式可有差异外，SQL 操作几乎无差别
3. **先给 zotero.sqlite 文件做个备份**
4. 将 zotero.sqlite 文件拖拽入 beekeeper，此处可自动完成连接
5. 基础界面如下 ![[Pasted image 20240210014407.png]]

## 设计标签树结构

首先列出库内全部手动标签并排序

```SQL
SELECT *
FROM tags
WHERE tagId IN (
        SELECT tagId
        FROM itemTags
        WHERE itemTags.type = 0 -- 控制为修改全部手动标签
    )
ORDER BY name
```

此处可以用 Download 按钮导出需要的格式并设计自己需要的标签树以便在下面查询并修改

## 确定查询修改

在 SQL 区域输入 SQL 命令后点击 RUN 按钮或 Ctrl+enter

```SQL
SELECT *
FROM tags
WHERE tagId IN (
        SELECT tagId
        FROM itemTags
        WHERE itemTags.type = 0 -- 控制为修改全部手动标签
    )
    AND name LIKE '%CS%'; -- 修改标签中含有'CS'字样的标签 不区分大小写
```

![[Pasted image 20240210014315.png]]

这一环节来确认是不是自己要修改的标签，这里是通过：

1. `%CS%` 表示前后文通配以 like 模式筛选含 CS 字样的标签
2. `itemTags` 表示条目标签
3. `itemTags.type` 来进行区分
    - 1-- 自动标签（导入自己添加的标签、ZoteroTag 插件形成的标签）
    - 0-- 手动标签（自己手动添加的标签）

## 进行修改

```SQL
update tags
-- SET name = name || 'Add' -- 添加Add在后
-- SET name = 'Add' || name -- 添加Add在前
-- SET name = REPLACE(name, 'from', 'change') -- 替换from为change change若为''则为移除from字样
set name=replace(name,'CS','AX') -- 此处不要使用通配不然很可能引起一些悲剧
WHERE tagId IN (
        SELECT tagId
        FROM itemTags
        WHERE itemTags.type = 0
    )
    AND name like '%CS%';
```

![[Pasted image 20240210014423.png]]

`SET` 语句表示对符合查询的该组结果的标签进行修改

`||` 在 sqlite 中类似表示字符串的 `+` 操作

`replace` 则是替代操作，注意规避 SQL 命令中的关键字

这里体现出 beekeeper 这类操作台的几点好处

1. 会自动高亮语法与关键字
2. 命令自动事务，免于提交

当让如果使用的控制台不支持命令自动事务的话，在完成上述全部指令后需要执行事务提交来完成更改

```SQL
COMMIT;
```
