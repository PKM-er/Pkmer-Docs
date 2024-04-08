---
uid: 20240407162605
title: Obsidian 样式：美化图书墙进度条样式
tags: [css, 美化]
description: Obsidian 样式：美化图书墙进度条样式
author: 自权
type: other
draft: false
editable: false
modified: 20240408140802
---

# Obsidian 样式：美化图书墙进度条样式

## 概述

以卡片布局的形式，在 Ob 中显示自己的**微信读书**情况和书籍信息，并且由**彩虹猫咪** **动态** 地在下方显示自己的**阅读进度**。这个样式来主题作者 Anubis 的 AnuPpuccin 主题

![小猫文章配图1.jpg|700](https://cdn.pkmer.cn/images/%E5%B0%8F%E7%8C%AB%E6%96%87%E7%AB%A0%E9%85%8D%E5%9B%BE1.jpg!pkmer)

注意细节，**彩虹猫咪是动态展示的**

![640.gif|250](https://cdn.pkmer.cn/images/640.gif!pkmer)

# 前期准备

需要准备以下资源:

-  `Dataview 插件`
-  `Weread 插件`
-  `彩虹猫猫进度条modified.css`

```
/* AGPLv3 License
Nyan Cat Progress Bars
Author: AnubisNekhet
Note: If you decide to implement it in your theme or redistribute it, please keep this comment (Especially for *certain* individuals who may try to rebrand it as their own :))
Support me: https://buymeacoffee.com/AnubisNekhet
*/
/* This Snippet will only work for snippets with the following syntax:
  <progress value="x" max="100" class="nyan-cat"></progress>
  x can be a multiple of 1 from 0 to 100
  Example: <progress value="71" max="100" class="nyan-cat"></progress>
modified by OURSPACE- ，follow me at https://github.com/WinHex89
*/
.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar {
  background-color: var(--background-secondary);
  box-shadow: none;
  border-radius: 6px;
  overflow: hidden;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar {
  background: url("data:image/gif;base64,R0lGODlhMAAMAIAAAAxBd////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAMAAMAAACJYSPqcvtD6MKstpLr24Z9A2GYvJ544mhXQmxoesElIyCcB3dRgEAIfkEBAoAAAAsAQACAC0ACgAAAiGEj6nLHG0enNQdWbPefOHYhSLydVhJoSYXPO04qrAmJwUAIfkEBAoAAAAsBQABACkACwAAAiGEj6nLwQ8jcC5ViW3evHt1GaE0flxpphn6BNTEqvI8dQUAIfkEBAoAAAAsAQABACoACwAAAiGEj6nLwQ+jcU5VidPNvPtvad0GfmSJeicUUECbxnK0RgUAIfkEBAoAAAAsAAAAACcADAAAAiCEj6mbwQ+ji5QGd6t+c/v2hZzYiVpXmuoKIikLm6hXAAAh+QQECgAAACwAAAAALQAMAAACI4SPqQvBD6NysloTXL480g4uX0iW1Wg21oem7ismLUy/LFwAACH5BAQKAAAALAkAAAAkAAwAAAIghI8Joe0Po0yBWTaz3g/z7UXhMX7kYmplmo0rC8cyUgAAIfkEBAoAAAAsBQAAACUACgAAAh2Ejwmh7Q+jbIFZNrPeEXPudU74IVa5kSiYqOtRAAAh+QQECgAAACwEAAAAIgAKAAACHISPELfpD6OcqTGKs4bWRp+B36YFi0mGaVmtWQEAIfkEBAoAAAAsAAAAACMACgAAAh2EjxC36Q+jnK8xirOW1kavgd+2BYtJhmnpiGtUAAAh+QQECgAAACwAAAAALgALAAACIYSPqcvtD+MKicqLn82c7e6BIhZQ5jem6oVKbfdqQLzKBQAh+QQECgAAACwCAAIALAAJAAACHQx+hsvtD2OStDplKc68r2CEm0eW5uSN6aqe1lgAADs=");
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::after {
  background: url("data:image/gif;base64,R0lGODlhIgAVAKIHAL3/9/+Zmf8zmf/MmZmZmf+Z/wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkJBNjY5RTU1NEJFMzExOUM4QUM2MDAwNDQzRERBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREIzOEIzMzRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREIzOEIzMjRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1QkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8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") !important;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value {
  background: linear-gradient(to bottom, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;
  overflow: hidden;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::after {
  content: "";
  width: 30px;
  height: 24px;
  background-size: contain !important;
  position: absolute;
  margin-top: -16px;
  background-repeat: no-repeat !important;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat], .markdown-rendered progress[value][max="100"][class*=nyan-cat], .markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat] {
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  appearance: none;
  box-sizing: border-box;
  display: inline-block;
  height: 14px;
  margin-bottom: 4px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 0px;
  border: 0;
  vertical-align: -0.2rem;
}

.markdown-preview-view progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="0"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0em - 20px);
}



.markdown-preview-view progress[value="1"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="1"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="1"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.1em - 20px);
}

.markdown-preview-view progress[value="2"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="2"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="2"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.2em - 20px);
}

.markdown-preview-view progress[value="3"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="3"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="3"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.3em - 20px);
}

.markdown-preview-view progress[value="4"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="4"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="4"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.4em - 20px);
}

.markdown-preview-view progress[value="5"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="5"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="5"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.5em - 20px);
}


/* value="6" */
.markdown-preview-view progress[value="6"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="6"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="6"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.6em - 20px);
}

/* value="7" */
.markdown-preview-view progress[value="7"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="7"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="7"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.7em - 20px);
}

/* value="8" */
.markdown-preview-view progress[value="8"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="8"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="8"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.8em - 20px);
}

/* value="9" */
.markdown-preview-view progress[value="9"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="9"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="9"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.9em - 20px);
}

/* value="10" */
.markdown-preview-view progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="10"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1em - 20px);
}



/* value="11" */
.markdown-preview-view progress[value="11"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="11"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="11"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.1em - 20px);
}

/* value="12" */
.markdown-preview-view progress[value="12"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="12"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="12"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.2em - 20px);
}

/* value="13" */
.markdown-preview-view progress[value="13"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="13"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="13"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.3em - 20px);
}

/* value="14" */
.markdown-preview-view progress[value="14"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="14"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="14"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.4em - 20px);
}

/* value="15" */
.markdown-preview-view progress[value="15"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="15"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="15"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.5em - 20px);
}

/* value="16" */
.markdown-preview-view progress[value="16"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="16"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="16"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.6em - 20px);
}

/* value="17" */
.markdown-preview-view progress[value="17"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="17"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="17"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.7em - 20px);
}

/* value="18" */
.markdown-preview-view progress[value="18"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="18"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="18"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.8em - 20px);
}

/* value="19" */
.markdown-preview-view progress[value="19"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="19"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="19"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.9em - 20px);
}

/* value="20" */
.markdown-preview-view progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="20"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2em - 20px);
}




/* value="21" */
.markdown-preview-view progress[value="21"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="21"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="21"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.1em - 20px);
}

/* value="22" */
.markdown-preview-view progress[value="22"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="22"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="22"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.2em - 20px);
}

/* value="23" */
.markdown-preview-view progress[value="23"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="23"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="23"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.3em - 20px);
}

/* value="24" */
.markdown-preview-view progress[value="24"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="24"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="24"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.4em - 20px);
}

/* value="25" */
.markdown-preview-view progress[value="25"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="25"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="25"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.5em - 20px);
}

/* value="26" */
.markdown-preview-view progress[value="26"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="26"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="26"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.6em - 20px);
}

/* value="27" */
.markdown-preview-view progress[value="27"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="27"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="27"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.7em - 20px);
}

/* value="28" */
.markdown-preview-view progress[value="28"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="28"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="28"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.8em - 20px);
}

/* value="29" */
.markdown-preview-view progress[value="29"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="29"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="29"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.9em - 20px);
}

/* value="30" */
.markdown-preview-view progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="30"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3em - 20px);
}



/* value="31" */
.markdown-preview-view progress[value="31"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="31"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="31"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.1em - 20px);
}

/* value="32" */
.markdown-preview-view progress[value="32"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="32"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="32"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.2em - 20px);
}

/* value="33" */
.markdown-preview-view progress[value="33"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="33"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="33"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.3em - 20px);
}

/* value="34" */
.markdown-preview-view progress[value="34"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="34"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="34"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.4em - 20px);
}

/* value="35" */
.markdown-preview-view progress[value="35"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="35"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="35"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.5em - 20px);
}

/* value="36" */
.markdown-preview-view progress[value="36"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="36"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="36"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.6em - 20px);
}

/* value="37" */
.markdown-preview-view progress[value="37"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="37"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="37"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.7em - 20px);
}

/* value="38" */
.markdown-preview-view progress[value="38"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="38"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="38"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.8em - 20px);
}

/* value="39" */
.markdown-preview-view progress[value="39"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="39"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="39"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.9em - 20px);
}

/* value="40" */
.markdown-preview-view progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="40"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4em - 20px);
}


/* value="41" */
.markdown-preview-view progress[value="41"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="41"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="41"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.1em - 20px);
}

/* value="42" */
.markdown-preview-view progress[value="42"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="42"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="42"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.2em - 20px);
}

/* value="43" */
.markdown-preview-view progress[value="43"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="43"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="43"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.3em - 20px);
}

/* value="44" */
.markdown-preview-view progress[value="44"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="44"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="44"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.4em - 20px);
}

/* value="45" */
.markdown-preview-view progress[value="45"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="45"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="45"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.5em - 20px);
}

/* value="46" */
.markdown-preview-view progress[value="46"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="46"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="46"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.6em - 20px);
}

/* value="47" */
.markdown-preview-view progress[value="47"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="47"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="47"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.7em - 20px);
}

/* value="48" */
.markdown-preview-view progress[value="48"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="48"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="48"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.8em - 20px);
}

/* value="49" */
.markdown-preview-view progress[value="49"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="49"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="49"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.9em - 20px);
}

/* value="50" */
.markdown-preview-view progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="50"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5em - 20px);
}

/* value="51" */
.markdown-preview-view progress[value="51"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="51"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="51"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.1em - 20px);
}

/* value="52" */
.markdown-preview-view progress[value="52"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="52"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="52"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.2em - 20px);
}

/* value="53" */
.markdown-preview-view progress[value="53"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="53"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="53"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.3em - 20px);
}

/* value="54" */
.markdown-preview-view progress[value="54"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="54"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="54"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.4em - 20px);
}

/* value="55" */
.markdown-preview-view progress[value="55"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="55"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="55"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.5em - 20px);
}

/* value="56" */
.markdown-preview-view progress[value="56"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="56"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="56"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.6em - 20px);
}

/* value="57" */
.markdown-preview-view progress[value="57"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="57"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="57"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.7em - 20px);
}

/* value="58" */
.markdown-preview-view progress[value="58"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="58"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="58"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.8em - 20px);
}

/* value="59" */
.markdown-preview-view progress[value="59"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="59"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="59"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.9em - 20px);
}

/* value="60" */
.markdown-preview-view progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="60"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6em - 20px);
}


/* value="61" */
.markdown-preview-view progress[value="61"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="61"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="61"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.1em - 20px);
}

/* value="62" */
.markdown-preview-view progress[value="62"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="62"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="62"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.2em - 20px);
}

/* value="63" */
.markdown-preview-view progress[value="63"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="63"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="63"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.3em - 20px);
}

/* value="64" */
.markdown-preview-view progress[value="64"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="64"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="64"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.4em - 20px);
}

/* value="65" */
.markdown-preview-view progress[value="65"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="65"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="65"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.5em - 20px);
}

/* value="66" */
.markdown-preview-view progress[value="66"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="66"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="66"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.6em - 20px);
}

/* value="67" */
.markdown-preview-view progress[value="67"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="67"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="67"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.7em - 20px);
}

/* value="68" */
.markdown-preview-view progress[value="68"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="68"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="68"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.8em - 20px);
}

/* value="69" */
.markdown-preview-view progress[value="69"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="69"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="69"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.9em - 20px);
}

/* value="70" */
.markdown-preview-view progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="70"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7em - 20px);
}

/* value="71" */
.markdown-preview-view progress[value="71"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="71"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="71"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.1em - 20px);
}

/* value="72" */
.markdown-preview-view progress[value="72"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="72"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="72"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.2em - 20px);
}

/* value="73" */
.markdown-preview-view progress[value="73"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="73"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="73"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.3em - 20px);
}

/* value="74" */
.markdown-preview-view progress[value="74"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="74"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="74"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.4em - 20px);
}

/* value="75" */
.markdown-preview-view progress[value="75"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="75"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="75"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.5em - 20px);
}

/* value="76" */
.markdown-preview-view progress[value="76"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="76"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="76"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.6em - 20px);
}

/* value="77" */
.markdown-preview-view progress[value="77"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="77"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="77"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.7em - 20px);
}

/* value="78" */
.markdown-preview-view progress[value="78"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="78"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="78"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.8em - 20px);
}

/* value="79" */
.markdown-preview-view progress[value="79"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="79"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="79"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.9em - 20px);
}

/* value="80" */
.markdown-preview-view progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="80"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8em - 20px);
}

/* value="81" */
.markdown-preview-view progress[value="81"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="81"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="81"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.1em - 20px);
}

/* value="82" */
.markdown-preview-view progress[value="82"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="82"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="82"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.2em - 20px);
}

/* value="83" */
.markdown-preview-view progress[value="83"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="83"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="83"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.3em - 20px);
}

/* value="84" */
.markdown-preview-view progress[value="84"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="84"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="84"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.4em - 20px);
}

/* value="85" */
.markdown-preview-view progress[value="85"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="85"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="85"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.5em - 20px);
}

/* value="86" */
.markdown-preview-view progress[value="86"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="86"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="86"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.6em - 20px);
}

/* value="87" */
.markdown-preview-view progress[value="87"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="87"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="87"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.7em - 20px);
}

/* value="88" */
.markdown-preview-view progress[value="88"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="88"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="88"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.8em - 20px);
}

/* value="89" */
.markdown-preview-view progress[value="89"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="89"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="89"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.9em - 20px);
}

/* value="90" */
.markdown-preview-view progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="90"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9em - 20px);
}

/* value="91" */
.markdown-preview-view progress[value="91"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="91"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="91"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.1em - 20px);
}

/* value="92" */
.markdown-preview-view progress[value="92"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="92"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="92"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.2em - 20px);
}

/* value="93" */
.markdown-preview-view progress[value="93"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="93"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="93"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.3em - 20px);
}

/* value="94" */
.markdown-preview-view progress[value="94"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="94"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="94"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.4em - 20px);
}

/* value="95" */
.markdown-preview-view progress[value="95"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="95"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="95"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.5em - 20px);
}

/* value="96" */
.markdown-preview-view progress[value="96"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="96"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="96"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.6em - 20px);
}

/* value="97" */
.markdown-preview-view progress[value="97"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="97"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="97"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.7em - 20px);
}

/* value="98" */
.markdown-preview-view progress[value="98"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="98"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="98"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.8em - 20px);
}

/* value="99" */
.markdown-preview-view progress[value="99"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="99"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="99"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.9em - 20px);
}



.markdown-preview-view progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="100"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(10em - 20px);
}

/*# sourceMappingURL=sidebars.css.map */

```

-  `CardLikeMinimal.css`

```
/* MIT License | Copyright (c) Stephan Ango (@kepano) 
extract from minimal-theme 
*/
:root {
  --cards-min-width: 180px;
  --cards-max-width: 1fr;
  --cards-mobile-width: 120px;
  --cards-image-height: 400px;
  --cards-padding: 1.2em;
  --cards-image-fit: contain;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-aspect-ratio: auto;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width))); }

@media (max-width: 400pt) {
  :root {
    --cards-min-width:var(--cards-mobile-width); } }
.cards.table-100 table.dataview tbody,
.table-100 .cards table.dataview tbody {
  padding: 0.25rem 0.75rem; }

.cards table.dataview tbody {
  clear: both;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: var(--cards-columns);
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem; }
.cards table.dataview>tbody>tr {
	background-color: var(--cards-background);
	border: var(--cards-border-width) solid var(--background-modifier-border);
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0 0 calc(var(--cards-padding)/3) 0;
	border-radius: 6px;
	overflow: hidden;
	transition: box-shadow .15s linear;
	max-width: var(--cards-max-width);
	height: auto
}
.cards table.dataview>tbody>tr:hover {
	border: var(--cards-border-width) solid var(--background-modifier-border-hover);
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .05), 0 1px 3px 1px rgba(0, 0, 0, .025);
	transition: box-shadow .15s linear
}
.cards table.dataview tbody > tr > td {
  /* Paragraphs */
  /* Links */
  /* Buttons */
  /* Lists */
  /* Images */ }
  .cards table.dataview tbody > tr > td:first-child {
    font-weight: var(--bold-weight); }
  .cards table.dataview tbody > tr > td:first-child a {
    padding: 0 0 calc(var(--cards-padding)/3);
    display: block; }
  .cards table.dataview tbody > tr > td:not(:first-child) {
    font-size: 90%;
    color: var(--text-muted); }
  .cards table.dataview tbody > tr > td .el-p {
    display: block;
    width: 100%; }
  .cards table.dataview tbody > tr > td > *:not(.el-embed-image) {
    padding: calc(var(--cards-padding)/3) 0; }
  .cards table.dataview tbody > tr > td:not(:last-child):not(:first-child) > .el-p:not(.el-embed-image) {
    border-bottom: 1px solid var(--background-modifier-border);
    width: 100%; }
  .cards table.dataview tbody > tr > td a {
    text-decoration: none; }
  .cards table.dataview tbody > tr > td > button {
    width: 100%;
    margin: calc(var(--cards-padding)/2) 0; }
  .cards table.dataview tbody > tr > td:last-child > button {
    margin-bottom: calc(var(--cards-padding)/6); }
  .cards table.dataview tbody > tr > td > ul {
    width: 100%;
    padding: 0.25em 0 !important;
    margin: 0 auto !important; }
  .cards table.dataview tbody > tr > td:not(:last-child) > ul {
    border-bottom: 1px solid var(--background-modifier-border); }
  .cards table.dataview tbody > tr > td .el-embed-image {
    background-color: var(--background-secondary);
    display: block;
    margin: 0 calc(var(--cards-padding)/-2) 0 calc(var(--cards-padding)/-2);
    width: calc(100% + var(--cards-padding)); }
  .cards table.dataview tbody > tr > td img {
    aspect-ratio: var(--cards-aspect-ratio);
    width: 100%;
    object-fit: var(--cards-image-fit);
    max-height: var(--cards-image-height);
    background-color: var(--background-secondary);
    vertical-align: bottom; }

.markdown-source-view.mod-cm6.cards .dataview.table-view-table > tbody > tr > td,
.trim-cols .cards table.dataview tbody > tr > td {
  white-space: normal; }

.cards .dataview.table-view-table > tbody > tr > td,
.cards table.dataview tbody > tr > td,
.markdown-source-view.mod-cm6.cards .dataview.table-view-table > tbody > tr > td,
.markdown-source-view.mod-cm6.cards table.dataview tbody > tr > td {
  border-bottom: none;
  padding: 0 !important;
  line-height: 1.2;
  width: calc(100% - var(--cards-padding));
  margin: 0 auto;
  overflow: visible !important;
  max-width: 100%;
  display: flex; }

.links-int-on .cards table.dataview tbody > tr > td a {
  text-decoration: none; }

/* Block button */
.markdown-source-view.mod-cm6.cards .edit-block-button {
  top: 0px; }

/* ------------------- */
/* Sorting menu */
.cards.table-100 table.dataview thead > tr,
.table-100 .cards table.dataview thead > tr {
  right: 0.75rem; }

.table-100 .cards table.dataview thead:before,
.cards.table-100 table.dataview thead:before {
  margin-right: 0.75rem; }

.theme-light .cards table.dataview thead:before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="black" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>'); }

.cards .el-pre + .el-lang-dataview .table-view-thead {
  padding-top: 8px; }
.cards table.dataview thead {
  user-select: none;
  width: 180px;
  display: block;
  float: right;
  position: relative;
  text-align: right;
  height: 24px;
  padding-bottom: 4px; }
.cards table.dataview thead:hover:before {
  opacity: 0.5;
  background-color: var(--background-modifier-hover); }
.cards table.dataview thead:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 16px;
  background-repeat: no-repeat;
  cursor: var(--cursor);
  text-align: right;
  padding: var(--size-4-1) var(--size-4-2);
  margin-bottom: 2px;
  border-radius: var(--radius-s);
  font-weight: 500;
  font-size: var(--font-adaptive-small);
  opacity: 0.25;
  background-position: center center;
  background-size: 16px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="white" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>'); }
.cards table.dataview thead > tr {
  top: -1px;
  position: absolute;
  display: none;
  z-index: 9;
  border: 1px solid var(--background-modifier-border-hover);
  background-color: var(--background-secondary);
  box-shadow: var(--shadow-s);
  padding: 6px;
  border-radius: var(--radius-m);
  flex-direction: column;
  margin: 26px 0 0 0;
  width: 100%; }
.cards table.dataview thead:hover > tr {
  display: flex; }
.cards table.dataview thead > tr > th {
  display: block;
  padding: 3px 30px 3px 6px !important;
  border-radius: var(--radius-s);
  width: 100%;
  font-weight: 400;
  color: var(--text-normal);
  cursor: var(--cursor);
  border: none;
  font-size: var(--font-ui-small); }
.cards table.dataview thead > tr > th[sortable-style="sortable-asc"],
.cards table.dataview thead > tr > th[sortable-style="sortable-desc"] {
  color: var(--text-normal); }
.cards table.dataview thead > tr > th:hover {
  color: var(--text-normal);
  background-color: var(--background-modifier-hover); }

/* ------------------- */
/* Helper classes */
.cards.cards-16-9 {
  --cards-aspect-ratio: 16/9; }
.cards.cards-1-1 {
  --cards-aspect-ratio: 1/1; }
.cards.cards-2-1 {
  --cards-aspect-ratio: 2/1; }
.cards.cards-2-3 {
  --cards-aspect-ratio: 2/3; }
.cards.cards-cols-1 {
  --cards-columns: repeat(1, minmax(0, 1fr)); }
.cards.cards-cols-2 {
  --cards-columns: repeat(2, minmax(0, 1fr)); }
.cards.cards-cover table.dataview tbody > tr > td img {
  object-fit: cover; }
.cards.cards-align-bottom table.dataview tbody > tr > td:last-child {
  align-items: flex-end;
  flex-grow: 1; }

@media (max-width: 400pt) {
  .cards table.dataview tbody > tr > td:not(:first-child) {
    font-size: 80%; } }
@media (min-width: 400pt) {
  .cards-cols-3 {
    --cards-columns: repeat(3, minmax(0, 1fr)); }

  .cards-cols-4 {
    --cards-columns: repeat(4, minmax(0, 1fr)); }

  .cards-cols-5 {
    --cards-columns: repeat(5, minmax(0, 1fr)); }

  .cards-cols-6 {
    --cards-columns: repeat(6, minmax(0, 1fr)); }

  .cards-cols-7 {
    --cards-columns: repeat(7, minmax(0, 1fr)); }

  .cards-cols-8 {
    --cards-columns: repeat(8, minmax(0, 1fr)); } }

```

- `软萌小猫进度modified.css`(可选)

```
/* AGPLv3 License
Nyan Cat Progress Bars
Author: AnubisNekhet
Note: If you decide to implement it in your theme or redistribute it, please keep this comment (Especially for *certain* individuals who may try to rebrand it as their own :))
Support me: https://buymeacoffee.com/AnubisNekhet
*/
/* This Snippet will only work for snippets with the following syntax:
  <progress value="x" max="100" class="nyan-cat"></progress> (or neko or matcha, depends on which you use)
  x can be a multiple of 1 from 0 to 100
  Example: <progress value="71" max="100" class="nyan-cat"></progress>
modified by OURSPACE-  follow me at https://github.com/WinHex89
*/

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar {
  background-color: var(--background-secondary);
  box-shadow: none;
  border-radius: 6px;
  overflow: hidden;
}

/*bar bg */
.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-bar {
  background: var(--text-selection);
  filter: opacity(0.80);
}

/* the cat */
.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::after {
  background: url("data:image/png;base64,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") !important;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::-webkit-progress-value {
  background: linear-gradient(to bottom, var(--color-red) 0%, var(--color-orange) 16.5%, var(--color-yellow) 33%, var(--color-green) 50%, var(--color-cyan) 66%, var(--color-purple) 83.5%, var(--color-red) 100%) !important;
  overflow: hidden;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat]::after {
  content: "";
  width: 30px;
  height: 24px;
  background-size: contain !important;
  position: absolute;
  margin-top: -24px;
  background-repeat: no-repeat !important;
}

.markdown-preview-view progress[value][max="100"][class*=nyan-cat], .markdown-rendered progress[value][max="100"][class*=nyan-cat], .markdown-source-view.is-live-preview progress[value][max="100"][class*=nyan-cat] {
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  appearance: none;
  box-sizing: border-box;
  display: inline-block; 
  height: 18px;
  margin-bottom: 4px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 0px;
  border: 0;
  vertical-align: -0.2rem;
}

.markdown-preview-view progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="0"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0em - 20px);
}

.markdown-preview-view progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="10"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1em - 20px);
}

.markdown-preview-view progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="20"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2em - 20px);
}

.markdown-preview-view progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="30"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3em - 20px);
}

.markdown-preview-view progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="40"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4em - 20px);
}

.markdown-preview-view progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="50"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5em - 20px);
}

.markdown-preview-view progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="60"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6em - 20px);
}

.markdown-preview-view progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="70"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7em - 20px);
}

.markdown-preview-view progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="80"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8em - 20px);
}

.markdown-preview-view progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="90"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9em - 20px);
}

.markdown-preview-view progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="100"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(10em - 20px);
}

/* ----------------------------------------- */

.markdown-preview-view progress[value][max="100"][class*=matcha]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=matcha]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha]::-webkit-progress-bar {
  background-color: var(--background-secondary);
  box-shadow: none;
  border-radius: 6px;
  overflow: hidden;
}

/*bar bg */
.markdown-preview-view progress[value][max="100"][class*=matcha]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=matcha]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha]::-webkit-progress-bar {
  background: rgba(var(--color-green-rgb), 0.2);
}

/* the cat */
.markdown-preview-view progress[value][max="100"][class*=matcha]::after,
.markdown-rendered progress[value][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha]::after {
  background: url("data:image/png;base64,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") !important;
}

.markdown-preview-view progress[value][max="100"][class*=matcha]::-webkit-progress-value,
.markdown-rendered progress[value][max="100"][class*=matcha]::-webkit-progress-value,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha]::-webkit-progress-value {
  background: linear-gradient(to bottom, var(--color-green) 0%, rgba(var(--color-green-rgb), 0.2) 50%, var(--color-green) 100%) !important;
  overflow: hidden;
}

.markdown-preview-view progress[value][max="100"][class*=matcha]::after,
.markdown-rendered progress[value][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha]::after {
  content: "";
  width: 40px;
  height: 38px;
  background-size: contain !important;
  position: absolute;
  margin-top: -35px;
  background-repeat: no-repeat !important;
}

.markdown-preview-view progress[value][max="100"][class*=matcha], .markdown-rendered progress[value][max="100"][class*=matcha], .markdown-source-view.is-live-preview progress[value][max="100"][class*=matcha] {
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  appearance: none;
  box-sizing: border-box;
  display: inline-block; 
  height: 18px;
  margin-bottom: 4px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 0px;
  border: 0;
  vertical-align: -0.2rem;
}

.markdown-preview-view progress[value="0"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="0"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="0"][max="100"][class*=matcha]::after {
  margin-left: calc(0em - 20px);
}

.markdown-preview-view progress[value="10"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="10"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="10"][max="100"][class*=matcha]::after {
  margin-left: calc(1em - 20px);
}

.markdown-preview-view progress[value="20"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="20"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="20"][max="100"][class*=matcha]::after {
  margin-left: calc(2em - 20px);
}

.markdown-preview-view progress[value="30"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="30"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="30"][max="100"][class*=matcha]::after {
  margin-left: calc(3em - 20px);
}

.markdown-preview-view progress[value="40"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="40"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="40"][max="100"][class*=matcha]::after {
  margin-left: calc(4em - 20px);
}

.markdown-preview-view progress[value="50"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="50"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="50"][max="100"][class*=matcha]::after {
  margin-left: calc(5em - 20px);
}

.markdown-preview-view progress[value="60"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="60"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="60"][max="100"][class*=matcha]::after {
  margin-left: calc(6em - 20px);
}

.markdown-preview-view progress[value="70"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="70"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="70"][max="100"][class*=matcha]::after {
  margin-left: calc(7em - 20px);
}

.markdown-preview-view progress[value="80"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="80"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="80"][max="100"][class*=matcha]::after {
  margin-left: calc(8em - 20px);
}

.markdown-preview-view progress[value="90"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="90"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="90"][max="100"][class*=matcha]::after {
  margin-left: calc(9em - 20px);
}

.markdown-preview-view progress[value="100"][max="100"][class*=matcha]::after,
.markdown-rendered progress[value="100"][max="100"][class*=matcha]::after,
.markdown-source-view.is-live-preview progress[value="100"][max="100"][class*=matcha]::after {
  margin-left: calc(10em - 20px);
}

/* ------------------------------------------- */

.markdown-preview-view progress[value][max="100"][class*=neko]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=neko]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=neko]::-webkit-progress-bar {
  background-color: var(--background-secondary);
  box-shadow: none;
  border-radius: 6px;
  overflow: hidden;
}

/*bar bg */
.markdown-preview-view progress[value][max="100"][class*=neko]::-webkit-progress-bar,
.markdown-rendered progress[value][max="100"][class*=neko]::-webkit-progress-bar,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=neko]::-webkit-progress-bar {
  background: var(--text-selection);
  filter: opacity(0.80);
}

/* the cat */
.markdown-preview-view progress[value][max="100"][class*=neko]::after,
.markdown-rendered progress[value][max="100"][class*=neko]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=neko]::after {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTH4sLH4sLP///34sLH4sLH4sLH4sLH4sLH4sLPe9ve7Z1JlXS7uOgIc8Nax3aPnu686uo9rEu//5+IlqLvUAAAAKdFJOUwCw//8X65h4xD0bhv42AAAHeUlEQVR42u1b2ZKlKhBsV+Sw6///61UWBY4igj0dN6LypWNijpoWWQtV+PMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAGj3+vzHGzdC27TTivzcdzuWAN8oa01/S7tFkSKA+48c75z+ljQ4aA7r99dQGGPsnwkJjg3D/gplDFtPNLbH+FRV8f0+cvZ7DwytuFMqFmpUhcnPLRnPuuo4IRxtlUR4Pw9SyNpyZ7DZIpm+ZsnWvn0r0zwnNXJ1Qgtsj6rXBDQfNYzP2lHq4MfRifj7zPNNFEsxcnBQHenDuFs06cUttMCXdJVLksNjNzBkxqqox9Ra+PDtr42337JNuyDvyWfbfW2OP1w9pHGWl35NXmnozNOtCsBQD7U2i+3zk/ntJ08J2uYgz7wFJCd5gM7R7PHEW5wlTawJEfj4f7zVFijWyZt5FSIypi4N1r81mtMk3W+gXUNer1zt1fA59bFfwS3ccfWVor/ksokofmxWUv8T63vJaH8ipw9eHCzrbZaiZNBqE0FrMuKjh+br8EFLlihsH6S2wNTy9lJx2KbVspH19dIvibQLCe8NVWl2VPqZtra1tB2QC02qUa9L6F9tzI9IqRTl09VVadfqYTELWYQ7tsYleOjc2mYV8Yn3QJOmWqsDSUtXED0eaudXaswC6ljTTkv58vPAuRXuD2bd0nT580taWUyrm6pWYjaQDfWyOyClj82xfhcyzYpR+K2TR4VL/B36L9GrNZhqTUdpKOoofs+xOIG3l6MlaX8nSOfQx6btS2kk60EcKZOVNZSAPE/Smf0LaSvoh6QhGWRWidqRVnsJG41Jn6siHfmUT9MpE3dg4PeeFTS1paSW9lHE2r2yCHirOiPpOWW7RG0nLcmnspGtEjdzOiebcAZs0T8qlsZO2oi7bILqwL3LucKSWCs6W9FIeqXsXQVnOHRrnh0vX1bI2kbpM1IMNHyRH1C61yK6rZk3m8vTiyrxNYlOOH3ImRNfVsyay3BNHv6DOai3ZpamCrPdEdbPFijd7bfcG667OE4WL1E1GPnyH9EI+ywueqF+8DxvWCI1mt2c619PZPqSU9UdWeOIu6kAfPWqGsIifRvSapE3NqupyonLbxMlNJxJbEC5fIe22B5WdDxc/0JC/SS3G7G6H6yK10hLDw80WtXuXNKqrmbbAOfgdWbru+dS602OC8pMNap2keRVpHOhjV65QYQdJiTcNbZuQ5VuuwemDHJTVt7eRNw1tu5zlzbHR6sO147xeYRd3Rl8z9NGT+qnRh+PMWcIy6j3STtW4Qh+OM73YRxHT430RrGr4sunDNT0vo7Bod4d9CaSKND4ccE77DXmTtE2KFW3Itk2Tel8dzhVLSdtSiJObB4h3SduoV0ea3FlFvUza5Ks+HqBnxRN7FCJJaZvJUNn9gj7i4dKY1+JDOdXbWv++zVlXw/EgHt+M5oMJPe3+APRbHmNeEBxfLiqeihpFFhyyD/eIv+BsRD1eGvr6RBpq308bj5LiFJUUvfcPlMosf2NoE6mH0A2b83+cuGG1oud52+DoaRZPxntK/ShEo+yCfHU0lyUgqszPZBu88dytr6kGBAk8EQfLfqjjeodQrg45+3NCfxB+v8lytFlE2ueJfR+dAn8tVsf1NFzlXGRoR5OXQMXIf53AX3Fxc+7UyHyVtbovN0w6k7aTEJBGfvS7II2KsyENuAqm5sgBCT/dbCrqaT8iHfjh5LvoN2lRnBjale1MLvVLLya4CdL4yimnKIeXdbpmpsjNHpCbIMf0HxXTVrekL+Qx/V7dMes1tIU4iTyHCP0q2aTxhP8JaZ3ubAQX9DwZpEiPl7mlivQipSRyuYtv/Ct8L5KQ9Uobpy9Io8uCr4K0dIcRPmRJxDeuzDHaY9+zHBdGGTGIHv1lJ6eY9PHkxKScMKZP+q1/53hkq6HCc4tBnP5Bw1RvacWINzMJ8aC0Da5jQYHR53QU+ie7FuH/kkSk86e4MryOBuXncN9FdccT81oDfu6MDR2d0ss29GZqFC78XQOhaUtJy3LSJCbd4It6OtWjoSQ/7LptmXzR0v5nJ/j2zPvQPio8dHhiiuoTeEKVeiKJNR2E6uHGFfHDCVtUQHNW5oihO6jomDse0pZ+XJXG53Z92g+6T4G0qP1EYGfd9zmHe57vVfjOnrpnL8/m4rug9ayE0Pzm6WNLS2PezaizPYzJlT5vUlQBrLt3+3h94vxJg1fk5zLm9wck43c97ZQ30mDOTrJJ7x+7rbsPNs/3aZGGcorroCczIh518UV2bx2djb4PrK8SQHw1SAqHRy5ieKvE8gcCU/sU9CR0PxMIYTye8JgP3R4N4x6BnSgm3yuIOr4HbKkynbT28eTWffGZC3EeBbkR07zhZKq+HVq/6EYdeDhGxAhN0zTksSanba5q1Hz1inegbwwu1ihtUsUEf4XvhNAL36/+pD8cewHDurQjcsfQfhX9iQMMI8qV1rDyxLj/+dfA4xBR7t14xClq+oIx6Z9+GN8fcn/Vav8BQw2mldS1BrwAAAAASUVORK5CYII=") !important;
}

.markdown-preview-view progress[value][max="100"][class*=neko]::-webkit-progress-value,
.markdown-rendered progress[value][max="100"][class*=neko]::-webkit-progress-value,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=neko]::-webkit-progress-value {
  background: linear-gradient(to bottom, var(--color-accent) 0%, white 45%, white 55%, var(--color-accent) 100%) !important;
  overflow: hidden;
}

.markdown-preview-view progress[value][max="100"][class*=neko]::after,
.markdown-rendered progress[value][max="100"][class*=neko]::after,
.markdown-source-view.is-live-preview progress[value][max="100"][class*=neko]::after {
  content: "";
  width: 40px;
  height: 36px;
  background-size: contain !important;
  position: absolute;
  margin-top: -36px;
  background-repeat: no-repeat !important;
}

.markdown-preview-view progress[value][max="100"][class*=neko], .markdown-rendered progress[value][max="100"][class*=neko], .markdown-source-view.is-live-preview progress[value][max="100"][class*=neko] {
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  appearance: none;
  box-sizing: border-box;
  display: inline-block; 
  height: 18px;
  margin-bottom: 4px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 0px;
  border: 0;
  vertical-align: -0.2rem;
}

.markdown-preview-view progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="0"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="0"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0em - 20px);
}



.markdown-preview-view progress[value="1"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="1"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="1"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.1em - 20px);
}

.markdown-preview-view progress[value="2"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="2"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="2"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.2em - 20px);
}

.markdown-preview-view progress[value="3"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="3"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="3"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.3em - 20px);
}

.markdown-preview-view progress[value="4"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="4"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="4"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.4em - 20px);
}

.markdown-preview-view progress[value="5"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="5"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="5"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.5em - 20px);
}


/* value="6" */
.markdown-preview-view progress[value="6"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="6"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="6"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.6em - 20px);
}

/* value="7" */
.markdown-preview-view progress[value="7"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="7"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="7"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.7em - 20px);
}

/* value="8" */
.markdown-preview-view progress[value="8"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="8"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="8"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.8em - 20px);
}

/* value="9" */
.markdown-preview-view progress[value="9"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="9"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="9"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(0.9em - 20px);
}

/* value="10" */
.markdown-preview-view progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="10"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="10"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1em - 20px);
}



/* value="11" */
.markdown-preview-view progress[value="11"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="11"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="11"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.1em - 20px);
}

/* value="12" */
.markdown-preview-view progress[value="12"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="12"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="12"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.2em - 20px);
}

/* value="13" */
.markdown-preview-view progress[value="13"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="13"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="13"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.3em - 20px);
}

/* value="14" */
.markdown-preview-view progress[value="14"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="14"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="14"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.4em - 20px);
}

/* value="15" */
.markdown-preview-view progress[value="15"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="15"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="15"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.5em - 20px);
}

/* value="16" */
.markdown-preview-view progress[value="16"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="16"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="16"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.6em - 20px);
}

/* value="17" */
.markdown-preview-view progress[value="17"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="17"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="17"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.7em - 20px);
}

/* value="18" */
.markdown-preview-view progress[value="18"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="18"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="18"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.8em - 20px);
}

/* value="19" */
.markdown-preview-view progress[value="19"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="19"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="19"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(1.9em - 20px);
}

/* value="20" */
.markdown-preview-view progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="20"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="20"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2em - 20px);
}




/* value="21" */
.markdown-preview-view progress[value="21"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="21"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="21"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.1em - 20px);
}

/* value="22" */
.markdown-preview-view progress[value="22"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="22"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="22"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.2em - 20px);
}

/* value="23" */
.markdown-preview-view progress[value="23"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="23"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="23"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.3em - 20px);
}

/* value="24" */
.markdown-preview-view progress[value="24"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="24"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="24"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.4em - 20px);
}

/* value="25" */
.markdown-preview-view progress[value="25"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="25"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="25"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.5em - 20px);
}

/* value="26" */
.markdown-preview-view progress[value="26"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="26"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="26"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.6em - 20px);
}

/* value="27" */
.markdown-preview-view progress[value="27"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="27"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="27"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.7em - 20px);
}

/* value="28" */
.markdown-preview-view progress[value="28"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="28"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="28"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.8em - 20px);
}

/* value="29" */
.markdown-preview-view progress[value="29"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="29"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="29"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(2.9em - 20px);
}

/* value="30" */
.markdown-preview-view progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="30"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="30"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3em - 20px);
}



/* value="31" */
.markdown-preview-view progress[value="31"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="31"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="31"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.1em - 20px);
}

/* value="32" */
.markdown-preview-view progress[value="32"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="32"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="32"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.2em - 20px);
}

/* value="33" */
.markdown-preview-view progress[value="33"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="33"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="33"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.3em - 20px);
}

/* value="34" */
.markdown-preview-view progress[value="34"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="34"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="34"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.4em - 20px);
}

/* value="35" */
.markdown-preview-view progress[value="35"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="35"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="35"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.5em - 20px);
}

/* value="36" */
.markdown-preview-view progress[value="36"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="36"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="36"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.6em - 20px);
}

/* value="37" */
.markdown-preview-view progress[value="37"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="37"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="37"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.7em - 20px);
}

/* value="38" */
.markdown-preview-view progress[value="38"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="38"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="38"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.8em - 20px);
}

/* value="39" */
.markdown-preview-view progress[value="39"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="39"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="39"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(3.9em - 20px);
}

/* value="40" */
.markdown-preview-view progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="40"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="40"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4em - 20px);
}


/* value="41" */
.markdown-preview-view progress[value="41"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="41"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="41"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.1em - 20px);
}

/* value="42" */
.markdown-preview-view progress[value="42"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="42"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="42"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.2em - 20px);
}

/* value="43" */
.markdown-preview-view progress[value="43"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="43"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="43"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.3em - 20px);
}

/* value="44" */
.markdown-preview-view progress[value="44"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="44"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="44"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.4em - 20px);
}

/* value="45" */
.markdown-preview-view progress[value="45"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="45"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="45"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.5em - 20px);
}

/* value="46" */
.markdown-preview-view progress[value="46"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="46"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="46"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.6em - 20px);
}

/* value="47" */
.markdown-preview-view progress[value="47"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="47"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="47"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.7em - 20px);
}

/* value="48" */
.markdown-preview-view progress[value="48"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="48"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="48"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.8em - 20px);
}

/* value="49" */
.markdown-preview-view progress[value="49"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="49"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="49"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(4.9em - 20px);
}

/* value="50" */
.markdown-preview-view progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="50"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="50"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5em - 20px);
}

/* value="51" */
.markdown-preview-view progress[value="51"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="51"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="51"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.1em - 20px);
}

/* value="52" */
.markdown-preview-view progress[value="52"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="52"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="52"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.2em - 20px);
}

/* value="53" */
.markdown-preview-view progress[value="53"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="53"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="53"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.3em - 20px);
}

/* value="54" */
.markdown-preview-view progress[value="54"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="54"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="54"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.4em - 20px);
}

/* value="55" */
.markdown-preview-view progress[value="55"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="55"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="55"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.5em - 20px);
}

/* value="56" */
.markdown-preview-view progress[value="56"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="56"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="56"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.6em - 20px);
}

/* value="57" */
.markdown-preview-view progress[value="57"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="57"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="57"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.7em - 20px);
}

/* value="58" */
.markdown-preview-view progress[value="58"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="58"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="58"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.8em - 20px);
}

/* value="59" */
.markdown-preview-view progress[value="59"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="59"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="59"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(5.9em - 20px);
}

/* value="60" */
.markdown-preview-view progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="60"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="60"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6em - 20px);
}


/* value="61" */
.markdown-preview-view progress[value="61"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="61"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="61"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.1em - 20px);
}

/* value="62" */
.markdown-preview-view progress[value="62"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="62"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="62"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.2em - 20px);
}

/* value="63" */
.markdown-preview-view progress[value="63"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="63"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="63"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.3em - 20px);
}

/* value="64" */
.markdown-preview-view progress[value="64"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="64"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="64"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.4em - 20px);
}

/* value="65" */
.markdown-preview-view progress[value="65"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="65"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="65"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.5em - 20px);
}

/* value="66" */
.markdown-preview-view progress[value="66"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="66"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="66"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.6em - 20px);
}

/* value="67" */
.markdown-preview-view progress[value="67"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="67"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="67"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.7em - 20px);
}

/* value="68" */
.markdown-preview-view progress[value="68"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="68"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="68"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.8em - 20px);
}

/* value="69" */
.markdown-preview-view progress[value="69"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="69"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="69"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(6.9em - 20px);
}

/* value="70" */
.markdown-preview-view progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="70"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="70"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7em - 20px);
}

/* value="71" */
.markdown-preview-view progress[value="71"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="71"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="71"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.1em - 20px);
}

/* value="72" */
.markdown-preview-view progress[value="72"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="72"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="72"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.2em - 20px);
}

/* value="73" */
.markdown-preview-view progress[value="73"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="73"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="73"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.3em - 20px);
}

/* value="74" */
.markdown-preview-view progress[value="74"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="74"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="74"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.4em - 20px);
}

/* value="75" */
.markdown-preview-view progress[value="75"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="75"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="75"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.5em - 20px);
}

/* value="76" */
.markdown-preview-view progress[value="76"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="76"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="76"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.6em - 20px);
}

/* value="77" */
.markdown-preview-view progress[value="77"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="77"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="77"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.7em - 20px);
}

/* value="78" */
.markdown-preview-view progress[value="78"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="78"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="78"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.8em - 20px);
}

/* value="79" */
.markdown-preview-view progress[value="79"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="79"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="79"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(7.9em - 20px);
}

/* value="80" */
.markdown-preview-view progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="80"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="80"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8em - 20px);
}

/* value="81" */
.markdown-preview-view progress[value="81"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="81"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="81"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.1em - 20px);
}

/* value="82" */
.markdown-preview-view progress[value="82"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="82"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="82"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.2em - 20px);
}

/* value="83" */
.markdown-preview-view progress[value="83"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="83"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="83"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.3em - 20px);
}

/* value="84" */
.markdown-preview-view progress[value="84"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="84"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="84"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.4em - 20px);
}

/* value="85" */
.markdown-preview-view progress[value="85"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="85"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="85"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.5em - 20px);
}

/* value="86" */
.markdown-preview-view progress[value="86"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="86"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="86"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.6em - 20px);
}

/* value="87" */
.markdown-preview-view progress[value="87"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="87"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="87"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.7em - 20px);
}

/* value="88" */
.markdown-preview-view progress[value="88"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="88"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="88"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.8em - 20px);
}

/* value="89" */
.markdown-preview-view progress[value="89"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="89"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="89"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(8.9em - 20px);
}

/* value="90" */
.markdown-preview-view progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="90"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="90"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9em - 20px);
}

/* value="91" */
.markdown-preview-view progress[value="91"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="91"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="91"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.1em - 20px);
}

/* value="92" */
.markdown-preview-view progress[value="92"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="92"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="92"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.2em - 20px);
}

/* value="93" */
.markdown-preview-view progress[value="93"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="93"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="93"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.3em - 20px);
}

/* value="94" */
.markdown-preview-view progress[value="94"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="94"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="94"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.4em - 20px);
}

/* value="95" */
.markdown-preview-view progress[value="95"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="95"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="95"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.5em - 20px);
}

/* value="96" */
.markdown-preview-view progress[value="96"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="96"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="96"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.6em - 20px);
}

/* value="97" */
.markdown-preview-view progress[value="97"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="97"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="97"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.7em - 20px);
}

/* value="98" */
.markdown-preview-view progress[value="98"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="98"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="98"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.8em - 20px);
}

/* value="99" */
.markdown-preview-view progress[value="99"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="99"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="99"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(9.9em - 20px);
}



.markdown-preview-view progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-rendered progress[value="100"][max="100"][class*=nyan-cat]::after,
.markdown-source-view.is-live-preview progress[value="100"][max="100"][class*=nyan-cat]::after {
  margin-left: calc(10em - 20px);
}


/*# sourceMappingURL=sidebars.css.map */

```

- `多彩Progress.css`（可选）

```

progress[value^="1"]::-webkit-progress-value, 
progress[value^="2"]::-webkit-progress-value,
progress[value^="3"]::-webkit-progress-value {
  background: var(--color-red) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

progress[value^="4"]::-webkit-progress-value,
progress[value^="5"]::-webkit-progress-value {
  background: var(--color-orange) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

progress[value^="6"]::-webkit-progress-value,
progress[value^="7"]::-webkit-progress-value {
  background: var(--color-yellow) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

progress[value^="8"]::-webkit-progress-value,
progress[value^="9"]::-webkit-progress-value {
  background: var(--color-green) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

progress[value="1"]::-webkit-progress-value, 
progress[value="2"]::-webkit-progress-value,
progress[value="3"]::-webkit-progress-value,
progress[value="4"]::-webkit-progress-value,
progress[value="5"]::-webkit-progress-value,
progress[value="6"]::-webkit-progress-value,
progress[value="7"]::-webkit-progress-value,
progress[value="8"]::-webkit-progress-value,
progress[value="9"]::-webkit-progress-value
{
  background: var(--color-red) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

progress[value="100"]::-webkit-progress-value {
  background: var(--color-blue) !important;
  box-shadow: none;
  border-color: transparent;
  border-radius: 2px;
}

.markdown-preview-view progress, .markdown-rendered progress, .markdown-source-view.is-live-preview progress {
  height: 15px;
}
```

其中 `彩虹猫猫进度条` 和 `软萌小猫进度条`，这两个进度条 CSS 的原作者是**AnuPpuccin**主题的创作者，由减数君分享。

这是 Obsidian 默认的进度条效果

![默认的CSS效果.png](https://cdn.pkmer.cn/images/%E9%BB%98%E8%AE%A4%E7%9A%84CSS%E6%95%88%E6%9E%9C.png!pkmer)

接下来，我们用 CSS 把它换成**动态**的**彩虹猫咪**😀

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/ySibHRolxECF6BmIPxnic96eJib082PIbOpyiclhl8EIRnFNooEfKDd5ltGpcx4mGOXOSDmA6icAwpibdKPX3J1v0ic2g/640?wx_fmt=gif&from=appmsg)

还有一个**静态**的**彩虹猫咪**可选 (软萌小猫进度 modified.css)

![软萌小猫.png](https://cdn.pkmer.cn/images/%E8%BD%AF%E8%90%8C%E5%B0%8F%E7%8C%AB.png!pkmer)

# 下载并配置好 Weread 和 Dataview 插件

[[obsidian-weread-plugin]]

这两个软件都是比较容易配置的，**Weread**配置好自己的账号和批注笔记的存放位置即可。

-  在**Obsidian**中打开设置界面，找到“**Obsidian Weread Plugin**”进入插件设置页面。
-  点击登录按钮，并在弹出的登录页面中扫码登录微信读书。
-  设置笔记的保存位置和最小划线数量，以及笔记文件夹的分类方式。

用这个插件要注意以下几点：

-  采用**覆盖式更新**机制，请避免在同步的文件中直接修改内容。建议使用 Block 引用的方式，进行外部批注。
-  初次同步如果笔记数量较多，可能需要较长时间，后续只会更新有变化的部分，速度会显著提升。
-  长期不使用可能会导致 Cookie 失效，需要重新登录。

✨得益于去年底的重大更新，现在支持显示阅读**Progress**，如果你的**Yaml**区没有**Progress**，可以尝试重新生成批注笔记的文件。

![支持展示Progress.png](https://cdn.pkmer.cn/images/%E6%94%AF%E6%8C%81%E5%B1%95%E7%A4%BAProgress.png!pkmer)

另外，对于**刚开始读**的书，**progress**的数据可能会出现些许问题，比如说显示 -1，可能是**Weread**获取**progress**数据失败，那么就**" 请再阅读一会 "****。**

![多读会就好了.jpg](https://cdn.pkmer.cn/images/%E5%A4%9A%E8%AF%BB%E4%BC%9A%E5%B0%B1%E5%A5%BD%E4%BA%86.jpg!pkmer)

# 启用 CSS

启用所需的 CSS，启用过程可以参考文章:[Obsidian 的 CSS 代码片段 ](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/obsidian%E7%9A%84css%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/)，原本的 `彩虹猫猫进度条modified.css` 和 `软萌小猫进度modified.css` 只支持 10 的倍数的进度，并不支持 1%，33% 这种的。

![原来的CSS.png](https://cdn.pkmer.cn/images/%E5%8E%9F%E6%9D%A5%E7%9A%84CSS.png!pkmer)

我用 AI 补齐了 1% 到 100% 的代码，如果你对这个 CSS 有其他用途，注意目前只支持整数，不支持小数🥹。

![补齐后的 1.png](https://cdn.pkmer.cn/images/%E8%A1%A5%E9%BD%90%E5%90%8E%E7%9A%84%201.png!pkmer)

需要着重讲一下 `CardLikeMinimal.css` 这个 CSS，这个 CSS 摘自**Minimal**主题，现支持在其他主题中进行使用。能够将**Dataview**的**表格视图**转为**卡片视图。**

**需要**在当前文档的**Yaml**区 cssclasses 进行**定义**

一般使用 `cssclasses:cards`

![CSS开启前.png](https://cdn.pkmer.cn/images/CSS%E5%BC%80%E5%90%AF%E5%89%8D.png!pkmer)

这是使用 CardLikeMinimal.css 之前的效果，非卡片状态，不是很直观

关于 CardLikeMinimal.css 的其他**cssclasses**设置和效果，可参考大佬 `熊猫别熬夜` 的 [Obsidian 样式 - minimal 主题 Cards 卡片布局]( https://pkmer.cn/show/20230905221421 ) 此篇文章。

## 复制下列代码实现效果

````
```dataview
table "![](" + cover + ")" as Cover,author as "作者",readingtime as "阅读日期", category as "类型","<progress max=100 value=" + round(number(progress)) + " class='nyan-cat' ></progress> " + 
  round(number(progress)) + "%" as 阅读进度 

from "weread" //这里放设置的Weread书籍批注保存的位置
sort file.name
```
````

单独此 CSS 的代码

```
<progress value="71" max="100" class="nyan-cat"></progress>//这个CSS也能单独使用
```

如果觉得**彩虹猫咪**不合适的🤔，这里也提供了另外一个 CSS 供选择，能够对不同的 progress 进行不同颜色的区分

```
<progress value="0" max="100" ></progress> **0%**
<progress value="5" max="100" ></progress> **5%**
<progress value="45" max="100" ></progress> **45%**
<progress value="65" max="100" ></progress> **65%**
<progress value="85" max="100" ></progress> **75%**
<progress value="100" max="100" ></progress> **100%**

```

![其他Progress.png](https://cdn.pkmer.cn/images/%E5%85%B6%E4%BB%96Progress.png!pkmer)

多彩 Progress.css

````
```dataview
table "![](" + cover + ")" as Cover,author as "作者",readingtime as "阅读日期", category as "类型","<progress max=100 value=" + round(number(progress)) + "></progress> " + 
  round(number(progress)) + "%" as 阅读进度 

from "自己设置的weread文件夹"
sort file.name

```
````

![小猫文章配图2.png](https://cdn.pkmer.cn/images/%E5%B0%8F%E7%8C%AB%E6%96%87%E7%AB%A0%E9%85%8D%E5%9B%BE2.png!pkmer)
