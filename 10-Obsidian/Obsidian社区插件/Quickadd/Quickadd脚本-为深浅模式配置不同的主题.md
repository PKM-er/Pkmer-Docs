---
uid: 20240302000128
title: Quickadd 脚本 - 为深浅模式配置不同的主题
tags: [quickadd脚本, 主题切换]
description: " 为深浅模式配置不同的主题"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240304093154
---

# Quickadd 脚本 - 为深浅模式配置不同的主题

![2024-03-01_Quickadd脚本-为深浅模式配置不同的主题_IMG-1](https://cdn.pkmer.cn/images/202403012342453.gif!pkmer)

如果想通过快捷键切换不同的主题，或者一键切换深浅模式，再或者是深浅模式设置不同的主题，可以通过以下 Quickadd 的脚本来实践，以下脚本全部以 Quickadd 的 Macro 来进行配置 (即将代码保存为 js 文件后，在 Quikadd 里面添加对应的 Macro 的动作)。

> [!tip] 推荐使用 obsidian-day-and-night 插件
> 实际上有插件 [obsidian-day-and-night](https://github.com/CyberT17/obsidian-day-and-night)，作者：Kevin Patel ，该插件实现以上所有需求，而且可以根据一天的时间来自动切换主题颜色，相比较脚本更加稳定快捷！
> ![2024-03-01_Quickadd脚本-为深浅模式配置不同的主题_IMG-1](https://cdn.pkmer.cn/images/202403012342450.png!pkmer)

## Quickadd 切换主题

```js
// 获取所有主题
const themes = Object.keys(app.customCss.themes);
themes.unshift("default");
module.exports = {
	entry: async (QuickAdd, settings, params) => {
		const snippetName = settings["主题名称"];
		// 更换主题
		if (app.customCss.theme !== snippetName) {
			app.customCss.setTheme(snippetName);
			new Notice(`切换为${snippetName}主题`);
		}
	}
	,
	settings: {
		name: "Toggle Theme",
		author: "PandaNocturne",
		options: {
			"主题名称": {
				type: "dropdown",
				defaultValue: "Blue Topaz",
				options: themes,
			},
		}
	},
};

```

## Quickadd 一键切换深浅模式

```js
module.exports = async (params) => {
	const dark = "obsidian";
	const currentMode = app.vault.config.theme;
	if (currentMode === dark) {
		app.commands.executeCommandById("theme:use-light");
	} else { 
		app.commands.executeCommandById("theme:use-dark");
	}

};
```

## Quickadd 为深浅模式配置不同的主题

![2024-03-01_Quickadd脚本-为深浅模式配置不同的主题_IMG-2](https://cdn.pkmer.cn/images/202403012342451.png!pkmer)

![2024-03-01_Quickadd脚本-为深浅模式配置不同的主题_IMG-3](https://cdn.pkmer.cn/images/202403012342452.gif!pkmer)

```js

// 获取所有主题
const themes = Object.keys(app.customCss.themes);
themes.unshift("default");
const themesMode = ["Auto", "Dark", "Light"];

// 获取当前模式
const light = "moonstone";
const dark = "obsidian";
const currentMode = app.vault.config.theme;

module.exports = {
	entry: async (QuickAdd, settings, params) => {
		const themeName1 = settings["theme 1"];
		const themeMode1 = settings["theme 1 mode"];

		const themeName2 = settings["theme 2"];
		const themeMode2 = settings["theme 2 mode"];
		let themeName = app.customCss.theme;
		let themeMode = "Auto";

		// 更换主题
		if (themeName1 === themeName2) {
			// 如果2个主题相等，则只设置深浅模式变化
			if (currentMode == dark) {
				themeMode = "Light";
			} else if (currentMode == light) {
				themeMode = "Dark";
			}
		}
		else if (themeName !== themeName1) {
			themeName = themeName1;
			themeMode = themeMode1;
			app.customCss.setTheme(themeName);
		} else {
			themeName = themeName2;
			themeMode = themeMode2;
			app.customCss.setTheme(themeName);
		}

		switch (themeMode) {
			case "Auto":
				new Notice(`🌗切换为${themeName}主题`);
				break;
			case "Dark":
				if (currentMode != dark) { //如果当前不是暗色，就切换为暗色
					app.commands.executeCommandById("theme:use-dark");
				}
				new Notice(`🌘切换为${themeName}主题深色模式`);
				break;
			case "Light":
				if (currentMode != light) { //如果当前不是亮色，就切换为亮色
					app.commands.executeCommandById("theme:use-light");
				}
				new Notice(`🌕切换为${themeName}主题浅色模式`);
				break;
		}
	},
	settings: {
		name: "Toggle Theme",
		author: "熊猫别熬夜",
		options: {
			"theme 1": {
				type: "dropdown",
				defaultValue: "Blue Topaz",
				options: themes,
				description: "设置第1个主题",
			},
			"theme 1 mode": {
				type: "select",
				defaultValue: "Auto",
				options: themesMode,
				description: "设置第1个主题的深浅模式，默认Auto为不更改",

			},
			"theme 2": {
				type: "dropdown",
				defaultValue: "default",
				options: themes,
				description: "设置第2个主题",

			},
			"theme 2 mode": {
				type: "select",
				defaultValue: "Auto",
				options: themesMode,
				description: "设置第2个主题的深浅模式，默认Auto为不更改",
			},
		}
	},
};

```

## Reference

- [CyberT17/obsidian-day-and-night: An Obsidian plugin to automatically switch between day and night themes based on a set schedule (github.com)](https://github.com/CyberT17/obsidian-day-and-night)
- [Scripts with user settings | QuickAdd (obsidian.guide)](https://quickadd.obsidian.guide/docs/Advanced/scriptsWithSettings)


