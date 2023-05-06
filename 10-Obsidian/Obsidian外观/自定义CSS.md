---
uid: 20230329145808
title: 自定义 CSS
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230504213041
public: yes
---

# 自定义 CSS

如果你正在设计你个性化的 CSS，你可以通过使用开发者工具来获得更多元素信息，提高设计效率。使用开发者工具

- 在 Windows 或 Linux 下，使用快捷键 `Ctrl+Shift+I`；
- 在 macOS 下，使用快捷键 `Cmd+Opt+I` 即可。

按下后会出现类似下图的样式。不用被这些代码吓住，这其实就是当前页面的 css 代码。

![image.png](https://cdn.pkmer.cn/images/202305042054692.png)

比如这里你想修改标题颜色只需要点击这个箭头

![image.png](https://cdn.pkmer.cn/images/202305042055323.png)

然后把鼠标指向要修改的元素，这里指向标题

![image.png](https://cdn.pkmer.cn/images/202305042057355.png)

这里的 `span.cm-header.cm-header-1` 就是标题对应的 css 选择器。

同时左侧调试窗口的内容也变成了 标题对应的 css 设置。

![image.png](https://cdn.pkmer.cn/images/202305042100564.png)

在这里我们发现一条规则 `.HyperMD-header-1, .inline-title[data-level='1'], .HyperMD-list-line .cm-header-1` 里面包含了 .cm-header-1 就是我们要修改的选择器。

```css
.HyperMD-header-1, .inline-title[data-level='1'], .HyperMD-list-line .cm-header-1 {
    font-variant: var(--h1-variant);
    letter-spacing: -0.015em;
    line-height: var(--h1-line-height);
    font-size: var(--h1-size);
    color: var(--h1-color);
    font-weight: var(--h1-weight);
    font-style: var(--h1-style);
    font-family: var(--h1-font);
}
```

通过字母含义不难看出 color 就是负责颜色的。 这里的值为 `var(--h1-color)` 其实用了 css 的高级写法，我们先不用管它怎么写，双击 `var(--h1-color)` 这个值，删除后浏览器预设一些颜色值，可供选择，这里的颜色可以输入名称，也支持十六进制色值。

![image.png](https://cdn.pkmer.cn/images/202305042108839.png)

设置好颜色后，会立马在 Obsidian 看到修改后的效果，但这个只是临时效果，重启后就消失了，要永久生效，需要把规则保存为 css 代码片段。

对这条 css 右键 - 复制规则，即可把 css 片段内容复制到剪贴板中。

![image.png](https://cdn.pkmer.cn/images/202305042111606.png)

`

新建一个 css 文件 比如 my.css 把复制的内容粘贴进去，保存即可。

然后参考这里 [[Obsidian的 css代码片段|Obsidian css代码片段]] 启用 my.css 片段 就可以看到效果了。

## 延伸阅读

修改样式目前有下面几种途径
- 使用社区主题，根据主题带的设置项调整
- 根据上面教程 自己找到 css 选择器，自己写 css 片段
- 找到别人分享的 css 片段的内容，复制到自己的片段中
- 通过 style setting 插件修改，建议安装 [[obsidian-style-settings]] 并使用默认主题片段 ![[obsidian-style-settings#^992e4d]]
