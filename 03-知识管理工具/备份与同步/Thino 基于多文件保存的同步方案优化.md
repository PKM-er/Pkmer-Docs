---
uid: 20240422070750
title: Thino 基于多文件保存的同步方案优化
tags: [同步, 配置, 配置经验, 💻教程, 脚本, dataview, lifeOS, Thino, Templater]
description: 对比三个Memos类应用，使用多文件存储改善Thino的同步体验
author: BabyXin
type: other
draft: false
editable: false
modified: 20240422215421
---

# Thino 基于多文件保存的同步方案优化

## Memos 类型解决方案对比

2024 年我接触的 Memos 类应用有三个，usememos，Flomo 和 Thino，代表了三个 Memos 的方向。我从代表性功能，使用条件和缺点几个方面进行评价。

[Flomo](https://flomoapp.com/) 起源于两位个人开发者的设计，我认为是目前开发最完善的 Memos 类应用了，标签管理和桌面便签功能狠狠切中我的痛点。支持微信输入，一些忽然的短暂的想法和文字可以通过微信来即时同步，会员年费 99 真的不贵。但缺点是作为一个软件太独立了，进行周期性归纳总结的时候需要手动切换和同步的体验着实不太好。

[Usememos](https://www.usememos.com/) 是一个开源 Self-hosting 方案，可以自建服务器并创立多个用户，用户可以在平台上编辑个人/工作/公开的 Memos。由于数据都在服务器上，所以手机电脑可以无缝同步。而且 [API文档](https://memos.apidocumentation.com/reference) 很全面，可以自主开发各种功能，拓展性很强，完全免费（需要自己有服务器）。缺点是 Web 前端以及其他开源客户端软件做的还有优化的空间，使用起来不太顺滑。LifeOS 插件可让 Obsidian 定时下载云端数据，但是使用体验比较差，云端和本地的修改都不能同步。

[Thino](https://thino.pkmer.net/) 是 PKMer 组织孵化下基于 [Usememos](https://www.usememos.com/) 开发的 Obsidian 插件（实际上从 1.x 版本开始代码就已经分离了），可以基于 Obsidian 笔记的形式本地存储。因为是 Obsidian 插件，就可以使用其他插件组成自己想要的功能。比如结合 Tasks 插件来检索 Memo 中的任务统一管理。

| 应用名                                   | 代表性功能                                                                 | 使用条件                                          | 缺点                            | 评价                                      |
| ------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------- | ----------------------------- | --------------------------------------- |
| [Flomo](https://flomoapp.com/)        | 桌面便签，可微信输入，Obsidian 手动下载（只读），Obsidian 快速上传                            | 可免费使用，会员 99/年                                 | 与 Obsidian 交互体验不好，不便于统一的知识管理。 | 适合个人使用，开箱即用                             |
| [Usememos](https://www.usememos.com/) | Self-hosting，多人使用，拓展性强，线上同步，链接分享，Obsidian 定时下载（只读，基于 LifeOS 插件）       | 需要服务器                                         | 配置需要一定的开发经验。                  | 适合小集体使用，用作公共知识库或论坛。不能离线使用。              |
| [Thino](https://thino.pkmer.net/)     | 基于笔记文件的形式存储，可用多种视图阅览（日历，瀑布，对话），协同 Obsidian 其他插件实现多种功能（双向同步，任务管理，个人图床） | 可免费使用，会员 129 终身，同步需要[[03_Thino Web Services]] | 协同其他插件需要折腾                    | 适合喜欢 All-in-one 的用户，将知识在 Obsidian 统一管理。 |

![image.png](https://cdn.pkmer.cn/images/20240422214920.png!pkmer)

本质上，Memos 类应用是一种卡片笔记法的实现，主要用于知识管理。

> 从本质上讲，卡片笔记法不是一种「技巧」，而是一个「流程」，一种存储和组织知识、扩展记忆以及生成新连接和想法的方法。简单来说就是，把你感兴趣或者觉得自己未来会用到的知识收集起来；然后用一种标准化的方法处理这些笔记，确保颗粒度和标准统一；最后建立笔记之间的联系，供日后有需要的时候检索使用。
> by 少楠

一些应用致力于解决这些零碎记忆的收集，组织和使用的问题。

- [Flomo](https://flomoapp.com/) 解决了知识收集的问题，也实现了基于标签系统的组织，但是还不够，很多时候这些零碎的想法并没有建立起之间的联系。
- [LifeOS](https://obsidian-life-os.netlify.app/zh/index.html) 作者林大师基于 CODE 模型和 PARA 组织法给出了一个解决思路。
	- 将 Memos 同步到日常的记录（周期笔记系统）中，作为思维的收集；
	- 使用 PARA 组织法管理这些笔记，实现知识的组织和连接
	- 最后使用积累的 Memos 输出成文章。
  但是 LifeOS 中基于 useMemos 的 Memos 同步方案有几个问题，在 Obsidian 中做的修改不能同步到服务器，服务器上的 Memos 修改了之后也不能在 Obsidian 中更新。
- [Thino](https://thino.pkmer.net/) 很大一部分解决了 Obsidian 的同步问题。基于 Remotely Save 插件，可以很方便的做到云端备份和多平台同步。但是也存在问题：
	- 但是非会员使用的日记文件存储方案会造成文件冲突，电脑端和安卓端添加 memo 都会对同一个日记文件造成修改，如果修改后没有及时同步，文件会互相覆盖，造成某一端的存储丢失。
	- 使用会员提供的多文件存储方案可以避免文件覆盖的问题，但是 Memos 不会显示在对应的日记中，不利于以日为周期管理 Memo 文件。

结合既有的应用方案,我采用了 Thino 作为碎片知识的采集系统，使用 LifeOS 作为知识管理系统，使用 Remotely Save 作为同步方案。此外写了一些脚本放在日记模板中，使用 Templater 的 User Function 来自动化采集当日的 Memos。

## Thino 同步方案优化

1. 插件依赖：可以先使用 LifeOS 的模板，再安装 Thino 插件。必需的插件如下
	- [Thino](https://thino.pkmer.net/)
	- [LifeOS](https://obsidian-life-os.netlify.app/zh/index.html)
	- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
	- [Templater](https://silentvoid13.github.io/Templater/)
	- [Remotely Save](https://github.com/remotely-save/remotely-save)

2. Thino 选择多文件存储并且配置你的存储文件夹 `<Thino Folder>`[[Thino Multi-souce|Thino 多来源功能]]，我的路径是 `-1. Memos/Thino`。
   ![image.png](https://image-host-1256452851.cos.ap-guangzhou.myqcloud.com/img/202404220449796.png)

3. Dataview 配置
   为了支持 memos 收集脚本持续同步文件夹中的内容，需要设置 Dataview 的更新频率和时间日期。具体方法是设置 ->第三方插件 ->Dataview->General，配置如下图。设置之后可以实现一秒更新一次收集脚本。

![image.png](https://cdn.pkmer.cn/images/20240422215003.png!pkmer)

1. 日记模板配置
   为了实现当日的 Memos 在对应的日记中能够显示，我使用 Templater 的 User Function 来生成 Dataviewjs 收集脚本，自动化采集当日的 Memos。在日历模板 `0.周期笔记/Templates/Daily.md` 中添加如下脚本，注意修改脚本中的 `memo_folder` 为你的 Thino 多文件存储文件夹 `<Memo Folder>`。

````
```markdown
%% Get the date of the diary file %%
<%*let current=PeriodicPARA.Date.parse(app.workspace.getActiveFile().path.toString());%>

%% Insert the dataviewjs script %%
```
```dataviewjs
// Filter out and sort the memos in the folder for the corresponding date
let memo_folder = '"-1. Memos/Thino"'
var pages = dv.pages(memo_folder).filter(b => b.file.ctime.toFormat("yyyy-MM-dd")=="<% PeriodicPARA.Date.days(current).from%>");

// Sort memos by created time
pages.sort(b => b.file.frontmatter.createdAt)

// display
for (const page of pages) {
	let ctime = page.file.frontmatter.createdAt;
	let text = await dv.io.load(page.file.path);
	let content = text.substr(text.substr(3).search("---")+6);
	
	const blockRoot = dv.el("blockquote", "");
	const title = dv.el("b",ctime, {container: blockRoot});
	dv.el("div",content, {container: blockRoot});
	
	title.onclick = function(){
	 	app.workspace.openLinkText(page.file.path,"",true);
	};
	title.style.cursor = "pointer";	
}
```
````

   打开任意一天的日记，只要当天有记录，就会有显示。显示效果如下：

![image.png](https://cdn.pkmer.cn/images/20240422215045.png!pkmer)

## 总结

总的来说，Thino 因为与 Obsidian 高度集成的原因，在知识的组织上有无可替代的优势。本文使用多文件存储优化了 Thino 的存储体验，同时给 Thino 之后的产品迭代提供一些参考。

知识的采集依赖于设备间的同步，而 Thino 数据是使用本地的文件，且是内容级同步，这就能够通过迂回的方式，解决混合同步的问题，参看：[[03_Thino FAQ#为什么会有重复的数据]]。