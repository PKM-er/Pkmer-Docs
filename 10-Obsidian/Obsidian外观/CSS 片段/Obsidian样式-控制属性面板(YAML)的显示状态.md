---
uid: 20240413004540
title: Obsidian 样式 - 控制属性面板 (YAML) 的显示状态
tags: [YAML, properties, CSS自定义]
description: 该 CSS 用来详细调节 Yaml 在编辑模式、阅读模式和源码模式下的显示状态，您可以通过 Style Setting 插件灵活地控制 Yaml 的显示状态，使编辑、阅读和查看源码时更符合您的需求。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240417174817
---

# Obsidian 样式 - 控制属性面板 (YAML) 的显示状态

该 CSS 用来详细调节 Yaml 在编辑模式、阅读模式和源码模式下的显示状态，您可以通过 Style Setting 插件灵活地控制 Yaml 的显示状态，使编辑、阅读和查看源码时更符合您的需求。

![2024-04-07_Obsidian样式-控制属性面板(YAML)的显示状态_IMG-1](https://cdn.pkmer.cn/images/202404130047873.png!pkmer)

> [!tip] 如果想取消隐藏可以通过命令面板来控制修改
> ![2024-04-07_Obsidian样式-控制属性面板(YAML)的显示状态_IMG-2](https://cdn.pkmer.cn/images/202404130047875.png!pkmer)

> [!caution] 实时和阅读模式控制的前提是设置中文档属性保持显示
> ![2024-04-07_Obsidian样式-控制属性面板(YAML)的显示状态_IMG-3](https://cdn.pkmer.cn/images/202404130047876.png!pkmer)

## Tip：可以配置 Commander 按钮方便控制

![2024-04-07_Obsidian样式-控制属性面板(YAML)的显示状态_IMG-4](https://cdn.pkmer.cn/images/202404171747562.gif!pkmer)

```css
/* @settings
name: 【Properties】控制Yaml的显示情况
id: 【Properties】控制Yaml的显示情况
settings:
-
  id: hide-yaml
  title: 显示或隐藏YAML(Properties)
  type: class-toggle
  addCommand: true
  default: true
- 
  id: 3种模式的YAML的详细显示状态设置
  title: 3种模式的YAML的详细显示状态设置
  type: heading
  level: 2
  collapsed: true
-
  id: hide-preview-yaml
  title: 隐藏阅读模式下的YAML(Properties)
  type: class-toggle
  default: true
-
  id: hide-source-yaml
  title: 隐藏实时模式下的YAML(Properties)
  type: class-toggle
  default: true
-
  id: hide-cm-yaml
  title: 隐藏源码模式下的YAML(Properties)
  type: class-toggle
  default: true
*/

/* 阅读模式和实时模式 */
.hide-yaml.hide-preview-yaml .markdown-preview-view.show-properties .metadata-container,
.hide-yaml.hide-source-yaml .markdown-source-view.is-live-preview.show-properties .metadata-container {
  display: none;
}

.hide-yaml.hide-cm-yaml .cm-line:has(.cm-hmd-frontmatter) {
  height: 0px;
  opacity: 0;
}

/* ref: [隐藏frontmatter段的CSS代码 - 疑问解答 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/32576/2) */
```

## Reference

- [隐藏frontmatter段的CSS代码 - 疑问解答 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/32576/2)
