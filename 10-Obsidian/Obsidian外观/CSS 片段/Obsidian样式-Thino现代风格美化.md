---
uid: 20240420163643
title: Obsidian 样式 - Thino 现代风格美化
tags: [Bluetopaz, Thino, 美化, 界面美化, CSS美化]
description: Blue Topaz同款Thino美化
author: ProudBenzene
type: advanced
draft: false
editable: false
modified: 20240426092353
---

# Obsidian 样式 - Thino 现代风格美化

由 PKMer 成员维护的 Blue Topaz 主题在最近的更新中加入了对 Thino 插件界面的美化，但是还要一些朋友平时的常用主题并不是 Thino 主题。为了让大家都能体验到 Thino 的全新外观，我将 Blue Topaz 主题中关于 Thino 的部分移植了出来，并于此分享。

## Thino 全新现代外观展示

以下四张图示分别为 Thino 的列表视图、聊天视图、动态视图与卡片分享界面结合全新现代外观的效果：

![](https://cdn.pkmer.cn/images/202404201641613.png!pkmer)

![](https://cdn.pkmer.cn/images/202404201641615.png!pkmer)

![](https://cdn.pkmer.cn/images/202404201641616.png!pkmer)

![](https://cdn.pkmer.cn/images/202404201654672.png!pkmer)

## CSS Snippets 代码

### 设置项简介

本 CSS 所美化的 Thino 调试设置项包括：

- Thino 全局样式
	- PC 端 Thino 输入框置于页面底部
	- 隐藏 thino 视图的头部
	- 列表瀑布流模式下给 thino 增加一个滚动条
	- 隐藏 Thino modern 主题下的动态视图的 banner
	- 动态视图的 banner 渐变显示
	- Thino 整体风格
		- Thino-default（默认）
		- Thino-frosted-style（毛玻璃样式 1）
		- Thino-frosted-style-default（毛玻璃样式 2）
	- 自定义 Thino 背景
		- 默认背景
		- 纯色背景
		- 图片背景
- Thino 卡片分享样式
	- 隐藏分享 Thino 的横幅图片
	- Thino 分享卡片背景样式
		- 默认
		- 与工作区背景相同
		- 与上面设置的 Thino 背景相同
		- 自定义分享背景
	- 分享卡片背景透明度

下面是相应的 CSS Snippets 代码：

```css
/* Thino.css from Blue Topaz Theme, Extracted by @ProudBenzene */
/* You can also use other important features of the Blue Topaz theme here: https://github.com/ProudBenzene/Blue-Topaz-Legacy */
/* @settings
name: Thino
id: Thino
settings:
-
	id: style-options-for-Thino-plugin-heading-1
	title: Thino  style
	title.zh: Thino  全局样式
	type: heading
	level: 1
	collapsed: true
-
	id: memos-inputbox
	title: Put input box to bottom
	title.zh: PC端Thino输入框置于页面底部
	type: class-toggle
	default: false
-
	id: memos-hide-header
	title: hider Thino header
	title.zh: 隐藏thino 视图的头部
	type: class-toggle
	default: false
-
	id: memos-scroll
	title: add Thino list scroll
	title.zh: 列表 瀑布流模式下给thino 增加一个滚动条
	type: class-toggle
	default: false
-
	id: hider-memos-modern-banner
	title: hide thino modern moment banner
	title.zh: 隐藏Thino modern 主题下的动态视图的banner
	type: class-toggle
	default: false
-
	id: memos-banner-gradient
	title: moment banner gradient
	title.zh: 动态视图的 banner 渐变显示
	type: class-toggle
	default: true
-
	id: thino-view-style
	title: thino style
	title.zh: Thino的风格
	type: class-select
	allowEmpty: false
	default: thino-frosted-style
	options:
	-
		label: default
		value: thino-default
	-
		label: Frosted Style(Transparent)
		value: thino-frosted-style
	-
		label: Frosted Style
		value: thino-frosted-style-default
-
	id: thino-view-background
	title: custom thino background
	title.zh: 自定义Thino背景
	type: class-select
	allowEmpty: false
	default: thino-background-default
	options:
	-
		label: default
		value: thino-background-default
	-
		label: custom color  
		value: thino-background-color  
	-
		label: Custom background img
		value: custom-thino-background
-
	id: thino-modern-primary
	title: thino  background color
	title.zh: thino 背景色
	type: variable-themed-color
	opacity: true
	format: hsl-split
	default-light: '#ebf3ee'
	default-dark: '#1e1e1e'
-
	id: thino-background-light-custom
	title: Custom thino background light (url)
	title.zh: 自定义Thino背景（亮色模式）
	description: Customise the background image. Use the format in the Default below for an Online image. 
	description.zh: 需在上方选项种选择Custom，以自定义背景。使用Default内格式设置在线图片。 
	type: variable-text
	default: url("https://")
-
	id: thino-background-dark-custom
	title: Custom thino background dark (url)
	title.zh: 自定义Thino背景（暗色模式）
	description: Customise the background image. Use the format in the Default below for an Online image. 
	description.zh: 需在上方选项种选择Custom，以自定义背景。使用Default内格式设置在线图片。 
	type: variable-text
	default: url("https://")
-
	id: style-options-for-Thino-plugin-share-heading
	title: Thino share style
	title.zh: Thino 卡片分享样式
	type: heading
	level: 1
	collapsed: true
-
	id: hide-share-thino-banner 
	title: hide share thino banner 
	title.zh: 隐藏分享Thino的横幅图片
	type: class-toggle
	default: false
-
	id: share-thino-style
	title: share thino style
	title.zh: Thino分享样式
	type: class-select
	allowEmpty: false
	default: thino-share-default
	options:
	-
		label: default
		value: thino-share-default
	-
		label: Same as workspace background
		value: share-thino-with-workspace-background
	-
		label: Same as  thino  background 
		value: share-thino-with-thino-background
	-
		label: Custom share background
		value: custom-thino-share-background
-
	id: share-card-background-opacity-cp
	title: Share Card Background Opacity
	title.zh: 分享卡片背景透明度
	type: variable-number-slider
	default: 0.6
	min: 0
	max: 1
	step: 0.05
-
	id: share-thino-background-light-custom
	title: Custom thino share background light (url)
	description: Customise the background image. Use the format in the Default below for an Online image. 
	description.zh: 需在上方选项种选择Custom，以自定义背景。使用Default内格式设置在线图片。 
	type: variable-text
	default: url("https://")
-
	id: share-thino-background-dark-custom
	title: Custom thino share background dark (url)
	description: Customise the background image. Use the format in the Default below for an Online image. 
	description.zh: 需在上方选项种选择Custom，以自定义背景。使用Default内格式设置在线图片。 
	type: variable-text
	default: url("https://")

*/

body {
	/***thino***/
	--share-thino-background-light-custom:url("https://");
	--share-thino-background-dark-custom:url("https://");
	--thino-background-light-custom:url("https://");
	--thino-background-dark-custom:url("https://");
	--share-card-background-opacity-cp:0.6;
  
	--bg-color-settings-0: #07070747;
	--bg-color-settings-0-1: #ffffff00;
	--bg-color-settings-1: #7c7c7c6d;
	--bg-color-settings-2: #1f1f1f52;
	--bg-color-settings-3: #141414be;
	--bg-color-settings-4: #2e2e2e9d;
	--bg-color-settings-5: #424242aa;
	--bg-color-settings-6: #191919c7;
}

/*****style setting logic******/
body:not(.custom-thino-background) .setting-item[data-id="thino-background-dark-custom"],
body:not(.custom-thino-background) .setting-item[data-id="thino-background-light-custom"],
body:not(.custom-thino-share-background) .setting-item[data-id="share-thino-background-dark-custom"],
body:not(.custom-thino-share-background) .setting-item[data-id="share-thino-background-light-custom"],
body:not(.thino-background-color) .setting-item[data-id="thino-modern-primary"]
{
  display: none;
}
body:not(:is(.share-thino-with-workspace-background,.share-thino-with-thino-background,.custom-thino-share-background)) .setting-item[data-id="blur-thino-share-frosted-glass"]
{
  display: none;
}

/* ================================== */
/* ============== Memos Thino============= */
/* ================================== */

body:not(.thino-default) div[data-type='thino_view']
{
  --activeline-background: transparent;
  --thino-wrapper-border: transparent;
  --memos-icon-hover: var(--background-modifier-border);
  
  --memos-memo-border: transparent;
  --memos-location-wrapper-bg: transparent;
  --memos-bg-accent:var(--theme-color-translucent-04);
  --thino-background-primary:var(--bg-color-settings-0-1);
  --memos-bg-light-blue: var(--theme-color-translucent-02);
  --memos-text-blue:var(--interactive-accent);
}
body:is(.thino-default,.thino-frosted-style-default)  div[data-type=thino_view] .memo-editor-wrapper{
  background-color: var(--background-primary-bg-4-bt, var(--background-primary));
}
body:is(.thino-default,.thino-frosted-style-default)   div[data-type=thino_view] .memolist-wrapper>.memolist-container {
  background-color: transparent;
}
body:is(.thino-default,.thino-frosted-style-default)   div[data-type=thino_view] .memo-wrapper,
body:is(.thino-default,.thino-frosted-style-default)    .thino-hover-popover .memo-wrapper, 
body:is(.thino-default,.thino-frosted-style-default)  .block-language-thino .thino-embed-container .memo-wrapper {
  background-color: var(--background-primary-bg-4-bt, var(--background-primary));
}
div[data-type=thino_view] .memo-editor-wrapper>.tip-text {
padding-left:1.5em;
}
.thino-editor-modal .common-editor-wrapper .common-editor-inputer {
  border: none;
}

body.custom-thino-background div[data-type='thino_view'].workspace-leaf-content
{
  background-image: var(--thino-background-light-custom) ;
  --background-primary:var(--bg-color-settings-2);
  --memos-memo-bg:var(--bg-color-settings-0-1);
  --memos-memo-border:var(--bg-color-settings-0-1);
  background-size: cover;
}
body.custom-thino-background.theme-dark div[data-type='thino_view'].workspace-leaf-content
{
  background-image: var(--thino-background-dark-custom);
  --background-primary: var(--bg-color-settings-2);
  --memos-memo-bg: var(--bg-color-settings-0-1);
  --memos-memo-border: var(--bg-color-settings-0-1);
  background-size: cover;
}
body.custom-thino-background.theme-dark div[data-type='thino_view'] #page-wrapper {
  background: var(--bg-color-settings-2);
}

.workspace-tab-container:fullscreen div[data-type='thino_view'],
.workspace-tab-container:fullscreen .workspace-leaf-content {
  background-color: var(--background-primary-alt);
}

.theme-dark div[data-type=thino_view] .usage-heat-map-wrapper .stat-container {
  background-color: #2a2a2a8a;
  box-shadow: none;
}

body:not(:is(.hider-memos-modern-banner, .memos-banner-gradient)) div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-view-background-overlay .moments-view-user-info .moments-view-user-name {
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}
.theme-dark div[data-type=thino_view] .memo-editor-wrapper, 
.theme-dark .thino-editor-modal .memo-editor-wrapper {
  border: none;
}
.modal.thino-editor-modal .modal-content
{
  background-color:var(--bg-color-settings-3);
}
div[data-type=thino_view] .moments-view .thino-moment-wrapper .thino-moment-container .thino-moment-user-name {
  color: #66789d;
}
div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-view-background-overlay .moments-view-user-idea {
  font-size: 12px;
}   
div[data-type=thino_view] .memo-wrapper>.memo-top-wrapper>.memo-top-left-wrapper>.memo-type-img
{
  align-items: flex-end;
}
div[data-type=thino_view] .moments-view .memo-content-text p a[href^="#收集"] {
  display: block;
  position: absolute;
  left: 180px;
  top: calc(100% - 31px);
  font-size: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: var(--tag-color);
}
div[data-type=thino_view].mobile-view .memos-sidebar-wrapper
{
  background: linear-gradient(to right, var(--color-base-00) 30%, var(--background-mobile-drawer-2) 100%);
  backdrop-filter: blur(10px);
}
div[data-type=thino_view] .common-editor-inputer:has(.cm-focused) + .common-tools-wrapper >.btns-container>.confirm-btn
{
  background-color:var(--interactive-accent);
}
div[data-type=thino_view]  button:not(.clickable-icon):hover
{
  box-shadow: none;
}
div[data-type=thino_view] .queries-wrapper>.create-query-btn-container>.btn
{
  border: 1px solid var(--memos-memo-border);
}
body:not(.thino-default)  .heatmap-date-picker-wrapper>.date-picker-day-container>.date-picker-day-content>.day-item.current {
  background-color: var(--memos-stat-day-L1-bg);
  filter: opacity(0.8); 
}
body:not(.thino-default) .heatmap-date-picker-wrapper>.date-picker-day-container>.date-picker-day-content>.day-item.current .day-item-text {
  color:var(--color-base-70);
}
body:is(.thino-frosted-style) div[data-type=thino_view] .modern#page-wrapper, 
body:is(.thino-frosted-style)     div[data-type=thino_view] .memo-wrapper, .thino-hover-popover .memo-wrapper, 
body:is(.thino-frosted-style)   .block-language-thino .thino-embed-container .memo-wrapper,
body:is(.thino-frosted-style)     div[data-type=thino_view] .memo-editor-wrapper, .thino-editor-modal .memo-editor-wrapper
{
  --memos-memo-bg: transparent;
  --memos-memo-bg-primary: transparent;
}


body:is(.thino-background-default,.custom-thino-background)   div[data-type=thino_view] .modern#page-wrapper, 
body:is(.thino-background-default,.custom-thino-background)     div[data-type=thino_view] .memo-wrapper, .thino-hover-popover .memo-wrapper, 
body:is(.thino-background-default,.custom-thino-background)   .block-language-thino .thino-embed-container .memo-wrapper,
body:is(.thino-background-default,.custom-thino-background)    div[data-type=thino_view] .memo-editor-wrapper, .thino-editor-modal .memo-editor-wrapper
{
  --memos-memo-bg: var(--bg-color-settings-0-1);
  --memos-memo-bg-primary: var(--bg-color-settings-0-1);

}
body:is(.thino-background-default,.thino-frosted-style,.custom-thino-background,.thino-background-color)  div[data-type=thino_view] .modern#page-wrapper:is(.memos-chat-view,.memos-moments-view,.memos-list-view,.memos-table-view,.memos-calendar-view,.memos-waterfall-view) {
  background-color: transparent;
  --thino-modern-secondary:transparent;
  --thino-modern-primary:transparent;
}
body.thino-frosted-style-default  div[data-type=thino_view] .modern#page-wrapper:is(.memos-chat-view,.memos-moments-view,.memos-list-view,.memos-table-view,.memos-calendar-view,.memos-waterfall-view) 
{
  --thino-modern-primary: var(--bg-color-settings-0-1);
  --thino-modern-secondary: transparent;
}
body.thino-frosted-style-default div[data-type=thino_view] .moments-view .thino-moment-wrapper {
  border-radius: var(--radius-m);
  background-color: var(--bg-color-settings-2);
}
body.thino-frosted-style-default div[data-type=thino_view] .moments-view .thino-moment-wrapper:after
{
  display: none;
}
body.thino-background-color div[data-type=thino_view].workspace-leaf-content
{
  --start-color: hsla(
    var(--thino-modern-primary-h), 
    var(--thino-modern-primary-s),
    var(--thino-modern-primary-l),
    var(--thino-modern-primary-a) 
  );
  --end-color: hsla(
    calc(var(--thino-modern-primary-h) +  30),
    calc(var(--thino-modern-primary-s) +  5%),
    calc(var(--thino-modern-primary-l) + 13%), 
    calc(var(--thino-modern-primary-a) * 0.8)
  );
  background: linear-gradient(117deg, var(--start-color), var(--end-color)); 
  --background-primary:var(--bg-color-settings-2);
  --memos-memo-bg:var(--bg-color-settings-0-1);
  --memos-memo-border:var(--bg-color-settings-0-1);}
body:not(.thino-default)  div[data-type=thino_view] .menu-btns-popup {
  background-color:var(--bg-color-settings-0-1);
  backdrop-filter: blur(10px);
}
body:not:is(.thino-background-default,.custom-thino-background,.thino-frosted-style)  div[data-type=thino_view] .memo-editor-wrapper>.memo-editor, .thino-editor-modal .memo-editor-wrapper>.memo-editor {
  background: linear-gradient(to bottom, var(--background-secondary), transparent);

}

div[data-type=thino_view] .memos-chat-view .memolist-wrapper .memolist-container .chat-view  {
  --memos-memo-bg: transparent;
}

div[data-type=thino_view] .memos-chat-view .memolist-wrapper .memolist-container .chat-view:is(.fluent-style,.inline-style) .thino-bubble.right .wrap>.content:has(:is(.callout,img)) {
  border: 1px solid var(--memos-memo-border);
}
div[data-type=thino_view] .memos-chat-view .memolist-wrapper .memolist-container .chat-view:is(.fluent-style,.inline-style) .thino-bubble.right .wrap>.content:has(:is(.callout,img)):before {
display:none;
}
body:not(.thino-default)  div[data-type=thino_view].mobile-view .search-bar-container>.quickly-action-wrapper>.quickly-action-container
{
  background-color:var(--bg-color-settings-0-1);
  backdrop-filter: blur(10px);
}
body:not(.thino-default)  div[data-type=thino_view] .memo-wrapper>.memo-top-wrapper>.memo-top-right-wrapper>.btns-container>.more-action-btns-wrapper>.more-action-btns-container, 
body:not(.thino-default)  .thino-hover-popover .memo-wrapper>.memo-top-wrapper>.memo-top-right-wrapper>.btns-container>.more-action-btns-wrapper>.more-action-btns-container, 
body:not(.thino-default)  .block-language-thino .thino-embed-container .memo-wrapper>.memo-top-wrapper>.memo-top-right-wrapper>.btns-container>.more-action-btns-wrapper>.more-action-btns-container,
body:not(.thino-default)  div[data-type=thino_view] .menu {
  background-color:var(--bg-color-settings-3);
  backdrop-filter: blur(10px);
}
div[data-type=thino_view].mobile-view .search-bar-container>.quickly-action-wrappe {
  padding: 0px;
  width: 275px;
}
div[data-type=thino_view].mobile-view .section-header-container>.memos-header-search-section .thino-inline-filter-container
{
  width: 275px;
}

div[data-type=thino_view] #cMenuToolbarModalBar .cMenuToolbarCommandItem {
  backdrop-filter: unset;
}
div[data-type=thino_view] #cMenuToolbarModalBar .more-menu
{
  border:none;
}
div[data-type=thino_view] #cMenuToolbarModalBar.cMenuToolbarGlassAesthetic,
div[data-type=thino_view] #cMenuToolbarModalBar.cMenuToolbarGlassAesthetic~#cMenuToolbarPopoverBar
{
  backdrop-filter: unset;
}
div[data-type=thino_view].mobile-view .search-bar-container {
  width: auto;
}
div[data-type=thino_view] .search-bar-container>.search-bar-inputer{
  background-color: transparent!important;
  padding:0;
}
div[data-type=thino_view].mobile-view .search-bar-container>.search-bar-inputer input:focus{
background-color: var(--memos-bg-searchbar-lightgray);
  }
div[data-type=thino_view] .daily-thinos-list-wrapper .daily-thinos-view-wrapper .daily-thinos-view-container .date-card-container>.date-container-details .details-text
{
  font-size:18px;
}

div[data-type=thino_view].mobile-view .thino-inline-filter-container .btns-container
{
  flex-wrap: wrap;
}

div[data-type=thino_view].mobile-view .memo-editor-wrapper,
.thino-editor-modal .memo-editor-wrapper
{
  padding:8px;
}

body  div[data-type='thino_view'] .memo-editor-wrapper:has(.cm-focused)   {
  border: 1px solid var(--color-base-30);
}
div[data-type=thino_view] .user-banner-container>.userinfo-header-container>.userinfo-container .thino-user-icon
{
  background-color: transparent!important;
  box-shadow:none;
}

div[data-type=thino_view]:not(.mobile-view) .memos-moments-view .section-header-container.memos-header-container
{
  justify-content: flex-start;
  height: 40px;
  flex-wrap: nowrap;
  margin-top: 0;
  padding: 0 20px;  
}
div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-show-editor-btn
{
  top:20px;
}

div[data-type=thino_view].mobile-view .search-bar-container>.quickly-action-wrapper>.quickly-action-container,
div[data-type=thino_view] .search-bar-container>.quickly-action-wrapper>.quickly-action-container,
.thino-canvas-filter-group .search-bar-container>.quickly-action-wrapper>.quickly-action-container {
  background-color:var(--color-base-20);

}

div[data-type=thino_view] .section-header-container>.memos-header-search-section .thino-inline-filter-container
{
  background-color:var(--color-base-20);
}
div[data-type=thino_view] .modern  input:not([type=checkbox])
{
  border: 1px solid var(--background-modifier-border);
}

div[data-type=thino_view].mobile-view .modern .content-wrapper:has(.moments-view:not(.show-editor)) .section-header-container,
div[data-type=thino_view] .content-wrapper:has(.moments-view:not(.show-editor)) .section-header-container {
  /* position: absolute; */
  z-index:1;
  width:calc(100% - 55px);
}

div[data-type=thino_view] .memos-moments-view .filter-query-container {
  z-index: 1;
  padding: 6px 0 0 20px;
  justify-content: flex-start;
}
div[data-type=thino_view] .memos-chat-view .filter-query-container {
padding-bottom:20px;
padding-left:0px;
}
div[data-type=thino_view] .moments-view .thino-moment-wrapper .thino-moment-container .thino-moment-user-content .memo-wrapper .memo-top-wrapper .btn.more-action-btn {
  background-color:  transparent;
}
div[data-type=thino_view] .memos-moments-view .content-wrapper:not(:has(.edit-ing)) .memolist-wrapper {
  margin-top: -60px;
  transition: all 0.1s linear;
}
body.is-mobile div[data-type=thino_view] .memos-moments-view  .memolist-wrapper {
  margin-top: 6px;
}
body.is-mobile div[data-type=thino_view] .view-header:has(+.view-content>.memos-moments-view) {
  position: absolute;
  background: transparent;
  border: none;
}
body div[data-type=thino_view] .section-header-container>.memos-header-search-section >*
{
  border-color: transparent!important;
}
body.is-mobile div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-show-editor-btn {
  top: 8px;
}
body.is-mobile div[data-type=thino_view].mobile-view .search-bar-container>.search-bar-inputer input:focus
{
  background-color: transparent;
}
body.is-mobile div[data-type=thino_view].mobile-view .search-bar-container {
  width: 110px;
}
body.is-mobile div[data-type=thino_view] .memos-moments-view .memos-sidebar-wrapper
{
  margin-top: 48px;
  height: calc(100% - 85px);
}
body.is-mobile div[data-type=thino_view].mobile-view .tags-wrapper
{
  background-color: transparent;
}

div[data-type=thino_view].mobile-view .modern#page-wrapper.memos-moments-view .content-wrapper .section-header-container  .search-bar-container .search-bar-inputer
{
max-width:280px;
}

.share-memo-image-dialog .memo-content-text.markdown-rendered blockquote,
div[data-type=thino_view] .memo-content-text.markdown-rendered blockquote
{
  margin-inline-start: 0;
  margin-inline-end: 0;
}

/****thino 分享文字背景**/
body.hide-share-thino-banner .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.property-image
{
  height:auto;
}
body.hide-share-thino-banner .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.background-container
{
  height:auto;
}
body.hide-share-thino-banner .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.thino-user-header {
  padding-top: var(--size-4-8);
}
body.share-thino-with-workspace-background .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  background-image: var(--theme-background);
  background-size: cover;
}
body.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}


body.share-thino-with-thino-background.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  background-image: var(--thino-background-dark-custom);
  background-size: cover;
}
body.share-thino-with-thino-background .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  background-image: var(--thino-background-light-custom);
  background-size: cover;
}

body.custom-thino-share-background .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  background-image: var(--share-thino-background-light-custom);
  background-size: cover;

}
body.custom-thino-share-background.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background {
  background-image: var(--share-thino-background-dark-custom);
  background-size: cover;
}

.share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.memo-content-text,
.share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.thino-user-header,
.share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.watermark-container ,
.share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.thino-time-footer
{
  background:rgba(255, 255, 255, var(--share-card-background-opacity-cp));
  overflow: hidden;
}

.share-memo-image-dialog .memo-content-text p br {
  display: block; 
  margin-top: 0.5em; 
  content: '\A'; 
  white-space: pre; 
}

.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.memo-content-text,
.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.thino-user-header,
.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.watermark-container ,
.theme-dark .share-memo-image-dialog>.dialog-container>.dialog-content-container>.memo-container>.memo-background>.thino-time-footer
{
  background:rgba(24, 24, 24, var(--share-card-background-opacity-cp));
  overflow: hidden;
}


/**********thino 加滚动条***/
body.memos-scroll div[data-type=thino_view] .memolist-wrapper .memolist-container .masonry-memolist {
  max-height: 660px;
  overflow: auto;
}

/**********动态海报渐变显示***/
body.memos-banner-gradient div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-view-background {
    mask-image: linear-gradient(to bottom,black 50%,transparent);
    -webkit-mask-image: linear-gradient(to bottom,black 50%,transparent);
}
/**********隐藏头部信息***/

/* thino 隐藏头部信息 */
body.memos-hide-header 
div[data-type="thino_view"]
    .view-header
    :is(.view-header-nav-buttons, .view-header-title-container) {
    display: none;
}

body.memos-hide-header  div[data-type="thino_view"] .view-header {
    position: absolute;
    right: 0;
    background-color: transparent !important;
    top: 12px;
    transition: all 0.1s linear;
    transform: translateY(-15px);
}

body.memos-hide-header  div[data-type="thino_view"] .view-actions {
    position: relative;
}

body.memos-hide-header  div[data-type="thino_view"]  .view-header:not(:hover) {
    transform: translateY(calc(-1 * var(--header-height)));
    transition: all 0.6s linear;
}

div[data-type=thino_view] .moments-view .moments-view-background-wrapper .moments-view-background-overlay .moments-view-user-info .moments-view-user-icon,
div[data-type=thino_view] .moments-view .thino-moment-wrapper .thino-moment-icon 
{
  background-color: transparent;
}

div[data-type=thino_view] .memos-moments-view .search-bar-container>.quickly-action-wrapper, .thino-canvas-filter-group .search-bar-container>.quickly-action-wrapper {
  top: 38px;
  left: 220px;
  right:0;
}
.is-mobile div[data-type=thino_view].tiny-view .section-header-container>.memos-header-search-section .memos-view-switcher-wrapper, 
div[data-type=thino_view] .memos-header-container>.memos-header-search-section .memos-view-switcher-wrapper {
  border-color: transparent;
}
/********moden 动态视图模式***/
body.hider-memos-modern-banner div[data-type=thino_view]:not(.mobile-view) .memos-moments-view.modern .content-wrapper:has(.moments-view:not(.show-editor)) .section-header-container {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 8px;
  margin-top: 9px;
}
body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .moments-show-editor-btn {
  top: 22px  ;
  right: 0px;
}
body.hider-memos-modern-banner div[data-type=thino_view] .moments-view .moments-view-background-wrapper
{
  position:unset;
}
body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .search-bar-inputer {
  width: 90%;
}

body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .search-bar-container>.quickly-action-wrapper {
  right: 80px;
}
body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .moments-view .moments-view-background-wrapper .moments-view-background {
  display: none;
}
body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .moments-view .moments-view-background-wrapper .moments-view-background-overlay {
  margin-top: -20px;
}
body.hider-memos-modern-banner  div[data-type=thino_view] .view-header:has(+.view-content>.memos-moments-view.modern) {
  display: none;
}
body.hider-memos-modern-banner div[data-type=thino_view] .memos-moments-view.modern .moments-view .moments-view-background-wrapper .moments-view-background-overlay .moments-view-user-info .moments-view-user-icon
{
  width: 40px;
  height: 40px;
  margin-top: -12px;;
}
body:is(.custom-thino-background,.thino-background-color) div[data-type='thino_view'] .view-content  
{
  background: var(--bg-color-settings-0-1) ;
}
body.thino-frosted-style-default:not(.is-mobile) div[data-type='thino_view']:not(.mobile-view) .view-content ,
  body.thino-frosted-style:not(.is-mobile) div[data-type='thino_view']:not(.mobile-view) .view-content  {
  background: var(--bg-color-settings-2) ;
  backdrop-filter: blur(10px);
  width: 95% ;
  height: 95% ;
  margin: auto;
  box-shadow: var( --window-shadow2);
  border-radius:var(--radius-l);
}
body:is(.thino-frosted-style,.custom-thino-background,.thino-background-color)  div[data-type=thino_view] #page-wrapper:is(.memos-chat-view,.memos-moments-view,.memos-list-view,.memos-table-view,.memos-calendar-view,.memos-waterfall-view) {
  background: var(--bg-color-settings-2) ;
  
}

/**memos 输入框移到下方***/
body.memos-inputbox div[data-type='thino_view']:not(.mobile-view) #page-wrapper .memo-editor-wrapper {
  bottom: 0;
  margin-bottom: -145px;
  position: absolute;
  padding:8px;
}
body.memos-inputbox div[data-type='thino_view']:not(.mobile-view) .memolist-wrapper.completed {
  padding-bottom: 20px;
}
body.memos-inputbox div[data-type='thino_view']:not(.mobile-view) #page-wrapper > .content-wrapper {
  height: calc(100% - 150px);
}

body.memos-inputbox div[data-type='thino_view']:not(.mobile-view) .memolist-wrapper {
  flex-direction: column-reverse;
}
body.memos-inputbox div[data-type=thino_view] .memolist-wrapper .memolist-container .list-view .masonry-memolist-grid_column {

  flex-direction: column-reverse;
}
body.memos-inputbox div[data-type=thino_view] .common-editor-wrapper .common-editor-inputer
{
  min-height: 78px;
}

/******另一部分Thino******/

.memo-context-menu{
  background-color:var(--bg-color-settings-0-1);
  backdrop-filter: blur(10px);
}
```