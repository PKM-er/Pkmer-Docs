---
uid: 20260117172950
title: Vault 交互式全景看板：笔记热力图与回忆仪表盘
tags:
  - Datacore
  - dataview
  - Dataviewjs
  - 看板
  - 热力图
description: 通过Datacore打造笔记库看板与热力图
author: alan777
type: practice
draft: false
editable: false
modified: 20260117173759
---

# Vault 交互式全景看板：笔记热力图与回忆仪表盘

![Activities_dashboard](https://cdn.pkmer.cn/images/Activities_dashboard.gif)

从 Reddit 上看到的（ [原帖](https://www.reddit.com/r/ObsidianMD/comments/1psoa7h/vault_analytics_activity_heatmaps_memories/) ，感谢原作者！)，然后根据自己的需求修改并优化：

- 翻译成中文
- 优化了 `activities.jsx` 中的
	- 弹出框被遮挡
	- 弹出框失焦后自动隐藏
	- 增加对 `2024-12-21 09:08:22` 日期格式的支持
	- 改弹出框中的文件名链接为 obsidian 支持的悬停预览
- 优化了 `memories.jsx` 中的
	- 增加数据来源自定义
	- 增加在卡片内显示文件名
	- 增加弹出框中的文件名链接为 obsidian 支持的悬停预览
	- 修改点击卡片打开文件为点击文件名打开，防止误操作
- 优化了对应的样式代码

## 1 功能与说明

### 1.1 Activity Heatmaps 活动热力图

- GitHub 风格的热力图，分类可自定义
- 统计指标：平均值、标准差、高产日、峰度和平均间隔
	- 平均值：每日创建笔记的平均数量
	- 标准差：衡量每日产量的一致性，数值越低表示越稳定
	- 高产日：一周中最有效率的一天
	- 峰度：创作节奏，数值越小表示越稳定（好比是细水长流，还是火山喷发）
	- 平均间隔：活跃日之间的平均间隔
- 交互式趋势图表，提供周线和月线视图
- 六个月的历史数据跟踪（时间跨度可修改）

### 1.2 Memories 回忆

- 自动检索过去相应日期的笔记
- 可配置的时间窗口（一周、一个月、三个月、六个月）
- 年度回顾，展示往年同一天的笔记
- 从多个数据源进行智能日期和时间解析

## 2 安装与设置

此仪表盘无需任何预设的文件夹结构即可正常运行。

脚本完全可以根据你的需要进行定制。使用时，只需将 `activities.jsx` 和 `memories.jsx` 中的代码复制粘贴到仪表盘文件中相应的 `datacorejsx` 代码块即可。

**具体步骤如下：**

1. 从 Obsidian 的社区插件部分安装 Datacore 插件，启用插件后，请重新加载 Obsidian。
2. 将 CSS 文件复制到您的代码片段文件夹：

```bash
.obsidian/snippets/
├── activities.css
├── memories.css
└── dashboard.css  (可选，推荐配置)
```

注： `dashboard.css` 提供额外的布局增强功能，改善视觉效果。在【属性】中配置 `cssclasses: dashboard` 后生效。

3. 在“设置”→“外观”→“CSS 代码片段”中启用 CSS 代码片段。
4. 创建仪表盘文件，并将脚本代码粘贴到 `datacorejsx` 代码块中：

````
```datacorejsx
// 粘贴 activities.jsx 的所有代码到这里
```

```datacorejsx
// 粘贴 memories.jsx 所有代码到这里
```
````

1. 粘贴后，你可以在每个脚本的配置部分中自定义路径，使其与存储库中的特定文件夹相匹配。

在 `activities.jsx` 中修改：

```jsx
CATEGORIES: [
            { title: "成长", folder: "04Growth" },
            { title: "写作", folder: "Longform" },
            { title: "日记", folder: "00Journal" }
        ],
```

在 `memories.jsx` 中修改：

```jsx
SOURCE_FOLDERS: [
            "00Journal/01DailyNotes",
            "02Business",
            "03Life",
            "04Growth"
        ],
```

说明：

- 日期字段
	脚本会按优先级顺序在以下字段中查找日期：

```sql
DATE: ["date", "Date", "created", "created_at", "created_date", "created date"],
```

也就是在笔记的【属性】中有日期字段，比如：

```yaml
---
date: 2024-12-21
---
```

或者，也可以使用 ISO 格式将日期包含在文件名中： `2024-12-21.md`

1. 热力图时间跨度修改。在 `activities.jsx` 中修改显示的月份数：

```jsx
MONTHS_BACK: 6; // 默认
MONTHS_BACK: 12; // 显示12个月
```

## 3 故障排除

**【热力图】显示为空**

- 确认笔记存在于已配置的文件夹中。
- 检查笔记是否包含有效的日期字段，或者文件名中是否包含日期。
- 请确保日期格式为 ISO 8601 (YYYY-MM-DD)

**【回忆】中未显示任何结果**

- 确保配置的源文件夹中存在笔记
- 确认笔记包含日期元数据或日期格式的文件名。
- 检查一下是否有对应日期的笔记存在。

## 4 代码

### 4.1 活动热力图

活动热力图 `activities.jsx` 代码：

````
```datacorejsx 
/* ==================================================================
    ACTIVITIES (React + Datacore)
    - Author: @furbas16e8 (https://github.com/furbas16e8) 
		      @ichris007 (https://github.com/ichris007)
    - Heatmaps of notes by category.
    - Trend Chart (TrendChart).
    - Ref.: activities.css
 ================================================================== */

return function View() {
    // --- CONFIGURATION ---
    const CONFIG = {
        TITLE: "活动看板",
        MONTHS_BACK: 6,
        WEEK_START_MONDAY: true,
        CHART_HEIGHT: 30, // px
        DATE_FIELDS: ["date", "Data", "Início", "Date", "created date", "created_date"], // Keep original keys for compatibility
        LEVEL_THRESHOLDS: [0, 1, 2, 3, 4, 5],
        CATEGORIES: [
            { title: "成长", folder: "04Growth" },
            { title: "写作", folder: "Longform" },
            { title: "日记", folder: "00Journal" }
        ],
        CSS_VARS: {
            prefix: "--ativ-",
            keys: ["cell-size", "cell-gap", "radius", "padding-container"],
            defaults: { "cell-size": 14, "cell-gap": 3, "radius": 2 }
        },
        DEBOUNCE_MS: 500,
        GRADIENT: { bottom: "0%", top: "100%", opacityBottom: 0.8, opacityTop: 0.9 }
    };

    // --- HOOKS ---
    function useStyleConfig() {
        const [styles, setStyles] = dc.useState({ cell: 14, gap: 3, rad: 2 });
        
        dc.useEffect(() => {
            const getNum = (prop, fallback) => {
                const val = getComputedStyle(document.body).getPropertyValue(CONFIG.CSS_VARS.prefix + prop);
                const parsed = parseFloat(val);
                return Number.isFinite(parsed) ? parsed : fallback;
            };
            const update = () => {
                setStyles({
                    cell: getNum("cell-size", CONFIG.CSS_VARS.defaults["cell-size"]),
                    gap: getNum("cell-gap", CONFIG.CSS_VARS.defaults["cell-gap"]),
                    rad: getNum("radius", CONFIG.CSS_VARS.defaults["radius"])
                });
            };
            update();
            const id = setInterval(update, 2000); 
            return () => clearInterval(id);
        }, []);
        return styles;
    }

    function useHeatmapData(folder) {
        const pages = dc.useQuery(`@page and path("${folder}")`, { debounce: CONFIG.DEBOUNCE_MS });
        const today = dc.useMemo(() => dc.coerce.date(new Date().toISOString()).startOf("day"), []);
        const startDate = dc.useMemo(() => today.minus({ months: CONFIG.MONTHS_BACK }).startOf("day"), [today]);

        const { dailyMap, dailyList } = dc.useMemo(() => {
            const map = new Map();
            for (const page of pages) {
                let date = null;
                for (const field of CONFIG.DATE_FIELDS) {
                    const val = page.value(field);
                    if (val != null) {
                        // 将内容转为字符串并去掉多余空格
                        let dateStr = String(val).trim();
                        
                        // 如果长度超过10位（比如包含了 19:09:39），就只取前10位（2026-01-14）
                        if (dateStr.length > 10) {
                            dateStr = dateStr.substring(0, 10);
                        }
                        
                        // 让系统尝试解析这个日期
                        date = dc.coerce.date(dateStr);

                        // 检查解析是否成功
                        if (date && date.isValid) { 
                            date = date.startOf("day"); 
                            break; 
                        }
                    }
                }
                if (!date || !date.isValid || date < startDate || date > today) continue;

                const iso = date.toISODate();
                if (!map.has(iso)) map.set(iso, { count: 0, files: [] });
                const entry = map.get(iso);
                entry.count++;
                entry.files.push({ name: page.$name, path: page.$path });
            }
            const list = [];
            let cursor = startDate;
            while(cursor <= today) { list.push(cursor); cursor = cursor.plus({ days: 1 }); }
            return { dailyMap: map, dailyList: list };
        }, [pages, startDate, today]);

        return { dailyMap, dailyList, startDate, today };
    }

    // --- SERVICE ---
    const StatsService = {
        calculate(dailyMap, dailyList) {
            const values = [];
            const dayFreq = [0, 0, 0, 0, 0, 0, 0, 0];
            let totalNotes = 0;
            for (const day of dailyList) {
                const count = dailyMap.get(day.toISODate())?.count ?? 0;
                values.push(count);
                if (count > 0) {
                    totalNotes += count;
                    if (day.weekday >= 1 && day.weekday <= 7) dayFreq[day.weekday] += count;
                }
            }
            const N = values.length;
            if (N === 0) return { mean: "0", sigma: "0", mode: "—", kurt: "0", gap: "0" };

            const mean = totalNotes / N;
            let sumSq = 0; let sum4th = 0;
            for (const v of values) { const diff = v - mean; sumSq += Math.pow(diff, 2); sum4th += Math.pow(diff, 4); }
            const variance = sumSq / N;
            const sigma = Math.sqrt(variance);
            const kurtosis = variance > 0 ? (sum4th / N) / Math.pow(variance, 2) : 0;

            let maxFreq = 0; let maxDayIdx = 1;
            for (let i = 1; i <= 7; i++) { if (dayFreq[i] > maxFreq) { maxFreq = dayFreq[i]; maxDayIdx = i; } }
            const weekDays = ["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
            const mode = maxFreq > 0 ? weekDays[maxDayIdx] : "—";

            let gapSum = 0; let gapEvents = 0; let currentGap = 0; let hasStarted = false;
            for (const v of values) {
                if (v > 0) { if (hasStarted && currentGap > 0) { gapSum += currentGap; gapEvents++; } hasStarted = true; currentGap = 0; }
                else if (hasStarted) { currentGap++; }
            }
            const avgGap = gapEvents > 0 ? (gapSum / gapEvents) : 0;
            return { mean: mean.toFixed(2), sigma: sigma.toFixed(2), mode, kurt: kurtosis.toFixed(1), gap: avgGap.toFixed(1) };
        },
        getLevel(count) {
            for (let i = CONFIG.LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
                if (count >= CONFIG.LEVEL_THRESHOLDS[i]) return i;
            }
            return 0;
        }
    };

    // --- COMPONENTS ---

    function TrendChart({ dailyMap, startDate, today, onPointClick }) {
        const [viewMode, setViewMode] = dc.useState("week");
        const [chartType, setChartType] = dc.useState("area");
        const gradId = dc.useMemo(() => "grad-" + Math.random().toString(36).substr(2, 9), []);
        const gradHoverId = gradId + "-hover";

        const buckets = dc.useMemo(() => {
            const result = [];
            let cursor = startDate;
            while (cursor <= today) {
                const isWeek = viewMode === "week";
                const startOfPeriod = isWeek ? cursor.startOf("week") : cursor.startOf("month");
                const endOfPeriod = isWeek ? cursor.endOf("week") : cursor.endOf("month");
                const key = isWeek ? startOfPeriod.toISODate() : startOfPeriod.toFormat("yyyy-MM");
                let label = "";
                if (isWeek) label = `第 ${cursor.weekNumber} 周`;
                else { 
                    // 获取月份数字（1-12）并加上“月”字
                    label = cursor.toFormat("M") + "月"; 
                }
                // else { const m = cursor.setLocale("zh-CN").toFormat("MMMM"); label = m.charAt(0).toUpperCase() + m.slice(1); }

                let sum = 0; let batchFiles = [];
                let internalCursor = cursor;
                while (internalCursor <= endOfPeriod && internalCursor <= today) {
                    const entry = dailyMap.get(internalCursor.toISODate());
                    if (entry) { sum += entry.count; batchFiles.push(...entry.files); }
                    internalCursor = internalCursor.plus({ days: 1 });
                }
                result.push({ key, value: sum, label, files: batchFiles });
                cursor = internalCursor;
            }
            return result;
        }, [viewMode, dailyMap, startDate, today]);

        const HEIGHT = CONFIG.CHART_HEIGHT;
        const WIDTH = 1000;
        const maxValue = Math.max(...buckets.map(b => b.value), 1);
        const stepX = WIDTH / (buckets.length - 1 || 1);

        const generateSmoothPath = (points) => {
            if (points.length === 0) return "";
            if (points.length === 1) return `M ${points[0][0]},${points[0][1]} L ${points[0][0]},${points[0][1]}`;
            const op = (p, n) => { const lx = n[0] - p[0]; const ly = n[1] - p[1]; return { len: Math.sqrt(lx*lx + ly*ly), ang: Math.atan2(ly, lx) }; };
            const cp = (curr, prev, next, rev) => {
                const p = prev || curr; const n = next || curr; const o = op(p, n);
                const ang = o.ang + (rev ? Math.PI : 0); const len = o.len * 0.2;
                return [curr[0] + Math.cos(ang) * len, curr[1] + Math.sin(ang) * len];
            };
            let d = `M ${points[0][0].toFixed(1)},${points[0][1].toFixed(1)} `;
            for (let i = 1; i < points.length; i++) {
                const startCp = cp(points[i-1], points[i-2], points[i], false);
                const endCp = cp(points[i], points[i-1], points[i+1], true);
                d += `C ${startCp[0].toFixed(1)},${startCp[1].toFixed(1)} ${endCp[0].toFixed(1)},${endCp[1].toFixed(1)} ${points[i][0].toFixed(1)},${points[i][1].toFixed(1)} `;
            }
            return d;
        };

        const renderArea = () => {
            const points = buckets.map((b, i) => [i * stepX, HEIGHT - ((b.value / maxValue) * HEIGHT)]);
            const pathLine = generateSmoothPath(points);
            const pathFill = `${pathLine} L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`;
            return (
                <g className="ativ-trend-group-area">
                    <path d={pathFill} className="ativ-trend-area-fill" style={{ fill: `url(#${gradId})` }} />
                    <path d={pathLine} className="ativ-trend-area-line" />
                    {buckets.map((b, i) => (
                        <rect key={`trig-${b.key}`} x={(i * stepX) - (stepX / 2)} y={0} width={stepX} height={HEIGHT} fill="transparent" className="ativ-trend-trigger" style={{ cursor: b.value > 0 ? "pointer" : "default" }} onClick={(e) => onPointClick(e, b)}>
                             <title>{`${b.label} (${b.value})`}</title>
                        </rect>
                    ))}
                </g>
            );
        };

        const renderBars = () => (
             <g className="ativ-trend-group-bars">
                {buckets.map((b, i) => {
                    const barW = Math.max(1, (WIDTH - (buckets.length * 2)) / buckets.length);
                    const barH = (b.value / maxValue) * HEIGHT;
                    return (
                        <rect key={b.key} x={i * (barW + 2)} y={HEIGHT - barH} width={barW} height={barH} className="ativ-trend-element-bar"
                            style={{ "--fill-normal": `url(#${gradId})`, "--fill-hover": `url(#${gradHoverId})`, cursor: b.value > 0 ? "pointer" : "default" }}
                            onClick={(e) => onPointClick(e, b)}>
                            <title>{`${b.label} (${b.value})`}</title>
                        </rect>
                    );
                })}
            </g>
        );

        return (
            <div className="ativ-trend-container">
                <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" className="ativ-trend-svg">
                    <defs>
                        <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
                            <stop offset={CONFIG.GRADIENT.bottom} stopColor="var(--grad-bottom)" stopOpacity={CONFIG.GRADIENT.opacityBottom} />
                            <stop offset={CONFIG.GRADIENT.top} stopColor="var(--grad-top)" stopOpacity={CONFIG.GRADIENT.opacityTop} />
                        </linearGradient>
                        <linearGradient id={gradHoverId} x1="0" y1="1" x2="0" y2="0">
                            <stop offset={CONFIG.GRADIENT.bottom} stopColor="var(--grad-bottom)" stopOpacity={CONFIG.GRADIENT.opacityBottom} />
                            <stop offset={CONFIG.GRADIENT.top} stopColor="var(--grad-top-hover)" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    {chartType === "bar" ? renderBars() : renderArea()}
                </svg>
                <div className="ativ-trend-controls">
                    <div className="ativ-trend-toggle">
                        <span className={viewMode === "week" ? "is-active" : ""} onClick={() => setViewMode("week")}>周</span><span className="ativ-sep">/</span>
                        <span className={viewMode === "month" ? "is-active" : ""} onClick={() => setViewMode("month")}>月</span>
                    </div>
                    <span className="ativ-trend-sep-group">|</span>
                    <div className="ativ-trend-toggle">
                        <span className={chartType === "bar" ? "is-active" : ""} onClick={() => setChartType("bar")}>柱状图</span><span className="ativ-sep">/</span>
                        <span className={chartType === "area" ? "is-active" : ""} onClick={() => setChartType("area")}>面积图</span>
                    </div>
                </div>
            </div>
        );
    }

    function HeatmapBlock({ title, folder, styles }) {
        const { dailyMap, dailyList, startDate, today } = useHeatmapData(folder);
        const stats = dc.useMemo(() => StatsService.calculate(dailyMap, dailyList), [dailyMap, dailyList]);
        const [tooltip, setTooltip] = dc.useState({ visible: false, x: 0, y: 0, text: "" });
        const [menu, setMenu] = dc.useState(null);

        const handleInteraction = {
            cellEnter: (dateIso, count) => (e) => setTooltip({ visible: true, x: e.nativeEvent.offsetX + 12, y: e.nativeEvent.offsetY + 12, text: `${dc.coerce.date(dateIso).toFormat("dd/MM/yyyy")} — ${count} 篇笔记` }),
            cellMove: (e) => { if (tooltip.visible) setTooltip(t => ({ ...t, x: e.nativeEvent.offsetX + 12, y: e.nativeEvent.offsetY + 12 })); },
            cellLeave: () => setTooltip(t => ({ ...t, visible: false })),
            showMenu: (e, label, files) => {
                if (!files || files.length === 0) return;
                e.preventDefault(); e.stopPropagation();
                
                // 1. 获取当前热力图区块的根节点
                const root = e.target.closest(".ativ-heatmap-root");
                let align = "right"; 
                let x = 0; 
                let y = 0;
                
                if (root) {
                    const rect = root.getBoundingClientRect();
                    // 获取点击位置相对于窗口的绝对坐标
                    const clientX = e.clientX || e.nativeEvent.clientX; 
                    const clientY = e.clientY || e.nativeEvent.clientY;
                    
                    // 计算点击位置相对于热力图容器内部的坐标
                    x = clientX - rect.left; 
                    y = clientY - rect.top;
                    
                    // --- 核心修复逻辑：基于组件内部中线判断 ---
                    // 我们判断点击位置是在当前热力图区块的“左半边”还是“右半边”
                    // rect.width 是当前分屏窗口内组件的宽度
                    const relativeThreshold = rect.width / 2;

                    if (x > relativeThreshold) {
                        // 如果点击位置在当前分屏窗口的右侧，菜单向左弹出，避免撞上右侧分屏线或边缘
                        align = "left";
                    } else {
                        // 否则向右弹出
                        align = "right";
                    }
                }
                setMenu({ x, y, align, label, files });
            },
            clickCell: (dateIso) => (e) => {
                const entry = dailyMap.get(dateIso);
                if (entry) handleInteraction.showMenu(e, dc.coerce.date(dateIso).toFormat("dd/MM/yyyy"), entry.files);
            }
        };

        // --- 改进后的菜单失焦关闭逻辑 ---
        dc.useEffect(() => {
            const closer = (e) => {
                // 如果菜单存在，且点击的不是菜单本身，也不是触发菜单的单元格
                if (menu && !e.target.closest(".ativ-heatmap-menu") && !e.target.closest(".ativ-heatmap-cell")) {
                    setMenu(null);
                }
            };

            if (menu) {
                // 使用 capture 阶段确保优先捕获点击
                document.addEventListener("click", closer, true);
                // 监听滚动事件，滚动时也关闭菜单（防止错位）
                document.addEventListener("wheel", closer, true);
            }

            return () => {
                document.removeEventListener("click", closer, true);
                document.removeEventListener("wheel", closer, true);
            };
        }, [menu]);

        const startOfWeek = startDate.startOf("week");
        const weeksCount = Math.ceil(dailyList.length / 7) + 1;
        const width = weeksCount * (styles.cell + styles.gap) + 10;
        const height = (7 * (styles.cell + styles.gap)) + 30;
        let lastMonthRendered = -1;

        return (
            <div className="ativ-heatmap-root" data-id={title}>
                <div className="ativ-heatmap-title">{title}</div>
                <svg className="ativ-heatmap-svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} onMouseMove={handleInteraction.cellMove}>
                    {dailyList.map(date => {
                        const iso = date.toISODate();
                        const diffDays = Math.floor(date.diff(startOfWeek, "days").days);
                        const col = Math.floor(diffDays / 7);
                        const row = CONFIG.WEEK_START_MONDAY ? ((date.weekday + 6) % 7) : (date.weekday % 7);
                        const x = Math.round(col * (styles.cell + styles.gap));
                        const y = Math.round(20 + row * (styles.cell + styles.gap));
                        const entry = dailyMap.get(iso);
                        const count = entry?.count ?? 0;
                        const rectNode = <rect key={`r-${iso}`} className="ativ-heatmap-cell" x={x} y={y} width={styles.cell} height={styles.cell} rx={styles.rad} ry={styles.rad}
                                data-level={StatsService.getLevel(count)} onMouseEnter={handleInteraction.cellEnter(iso, count)} onMouseLeave={handleInteraction.cellLeave}
                                onClick={handleInteraction.clickCell(iso)} />;
                        let labelNode = null;
                        if (date.month !== lastMonthRendered && date.day <= 7) { lastMonthRendered = date.month; labelNode = <text key={`m-${iso}`} className="ativ-heatmap-month-label" x={x} y={y - 5}>{date.setLocale("zh-CN").toFormat("LLL")}</text>; }
                        return <g key={`g-${iso}`}>{rectNode}{labelNode}</g>;
                    })}
                </svg>
                <div className="ativ-stats-grid">
                    <div className="ativ-stat-col"><span className="ativ-stat-header">平均值</span><span className="ativ-stat-val">{stats.mean}</span></div>
                    <div className="ativ-stat-col"><span className="ativ-stat-header">标准差</span><span className="ativ-stat-val">{stats.sigma}</span></div>
                    <div className="ativ-stat-col"><span className="ativ-stat-header">高产日</span><span className="ativ-stat-val">{stats.mode}</span></div>
                    <div className="ativ-stat-col"><span className="ativ-stat-header">峰度</span><span className="ativ-stat-val">{stats.kurt}</span></div>
                    <div className="ativ-stat-col"><span className="ativ-stat-header">平均间隔</span><span className="ativ-stat-val">{stats.gap}</span></div>
                </div>
                <TrendChart dailyMap={dailyMap} startDate={startDate} today={today} onPointClick={(e, data) => handleInteraction.showMenu(e, data.label, data.files)} />
                <div className="ativ-heatmap-tooltip" style={{ opacity: tooltip.visible ? 1 : 0, left: tooltip.x, top: tooltip.y }}>{tooltip.text}</div>
                {menu && (
				    <div 
				        className={`ativ-heatmap-menu align-${menu.align}`} 
				        style={{ left: menu.x, top: menu.y }}
				        /* 核心修改：只要鼠标离开这个弹出框区域，菜单立即消失 */
				        onMouseLeave={() => setMenu(null)} 
    >				
				        <div className="ativ-heatmap-menu-title">
				            {menu.label} — {menu.files.length} 篇笔记
				        </div>
				        
				        <div>{menu.files.map(f => (
				            <div className="ativ-heatmap-menu-item" key={f.path}>
				                <a 
				                    className="internal-link" 
				                    data-href={f.path}        
				                    href={f.path} 
				                    onClick={(e) => { 
				                        e.preventDefault(); 
				                        e.stopPropagation(); 
				                        app.workspace.openLinkText(f.path, "", true); 
				                        setMenu(null); 
				                    }}
				                    style={{ textDecoration: "none" }}
                >												
				                    {f.name}
				                </a>
				            </div>
				        ))}</div>
				    </div>
				)}
            </div>
        );
    }

    // --- MAIN COMPONENT (WITH TITLE AND DIVIDER) ---
    function AtividadesBoard() {
        const styles = useStyleConfig();
        return (
            /* Main Div */
            <div className="ativ-heatmaps-container">
                 {/* Title Structure + Divider (identical to Dashboard) */}
                <div className="title-tabs">
                    <span className="title-tab is-active">{CONFIG.TITLE}</span>
                </div>
                
                <div className="ativ-heatmaps-shell">
                    {CONFIG.CATEGORIES.map(cat => <HeatmapBlock key={cat.folder} title={cat.title} folder={cat.folder} styles={styles} />)}
                </div>
            </div>
        );
    }

    return <AtividadesBoard />;
};

```
````

活动热力图样式代码：

```css
/* ==================================================================
    ACTIVITIES  (HEATMAP)
    - Author: @furbas16e8 (https://github.com/furbas16e8) 
              @ichris007 (https://github.com/ichris007)
    - Styling for heatmaps generated via DatacoreJSX
    - Re.:: activities.jsx
   ================================================================== */

.ativ-heatmaps-container {
  /* --- PALETTE COLORS (ACTIVITIES) --- */
  --ativ-c0: #e6e6e6;
  --ativ-c1: #7EBAFF;
  --ativ-c2: #5FAAFF;
  --ativ-c3: #3F99FF;
  --ativ-c4: #2089FF;
  --ativ-c5: #0078FF;
  --ativ-c6: #0061CC;
  --ativ-c7: #004999;
  --ativ-c8: #003266;
  --ativ-c9: #001a33;
  --ativ-c10: #001A33;
  
  /* --- STRUCTURAL DEFINITIONS (STANDARDIZED) --- */
  --ativ-font-ui: "Montserrat", sans-serif;
  --ativ-font-mono: "JetBrains Mono", monospace;
  
  --ativ-padding-container: 2px 20px;
  --ativ-subtitle-size: 12pt;
  --ativ-subtitle-tracking: 0.2rem;
  --ativ-title-margin: 12px auto 0;
  
  --ativ-motion-slow: 0.45s;
  
  /* --- TEXT COLORS & UI --- */
  --ativ-text-normal: var(--text-normal, #333);
  --ativ-text-muted: var(--text-muted, #888);
  --ativ-text-accent: var(--text-accent, #2089FF);
  --ativ-text-faint: var(--text-faint, #ccc);
  
  --ativ-card-bg: var(--background-secondary, #f1f1f1);
  --ativ-menu-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  --ativ-link-color: var(--link-color, #2089FF);
  --ativ-hover-bg: var(--background-modifier-hover, rgba(0,0,0,0.05));
  
  /* --- DIVIDER (HIGHLIGHT LINE) --- */
  --ativ-divider-inner: #00171f; /* Dark default fallback */
  --ativ-divider-out: #2089FF;   /* Accent color substitute */

  /* --- COMPONENT SPECIFIC METRICS --- */
  --ativ-cell-size: 14px;
  --ativ-cell-gap: 3px;
  --ativ-radius: 2px;
}

/* Theme Fallbacks (Simple) */
body.theme-light .ativ-heatmaps-container {
    --ativ-divider-inner: #00171f;
    --ativ-divider-out: #2089FF; 
}
body.theme-dark .ativ-heatmaps-container {
    --ativ-c0: #00131A;
    --ativ-c1: #002C3C;
    --ativ-c2: #1F5767;
    --ativ-c3: #3F8192;
    --ativ-c4: #5EACBD;
    --ativ-c5: #7DD6E8;
    --ativ-c6: #95DCED;
    --ativ-c7: #ADE3F2;
    --ativ-c8: #C5E9F6;
    --ativ-c9: #DDEFFB;
    --ativ-c10: #E6F7FD;
    
    --ativ-divider-inner: #ffffff;
    --ativ-divider-out: #2089FF;
}

/* ===================== */
/* TITLE LAYOUT          */
/* ===================== */

/* Header with divider line (Highlight Line) */
.ativ-heatmaps-container .title-tabs {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 12px;
}

.ativ-heatmaps-container .title-tabs::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  pointer-events: none;
  border-radius: 999px;
  background: radial-gradient(
      circle at center,
      var(--ativ-divider-inner) 25%,
      var(--ativ-divider-out) 55%,
      transparent 100%
  );
}

.ativ-heatmaps-container .title-tab {
    margin: 1rem 0.5rem 0.5rem 0.5rem; /* Spacing adjustment */
    font-size: 18pt; /* Size similar to global */
    font-weight: 500;
    color: var(--ativ-text-normal);
    letter-spacing: 0.2rem;
}


/* ===================== */
/* CONTENT LAYOUT        */
/* ===================== */

.ativ-heatmaps-container {
  display: block;
  min-height: 250px;
  padding: var(--ativ-padding-container);
  position: relative;
  z-index: 1;
  animation: ativ-card-fadeIn .5s ease forwards;
  will-change: opacity;
}

@keyframes ativ-card-fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.ativ-heatmap-root { position: relative; }

.ativ-heatmap-title {
  color: var(--ativ-text-normal);
  font-weight: 500;
  font-size: var(--ativ-subtitle-size);
  letter-spacing: var(--ativ-subtitle-tracking);
  text-align: center;
  min-height: 2em;
  margin: var(--ativ-title-margin);
}

.ativ-heatmaps-shell {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2px;
  align-items: start;
  position: relative;
}

.ativ-heatmap-svg {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 0px;
}

/* ============================== */
/* CELLS AND COLORS               */
/* ============================== */

.ativ-heatmap-cell {
  cursor: pointer;
  stroke: none;
  transition: fill var(--ativ-motion-slow), transform 0.2s;
}

.ativ-heatmap-cell[data-level="0"] { fill: var(--ativ-c0); pointer-events: none; }
.ativ-heatmap-cell[data-level="1"] { fill: var(--ativ-c1); }
.ativ-heatmap-cell[data-level="2"] { fill: var(--ativ-c2); }
.ativ-heatmap-cell[data-level="3"] { fill: var(--ativ-c3); }
.ativ-heatmap-cell[data-level="4"] { fill: var(--ativ-c4); }
.ativ-heatmap-cell[data-level="5"] { fill: var(--ativ-c5); }
.ativ-heatmap-cell[data-level="6"] { fill: var(--ativ-c6); }
.ativ-heatmap-cell[data-level="7"] { fill: var(--ativ-c7); }
.ativ-heatmap-cell[data-level="8"] { fill: var(--ativ-c8); }
.ativ-heatmap-cell[data-level="9"] { fill: var(--ativ-c9); }
.ativ-heatmap-cell[data-level="10"] { fill: var(--ativ-c10); }

.ativ-heatmap-cell:not([data-level="0"]):hover {
  opacity: 1;
  fill: var(--ativ-link-color);
  transform: translateY(-2px);
}

.ativ-heatmap-month-label {
    fill: var(--ativ-text-muted);
    font-size: 9px;
    font-family: var(--ativ-font-ui);
}

/* ========================================================================== */
/* TOOLTIP AND MENU                                                           */
/* ========================================================================== */

.ativ-heatmap-tooltip {
  position: absolute;
  pointer-events: none;
  background: var(--ativ-text-normal);
  color: var(--ativ-card-bg);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-family: var(--ativ-font-ui);
  z-index: 100;
  white-space: nowrap;
  transition: opacity 0.2s, top 0.2s, left 0.2s;
}

.ativ-heatmap-menu {
  position: absolute;
  background: var(--ativ-card-bg);
  color: var(--ativ-text-normal);
  border-radius: 8px;
  border: 1px solid var(--ativ-text-muted);
  padding: 8px;
  z-index: 2000;
  max-height: 600px;
  min-width: 250px;
  max-width: 90%;
  overflow-y: auto;
  box-shadow: var(--ativ-menu-shadow);
}

.ativ-heatmap-menu-title {
  font-weight: bold;
  font-size: 12pt;
  margin-bottom: 6px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--ativ-text-muted);
}

.ativ-heatmap-menu-item { padding: 3px 0; }

.ativ-heatmap-menu-item a {
  color: var(--ativ-text-accent);
  text-decoration: none;
  font-size: 10pt;
  display: block;
  padding: 4px 6px;
  border-radius: 3px;
  white-space: normal;
  text-overflow: clip;
  word-break: break-word;
}
.ativ-heatmap-menu-item a:hover { background: var(--ativ-hover-bg); }

.ativ-heatmap-menu.align-right { transform: translateX(0); margin-left: 10px; }
.ativ-heatmap-menu.align-left { transform: translateX(-100%); margin-left: -10px; }

/* ========================================================================== */
/* STATS GRID                                                                 */
/* ========================================================================== */

.ativ-stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 5px;
  width: 95%;
  font-family: var(--ativ-font-ui);
  font-size: 0.75em;
}

.ativ-stat-col {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ativ-stat-header { color: var(--ativ-text-normal); font-style: normal; }
.ativ-stat-val { color: var(--ativ-text-normal); font-weight: 300; font-family: var(--ativ-font-mono); }

/* ========================================================================== */
/* TREND CHART                                                                */
/* ========================================================================== */

.ativ-trend-container {
  margin-top: 12px;
  padding-top: 8px;
  width: 95%;
}

.ativ-trend-svg {
  display: block;
  height: 40px;
  width: 95%;
  overflow: visible;
  margin: 18px;
  --grad-top: var(--ativ-c4);
  --grad-bottom: var(--ativ-card-bg);
  --grad-top-hover: var(--ativ-text-accent);
}

.ativ-trend-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 8pt;
  color: var(--ativ-text-muted);
}
.ativ-trend-sep-group { color: var(--ativ-text-faint); margin: 0 2px; }
.ativ-trend-toggle { cursor: pointer; user-select: none; display: flex; gap: 3px; }
.ativ-trend-toggle span:hover { color: var(--ativ-text-normal); }
.ativ-trend-toggle .is-active { color: var(--ativ-text-normal); font-weight: bold; }

.ativ-trend-element-bar {
  fill: var(--fill-normal);
  opacity: 0.6;
}
.ativ-trend-element-bar:hover {
  fill: var(--fill-hover) !important;
  opacity: 1;
}

.ativ-trend-area-fill { opacity: 0.3; stroke: none; }
.ativ-trend-area-line {
    stroke: var(--ativ-text-accent);
    stroke-width: 1.5px;
    fill: none;
}
.ativ-trend-trigger { cursor: crosshair; }
.ativ-trend-trigger:hover { fill: var(--ativ-hover-bg); opacity: 0.2; }

```

### 4.2 回忆仪表盘

回忆仪表盘 `memories.jsx` 代码：

````
```datacorejsx
/* ==================================================================
    MEMORIES (React + Datacore)
    - Author: @furbas16e8 (https://github.com/furbas16e8) 
			@ichris007 (https://github.com/ichris007)
    - "Memories" list (past notes)
    - Ref.: memories.css
 ================================================================== */

return function View() {
    const CONFIG = {
        TITLE: "回忆",
        SOURCE_FOLDERS: [
		    "00Journal/01DailyNotes",
		    "02Business",
		    "03Life",
		    "04Growth"
		],
        FIELDS: {
            DATE: ["date", "Date", "created", "created_at", "created_date", "created date"],
            TIME: ["hour", "Hour", "time", "timestamp"]
        },
        LABELS: {
            MONTHS: [, "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            DAYS: [, "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            PERIODS: ["凌晨", "上午", "下午", "晚上"]
        }
    };

    // --- SERVICE ---
    const TimeParserService = {
        clampTime({ h = 0, m = 0 } = {}) { return { h: Math.max(0, Math.min(23, h | 0)), m: Math.max(0, Math.min(59, m | 0)) }; },
        toISO({ y, m, d }) { return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`; },
        toJSDate({ y, m, d }) { return new Date(y, m - 1, d); },
        extractDate(raw) {
            if (!raw) return null;
            if (raw.year != null && raw.month != null && raw.day != null) return { y: raw.year | 0, m: raw.month | 0, d: raw.day | 0 };
            if (raw instanceof Date && !isNaN(raw)) return { y: raw.getFullYear(), m: raw.getMonth() + 1, d: raw.getDate() };
            if (typeof raw === "string") {
                let match = raw.match(/(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})/);
                if (match) return { y: +match[1], m: +match[2], d: +match[3] };
                match = raw.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
                if (match) return { y: +match[3] < 100 ? 2000 + +match[3] : +match[3], m: +match[2], d: +match[1] };
                const digits = raw.replace(/\D/g, "");
                if (digits.length >= 8) return { y: +digits.slice(0, 4), m: +digits.slice(4, 6), d: +digits.slice(6, 8) };
            }
            return null;
        },
        extractTime(raw) {
            if (!raw) return null;
            if (raw.hour != null && raw.minute != null) return this.clampTime({ h: raw.hour, m: raw.minute });
            if (raw instanceof Date && !isNaN(raw)) return this.clampTime({ h: raw.getHours(), m: raw.getMinutes() });
            if (typeof raw === "number") {
                const s = String(raw);
                if (s.length <= 2) return this.clampTime({ h: +s, m: 0 });
                if (s.length === 3) return this.clampTime({ h: +s[0], m: +s.slice(1) });
                return this.clampTime({ h: +s.slice(0, 2), m: +s.slice(2, 4) });
            }
            if (typeof raw === "string") {
                const s = raw.trim();
                const match = s.match(/(\d{1,2})\s*[:hH\.]\s*(\d{2})/);
                if (match) return this.clampTime({ h: +match[1], m: +match[2] });
                const digits = s.replace(/\D/g, ""); 
                if (!digits) return null;
                if (digits.length <= 2) return this.clampTime({ h: +digits, m: 0 });
                if (digits.length === 3) return this.clampTime({ h: +digits[0], m: +digits.slice(1) });
                return this.clampTime({ h: +digits.slice(0, 2), m: +digits.slice(2, 4) });
            }
            return null;
        },
        getPeriodAlias(dateObj, hour) {
            const jsDate = this.toJSDate(dateObj);
            const dayIdx = jsDate.getDay() === 0 ? 7 : jsDate.getDay();
            const weekDay = CONFIG.LABELS.DAYS[dayIdx];
            let period = CONFIG.LABELS.PERIODS[3]; // 默认“晚上”
            if (hour <= 4) period = CONFIG.LABELS.PERIODS[0];
            else if (hour <= 11) period = CONFIG.LABELS.PERIODS[1];
            else if (hour <= 17) period = CONFIG.LABELS.PERIODS[2];
            
            // 返回格式：周一 · 上午
            return `${weekDay} · ${period}`; 
        },
        formatDateFull({ y, m, d }) { 
            return `${y}年${m}月${d}日`; 
        }
    };

    const MarkdownService = {
        clean(md) { return md.replace(/^---[\s\S]*?---\s*/m, "").replace(/```[\s\S]*?```/g, " ").replace(/\r/g, "\n"); },
        mdToHtml(text) {
            let s = text.replace(/`([^`]+)`/g, "<code>$1</code>");
            s = s.replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>");
            s = s.replace(/(\*|_)([^*_][\s\S]*?)\1/g, "<em>$2</em>");
            s = s.replace(/~~(.+?)~~/g, "<del>$1</del>");
            s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => `<a href="${u.replace(/"/g, "&quot;")}" target="_blank">${t}</a>`);
            s = s.replace(/\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g, (m, target, anchor, alias) => `<a class="internal-link" href="${anchor ? target + '#' + anchor : target}">${alias || target}</a>`);
            return s;
        },
        getFirstParagraph(md) {
            const paragraphs = this.clean(md).split(/\n\s*\n+/).map(x => x.trim()).filter(Boolean);
            if (!paragraphs.length) return "";
            let p = paragraphs[0].replace(/^#{1,6}\s+/gm, "").replace(/^\s{0,3}>\s?/gm, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "");
            return this.mdToHtml(p).replace(/\s+/g, " ").trim();
        }
    };

    // --- HOOKS ---
    function useMemoryPreview(path) {
        const [preview, setPreview] = dc.useState("...");
        const revision = dc.useIndexUpdates({ debounce: 3000 });
        dc.useEffect(() => {
            let active = true;
            (async () => {
                try {
                    const af = app.vault.getAbstractFileByPath(path);
                    if (!af) { if (active) setPreview("N/A"); return; }
                    const content = await app.vault.read(af);
                    if (active) setPreview(MarkdownService.getFirstParagraph(content) || "...");
                } catch { if (active) setPreview("Error"); }
            })();
            return () => { active = false; };
        }, [path, revision]);
        return preview;
    }

    function useMemoryData() {
        //const pages = dc.useQuery(`@page and path("${CONFIG.SOURCE_FOLDER}")`);
        // 将数组转换为 path("A") or path("B") or path("C") 的格式
	    const pathConditions = CONFIG.SOURCE_FOLDERS
	        .map(folder => `path("${folder}")`)
	        .join(" or ");
    
    // 使用拼接好的路径条件进行查询
	    const pages = dc.useQuery(`@page and (${pathConditions})`);
        const currentFile = dc.useCurrentFile();
        const anchorDate = dc.useMemo(() => {
            const m = (currentFile?.$name || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
            const now = new Date();
            if (m) return { y: +m[1], m: +m[2], d: +m[3] };
            return { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
        }, [currentFile]);

        const memoryItems = dc.useMemo(() => {
            return pages.map(page => {
                let rawDate = null;
                for (const f of CONFIG.FIELDS.DATE) { const v = page.value(f); if (v != null) { rawDate = v; break; } }
                const dateObj = TimeParserService.extractDate(rawDate);
                let timeObj = null;
                for (const f of CONFIG.FIELDS.TIME) { const v = page.value(f); if (v != null) { const p = TimeParserService.extractTime(v); if (p) { timeObj = p; break; } } }
                if (!timeObj && rawDate) timeObj = TimeParserService.extractTime(rawDate);
                if (!timeObj) {
                    const t = TimeParserService.extractTime(page.$name);
                    if (t) timeObj = t;
                    else { const tm = (page.$name || "").replace(/\D/g, "").slice(-4); if (/^\d{4}$/.test(tm)) timeObj = { h: +tm.slice(0, 2), m: +tm.slice(2, 4) }; }
                }
                if (!timeObj) timeObj = TimeParserService.extractTime(page.$ctime);
                return { page, date: dateObj, time: timeObj || { h: 12, m: 0 } };
            }).filter(i => i.date != null);
        }, [pages]);
        return { memoryItems, anchorDate };
    }

    function useMemoryTabs(memoryItems, anchorDate) {
        const [activeTab, setActiveTab] = dc.useState(null);
        const tabs = dc.useMemo(() => {
            const sub = (d, t, a) => {
                const js = TimeParserService.toJSDate(d);
                if (t === "days") js.setDate(js.getDate() - a);
                if (t === "months") js.setMonth(js.getMonth() - a);
                if (t === "years") js.setFullYear(js.getFullYear() - a);
                return { y: js.getFullYear(), m: js.getMonth() + 1, d: js.getDate() };
            };
            const existing = new Set(memoryItems.map(i => TimeParserService.toISO(i.date)));
            const fixed = [
                { label: "1周前", date: sub(anchorDate, "days", 7) },
                { label: "1个月前", date: sub(anchorDate, "months", 1) },
                { label: "3个月前", date: sub(anchorDate, "months", 3) },
                { label: "6个月前", date: sub(anchorDate, "months", 6) }
            ].filter(c => existing.has(TimeParserService.toISO(c.date)));
            const years = new Set(memoryItems.filter(i => i.date.m === anchorDate.m && i.date.d === anchorDate.d && i.date.y < anchorDate.y).map(i => anchorDate.y - i.date.y));
            const yCandidates = Array.from(years).sort((a, b) => a - b).map(d => ({ label: d === 1 ? "1年前" : `${d}年前`, date: sub(anchorDate, "years", d) }));
            return [...fixed, ...yCandidates];
        }, [memoryItems, anchorDate]);
        dc.useEffect(() => { if (!activeTab && tabs.length > 0) setActiveTab(tabs[0]); }, [tabs]);
        return { tabs, activeTab, setActiveTab };
    }

    // --- COMPONENTS ---
    function MemoryCard({ item }) {
        // 1. 重新启用内容预览逻辑（获取文件第一行）
        const preview = useMemoryPreview(item.page.$path);
        
        // 跳转逻辑
        const open = () => app.workspace.openLinkText(item.page.$path, "/", true);
        
        // 时间和别名
        const alias = TimeParserService.getPeriodAlias(item.date, item.time.h);
        const time = `${String(item.time.h).padStart(2, '0')}:${String(item.time.m).padStart(2, '0')}`;
        
        return (
            <div 
                className="mem-card" 
                role="button" 
                tabIndex={0} 
                /* onClick={open} */ // 如果你想恢复全卡片点击，去掉前后的注释符号
            >
                <div className="mem-head">
                    <span className="mem-title-link">{alias}</span>
                    <span className="mem-time">({time})</span>
                </div>
                
                {/* 2. 第一行：显示文件名（带预览功能） */}
                <div style={{ marginBottom: "4px" }}>
                    <a 
                        className="mem-body internal-link" 
                        href={item.page.$path}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            e.preventDefault(); 
                            open();
                        }}
                        style={{ 
                            fontWeight: "bold", 
                            color: "var(--text-accent)",
                            textDecoration: "none",
                            fontSize: "1em" // 让文件名稍微大一点
                        }}
                    >
                        {item.page.$name}
                    </a>
                </div>

                {/* 3. 第二行：显示文件第一行内容 */}
                <div 
                    className="mem-body markdown-rendered" 
                    style={{ 
                        fontSize: "0.9em", 
                        opacity: 0.8,
                        lineHeight: "1.4",
                        color: "var(--text-normal)"
                    }}
                    dangerouslySetInnerHTML={{ __html: preview }} 
                />
            </div>
        );
    }

    function MemoryGrid({ activeTab, memoryItems }) {
        if (!activeTab) return null;
        const target = TimeParserService.toISO(activeTab.date);
        const items = memoryItems.filter(i => TimeParserService.toISO(i.date) === target).sort((a, b) => (a.time.h * 60 + a.time.m) - (b.time.h * 60 + b.time.m) || a.page.$name.localeCompare(b.page.$name));
        return (
            <>
                <h3 className="mem-subtitle">{TimeParserService.formatDateFull(activeTab.date)}</h3>
                {items.length === 0 ? <p className="mem-empty">暂无日记</p> : <div className="mem-grid">{items.map((it, i) => <MemoryCard key={it.page.$path + i} item={it} />)}</div>}
            </>
        );
    }

    function MemoriasBoard() {
        const [isOpen, setIsOpen] = dc.useState(false);
        const { memoryItems, anchorDate } = useMemoryData();
        const { tabs, activeTab, setActiveTab } = useMemoryTabs(memoryItems, anchorDate);
        const toggle = () => setIsOpen(p => !p);

        return (
             /* Root Container with Highlight Line Structure */
            <div className="memorias-root">
                <div className="title-tabs">
                    <span className={`title-tab ${isOpen ? "is-active" : ""}`} onClick={toggle} style={{cursor:"pointer"}}>{CONFIG.TITLE}</span>
                </div>

                {isOpen && (
                    <div className="mem-text">
                        <nav className="mem-tabs">
                            {tabs.map(tab => (
                                <button key={tab.label} className={`mem-tab ${activeTab && TimeParserService.toISO(activeTab.date) === TimeParserService.toISO(tab.date) ? "mem-tab--active" : ""}`} onClick={() => setActiveTab(tab)}>{tab.label}</button>
                            ))}
                        </nav>
                        <MemoryGrid activeTab={activeTab} memoryItems={memoryItems} />
                    </div>
                )}
            </div>
        );
    }

    return <MemoriasBoard />;
};

```
````

回忆仪表盘样式代码：

````css fold
/* ==================================================================
    MEMORIES
    - Author: @furbas16e8 (https://github.com/furbas16e8) 
              @ichris007 (https://github.com/ichris007)
    - Styling for the daily memories block.
    - Ref.: memories.jsx
   ================================================================== */

.memorias-root {
    /* --- LOCAL VARIABLES (STANDARDIZATION) --- */
    
    /* Text Colors */
    --mem-text-normal: var(--text-normal, #333);
    --mem-text-muted: var(--text-muted, #888);
    --mem-text-light: var(--text-faint, #ccc);
    
    /* Layout */
    --mem-padding-container: 2px 20px;
    --mem-gap-subtabs: 1.5rem;
    --mem-gap-small: 0.5rem;
    --mem-radius: 12px;
    
    /* Highlight Line Colors (Gradient) */
    --mem-divider-inner: #00171f; /* Dark default fallback */
    --mem-divider-out: #fca311;   /* Amber (memories default) */
    
    /* Components */
    --mem-card-bg: var(--background-secondary, #f1f1f1);
    --mem-highlight: #fca311; 
    --mem-hover-border: #fca311;
    --mem-tab-inactive: 0.7;
    --mem-tab-active: 1;
    
    /* Typography */
    --mem-subtitle-size: 12pt;
    --mem-subtitle-tracking: 0.2rem;
    --mem-text-size: 10pt;
    
    display: block;
    min-height: 220px;
    padding: var(--mem-padding-container);
    animation: mem-root-entry .6s ease forwards;
    will-change: min-height;
}

/* Theme Fallbacks */
body.theme-light .memorias-root {
    --mem-divider-inner: #00171f;
    --mem-divider-out: #fca311;
}
body.theme-dark .memorias-root {
    --mem-divider-inner: #ffffff;
    --mem-divider-out: #fca311;
    --mem-card-bg: var(--background-secondary, #001016);
}


/* ==========================================================================
   TITLE AND HIGHLIGHT LINE
   ========================================================================== */

/* Header with divider line, replicating dashboard style */
.memorias-root .title-tabs {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem; /* Space after the line */
}

/* The Gradient Line */
.memorias-root .title-tabs::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  pointer-events: none;
  border-radius: 999px;
  background: radial-gradient(
      circle at center,
      var(--mem-divider-inner) 25%,
      var(--mem-divider-out) 55%,
      transparent 100%
  );
}

.memorias-root .title-tab {
    cursor: pointer;
    font-size: 18pt;
    font-weight: 300;
    letter-spacing: 0.2rem;
    opacity: 0.8;
    color: var(--mem-text-normal);
    margin: 1rem 0.5rem 0.5rem 0.5rem;
    transition: all 0.2s ease;
}

.memorias-root .title-tab.is-active {
    font-weight: 500;
    opacity: 1;
}

/* ==========================================================================
   CONTENT AND TABS
   ========================================================================== */

.mem-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mem-gap-subtabs);
  justify-content: center;
  align-items: baseline;
  line-height: 1;
  margin: 12px 0 24px 0;
}

.mem-tab {
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  letter-spacing: var(--mem-subtitle-tracking);
  font-size: var(--mem-subtitle-size);
  font-weight: 300;
  color: var(--mem-text-normal);
  opacity: var(--mem-tab-inactive);
  cursor: pointer;
  transition: opacity 0.2s;
}
.mem-tab:hover { opacity: 0.85; }
.mem-tab.mem-tab--active { font-weight: 500; opacity: var(--mem-tab-active); transform: scale(1.05); }

/* Subtitle (Date) */
.mem-subtitle {
  color: var(--mem-text-normal);
  opacity: 0.85;
  font-size: 11pt;
  margin: 1em;
  text-align: center;
  letter-spacing: var(--mem-subtitle-tracking);
}
.mem-empty { text-align: center; margin-top: 2rem; color: var(--mem-text-muted); }


/* ==========================================================================
   CARDS
   ========================================================================== */
   
.mem-grid { display: flex; flex-direction: column; gap: 1rem; }

.mem-card {
  border-radius: var(--mem-radius);
  padding: 1rem 1.5rem;
  background: var(--mem-card-bg);
  opacity: 0;
  animation: mem-card-entry .6s ease forwards;
  transition: background-color 0.15s, box-shadow 0.45s, transform 0.15s;
  border-left: 4px solid transparent;
  margin: 0px;
}
.mem-card:hover { border-left-color: var(--mem-hover-border); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

.mem-head {
  display: flex; align-items: baseline; gap: var(--mem-gap-small);
  font-weight: 500; font-size: 12pt; color: var(--mem-text-normal);
  margin-bottom: 4px; opacity: .6;
}
.mem-card:hover .mem-head { color: var(--mem-highlight); opacity: 1; }

.mem-time { opacity: .4; font-size: 9pt; }
.mem-body { font-weight: 400; font-size: var(--mem-text-size); opacity: .5; line-height: 1.5; }
.mem-card:hover .mem-body { opacity: 1; }

.mem-body a.internal-link { color: inherit !important; text-decoration: none !important; pointer-events: none; }


@keyframes mem-root-entry { from { opacity: 0; } to { opacity: 1; } }
@keyframes mem-card-entry { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

/* Staggering */
.mem-card:nth-child(1) { animation-delay: 0.05s; }
.mem-card:nth-child(2) { animation-delay: 0.10s; }
.mem-card:nth-child(3) { animation-delay: 0.15s; }
.mem-card:nth-child(4) { animation-delay: 0.20s; }
.mem-card:nth-child(5) { animation-delay: 0.25s; }
```
````

### 4.3 Dashboard 样式

在【属性】中配置 `cssclasses: dashboard` 后生效。

```css
/* ============================================================================
   dashboard.css — Styles for notes with `cssclasses: dashboard`
   Author: @furbas16e8 (https://github.com/furbas16e8) 
           @ichris007 (https://github.com/ichris007)
   1) Sets maximum text width for improved readability.
   2) Hides the inline title (file.title).
   3) Completely removes the view header.
   Only affects notes with `cssclasses: dashboard` in the YAML frontmatter.
   ============================================================================ */

@import url("root.css");

.dashboard {
  --dashboard-text-max-width: 1400px;
}

/* ----------------------------------------------------------------------------
   1) MAXIMUM TEXT WIDTH (reading and editing views)
   ---------------------------------------------------------------------------- */
.markdown-reading-view.dashboard,
.markdown-preview-view.dashboard,
.markdown-source-view.mod-cm6.dashboard {
  --text-max-width: var(--dashboard-text-max-width);
}

/* ----------------------------------------------------------------------------
   2) INLINE TITLE
   ---------------------------------------------------------------------------- */
.dashboard .inline-title {
  display: none;
/*
  font-size: var(--inline-size-title);
  font-weight: var(--text-weight-medium);
  text-align: center;
  font-family: "Times New Roman", serif;
  letter-spacing: 0.5rem;
  margin-bottom: 1rem;
*/
}

/* ----------------------------------------------------------------------------
   3) VIEW HEADER (address bar)
   ---------------------------------------------------------------------------- */
.workspace-leaf:has(.dashboard) .view-header {
  display: none !important;
  height: 0 !important;
  padding: 0 !important;
  border: 0 !important;
}


/* ----------------------------------------------------------------------------
   4) MAIN TABS
   ---------------------------------------------------------------------------- */
/* Divider line below global titles */
.dashboard .title-tabs{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.dashboard .title-tabs::after{
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  pointer-events: none;
  border-radius: 999px;
  background: radial-gradient(
			  circle at center,
			  var(--divider-line-inner) 25%,
			  var(--divider-line-out) 55%,
			  transparent 100%);
}

/* Individual tab titles */
.dashboard .title-tab{
  align-content: center;
  margin: 2rem 0.5rem 0 0.5rem;
  cursor: pointer;
  color: var(--text-normal);
  opacity: var(--tabs-opacity-inactive);
  letter-spacing: var(--global-title-tracking);
  font-size: var(--global-title-size);
  font-weight: var(--text-weight-light);

  transition:
    opacity var(--motion-fast) ease;
}

.dashboard .title-tab:hover{
  opacity: var(--tabs-opacity-hover);
}

.dashboard .title-tab.is-active{
  font-weight: var(--text-weight-heavy);
  opacity: var(--tabs-opacity-active);
}

.dashboard .title-tab:active{
  transform: scale(.95);
  transition-duration: 80ms;
}
```
