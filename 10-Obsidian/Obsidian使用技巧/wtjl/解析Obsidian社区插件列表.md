---
uid: 20260122201244
title: 解析Obsidian社区插件列表
tags: 
description: 
author: wtjl
type: other
draft: false
editable: false
modified: 20260122201333
---

# 解析 Obsidian 社区插件列表

Obsidian 社区插件市场不支持复杂的过滤筛选, 我决定从源头拿数据自己处理.

以下是最简代码, 用 datacore 呈现(使用时将 js 改为 datacorejsx).

```js
const PLUGINS_URL = "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugins.json";
const STATS_URL   = "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json";

async function main() {
    const { manifests: installed, plugins: enabled } = app.plugins;
    
    const [plugins = [], stats = {}] = await Promise.all([
        fetch(PLUGINS_URL).then(r => r.json()).catch(() => []),
        fetch(STATS_URL).then(r => r.json()).catch(() => ({})),
    ]);
    
    const oneYearAgo = moment().subtract(1, "years");
    const filtered = plugins
        .map((p, i) => ({
            ...p,
            index: i,
            downloads: stats[p.id]?.downloads || 0,
            updated: stats[p.id]?.updated || "",
            state: enabled[p.id] ? "**已启用**" : installed[p.id] ? "未启用" : "未安装",
        }))
        .filter(p => 
            p.id in installed || 
            (moment(p.updated).isAfter(oneYearAgo) && p.downloads > 10000)
        )
        .sort((a, b) => b.downloads - a.downloads || a.id.localeCompare(b.id));
    
    return (
        <dc.Table
            rows={filtered}
            columns={[
                {id: 'name', value: p => `[${p.name}](https://github.com/${p.repo})`},
                {id: 'updated', value: p => p.updated ? moment(p.updated).fromNow() : ""},
                {id: 'downloads', value: p => p.downloads.toLocaleString()},
                {id: 'state', value: p => p.state},
            ]}
            paging={50}
        />
    );
}

return await main();
```
