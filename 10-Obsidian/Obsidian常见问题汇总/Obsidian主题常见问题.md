---
uid: 20230601185441
title: Obsidian 主题常见问题
tags: [Obsidian, 主题, 常见问题, BT示例库, Bluetopaz]
description: Obsidian主题常见问题
author: PKMer
type: other
draft: false
editable: false
modified: 20241124224423
---

# Obsidian 主题常见问题

如果以下内容还不能满足你：

你还可以在线自助提问文档，填写自己的问题， [在线自助提问文档](https://docs.qq.com/aio/DYUlpY0Z6Rk5kR29t?p=QuUSv1WjxMj56Gpeps0J8r)

## 样式的问题

### ob 怎么用 tab 输入制表符而不是行首缩进呀？(by 熊猫)

答：在设置面板的编辑器下方的使用制表符中开启

![24.11.23_ObsidianFAQ整理记录 on 24-11-23_18.16.00.md](https://cdn.pkmer.cn/images/202411231816830.png!pkmer)

[增强编辑](https://github.com/obsidian-canzi/Enhanced-editing) 的设置

![24.11.23_ObsidianFAQ整理记录 on 24-11-23_18.16.00.md](https://cdn.pkmer.cn/images/202411231816563.png!pkmer)

### 如何在 MAC 中添加外部字体到 Ob 中 (by 熊猫)

使用 **custom font loader** 插件后，把字体放在 `.obsidian/font` 文件夹中即可，(PS：文件夹不存在就自己新建一个)

正常的更换字体直接在设置中的外观选项中更换字体里面设置就行：

![24.11.23_ObsidianFAQ整理记录 on 24-11-23_18.16.00.md](https://cdn.pkmer.cn/images/202411231816260.png!pkmer)

### 如何在 Obsidian 中进行段落首行缩进？(by 熊猫 23.12.06)

答：可以通过修改 CSS 的方式进行：Obsidian 样式：段落首行增加缩进

但 Markdown 语法最好不用采用段落首行缩进，更多的是通过换行 (中间空一行) 来实现段落之间的区别，详看上述链接的引言部分。

> [⚠️一次首行缩进的争论带来的反思](https://windilycloud.cn/post/%E4%B8%80%E6%AC%A1%E4%BA%89%E8%AE%BA%E5%B8%A6%E6%9D%A5%E7%9A%84%E5%8F%8D%E6%80%9D/) (by 皮佬 23.12.09)

### 在 Obsidian 中显示 Lateχ公式 `\\` 换行不生效 (by 阿岑)

```css
mjx-mspace {
	display: block !important;
	margin: 0.5em 0;
}
```

### Obsidian 如何进行分栏 (by 熊猫)

答：请参考 [Obsidian 如何制作多栏布局](https://pkmer.cn/show/20230603162524)：通过插件或者 CSS 来实现分栏样式

#### Minimal 主题的 Card list 样式

PKMer 社区中已经介绍了该样式以及使用，但该 [Obsidian 能像其他笔记样分栏嘛 MCL Multi Column](https://pkmer.cn/show/20230603163007) 对该样式介绍的不全，以及安装和配置过程没有详细说明，还需要添加添加官方介绍文档<https://efemkay.github.io/obsidian-modular-css-layout/>

#### Minimal 主题的 Card list 样式

Obsidian 样式：minimal 主题 Cards 卡片布局，详情可以参考 PKMer 社区的这篇文档。

## 主题类问题

### Bluetopz 主题和 BT 示例库

#### 文档属性不显示内容 (by 熊猫)

如图

![image.png](https://cdn.pkmer.cn/images/20231013233201.png!pkmer)

答：找到主题中的此内容，将 display 注释掉

```
.workspace-split.mod-horizontal:is(.mod-left-split,.mod-right-split) .workspace-tab-container :is(.metadata-container,.frontmatter-container) { /* display: none; */ }
```

#### 使用主题后，文件管理器，不同级的文件夹和文件缩进一样

- 如图

![image.png](https://cdn.pkmer.cn/images/20230604233953.png!pkmer)

- 这是因为启用了文件夹图标，而没有调整附带选项导致，参考下图重新设置，并重启 OB

![485f5048d52cdcfa0718ea78cc00e8d.png](https://cdn.pkmer.cn/images/485f5048d52cdcfa0718ea78cc00e8d.png!pkmer)

#### 鼠标指向插入的图片时，鼠标指针变化样式

- 如图
![image.png](https://cdn.pkmer.cn/images/20230604223210.png!pkmer)
- 这是主题引入的一些小设置，本身对主题和功能没有任何副作用，如果你介意，可以参考如下方法
- 在主题的 CSS 文件找到如下

```CSS
body:not(.obsidian-default-image) .markdown-source-view.mod-cm6 img:not([class*="emoji"]) {
  display: block;
  margin: auto !important;
  cursor: unset;/*这里原设置是 cursor: pointer; 修改为cursor: unset; 即可*/
}
```

#### 书本样式的 Callout 样式（by 熊猫）

![image.png](https://cdn.pkmer.cn/images/20231108105203.png!pkmer)

答：Minimal 主题的一种 callout，可以添加 CSS 来修改，[[Obsidian样式-Callout样式]]；其他类型的样式可以在 PKMer 社区的 [[Obsidian的CSS代码片段]] 查看。

#### 如何获取指定地区的天气？

- 侧边栏天气默认根据 ip 地址自动获取，修改 `常用工具` 并手动指定 `https://i.tianqi.com/?c=code&id=34&bdc=%23&icon=4&site=14&py=chongqing` chongqing 改为你想要的城市拼音即可。
- 主页天气 也可以手动指定地区,quickadd 宏 -home 工作区 -- 点击 config-fetchhomepage 点击齿轮图标 即可设置天气.

#### 如何更换字体？

- 示例库默认配置的主字体为 [LXGWWenKai-Light.ttf](app://obsidian.md/LXGWWenKai-Light.ttf) 代码块字体为 [JetBrainsMono-Regular.ttf](app://obsidian.md/JetBrainsMono-Regular.ttf) 可以自行安装，即可自动识别。
- 如果要安装其他字体，打开 style settings 设置，2.2.1 字体设置，主字体里填写 **字体名称** 即可。注意如果字体名称有空格需要用单引号括起来。
- 字体需要安装到系统里才会成功调用，比如 win 系统安装后显示的 **字体名称** 才是真正的字体名称。
![image.png|325](https://cdn.pkmer.cn/images/20230601190209.png!pkmer)

#### 如何更换 Ob 背景图？

- 打开 style settings 设置，1.2.1 工作页面背景，开启背景，并在 custom theme light(亮色主题使用) 或者 custom theme dark(暗色主题使用) 里设置壁纸路径.壁纸路径需要使用类似格式 url("app://local/XXXXX) 设置本地图片。
	- 比如 windows 图片路径置
	- url(app://local/D:/Documents/XXXX.jpg")
	- mac 系统图片路径设置 url("app://local/Users/XXXX .jpg")

#### 工作区页面背景跟笔记背景的区别?

- 工作区页面背景是指整个 Obsidian 界面背景，笔记背景仅仅是当前 md 文档的背景。两者不冲突可以同时设置，当然这样背景也就叠加一起了。如果只需要整个 OB 是一个背景图，笔记背景关闭即可。

#### 主页的歌曲和每日一言如何更新？

- 点击主页的 topaz 图片 或者侧边栏的重载主页 都可以重新获取最新的歌曲和一言。重新获取后如何没有显示出来，点击刷新主页即可。
![image.png](https://cdn.pkmer.cn/images/20230601195113.png!pkmer)

#### 主页加载部分数据没有显示全？

- 如果时钟不动或者主页没有显示全。手动点一下刷新主页即可。

#### 带按钮的常用工具侧边栏如何实现？

- 其实就是 `88-template/常用工具` 笔记文档，打开后拖动文档标题前的图标到侧边栏即可。

#### 侧边栏悬浮 memos 无法打开有错误提示？

- 需要先 `ctrl+p` ==>`打开其他库`，然后选择示例库“20-diary”文件夹，打开一次之后，这个悬浮按钮就自动生效。详情看示例库中的 Obsidian 库中库玩法 > 实现

#### 为什么在 style setting 下切换配色没什么效果

- 注意 2.1 里面的颜色设置 是不是有自定义颜色。这里的自定义颜色设置优先级比较高，建议把里面的颜色设置都恢复成默认就可以了。

#### 如何取消开启 Ob 自动加载主页，我想打开 ob 出现上次关闭时的笔记？

- 打开 quickadd 设置，宏管理 关闭 home 工作区的 启动加载选项

#### 如何移植动画版天气到自己的主页？并获取指定城市天气

- 直接复制 " 文字版天气加图标 " 注释之间的内容，并 copy"88-Template/script/dv_weatherSvg.js" 启用【天气】weather.css 样式片段就移植成功了。设置指定地区天气，需要在 quickadd 宏 home 工作区中如图设置即可。

#### 如何移植动画猫到自己的主页中？

- 跟多彩时钟一样，动画猫也是 react 组件生成的。需要首先安装 react_component 插件，并 copy`\88-Template\ReactJS\react_cat.md` 这样动画猫代码就生效了。

#### 如何消除列表折叠后的折叠占位符

- 阅读模式下

![f54833d49b2c8ec511bd82e60856c66.jpg](https://cdn.pkmer.cn/images/f54833d49b2c8ec511bd82e60856c66.jpg!pkmer)

参考下面代码，并放入 snippets 中，方法见 [[Obsidian的CSS代码片段]]

```CSS
.list-collapse-indicator.collapse-indicator.collapse-icon.is-collapsed:after {
	color: transparent;
	display：none;
}
```

#### 列表项中文字产生错位

- 列表项产生了错位问题，具体原因未知，可能与设置有关

![6fadc810bd28a900adb2901a71896d7.jpg](https://cdn.pkmer.cn/images/6fadc810bd28a900adb2901a71896d7.jpg!pkmer)

```CSS
.markdown-rendered .list-collapse-indicator {  
	padding-right:unset;  
}
```