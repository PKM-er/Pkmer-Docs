'use strict';

var obsidian = require('obsidian');
var view = require('@codemirror/view');
var state = require('@codemirror/state');
var language = require('@codemirror/language');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function recalculateNumericBullets(root) {
    function visit(parent) {
        let index = 1;
        for (const child of parent.getChildren()) {
            if (/\d+\./.test(child.getBullet())) {
                child.replateBullet(`${index++}.`);
            }
            visit(child);
        }
    }
    visit(root);
}

class DeleteAndMergeWithPreviousLineOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        const list = root.getListUnderCursor();
        const cursor = root.getCursor();
        const lines = list.getLinesInfo();
        const lineNo = lines.findIndex((l) => cursor.ch === l.from.ch && cursor.line === l.from.line);
        if (lineNo === 0) {
            this.mergeWithPreviousItem(root, cursor, list);
        }
        else if (lineNo > 0) {
            this.mergeNotes(root, cursor, list, lines, lineNo);
        }
    }
    mergeNotes(root, cursor, list, lines, lineNo) {
        this.stopPropagation = true;
        this.updated = true;
        const prevLineNo = lineNo - 1;
        root.replaceCursor({
            line: cursor.line - 1,
            ch: lines[prevLineNo].text.length + lines[prevLineNo].from.ch,
        });
        lines[prevLineNo].text += lines[lineNo].text;
        lines.splice(lineNo, 1);
        list.replaceLines(lines.map((l) => l.text));
    }
    mergeWithPreviousItem(root, cursor, list) {
        if (root.getChildren()[0] === list && list.getChildren().length === 0) {
            return;
        }
        this.stopPropagation = true;
        const prev = root.getListUnderLine(cursor.line - 1);
        if (!prev) {
            return;
        }
        const bothAreEmpty = prev.isEmpty() && list.isEmpty();
        const prevIsEmptyAndSameLevel = prev.isEmpty() && !list.isEmpty() && prev.getLevel() == list.getLevel();
        const listIsEmptyAndPrevIsParent = list.isEmpty() && prev.getLevel() == list.getLevel() - 1;
        if (bothAreEmpty || prevIsEmptyAndSameLevel || listIsEmptyAndPrevIsParent) {
            this.updated = true;
            const parent = list.getParent();
            const prevEnd = prev.getLastLineContentEnd();
            if (!prev.getNotesIndent() && list.getNotesIndent()) {
                prev.setNotesIndent(prev.getFirstLineIndent() +
                    list.getNotesIndent().slice(list.getFirstLineIndent().length));
            }
            const oldLines = prev.getLines();
            const newLines = list.getLines();
            oldLines[oldLines.length - 1] += newLines[0];
            const resultLines = oldLines.concat(newLines.slice(1));
            prev.replaceLines(resultLines);
            parent.removeChild(list);
            for (const c of list.getChildren()) {
                list.removeChild(c);
                prev.addAfterAll(c);
            }
            root.replaceCursor(prevEnd);
            recalculateNumericBullets(root);
        }
    }
}

class DeleteAndMergeWithNextLineOperation {
    constructor(root) {
        this.root = root;
        this.deleteAndMergeWithPrevious =
            new DeleteAndMergeWithPreviousLineOperation(root);
    }
    shouldStopPropagation() {
        return this.deleteAndMergeWithPrevious.shouldStopPropagation();
    }
    shouldUpdate() {
        return this.deleteAndMergeWithPrevious.shouldUpdate();
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        const list = root.getListUnderCursor();
        const cursor = root.getCursor();
        const lines = list.getLinesInfo();
        const lineNo = lines.findIndex((l) => cursor.ch === l.to.ch && cursor.line === l.to.line);
        if (lineNo === lines.length - 1) {
            const nextLine = lines[lineNo].to.line + 1;
            const nextList = root.getListUnderLine(nextLine);
            if (!nextList) {
                return;
            }
            root.replaceCursor(nextList.getFirstLineContentStart());
            this.deleteAndMergeWithPrevious.perform();
        }
        else if (lineNo >= 0) {
            root.replaceCursor(lines[lineNo + 1].from);
            this.deleteAndMergeWithPrevious.perform();
        }
    }
}

class DeleteTillLineStartOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        this.updated = true;
        const cursor = root.getCursor();
        const list = root.getListUnderCursor();
        const lines = list.getLinesInfo();
        const lineNo = lines.findIndex((l) => l.from.line === cursor.line);
        lines[lineNo].text = lines[lineNo].text.slice(cursor.ch - lines[lineNo].from.ch);
        list.replaceLines(lines.map((l) => l.text));
        root.replaceCursor(lines[lineNo].from);
    }
}

class DeleteShouldIgnoreBulletsFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.stickCursor != "never" && !this.ime.isIMEOpened();
        };
        this.deleteAndMergeWithPreviousLine = (editor) => {
            return this.performOperation.performOperation((root) => new DeleteAndMergeWithPreviousLineOperation(root), editor);
        };
        this.deleteTillLineStart = (editor) => {
            return this.performOperation.performOperation((root) => new DeleteTillLineStartOperation(root), editor);
        };
        this.deleteAndMergeWithNextLine = (editor) => {
            return this.performOperation.performOperation((root) => new DeleteAndMergeWithNextLineOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.keymap.of([
                {
                    key: "Backspace",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.deleteAndMergeWithPreviousLine,
                    }),
                },
                {
                    key: "Delete",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.deleteAndMergeWithNextLine,
                    }),
                },
                {
                    mac: "m-Backspace",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.deleteTillLineStart,
                    }),
                },
            ]));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class EnsureCursorInListContentOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const cursor = root.getCursor();
        const list = root.getListUnderCursor();
        const contentStart = list.getFirstLineContentStartAfterCheckbox();
        const linePrefix = contentStart.line === cursor.line
            ? contentStart.ch
            : list.getNotesIndent().length;
        if (cursor.ch < linePrefix) {
            this.updated = true;
            root.replaceCursor({
                line: cursor.line,
                ch: linePrefix,
            });
        }
    }
}

class EnsureCursorIsInUnfoldedLineOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const cursor = root.getCursor();
        const list = root.getListUnderCursor();
        if (!list.isFolded()) {
            return;
        }
        const foldRoot = list.getTopFoldRoot();
        const firstLineEnd = foldRoot.getLinesInfo()[0].to;
        if (cursor.line > firstLineEnd.line) {
            this.updated = true;
            root.replaceCursor(firstLineEnd);
        }
    }
}

class EnsureCursorInListContentFeature {
    constructor(plugin, settings, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.transactionExtender = (tr) => {
            if (this.settings.stickCursor == "never" || !tr.selection) {
                return null;
            }
            const editor = this.obsidian.getEditorFromState(tr.startState);
            setTimeout(() => {
                this.handleCursorActivity(editor);
            }, 0);
            return null;
        };
        this.handleCursorActivity = (editor) => {
            this.performOperation.performOperation((root) => new EnsureCursorIsInUnfoldedLineOperation(root), editor);
            this.performOperation.performOperation((root) => new EnsureCursorInListContentOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(state.EditorState.transactionExtender.of(this.transactionExtender));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class MoveLeftOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const list = root.getListUnderCursor();
        const parent = list.getParent();
        const grandParent = parent.getParent();
        if (!grandParent) {
            return;
        }
        this.updated = true;
        const listStartLineBefore = root.getContentLinesRangeOf(list)[0];
        const indentRmFrom = parent.getFirstLineIndent().length;
        const indentRmTill = list.getFirstLineIndent().length;
        parent.removeChild(list);
        grandParent.addAfter(parent, list);
        list.unindentContent(indentRmFrom, indentRmTill);
        const listStartLineAfter = root.getContentLinesRangeOf(list)[0];
        const lineDiff = listStartLineAfter - listStartLineBefore;
        const chDiff = indentRmTill - indentRmFrom;
        const cursor = root.getCursor();
        root.replaceCursor({
            line: cursor.line + lineDiff,
            ch: cursor.ch - chDiff,
        });
        recalculateNumericBullets(root);
    }
}

function isEmptyLineOrEmptyCheckbox(line) {
    return line === "" || line === "[ ] ";
}

class OutdentIfLineIsEmptyOperation {
    constructor(root) {
        this.root = root;
        this.moveLeftOp = new MoveLeftOperation(root);
    }
    shouldStopPropagation() {
        return this.moveLeftOp.shouldStopPropagation();
    }
    shouldUpdate() {
        return this.moveLeftOp.shouldUpdate();
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        const list = root.getListUnderCursor();
        const lines = list.getLines();
        if (lines.length > 1 ||
            !isEmptyLineOrEmptyCheckbox(lines[0]) ||
            list.getLevel() === 1) {
            return;
        }
        this.moveLeftOp.perform();
    }
}

class EnterOutdentIfLineIsEmptyFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.betterEnter && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            return this.performOperation.performOperation((root) => new OutdentIfLineIsEmptyOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(state.Prec.highest(view.keymap.of([
                {
                    key: "Enter",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ])));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

function cmpPos(a, b) {
    return a.line - b.line || a.ch - b.ch;
}
function maxPos(a, b) {
    return cmpPos(a, b) < 0 ? b : a;
}
function minPos(a, b) {
    return cmpPos(a, b) < 0 ? a : b;
}
class List {
    constructor(root, indent, bullet, optionalCheckbox, spaceAfterBullet, firstLine, foldRoot) {
        this.root = root;
        this.indent = indent;
        this.bullet = bullet;
        this.optionalCheckbox = optionalCheckbox;
        this.spaceAfterBullet = spaceAfterBullet;
        this.foldRoot = foldRoot;
        this.parent = null;
        this.children = [];
        this.notesIndent = null;
        this.lines = [];
        this.lines.push(firstLine);
    }
    getNotesIndent() {
        return this.notesIndent;
    }
    setNotesIndent(notesIndent) {
        if (this.notesIndent !== null) {
            throw new Error(`Notes indent already provided`);
        }
        this.notesIndent = notesIndent;
    }
    addLine(text) {
        if (this.notesIndent === null) {
            throw new Error(`Unable to add line, notes indent should be provided first`);
        }
        this.lines.push(text);
    }
    replaceLines(lines) {
        if (lines.length > 1 && this.notesIndent === null) {
            throw new Error(`Unable to add line, notes indent should be provided first`);
        }
        this.lines = lines;
    }
    getLineCount() {
        return this.lines.length;
    }
    getRoot() {
        return this.root;
    }
    getChildren() {
        return this.children.concat();
    }
    getLinesInfo() {
        const startLine = this.root.getContentLinesRangeOf(this)[0];
        return this.lines.map((row, i) => {
            const line = startLine + i;
            const startCh = i === 0 ? this.getContentStartCh() : this.notesIndent.length;
            const endCh = startCh + row.length;
            return {
                text: row,
                from: { line, ch: startCh },
                to: { line, ch: endCh },
            };
        });
    }
    getLines() {
        return this.lines.concat();
    }
    getFirstLineContentStart() {
        const startLine = this.root.getContentLinesRangeOf(this)[0];
        return {
            line: startLine,
            ch: this.getContentStartCh(),
        };
    }
    getFirstLineContentStartAfterCheckbox() {
        const startLine = this.root.getContentLinesRangeOf(this)[0];
        return {
            line: startLine,
            ch: this.getContentStartCh() + this.optionalCheckbox.length,
        };
    }
    getLastLineContentEnd() {
        const endLine = this.root.getContentLinesRangeOf(this)[1];
        const endCh = this.lines.length === 1
            ? this.getContentStartCh() + this.lines[0].length
            : this.notesIndent.length + this.lines[this.lines.length - 1].length;
        return {
            line: endLine,
            ch: endCh,
        };
    }
    getContentStartCh() {
        return this.indent.length + this.bullet.length + 1;
    }
    isFolded() {
        if (this.foldRoot) {
            return true;
        }
        if (this.parent) {
            return this.parent.isFolded();
        }
        return false;
    }
    isFoldRoot() {
        return this.foldRoot;
    }
    getTopFoldRoot() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let tmp = this;
        let foldRoot = null;
        while (tmp) {
            if (tmp.isFoldRoot()) {
                foldRoot = tmp;
            }
            tmp = tmp.parent;
        }
        return foldRoot;
    }
    getLevel() {
        if (!this.parent) {
            return 0;
        }
        return this.parent.getLevel() + 1;
    }
    unindentContent(from, till) {
        this.indent = this.indent.slice(0, from) + this.indent.slice(till);
        if (this.notesIndent !== null) {
            this.notesIndent =
                this.notesIndent.slice(0, from) + this.notesIndent.slice(till);
        }
        for (const child of this.children) {
            child.unindentContent(from, till);
        }
    }
    indentContent(indentPos, indentChars) {
        this.indent =
            this.indent.slice(0, indentPos) +
                indentChars +
                this.indent.slice(indentPos);
        if (this.notesIndent !== null) {
            this.notesIndent =
                this.notesIndent.slice(0, indentPos) +
                    indentChars +
                    this.notesIndent.slice(indentPos);
        }
        for (const child of this.children) {
            child.indentContent(indentPos, indentChars);
        }
    }
    getFirstLineIndent() {
        return this.indent;
    }
    getBullet() {
        return this.bullet;
    }
    getSpaceAfterBullet() {
        return this.spaceAfterBullet;
    }
    getCheckboxLength() {
        return this.optionalCheckbox.length;
    }
    replateBullet(bullet) {
        this.bullet = bullet;
    }
    getParent() {
        return this.parent;
    }
    addBeforeAll(list) {
        this.children.unshift(list);
        list.parent = this;
    }
    addAfterAll(list) {
        this.children.push(list);
        list.parent = this;
    }
    removeChild(list) {
        const i = this.children.indexOf(list);
        this.children.splice(i, 1);
        list.parent = null;
    }
    addBefore(before, list) {
        const i = this.children.indexOf(before);
        this.children.splice(i, 0, list);
        list.parent = this;
    }
    addAfter(before, list) {
        const i = this.children.indexOf(before);
        this.children.splice(i + 1, 0, list);
        list.parent = this;
    }
    getPrevSiblingOf(list) {
        const i = this.children.indexOf(list);
        return i > 0 ? this.children[i - 1] : null;
    }
    getNextSiblingOf(list) {
        const i = this.children.indexOf(list);
        return i >= 0 && i < this.children.length ? this.children[i + 1] : null;
    }
    isEmpty() {
        return this.children.length === 0;
    }
    print() {
        let res = "";
        for (let i = 0; i < this.lines.length; i++) {
            res +=
                i === 0
                    ? this.indent + this.bullet + this.spaceAfterBullet
                    : this.notesIndent;
            res += this.lines[i];
            res += "\n";
        }
        for (const child of this.children) {
            res += child.print();
        }
        return res;
    }
}
class Root {
    constructor(start, end, selections) {
        this.start = start;
        this.end = end;
        this.rootList = new List(this, "", "", "", "", "", false);
        this.selections = [];
        this.replaceSelections(selections);
    }
    getRootList() {
        return this.rootList;
    }
    getRange() {
        return [Object.assign({}, this.start), Object.assign({}, this.end)];
    }
    getSelections() {
        return this.selections.map((s) => ({
            anchor: Object.assign({}, s.anchor),
            head: Object.assign({}, s.head),
        }));
    }
    hasSingleCursor() {
        if (!this.hasSingleSelection()) {
            return false;
        }
        const selection = this.selections[0];
        return (selection.anchor.line === selection.head.line &&
            selection.anchor.ch === selection.head.ch);
    }
    hasSingleSelection() {
        return this.selections.length === 1;
    }
    getSelection() {
        const selection = this.selections[this.selections.length - 1];
        const from = selection.anchor.ch > selection.head.ch
            ? selection.head.ch
            : selection.anchor.ch;
        const to = selection.anchor.ch > selection.head.ch
            ? selection.anchor.ch
            : selection.head.ch;
        return Object.assign(Object.assign({}, selection), { from,
            to });
    }
    getCursor() {
        return Object.assign({}, this.selections[this.selections.length - 1].head);
    }
    replaceCursor(cursor) {
        this.selections = [{ anchor: cursor, head: cursor }];
    }
    replaceSelections(selections) {
        if (selections.length < 1) {
            throw new Error(`Unable to create Root without selections`);
        }
        this.selections = selections;
    }
    getListUnderCursor() {
        return this.getListUnderLine(this.getCursor().line);
    }
    getListUnderLine(line) {
        if (line < this.start.line || line > this.end.line) {
            return;
        }
        let result = null;
        let index = this.start.line;
        const visitArr = (ll) => {
            for (const l of ll) {
                const listFromLine = index;
                const listTillLine = listFromLine + l.getLineCount() - 1;
                if (line >= listFromLine && line <= listTillLine) {
                    result = l;
                }
                else {
                    index = listTillLine + 1;
                    visitArr(l.getChildren());
                }
                if (result !== null) {
                    return;
                }
            }
        };
        visitArr(this.rootList.getChildren());
        return result;
    }
    getContentLinesRangeOf(list) {
        let result = null;
        let line = this.start.line;
        const visitArr = (ll) => {
            for (const l of ll) {
                const listFromLine = line;
                const listTillLine = listFromLine + l.getLineCount() - 1;
                if (l === list) {
                    result = [listFromLine, listTillLine];
                }
                else {
                    line = listTillLine + 1;
                    visitArr(l.getChildren());
                }
                if (result !== null) {
                    return;
                }
            }
        };
        visitArr(this.rootList.getChildren());
        return result;
    }
    getChildren() {
        return this.rootList.getChildren();
    }
    print() {
        let res = "";
        for (const child of this.rootList.getChildren()) {
            res += child.print();
        }
        return res.replace(/\n$/, "");
    }
}

const checkboxRe = `\\[[^\\[\\]]\\][ \t]`;

class CreateNewItemOperation {
    constructor(root, defaultIndentChars, getZoomRange) {
        this.root = root;
        this.defaultIndentChars = defaultIndentChars;
        this.getZoomRange = getZoomRange;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleSelection()) {
            return;
        }
        const selection = root.getSelection();
        if (!selection || selection.anchor.line !== selection.head.line) {
            return;
        }
        const list = root.getListUnderCursor();
        const lines = list.getLinesInfo();
        if (lines.length === 1 && isEmptyLineOrEmptyCheckbox(lines[0].text)) {
            return;
        }
        const cursor = root.getCursor();
        const lineUnderCursor = lines.find((l) => l.from.line === cursor.line);
        if (cursor.ch < lineUnderCursor.from.ch) {
            return;
        }
        const { oldLines, newLines } = lines.reduce((acc, line) => {
            if (cursor.line > line.from.line) {
                acc.oldLines.push(line.text);
            }
            else if (cursor.line === line.from.line) {
                const left = line.text.slice(0, selection.from - line.from.ch);
                const right = line.text.slice(selection.to - line.from.ch);
                acc.oldLines.push(left);
                acc.newLines.push(right);
            }
            else if (cursor.line < line.from.line) {
                acc.newLines.push(line.text);
            }
            return acc;
        }, {
            oldLines: [],
            newLines: [],
        });
        const codeBlockBacticks = oldLines.join("\n").split("```").length - 1;
        const isInsideCodeblock = codeBlockBacticks > 0 && codeBlockBacticks % 2 !== 0;
        if (isInsideCodeblock) {
            return;
        }
        this.stopPropagation = true;
        this.updated = true;
        const zoomRange = this.getZoomRange.getZoomRange();
        const listIsZoomingRoot = Boolean(zoomRange &&
            list.getFirstLineContentStart().line >= zoomRange.from.line &&
            list.getLastLineContentEnd().line <= zoomRange.from.line);
        const hasChildren = !list.isEmpty();
        const childIsFolded = list.isFoldRoot();
        const endPos = list.getLastLineContentEnd();
        const endOfLine = cursor.line === endPos.line && cursor.ch === endPos.ch;
        const onChildLevel = listIsZoomingRoot || (hasChildren && !childIsFolded && endOfLine);
        const indent = onChildLevel
            ? hasChildren
                ? list.getChildren()[0].getFirstLineIndent()
                : list.getFirstLineIndent() + this.defaultIndentChars
            : list.getFirstLineIndent();
        const bullet = onChildLevel && hasChildren
            ? list.getChildren()[0].getBullet()
            : list.getBullet();
        const spaceAfterBullet = onChildLevel && hasChildren
            ? list.getChildren()[0].getSpaceAfterBullet()
            : list.getSpaceAfterBullet();
        const prefix = oldLines[0].match(checkboxRe) ? "[ ] " : "";
        const newList = new List(list.getRoot(), indent, bullet, prefix, spaceAfterBullet, prefix + newLines.shift(), false);
        if (newLines.length > 0) {
            newList.setNotesIndent(list.getNotesIndent());
            for (const line of newLines) {
                newList.addLine(line);
            }
        }
        if (onChildLevel) {
            list.addBeforeAll(newList);
        }
        else {
            if (!childIsFolded || !endOfLine) {
                const children = list.getChildren();
                for (const child of children) {
                    list.removeChild(child);
                    newList.addAfterAll(child);
                }
            }
            list.getParent().addAfter(list, newList);
        }
        list.replaceLines(oldLines);
        const newListStart = newList.getFirstLineContentStart();
        root.replaceCursor({
            line: newListStart.line,
            ch: newListStart.ch + prefix.length,
        });
        recalculateNumericBullets(root);
    }
}

class EnterShouldCreateNewItemFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.betterEnter && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            const zoomRange = editor.getZoomRange();
            const res = this.performOperation.performOperation((root) => new CreateNewItemOperation(root, this.obsidian.getDefaultIndentChars(), {
                getZoomRange: () => zoomRange,
            }), editor);
            if (res.shouldUpdate && zoomRange) {
                editor.zoomIn(zoomRange.from.line);
            }
            return res;
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(state.Prec.highest(view.keymap.of([
                {
                    key: "Enter",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ])));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class FoldFeature {
    constructor(plugin, obsidian) {
        this.plugin = plugin;
        this.obsidian = obsidian;
        this.fold = (editor) => {
            return this.setFold(editor, "fold");
        };
        this.unfold = (editor) => {
            return this.setFold(editor, "unfold");
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.addCommand({
                id: "fold",
                icon: "chevrons-down-up",
                name: "Fold the list",
                editorCallback: this.obsidian.createEditorCallback(this.fold),
                hotkeys: [
                    {
                        modifiers: ["Mod"],
                        key: "ArrowUp",
                    },
                ],
            });
            this.plugin.addCommand({
                id: "unfold",
                icon: "chevrons-up-down",
                name: "Unfold the list",
                editorCallback: this.obsidian.createEditorCallback(this.unfold),
                hotkeys: [
                    {
                        modifiers: ["Mod"],
                        key: "ArrowDown",
                    },
                ],
            });
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    setFold(editor, type) {
        if (!this.obsidian.getObsidianFoldSettings().foldIndent) {
            new obsidian.Notice(`Unable to ${type} because folding is disabled. Please enable "Fold indent" in Obsidian settings.`, 5000);
            return true;
        }
        const cursor = editor.getCursor();
        if (type === "fold") {
            editor.fold(cursor.line);
        }
        else {
            editor.unfold(cursor.line);
        }
        return true;
    }
}

function foldInside(view, from, to) {
    let found = null;
    language.foldedRanges(view.state).between(from, to, (from, to) => {
        if (!found || found.from > from)
            found = { from, to };
    });
    return found;
}
class MyEditor {
    constructor(e) {
        this.e = e;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.view = this.e.cm;
    }
    getCursor() {
        return this.e.getCursor();
    }
    getLine(n) {
        return this.e.getLine(n);
    }
    lastLine() {
        return this.e.lastLine();
    }
    listSelections() {
        return this.e.listSelections();
    }
    getRange(from, to) {
        return this.e.getRange(from, to);
    }
    replaceRange(replacement, from, to) {
        return this.e.replaceRange(replacement, from, to);
    }
    setSelections(selections) {
        this.e.setSelections(selections);
    }
    setValue(text) {
        this.e.setValue(text);
    }
    getValue() {
        return this.e.getValue();
    }
    offsetToPos(offset) {
        return this.e.offsetToPos(offset);
    }
    posToOffset(pos) {
        return this.e.posToOffset(pos);
    }
    fold(n) {
        const { view } = this;
        const l = view.lineBlockAt(view.state.doc.line(n + 1).from);
        const range = language.foldable(view.state, l.from, l.to);
        if (!range || range.from === range.to) {
            return;
        }
        view.dispatch({ effects: [language.foldEffect.of(range)] });
    }
    unfold(n) {
        const { view } = this;
        const l = view.lineBlockAt(view.state.doc.line(n + 1).from);
        const range = foldInside(view, l.from, l.to);
        if (!range) {
            return;
        }
        view.dispatch({ effects: [language.unfoldEffect.of(range)] });
    }
    getAllFoldedLines() {
        const c = language.foldedRanges(this.view.state).iter();
        const res = [];
        while (c.value) {
            res.push(this.offsetToPos(c.from).line);
            c.next();
        }
        return res;
    }
    triggerOnKeyDown(e) {
        view.runScopeHandlers(this.view, e, "editor");
    }
    getZoomRange() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const api = window.ObsidianZoomPlugin;
        if (!api || !api.getZoomRange) {
            return null;
        }
        return api.getZoomRange(this.e);
    }
    zoomOut() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const api = window.ObsidianZoomPlugin;
        if (!api || !api.zoomOut) {
            return;
        }
        api.zoomOut(this.e);
    }
    zoomIn(line) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const api = window.ObsidianZoomPlugin;
        if (!api || !api.zoomIn) {
            return;
        }
        api.zoomIn(this.e, line);
    }
}

class ListLinesViewPluginValue {
    constructor(settings, obsidian$1, parser, view) {
        this.settings = settings;
        this.obsidian = obsidian$1;
        this.parser = parser;
        this.view = view;
        this.lineElements = [];
        this.waitForEditor = () => {
            const oe = this.view.state.field(obsidian.editorInfoField).editor;
            if (!oe) {
                setTimeout(this.waitForEditor, 0);
                return;
            }
            this.editor = new MyEditor(oe);
            this.scheduleRecalculate();
        };
        this.onScroll = (e) => {
            const { scrollLeft, scrollTop } = e.target;
            this.scroller.scrollTo(scrollLeft, scrollTop);
        };
        this.scheduleRecalculate = () => {
            clearTimeout(this.scheduled);
            this.scheduled = setTimeout(this.calculate, 0);
        };
        this.calculate = () => {
            this.lines = [];
            if (this.settings.listLines &&
                this.obsidian.isDefaultThemeEnabled() &&
                this.view.viewportLineBlocks.length > 0 &&
                this.view.visibleRanges.length > 0) {
                const fromLine = this.editor.offsetToPos(this.view.viewport.from).line;
                const toLine = this.editor.offsetToPos(this.view.viewport.to).line;
                const lists = this.parser.parseRange(this.editor, fromLine, toLine);
                for (const list of lists) {
                    this.lastLine = list.getRange()[1].line;
                    for (const c of list.getChildren()) {
                        this.recursive(c);
                    }
                }
                this.lines.sort((a, b) => a.top === b.top ? a.left - b.left : a.top - b.top);
            }
            this.updateDom();
        };
        this.onClick = (e) => {
            e.preventDefault();
            const line = this.lines[Number(e.target.dataset.index)];
            switch (this.settings.listLineAction) {
                case "zoom-in":
                    this.zoomIn(line);
                    break;
                case "toggle-folding":
                    this.toggleFolding(line);
                    break;
            }
        };
        this.view.scrollDOM.addEventListener("scroll", this.onScroll);
        this.settings.onChange("listLines", this.scheduleRecalculate);
        this.prepareDom();
        this.waitForEditor();
    }
    prepareDom() {
        this.contentContainer = document.createElement("div");
        this.contentContainer.classList.add("outliner-plugin-list-lines-content-container");
        this.scroller = document.createElement("div");
        this.scroller.classList.add("outliner-plugin-list-lines-scroller");
        this.scroller.appendChild(this.contentContainer);
        this.view.dom.appendChild(this.scroller);
    }
    update(update) {
        if (update.docChanged ||
            update.viewportChanged ||
            update.geometryChanged ||
            update.transactions.some((tr) => tr.reconfigured)) {
            this.scheduleRecalculate();
        }
    }
    getNextSibling(list) {
        let listTmp = list;
        let p = listTmp.getParent();
        while (p) {
            const nextSibling = p.getNextSiblingOf(listTmp);
            if (nextSibling) {
                return nextSibling;
            }
            listTmp = p;
            p = listTmp.getParent();
        }
        return null;
    }
    recursive(list, parentCtx = {}) {
        const children = list.getChildren();
        if (children.length === 0) {
            return;
        }
        const fromOffset = this.editor.posToOffset({
            line: list.getFirstLineContentStart().line,
            ch: list.getFirstLineIndent().length,
        });
        const nextSibling = this.getNextSibling(list);
        const tillOffset = this.editor.posToOffset({
            line: nextSibling
                ? nextSibling.getFirstLineContentStart().line - 1
                : this.lastLine,
            ch: 0,
        });
        let visibleFrom = this.view.visibleRanges[0].from;
        let visibleTo = this.view.visibleRanges[this.view.visibleRanges.length - 1].to;
        const zoomRange = this.editor.getZoomRange();
        if (zoomRange) {
            visibleFrom = Math.max(visibleFrom, this.editor.posToOffset(zoomRange.from));
            visibleTo = Math.min(visibleTo, this.editor.posToOffset(zoomRange.to));
        }
        if (fromOffset > visibleTo || tillOffset < visibleFrom) {
            return;
        }
        const coords = this.view.coordsAtPos(fromOffset, 1);
        if (parentCtx.rootLeft === undefined) {
            parentCtx.rootLeft = coords.left;
        }
        const left = Math.floor(coords.right - parentCtx.rootLeft);
        const top = visibleFrom > 0 && fromOffset < visibleFrom
            ? -20
            : this.view.lineBlockAt(fromOffset).top;
        const bottom = tillOffset > visibleTo
            ? this.view.lineBlockAt(visibleTo - 1).bottom
            : this.view.lineBlockAt(tillOffset).bottom;
        const height = bottom - top;
        if (height > 0 && !list.isFolded()) {
            const nextSibling = list.getParent().getNextSiblingOf(list);
            const hasNextSibling = !!nextSibling &&
                this.editor.posToOffset(nextSibling.getFirstLineContentStart()) <=
                    visibleTo;
            this.lines.push({
                top,
                left,
                height: `calc(${height}px ${hasNextSibling ? "- 1.5em" : "- 2em"})`,
                list,
            });
        }
        for (const child of children) {
            if (!child.isEmpty()) {
                this.recursive(child, parentCtx);
            }
        }
    }
    zoomIn(line) {
        const editor = new MyEditor(this.view.state.field(obsidian.editorInfoField).editor);
        editor.zoomIn(line.list.getFirstLineContentStart().line);
    }
    toggleFolding(line) {
        const { list } = line;
        if (list.isEmpty()) {
            return;
        }
        let needToUnfold = true;
        const linesToToggle = [];
        for (const c of list.getChildren()) {
            if (c.isEmpty()) {
                continue;
            }
            if (!c.isFolded()) {
                needToUnfold = false;
            }
            linesToToggle.push(c.getFirstLineContentStart().line);
        }
        const editor = new MyEditor(this.view.state.field(obsidian.editorInfoField).editor);
        for (const l of linesToToggle) {
            if (needToUnfold) {
                editor.unfold(l);
            }
            else {
                editor.fold(l);
            }
        }
    }
    updateDom() {
        const cmScroll = this.view.scrollDOM;
        const cmContent = this.view.contentDOM;
        const cmContentContainer = cmContent.parentElement;
        const cmSizer = cmContentContainer.parentElement;
        /**
         * Obsidian can add additional elements into Content Manager.
         * The most obvious case is the 'embedded-backlinks' core plugin that adds a menu inside a Content Manager.
         * We must take heights of all of these elements into account
         * to be able to calculate the correct size of lines' container.
         */
        let cmSizerChildrenSumHeight = 0;
        for (let i = 0; i < cmSizer.children.length; i++) {
            cmSizerChildrenSumHeight += cmSizer.children[i].clientHeight;
        }
        this.scroller.style.top = cmScroll.offsetTop + "px";
        this.contentContainer.style.height = cmSizerChildrenSumHeight + "px";
        this.contentContainer.style.marginLeft =
            cmContentContainer.offsetLeft + "px";
        this.contentContainer.style.marginTop =
            cmContent.firstElementChild.offsetTop - 24 + "px";
        for (let i = 0; i < this.lines.length; i++) {
            if (this.lineElements.length === i) {
                const e = document.createElement("div");
                e.classList.add("outliner-plugin-list-line");
                e.dataset.index = String(i);
                e.addEventListener("mousedown", this.onClick);
                this.contentContainer.appendChild(e);
                this.lineElements.push(e);
            }
            const l = this.lines[i];
            const e = this.lineElements[i];
            e.style.top = l.top + "px";
            e.style.left = l.left + "px";
            e.style.height = l.height;
            e.style.display = "block";
        }
        for (let i = this.lines.length; i < this.lineElements.length; i++) {
            const e = this.lineElements[i];
            e.style.top = "0px";
            e.style.left = "0px";
            e.style.height = "0px";
            e.style.display = "none";
        }
    }
    destroy() {
        this.settings.removeCallback("listLines", this.scheduleRecalculate);
        this.view.scrollDOM.removeEventListener("scroll", this.onScroll);
        this.view.dom.removeChild(this.scroller);
        clearTimeout(this.scheduled);
    }
}
class LinesFeature {
    constructor(plugin, settings, obsidian, parser) {
        this.plugin = plugin;
        this.settings = settings;
        this.obsidian = obsidian;
        this.parser = parser;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.ViewPlugin.define((view) => new ListLinesViewPluginValue(this.settings, this.obsidian, this.parser, view)));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

const BETTER_LISTS_CLASS = "outliner-plugin-better-lists";
const BETTER_BULLETS_CLASS = "outliner-plugin-better-bullets";
const VERTICAL_LINES = "outliner-plugin-vertical-lines";
const KNOWN_CLASSES = [
    BETTER_LISTS_CLASS,
    BETTER_BULLETS_CLASS,
    VERTICAL_LINES,
];
class ListsStylesFeature {
    constructor(settings, obsidian) {
        this.settings = settings;
        this.obsidian = obsidian;
        this.syncListsStyles = () => {
            const classes = [];
            if (this.obsidian.isDefaultThemeEnabled()) {
                if (this.settings.styleLists) {
                    classes.push(BETTER_LISTS_CLASS);
                    classes.push(BETTER_BULLETS_CLASS);
                }
                if (this.settings.listLines) {
                    classes.push(VERTICAL_LINES);
                }
            }
            this.applyListsStyles(classes);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncListsStyles();
            this.interval = window.setInterval(() => {
                this.syncListsStyles();
            }, 1000);
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            clearInterval(this.interval);
            this.applyListsStyles([]);
        });
    }
    applyListsStyles(classes) {
        const toKeep = classes.filter((c) => KNOWN_CLASSES.contains(c));
        const toRemove = KNOWN_CLASSES.filter((c) => !toKeep.contains(c));
        for (const c of toKeep) {
            if (!document.body.classList.contains(c)) {
                document.body.classList.add(c);
            }
        }
        for (const c of toRemove) {
            if (document.body.classList.contains(c)) {
                document.body.classList.remove(c);
            }
        }
    }
}

class MoveCursorToPreviousUnfoldedLineOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        const list = this.root.getListUnderCursor();
        const cursor = this.root.getCursor();
        const lines = list.getLinesInfo();
        const lineNo = lines.findIndex((l) => {
            return (cursor.ch === l.from.ch + list.getCheckboxLength() &&
                cursor.line === l.from.line);
        });
        if (lineNo === 0) {
            this.moveCursorToPreviousUnfoldedItem(root, cursor);
        }
        else if (lineNo > 0) {
            this.moveCursorToPreviousNoteLine(root, lines, lineNo);
        }
    }
    moveCursorToPreviousNoteLine(root, lines, lineNo) {
        this.stopPropagation = true;
        this.updated = true;
        root.replaceCursor(lines[lineNo - 1].to);
    }
    moveCursorToPreviousUnfoldedItem(root, cursor) {
        const prev = root.getListUnderLine(cursor.line - 1);
        if (!prev) {
            return;
        }
        this.stopPropagation = true;
        this.updated = true;
        if (prev.isFolded()) {
            const foldRoot = prev.getTopFoldRoot();
            const firstLineEnd = foldRoot.getLinesInfo()[0].to;
            root.replaceCursor(firstLineEnd);
        }
        else {
            root.replaceCursor(prev.getLastLineContentEnd());
        }
    }
}

class MoveCursorToPreviousUnfoldedLineFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.stickCursor != "never" && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            return this.performOperation.performOperation((root) => new MoveCursorToPreviousUnfoldedLineOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.keymap.of([
                {
                    key: "ArrowLeft",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
                {
                    win: "c-ArrowLeft",
                    linux: "c-ArrowLeft",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ]));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class MoveDownOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const list = root.getListUnderCursor();
        const parent = list.getParent();
        const grandParent = parent.getParent();
        const next = parent.getNextSiblingOf(list);
        const listStartLineBefore = root.getContentLinesRangeOf(list)[0];
        if (!next && grandParent) {
            const newParent = grandParent.getNextSiblingOf(parent);
            if (newParent) {
                this.updated = true;
                parent.removeChild(list);
                newParent.addBeforeAll(list);
            }
        }
        else if (next) {
            this.updated = true;
            parent.removeChild(list);
            parent.addAfter(next, list);
        }
        if (!this.updated) {
            return;
        }
        const listStartLineAfter = root.getContentLinesRangeOf(list)[0];
        const lineDiff = listStartLineAfter - listStartLineBefore;
        const cursor = root.getCursor();
        root.replaceCursor({
            line: cursor.line + lineDiff,
            ch: cursor.ch,
        });
        recalculateNumericBullets(root);
    }
}

class MoveRightOperation {
    constructor(root, defaultIndentChars) {
        this.root = root;
        this.defaultIndentChars = defaultIndentChars;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const list = root.getListUnderCursor();
        const parent = list.getParent();
        const prev = parent.getPrevSiblingOf(list);
        if (!prev) {
            return;
        }
        this.updated = true;
        const listStartLineBefore = root.getContentLinesRangeOf(list)[0];
        const indentPos = list.getFirstLineIndent().length;
        let indentChars = "";
        if (indentChars === "" && !prev.isEmpty()) {
            indentChars = prev
                .getChildren()[0]
                .getFirstLineIndent()
                .slice(prev.getFirstLineIndent().length);
        }
        if (indentChars === "") {
            indentChars = list
                .getFirstLineIndent()
                .slice(parent.getFirstLineIndent().length);
        }
        if (indentChars === "" && !list.isEmpty()) {
            indentChars = list.getChildren()[0].getFirstLineIndent();
        }
        if (indentChars === "") {
            indentChars = this.defaultIndentChars;
        }
        parent.removeChild(list);
        prev.addAfterAll(list);
        list.indentContent(indentPos, indentChars);
        const listStartLineAfter = root.getContentLinesRangeOf(list)[0];
        const lineDiff = listStartLineAfter - listStartLineBefore;
        const cursor = root.getCursor();
        root.replaceCursor({
            line: cursor.line + lineDiff,
            ch: cursor.ch + indentChars.length,
        });
        recalculateNumericBullets(root);
    }
}

class MoveUpOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        const list = root.getListUnderCursor();
        const parent = list.getParent();
        const grandParent = parent.getParent();
        const prev = parent.getPrevSiblingOf(list);
        const listStartLineBefore = root.getContentLinesRangeOf(list)[0];
        if (!prev && grandParent) {
            const newParent = grandParent.getPrevSiblingOf(parent);
            if (newParent) {
                this.updated = true;
                parent.removeChild(list);
                newParent.addAfterAll(list);
            }
        }
        else if (prev) {
            this.updated = true;
            parent.removeChild(list);
            parent.addBefore(prev, list);
        }
        if (!this.updated) {
            return;
        }
        const listStartLineAfter = root.getContentLinesRangeOf(list)[0];
        const lineDiff = listStartLineAfter - listStartLineBefore;
        const cursor = root.getCursor();
        root.replaceCursor({
            line: cursor.line + lineDiff,
            ch: cursor.ch,
        });
        recalculateNumericBullets(root);
    }
}

class MoveItemsFeature {
    constructor(plugin, ime, obsidian, settings, performOperation) {
        this.plugin = plugin;
        this.ime = ime;
        this.obsidian = obsidian;
        this.settings = settings;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.betterTab && !this.ime.isIMEOpened();
        };
        this.moveListElementDownCommand = (editor) => {
            const { shouldStopPropagation } = this.performOperation.performOperation((root) => new MoveDownOperation(root), editor);
            return shouldStopPropagation;
        };
        this.moveListElementUpCommand = (editor) => {
            const { shouldStopPropagation } = this.performOperation.performOperation((root) => new MoveUpOperation(root), editor);
            return shouldStopPropagation;
        };
        this.moveListElementRightCommand = (editor) => {
            if (this.ime.isIMEOpened()) {
                return true;
            }
            return this.moveListElementRight(editor).shouldStopPropagation;
        };
        this.moveListElementRight = (editor) => {
            return this.performOperation.performOperation((root) => new MoveRightOperation(root, this.obsidian.getDefaultIndentChars()), editor);
        };
        this.moveListElementLeftCommand = (editor) => {
            if (this.ime.isIMEOpened()) {
                return true;
            }
            return this.moveListElementLeft(editor).shouldStopPropagation;
        };
        this.moveListElementLeft = (editor) => {
            return this.performOperation.performOperation((root) => new MoveLeftOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.addCommand({
                id: "move-list-item-up",
                icon: "arrow-up",
                name: "Move list and sublists up",
                editorCallback: this.obsidian.createEditorCallback(this.moveListElementUpCommand),
                hotkeys: [
                    {
                        modifiers: ["Mod", "Shift"],
                        key: "ArrowUp",
                    },
                ],
            });
            this.plugin.addCommand({
                id: "move-list-item-down",
                icon: "arrow-down",
                name: "Move list and sublists down",
                editorCallback: this.obsidian.createEditorCallback(this.moveListElementDownCommand),
                hotkeys: [
                    {
                        modifiers: ["Mod", "Shift"],
                        key: "ArrowDown",
                    },
                ],
            });
            this.plugin.addCommand({
                id: "indent-list",
                icon: "indent",
                name: "Indent the list and sublists",
                editorCallback: this.obsidian.createEditorCallback(this.moveListElementRightCommand),
                hotkeys: [],
            });
            this.plugin.addCommand({
                id: "outdent-list",
                icon: "outdent",
                name: "Outdent the list and sublists",
                editorCallback: this.obsidian.createEditorCallback(this.moveListElementLeftCommand),
                hotkeys: [],
            });
            this.plugin.registerEditorExtension(state.Prec.highest(view.keymap.of([
                {
                    key: "Tab",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.moveListElementRight,
                    }),
                },
                {
                    key: "s-Tab",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.moveListElementLeft,
                    }),
                },
            ])));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class SelectAllOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleSelection()) {
            return;
        }
        const selection = root.getSelections()[0];
        const [rootStart, rootEnd] = root.getRange();
        const selectionFrom = minPos(selection.anchor, selection.head);
        const selectionTo = maxPos(selection.anchor, selection.head);
        if (selectionFrom.line < rootStart.line ||
            selectionTo.line > rootEnd.line) {
            return false;
        }
        if (selectionFrom.line === rootStart.line &&
            selectionFrom.ch === rootStart.ch &&
            selectionTo.line === rootEnd.line &&
            selectionTo.ch === rootEnd.ch) {
            return false;
        }
        const list = root.getListUnderCursor();
        const contentStart = list.getFirstLineContentStartAfterCheckbox();
        const contentEnd = list.getLastLineContentEnd();
        if (selectionFrom.line < contentStart.line ||
            selectionTo.line > contentEnd.line) {
            return false;
        }
        this.stopPropagation = true;
        this.updated = true;
        if (selectionFrom.line === contentStart.line &&
            selectionFrom.ch === contentStart.ch &&
            selectionTo.line === contentEnd.line &&
            selectionTo.ch === contentEnd.ch) {
            // select whole list
            root.replaceSelections([{ anchor: rootStart, head: rootEnd }]);
        }
        else {
            // select whole line
            root.replaceSelections([{ anchor: contentStart, head: contentEnd }]);
        }
        return true;
    }
}

class SelectAllFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.selectAll && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            return this.performOperation.performOperation((root) => new SelectAllOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.keymap.of([
                {
                    key: "c-a",
                    mac: "m-a",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ]));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class SelectTillLineStartOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        this.stopPropagation = true;
        this.updated = true;
        const cursor = root.getCursor();
        const list = root.getListUnderCursor();
        const lines = list.getLinesInfo();
        const lineNo = lines.findIndex((l) => l.from.line === cursor.line);
        const offset = lineNo === 0 ? list.getCheckboxLength() : 0;
        const newHead = {
            ch: lines[lineNo].from.ch + offset,
            line: lines[lineNo].from.line,
        };
        root.replaceSelections([{ head: newHead, anchor: cursor }]);
    }
}

class SelectionShouldIgnoreBulletsFeature {
    constructor(plugin, settings, ime, obsidian, performOperation) {
        this.plugin = plugin;
        this.settings = settings;
        this.ime = ime;
        this.obsidian = obsidian;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.stickCursor != "never" && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            return this.performOperation.performOperation((root) => new SelectTillLineStartOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.keymap.of([
                {
                    key: "m-s-ArrowLeft",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ]));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class ObsidianOutlinerPluginSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin, settings) {
        super(app, plugin);
        this.settings = settings;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Improve the style of your lists")
            .setDesc("Styles are only compatible with built-in Obsidian themes and may not be compatible with other themes.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.styleLists).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.styleLists = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Draw vertical indentation lines")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.listLines).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.listLines = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Vertical indentation line click action")
            .addDropdown((dropdown) => {
            dropdown
                .addOptions({
                none: "None",
                "zoom-in": "Zoom In",
                "toggle-folding": "Toggle Folding",
            })
                .setValue(this.settings.listLineAction)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.listLineAction = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Stick the cursor to the content")
            .setDesc("Don't let the cursor move to the bullet position.")
            .addDropdown((dropdown) => {
            dropdown
                .addOptions({
                never: "Never",
                "bullet-only": "Stick cursor out of bullets",
                "bullet-and-checkbox": "Stick cursor out of bullets and checkboxes",
            })
                .setValue(this.settings.stickCursor)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.stickCursor = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Enhance the Enter key")
            .setDesc("Make the Enter key behave the same as other outliners.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.betterEnter).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.betterEnter = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Enhance the Tab key")
            .setDesc("Make Tab and Shift-Tab behave the same as other outliners.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.betterTab).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.betterTab = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Enhance the Ctrl+A or Cmd+A behavior")
            .setDesc("Press the hotkey once to select the current list item. Press the hotkey twice to select the entire list.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.selectAll).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.selectAll = value;
                yield this.settings.save();
            }));
        });
        new obsidian.Setting(containerEl)
            .setName("Debug mode")
            .setDesc("Open DevTools (Command+Option+I or Control+Shift+I) to copy the debug logs.")
            .addToggle((toggle) => {
            toggle.setValue(this.settings.debug).onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.settings.debug = value;
                yield this.settings.save();
            }));
        });
    }
}
class SettingsTabFeature {
    constructor(plugin, settings) {
        this.plugin = plugin;
        this.settings = settings;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.addSettingTab(new ObsidianOutlinerPluginSettingTab(this.plugin.app, this.plugin, this.settings));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class CreateNoteLineOperation {
    constructor(root) {
        this.root = root;
        this.stopPropagation = false;
        this.updated = false;
    }
    shouldStopPropagation() {
        return this.stopPropagation;
    }
    shouldUpdate() {
        return this.updated;
    }
    perform() {
        const { root } = this;
        if (!root.hasSingleCursor()) {
            return;
        }
        const cursor = root.getCursor();
        const list = root.getListUnderCursor();
        const lineUnderCursor = list
            .getLinesInfo()
            .find((l) => l.from.line === cursor.line);
        if (cursor.ch < lineUnderCursor.from.ch) {
            return;
        }
        this.stopPropagation = true;
        this.updated = true;
        if (!list.getNotesIndent()) {
            list.setNotesIndent(list.getFirstLineIndent() + "  ");
        }
        const lines = list.getLinesInfo().reduce((acc, line) => {
            if (cursor.line === line.from.line) {
                acc.push(line.text.slice(0, cursor.ch - line.from.ch));
                acc.push(line.text.slice(cursor.ch - line.from.ch));
            }
            else {
                acc.push(line.text);
            }
            return acc;
        }, []);
        list.replaceLines(lines);
        root.replaceCursor({
            line: cursor.line + 1,
            ch: list.getNotesIndent().length,
        });
    }
}

class ShiftEnterShouldCreateNoteFeature {
    constructor(plugin, obsidian, settings, ime, performOperation) {
        this.plugin = plugin;
        this.obsidian = obsidian;
        this.settings = settings;
        this.ime = ime;
        this.performOperation = performOperation;
        this.check = () => {
            return this.settings.betterEnter && !this.ime.isIMEOpened();
        };
        this.run = (editor) => {
            return this.performOperation.performOperation((root) => new CreateNoteLineOperation(root), editor);
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.plugin.registerEditorExtension(view.keymap.of([
                {
                    key: "s-Enter",
                    run: this.obsidian.createKeymapRunCallback({
                        check: this.check,
                        run: this.run,
                    }),
                },
            ]));
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

class ApplyChangesService {
    applyChanges(editor, root) {
        const rootRange = root.getRange();
        const oldString = editor.getRange(rootRange[0], rootRange[1]);
        const newString = root.print();
        const fromLine = rootRange[0].line;
        const toLine = rootRange[1].line;
        for (let l = fromLine; l <= toLine; l++) {
            editor.unfold(l);
        }
        const changeFrom = Object.assign({}, rootRange[0]);
        const changeTo = Object.assign({}, rootRange[1]);
        let oldTmp = oldString;
        let newTmp = newString;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const nlIndex = oldTmp.lastIndexOf("\n");
            if (nlIndex < 0) {
                break;
            }
            const oldLine = oldTmp.slice(nlIndex);
            const newLine = newTmp.slice(-oldLine.length);
            if (oldLine !== newLine) {
                break;
            }
            oldTmp = oldTmp.slice(0, -oldLine.length);
            newTmp = newTmp.slice(0, -oldLine.length);
            const nlIndex2 = oldTmp.lastIndexOf("\n");
            changeTo.ch =
                nlIndex2 >= 0 ? oldTmp.length - nlIndex2 - 1 : oldTmp.length;
            changeTo.line--;
        }
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const nlIndex = oldTmp.indexOf("\n");
            if (nlIndex < 0) {
                break;
            }
            const oldLine = oldTmp.slice(0, nlIndex + 1);
            const newLine = newTmp.slice(0, oldLine.length);
            if (oldLine !== newLine) {
                break;
            }
            changeFrom.line++;
            oldTmp = oldTmp.slice(oldLine.length);
            newTmp = newTmp.slice(oldLine.length);
        }
        if (oldTmp !== newTmp) {
            editor.replaceRange(newTmp, changeFrom, changeTo);
        }
        editor.setSelections(root.getSelections());
        function recursive(list) {
            for (const c of list.getChildren()) {
                recursive(c);
            }
            if (list.isFoldRoot()) {
                editor.fold(list.getFirstLineContentStart().line);
            }
        }
        for (const c of root.getChildren()) {
            recursive(c);
        }
    }
}

class IMEService {
    constructor() {
        this.composition = false;
        this.onCompositionStart = () => {
            this.composition = true;
        };
        this.onCompositionEnd = () => {
            this.composition = false;
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("compositionstart", this.onCompositionStart);
            document.addEventListener("compositionend", this.onCompositionEnd);
        });
    }
    unload() {
        return __awaiter(this, void 0, void 0, function* () {
            document.removeEventListener("compositionend", this.onCompositionEnd);
            document.removeEventListener("compositionstart", this.onCompositionStart);
        });
    }
    isIMEOpened() {
        return this.composition && obsidian.Platform.isDesktop;
    }
}

class LoggerService {
    constructor(settings) {
        this.settings = settings;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(method, ...args) {
        if (!this.settings.debug) {
            return;
        }
        console.info(method, ...args);
    }
    bind(method) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (...args) => this.log(method, ...args);
    }
}

class ObsidianService {
    constructor(app) {
        this.app = app;
    }
    isLegacyEditorEnabled() {
        const config = Object.assign({ legacyEditor: false }, this.app.vault.config);
        return config.legacyEditor;
    }
    isDefaultThemeEnabled() {
        const config = Object.assign({ cssTheme: "" }, this.app.vault.config);
        return config.cssTheme === "";
    }
    getObsidianTabsSettings() {
        return Object.assign({ useTab: true, tabSize: 4 }, this.app.vault.config);
    }
    getObsidianFoldSettings() {
        return Object.assign({ foldIndent: true }, this.app.vault.config);
    }
    getDefaultIndentChars() {
        const { useTab, tabSize } = this.getObsidianTabsSettings();
        return useTab ? "\t" : new Array(tabSize).fill(" ").join("");
    }
    getEditorFromState(state) {
        return new MyEditor(state.field(obsidian.editorInfoField).editor);
    }
    createKeymapRunCallback(config) {
        const check = config.check || (() => true);
        const { run } = config;
        return (view) => {
            const editor = this.getEditorFromState(view.state);
            if (!check(editor)) {
                return false;
            }
            const { shouldUpdate, shouldStopPropagation } = run(editor);
            return shouldUpdate || shouldStopPropagation;
        };
    }
    createEditorCallback(cb) {
        return (editor) => {
            const myEditor = new MyEditor(editor);
            const shouldStopPropagation = cb(myEditor);
            if (!shouldStopPropagation &&
                window.event &&
                window.event.type === "keydown") {
                myEditor.triggerOnKeyDown(window.event);
            }
        };
    }
}

const bulletSignRe = `(?:[-*+]|\\d+\\.)`;
const optionalCheckboxRe = `(?:${checkboxRe})?`;
const listItemWithoutSpacesRe = new RegExp(`^${bulletSignRe}( |\t)`);
const listItemRe = new RegExp(`^[ \t]*${bulletSignRe}( |\t)`);
const stringWithSpacesRe = new RegExp(`^[ \t]+`);
const parseListItemRe = new RegExp(`^([ \t]*)(${bulletSignRe})( |\t)(${optionalCheckboxRe})(.*)$`);
class ParserService {
    constructor(logger, settings) {
        this.logger = logger;
        this.settings = settings;
    }
    parseRange(editor, fromLine = 0, toLine = editor.lastLine()) {
        const lists = [];
        for (let i = fromLine; i <= toLine; i++) {
            const line = editor.getLine(i);
            if (i === fromLine || this.isListItem(line)) {
                const list = this.parseWithLimits(editor, i, fromLine, toLine);
                if (list) {
                    lists.push(list);
                    i = list.getRange()[1].line;
                }
            }
        }
        return lists;
    }
    parse(editor, cursor = editor.getCursor()) {
        return this.parseWithLimits(editor, cursor.line, 0, editor.lastLine());
    }
    parseWithLimits(editor, parsingStartLine, limitFrom, limitTo) {
        const d = this.logger.bind("parseList");
        const error = (msg) => {
            d(msg);
            return null;
        };
        const line = editor.getLine(parsingStartLine);
        let listLookingPos = null;
        if (this.isListItem(line)) {
            listLookingPos = parsingStartLine;
        }
        else if (this.isLineWithIndent(line)) {
            let listLookingPosSearch = parsingStartLine - 1;
            while (listLookingPosSearch >= 0) {
                const line = editor.getLine(listLookingPosSearch);
                if (this.isListItem(line)) {
                    listLookingPos = listLookingPosSearch;
                    break;
                }
                else if (this.isLineWithIndent(line)) {
                    listLookingPosSearch--;
                }
                else {
                    break;
                }
            }
        }
        if (listLookingPos == null) {
            return null;
        }
        let listStartLine = null;
        let listStartLineLookup = listLookingPos;
        while (listStartLineLookup >= 0) {
            const line = editor.getLine(listStartLineLookup);
            if (!this.isListItem(line) && !this.isLineWithIndent(line)) {
                break;
            }
            if (this.isListItemWithoutSpaces(line)) {
                listStartLine = listStartLineLookup;
                if (listStartLineLookup <= limitFrom) {
                    break;
                }
            }
            listStartLineLookup--;
        }
        if (listStartLine === null) {
            return null;
        }
        let listEndLine = listLookingPos;
        let listEndLineLookup = listLookingPos;
        while (listEndLineLookup <= editor.lastLine()) {
            const line = editor.getLine(listEndLineLookup);
            if (!this.isListItem(line) && !this.isLineWithIndent(line)) {
                break;
            }
            if (!this.isEmptyLine(line)) {
                listEndLine = listEndLineLookup;
            }
            if (listEndLineLookup >= limitTo) {
                listEndLine = limitTo;
                break;
            }
            listEndLineLookup++;
        }
        if (listStartLine > parsingStartLine || listEndLine < parsingStartLine) {
            return null;
        }
        const root = new Root({ line: listStartLine, ch: 0 }, { line: listEndLine, ch: editor.getLine(listEndLine).length }, editor.listSelections().map((r) => ({
            anchor: { line: r.anchor.line, ch: r.anchor.ch },
            head: { line: r.head.line, ch: r.head.ch },
        })));
        let currentParent = root.getRootList();
        let currentList = null;
        let currentIndent = "";
        const foldedLines = editor.getAllFoldedLines();
        for (let l = listStartLine; l <= listEndLine; l++) {
            const line = editor.getLine(l);
            const matches = parseListItemRe.exec(line);
            if (matches) {
                const [, indent, bullet, spaceAfterBullet] = matches;
                let [, , , , optionalCheckbox, content] = matches;
                content = optionalCheckbox + content;
                if (this.settings.stickCursor != "bullet-and-checkbox") {
                    optionalCheckbox = "";
                }
                const compareLength = Math.min(currentIndent.length, indent.length);
                const indentSlice = indent.slice(0, compareLength);
                const currentIndentSlice = currentIndent.slice(0, compareLength);
                if (indentSlice !== currentIndentSlice) {
                    const expected = currentIndentSlice
                        .replace(/ /g, "S")
                        .replace(/\t/g, "T");
                    const got = indentSlice.replace(/ /g, "S").replace(/\t/g, "T");
                    return error(`Unable to parse list: expected indent "${expected}", got "${got}"`);
                }
                if (indent.length > currentIndent.length) {
                    currentParent = currentList;
                    currentIndent = indent;
                }
                else if (indent.length < currentIndent.length) {
                    while (currentParent.getFirstLineIndent().length >= indent.length &&
                        currentParent.getParent()) {
                        currentParent = currentParent.getParent();
                    }
                    currentIndent = indent;
                }
                const foldRoot = foldedLines.includes(l);
                currentList = new List(root, indent, bullet, optionalCheckbox, spaceAfterBullet, content, foldRoot);
                currentParent.addAfterAll(currentList);
            }
            else if (this.isLineWithIndent(line)) {
                if (!currentList) {
                    return error(`Unable to parse list: expected list item, got empty line`);
                }
                const indentToCheck = currentList.getNotesIndent() || currentIndent;
                if (line.indexOf(indentToCheck) !== 0) {
                    const expected = indentToCheck.replace(/ /g, "S").replace(/\t/g, "T");
                    const got = line
                        .match(/^[ \t]*/)[0]
                        .replace(/ /g, "S")
                        .replace(/\t/g, "T");
                    return error(`Unable to parse list: expected indent "${expected}", got "${got}"`);
                }
                if (!currentList.getNotesIndent()) {
                    const matches = line.match(/^[ \t]+/);
                    if (!matches || matches[0].length <= currentIndent.length) {
                        if (/^\s+$/.test(line)) {
                            continue;
                        }
                        return error(`Unable to parse list: expected some indent, got no indent`);
                    }
                    currentList.setNotesIndent(matches[0]);
                }
                currentList.addLine(line.slice(currentList.getNotesIndent().length));
            }
            else {
                return error(`Unable to parse list: expected list item or note, got "${line}"`);
            }
        }
        return root;
    }
    isEmptyLine(line) {
        return line.length === 0;
    }
    isLineWithIndent(line) {
        return stringWithSpacesRe.test(line);
    }
    isListItem(line) {
        return listItemRe.test(line);
    }
    isListItemWithoutSpaces(line) {
        return listItemWithoutSpacesRe.test(line);
    }
}

class PerformOperationService {
    constructor(parser, applyChanges) {
        this.parser = parser;
        this.applyChanges = applyChanges;
    }
    evalOperation(root, op, editor) {
        op.perform();
        if (op.shouldUpdate()) {
            this.applyChanges.applyChanges(editor, root);
        }
        return {
            shouldUpdate: op.shouldUpdate(),
            shouldStopPropagation: op.shouldStopPropagation(),
        };
    }
    performOperation(cb, editor, cursor = editor.getCursor()) {
        const root = this.parser.parse(editor, cursor);
        if (!root) {
            return { shouldUpdate: false, shouldStopPropagation: false };
        }
        const op = cb(root);
        return this.evalOperation(root, op, editor);
    }
}

const DEFAULT_SETTINGS = {
    styleLists: true,
    debug: false,
    stickCursor: "bullet-and-checkbox",
    betterEnter: true,
    betterTab: true,
    selectAll: true,
    listLines: false,
    listLineAction: "toggle-folding",
};
class SettingsService {
    constructor(storage) {
        this.storage = storage;
        this.handlers = new Map();
    }
    get styleLists() {
        return this.values.styleLists;
    }
    set styleLists(value) {
        this.set("styleLists", value);
    }
    get debug() {
        return this.values.debug;
    }
    set debug(value) {
        this.set("debug", value);
    }
    get stickCursor() {
        // Adaptor for users migrating from older version of the plugin.
        if (this.values.stickCursor === true) {
            return "bullet-and-checkbox";
        }
        else if (this.values.stickCursor === false) {
            return "never";
        }
        return this.values.stickCursor;
    }
    set stickCursor(value) {
        this.set("stickCursor", value);
    }
    get betterEnter() {
        return this.values.betterEnter;
    }
    set betterEnter(value) {
        this.set("betterEnter", value);
    }
    get betterTab() {
        return this.values.betterTab;
    }
    set betterTab(value) {
        this.set("betterTab", value);
    }
    get selectAll() {
        return this.values.selectAll;
    }
    set selectAll(value) {
        this.set("selectAll", value);
    }
    get listLines() {
        return this.values.listLines;
    }
    set listLines(value) {
        this.set("listLines", value);
    }
    get listLineAction() {
        return this.values.listLineAction;
    }
    set listLineAction(value) {
        this.set("listLineAction", value);
    }
    onChange(key, cb) {
        if (!this.handlers.has(key)) {
            this.handlers.set(key, new Set());
        }
        this.handlers.get(key).add(cb);
    }
    removeCallback(key, cb) {
        const handlers = this.handlers.get(key);
        if (handlers) {
            handlers.delete(cb);
        }
    }
    reset() {
        for (const [k, v] of Object.entries(DEFAULT_SETTINGS)) {
            this.set(k, v);
        }
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.values = Object.assign({}, DEFAULT_SETTINGS, yield this.storage.loadData());
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.saveData(this.values);
        });
    }
    set(key, value) {
        this.values[key] = value;
        const callbacks = this.handlers.get(key);
        if (!callbacks) {
            return;
        }
        for (const cb of callbacks.values()) {
            cb(value);
        }
    }
}

class ObsidianOutlinerPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Loading obsidian-outliner`);
            this.obsidian = new ObsidianService(this.app);
            this.settings = new SettingsService(this);
            yield this.settings.load();
            this.logger = new LoggerService(this.settings);
            this.parser = new ParserService(this.logger, this.settings);
            this.applyChanges = new ApplyChangesService();
            this.performOperation = new PerformOperationService(this.parser, this.applyChanges);
            this.ime = new IMEService();
            yield this.ime.load();
            this.features = [
                new SettingsTabFeature(this, this.settings),
                new ListsStylesFeature(this.settings, this.obsidian),
                new EnterOutdentIfLineIsEmptyFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new EnterShouldCreateNewItemFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new EnsureCursorInListContentFeature(this, this.settings, this.obsidian, this.performOperation),
                new MoveCursorToPreviousUnfoldedLineFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new DeleteShouldIgnoreBulletsFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new SelectionShouldIgnoreBulletsFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new FoldFeature(this, this.obsidian),
                new SelectAllFeature(this, this.settings, this.ime, this.obsidian, this.performOperation),
                new MoveItemsFeature(this, this.ime, this.obsidian, this.settings, this.performOperation),
                new ShiftEnterShouldCreateNoteFeature(this, this.obsidian, this.settings, this.ime, this.performOperation),
                new LinesFeature(this, this.settings, this.obsidian, this.parser),
            ];
            for (const feature of this.features) {
                yield feature.load();
            }
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Unloading obsidian-outliner`);
            yield this.ime.unload();
            for (const feature of this.features) {
                yield feature.unload();
            }
        });
    }
}

module.exports = ObsidianOutlinerPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9yb290L3JlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHMudHMiLCJzcmMvb3BlcmF0aW9ucy9EZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91c0xpbmVPcGVyYXRpb24udHMiLCJzcmMvb3BlcmF0aW9ucy9EZWxldGVBbmRNZXJnZVdpdGhOZXh0TGluZU9wZXJhdGlvbi50cyIsInNyYy9vcGVyYXRpb25zL0RlbGV0ZVRpbGxMaW5lU3RhcnRPcGVyYXRpb24udHMiLCJzcmMvZmVhdHVyZXMvRGVsZXRlU2hvdWxkSWdub3JlQnVsbGV0c0ZlYXR1cmUudHMiLCJzcmMvb3BlcmF0aW9ucy9FbnN1cmVDdXJzb3JJbkxpc3RDb250ZW50T3BlcmF0aW9uLnRzIiwic3JjL29wZXJhdGlvbnMvRW5zdXJlQ3Vyc29ySXNJblVuZm9sZGVkTGluZU9wZXJhdGlvbi50cyIsInNyYy9mZWF0dXJlcy9FbnN1cmVDdXJzb3JJbkxpc3RDb250ZW50RmVhdHVyZS50cyIsInNyYy9vcGVyYXRpb25zL01vdmVMZWZ0T3BlcmF0aW9uLnRzIiwic3JjL3V0aWxzL2lzRW1wdHlMaW5lT3JFbXB0eUNoZWNrYm94LnRzIiwic3JjL29wZXJhdGlvbnMvT3V0ZGVudElmTGluZUlzRW1wdHlPcGVyYXRpb24udHMiLCJzcmMvZmVhdHVyZXMvRW50ZXJPdXRkZW50SWZMaW5lSXNFbXB0eUZlYXR1cmUudHMiLCJzcmMvcm9vdC9pbmRleC50cyIsInNyYy91dGlscy9jaGVja2JveFJlLnRzIiwic3JjL29wZXJhdGlvbnMvQ3JlYXRlTmV3SXRlbU9wZXJhdGlvbi50cyIsInNyYy9mZWF0dXJlcy9FbnRlclNob3VsZENyZWF0ZU5ld0l0ZW1PbkNoaWxkTGV2ZWxGZWF0dXJlLnRzIiwic3JjL2ZlYXR1cmVzL0ZvbGRGZWF0dXJlLnRzIiwic3JjL015RWRpdG9yLnRzIiwic3JjL2ZlYXR1cmVzL0xpbmVzRmVhdHVyZS50cyIsInNyYy9mZWF0dXJlcy9MaXN0c1N0eWxlc0ZlYXR1cmUudHMiLCJzcmMvb3BlcmF0aW9ucy9Nb3ZlQ3Vyc29yVG9QcmV2aW91c1VuZm9sZGVkTGluZU9wZXJhdGlvbi50cyIsInNyYy9mZWF0dXJlcy9Nb3ZlQ3Vyc29yVG9QcmV2aW91c1VuZm9sZGVkTGluZUZlYXR1cmUudHMiLCJzcmMvb3BlcmF0aW9ucy9Nb3ZlRG93bk9wZXJhdGlvbi50cyIsInNyYy9vcGVyYXRpb25zL01vdmVSaWdodE9wZXJhdGlvbi50cyIsInNyYy9vcGVyYXRpb25zL01vdmVVcE9wZXJhdGlvbi50cyIsInNyYy9mZWF0dXJlcy9Nb3ZlSXRlbXNGZWF0dXJlLnRzIiwic3JjL29wZXJhdGlvbnMvU2VsZWN0QWxsT3BlcmF0aW9uLnRzIiwic3JjL2ZlYXR1cmVzL1NlbGVjdEFsbEZlYXR1cmUudHMiLCJzcmMvb3BlcmF0aW9ucy9TZWxlY3RUaWxsTGluZVN0YXJ0T3BlcmF0aW9uLnRzIiwic3JjL2ZlYXR1cmVzL1NlbGVjdGlvblNob3VsZElnbm9yZUJ1bGxldHNGZWF0dXJlLnRzIiwic3JjL2ZlYXR1cmVzL1NldHRpbmdzVGFiRmVhdHVyZS50cyIsInNyYy9vcGVyYXRpb25zL0NyZWF0ZU5vdGVMaW5lT3BlcmF0aW9uLnRzIiwic3JjL2ZlYXR1cmVzL1NoaWZ0RW50ZXJTaG91bGRDcmVhdGVOb3RlRmVhdHVyZS50cyIsInNyYy9zZXJ2aWNlcy9BcHBseUNoYW5nZXNTZXJ2aWNlLnRzIiwic3JjL3NlcnZpY2VzL0lNRVNlcnZpY2UudHMiLCJzcmMvc2VydmljZXMvTG9nZ2VyU2VydmljZS50cyIsInNyYy9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2UudHMiLCJzcmMvc2VydmljZXMvUGFyc2VyU2VydmljZS50cyIsInNyYy9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZS50cyIsInNyYy9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2UudHMiLCJzcmMvT2JzaWRpYW5PdXRsaW5lclBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xyXG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XHJcbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xyXG4gICAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XHJcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcclxuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XHJcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMucHVzaChfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy5wdXNoKF8pO1xyXG4gICAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xyXG4gICAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IExpc3QsIFJvb3QgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0cyhyb290OiBSb290KSB7XG4gIGZ1bmN0aW9uIHZpc2l0KHBhcmVudDogUm9vdCB8IExpc3QpIHtcbiAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSkge1xuICAgICAgaWYgKC9cXGQrXFwuLy50ZXN0KGNoaWxkLmdldEJ1bGxldCgpKSkge1xuICAgICAgICBjaGlsZC5yZXBsYXRlQnVsbGV0KGAke2luZGV4Kyt9LmApO1xuICAgICAgfVxuXG4gICAgICB2aXNpdChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXQocm9vdCk7XG59XG4iLCJpbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi9PcGVyYXRpb25cIjtcblxuaW1wb3J0IHsgTGlzdCwgTGlzdExpbmUsIFBvc2l0aW9uLCBSb290IH0gZnJvbSBcIi4uL3Jvb3RcIjtcbmltcG9ydCB7IHJlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHMgfSBmcm9tIFwiLi4vcm9vdC9yZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91c0xpbmVPcGVyYXRpb24gaW1wbGVtZW50cyBPcGVyYXRpb24ge1xuICBwcml2YXRlIHN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHVwZGF0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3Q6IFJvb3QpIHt9XG5cbiAgc2hvdWxkU3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3BQcm9wYWdhdGlvbjtcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVkO1xuICB9XG5cbiAgcGVyZm9ybSgpIHtcbiAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXM7XG5cbiAgICBpZiAoIXJvb3QuaGFzU2luZ2xlQ3Vyc29yKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gcm9vdC5nZXRMaXN0VW5kZXJDdXJzb3IoKTtcbiAgICBjb25zdCBjdXJzb3IgPSByb290LmdldEN1cnNvcigpO1xuICAgIGNvbnN0IGxpbmVzID0gbGlzdC5nZXRMaW5lc0luZm8oKTtcblxuICAgIGNvbnN0IGxpbmVObyA9IGxpbmVzLmZpbmRJbmRleChcbiAgICAgIChsKSA9PiBjdXJzb3IuY2ggPT09IGwuZnJvbS5jaCAmJiBjdXJzb3IubGluZSA9PT0gbC5mcm9tLmxpbmVcbiAgICApO1xuXG4gICAgaWYgKGxpbmVObyA9PT0gMCkge1xuICAgICAgdGhpcy5tZXJnZVdpdGhQcmV2aW91c0l0ZW0ocm9vdCwgY3Vyc29yLCBsaXN0KTtcbiAgICB9IGVsc2UgaWYgKGxpbmVObyA+IDApIHtcbiAgICAgIHRoaXMubWVyZ2VOb3Rlcyhyb290LCBjdXJzb3IsIGxpc3QsIGxpbmVzLCBsaW5lTm8pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VOb3RlcyhcbiAgICByb290OiBSb290LFxuICAgIGN1cnNvcjogUG9zaXRpb24sXG4gICAgbGlzdDogTGlzdCxcbiAgICBsaW5lczogTGlzdExpbmVbXSxcbiAgICBsaW5lTm86IG51bWJlclxuICApIHtcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHByZXZMaW5lTm8gPSBsaW5lTm8gLSAxO1xuXG4gICAgcm9vdC5yZXBsYWNlQ3Vyc29yKHtcbiAgICAgIGxpbmU6IGN1cnNvci5saW5lIC0gMSxcbiAgICAgIGNoOiBsaW5lc1twcmV2TGluZU5vXS50ZXh0Lmxlbmd0aCArIGxpbmVzW3ByZXZMaW5lTm9dLmZyb20uY2gsXG4gICAgfSk7XG5cbiAgICBsaW5lc1twcmV2TGluZU5vXS50ZXh0ICs9IGxpbmVzW2xpbmVOb10udGV4dDtcbiAgICBsaW5lcy5zcGxpY2UobGluZU5vLCAxKTtcblxuICAgIGxpc3QucmVwbGFjZUxpbmVzKGxpbmVzLm1hcCgobCkgPT4gbC50ZXh0KSk7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlV2l0aFByZXZpb3VzSXRlbShyb290OiBSb290LCBjdXJzb3I6IFBvc2l0aW9uLCBsaXN0OiBMaXN0KSB7XG4gICAgaWYgKHJvb3QuZ2V0Q2hpbGRyZW4oKVswXSA9PT0gbGlzdCAmJiBsaXN0LmdldENoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuXG4gICAgY29uc3QgcHJldiA9IHJvb3QuZ2V0TGlzdFVuZGVyTGluZShjdXJzb3IubGluZSAtIDEpO1xuXG4gICAgaWYgKCFwcmV2KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYm90aEFyZUVtcHR5ID0gcHJldi5pc0VtcHR5KCkgJiYgbGlzdC5pc0VtcHR5KCk7XG4gICAgY29uc3QgcHJldklzRW1wdHlBbmRTYW1lTGV2ZWwgPVxuICAgICAgcHJldi5pc0VtcHR5KCkgJiYgIWxpc3QuaXNFbXB0eSgpICYmIHByZXYuZ2V0TGV2ZWwoKSA9PSBsaXN0LmdldExldmVsKCk7XG4gICAgY29uc3QgbGlzdElzRW1wdHlBbmRQcmV2SXNQYXJlbnQgPVxuICAgICAgbGlzdC5pc0VtcHR5KCkgJiYgcHJldi5nZXRMZXZlbCgpID09IGxpc3QuZ2V0TGV2ZWwoKSAtIDE7XG5cbiAgICBpZiAoYm90aEFyZUVtcHR5IHx8IHByZXZJc0VtcHR5QW5kU2FtZUxldmVsIHx8IGxpc3RJc0VtcHR5QW5kUHJldklzUGFyZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCBwYXJlbnQgPSBsaXN0LmdldFBhcmVudCgpO1xuICAgICAgY29uc3QgcHJldkVuZCA9IHByZXYuZ2V0TGFzdExpbmVDb250ZW50RW5kKCk7XG5cbiAgICAgIGlmICghcHJldi5nZXROb3Rlc0luZGVudCgpICYmIGxpc3QuZ2V0Tm90ZXNJbmRlbnQoKSkge1xuICAgICAgICBwcmV2LnNldE5vdGVzSW5kZW50KFxuICAgICAgICAgIHByZXYuZ2V0Rmlyc3RMaW5lSW5kZW50KCkgK1xuICAgICAgICAgICAgbGlzdC5nZXROb3Rlc0luZGVudCgpLnNsaWNlKGxpc3QuZ2V0Rmlyc3RMaW5lSW5kZW50KCkubGVuZ3RoKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRMaW5lcyA9IHByZXYuZ2V0TGluZXMoKTtcbiAgICAgIGNvbnN0IG5ld0xpbmVzID0gbGlzdC5nZXRMaW5lcygpO1xuICAgICAgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gMV0gKz0gbmV3TGluZXNbMF07XG4gICAgICBjb25zdCByZXN1bHRMaW5lcyA9IG9sZExpbmVzLmNvbmNhdChuZXdMaW5lcy5zbGljZSgxKSk7XG5cbiAgICAgIHByZXYucmVwbGFjZUxpbmVzKHJlc3VsdExpbmVzKTtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChsaXN0KTtcblxuICAgICAgZm9yIChjb25zdCBjIG9mIGxpc3QuZ2V0Q2hpbGRyZW4oKSkge1xuICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGMpO1xuICAgICAgICBwcmV2LmFkZEFmdGVyQWxsKGMpO1xuICAgICAgfVxuXG4gICAgICByb290LnJlcGxhY2VDdXJzb3IocHJldkVuZCk7XG5cbiAgICAgIHJlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHMocm9vdCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91c0xpbmVPcGVyYXRpb24gfSBmcm9tIFwiLi9EZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91c0xpbmVPcGVyYXRpb25cIjtcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uL3Jvb3RcIjtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUFuZE1lcmdlV2l0aE5leHRMaW5lT3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBkZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91czogRGVsZXRlQW5kTWVyZ2VXaXRoUHJldmlvdXNMaW5lT3BlcmF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge1xuICAgIHRoaXMuZGVsZXRlQW5kTWVyZ2VXaXRoUHJldmlvdXMgPVxuICAgICAgbmV3IERlbGV0ZUFuZE1lcmdlV2l0aFByZXZpb3VzTGluZU9wZXJhdGlvbihyb290KTtcbiAgfVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91cy5zaG91bGRTdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91cy5zaG91bGRVcGRhdGUoKTtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZUN1cnNvcigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdCA9IHJvb3QuZ2V0TGlzdFVuZGVyQ3Vyc29yKCk7XG4gICAgY29uc3QgY3Vyc29yID0gcm9vdC5nZXRDdXJzb3IoKTtcbiAgICBjb25zdCBsaW5lcyA9IGxpc3QuZ2V0TGluZXNJbmZvKCk7XG5cbiAgICBjb25zdCBsaW5lTm8gPSBsaW5lcy5maW5kSW5kZXgoXG4gICAgICAobCkgPT4gY3Vyc29yLmNoID09PSBsLnRvLmNoICYmIGN1cnNvci5saW5lID09PSBsLnRvLmxpbmVcbiAgICApO1xuXG4gICAgaWYgKGxpbmVObyA9PT0gbGluZXMubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dExpbmUgPSBsaW5lc1tsaW5lTm9dLnRvLmxpbmUgKyAxO1xuICAgICAgY29uc3QgbmV4dExpc3QgPSByb290LmdldExpc3RVbmRlckxpbmUobmV4dExpbmUpO1xuICAgICAgaWYgKCFuZXh0TGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByb290LnJlcGxhY2VDdXJzb3IobmV4dExpc3QuZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0KCkpO1xuICAgICAgdGhpcy5kZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91cy5wZXJmb3JtKCk7XG4gICAgfSBlbHNlIGlmIChsaW5lTm8gPj0gMCkge1xuICAgICAgcm9vdC5yZXBsYWNlQ3Vyc29yKGxpbmVzW2xpbmVObyArIDFdLmZyb20pO1xuICAgICAgdGhpcy5kZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91cy5wZXJmb3JtKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi9PcGVyYXRpb25cIjtcblxuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVUaWxsTGluZVN0YXJ0T3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBzdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSB1cGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290OiBSb290KSB7fVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wUHJvcGFnYXRpb247XG4gIH1cblxuICBzaG91bGRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZDtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZUN1cnNvcigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJzb3IgPSByb290LmdldEN1cnNvcigpO1xuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IGxpbmVzID0gbGlzdC5nZXRMaW5lc0luZm8oKTtcbiAgICBjb25zdCBsaW5lTm8gPSBsaW5lcy5maW5kSW5kZXgoKGwpID0+IGwuZnJvbS5saW5lID09PSBjdXJzb3IubGluZSk7XG5cbiAgICBsaW5lc1tsaW5lTm9dLnRleHQgPSBsaW5lc1tsaW5lTm9dLnRleHQuc2xpY2UoXG4gICAgICBjdXJzb3IuY2ggLSBsaW5lc1tsaW5lTm9dLmZyb20uY2hcbiAgICApO1xuXG4gICAgbGlzdC5yZXBsYWNlTGluZXMobGluZXMubWFwKChsKSA9PiBsLnRleHQpKTtcbiAgICByb290LnJlcGxhY2VDdXJzb3IobGluZXNbbGluZU5vXS5mcm9tKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luXzIgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHsga2V5bWFwIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcblxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gXCIuL0ZlYXR1cmVcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IERlbGV0ZUFuZE1lcmdlV2l0aE5leHRMaW5lT3BlcmF0aW9uIH0gZnJvbSBcIi4uL29wZXJhdGlvbnMvRGVsZXRlQW5kTWVyZ2VXaXRoTmV4dExpbmVPcGVyYXRpb25cIjtcbmltcG9ydCB7IERlbGV0ZUFuZE1lcmdlV2l0aFByZXZpb3VzTGluZU9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL0RlbGV0ZUFuZE1lcmdlV2l0aFByZXZpb3VzTGluZU9wZXJhdGlvblwiO1xuaW1wb3J0IHsgRGVsZXRlVGlsbExpbmVTdGFydE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL0RlbGV0ZVRpbGxMaW5lU3RhcnRPcGVyYXRpb25cIjtcbmltcG9ydCB7IElNRVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSU1FU2VydmljZVwiO1xuaW1wb3J0IHsgT2JzaWRpYW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL09ic2lkaWFuU2VydmljZVwiO1xuaW1wb3J0IHsgUGVyZm9ybU9wZXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZVNob3VsZElnbm9yZUJ1bGxldHNGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luOiBQbHVnaW5fMixcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbWU6IElNRVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVyZm9ybU9wZXJhdGlvbjogUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFZGl0b3JFeHRlbnNpb24oXG4gICAgICBrZXltYXAub2YoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIkJhY2tzcGFjZVwiLFxuICAgICAgICAgIHJ1bjogdGhpcy5vYnNpZGlhbi5jcmVhdGVLZXltYXBSdW5DYWxsYmFjayh7XG4gICAgICAgICAgICBjaGVjazogdGhpcy5jaGVjayxcbiAgICAgICAgICAgIHJ1bjogdGhpcy5kZWxldGVBbmRNZXJnZVdpdGhQcmV2aW91c0xpbmUsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiRGVsZXRlXCIsXG4gICAgICAgICAgcnVuOiB0aGlzLm9ic2lkaWFuLmNyZWF0ZUtleW1hcFJ1bkNhbGxiYWNrKHtcbiAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgcnVuOiB0aGlzLmRlbGV0ZUFuZE1lcmdlV2l0aE5leHRMaW5lLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWFjOiBcIm0tQmFja3NwYWNlXCIsXG4gICAgICAgICAgcnVuOiB0aGlzLm9ic2lkaWFuLmNyZWF0ZUtleW1hcFJ1bkNhbGxiYWNrKHtcbiAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgcnVuOiB0aGlzLmRlbGV0ZVRpbGxMaW5lU3RhcnQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxuXG4gIHByaXZhdGUgY2hlY2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc3RpY2tDdXJzb3IgIT0gXCJuZXZlclwiICYmICF0aGlzLmltZS5pc0lNRU9wZW5lZCgpO1xuICB9O1xuXG4gIHByaXZhdGUgZGVsZXRlQW5kTWVyZ2VXaXRoUHJldmlvdXNMaW5lID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtT3BlcmF0aW9uLnBlcmZvcm1PcGVyYXRpb24oXG4gICAgICAocm9vdCkgPT4gbmV3IERlbGV0ZUFuZE1lcmdlV2l0aFByZXZpb3VzTGluZU9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSBkZWxldGVUaWxsTGluZVN0YXJ0ID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtT3BlcmF0aW9uLnBlcmZvcm1PcGVyYXRpb24oXG4gICAgICAocm9vdCkgPT4gbmV3IERlbGV0ZVRpbGxMaW5lU3RhcnRPcGVyYXRpb24ocm9vdCksXG4gICAgICBlZGl0b3JcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgZGVsZXRlQW5kTWVyZ2VXaXRoTmV4dExpbmUgPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1PcGVyYXRpb24ucGVyZm9ybU9wZXJhdGlvbihcbiAgICAgIChyb290KSA9PiBuZXcgRGVsZXRlQW5kTWVyZ2VXaXRoTmV4dExpbmVPcGVyYXRpb24ocm9vdCksXG4gICAgICBlZGl0b3JcbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XG5cbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vcm9vdFwiO1xuXG5leHBvcnQgY2xhc3MgRW5zdXJlQ3Vyc29ySW5MaXN0Q29udGVudE9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge31cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWQ7XG4gIH1cblxuICBwZXJmb3JtKCkge1xuICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcblxuICAgIGlmICghcm9vdC5oYXNTaW5nbGVDdXJzb3IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN1cnNvciA9IHJvb3QuZ2V0Q3Vyc29yKCk7XG4gICAgY29uc3QgbGlzdCA9IHJvb3QuZ2V0TGlzdFVuZGVyQ3Vyc29yKCk7XG4gICAgY29uc3QgY29udGVudFN0YXJ0ID0gbGlzdC5nZXRGaXJzdExpbmVDb250ZW50U3RhcnRBZnRlckNoZWNrYm94KCk7XG4gICAgY29uc3QgbGluZVByZWZpeCA9XG4gICAgICBjb250ZW50U3RhcnQubGluZSA9PT0gY3Vyc29yLmxpbmVcbiAgICAgICAgPyBjb250ZW50U3RhcnQuY2hcbiAgICAgICAgOiBsaXN0LmdldE5vdGVzSW5kZW50KCkubGVuZ3RoO1xuXG4gICAgaWYgKGN1cnNvci5jaCA8IGxpbmVQcmVmaXgpIHtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICByb290LnJlcGxhY2VDdXJzb3Ioe1xuICAgICAgICBsaW5lOiBjdXJzb3IubGluZSxcbiAgICAgICAgY2g6IGxpbmVQcmVmaXgsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uL3Jvb3RcIjtcblxuZXhwb3J0IGNsYXNzIEVuc3VyZUN1cnNvcklzSW5VbmZvbGRlZExpbmVPcGVyYXRpb24gaW1wbGVtZW50cyBPcGVyYXRpb24ge1xuICBwcml2YXRlIHN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHVwZGF0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3Q6IFJvb3QpIHt9XG5cbiAgc2hvdWxkU3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3BQcm9wYWdhdGlvbjtcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVkO1xuICB9XG5cbiAgcGVyZm9ybSgpIHtcbiAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXM7XG5cbiAgICBpZiAoIXJvb3QuaGFzU2luZ2xlQ3Vyc29yKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJzb3IgPSByb290LmdldEN1cnNvcigpO1xuXG4gICAgY29uc3QgbGlzdCA9IHJvb3QuZ2V0TGlzdFVuZGVyQ3Vyc29yKCk7XG4gICAgaWYgKCFsaXN0LmlzRm9sZGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb2xkUm9vdCA9IGxpc3QuZ2V0VG9wRm9sZFJvb3QoKTtcbiAgICBjb25zdCBmaXJzdExpbmVFbmQgPSBmb2xkUm9vdC5nZXRMaW5lc0luZm8oKVswXS50bztcblxuICAgIGlmIChjdXJzb3IubGluZSA+IGZpcnN0TGluZUVuZC5saW5lKSB7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgcm9vdC5yZXBsYWNlQ3Vyc29yKGZpcnN0TGluZUVuZCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSwgVHJhbnNhY3Rpb24gfSBmcm9tIFwiQGNvZGVtaXJyb3Ivc3RhdGVcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvRmVhdHVyZVwiO1xuaW1wb3J0IHsgRW5zdXJlQ3Vyc29ySW5MaXN0Q29udGVudE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL0Vuc3VyZUN1cnNvckluTGlzdENvbnRlbnRPcGVyYXRpb25cIjtcbmltcG9ydCB7IEVuc3VyZUN1cnNvcklzSW5VbmZvbGRlZExpbmVPcGVyYXRpb24gfSBmcm9tIFwiLi4vb3BlcmF0aW9ucy9FbnN1cmVDdXJzb3JJc0luVW5mb2xkZWRMaW5lT3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgRW5zdXJlQ3Vyc29ySW5MaXN0Q29udGVudEZlYXR1cmUgaW1wbGVtZW50cyBGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG9ic2lkaWFuOiBPYnNpZGlhblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwZXJmb3JtT3BlcmF0aW9uOiBQZXJmb3JtT3BlcmF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckVkaXRvckV4dGVuc2lvbihcbiAgICAgIEVkaXRvclN0YXRlLnRyYW5zYWN0aW9uRXh0ZW5kZXIub2YodGhpcy50cmFuc2FjdGlvbkV4dGVuZGVyKVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxuXG4gIHByaXZhdGUgdHJhbnNhY3Rpb25FeHRlbmRlciA9ICh0cjogVHJhbnNhY3Rpb24pOiBudWxsID0+IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGlja0N1cnNvciA9PSBcIm5ldmVyXCIgfHwgIXRyLnNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5vYnNpZGlhbi5nZXRFZGl0b3JGcm9tU3RhdGUodHIuc3RhcnRTdGF0ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ3Vyc29yQWN0aXZpdHkoZWRpdG9yKTtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlQ3Vyc29yQWN0aXZpdHkgPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+IG5ldyBFbnN1cmVDdXJzb3JJc0luVW5mb2xkZWRMaW5lT3BlcmF0aW9uKHJvb3QpLFxuICAgICAgZWRpdG9yXG4gICAgKTtcblxuICAgIHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+IG5ldyBFbnN1cmVDdXJzb3JJbkxpc3RDb250ZW50T3BlcmF0aW9uKHJvb3QpLFxuICAgICAgZWRpdG9yXG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uL3Jvb3RcIjtcbmltcG9ydCB7IHJlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHMgfSBmcm9tIFwiLi4vcm9vdC9yZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZlTGVmdE9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge31cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWQ7XG4gIH1cblxuICBwZXJmb3JtKCkge1xuICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcblxuICAgIGlmICghcm9vdC5oYXNTaW5nbGVDdXJzb3IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IHBhcmVudCA9IGxpc3QuZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgZ3JhbmRQYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAoIWdyYW5kUGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxpc3RTdGFydExpbmVCZWZvcmUgPSByb290LmdldENvbnRlbnRMaW5lc1JhbmdlT2YobGlzdClbMF07XG4gICAgY29uc3QgaW5kZW50Um1Gcm9tID0gcGFyZW50LmdldEZpcnN0TGluZUluZGVudCgpLmxlbmd0aDtcbiAgICBjb25zdCBpbmRlbnRSbVRpbGwgPSBsaXN0LmdldEZpcnN0TGluZUluZGVudCgpLmxlbmd0aDtcblxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChsaXN0KTtcbiAgICBncmFuZFBhcmVudC5hZGRBZnRlcihwYXJlbnQsIGxpc3QpO1xuICAgIGxpc3QudW5pbmRlbnRDb250ZW50KGluZGVudFJtRnJvbSwgaW5kZW50Um1UaWxsKTtcblxuICAgIGNvbnN0IGxpc3RTdGFydExpbmVBZnRlciA9IHJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZihsaXN0KVswXTtcbiAgICBjb25zdCBsaW5lRGlmZiA9IGxpc3RTdGFydExpbmVBZnRlciAtIGxpc3RTdGFydExpbmVCZWZvcmU7XG4gICAgY29uc3QgY2hEaWZmID0gaW5kZW50Um1UaWxsIC0gaW5kZW50Um1Gcm9tO1xuXG4gICAgY29uc3QgY3Vyc29yID0gcm9vdC5nZXRDdXJzb3IoKTtcbiAgICByb290LnJlcGxhY2VDdXJzb3Ioe1xuICAgICAgbGluZTogY3Vyc29yLmxpbmUgKyBsaW5lRGlmZixcbiAgICAgIGNoOiBjdXJzb3IuY2ggLSBjaERpZmYsXG4gICAgfSk7XG5cbiAgICByZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzKHJvb3QpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eUxpbmVPckVtcHR5Q2hlY2tib3gobGluZTogc3RyaW5nKSB7XG4gIHJldHVybiBsaW5lID09PSBcIlwiIHx8IGxpbmUgPT09IFwiWyBdIFwiO1xufVxuIiwiaW1wb3J0IHsgTW92ZUxlZnRPcGVyYXRpb24gfSBmcm9tIFwiLi9Nb3ZlTGVmdE9wZXJhdGlvblwiO1xuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XG5cbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vcm9vdFwiO1xuaW1wb3J0IHsgaXNFbXB0eUxpbmVPckVtcHR5Q2hlY2tib3ggfSBmcm9tIFwiLi4vdXRpbHMvaXNFbXB0eUxpbmVPckVtcHR5Q2hlY2tib3hcIjtcblxuZXhwb3J0IGNsYXNzIE91dGRlbnRJZkxpbmVJc0VtcHR5T3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBtb3ZlTGVmdE9wOiBNb3ZlTGVmdE9wZXJhdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3Q6IFJvb3QpIHtcbiAgICB0aGlzLm1vdmVMZWZ0T3AgPSBuZXcgTW92ZUxlZnRPcGVyYXRpb24ocm9vdCk7XG4gIH1cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW92ZUxlZnRPcC5zaG91bGRTdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3ZlTGVmdE9wLnNob3VsZFVwZGF0ZSgpO1xuICB9XG5cbiAgcGVyZm9ybSgpIHtcbiAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXM7XG5cbiAgICBpZiAoIXJvb3QuaGFzU2luZ2xlQ3Vyc29yKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gcm9vdC5nZXRMaXN0VW5kZXJDdXJzb3IoKTtcbiAgICBjb25zdCBsaW5lcyA9IGxpc3QuZ2V0TGluZXMoKTtcblxuICAgIGlmIChcbiAgICAgIGxpbmVzLmxlbmd0aCA+IDEgfHxcbiAgICAgICFpc0VtcHR5TGluZU9yRW1wdHlDaGVja2JveChsaW5lc1swXSkgfHxcbiAgICAgIGxpc3QuZ2V0TGV2ZWwoKSA9PT0gMVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW92ZUxlZnRPcC5wZXJmb3JtKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCB7IFByZWMgfSBmcm9tIFwiQGNvZGVtaXJyb3Ivc3RhdGVcIjtcbmltcG9ydCB7IGtleW1hcCB9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5cbmltcG9ydCB7IE15RWRpdG9yIH0gZnJvbSBcIi4uL015RWRpdG9yXCI7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL0ZlYXR1cmVcIjtcbmltcG9ydCB7IE91dGRlbnRJZkxpbmVJc0VtcHR5T3BlcmF0aW9uIH0gZnJvbSBcIi4uL29wZXJhdGlvbnMvT3V0ZGVudElmTGluZUlzRW1wdHlPcGVyYXRpb25cIjtcbmltcG9ydCB7IElNRVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSU1FU2VydmljZVwiO1xuaW1wb3J0IHsgT2JzaWRpYW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL09ic2lkaWFuU2VydmljZVwiO1xuaW1wb3J0IHsgUGVyZm9ybU9wZXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEVudGVyT3V0ZGVudElmTGluZUlzRW1wdHlGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luOiBQbHVnaW5fMixcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbWU6IElNRVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVyZm9ybU9wZXJhdGlvbjogUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFZGl0b3JFeHRlbnNpb24oXG4gICAgICBQcmVjLmhpZ2hlc3QoXG4gICAgICAgIGtleW1hcC5vZihbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIkVudGVyXCIsXG4gICAgICAgICAgICBydW46IHRoaXMub2JzaWRpYW4uY3JlYXRlS2V5bWFwUnVuQ2FsbGJhY2soe1xuICAgICAgICAgICAgICBjaGVjazogdGhpcy5jaGVjayxcbiAgICAgICAgICAgICAgcnVuOiB0aGlzLnJ1bixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG5cbiAgcHJpdmF0ZSBjaGVjayA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5iZXR0ZXJFbnRlciAmJiAhdGhpcy5pbWUuaXNJTUVPcGVuZWQoKTtcbiAgfTtcblxuICBwcml2YXRlIHJ1biA9IChlZGl0b3I6IE15RWRpdG9yKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+IG5ldyBPdXRkZW50SWZMaW5lSXNFbXB0eU9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY21wUG9zKGE6IFBvc2l0aW9uLCBiOiBQb3NpdGlvbikge1xuICByZXR1cm4gYS5saW5lIC0gYi5saW5lIHx8IGEuY2ggLSBiLmNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4UG9zKGE6IFBvc2l0aW9uLCBiOiBQb3NpdGlvbikge1xuICByZXR1cm4gY21wUG9zKGEsIGIpIDwgMCA/IGIgOiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluUG9zKGE6IFBvc2l0aW9uLCBiOiBQb3NpdGlvbikge1xuICByZXR1cm4gY21wUG9zKGEsIGIpIDwgMCA/IGEgOiBiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgY2g6IG51bWJlcjtcbiAgbGluZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RMaW5lIHtcbiAgdGV4dDogc3RyaW5nO1xuICBmcm9tOiBQb3NpdGlvbjtcbiAgdG86IFBvc2l0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlIHtcbiAgYW5jaG9yOiBQb3NpdGlvbjtcbiAgaGVhZDogUG9zaXRpb247XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgcHJpdmF0ZSBwYXJlbnQ6IExpc3QgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjaGlsZHJlbjogTGlzdFtdID0gW107XG4gIHByaXZhdGUgbm90ZXNJbmRlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm9vdDogUm9vdCxcbiAgICBwcml2YXRlIGluZGVudDogc3RyaW5nLFxuICAgIHByaXZhdGUgYnVsbGV0OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBvcHRpb25hbENoZWNrYm94OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBzcGFjZUFmdGVyQnVsbGV0OiBzdHJpbmcsXG4gICAgZmlyc3RMaW5lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBmb2xkUm9vdDogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmxpbmVzLnB1c2goZmlyc3RMaW5lKTtcbiAgfVxuXG4gIGdldE5vdGVzSW5kZW50KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5vdGVzSW5kZW50O1xuICB9XG5cbiAgc2V0Tm90ZXNJbmRlbnQobm90ZXNJbmRlbnQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm5vdGVzSW5kZW50ICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdGVzIGluZGVudCBhbHJlYWR5IHByb3ZpZGVkYCk7XG4gICAgfVxuICAgIHRoaXMubm90ZXNJbmRlbnQgPSBub3Rlc0luZGVudDtcbiAgfVxuXG4gIGFkZExpbmUodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubm90ZXNJbmRlbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuYWJsZSB0byBhZGQgbGluZSwgbm90ZXMgaW5kZW50IHNob3VsZCBiZSBwcm92aWRlZCBmaXJzdGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5saW5lcy5wdXNoKHRleHQpO1xuICB9XG5cbiAgcmVwbGFjZUxpbmVzKGxpbmVzOiBzdHJpbmdbXSkge1xuICAgIGlmIChsaW5lcy5sZW5ndGggPiAxICYmIHRoaXMubm90ZXNJbmRlbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuYWJsZSB0byBhZGQgbGluZSwgbm90ZXMgaW5kZW50IHNob3VsZCBiZSBwcm92aWRlZCBmaXJzdGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgZ2V0TGluZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmxpbmVzLmxlbmd0aDtcbiAgfVxuXG4gIGdldFJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmNvbmNhdCgpO1xuICB9XG5cbiAgZ2V0TGluZXNJbmZvKCk6IExpc3RMaW5lW10ge1xuICAgIGNvbnN0IHN0YXJ0TGluZSA9IHRoaXMucm9vdC5nZXRDb250ZW50TGluZXNSYW5nZU9mKHRoaXMpWzBdO1xuXG4gICAgcmV0dXJuIHRoaXMubGluZXMubWFwKChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBzdGFydExpbmUgKyBpO1xuICAgICAgY29uc3Qgc3RhcnRDaCA9XG4gICAgICAgIGkgPT09IDAgPyB0aGlzLmdldENvbnRlbnRTdGFydENoKCkgOiB0aGlzLm5vdGVzSW5kZW50Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGVuZENoID0gc3RhcnRDaCArIHJvdy5sZW5ndGg7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHJvdyxcbiAgICAgICAgZnJvbTogeyBsaW5lLCBjaDogc3RhcnRDaCB9LFxuICAgICAgICB0bzogeyBsaW5lLCBjaDogZW5kQ2ggfSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMubGluZXMuY29uY2F0KCk7XG4gIH1cblxuICBnZXRGaXJzdExpbmVDb250ZW50U3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRMaW5lID0gdGhpcy5yb290LmdldENvbnRlbnRMaW5lc1JhbmdlT2YodGhpcylbMF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogc3RhcnRMaW5lLFxuICAgICAgY2g6IHRoaXMuZ2V0Q29udGVudFN0YXJ0Q2goKSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0QWZ0ZXJDaGVja2JveCgpIHtcbiAgICBjb25zdCBzdGFydExpbmUgPSB0aGlzLnJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZih0aGlzKVswXTtcblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBzdGFydExpbmUsXG4gICAgICBjaDogdGhpcy5nZXRDb250ZW50U3RhcnRDaCgpICsgdGhpcy5vcHRpb25hbENoZWNrYm94Lmxlbmd0aCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TGFzdExpbmVDb250ZW50RW5kKCkge1xuICAgIGNvbnN0IGVuZExpbmUgPSB0aGlzLnJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZih0aGlzKVsxXTtcbiAgICBjb25zdCBlbmRDaCA9XG4gICAgICB0aGlzLmxpbmVzLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IHRoaXMuZ2V0Q29udGVudFN0YXJ0Q2goKSArIHRoaXMubGluZXNbMF0ubGVuZ3RoXG4gICAgICAgIDogdGhpcy5ub3Rlc0luZGVudC5sZW5ndGggKyB0aGlzLmxpbmVzW3RoaXMubGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IGVuZExpbmUsXG4gICAgICBjaDogZW5kQ2gsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGVudFN0YXJ0Q2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZW50Lmxlbmd0aCArIHRoaXMuYnVsbGV0Lmxlbmd0aCArIDE7XG4gIH1cblxuICBpc0ZvbGRlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb2xkUm9vdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuaXNGb2xkZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0ZvbGRSb290KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGRSb290O1xuICB9XG5cbiAgZ2V0VG9wRm9sZFJvb3QoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgbGV0IHRtcDogTGlzdCA9IHRoaXM7XG4gICAgbGV0IGZvbGRSb290OiBMaXN0IHwgbnVsbCA9IG51bGw7XG4gICAgd2hpbGUgKHRtcCkge1xuICAgICAgaWYgKHRtcC5pc0ZvbGRSb290KCkpIHtcbiAgICAgICAgZm9sZFJvb3QgPSB0bXA7XG4gICAgICB9XG4gICAgICB0bXAgPSB0bXAucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZm9sZFJvb3Q7XG4gIH1cblxuICBnZXRMZXZlbCgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRMZXZlbCgpICsgMTtcbiAgfVxuXG4gIHVuaW5kZW50Q29udGVudChmcm9tOiBudW1iZXIsIHRpbGw6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZW50ID0gdGhpcy5pbmRlbnQuc2xpY2UoMCwgZnJvbSkgKyB0aGlzLmluZGVudC5zbGljZSh0aWxsKTtcbiAgICBpZiAodGhpcy5ub3Rlc0luZGVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub3Rlc0luZGVudCA9XG4gICAgICAgIHRoaXMubm90ZXNJbmRlbnQuc2xpY2UoMCwgZnJvbSkgKyB0aGlzLm5vdGVzSW5kZW50LnNsaWNlKHRpbGwpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgY2hpbGQudW5pbmRlbnRDb250ZW50KGZyb20sIHRpbGwpO1xuICAgIH1cbiAgfVxuXG4gIGluZGVudENvbnRlbnQoaW5kZW50UG9zOiBudW1iZXIsIGluZGVudENoYXJzOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluZGVudCA9XG4gICAgICB0aGlzLmluZGVudC5zbGljZSgwLCBpbmRlbnRQb3MpICtcbiAgICAgIGluZGVudENoYXJzICtcbiAgICAgIHRoaXMuaW5kZW50LnNsaWNlKGluZGVudFBvcyk7XG4gICAgaWYgKHRoaXMubm90ZXNJbmRlbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubm90ZXNJbmRlbnQgPVxuICAgICAgICB0aGlzLm5vdGVzSW5kZW50LnNsaWNlKDAsIGluZGVudFBvcykgK1xuICAgICAgICBpbmRlbnRDaGFycyArXG4gICAgICAgIHRoaXMubm90ZXNJbmRlbnQuc2xpY2UoaW5kZW50UG9zKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLmluZGVudENvbnRlbnQoaW5kZW50UG9zLCBpbmRlbnRDaGFycyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rmlyc3RMaW5lSW5kZW50KCkge1xuICAgIHJldHVybiB0aGlzLmluZGVudDtcbiAgfVxuXG4gIGdldEJ1bGxldCgpIHtcbiAgICByZXR1cm4gdGhpcy5idWxsZXQ7XG4gIH1cblxuICBnZXRTcGFjZUFmdGVyQnVsbGV0KCkge1xuICAgIHJldHVybiB0aGlzLnNwYWNlQWZ0ZXJCdWxsZXQ7XG4gIH1cblxuICBnZXRDaGVja2JveExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbENoZWNrYm94Lmxlbmd0aDtcbiAgfVxuXG4gIHJlcGxhdGVCdWxsZXQoYnVsbGV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmJ1bGxldCA9IGJ1bGxldDtcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBhZGRCZWZvcmVBbGwobGlzdDogTGlzdCkge1xuICAgIHRoaXMuY2hpbGRyZW4udW5zaGlmdChsaXN0KTtcbiAgICBsaXN0LnBhcmVudCA9IHRoaXM7XG4gIH1cblxuICBhZGRBZnRlckFsbChsaXN0OiBMaXN0KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGxpc3QpO1xuICAgIGxpc3QucGFyZW50ID0gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGxpc3Q6IExpc3QpIHtcbiAgICBjb25zdCBpID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGxpc3QpO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgIGxpc3QucGFyZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFkZEJlZm9yZShiZWZvcmU6IExpc3QsIGxpc3Q6IExpc3QpIHtcbiAgICBjb25zdCBpID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSk7XG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMCwgbGlzdCk7XG4gICAgbGlzdC5wYXJlbnQgPSB0aGlzO1xuICB9XG5cbiAgYWRkQWZ0ZXIoYmVmb3JlOiBMaXN0LCBsaXN0OiBMaXN0KSB7XG4gICAgY29uc3QgaSA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGkgKyAxLCAwLCBsaXN0KTtcbiAgICBsaXN0LnBhcmVudCA9IHRoaXM7XG4gIH1cblxuICBnZXRQcmV2U2libGluZ09mKGxpc3Q6IExpc3QpIHtcbiAgICBjb25zdCBpID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGxpc3QpO1xuICAgIHJldHVybiBpID4gMCA/IHRoaXMuY2hpbGRyZW5baSAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nT2YobGlzdDogTGlzdCkge1xuICAgIGNvbnN0IGkgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YobGlzdCk7XG4gICAgcmV0dXJuIGkgPj0gMCAmJiBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGggPyB0aGlzLmNoaWxkcmVuW2kgKyAxXSA6IG51bGw7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHByaW50KCkge1xuICAgIGxldCByZXMgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMgKz1cbiAgICAgICAgaSA9PT0gMFxuICAgICAgICAgID8gdGhpcy5pbmRlbnQgKyB0aGlzLmJ1bGxldCArIHRoaXMuc3BhY2VBZnRlckJ1bGxldFxuICAgICAgICAgIDogdGhpcy5ub3Rlc0luZGVudDtcbiAgICAgIHJlcyArPSB0aGlzLmxpbmVzW2ldO1xuICAgICAgcmVzICs9IFwiXFxuXCI7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICByZXMgKz0gY2hpbGQucHJpbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb290IHtcbiAgcHJpdmF0ZSByb290TGlzdCA9IG5ldyBMaXN0KHRoaXMsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIGZhbHNlKTtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25zOiBSYW5nZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdGFydDogUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBlbmQ6IFBvc2l0aW9uLFxuICAgIHNlbGVjdGlvbnM6IFJhbmdlW11cbiAgKSB7XG4gICAgdGhpcy5yZXBsYWNlU2VsZWN0aW9ucyhzZWxlY3Rpb25zKTtcbiAgfVxuXG4gIGdldFJvb3RMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnJvb3RMaXN0O1xuICB9XG5cbiAgZ2V0UmFuZ2UoKTogW1Bvc2l0aW9uLCBQb3NpdGlvbl0ge1xuICAgIHJldHVybiBbeyAuLi50aGlzLnN0YXJ0IH0sIHsgLi4udGhpcy5lbmQgfV07XG4gIH1cblxuICBnZXRTZWxlY3Rpb25zKCk6IFJhbmdlW10ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbnMubWFwKChzKSA9PiAoe1xuICAgICAgYW5jaG9yOiB7IC4uLnMuYW5jaG9yIH0sXG4gICAgICBoZWFkOiB7IC4uLnMuaGVhZCB9LFxuICAgIH0pKTtcbiAgfVxuXG4gIGhhc1NpbmdsZUN1cnNvcigpIHtcbiAgICBpZiAoIXRoaXMuaGFzU2luZ2xlU2VsZWN0aW9uKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbnNbMF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgc2VsZWN0aW9uLmFuY2hvci5saW5lID09PSBzZWxlY3Rpb24uaGVhZC5saW5lICYmXG4gICAgICBzZWxlY3Rpb24uYW5jaG9yLmNoID09PSBzZWxlY3Rpb24uaGVhZC5jaFxuICAgICk7XG4gIH1cblxuICBoYXNTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9ucy5sZW5ndGggPT09IDE7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25zW3RoaXMuc2VsZWN0aW9ucy5sZW5ndGggLSAxXTtcblxuICAgIGNvbnN0IGZyb20gPVxuICAgICAgc2VsZWN0aW9uLmFuY2hvci5jaCA+IHNlbGVjdGlvbi5oZWFkLmNoXG4gICAgICAgID8gc2VsZWN0aW9uLmhlYWQuY2hcbiAgICAgICAgOiBzZWxlY3Rpb24uYW5jaG9yLmNoO1xuICAgIGNvbnN0IHRvID1cbiAgICAgIHNlbGVjdGlvbi5hbmNob3IuY2ggPiBzZWxlY3Rpb24uaGVhZC5jaFxuICAgICAgICA/IHNlbGVjdGlvbi5hbmNob3IuY2hcbiAgICAgICAgOiBzZWxlY3Rpb24uaGVhZC5jaDtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zZWxlY3Rpb24sXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgfTtcbiAgfVxuXG4gIGdldEN1cnNvcigpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnNlbGVjdGlvbnNbdGhpcy5zZWxlY3Rpb25zLmxlbmd0aCAtIDFdLmhlYWQgfTtcbiAgfVxuXG4gIHJlcGxhY2VDdXJzb3IoY3Vyc29yOiBQb3NpdGlvbikge1xuICAgIHRoaXMuc2VsZWN0aW9ucyA9IFt7IGFuY2hvcjogY3Vyc29yLCBoZWFkOiBjdXJzb3IgfV07XG4gIH1cblxuICByZXBsYWNlU2VsZWN0aW9ucyhzZWxlY3Rpb25zOiBSYW5nZVtdKSB7XG4gICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIFJvb3Qgd2l0aG91dCBzZWxlY3Rpb25zYCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9ucyA9IHNlbGVjdGlvbnM7XG4gIH1cblxuICBnZXRMaXN0VW5kZXJDdXJzb3IoKTogTGlzdCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdFVuZGVyTGluZSh0aGlzLmdldEN1cnNvcigpLmxpbmUpO1xuICB9XG5cbiAgZ2V0TGlzdFVuZGVyTGluZShsaW5lOiBudW1iZXIpIHtcbiAgICBpZiAobGluZSA8IHRoaXMuc3RhcnQubGluZSB8fCBsaW5lID4gdGhpcy5lbmQubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IExpc3QgPSBudWxsO1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5zdGFydC5saW5lO1xuXG4gICAgY29uc3QgdmlzaXRBcnIgPSAobGw6IExpc3RbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBsIG9mIGxsKSB7XG4gICAgICAgIGNvbnN0IGxpc3RGcm9tTGluZSA9IGluZGV4O1xuICAgICAgICBjb25zdCBsaXN0VGlsbExpbmUgPSBsaXN0RnJvbUxpbmUgKyBsLmdldExpbmVDb3VudCgpIC0gMTtcblxuICAgICAgICBpZiAobGluZSA+PSBsaXN0RnJvbUxpbmUgJiYgbGluZSA8PSBsaXN0VGlsbExpbmUpIHtcbiAgICAgICAgICByZXN1bHQgPSBsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZGV4ID0gbGlzdFRpbGxMaW5lICsgMTtcbiAgICAgICAgICB2aXNpdEFycihsLmdldENoaWxkcmVuKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmlzaXRBcnIodGhpcy5yb290TGlzdC5nZXRDaGlsZHJlbigpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRDb250ZW50TGluZXNSYW5nZU9mKGxpc3Q6IExpc3QpOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCB7XG4gICAgbGV0IHJlc3VsdDogW251bWJlciwgbnVtYmVyXSB8IG51bGwgPSBudWxsO1xuICAgIGxldCBsaW5lOiBudW1iZXIgPSB0aGlzLnN0YXJ0LmxpbmU7XG5cbiAgICBjb25zdCB2aXNpdEFyciA9IChsbDogTGlzdFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGwgb2YgbGwpIHtcbiAgICAgICAgY29uc3QgbGlzdEZyb21MaW5lID0gbGluZTtcbiAgICAgICAgY29uc3QgbGlzdFRpbGxMaW5lID0gbGlzdEZyb21MaW5lICsgbC5nZXRMaW5lQ291bnQoKSAtIDE7XG5cbiAgICAgICAgaWYgKGwgPT09IGxpc3QpIHtcbiAgICAgICAgICByZXN1bHQgPSBbbGlzdEZyb21MaW5lLCBsaXN0VGlsbExpbmVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmUgPSBsaXN0VGlsbExpbmUgKyAxO1xuICAgICAgICAgIHZpc2l0QXJyKGwuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZpc2l0QXJyKHRoaXMucm9vdExpc3QuZ2V0Q2hpbGRyZW4oKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdExpc3QuZ2V0Q2hpbGRyZW4oKTtcbiAgfVxuXG4gIHByaW50KCkge1xuICAgIGxldCByZXMgPSBcIlwiO1xuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLnJvb3RMaXN0LmdldENoaWxkcmVuKCkpIHtcbiAgICAgIHJlcyArPSBjaGlsZC5wcmludCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXMucmVwbGFjZSgvXFxuJC8sIFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2hlY2tib3hSZSA9IGBcXFxcW1teXFxcXFtcXFxcXV1cXFxcXVsgXFx0XWA7XG4iLCJpbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi9PcGVyYXRpb25cIjtcblxuaW1wb3J0IHsgTGlzdCwgUG9zaXRpb24sIFJvb3QgfSBmcm9tIFwiLi4vcm9vdFwiO1xuaW1wb3J0IHsgcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0cyB9IGZyb20gXCIuLi9yb290L3JlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHNcIjtcbmltcG9ydCB7IGNoZWNrYm94UmUgfSBmcm9tIFwiLi4vdXRpbHMvY2hlY2tib3hSZVwiO1xuaW1wb3J0IHsgaXNFbXB0eUxpbmVPckVtcHR5Q2hlY2tib3ggfSBmcm9tIFwiLi4vdXRpbHMvaXNFbXB0eUxpbmVPckVtcHR5Q2hlY2tib3hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHZXRab29tUmFuZ2Uge1xuICBnZXRab29tUmFuZ2UoKTogeyBmcm9tOiBQb3NpdGlvbjsgdG86IFBvc2l0aW9uIH0gfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTmV3SXRlbU9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm9vdDogUm9vdCxcbiAgICBwcml2YXRlIGRlZmF1bHRJbmRlbnRDaGFyczogc3RyaW5nLFxuICAgIHByaXZhdGUgZ2V0Wm9vbVJhbmdlOiBHZXRab29tUmFuZ2VcbiAgKSB7fVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wUHJvcGFnYXRpb247XG4gIH1cblxuICBzaG91bGRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZDtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZVNlbGVjdGlvbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoIXNlbGVjdGlvbiB8fCBzZWxlY3Rpb24uYW5jaG9yLmxpbmUgIT09IHNlbGVjdGlvbi5oZWFkLmxpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gcm9vdC5nZXRMaXN0VW5kZXJDdXJzb3IoKTtcbiAgICBjb25zdCBsaW5lcyA9IGxpc3QuZ2V0TGluZXNJbmZvKCk7XG5cbiAgICBpZiAobGluZXMubGVuZ3RoID09PSAxICYmIGlzRW1wdHlMaW5lT3JFbXB0eUNoZWNrYm94KGxpbmVzWzBdLnRleHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3Vyc29yID0gcm9vdC5nZXRDdXJzb3IoKTtcbiAgICBjb25zdCBsaW5lVW5kZXJDdXJzb3IgPSBsaW5lcy5maW5kKChsKSA9PiBsLmZyb20ubGluZSA9PT0gY3Vyc29yLmxpbmUpO1xuXG4gICAgaWYgKGN1cnNvci5jaCA8IGxpbmVVbmRlckN1cnNvci5mcm9tLmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbGRMaW5lcywgbmV3TGluZXMgfSA9IGxpbmVzLnJlZHVjZShcbiAgICAgIChhY2MsIGxpbmUpID0+IHtcbiAgICAgICAgaWYgKGN1cnNvci5saW5lID4gbGluZS5mcm9tLmxpbmUpIHtcbiAgICAgICAgICBhY2Mub2xkTGluZXMucHVzaChsaW5lLnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnNvci5saW5lID09PSBsaW5lLmZyb20ubGluZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnQgPSBsaW5lLnRleHQuc2xpY2UoMCwgc2VsZWN0aW9uLmZyb20gLSBsaW5lLmZyb20uY2gpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbGluZS50ZXh0LnNsaWNlKHNlbGVjdGlvbi50byAtIGxpbmUuZnJvbS5jaCk7XG4gICAgICAgICAgYWNjLm9sZExpbmVzLnB1c2gobGVmdCk7XG4gICAgICAgICAgYWNjLm5ld0xpbmVzLnB1c2gocmlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnNvci5saW5lIDwgbGluZS5mcm9tLmxpbmUpIHtcbiAgICAgICAgICBhY2MubmV3TGluZXMucHVzaChsaW5lLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG9sZExpbmVzOiBbXSxcbiAgICAgICAgbmV3TGluZXM6IFtdLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBjb2RlQmxvY2tCYWN0aWNrcyA9IG9sZExpbmVzLmpvaW4oXCJcXG5cIikuc3BsaXQoXCJgYGBcIikubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBpc0luc2lkZUNvZGVibG9jayA9XG4gICAgICBjb2RlQmxvY2tCYWN0aWNrcyA+IDAgJiYgY29kZUJsb2NrQmFjdGlja3MgJSAyICE9PSAwO1xuXG4gICAgaWYgKGlzSW5zaWRlQ29kZWJsb2NrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB6b29tUmFuZ2UgPSB0aGlzLmdldFpvb21SYW5nZS5nZXRab29tUmFuZ2UoKTtcbiAgICBjb25zdCBsaXN0SXNab29taW5nUm9vdCA9IEJvb2xlYW4oXG4gICAgICB6b29tUmFuZ2UgJiZcbiAgICAgICAgbGlzdC5nZXRGaXJzdExpbmVDb250ZW50U3RhcnQoKS5saW5lID49IHpvb21SYW5nZS5mcm9tLmxpbmUgJiZcbiAgICAgICAgbGlzdC5nZXRMYXN0TGluZUNvbnRlbnRFbmQoKS5saW5lIDw9IHpvb21SYW5nZS5mcm9tLmxpbmVcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQ2hpbGRyZW4gPSAhbGlzdC5pc0VtcHR5KCk7XG4gICAgY29uc3QgY2hpbGRJc0ZvbGRlZCA9IGxpc3QuaXNGb2xkUm9vdCgpO1xuICAgIGNvbnN0IGVuZFBvcyA9IGxpc3QuZ2V0TGFzdExpbmVDb250ZW50RW5kKCk7XG4gICAgY29uc3QgZW5kT2ZMaW5lID0gY3Vyc29yLmxpbmUgPT09IGVuZFBvcy5saW5lICYmIGN1cnNvci5jaCA9PT0gZW5kUG9zLmNoO1xuXG4gICAgY29uc3Qgb25DaGlsZExldmVsID1cbiAgICAgIGxpc3RJc1pvb21pbmdSb290IHx8IChoYXNDaGlsZHJlbiAmJiAhY2hpbGRJc0ZvbGRlZCAmJiBlbmRPZkxpbmUpO1xuXG4gICAgY29uc3QgaW5kZW50ID0gb25DaGlsZExldmVsXG4gICAgICA/IGhhc0NoaWxkcmVuXG4gICAgICAgID8gbGlzdC5nZXRDaGlsZHJlbigpWzBdLmdldEZpcnN0TGluZUluZGVudCgpXG4gICAgICAgIDogbGlzdC5nZXRGaXJzdExpbmVJbmRlbnQoKSArIHRoaXMuZGVmYXVsdEluZGVudENoYXJzXG4gICAgICA6IGxpc3QuZ2V0Rmlyc3RMaW5lSW5kZW50KCk7XG5cbiAgICBjb25zdCBidWxsZXQgPVxuICAgICAgb25DaGlsZExldmVsICYmIGhhc0NoaWxkcmVuXG4gICAgICAgID8gbGlzdC5nZXRDaGlsZHJlbigpWzBdLmdldEJ1bGxldCgpXG4gICAgICAgIDogbGlzdC5nZXRCdWxsZXQoKTtcblxuICAgIGNvbnN0IHNwYWNlQWZ0ZXJCdWxsZXQgPVxuICAgICAgb25DaGlsZExldmVsICYmIGhhc0NoaWxkcmVuXG4gICAgICAgID8gbGlzdC5nZXRDaGlsZHJlbigpWzBdLmdldFNwYWNlQWZ0ZXJCdWxsZXQoKVxuICAgICAgICA6IGxpc3QuZ2V0U3BhY2VBZnRlckJ1bGxldCgpO1xuXG4gICAgY29uc3QgcHJlZml4ID0gb2xkTGluZXNbMF0ubWF0Y2goY2hlY2tib3hSZSkgPyBcIlsgXSBcIiA6IFwiXCI7XG5cbiAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoXG4gICAgICBsaXN0LmdldFJvb3QoKSxcbiAgICAgIGluZGVudCxcbiAgICAgIGJ1bGxldCxcbiAgICAgIHByZWZpeCxcbiAgICAgIHNwYWNlQWZ0ZXJCdWxsZXQsXG4gICAgICBwcmVmaXggKyBuZXdMaW5lcy5zaGlmdCgpLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgaWYgKG5ld0xpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5ld0xpc3Quc2V0Tm90ZXNJbmRlbnQobGlzdC5nZXROb3Rlc0luZGVudCgpKTtcbiAgICAgIGZvciAoY29uc3QgbGluZSBvZiBuZXdMaW5lcykge1xuICAgICAgICBuZXdMaXN0LmFkZExpbmUobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uQ2hpbGRMZXZlbCkge1xuICAgICAgbGlzdC5hZGRCZWZvcmVBbGwobmV3TGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2hpbGRJc0ZvbGRlZCB8fCAhZW5kT2ZMaW5lKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbGlzdC5nZXRDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgbmV3TGlzdC5hZGRBZnRlckFsbChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5nZXRQYXJlbnQoKS5hZGRBZnRlcihsaXN0LCBuZXdMaXN0KTtcbiAgICB9XG5cbiAgICBsaXN0LnJlcGxhY2VMaW5lcyhvbGRMaW5lcyk7XG5cbiAgICBjb25zdCBuZXdMaXN0U3RhcnQgPSBuZXdMaXN0LmdldEZpcnN0TGluZUNvbnRlbnRTdGFydCgpO1xuICAgIHJvb3QucmVwbGFjZUN1cnNvcih7XG4gICAgICBsaW5lOiBuZXdMaXN0U3RhcnQubGluZSxcbiAgICAgIGNoOiBuZXdMaXN0U3RhcnQuY2ggKyBwcmVmaXgubGVuZ3RoLFxuICAgIH0pO1xuXG4gICAgcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0cyhyb290KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luXzIgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHsgUHJlYyB9IGZyb20gXCJAY29kZW1pcnJvci9zdGF0ZVwiO1xuaW1wb3J0IHsga2V5bWFwIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvRmVhdHVyZVwiO1xuaW1wb3J0IHsgQ3JlYXRlTmV3SXRlbU9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL0NyZWF0ZU5ld0l0ZW1PcGVyYXRpb25cIjtcbmltcG9ydCB7IElNRVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvSU1FU2VydmljZVwiO1xuaW1wb3J0IHsgT2JzaWRpYW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL09ic2lkaWFuU2VydmljZVwiO1xuaW1wb3J0IHsgUGVyZm9ybU9wZXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEVudGVyU2hvdWxkQ3JlYXRlTmV3SXRlbUZlYXR1cmUgaW1wbGVtZW50cyBGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGltZTogSU1FU2VydmljZSxcbiAgICBwcml2YXRlIG9ic2lkaWFuOiBPYnNpZGlhblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwZXJmb3JtT3BlcmF0aW9uOiBQZXJmb3JtT3BlcmF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckVkaXRvckV4dGVuc2lvbihcbiAgICAgIFByZWMuaGlnaGVzdChcbiAgICAgICAga2V5bWFwLm9mKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiRW50ZXJcIixcbiAgICAgICAgICAgIHJ1bjogdGhpcy5vYnNpZGlhbi5jcmVhdGVLZXltYXBSdW5DYWxsYmFjayh7XG4gICAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgICBydW46IHRoaXMucnVuLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgdW5sb2FkKCkge31cblxuICBwcml2YXRlIGNoZWNrID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmJldHRlckVudGVyICYmICF0aGlzLmltZS5pc0lNRU9wZW5lZCgpO1xuICB9O1xuXG4gIHByaXZhdGUgcnVuID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICBjb25zdCB6b29tUmFuZ2UgPSBlZGl0b3IuZ2V0Wm9vbVJhbmdlKCk7XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLnBlcmZvcm1PcGVyYXRpb24ucGVyZm9ybU9wZXJhdGlvbihcbiAgICAgIChyb290KSA9PlxuICAgICAgICBuZXcgQ3JlYXRlTmV3SXRlbU9wZXJhdGlvbihcbiAgICAgICAgICByb290LFxuICAgICAgICAgIHRoaXMub2JzaWRpYW4uZ2V0RGVmYXVsdEluZGVudENoYXJzKCksXG4gICAgICAgICAge1xuICAgICAgICAgICAgZ2V0Wm9vbVJhbmdlOiAoKSA9PiB6b29tUmFuZ2UsXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgZWRpdG9yXG4gICAgKTtcblxuICAgIGlmIChyZXMuc2hvdWxkVXBkYXRlICYmIHpvb21SYW5nZSkge1xuICAgICAgZWRpdG9yLnpvb21Jbih6b29tUmFuZ2UuZnJvbS5saW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTm90aWNlLCBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4vRmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBNeUVkaXRvciB9IGZyb20gXCIuLi9NeUVkaXRvclwiO1xuaW1wb3J0IHsgT2JzaWRpYW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL09ic2lkaWFuU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgRm9sZEZlYXR1cmUgaW1wbGVtZW50cyBGZWF0dXJlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IFBsdWdpbl8yLCBwcml2YXRlIG9ic2lkaWFuOiBPYnNpZGlhblNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImZvbGRcIixcbiAgICAgIGljb246IFwiY2hldnJvbnMtZG93bi11cFwiLFxuICAgICAgbmFtZTogXCJGb2xkIHRoZSBsaXN0XCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogdGhpcy5vYnNpZGlhbi5jcmVhdGVFZGl0b3JDYWxsYmFjayh0aGlzLmZvbGQpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJNb2RcIl0sXG4gICAgICAgICAga2V5OiBcIkFycm93VXBcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsdWdpbi5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInVuZm9sZFwiLFxuICAgICAgaWNvbjogXCJjaGV2cm9ucy11cC1kb3duXCIsXG4gICAgICBuYW1lOiBcIlVuZm9sZCB0aGUgbGlzdFwiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IHRoaXMub2JzaWRpYW4uY3JlYXRlRWRpdG9yQ2FsbGJhY2sodGhpcy51bmZvbGQpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJNb2RcIl0sXG4gICAgICAgICAga2V5OiBcIkFycm93RG93blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG5cbiAgcHJpdmF0ZSBzZXRGb2xkKGVkaXRvcjogTXlFZGl0b3IsIHR5cGU6IFwiZm9sZFwiIHwgXCJ1bmZvbGRcIikge1xuICAgIGlmICghdGhpcy5vYnNpZGlhbi5nZXRPYnNpZGlhbkZvbGRTZXR0aW5ncygpLmZvbGRJbmRlbnQpIHtcbiAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgIGBVbmFibGUgdG8gJHt0eXBlfSBiZWNhdXNlIGZvbGRpbmcgaXMgZGlzYWJsZWQuIFBsZWFzZSBlbmFibGUgXCJGb2xkIGluZGVudFwiIGluIE9ic2lkaWFuIHNldHRpbmdzLmAsXG4gICAgICAgIDUwMDBcbiAgICAgICk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmb2xkXCIpIHtcbiAgICAgIGVkaXRvci5mb2xkKGN1cnNvci5saW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWRpdG9yLnVuZm9sZChjdXJzb3IubGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGZvbGQgPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldEZvbGQoZWRpdG9yLCBcImZvbGRcIik7XG4gIH07XG5cbiAgcHJpdmF0ZSB1bmZvbGQgPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldEZvbGQoZWRpdG9yLCBcInVuZm9sZFwiKTtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCB7XG4gIGZvbGRFZmZlY3QsXG4gIGZvbGRhYmxlLFxuICBmb2xkZWRSYW5nZXMsXG4gIHVuZm9sZEVmZmVjdCxcbn0gZnJvbSBcIkBjb2RlbWlycm9yL2xhbmd1YWdlXCI7XG5pbXBvcnQgeyBFZGl0b3JWaWV3LCBydW5TY29wZUhhbmRsZXJzIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIE15RWRpdG9yUG9zaXRpb24ge1xuICBsaW5lOiBudW1iZXI7XG4gIGNoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNeUVkaXRvclJhbmdlIHtcbiAgZnJvbTogTXlFZGl0b3JQb3NpdGlvbjtcbiAgdG86IE15RWRpdG9yUG9zaXRpb247XG59XG5cbmV4cG9ydCBjbGFzcyBNeUVkaXRvclNlbGVjdGlvbiB7XG4gIGFuY2hvcjogTXlFZGl0b3JQb3NpdGlvbjtcbiAgaGVhZDogTXlFZGl0b3JQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gZm9sZEluc2lkZSh2aWV3OiBFZGl0b3JWaWV3LCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgbGV0IGZvdW5kOiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGZvbGRlZFJhbmdlcyh2aWV3LnN0YXRlKS5iZXR3ZWVuKGZyb20sIHRvLCAoZnJvbSwgdG8pID0+IHtcbiAgICBpZiAoIWZvdW5kIHx8IGZvdW5kLmZyb20gPiBmcm9tKSBmb3VuZCA9IHsgZnJvbSwgdG8gfTtcbiAgfSk7XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGNsYXNzIE15RWRpdG9yIHtcbiAgcHJpdmF0ZSB2aWV3OiBFZGl0b3JWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZTogRWRpdG9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB0aGlzLnZpZXcgPSAodGhpcy5lIGFzIGFueSkuY207XG4gIH1cblxuICBnZXRDdXJzb3IoKTogTXlFZGl0b3JQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZS5nZXRDdXJzb3IoKTtcbiAgfVxuXG4gIGdldExpbmUobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lLmdldExpbmUobik7XG4gIH1cblxuICBsYXN0TGluZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmUubGFzdExpbmUoKTtcbiAgfVxuXG4gIGxpc3RTZWxlY3Rpb25zKCk6IE15RWRpdG9yU2VsZWN0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmUubGlzdFNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIGdldFJhbmdlKGZyb206IE15RWRpdG9yUG9zaXRpb24sIHRvOiBNeUVkaXRvclBvc2l0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lLmdldFJhbmdlKGZyb20sIHRvKTtcbiAgfVxuXG4gIHJlcGxhY2VSYW5nZShcbiAgICByZXBsYWNlbWVudDogc3RyaW5nLFxuICAgIGZyb206IE15RWRpdG9yUG9zaXRpb24sXG4gICAgdG86IE15RWRpdG9yUG9zaXRpb25cbiAgKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuZS5yZXBsYWNlUmFuZ2UocmVwbGFjZW1lbnQsIGZyb20sIHRvKTtcbiAgfVxuXG4gIHNldFNlbGVjdGlvbnMoc2VsZWN0aW9uczogTXlFZGl0b3JTZWxlY3Rpb25bXSk6IHZvaWQge1xuICAgIHRoaXMuZS5zZXRTZWxlY3Rpb25zKHNlbGVjdGlvbnMpO1xuICB9XG5cbiAgc2V0VmFsdWUodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lLnNldFZhbHVlKHRleHQpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lLmdldFZhbHVlKCk7XG4gIH1cblxuICBvZmZzZXRUb1BvcyhvZmZzZXQ6IG51bWJlcik6IE15RWRpdG9yUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLmUub2Zmc2V0VG9Qb3Mob2Zmc2V0KTtcbiAgfVxuXG4gIHBvc1RvT2Zmc2V0KHBvczogTXlFZGl0b3JQb3NpdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZS5wb3NUb09mZnNldChwb3MpO1xuICB9XG5cbiAgZm9sZChuOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgY29uc3QgbCA9IHZpZXcubGluZUJsb2NrQXQodmlldy5zdGF0ZS5kb2MubGluZShuICsgMSkuZnJvbSk7XG4gICAgY29uc3QgcmFuZ2UgPSBmb2xkYWJsZSh2aWV3LnN0YXRlLCBsLmZyb20sIGwudG8pO1xuXG4gICAgaWYgKCFyYW5nZSB8fCByYW5nZS5mcm9tID09PSByYW5nZS50bykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZpZXcuZGlzcGF0Y2goeyBlZmZlY3RzOiBbZm9sZEVmZmVjdC5vZihyYW5nZSldIH0pO1xuICB9XG5cbiAgdW5mb2xkKG46IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICBjb25zdCBsID0gdmlldy5saW5lQmxvY2tBdCh2aWV3LnN0YXRlLmRvYy5saW5lKG4gKyAxKS5mcm9tKTtcbiAgICBjb25zdCByYW5nZSA9IGZvbGRJbnNpZGUodmlldywgbC5mcm9tLCBsLnRvKTtcblxuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2aWV3LmRpc3BhdGNoKHsgZWZmZWN0czogW3VuZm9sZEVmZmVjdC5vZihyYW5nZSldIH0pO1xuICB9XG5cbiAgZ2V0QWxsRm9sZGVkTGluZXMoKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGMgPSBmb2xkZWRSYW5nZXModGhpcy52aWV3LnN0YXRlKS5pdGVyKCk7XG4gICAgY29uc3QgcmVzOiBudW1iZXJbXSA9IFtdO1xuICAgIHdoaWxlIChjLnZhbHVlKSB7XG4gICAgICByZXMucHVzaCh0aGlzLm9mZnNldFRvUG9zKGMuZnJvbSkubGluZSk7XG4gICAgICBjLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHRyaWdnZXJPbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHJ1blNjb3BlSGFuZGxlcnModGhpcy52aWV3LCBlLCBcImVkaXRvclwiKTtcbiAgfVxuXG4gIGdldFpvb21SYW5nZSgpOiBNeUVkaXRvclJhbmdlIHwgbnVsbCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBhcGkgPSAod2luZG93IGFzIGFueSkuT2JzaWRpYW5ab29tUGx1Z2luO1xuXG4gICAgaWYgKCFhcGkgfHwgIWFwaS5nZXRab29tUmFuZ2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcGkuZ2V0Wm9vbVJhbmdlKHRoaXMuZSk7XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgYXBpID0gKHdpbmRvdyBhcyBhbnkpLk9ic2lkaWFuWm9vbVBsdWdpbjtcblxuICAgIGlmICghYXBpIHx8ICFhcGkuem9vbU91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFwaS56b29tT3V0KHRoaXMuZSk7XG4gIH1cblxuICB6b29tSW4obGluZTogbnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBhcGkgPSAod2luZG93IGFzIGFueSkuT2JzaWRpYW5ab29tUGx1Z2luO1xuXG4gICAgaWYgKCFhcGkgfHwgIWFwaS56b29tSW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhcGkuem9vbUluKHRoaXMuZSwgbGluZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yLCBlZGl0b3JJbmZvRmllbGQgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHtcbiAgRWRpdG9yVmlldyxcbiAgUGx1Z2luVmFsdWUsXG4gIFZpZXdQbHVnaW4sXG4gIFZpZXdVcGRhdGUsXG59IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5cbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9GZWF0dXJlXCI7XG5cbmltcG9ydCB7IE15RWRpdG9yIH0gZnJvbSBcIi4uL015RWRpdG9yXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4uL3Jvb3RcIjtcbmltcG9ydCB7IE9ic2lkaWFuU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2VcIjtcbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvUGFyc2VyU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5pbnRlcmZhY2UgTGluZURhdGEge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgbGlzdDogTGlzdDtcbn1cblxuY2xhc3MgTGlzdExpbmVzVmlld1BsdWdpblZhbHVlIGltcGxlbWVudHMgUGx1Z2luVmFsdWUge1xuICBwcml2YXRlIHNjaGVkdWxlZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHByaXZhdGUgc2Nyb2xsZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNvbnRlbnRDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGVkaXRvcjogTXlFZGl0b3I7XG4gIHByaXZhdGUgbGFzdExpbmU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsaW5lczogTGluZURhdGFbXTtcbiAgcHJpdmF0ZSBsaW5lRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFyc2VyOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmlldzogRWRpdG9yVmlld1xuICApIHtcbiAgICB0aGlzLnZpZXcuc2Nyb2xsRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbCk7XG4gICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZShcImxpc3RMaW5lc1wiLCB0aGlzLnNjaGVkdWxlUmVjYWxjdWxhdGUpO1xuXG4gICAgdGhpcy5wcmVwYXJlRG9tKCk7XG4gICAgdGhpcy53YWl0Rm9yRWRpdG9yKCk7XG4gIH1cblxuICBwcml2YXRlIHdhaXRGb3JFZGl0b3IgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2UgPSB0aGlzLnZpZXcuc3RhdGUuZmllbGQoZWRpdG9ySW5mb0ZpZWxkKS5lZGl0b3I7XG4gICAgaWYgKCFvZSkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLndhaXRGb3JFZGl0b3IsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVkaXRvciA9IG5ldyBNeUVkaXRvcihvZSk7XG4gICAgdGhpcy5zY2hlZHVsZVJlY2FsY3VsYXRlKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRG9tKCkge1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm91dGxpbmVyLXBsdWdpbi1saXN0LWxpbmVzLWNvbnRlbnQtY29udGFpbmVyXCJcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5zY3JvbGxlci5jbGFzc0xpc3QuYWRkKFwib3V0bGluZXItcGx1Z2luLWxpc3QtbGluZXMtc2Nyb2xsZXJcIik7XG5cbiAgICB0aGlzLnNjcm9sbGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XG4gICAgdGhpcy52aWV3LmRvbS5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TY3JvbGwgPSAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHNjcm9sbExlZnQsIHNjcm9sbFRvcCB9ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUbyhzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApO1xuICB9O1xuXG4gIHByaXZhdGUgc2NoZWR1bGVSZWNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zY2hlZHVsZWQpO1xuICAgIHRoaXMuc2NoZWR1bGVkID0gc2V0VGltZW91dCh0aGlzLmNhbGN1bGF0ZSwgMCk7XG4gIH07XG5cbiAgdXBkYXRlKHVwZGF0ZTogVmlld1VwZGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHVwZGF0ZS5kb2NDaGFuZ2VkIHx8XG4gICAgICB1cGRhdGUudmlld3BvcnRDaGFuZ2VkIHx8XG4gICAgICB1cGRhdGUuZ2VvbWV0cnlDaGFuZ2VkIHx8XG4gICAgICB1cGRhdGUudHJhbnNhY3Rpb25zLnNvbWUoKHRyKSA9PiB0ci5yZWNvbmZpZ3VyZWQpXG4gICAgKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlUmVjYWxjdWxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLmxpbmVzID0gW107XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnNldHRpbmdzLmxpc3RMaW5lcyAmJlxuICAgICAgdGhpcy5vYnNpZGlhbi5pc0RlZmF1bHRUaGVtZUVuYWJsZWQoKSAmJlxuICAgICAgdGhpcy52aWV3LnZpZXdwb3J0TGluZUJsb2Nrcy5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLnZpZXcudmlzaWJsZVJhbmdlcy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBmcm9tTGluZSA9IHRoaXMuZWRpdG9yLm9mZnNldFRvUG9zKHRoaXMudmlldy52aWV3cG9ydC5mcm9tKS5saW5lO1xuICAgICAgY29uc3QgdG9MaW5lID0gdGhpcy5lZGl0b3Iub2Zmc2V0VG9Qb3ModGhpcy52aWV3LnZpZXdwb3J0LnRvKS5saW5lO1xuICAgICAgY29uc3QgbGlzdHMgPSB0aGlzLnBhcnNlci5wYXJzZVJhbmdlKHRoaXMuZWRpdG9yLCBmcm9tTGluZSwgdG9MaW5lKTtcblxuICAgICAgZm9yIChjb25zdCBsaXN0IG9mIGxpc3RzKSB7XG4gICAgICAgIHRoaXMubGFzdExpbmUgPSBsaXN0LmdldFJhbmdlKClbMV0ubGluZTtcblxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbGlzdC5nZXRDaGlsZHJlbigpKSB7XG4gICAgICAgICAgdGhpcy5yZWN1cnNpdmUoYyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5saW5lcy5zb3J0KChhLCBiKSA9PlxuICAgICAgICBhLnRvcCA9PT0gYi50b3AgPyBhLmxlZnQgLSBiLmxlZnQgOiBhLnRvcCAtIGIudG9wXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRG9tKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXROZXh0U2libGluZyhsaXN0OiBMaXN0KTogTGlzdCB8IG51bGwge1xuICAgIGxldCBsaXN0VG1wID0gbGlzdDtcbiAgICBsZXQgcCA9IGxpc3RUbXAuZ2V0UGFyZW50KCk7XG4gICAgd2hpbGUgKHApIHtcbiAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gcC5nZXROZXh0U2libGluZ09mKGxpc3RUbXApO1xuICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIGxpc3RUbXAgPSBwO1xuICAgICAgcCA9IGxpc3RUbXAuZ2V0UGFyZW50KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSByZWN1cnNpdmUobGlzdDogTGlzdCwgcGFyZW50Q3R4OiB7IHJvb3RMZWZ0PzogbnVtYmVyIH0gPSB7fSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbGlzdC5nZXRDaGlsZHJlbigpO1xuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZyb21PZmZzZXQgPSB0aGlzLmVkaXRvci5wb3NUb09mZnNldCh7XG4gICAgICBsaW5lOiBsaXN0LmdldEZpcnN0TGluZUNvbnRlbnRTdGFydCgpLmxpbmUsXG4gICAgICBjaDogbGlzdC5nZXRGaXJzdExpbmVJbmRlbnQoKS5sZW5ndGgsXG4gICAgfSk7XG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0aGlzLmdldE5leHRTaWJsaW5nKGxpc3QpO1xuICAgIGNvbnN0IHRpbGxPZmZzZXQgPSB0aGlzLmVkaXRvci5wb3NUb09mZnNldCh7XG4gICAgICBsaW5lOiBuZXh0U2libGluZ1xuICAgICAgICA/IG5leHRTaWJsaW5nLmdldEZpcnN0TGluZUNvbnRlbnRTdGFydCgpLmxpbmUgLSAxXG4gICAgICAgIDogdGhpcy5sYXN0TGluZSxcbiAgICAgIGNoOiAwLFxuICAgIH0pO1xuXG4gICAgbGV0IHZpc2libGVGcm9tID0gdGhpcy52aWV3LnZpc2libGVSYW5nZXNbMF0uZnJvbTtcbiAgICBsZXQgdmlzaWJsZVRvID1cbiAgICAgIHRoaXMudmlldy52aXNpYmxlUmFuZ2VzW3RoaXMudmlldy52aXNpYmxlUmFuZ2VzLmxlbmd0aCAtIDFdLnRvO1xuICAgIGNvbnN0IHpvb21SYW5nZSA9IHRoaXMuZWRpdG9yLmdldFpvb21SYW5nZSgpO1xuICAgIGlmICh6b29tUmFuZ2UpIHtcbiAgICAgIHZpc2libGVGcm9tID0gTWF0aC5tYXgoXG4gICAgICAgIHZpc2libGVGcm9tLFxuICAgICAgICB0aGlzLmVkaXRvci5wb3NUb09mZnNldCh6b29tUmFuZ2UuZnJvbSlcbiAgICAgICk7XG4gICAgICB2aXNpYmxlVG8gPSBNYXRoLm1pbih2aXNpYmxlVG8sIHRoaXMuZWRpdG9yLnBvc1RvT2Zmc2V0KHpvb21SYW5nZS50bykpO1xuICAgIH1cblxuICAgIGlmIChmcm9tT2Zmc2V0ID4gdmlzaWJsZVRvIHx8IHRpbGxPZmZzZXQgPCB2aXNpYmxlRnJvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMudmlldy5jb29yZHNBdFBvcyhmcm9tT2Zmc2V0LCAxKTtcbiAgICBpZiAocGFyZW50Q3R4LnJvb3RMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmVudEN0eC5yb290TGVmdCA9IGNvb3Jkcy5sZWZ0O1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihjb29yZHMucmlnaHQgLSBwYXJlbnRDdHgucm9vdExlZnQpO1xuXG4gICAgY29uc3QgdG9wID1cbiAgICAgIHZpc2libGVGcm9tID4gMCAmJiBmcm9tT2Zmc2V0IDwgdmlzaWJsZUZyb21cbiAgICAgICAgPyAtMjBcbiAgICAgICAgOiB0aGlzLnZpZXcubGluZUJsb2NrQXQoZnJvbU9mZnNldCkudG9wO1xuICAgIGNvbnN0IGJvdHRvbSA9XG4gICAgICB0aWxsT2Zmc2V0ID4gdmlzaWJsZVRvXG4gICAgICAgID8gdGhpcy52aWV3LmxpbmVCbG9ja0F0KHZpc2libGVUbyAtIDEpLmJvdHRvbVxuICAgICAgICA6IHRoaXMudmlldy5saW5lQmxvY2tBdCh0aWxsT2Zmc2V0KS5ib3R0b207XG4gICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgaWYgKGhlaWdodCA+IDAgJiYgIWxpc3QuaXNGb2xkZWQoKSkge1xuICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBsaXN0LmdldFBhcmVudCgpLmdldE5leHRTaWJsaW5nT2YobGlzdCk7XG4gICAgICBjb25zdCBoYXNOZXh0U2libGluZyA9XG4gICAgICAgICEhbmV4dFNpYmxpbmcgJiZcbiAgICAgICAgdGhpcy5lZGl0b3IucG9zVG9PZmZzZXQobmV4dFNpYmxpbmcuZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0KCkpIDw9XG4gICAgICAgICAgdmlzaWJsZVRvO1xuXG4gICAgICB0aGlzLmxpbmVzLnB1c2goe1xuICAgICAgICB0b3AsXG4gICAgICAgIGxlZnQsXG4gICAgICAgIGhlaWdodDogYGNhbGMoJHtoZWlnaHR9cHggJHtoYXNOZXh0U2libGluZyA/IFwiLSAxLjVlbVwiIDogXCItIDJlbVwifSlgLFxuICAgICAgICBsaXN0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKCFjaGlsZC5pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy5yZWN1cnNpdmUoY2hpbGQsIHBhcmVudEN0eCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsaW5lID0gdGhpcy5saW5lc1tOdW1iZXIoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LmluZGV4KV07XG5cbiAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MubGlzdExpbmVBY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJ6b29tLWluXCI6XG4gICAgICAgIHRoaXMuem9vbUluKGxpbmUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRvZ2dsZS1mb2xkaW5nXCI6XG4gICAgICAgIHRoaXMudG9nZ2xlRm9sZGluZyhsaW5lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgem9vbUluKGxpbmU6IExpbmVEYXRhKSB7XG4gICAgY29uc3QgZWRpdG9yID0gbmV3IE15RWRpdG9yKHRoaXMudmlldy5zdGF0ZS5maWVsZChlZGl0b3JJbmZvRmllbGQpLmVkaXRvcik7XG5cbiAgICBlZGl0b3Iuem9vbUluKGxpbmUubGlzdC5nZXRGaXJzdExpbmVDb250ZW50U3RhcnQoKS5saW5lKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRm9sZGluZyhsaW5lOiBMaW5lRGF0YSkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gbGluZTtcblxuICAgIGlmIChsaXN0LmlzRW1wdHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZWVkVG9VbmZvbGQgPSB0cnVlO1xuICAgIGNvbnN0IGxpbmVzVG9Ub2dnbGU6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBjIG9mIGxpc3QuZ2V0Q2hpbGRyZW4oKSkge1xuICAgICAgaWYgKGMuaXNFbXB0eSgpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFjLmlzRm9sZGVkKCkpIHtcbiAgICAgICAgbmVlZFRvVW5mb2xkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsaW5lc1RvVG9nZ2xlLnB1c2goYy5nZXRGaXJzdExpbmVDb250ZW50U3RhcnQoKS5saW5lKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0b3IgPSBuZXcgTXlFZGl0b3IodGhpcy52aWV3LnN0YXRlLmZpZWxkKGVkaXRvckluZm9GaWVsZCkuZWRpdG9yKTtcblxuICAgIGZvciAoY29uc3QgbCBvZiBsaW5lc1RvVG9nZ2xlKSB7XG4gICAgICBpZiAobmVlZFRvVW5mb2xkKSB7XG4gICAgICAgIGVkaXRvci51bmZvbGQobCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3IuZm9sZChsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURvbSgpIHtcbiAgICBjb25zdCBjbVNjcm9sbCA9IHRoaXMudmlldy5zY3JvbGxET007XG4gICAgY29uc3QgY21Db250ZW50ID0gdGhpcy52aWV3LmNvbnRlbnRET007XG4gICAgY29uc3QgY21Db250ZW50Q29udGFpbmVyID0gY21Db250ZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgY21TaXplciA9IGNtQ29udGVudENvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogT2JzaWRpYW4gY2FuIGFkZCBhZGRpdGlvbmFsIGVsZW1lbnRzIGludG8gQ29udGVudCBNYW5hZ2VyLlxuICAgICAqIFRoZSBtb3N0IG9idmlvdXMgY2FzZSBpcyB0aGUgJ2VtYmVkZGVkLWJhY2tsaW5rcycgY29yZSBwbHVnaW4gdGhhdCBhZGRzIGEgbWVudSBpbnNpZGUgYSBDb250ZW50IE1hbmFnZXIuXG4gICAgICogV2UgbXVzdCB0YWtlIGhlaWdodHMgb2YgYWxsIG9mIHRoZXNlIGVsZW1lbnRzIGludG8gYWNjb3VudFxuICAgICAqIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHNpemUgb2YgbGluZXMnIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBsZXQgY21TaXplckNoaWxkcmVuU3VtSGVpZ2h0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNtU2l6ZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNtU2l6ZXJDaGlsZHJlblN1bUhlaWdodCArPSBjbVNpemVyLmNoaWxkcmVuW2ldLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbGVyLnN0eWxlLnRvcCA9IGNtU2Nyb2xsLm9mZnNldFRvcCArIFwicHhcIjtcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY21TaXplckNoaWxkcmVuU3VtSGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lci5zdHlsZS5tYXJnaW5MZWZ0ID1cbiAgICAgIGNtQ29udGVudENvbnRhaW5lci5vZmZzZXRMZWZ0ICsgXCJweFwiO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lci5zdHlsZS5tYXJnaW5Ub3AgPVxuICAgICAgKGNtQ29udGVudC5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wIC0gMjQgKyBcInB4XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGggPT09IGkpIHtcbiAgICAgICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm91dGxpbmVyLXBsdWdpbi1saXN0LWxpbmVcIik7XG4gICAgICAgIGUuZGF0YXNldC5pbmRleCA9IFN0cmluZyhpKTtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgdGhpcy5saW5lRWxlbWVudHMucHVzaChlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbCA9IHRoaXMubGluZXNbaV07XG4gICAgICBjb25zdCBlID0gdGhpcy5saW5lRWxlbWVudHNbaV07XG4gICAgICBlLnN0eWxlLnRvcCA9IGwudG9wICsgXCJweFwiO1xuICAgICAgZS5zdHlsZS5sZWZ0ID0gbC5sZWZ0ICsgXCJweFwiO1xuICAgICAgZS5zdHlsZS5oZWlnaHQgPSBsLmhlaWdodDtcbiAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5saW5lcy5sZW5ndGg7IGkgPCB0aGlzLmxpbmVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZSA9IHRoaXMubGluZUVsZW1lbnRzW2ldO1xuICAgICAgZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgIGUuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5yZW1vdmVDYWxsYmFjayhcImxpc3RMaW5lc1wiLCB0aGlzLnNjaGVkdWxlUmVjYWxjdWxhdGUpO1xuICAgIHRoaXMudmlldy5zY3JvbGxET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB0aGlzLnZpZXcuZG9tLnJlbW92ZUNoaWxkKHRoaXMuc2Nyb2xsZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNjaGVkdWxlZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpbmVzRmVhdHVyZSBpbXBsZW1lbnRzIEZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2JzaWRpYW46IE9ic2lkaWFuU2VydmljZSxcbiAgICBwcml2YXRlIHBhcnNlcjogUGFyc2VyU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckVkaXRvckV4dGVuc2lvbihcbiAgICAgIFZpZXdQbHVnaW4uZGVmaW5lKFxuICAgICAgICAodmlldykgPT5cbiAgICAgICAgICBuZXcgTGlzdExpbmVzVmlld1BsdWdpblZhbHVlKFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRoaXMub2JzaWRpYW4sXG4gICAgICAgICAgICB0aGlzLnBhcnNlcixcbiAgICAgICAgICAgIHZpZXdcbiAgICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG59XG4iLCJpbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4vRmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlXCI7XG5cbmNvbnN0IEJFVFRFUl9MSVNUU19DTEFTUyA9IFwib3V0bGluZXItcGx1Z2luLWJldHRlci1saXN0c1wiO1xuY29uc3QgQkVUVEVSX0JVTExFVFNfQ0xBU1MgPSBcIm91dGxpbmVyLXBsdWdpbi1iZXR0ZXItYnVsbGV0c1wiO1xuY29uc3QgVkVSVElDQUxfTElORVMgPSBcIm91dGxpbmVyLXBsdWdpbi12ZXJ0aWNhbC1saW5lc1wiO1xuY29uc3QgS05PV05fQ0xBU1NFUyA9IFtcbiAgQkVUVEVSX0xJU1RTX0NMQVNTLFxuICBCRVRURVJfQlVMTEVUU19DTEFTUyxcbiAgVkVSVElDQUxfTElORVMsXG5dO1xuXG5leHBvcnQgY2xhc3MgTGlzdHNTdHlsZXNGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMuc3luY0xpc3RzU3R5bGVzKCk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNMaXN0c1N0eWxlcygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgYXN5bmMgdW5sb2FkKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgdGhpcy5hcHBseUxpc3RzU3R5bGVzKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY0xpc3RzU3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLm9ic2lkaWFuLmlzRGVmYXVsdFRoZW1lRW5hYmxlZCgpKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5zdHlsZUxpc3RzKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChCRVRURVJfTElTVFNfQ0xBU1MpO1xuICAgICAgICBjbGFzc2VzLnB1c2goQkVUVEVSX0JVTExFVFNfQ0xBU1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5saXN0TGluZXMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKFZFUlRJQ0FMX0xJTkVTKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5TGlzdHNTdHlsZXMoY2xhc3Nlcyk7XG4gIH07XG5cbiAgcHJpdmF0ZSBhcHBseUxpc3RzU3R5bGVzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgdG9LZWVwID0gY2xhc3Nlcy5maWx0ZXIoKGMpID0+IEtOT1dOX0NMQVNTRVMuY29udGFpbnMoYykpO1xuICAgIGNvbnN0IHRvUmVtb3ZlID0gS05PV05fQ0xBU1NFUy5maWx0ZXIoKGMpID0+ICF0b0tlZXAuY29udGFpbnMoYykpO1xuXG4gICAgZm9yIChjb25zdCBjIG9mIHRvS2VlcCkge1xuICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjIG9mIHRvUmVtb3ZlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoYykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XG5cbmltcG9ydCB7IExpc3RMaW5lLCBQb3NpdGlvbiwgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZlQ3Vyc29yVG9QcmV2aW91c1VuZm9sZGVkTGluZU9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge31cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWQ7XG4gIH1cblxuICBwZXJmb3JtKCkge1xuICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcblxuICAgIGlmICghcm9vdC5oYXNTaW5nbGVDdXJzb3IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnJvb3QuZ2V0TGlzdFVuZGVyQ3Vyc29yKCk7XG4gICAgY29uc3QgY3Vyc29yID0gdGhpcy5yb290LmdldEN1cnNvcigpO1xuICAgIGNvbnN0IGxpbmVzID0gbGlzdC5nZXRMaW5lc0luZm8oKTtcbiAgICBjb25zdCBsaW5lTm8gPSBsaW5lcy5maW5kSW5kZXgoKGwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGN1cnNvci5jaCA9PT0gbC5mcm9tLmNoICsgbGlzdC5nZXRDaGVja2JveExlbmd0aCgpICYmXG4gICAgICAgIGN1cnNvci5saW5lID09PSBsLmZyb20ubGluZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmIChsaW5lTm8gPT09IDApIHtcbiAgICAgIHRoaXMubW92ZUN1cnNvclRvUHJldmlvdXNVbmZvbGRlZEl0ZW0ocm9vdCwgY3Vyc29yKTtcbiAgICB9IGVsc2UgaWYgKGxpbmVObyA+IDApIHtcbiAgICAgIHRoaXMubW92ZUN1cnNvclRvUHJldmlvdXNOb3RlTGluZShyb290LCBsaW5lcywgbGluZU5vKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVDdXJzb3JUb1ByZXZpb3VzTm90ZUxpbmUoXG4gICAgcm9vdDogUm9vdCxcbiAgICBsaW5lczogTGlzdExpbmVbXSxcbiAgICBsaW5lTm86IG51bWJlclxuICApIHtcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIHJvb3QucmVwbGFjZUN1cnNvcihsaW5lc1tsaW5lTm8gLSAxXS50byk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVDdXJzb3JUb1ByZXZpb3VzVW5mb2xkZWRJdGVtKHJvb3Q6IFJvb3QsIGN1cnNvcjogUG9zaXRpb24pIHtcbiAgICBjb25zdCBwcmV2ID0gcm9vdC5nZXRMaXN0VW5kZXJMaW5lKGN1cnNvci5saW5lIC0gMSk7XG5cbiAgICBpZiAoIXByZXYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIGlmIChwcmV2LmlzRm9sZGVkKCkpIHtcbiAgICAgIGNvbnN0IGZvbGRSb290ID0gcHJldi5nZXRUb3BGb2xkUm9vdCgpO1xuICAgICAgY29uc3QgZmlyc3RMaW5lRW5kID0gZm9sZFJvb3QuZ2V0TGluZXNJbmZvKClbMF0udG87XG4gICAgICByb290LnJlcGxhY2VDdXJzb3IoZmlyc3RMaW5lRW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5yZXBsYWNlQ3Vyc29yKHByZXYuZ2V0TGFzdExpbmVDb250ZW50RW5kKCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luXzIgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHsga2V5bWFwIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvRmVhdHVyZVwiO1xuaW1wb3J0IHsgTW92ZUN1cnNvclRvUHJldmlvdXNVbmZvbGRlZExpbmVPcGVyYXRpb24gfSBmcm9tIFwiLi4vb3BlcmF0aW9ucy9Nb3ZlQ3Vyc29yVG9QcmV2aW91c1VuZm9sZGVkTGluZU9wZXJhdGlvblwiO1xuaW1wb3J0IHsgSU1FU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JTUVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgTW92ZUN1cnNvclRvUHJldmlvdXNVbmZvbGRlZExpbmVGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luOiBQbHVnaW5fMixcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbWU6IElNRVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVyZm9ybU9wZXJhdGlvbjogUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFZGl0b3JFeHRlbnNpb24oXG4gICAgICBrZXltYXAub2YoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIkFycm93TGVmdFwiLFxuICAgICAgICAgIHJ1bjogdGhpcy5vYnNpZGlhbi5jcmVhdGVLZXltYXBSdW5DYWxsYmFjayh7XG4gICAgICAgICAgICBjaGVjazogdGhpcy5jaGVjayxcbiAgICAgICAgICAgIHJ1bjogdGhpcy5ydW4sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB3aW46IFwiYy1BcnJvd0xlZnRcIixcbiAgICAgICAgICBsaW51eDogXCJjLUFycm93TGVmdFwiLFxuICAgICAgICAgIHJ1bjogdGhpcy5vYnNpZGlhbi5jcmVhdGVLZXltYXBSdW5DYWxsYmFjayh7XG4gICAgICAgICAgICBjaGVjazogdGhpcy5jaGVjayxcbiAgICAgICAgICAgIHJ1bjogdGhpcy5ydW4sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxuXG4gIHByaXZhdGUgY2hlY2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc3RpY2tDdXJzb3IgIT0gXCJuZXZlclwiICYmICF0aGlzLmltZS5pc0lNRU9wZW5lZCgpO1xuICB9O1xuXG4gIHByaXZhdGUgcnVuID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtT3BlcmF0aW9uLnBlcmZvcm1PcGVyYXRpb24oXG4gICAgICAocm9vdCkgPT4gbmV3IE1vdmVDdXJzb3JUb1ByZXZpb3VzVW5mb2xkZWRMaW5lT3BlcmF0aW9uKHJvb3QpLFxuICAgICAgZWRpdG9yXG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uL3Jvb3RcIjtcbmltcG9ydCB7IHJlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHMgfSBmcm9tIFwiLi4vcm9vdC9yZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRG93bk9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge31cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWQ7XG4gIH1cblxuICBwZXJmb3JtKCkge1xuICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcblxuICAgIGlmICghcm9vdC5oYXNTaW5nbGVDdXJzb3IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IHBhcmVudCA9IGxpc3QuZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgZ3JhbmRQYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgbmV4dCA9IHBhcmVudC5nZXROZXh0U2libGluZ09mKGxpc3QpO1xuXG4gICAgY29uc3QgbGlzdFN0YXJ0TGluZUJlZm9yZSA9IHJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZihsaXN0KVswXTtcblxuICAgIGlmICghbmV4dCAmJiBncmFuZFBhcmVudCkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gZ3JhbmRQYXJlbnQuZ2V0TmV4dFNpYmxpbmdPZihwYXJlbnQpO1xuXG4gICAgICBpZiAobmV3UGFyZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChsaXN0KTtcbiAgICAgICAgbmV3UGFyZW50LmFkZEJlZm9yZUFsbChsaXN0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobGlzdCk7XG4gICAgICBwYXJlbnQuYWRkQWZ0ZXIobmV4dCwgbGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnVwZGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0U3RhcnRMaW5lQWZ0ZXIgPSByb290LmdldENvbnRlbnRMaW5lc1JhbmdlT2YobGlzdClbMF07XG4gICAgY29uc3QgbGluZURpZmYgPSBsaXN0U3RhcnRMaW5lQWZ0ZXIgLSBsaXN0U3RhcnRMaW5lQmVmb3JlO1xuXG4gICAgY29uc3QgY3Vyc29yID0gcm9vdC5nZXRDdXJzb3IoKTtcbiAgICByb290LnJlcGxhY2VDdXJzb3Ioe1xuICAgICAgbGluZTogY3Vyc29yLmxpbmUgKyBsaW5lRGlmZixcbiAgICAgIGNoOiBjdXJzb3IuY2gsXG4gICAgfSk7XG5cbiAgICByZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzKHJvb3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi9PcGVyYXRpb25cIjtcblxuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5pbXBvcnQgeyByZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzIH0gZnJvbSBcIi4uL3Jvb3QvcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0c1wiO1xuXG5leHBvcnQgY2xhc3MgTW92ZVJpZ2h0T3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBzdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSB1cGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290OiBSb290LCBwcml2YXRlIGRlZmF1bHRJbmRlbnRDaGFyczogc3RyaW5nKSB7fVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wUHJvcGFnYXRpb247XG4gIH1cblxuICBzaG91bGRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZDtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZUN1cnNvcigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuXG4gICAgY29uc3QgbGlzdCA9IHJvb3QuZ2V0TGlzdFVuZGVyQ3Vyc29yKCk7XG4gICAgY29uc3QgcGFyZW50ID0gbGlzdC5nZXRQYXJlbnQoKTtcbiAgICBjb25zdCBwcmV2ID0gcGFyZW50LmdldFByZXZTaWJsaW5nT2YobGlzdCk7XG5cbiAgICBpZiAoIXByZXYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgbGlzdFN0YXJ0TGluZUJlZm9yZSA9IHJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZihsaXN0KVswXTtcblxuICAgIGNvbnN0IGluZGVudFBvcyA9IGxpc3QuZ2V0Rmlyc3RMaW5lSW5kZW50KCkubGVuZ3RoO1xuICAgIGxldCBpbmRlbnRDaGFycyA9IFwiXCI7XG5cbiAgICBpZiAoaW5kZW50Q2hhcnMgPT09IFwiXCIgJiYgIXByZXYuaXNFbXB0eSgpKSB7XG4gICAgICBpbmRlbnRDaGFycyA9IHByZXZcbiAgICAgICAgLmdldENoaWxkcmVuKClbMF1cbiAgICAgICAgLmdldEZpcnN0TGluZUluZGVudCgpXG4gICAgICAgIC5zbGljZShwcmV2LmdldEZpcnN0TGluZUluZGVudCgpLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGVudENoYXJzID09PSBcIlwiKSB7XG4gICAgICBpbmRlbnRDaGFycyA9IGxpc3RcbiAgICAgICAgLmdldEZpcnN0TGluZUluZGVudCgpXG4gICAgICAgIC5zbGljZShwYXJlbnQuZ2V0Rmlyc3RMaW5lSW5kZW50KCkubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZW50Q2hhcnMgPT09IFwiXCIgJiYgIWxpc3QuaXNFbXB0eSgpKSB7XG4gICAgICBpbmRlbnRDaGFycyA9IGxpc3QuZ2V0Q2hpbGRyZW4oKVswXS5nZXRGaXJzdExpbmVJbmRlbnQoKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZW50Q2hhcnMgPT09IFwiXCIpIHtcbiAgICAgIGluZGVudENoYXJzID0gdGhpcy5kZWZhdWx0SW5kZW50Q2hhcnM7XG4gICAgfVxuXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGxpc3QpO1xuICAgIHByZXYuYWRkQWZ0ZXJBbGwobGlzdCk7XG4gICAgbGlzdC5pbmRlbnRDb250ZW50KGluZGVudFBvcywgaW5kZW50Q2hhcnMpO1xuXG4gICAgY29uc3QgbGlzdFN0YXJ0TGluZUFmdGVyID0gcm9vdC5nZXRDb250ZW50TGluZXNSYW5nZU9mKGxpc3QpWzBdO1xuICAgIGNvbnN0IGxpbmVEaWZmID0gbGlzdFN0YXJ0TGluZUFmdGVyIC0gbGlzdFN0YXJ0TGluZUJlZm9yZTtcblxuICAgIGNvbnN0IGN1cnNvciA9IHJvb3QuZ2V0Q3Vyc29yKCk7XG4gICAgcm9vdC5yZXBsYWNlQ3Vyc29yKHtcbiAgICAgIGxpbmU6IGN1cnNvci5saW5lICsgbGluZURpZmYsXG4gICAgICBjaDogY3Vyc29yLmNoICsgaW5kZW50Q2hhcnMubGVuZ3RoLFxuICAgIH0pO1xuXG4gICAgcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0cyhyb290KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XG5cbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vcm9vdFwiO1xuaW1wb3J0IHsgcmVjYWxjdWxhdGVOdW1lcmljQnVsbGV0cyB9IGZyb20gXCIuLi9yb290L3JlY2FsY3VsYXRlTnVtZXJpY0J1bGxldHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmVVcE9wZXJhdGlvbiBpbXBsZW1lbnRzIE9wZXJhdGlvbiB7XG4gIHByaXZhdGUgc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgdXBkYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogUm9vdCkge31cblxuICBzaG91bGRTdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcFByb3BhZ2F0aW9uO1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWQ7XG4gIH1cblxuICBwZXJmb3JtKCkge1xuICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcblxuICAgIGlmICghcm9vdC5oYXNTaW5nbGVDdXJzb3IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IHBhcmVudCA9IGxpc3QuZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgZ3JhbmRQYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG4gICAgY29uc3QgcHJldiA9IHBhcmVudC5nZXRQcmV2U2libGluZ09mKGxpc3QpO1xuXG4gICAgY29uc3QgbGlzdFN0YXJ0TGluZUJlZm9yZSA9IHJvb3QuZ2V0Q29udGVudExpbmVzUmFuZ2VPZihsaXN0KVswXTtcblxuICAgIGlmICghcHJldiAmJiBncmFuZFBhcmVudCkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gZ3JhbmRQYXJlbnQuZ2V0UHJldlNpYmxpbmdPZihwYXJlbnQpO1xuXG4gICAgICBpZiAobmV3UGFyZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChsaXN0KTtcbiAgICAgICAgbmV3UGFyZW50LmFkZEFmdGVyQWxsKGxpc3QpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJldikge1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChsaXN0KTtcbiAgICAgIHBhcmVudC5hZGRCZWZvcmUocHJldiwgbGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnVwZGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0U3RhcnRMaW5lQWZ0ZXIgPSByb290LmdldENvbnRlbnRMaW5lc1JhbmdlT2YobGlzdClbMF07XG4gICAgY29uc3QgbGluZURpZmYgPSBsaXN0U3RhcnRMaW5lQWZ0ZXIgLSBsaXN0U3RhcnRMaW5lQmVmb3JlO1xuXG4gICAgY29uc3QgY3Vyc29yID0gcm9vdC5nZXRDdXJzb3IoKTtcbiAgICByb290LnJlcGxhY2VDdXJzb3Ioe1xuICAgICAgbGluZTogY3Vyc29yLmxpbmUgKyBsaW5lRGlmZixcbiAgICAgIGNoOiBjdXJzb3IuY2gsXG4gICAgfSk7XG5cbiAgICByZWNhbGN1bGF0ZU51bWVyaWNCdWxsZXRzKHJvb3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBQcmVjIH0gZnJvbSBcIkBjb2RlbWlycm9yL3N0YXRlXCI7XG5pbXBvcnQgeyBrZXltYXAgfSBmcm9tIFwiQGNvZGVtaXJyb3Ivdmlld1wiO1xuXG5pbXBvcnQgeyBNeUVkaXRvciB9IGZyb20gXCIuLi9NeUVkaXRvclwiO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gXCIuLi9mZWF0dXJlcy9GZWF0dXJlXCI7XG5pbXBvcnQgeyBNb3ZlRG93bk9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL01vdmVEb3duT3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBNb3ZlTGVmdE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL01vdmVMZWZ0T3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBNb3ZlUmlnaHRPcGVyYXRpb24gfSBmcm9tIFwiLi4vb3BlcmF0aW9ucy9Nb3ZlUmlnaHRPcGVyYXRpb25cIjtcbmltcG9ydCB7IE1vdmVVcE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL01vdmVVcE9wZXJhdGlvblwiO1xuaW1wb3J0IHsgSU1FU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JTUVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgTW92ZUl0ZW1zRmVhdHVyZSBpbXBsZW1lbnRzIEZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSBpbWU6IElNRVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYnNpZGlhbjogT2JzaWRpYW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHBlcmZvcm1PcGVyYXRpb246IFBlcmZvcm1PcGVyYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwibW92ZS1saXN0LWl0ZW0tdXBcIixcbiAgICAgIGljb246IFwiYXJyb3ctdXBcIixcbiAgICAgIG5hbWU6IFwiTW92ZSBsaXN0IGFuZCBzdWJsaXN0cyB1cFwiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IHRoaXMub2JzaWRpYW4uY3JlYXRlRWRpdG9yQ2FsbGJhY2soXG4gICAgICAgIHRoaXMubW92ZUxpc3RFbGVtZW50VXBDb21tYW5kXG4gICAgICApLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJNb2RcIiwgXCJTaGlmdFwiXSxcbiAgICAgICAgICBrZXk6IFwiQXJyb3dVcFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMucGx1Z2luLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwibW92ZS1saXN0LWl0ZW0tZG93blwiLFxuICAgICAgaWNvbjogXCJhcnJvdy1kb3duXCIsXG4gICAgICBuYW1lOiBcIk1vdmUgbGlzdCBhbmQgc3VibGlzdHMgZG93blwiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IHRoaXMub2JzaWRpYW4uY3JlYXRlRWRpdG9yQ2FsbGJhY2soXG4gICAgICAgIHRoaXMubW92ZUxpc3RFbGVtZW50RG93bkNvbW1hbmRcbiAgICAgICksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIk1vZFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCJBcnJvd0Rvd25cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsdWdpbi5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImluZGVudC1saXN0XCIsXG4gICAgICBpY29uOiBcImluZGVudFwiLFxuICAgICAgbmFtZTogXCJJbmRlbnQgdGhlIGxpc3QgYW5kIHN1Ymxpc3RzXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogdGhpcy5vYnNpZGlhbi5jcmVhdGVFZGl0b3JDYWxsYmFjayhcbiAgICAgICAgdGhpcy5tb3ZlTGlzdEVsZW1lbnRSaWdodENvbW1hbmRcbiAgICAgICksXG4gICAgICBob3RrZXlzOiBbXSxcbiAgICB9KTtcblxuICAgIHRoaXMucGx1Z2luLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3V0ZGVudC1saXN0XCIsXG4gICAgICBpY29uOiBcIm91dGRlbnRcIixcbiAgICAgIG5hbWU6IFwiT3V0ZGVudCB0aGUgbGlzdCBhbmQgc3VibGlzdHNcIixcbiAgICAgIGVkaXRvckNhbGxiYWNrOiB0aGlzLm9ic2lkaWFuLmNyZWF0ZUVkaXRvckNhbGxiYWNrKFxuICAgICAgICB0aGlzLm1vdmVMaXN0RWxlbWVudExlZnRDb21tYW5kXG4gICAgICApLFxuICAgICAgaG90a2V5czogW10sXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckVkaXRvckV4dGVuc2lvbihcbiAgICAgIFByZWMuaGlnaGVzdChcbiAgICAgICAga2V5bWFwLm9mKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiVGFiXCIsXG4gICAgICAgICAgICBydW46IHRoaXMub2JzaWRpYW4uY3JlYXRlS2V5bWFwUnVuQ2FsbGJhY2soe1xuICAgICAgICAgICAgICBjaGVjazogdGhpcy5jaGVjayxcbiAgICAgICAgICAgICAgcnVuOiB0aGlzLm1vdmVMaXN0RWxlbWVudFJpZ2h0LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicy1UYWJcIixcbiAgICAgICAgICAgIHJ1bjogdGhpcy5vYnNpZGlhbi5jcmVhdGVLZXltYXBSdW5DYWxsYmFjayh7XG4gICAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgICBydW46IHRoaXMubW92ZUxpc3RFbGVtZW50TGVmdCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG5cbiAgcHJpdmF0ZSBjaGVjayA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5iZXR0ZXJUYWIgJiYgIXRoaXMuaW1lLmlzSU1FT3BlbmVkKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBtb3ZlTGlzdEVsZW1lbnREb3duQ29tbWFuZCA9IChlZGl0b3I6IE15RWRpdG9yKSA9PiB7XG4gICAgY29uc3QgeyBzaG91bGRTdG9wUHJvcGFnYXRpb24gfSA9IHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+IG5ldyBNb3ZlRG93bk9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG5cbiAgICByZXR1cm4gc2hvdWxkU3RvcFByb3BhZ2F0aW9uO1xuICB9O1xuXG4gIHByaXZhdGUgbW92ZUxpc3RFbGVtZW50VXBDb21tYW5kID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICBjb25zdCB7IHNob3VsZFN0b3BQcm9wYWdhdGlvbiB9ID0gdGhpcy5wZXJmb3JtT3BlcmF0aW9uLnBlcmZvcm1PcGVyYXRpb24oXG4gICAgICAocm9vdCkgPT4gbmV3IE1vdmVVcE9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG5cbiAgICByZXR1cm4gc2hvdWxkU3RvcFByb3BhZ2F0aW9uO1xuICB9O1xuXG4gIHByaXZhdGUgbW92ZUxpc3RFbGVtZW50UmlnaHRDb21tYW5kID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICBpZiAodGhpcy5pbWUuaXNJTUVPcGVuZWQoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubW92ZUxpc3RFbGVtZW50UmlnaHQoZWRpdG9yKS5zaG91bGRTdG9wUHJvcGFnYXRpb247XG4gIH07XG5cbiAgcHJpdmF0ZSBtb3ZlTGlzdEVsZW1lbnRSaWdodCA9IChlZGl0b3I6IE15RWRpdG9yKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+XG4gICAgICAgIG5ldyBNb3ZlUmlnaHRPcGVyYXRpb24ocm9vdCwgdGhpcy5vYnNpZGlhbi5nZXREZWZhdWx0SW5kZW50Q2hhcnMoKSksXG4gICAgICBlZGl0b3JcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgbW92ZUxpc3RFbGVtZW50TGVmdENvbW1hbmQgPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIGlmICh0aGlzLmltZS5pc0lNRU9wZW5lZCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tb3ZlTGlzdEVsZW1lbnRMZWZ0KGVkaXRvcikuc2hvdWxkU3RvcFByb3BhZ2F0aW9uO1xuICB9O1xuXG4gIHByaXZhdGUgbW92ZUxpc3RFbGVtZW50TGVmdCA9IChlZGl0b3I6IE15RWRpdG9yKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybU9wZXJhdGlvbi5wZXJmb3JtT3BlcmF0aW9uKFxuICAgICAgKHJvb3QpID0+IG5ldyBNb3ZlTGVmdE9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi9PcGVyYXRpb25cIjtcblxuaW1wb3J0IHsgUm9vdCwgbWF4UG9zLCBtaW5Qb3MgfSBmcm9tIFwiLi4vcm9vdFwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsT3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBzdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSB1cGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290OiBSb290KSB7fVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wUHJvcGFnYXRpb247XG4gIH1cblxuICBzaG91bGRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZDtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZVNlbGVjdGlvbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb25zKClbMF07XG4gICAgY29uc3QgW3Jvb3RTdGFydCwgcm9vdEVuZF0gPSByb290LmdldFJhbmdlKCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb25Gcm9tID0gbWluUG9zKHNlbGVjdGlvbi5hbmNob3IsIHNlbGVjdGlvbi5oZWFkKTtcbiAgICBjb25zdCBzZWxlY3Rpb25UbyA9IG1heFBvcyhzZWxlY3Rpb24uYW5jaG9yLCBzZWxlY3Rpb24uaGVhZCk7XG5cbiAgICBpZiAoXG4gICAgICBzZWxlY3Rpb25Gcm9tLmxpbmUgPCByb290U3RhcnQubGluZSB8fFxuICAgICAgc2VsZWN0aW9uVG8ubGluZSA+IHJvb3RFbmQubGluZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHNlbGVjdGlvbkZyb20ubGluZSA9PT0gcm9vdFN0YXJ0LmxpbmUgJiZcbiAgICAgIHNlbGVjdGlvbkZyb20uY2ggPT09IHJvb3RTdGFydC5jaCAmJlxuICAgICAgc2VsZWN0aW9uVG8ubGluZSA9PT0gcm9vdEVuZC5saW5lICYmXG4gICAgICBzZWxlY3Rpb25Uby5jaCA9PT0gcm9vdEVuZC5jaFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IGNvbnRlbnRTdGFydCA9IGxpc3QuZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0QWZ0ZXJDaGVja2JveCgpO1xuICAgIGNvbnN0IGNvbnRlbnRFbmQgPSBsaXN0LmdldExhc3RMaW5lQ29udGVudEVuZCgpO1xuXG4gICAgaWYgKFxuICAgICAgc2VsZWN0aW9uRnJvbS5saW5lIDwgY29udGVudFN0YXJ0LmxpbmUgfHxcbiAgICAgIHNlbGVjdGlvblRvLmxpbmUgPiBjb250ZW50RW5kLmxpbmVcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIGlmIChcbiAgICAgIHNlbGVjdGlvbkZyb20ubGluZSA9PT0gY29udGVudFN0YXJ0LmxpbmUgJiZcbiAgICAgIHNlbGVjdGlvbkZyb20uY2ggPT09IGNvbnRlbnRTdGFydC5jaCAmJlxuICAgICAgc2VsZWN0aW9uVG8ubGluZSA9PT0gY29udGVudEVuZC5saW5lICYmXG4gICAgICBzZWxlY3Rpb25Uby5jaCA9PT0gY29udGVudEVuZC5jaFxuICAgICkge1xuICAgICAgLy8gc2VsZWN0IHdob2xlIGxpc3RcbiAgICAgIHJvb3QucmVwbGFjZVNlbGVjdGlvbnMoW3sgYW5jaG9yOiByb290U3RhcnQsIGhlYWQ6IHJvb3RFbmQgfV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZWxlY3Qgd2hvbGUgbGluZVxuICAgICAgcm9vdC5yZXBsYWNlU2VsZWN0aW9ucyhbeyBhbmNob3I6IGNvbnRlbnRTdGFydCwgaGVhZDogY29udGVudEVuZCB9XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbl8yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCB7IGtleW1hcCB9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5cbmltcG9ydCB7IE15RWRpdG9yIH0gZnJvbSBcIi4uL015RWRpdG9yXCI7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL0ZlYXR1cmVcIjtcbmltcG9ydCB7IFNlbGVjdEFsbE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL1NlbGVjdEFsbE9wZXJhdGlvblwiO1xuaW1wb3J0IHsgSU1FU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JTUVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsRmVhdHVyZSBpbXBsZW1lbnRzIEZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW1lOiBJTUVTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2JzaWRpYW46IE9ic2lkaWFuU2VydmljZSxcbiAgICBwcml2YXRlIHBlcmZvcm1PcGVyYXRpb246IFBlcmZvcm1PcGVyYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyRWRpdG9yRXh0ZW5zaW9uKFxuICAgICAga2V5bWFwLm9mKFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJjLWFcIixcbiAgICAgICAgICBtYWM6IFwibS1hXCIsXG4gICAgICAgICAgcnVuOiB0aGlzLm9ic2lkaWFuLmNyZWF0ZUtleW1hcFJ1bkNhbGxiYWNrKHtcbiAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgcnVuOiB0aGlzLnJ1bixcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG5cbiAgcHJpdmF0ZSBjaGVjayA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zZWxlY3RBbGwgJiYgIXRoaXMuaW1lLmlzSU1FT3BlbmVkKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBydW4gPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1PcGVyYXRpb24ucGVyZm9ybU9wZXJhdGlvbihcbiAgICAgIChyb290KSA9PiBuZXcgU2VsZWN0QWxsT3BlcmF0aW9uKHJvb3QpLFxuICAgICAgZWRpdG9yXG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgeyBQb3NpdGlvbiwgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RUaWxsTGluZVN0YXJ0T3BlcmF0aW9uIGltcGxlbWVudHMgT3BlcmF0aW9uIHtcbiAgcHJpdmF0ZSBzdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSB1cGRhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290OiBSb290KSB7fVxuXG4gIHNob3VsZFN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wUHJvcGFnYXRpb247XG4gIH1cblxuICBzaG91bGRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZDtcbiAgfVxuXG4gIHBlcmZvcm0oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuXG4gICAgaWYgKCFyb290Lmhhc1NpbmdsZUN1cnNvcigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJzb3IgPSByb290LmdldEN1cnNvcigpO1xuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IGxpbmVzID0gbGlzdC5nZXRMaW5lc0luZm8oKTtcbiAgICBjb25zdCBsaW5lTm8gPSBsaW5lcy5maW5kSW5kZXgoKGwpID0+IGwuZnJvbS5saW5lID09PSBjdXJzb3IubGluZSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gbGluZU5vID09PSAwID8gbGlzdC5nZXRDaGVja2JveExlbmd0aCgpIDogMDtcblxuICAgIGNvbnN0IG5ld0hlYWQ6IFBvc2l0aW9uID0ge1xuICAgICAgY2g6IGxpbmVzW2xpbmVOb10uZnJvbS5jaCArIG9mZnNldCxcbiAgICAgIGxpbmU6IGxpbmVzW2xpbmVOb10uZnJvbS5saW5lLFxuICAgIH07XG5cbiAgICByb290LnJlcGxhY2VTZWxlY3Rpb25zKFt7IGhlYWQ6IG5ld0hlYWQsIGFuY2hvcjogY3Vyc29yIH1dKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luXzIgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHsga2V5bWFwIH0gZnJvbSBcIkBjb2RlbWlycm9yL3ZpZXdcIjtcblxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gXCIuL0ZlYXR1cmVcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IFNlbGVjdFRpbGxMaW5lU3RhcnRPcGVyYXRpb24gfSBmcm9tIFwiLi4vb3BlcmF0aW9ucy9TZWxlY3RUaWxsTGluZVN0YXJ0T3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBJTUVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0lNRVNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2lkaWFuU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2VcIjtcbmltcG9ydCB7IFBlcmZvcm1PcGVyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1BlcmZvcm1PcGVyYXRpb25TZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TaG91bGRJZ25vcmVCdWxsZXRzRmVhdHVyZSBpbXBsZW1lbnRzIEZlYXR1cmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbjogUGx1Z2luXzIsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW1lOiBJTUVTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2JzaWRpYW46IE9ic2lkaWFuU2VydmljZSxcbiAgICBwcml2YXRlIHBlcmZvcm1PcGVyYXRpb246IFBlcmZvcm1PcGVyYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyRWRpdG9yRXh0ZW5zaW9uKFxuICAgICAga2V5bWFwLm9mKFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJtLXMtQXJyb3dMZWZ0XCIsXG4gICAgICAgICAgcnVuOiB0aGlzLm9ic2lkaWFuLmNyZWF0ZUtleW1hcFJ1bkNhbGxiYWNrKHtcbiAgICAgICAgICAgIGNoZWNrOiB0aGlzLmNoZWNrLFxuICAgICAgICAgICAgcnVuOiB0aGlzLnJ1bixcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVubG9hZCgpIHt9XG5cbiAgcHJpdmF0ZSBjaGVjayA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGlja0N1cnNvciAhPSBcIm5ldmVyXCIgJiYgIXRoaXMuaW1lLmlzSU1FT3BlbmVkKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBydW4gPSAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1PcGVyYXRpb24ucGVyZm9ybU9wZXJhdGlvbihcbiAgICAgIChyb290KSA9PiBuZXcgU2VsZWN0VGlsbExpbmVTdGFydE9wZXJhdGlvbihyb290KSxcbiAgICAgIGVkaXRvclxuICAgICk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFBsdWdpbl8yLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9GZWF0dXJlXCI7XG5cbmltcG9ydCB7XG4gIExpc3RMaW5lQWN0aW9uLFxuICBTZXR0aW5nc1NlcnZpY2UsXG4gIFN0aWNrQ3Vyc29yLFxufSBmcm9tIFwiLi4vc2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlXCI7XG5cbmNsYXNzIE9ic2lkaWFuT3V0bGluZXJQbHVnaW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFBsdWdpbl8yLCBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UpIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkltcHJvdmUgdGhlIHN0eWxlIG9mIHlvdXIgbGlzdHNcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIlN0eWxlcyBhcmUgb25seSBjb21wYXRpYmxlIHdpdGggYnVpbHQtaW4gT2JzaWRpYW4gdGhlbWVzIGFuZCBtYXkgbm90IGJlIGNvbXBhdGlibGUgd2l0aCBvdGhlciB0aGVtZXMuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5zZXR0aW5ncy5zdHlsZUxpc3RzKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlTGlzdHMgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJEcmF3IHZlcnRpY2FsIGluZGVudGF0aW9uIGxpbmVzXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMuc2V0dGluZ3MubGlzdExpbmVzKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpc3RMaW5lcyA9IHZhbHVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3Muc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlZlcnRpY2FsIGluZGVudGF0aW9uIGxpbmUgY2xpY2sgYWN0aW9uXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAgICAgbm9uZTogXCJOb25lXCIsXG4gICAgICAgICAgICBcInpvb20taW5cIjogXCJab29tIEluXCIsXG4gICAgICAgICAgICBcInRvZ2dsZS1mb2xkaW5nXCI6IFwiVG9nZ2xlIEZvbGRpbmdcIixcbiAgICAgICAgICB9IGFzIHsgW2tleSBpbiBMaXN0TGluZUFjdGlvbl06IHN0cmluZyB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnNldHRpbmdzLmxpc3RMaW5lQWN0aW9uKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MubGlzdExpbmVBY3Rpb24gPSB2YWx1ZSBhcyBMaXN0TGluZUFjdGlvbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3Muc2F2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU3RpY2sgdGhlIGN1cnNvciB0byB0aGUgY29udGVudFwiKVxuICAgICAgLnNldERlc2MoXCJEb24ndCBsZXQgdGhlIGN1cnNvciBtb3ZlIHRvIHRoZSBidWxsZXQgcG9zaXRpb24uXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAgICAgbmV2ZXI6IFwiTmV2ZXJcIixcbiAgICAgICAgICAgIFwiYnVsbGV0LW9ubHlcIjogXCJTdGljayBjdXJzb3Igb3V0IG9mIGJ1bGxldHNcIixcbiAgICAgICAgICAgIFwiYnVsbGV0LWFuZC1jaGVja2JveFwiOiBcIlN0aWNrIGN1cnNvciBvdXQgb2YgYnVsbGV0cyBhbmQgY2hlY2tib3hlc1wiLFxuICAgICAgICAgIH0gYXMgeyBba2V5IGluIFN0aWNrQ3Vyc29yXTogc3RyaW5nIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMuc2V0dGluZ3Muc3RpY2tDdXJzb3IpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zdGlja0N1cnNvciA9IHZhbHVlIGFzIFN0aWNrQ3Vyc29yO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5zYXZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJFbmhhbmNlIHRoZSBFbnRlciBrZXlcIilcbiAgICAgIC5zZXREZXNjKFwiTWFrZSB0aGUgRW50ZXIga2V5IGJlaGF2ZSB0aGUgc2FtZSBhcyBvdGhlciBvdXRsaW5lcnMuXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMuc2V0dGluZ3MuYmV0dGVyRW50ZXIpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYmV0dGVyRW50ZXIgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJFbmhhbmNlIHRoZSBUYWIga2V5XCIpXG4gICAgICAuc2V0RGVzYyhcIk1ha2UgVGFiIGFuZCBTaGlmdC1UYWIgYmVoYXZlIHRoZSBzYW1lIGFzIG90aGVyIG91dGxpbmVycy5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5zZXR0aW5ncy5iZXR0ZXJUYWIpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYmV0dGVyVGFiID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiRW5oYW5jZSB0aGUgQ3RybCtBIG9yIENtZCtBIGJlaGF2aW9yXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJQcmVzcyB0aGUgaG90a2V5IG9uY2UgdG8gc2VsZWN0IHRoZSBjdXJyZW50IGxpc3QgaXRlbS4gUHJlc3MgdGhlIGhvdGtleSB0d2ljZSB0byBzZWxlY3QgdGhlIGVudGlyZSBsaXN0LlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMuc2V0dGluZ3Muc2VsZWN0QWxsKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLnNlbGVjdEFsbCA9IHZhbHVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3Muc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkRlYnVnIG1vZGVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIk9wZW4gRGV2VG9vbHMgKENvbW1hbmQrT3B0aW9uK0kgb3IgQ29udHJvbCtTaGlmdCtJKSB0byBjb3B5IHRoZSBkZWJ1ZyBsb2dzLlwiXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMuc2V0dGluZ3MuZGVidWcpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGVidWcgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NUYWJGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luOiBQbHVnaW5fMiwgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4uYWRkU2V0dGluZ1RhYihcbiAgICAgIG5ldyBPYnNpZGlhbk91dGxpbmVyUGx1Z2luU2V0dGluZ1RhYihcbiAgICAgICAgdGhpcy5wbHVnaW4uYXBwLFxuICAgICAgICB0aGlzLnBsdWdpbixcbiAgICAgICAgdGhpcy5zZXR0aW5nc1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bmxvYWQoKSB7fVxufVxuIiwiaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XG5cbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vcm9vdFwiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlTm90ZUxpbmVPcGVyYXRpb24gaW1wbGVtZW50cyBPcGVyYXRpb24ge1xuICBwcml2YXRlIHN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHVwZGF0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3Q6IFJvb3QpIHt9XG5cbiAgc2hvdWxkU3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3BQcm9wYWdhdGlvbjtcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVkO1xuICB9XG5cbiAgcGVyZm9ybSgpIHtcbiAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXM7XG5cbiAgICBpZiAoIXJvb3QuaGFzU2luZ2xlQ3Vyc29yKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJzb3IgPSByb290LmdldEN1cnNvcigpO1xuICAgIGNvbnN0IGxpc3QgPSByb290LmdldExpc3RVbmRlckN1cnNvcigpO1xuICAgIGNvbnN0IGxpbmVVbmRlckN1cnNvciA9IGxpc3RcbiAgICAgIC5nZXRMaW5lc0luZm8oKVxuICAgICAgLmZpbmQoKGwpID0+IGwuZnJvbS5saW5lID09PSBjdXJzb3IubGluZSk7XG5cbiAgICBpZiAoY3Vyc29yLmNoIDwgbGluZVVuZGVyQ3Vyc29yLmZyb20uY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAgIGlmICghbGlzdC5nZXROb3Rlc0luZGVudCgpKSB7XG4gICAgICBsaXN0LnNldE5vdGVzSW5kZW50KGxpc3QuZ2V0Rmlyc3RMaW5lSW5kZW50KCkgKyBcIiAgXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVzID0gbGlzdC5nZXRMaW5lc0luZm8oKS5yZWR1Y2UoKGFjYywgbGluZSkgPT4ge1xuICAgICAgaWYgKGN1cnNvci5saW5lID09PSBsaW5lLmZyb20ubGluZSkge1xuICAgICAgICBhY2MucHVzaChsaW5lLnRleHQuc2xpY2UoMCwgY3Vyc29yLmNoIC0gbGluZS5mcm9tLmNoKSk7XG4gICAgICAgIGFjYy5wdXNoKGxpbmUudGV4dC5zbGljZShjdXJzb3IuY2ggLSBsaW5lLmZyb20uY2gpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy5wdXNoKGxpbmUudGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10gYXMgc3RyaW5nW10pO1xuXG4gICAgbGlzdC5yZXBsYWNlTGluZXMobGluZXMpO1xuXG4gICAgcm9vdC5yZXBsYWNlQ3Vyc29yKHtcbiAgICAgIGxpbmU6IGN1cnNvci5saW5lICsgMSxcbiAgICAgIGNoOiBsaXN0LmdldE5vdGVzSW5kZW50KCkubGVuZ3RoLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5fMiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBrZXltYXAgfSBmcm9tIFwiQGNvZGVtaXJyb3Ivdmlld1wiO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4vRmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBNeUVkaXRvciB9IGZyb20gXCIuLi9NeUVkaXRvclwiO1xuaW1wb3J0IHsgQ3JlYXRlTm90ZUxpbmVPcGVyYXRpb24gfSBmcm9tIFwiLi4vb3BlcmF0aW9ucy9DcmVhdGVOb3RlTGluZU9wZXJhdGlvblwiO1xuaW1wb3J0IHsgSU1FU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9JTUVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvT2JzaWRpYW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9QZXJmb3JtT3BlcmF0aW9uU2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NldHRpbmdzU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgU2hpZnRFbnRlclNob3VsZENyZWF0ZU5vdGVGZWF0dXJlIGltcGxlbWVudHMgRmVhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luOiBQbHVnaW5fMixcbiAgICBwcml2YXRlIG9ic2lkaWFuOiBPYnNpZGlhblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW1lOiBJTUVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVyZm9ybU9wZXJhdGlvbjogUGVyZm9ybU9wZXJhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFZGl0b3JFeHRlbnNpb24oXG4gICAgICBrZXltYXAub2YoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInMtRW50ZXJcIixcbiAgICAgICAgICBydW46IHRoaXMub2JzaWRpYW4uY3JlYXRlS2V5bWFwUnVuQ2FsbGJhY2soe1xuICAgICAgICAgICAgY2hlY2s6IHRoaXMuY2hlY2ssXG4gICAgICAgICAgICBydW46IHRoaXMucnVuLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgdW5sb2FkKCkge31cblxuICBwcml2YXRlIGNoZWNrID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmJldHRlckVudGVyICYmICF0aGlzLmltZS5pc0lNRU9wZW5lZCgpO1xuICB9O1xuXG4gIHByaXZhdGUgcnVuID0gKGVkaXRvcjogTXlFZGl0b3IpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtT3BlcmF0aW9uLnBlcmZvcm1PcGVyYXRpb24oXG4gICAgICAocm9vdCkgPT4gbmV3IENyZWF0ZU5vdGVMaW5lT3BlcmF0aW9uKHJvb3QpLFxuICAgICAgZWRpdG9yXG4gICAgKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgQXBwbHlDaGFuZ2VzRWRpdG9yUG9zaXRpb24ge1xuICBsaW5lOiBudW1iZXI7XG4gIGNoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbHlDaGFuZ2VzRWRpdG9yU2VsZWN0aW9uIHtcbiAgYW5jaG9yOiBBcHBseUNoYW5nZXNFZGl0b3JQb3NpdGlvbjtcbiAgaGVhZDogQXBwbHlDaGFuZ2VzRWRpdG9yUG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbHlDaGFuZ2VzRWRpdG9yIHtcbiAgZ2V0UmFuZ2UoXG4gICAgZnJvbTogQXBwbHlDaGFuZ2VzRWRpdG9yUG9zaXRpb24sXG4gICAgdG86IEFwcGx5Q2hhbmdlc0VkaXRvclBvc2l0aW9uXG4gICk6IHN0cmluZztcbiAgcmVwbGFjZVJhbmdlKFxuICAgIHJlcGxhY2VtZW50OiBzdHJpbmcsXG4gICAgZnJvbTogQXBwbHlDaGFuZ2VzRWRpdG9yUG9zaXRpb24sXG4gICAgdG86IEFwcGx5Q2hhbmdlc0VkaXRvclBvc2l0aW9uXG4gICk6IHZvaWQ7XG4gIHNldFNlbGVjdGlvbnMoc2VsZWN0aW9uczogQXBwbHlDaGFuZ2VzRWRpdG9yU2VsZWN0aW9uW10pOiB2b2lkO1xuICBmb2xkKG46IG51bWJlcik6IHZvaWQ7XG4gIHVuZm9sZChuOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGx5Q2hhbmdlc0xpc3Qge1xuICBpc0ZvbGRSb290KCk6IGJvb2xlYW47XG4gIGdldENoaWxkcmVuKCk6IEFwcGx5Q2hhbmdlc0xpc3RbXTtcbiAgZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0KCk6IHsgbGluZTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbHlDaGFuZ2VzUm9vdCB7XG4gIGdldFJhbmdlKCk6IFtBcHBseUNoYW5nZXNFZGl0b3JQb3NpdGlvbiwgQXBwbHlDaGFuZ2VzRWRpdG9yUG9zaXRpb25dO1xuICBnZXRTZWxlY3Rpb25zKCk6IHtcbiAgICBhbmNob3I6IEFwcGx5Q2hhbmdlc0VkaXRvclBvc2l0aW9uO1xuICAgIGhlYWQ6IEFwcGx5Q2hhbmdlc0VkaXRvclBvc2l0aW9uO1xuICB9W107XG4gIHByaW50KCk6IHN0cmluZztcbiAgZ2V0Q2hpbGRyZW4oKTogQXBwbHlDaGFuZ2VzTGlzdFtdO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbHlDaGFuZ2VzU2VydmljZSB7XG4gIGFwcGx5Q2hhbmdlcyhlZGl0b3I6IEFwcGx5Q2hhbmdlc0VkaXRvciwgcm9vdDogQXBwbHlDaGFuZ2VzUm9vdCkge1xuICAgIGNvbnN0IHJvb3RSYW5nZSA9IHJvb3QuZ2V0UmFuZ2UoKTtcbiAgICBjb25zdCBvbGRTdHJpbmcgPSBlZGl0b3IuZ2V0UmFuZ2Uocm9vdFJhbmdlWzBdLCByb290UmFuZ2VbMV0pO1xuICAgIGNvbnN0IG5ld1N0cmluZyA9IHJvb3QucHJpbnQoKTtcblxuICAgIGNvbnN0IGZyb21MaW5lID0gcm9vdFJhbmdlWzBdLmxpbmU7XG4gICAgY29uc3QgdG9MaW5lID0gcm9vdFJhbmdlWzFdLmxpbmU7XG5cbiAgICBmb3IgKGxldCBsID0gZnJvbUxpbmU7IGwgPD0gdG9MaW5lOyBsKyspIHtcbiAgICAgIGVkaXRvci51bmZvbGQobCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRnJvbSA9IHsgLi4ucm9vdFJhbmdlWzBdIH07XG4gICAgY29uc3QgY2hhbmdlVG8gPSB7IC4uLnJvb3RSYW5nZVsxXSB9O1xuICAgIGxldCBvbGRUbXAgPSBvbGRTdHJpbmc7XG4gICAgbGV0IG5ld1RtcCA9IG5ld1N0cmluZztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgbmxJbmRleCA9IG9sZFRtcC5sYXN0SW5kZXhPZihcIlxcblwiKTtcbiAgICAgIGlmIChubEluZGV4IDwgMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZExpbmUgPSBvbGRUbXAuc2xpY2UobmxJbmRleCk7XG4gICAgICBjb25zdCBuZXdMaW5lID0gbmV3VG1wLnNsaWNlKC1vbGRMaW5lLmxlbmd0aCk7XG4gICAgICBpZiAob2xkTGluZSAhPT0gbmV3TGluZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG9sZFRtcCA9IG9sZFRtcC5zbGljZSgwLCAtb2xkTGluZS5sZW5ndGgpO1xuICAgICAgbmV3VG1wID0gbmV3VG1wLnNsaWNlKDAsIC1vbGRMaW5lLmxlbmd0aCk7XG5cbiAgICAgIGNvbnN0IG5sSW5kZXgyID0gb2xkVG1wLmxhc3RJbmRleE9mKFwiXFxuXCIpO1xuICAgICAgY2hhbmdlVG8uY2ggPVxuICAgICAgICBubEluZGV4MiA+PSAwID8gb2xkVG1wLmxlbmd0aCAtIG5sSW5kZXgyIC0gMSA6IG9sZFRtcC5sZW5ndGg7XG4gICAgICBjaGFuZ2VUby5saW5lLS07XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgbmxJbmRleCA9IG9sZFRtcC5pbmRleE9mKFwiXFxuXCIpO1xuICAgICAgaWYgKG5sSW5kZXggPCAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2xkTGluZSA9IG9sZFRtcC5zbGljZSgwLCBubEluZGV4ICsgMSk7XG4gICAgICBjb25zdCBuZXdMaW5lID0gbmV3VG1wLnNsaWNlKDAsIG9sZExpbmUubGVuZ3RoKTtcbiAgICAgIGlmIChvbGRMaW5lICE9PSBuZXdMaW5lKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2hhbmdlRnJvbS5saW5lKys7XG4gICAgICBvbGRUbXAgPSBvbGRUbXAuc2xpY2Uob2xkTGluZS5sZW5ndGgpO1xuICAgICAgbmV3VG1wID0gbmV3VG1wLnNsaWNlKG9sZExpbmUubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAob2xkVG1wICE9PSBuZXdUbXApIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlUmFuZ2UobmV3VG1wLCBjaGFuZ2VGcm9tLCBjaGFuZ2VUbyk7XG4gICAgfVxuXG4gICAgZWRpdG9yLnNldFNlbGVjdGlvbnMocm9vdC5nZXRTZWxlY3Rpb25zKCkpO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlKGxpc3Q6IEFwcGx5Q2hhbmdlc0xpc3QpIHtcbiAgICAgIGZvciAoY29uc3QgYyBvZiBsaXN0LmdldENoaWxkcmVuKCkpIHtcbiAgICAgICAgcmVjdXJzaXZlKGMpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3QuaXNGb2xkUm9vdCgpKSB7XG4gICAgICAgIGVkaXRvci5mb2xkKGxpc3QuZ2V0Rmlyc3RMaW5lQ29udGVudFN0YXJ0KCkubGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgYyBvZiByb290LmdldENoaWxkcmVuKCkpIHtcbiAgICAgIHJlY3Vyc2l2ZShjKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmV4cG9ydCBjbGFzcyBJTUVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb21wb3NpdGlvbiA9IGZhbHNlO1xuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIiwgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQpO1xuICB9XG5cbiAgYXN5bmMgdW5sb2FkKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsIHRoaXMub25Db21wb3NpdGlvblN0YXJ0KTtcbiAgfVxuXG4gIGlzSU1FT3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvc2l0aW9uICYmIFBsYXRmb3JtLmlzRGVza3RvcDtcbiAgfVxuXG4gIHByaXZhdGUgb25Db21wb3NpdGlvblN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuY29tcG9zaXRpb24gPSB0cnVlO1xuICB9O1xuXG4gIHByaXZhdGUgb25Db21wb3NpdGlvbkVuZCA9ICgpID0+IHtcbiAgICB0aGlzLmNvbXBvc2l0aW9uID0gZmFsc2U7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9TZXR0aW5nc1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UpIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgbG9nKG1ldGhvZDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncy5kZWJ1Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuaW5mbyhtZXRob2QsIC4uLmFyZ3MpO1xuICB9XG5cbiAgYmluZChtZXRob2Q6IHN0cmluZykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gdGhpcy5sb2cobWV0aG9kLCAuLi5hcmdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIGVkaXRvckluZm9GaWVsZCB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gXCJAY29kZW1pcnJvci9zdGF0ZVwiO1xuaW1wb3J0IHsgRWRpdG9yVmlldyB9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5cbmltcG9ydCB7IE15RWRpdG9yIH0gZnJvbSBcIi4uL015RWRpdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzaWRpYW5UYWJzU2V0dGluZ3Mge1xuICB1c2VUYWI6IGJvb2xlYW47XG4gIHRhYlNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYnNpZGlhbkZvbGRTZXR0aW5ncyB7XG4gIGZvbGRJbmRlbnQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNpZGlhblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7fVxuXG4gIGlzTGVnYWN5RWRpdG9yRW5hYmxlZCgpIHtcbiAgICBjb25zdCBjb25maWc6IHsgbGVnYWN5RWRpdG9yOiBib29sZWFuIH0gPSB7XG4gICAgICBsZWdhY3lFZGl0b3I6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIC4uLih0aGlzLmFwcC52YXVsdCBhcyBhbnkpLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbmZpZy5sZWdhY3lFZGl0b3I7XG4gIH1cblxuICBpc0RlZmF1bHRUaGVtZUVuYWJsZWQoKSB7XG4gICAgY29uc3QgY29uZmlnOiB7IGNzc1RoZW1lOiBzdHJpbmcgfSA9IHtcbiAgICAgIGNzc1RoZW1lOiBcIlwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIC4uLih0aGlzLmFwcC52YXVsdCBhcyBhbnkpLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbmZpZy5jc3NUaGVtZSA9PT0gXCJcIjtcbiAgfVxuXG4gIGdldE9ic2lkaWFuVGFic1NldHRpbmdzKCk6IE9ic2lkaWFuVGFic1NldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlVGFiOiB0cnVlLFxuICAgICAgdGFiU2l6ZTogNCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAuLi4odGhpcy5hcHAudmF1bHQgYXMgYW55KS5jb25maWcsXG4gICAgfTtcbiAgfVxuXG4gIGdldE9ic2lkaWFuRm9sZFNldHRpbmdzKCk6IE9ic2lkaWFuRm9sZFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9sZEluZGVudDogdHJ1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAuLi4odGhpcy5hcHAudmF1bHQgYXMgYW55KS5jb25maWcsXG4gICAgfTtcbiAgfVxuXG4gIGdldERlZmF1bHRJbmRlbnRDaGFycygpIHtcbiAgICBjb25zdCB7IHVzZVRhYiwgdGFiU2l6ZSB9ID0gdGhpcy5nZXRPYnNpZGlhblRhYnNTZXR0aW5ncygpO1xuXG4gICAgcmV0dXJuIHVzZVRhYiA/IFwiXFx0XCIgOiBuZXcgQXJyYXkodGFiU2l6ZSkuZmlsbChcIiBcIikuam9pbihcIlwiKTtcbiAgfVxuXG4gIGdldEVkaXRvckZyb21TdGF0ZShzdGF0ZTogRWRpdG9yU3RhdGUpIHtcbiAgICByZXR1cm4gbmV3IE15RWRpdG9yKHN0YXRlLmZpZWxkKGVkaXRvckluZm9GaWVsZCkuZWRpdG9yKTtcbiAgfVxuXG4gIGNyZWF0ZUtleW1hcFJ1bkNhbGxiYWNrKGNvbmZpZzoge1xuICAgIGNoZWNrPzogKGVkaXRvcjogTXlFZGl0b3IpID0+IGJvb2xlYW47XG4gICAgcnVuOiAoZWRpdG9yOiBNeUVkaXRvcikgPT4ge1xuICAgICAgc2hvdWxkVXBkYXRlOiBib29sZWFuO1xuICAgICAgc2hvdWxkU3RvcFByb3BhZ2F0aW9uOiBib29sZWFuO1xuICAgIH07XG4gIH0pIHtcbiAgICBjb25zdCBjaGVjayA9IGNvbmZpZy5jaGVjayB8fCAoKCkgPT4gdHJ1ZSk7XG4gICAgY29uc3QgeyBydW4gfSA9IGNvbmZpZztcblxuICAgIHJldHVybiAodmlldzogRWRpdG9yVmlldyk6IGJvb2xlYW4gPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5nZXRFZGl0b3JGcm9tU3RhdGUodmlldy5zdGF0ZSk7XG5cbiAgICAgIGlmICghY2hlY2soZWRpdG9yKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgc2hvdWxkVXBkYXRlLCBzaG91bGRTdG9wUHJvcGFnYXRpb24gfSA9IHJ1bihlZGl0b3IpO1xuXG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlIHx8IHNob3VsZFN0b3BQcm9wYWdhdGlvbjtcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlRWRpdG9yQ2FsbGJhY2soY2I6IChlZGl0b3I6IE15RWRpdG9yKSA9PiBib29sZWFuKSB7XG4gICAgcmV0dXJuIChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgICAgY29uc3QgbXlFZGl0b3IgPSBuZXcgTXlFZGl0b3IoZWRpdG9yKTtcbiAgICAgIGNvbnN0IHNob3VsZFN0b3BQcm9wYWdhdGlvbiA9IGNiKG15RWRpdG9yKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhc2hvdWxkU3RvcFByb3BhZ2F0aW9uICYmXG4gICAgICAgIHdpbmRvdy5ldmVudCAmJlxuICAgICAgICB3aW5kb3cuZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCJcbiAgICAgICkge1xuICAgICAgICBteUVkaXRvci50cmlnZ2VyT25LZXlEb3duKHdpbmRvdy5ldmVudCBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9TZXR0aW5nc1NlcnZpY2VcIjtcblxuaW1wb3J0IHsgTGlzdCwgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2dlclNlcnZpY2VcIjtcbmltcG9ydCB7IGNoZWNrYm94UmUgfSBmcm9tIFwiLi4vdXRpbHMvY2hlY2tib3hSZVwiO1xuXG5jb25zdCBidWxsZXRTaWduUmUgPSBgKD86Wy0qK118XFxcXGQrXFxcXC4pYDtcbmNvbnN0IG9wdGlvbmFsQ2hlY2tib3hSZSA9IGAoPzoke2NoZWNrYm94UmV9KT9gO1xuXG5jb25zdCBsaXN0SXRlbVdpdGhvdXRTcGFjZXNSZSA9IG5ldyBSZWdFeHAoYF4ke2J1bGxldFNpZ25SZX0oIHxcXHQpYCk7XG5jb25zdCBsaXN0SXRlbVJlID0gbmV3IFJlZ0V4cChgXlsgXFx0XSoke2J1bGxldFNpZ25SZX0oIHxcXHQpYCk7XG5jb25zdCBzdHJpbmdXaXRoU3BhY2VzUmUgPSBuZXcgUmVnRXhwKGBeWyBcXHRdK2ApO1xuY29uc3QgcGFyc2VMaXN0SXRlbVJlID0gbmV3IFJlZ0V4cChcbiAgYF4oWyBcXHRdKikoJHtidWxsZXRTaWduUmV9KSggfFxcdCkoJHtvcHRpb25hbENoZWNrYm94UmV9KSguKikkYFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJQb3NpdGlvbiB7XG4gIGxpbmU6IG51bWJlcjtcbiAgY2g6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXJTZWxlY3Rpb24ge1xuICBhbmNob3I6IFJlYWRlclBvc2l0aW9uO1xuICBoZWFkOiBSZWFkZXJQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWFkZXIge1xuICBnZXRDdXJzb3IoKTogUmVhZGVyUG9zaXRpb247XG4gIGdldExpbmUobjogbnVtYmVyKTogc3RyaW5nO1xuICBsYXN0TGluZSgpOiBudW1iZXI7XG4gIGxpc3RTZWxlY3Rpb25zKCk6IFJlYWRlclNlbGVjdGlvbltdO1xuICBnZXRBbGxGb2xkZWRMaW5lcygpOiBudW1iZXJbXTtcbn1cblxuaW50ZXJmYWNlIFBhcnNlTGlzdExpc3Qge1xuICBnZXRGaXJzdExpbmVJbmRlbnQoKTogc3RyaW5nO1xuICBzZXROb3Rlc0luZGVudChub3Rlc0luZGVudDogc3RyaW5nKTogdm9pZDtcbiAgZ2V0Tm90ZXNJbmRlbnQoKTogc3RyaW5nIHwgbnVsbDtcbiAgYWRkTGluZSh0ZXh0OiBzdHJpbmcpOiB2b2lkO1xuICBnZXRQYXJlbnQoKTogUGFyc2VMaXN0TGlzdCB8IG51bGw7XG4gIGFkZEFmdGVyQWxsKGxpc3Q6IFBhcnNlTGlzdExpc3QpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZVxuICApIHt9XG5cbiAgcGFyc2VSYW5nZShlZGl0b3I6IFJlYWRlciwgZnJvbUxpbmUgPSAwLCB0b0xpbmUgPSBlZGl0b3IubGFzdExpbmUoKSk6IFJvb3RbXSB7XG4gICAgY29uc3QgbGlzdHM6IFJvb3RbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGZyb21MaW5lOyBpIDw9IHRvTGluZTsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gZWRpdG9yLmdldExpbmUoaSk7XG5cbiAgICAgIGlmIChpID09PSBmcm9tTGluZSB8fCB0aGlzLmlzTGlzdEl0ZW0obGluZSkpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMucGFyc2VXaXRoTGltaXRzKGVkaXRvciwgaSwgZnJvbUxpbmUsIHRvTGluZSk7XG5cbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICBsaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgICAgIGkgPSBsaXN0LmdldFJhbmdlKClbMV0ubGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0cztcbiAgfVxuXG4gIHBhcnNlKGVkaXRvcjogUmVhZGVyLCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKCkpOiBSb290IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VXaXRoTGltaXRzKGVkaXRvciwgY3Vyc29yLmxpbmUsIDAsIGVkaXRvci5sYXN0TGluZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VXaXRoTGltaXRzKFxuICAgIGVkaXRvcjogUmVhZGVyLFxuICAgIHBhcnNpbmdTdGFydExpbmU6IG51bWJlcixcbiAgICBsaW1pdEZyb206IG51bWJlcixcbiAgICBsaW1pdFRvOiBudW1iZXJcbiAgKTogUm9vdCB8IG51bGwge1xuICAgIGNvbnN0IGQgPSB0aGlzLmxvZ2dlci5iaW5kKFwicGFyc2VMaXN0XCIpO1xuICAgIGNvbnN0IGVycm9yID0gKG1zZzogc3RyaW5nKTogbnVsbCA9PiB7XG4gICAgICBkKG1zZyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgY29uc3QgbGluZSA9IGVkaXRvci5nZXRMaW5lKHBhcnNpbmdTdGFydExpbmUpO1xuXG4gICAgbGV0IGxpc3RMb29raW5nUG9zOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmlzTGlzdEl0ZW0obGluZSkpIHtcbiAgICAgIGxpc3RMb29raW5nUG9zID0gcGFyc2luZ1N0YXJ0TGluZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNMaW5lV2l0aEluZGVudChsaW5lKSkge1xuICAgICAgbGV0IGxpc3RMb29raW5nUG9zU2VhcmNoID0gcGFyc2luZ1N0YXJ0TGluZSAtIDE7XG4gICAgICB3aGlsZSAobGlzdExvb2tpbmdQb3NTZWFyY2ggPj0gMCkge1xuICAgICAgICBjb25zdCBsaW5lID0gZWRpdG9yLmdldExpbmUobGlzdExvb2tpbmdQb3NTZWFyY2gpO1xuICAgICAgICBpZiAodGhpcy5pc0xpc3RJdGVtKGxpbmUpKSB7XG4gICAgICAgICAgbGlzdExvb2tpbmdQb3MgPSBsaXN0TG9va2luZ1Bvc1NlYXJjaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTGluZVdpdGhJbmRlbnQobGluZSkpIHtcbiAgICAgICAgICBsaXN0TG9va2luZ1Bvc1NlYXJjaC0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpc3RMb29raW5nUG9zID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsaXN0U3RhcnRMaW5lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgbGlzdFN0YXJ0TGluZUxvb2t1cCA9IGxpc3RMb29raW5nUG9zO1xuICAgIHdoaWxlIChsaXN0U3RhcnRMaW5lTG9va3VwID49IDApIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBlZGl0b3IuZ2V0TGluZShsaXN0U3RhcnRMaW5lTG9va3VwKTtcbiAgICAgIGlmICghdGhpcy5pc0xpc3RJdGVtKGxpbmUpICYmICF0aGlzLmlzTGluZVdpdGhJbmRlbnQobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0xpc3RJdGVtV2l0aG91dFNwYWNlcyhsaW5lKSkge1xuICAgICAgICBsaXN0U3RhcnRMaW5lID0gbGlzdFN0YXJ0TGluZUxvb2t1cDtcbiAgICAgICAgaWYgKGxpc3RTdGFydExpbmVMb29rdXAgPD0gbGltaXRGcm9tKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3RTdGFydExpbmVMb29rdXAtLTtcbiAgICB9XG5cbiAgICBpZiAobGlzdFN0YXJ0TGluZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxpc3RFbmRMaW5lID0gbGlzdExvb2tpbmdQb3M7XG4gICAgbGV0IGxpc3RFbmRMaW5lTG9va3VwID0gbGlzdExvb2tpbmdQb3M7XG4gICAgd2hpbGUgKGxpc3RFbmRMaW5lTG9va3VwIDw9IGVkaXRvci5sYXN0TGluZSgpKSB7XG4gICAgICBjb25zdCBsaW5lID0gZWRpdG9yLmdldExpbmUobGlzdEVuZExpbmVMb29rdXApO1xuICAgICAgaWYgKCF0aGlzLmlzTGlzdEl0ZW0obGluZSkgJiYgIXRoaXMuaXNMaW5lV2l0aEluZGVudChsaW5lKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc0VtcHR5TGluZShsaW5lKSkge1xuICAgICAgICBsaXN0RW5kTGluZSA9IGxpc3RFbmRMaW5lTG9va3VwO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3RFbmRMaW5lTG9va3VwID49IGxpbWl0VG8pIHtcbiAgICAgICAgbGlzdEVuZExpbmUgPSBsaW1pdFRvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGxpc3RFbmRMaW5lTG9va3VwKys7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RTdGFydExpbmUgPiBwYXJzaW5nU3RhcnRMaW5lIHx8IGxpc3RFbmRMaW5lIDwgcGFyc2luZ1N0YXJ0TGluZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IG5ldyBSb290KFxuICAgICAgeyBsaW5lOiBsaXN0U3RhcnRMaW5lLCBjaDogMCB9LFxuICAgICAgeyBsaW5lOiBsaXN0RW5kTGluZSwgY2g6IGVkaXRvci5nZXRMaW5lKGxpc3RFbmRMaW5lKS5sZW5ndGggfSxcbiAgICAgIGVkaXRvci5saXN0U2VsZWN0aW9ucygpLm1hcCgocikgPT4gKHtcbiAgICAgICAgYW5jaG9yOiB7IGxpbmU6IHIuYW5jaG9yLmxpbmUsIGNoOiByLmFuY2hvci5jaCB9LFxuICAgICAgICBoZWFkOiB7IGxpbmU6IHIuaGVhZC5saW5lLCBjaDogci5oZWFkLmNoIH0sXG4gICAgICB9KSlcbiAgICApO1xuXG4gICAgbGV0IGN1cnJlbnRQYXJlbnQ6IFBhcnNlTGlzdExpc3QgPSByb290LmdldFJvb3RMaXN0KCk7XG4gICAgbGV0IGN1cnJlbnRMaXN0OiBQYXJzZUxpc3RMaXN0IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRJbmRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgZm9sZGVkTGluZXMgPSBlZGl0b3IuZ2V0QWxsRm9sZGVkTGluZXMoKTtcblxuICAgIGZvciAobGV0IGwgPSBsaXN0U3RhcnRMaW5lOyBsIDw9IGxpc3RFbmRMaW5lOyBsKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBlZGl0b3IuZ2V0TGluZShsKTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBwYXJzZUxpc3RJdGVtUmUuZXhlYyhsaW5lKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgWywgaW5kZW50LCBidWxsZXQsIHNwYWNlQWZ0ZXJCdWxsZXRdID0gbWF0Y2hlcztcbiAgICAgICAgbGV0IFssICwgLCAsIG9wdGlvbmFsQ2hlY2tib3gsIGNvbnRlbnRdID0gbWF0Y2hlcztcblxuICAgICAgICBjb250ZW50ID0gb3B0aW9uYWxDaGVja2JveCArIGNvbnRlbnQ7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnN0aWNrQ3Vyc29yICE9IFwiYnVsbGV0LWFuZC1jaGVja2JveFwiKSB7XG4gICAgICAgICAgb3B0aW9uYWxDaGVja2JveCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wYXJlTGVuZ3RoID0gTWF0aC5taW4oY3VycmVudEluZGVudC5sZW5ndGgsIGluZGVudC5sZW5ndGgpO1xuICAgICAgICBjb25zdCBpbmRlbnRTbGljZSA9IGluZGVudC5zbGljZSgwLCBjb21wYXJlTGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGVudFNsaWNlID0gY3VycmVudEluZGVudC5zbGljZSgwLCBjb21wYXJlTGVuZ3RoKTtcblxuICAgICAgICBpZiAoaW5kZW50U2xpY2UgIT09IGN1cnJlbnRJbmRlbnRTbGljZSkge1xuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gY3VycmVudEluZGVudFNsaWNlXG4gICAgICAgICAgICAucmVwbGFjZSgvIC9nLCBcIlNcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgXCJUXCIpO1xuICAgICAgICAgIGNvbnN0IGdvdCA9IGluZGVudFNsaWNlLnJlcGxhY2UoLyAvZywgXCJTXCIpLnJlcGxhY2UoL1xcdC9nLCBcIlRcIik7XG5cbiAgICAgICAgICByZXR1cm4gZXJyb3IoXG4gICAgICAgICAgICBgVW5hYmxlIHRvIHBhcnNlIGxpc3Q6IGV4cGVjdGVkIGluZGVudCBcIiR7ZXhwZWN0ZWR9XCIsIGdvdCBcIiR7Z290fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZW50Lmxlbmd0aCA+IGN1cnJlbnRJbmRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgY3VycmVudFBhcmVudCA9IGN1cnJlbnRMaXN0O1xuICAgICAgICAgIGN1cnJlbnRJbmRlbnQgPSBpbmRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZW50Lmxlbmd0aCA8IGN1cnJlbnRJbmRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgY3VycmVudFBhcmVudC5nZXRGaXJzdExpbmVJbmRlbnQoKS5sZW5ndGggPj0gaW5kZW50Lmxlbmd0aCAmJlxuICAgICAgICAgICAgY3VycmVudFBhcmVudC5nZXRQYXJlbnQoKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IGN1cnJlbnRQYXJlbnQuZ2V0UGFyZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRJbmRlbnQgPSBpbmRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb2xkUm9vdCA9IGZvbGRlZExpbmVzLmluY2x1ZGVzKGwpO1xuXG4gICAgICAgIGN1cnJlbnRMaXN0ID0gbmV3IExpc3QoXG4gICAgICAgICAgcm9vdCxcbiAgICAgICAgICBpbmRlbnQsXG4gICAgICAgICAgYnVsbGV0LFxuICAgICAgICAgIG9wdGlvbmFsQ2hlY2tib3gsXG4gICAgICAgICAgc3BhY2VBZnRlckJ1bGxldCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIGZvbGRSb290XG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRQYXJlbnQuYWRkQWZ0ZXJBbGwoY3VycmVudExpc3QpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTGluZVdpdGhJbmRlbnQobGluZSkpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50TGlzdCkge1xuICAgICAgICAgIHJldHVybiBlcnJvcihcbiAgICAgICAgICAgIGBVbmFibGUgdG8gcGFyc2UgbGlzdDogZXhwZWN0ZWQgbGlzdCBpdGVtLCBnb3QgZW1wdHkgbGluZWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZW50VG9DaGVjayA9IGN1cnJlbnRMaXN0LmdldE5vdGVzSW5kZW50KCkgfHwgY3VycmVudEluZGVudDtcblxuICAgICAgICBpZiAobGluZS5pbmRleE9mKGluZGVudFRvQ2hlY2spICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBpbmRlbnRUb0NoZWNrLnJlcGxhY2UoLyAvZywgXCJTXCIpLnJlcGxhY2UoL1xcdC9nLCBcIlRcIik7XG4gICAgICAgICAgY29uc3QgZ290ID0gbGluZVxuICAgICAgICAgICAgLm1hdGNoKC9eWyBcXHRdKi8pWzBdXG4gICAgICAgICAgICAucmVwbGFjZSgvIC9nLCBcIlNcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgXCJUXCIpO1xuXG4gICAgICAgICAgcmV0dXJuIGVycm9yKFxuICAgICAgICAgICAgYFVuYWJsZSB0byBwYXJzZSBsaXN0OiBleHBlY3RlZCBpbmRlbnQgXCIke2V4cGVjdGVkfVwiLCBnb3QgXCIke2dvdH1cImBcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50TGlzdC5nZXROb3Rlc0luZGVudCgpKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15bIFxcdF0rLyk7XG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlc1swXS5sZW5ndGggPD0gY3VycmVudEluZGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICgvXlxccyskLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXG4gICAgICAgICAgICAgIGBVbmFibGUgdG8gcGFyc2UgbGlzdDogZXhwZWN0ZWQgc29tZSBpbmRlbnQsIGdvdCBubyBpbmRlbnRgXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1cnJlbnRMaXN0LnNldE5vdGVzSW5kZW50KG1hdGNoZXNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudExpc3QuYWRkTGluZShsaW5lLnNsaWNlKGN1cnJlbnRMaXN0LmdldE5vdGVzSW5kZW50KCkubGVuZ3RoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyb3IoXG4gICAgICAgICAgYFVuYWJsZSB0byBwYXJzZSBsaXN0OiBleHBlY3RlZCBsaXN0IGl0ZW0gb3Igbm90ZSwgZ290IFwiJHtsaW5lfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5TGluZShsaW5lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbGluZS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIGlzTGluZVdpdGhJbmRlbnQobGluZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZ1dpdGhTcGFjZXNSZS50ZXN0KGxpbmUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xpc3RJdGVtKGxpbmU6IHN0cmluZykge1xuICAgIHJldHVybiBsaXN0SXRlbVJlLnRlc3QobGluZSk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlzdEl0ZW1XaXRob3V0U3BhY2VzKGxpbmU6IHN0cmluZykge1xuICAgIHJldHVybiBsaXN0SXRlbVdpdGhvdXRTcGFjZXNSZS50ZXN0KGxpbmUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBseUNoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIi4vQXBwbHlDaGFuZ2VzU2VydmljZVwiO1xuaW1wb3J0IHsgUGFyc2VyU2VydmljZSB9IGZyb20gXCIuL1BhcnNlclNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTXlFZGl0b3IgfSBmcm9tIFwiLi4vTXlFZGl0b3JcIjtcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuLi9vcGVyYXRpb25zL09wZXJhdGlvblwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi9yb290XCI7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFyc2VyOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwbHlDaGFuZ2VzOiBBcHBseUNoYW5nZXNTZXJ2aWNlXG4gICkge31cblxuICBldmFsT3BlcmF0aW9uKHJvb3Q6IFJvb3QsIG9wOiBPcGVyYXRpb24sIGVkaXRvcjogTXlFZGl0b3IpIHtcbiAgICBvcC5wZXJmb3JtKCk7XG5cbiAgICBpZiAob3Auc2hvdWxkVXBkYXRlKCkpIHtcbiAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzLmFwcGx5Q2hhbmdlcyhlZGl0b3IsIHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzaG91bGRVcGRhdGU6IG9wLnNob3VsZFVwZGF0ZSgpLFxuICAgICAgc2hvdWxkU3RvcFByb3BhZ2F0aW9uOiBvcC5zaG91bGRTdG9wUHJvcGFnYXRpb24oKSxcbiAgICB9O1xuICB9XG5cbiAgcGVyZm9ybU9wZXJhdGlvbihcbiAgICBjYjogKHJvb3Q6IFJvb3QpID0+IE9wZXJhdGlvbixcbiAgICBlZGl0b3I6IE15RWRpdG9yLFxuICAgIGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKVxuICApIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5wYXJzZXIucGFyc2UoZWRpdG9yLCBjdXJzb3IpO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm4geyBzaG91bGRVcGRhdGU6IGZhbHNlLCBzaG91bGRTdG9wUHJvcGFnYXRpb246IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY29uc3Qgb3AgPSBjYihyb290KTtcblxuICAgIHJldHVybiB0aGlzLmV2YWxPcGVyYXRpb24ocm9vdCwgb3AsIGVkaXRvcik7XG4gIH1cbn1cbiIsImV4cG9ydCB0eXBlIExpc3RMaW5lQWN0aW9uID0gXCJub25lXCIgfCBcInpvb20taW5cIiB8IFwidG9nZ2xlLWZvbGRpbmdcIjtcbmV4cG9ydCB0eXBlIFN0aWNrQ3Vyc29yID0gXCJuZXZlclwiIHwgXCJidWxsZXQtb25seVwiIHwgXCJidWxsZXQtYW5kLWNoZWNrYm94XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzaWRpYW5PdXRsaW5lclBsdWdpblNldHRpbmdzIHtcbiAgc3R5bGVMaXN0czogYm9vbGVhbjtcbiAgZGVidWc6IGJvb2xlYW47XG4gIHN0aWNrQ3Vyc29yOiBTdGlja0N1cnNvciB8IGJvb2xlYW47XG4gIGJldHRlckVudGVyOiBib29sZWFuO1xuICBiZXR0ZXJUYWI6IGJvb2xlYW47XG4gIHNlbGVjdEFsbDogYm9vbGVhbjtcbiAgbGlzdExpbmVzOiBib29sZWFuO1xuICBsaXN0TGluZUFjdGlvbjogTGlzdExpbmVBY3Rpb247XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE9ic2lkaWFuT3V0bGluZXJQbHVnaW5TZXR0aW5ncyA9IHtcbiAgc3R5bGVMaXN0czogdHJ1ZSxcbiAgZGVidWc6IGZhbHNlLFxuICBzdGlja0N1cnNvcjogXCJidWxsZXQtYW5kLWNoZWNrYm94XCIsXG4gIGJldHRlckVudGVyOiB0cnVlLFxuICBiZXR0ZXJUYWI6IHRydWUsXG4gIHNlbGVjdEFsbDogdHJ1ZSxcbiAgbGlzdExpbmVzOiBmYWxzZSxcbiAgbGlzdExpbmVBY3Rpb246IFwidG9nZ2xlLWZvbGRpbmdcIixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZSB7XG4gIGxvYWREYXRhKCk6IFByb21pc2U8T2JzaWRpYW5PdXRsaW5lclBsdWdpblNldHRpbmdzPjtcbiAgc2F2ZURhdGEoc2V0dGlnbnM6IE9ic2lkaWFuT3V0bGluZXJQbHVnaW5TZXR0aW5ncyk6IFByb21pc2U8dm9pZD47XG59XG5cbnR5cGUgSyA9IGtleW9mIE9ic2lkaWFuT3V0bGluZXJQbHVnaW5TZXR0aW5ncztcbnR5cGUgQ2FsbGJhY2s8VCBleHRlbmRzIEs+ID0gKGNiOiBPYnNpZGlhbk91dGxpbmVyUGx1Z2luU2V0dGluZ3NbVF0pID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2UgaW1wbGVtZW50cyBPYnNpZGlhbk91dGxpbmVyUGx1Z2luU2V0dGluZ3Mge1xuICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG4gIHByaXZhdGUgdmFsdWVzOiBPYnNpZGlhbk91dGxpbmVyUGx1Z2luU2V0dGluZ3M7XG4gIHByaXZhdGUgaGFuZGxlcnM6IE1hcDxLLCBTZXQ8Q2FsbGJhY2s8Sz4+PjtcblxuICBjb25zdHJ1Y3RvcihzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLmhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgZ2V0IHN0eWxlTGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLnN0eWxlTGlzdHM7XG4gIH1cbiAgc2V0IHN0eWxlTGlzdHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldChcInN0eWxlTGlzdHNcIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGRlYnVnKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy5kZWJ1ZztcbiAgfVxuICBzZXQgZGVidWcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldChcImRlYnVnXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzdGlja0N1cnNvcigpIHtcbiAgICAvLyBBZGFwdG9yIGZvciB1c2VycyBtaWdyYXRpbmcgZnJvbSBvbGRlciB2ZXJzaW9uIG9mIHRoZSBwbHVnaW4uXG4gICAgaWYgKHRoaXMudmFsdWVzLnN0aWNrQ3Vyc29yID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJidWxsZXQtYW5kLWNoZWNrYm94XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlcy5zdGlja0N1cnNvciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBcIm5ldmVyXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlcy5zdGlja0N1cnNvcjtcbiAgfVxuICBzZXQgc3RpY2tDdXJzb3IodmFsdWU6IFN0aWNrQ3Vyc29yKSB7XG4gICAgdGhpcy5zZXQoXCJzdGlja0N1cnNvclwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgYmV0dGVyRW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLmJldHRlckVudGVyO1xuICB9XG4gIHNldCBiZXR0ZXJFbnRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0KFwiYmV0dGVyRW50ZXJcIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGJldHRlclRhYigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMuYmV0dGVyVGFiO1xuICB9XG4gIHNldCBiZXR0ZXJUYWIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldChcImJldHRlclRhYlwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2VsZWN0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy5zZWxlY3RBbGw7XG4gIH1cbiAgc2V0IHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0KFwic2VsZWN0QWxsXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBsaXN0TGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLmxpc3RMaW5lcztcbiAgfVxuICBzZXQgbGlzdExpbmVzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXQoXCJsaXN0TGluZXNcIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGxpc3RMaW5lQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy5saXN0TGluZUFjdGlvbjtcbiAgfVxuICBzZXQgbGlzdExpbmVBY3Rpb24odmFsdWU6IExpc3RMaW5lQWN0aW9uKSB7XG4gICAgdGhpcy5zZXQoXCJsaXN0TGluZUFjdGlvblwiLCB2YWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZTxUIGV4dGVuZHMgSz4oa2V5OiBULCBjYjogQ2FsbGJhY2s8VD4pIHtcbiAgICBpZiAoIXRoaXMuaGFuZGxlcnMuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuc2V0KGtleSwgbmV3IFNldCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZXJzLmdldChrZXkpLmFkZChjYik7XG4gIH1cblxuICByZW1vdmVDYWxsYmFjazxUIGV4dGVuZHMgSz4oa2V5OiBULCBjYjogQ2FsbGJhY2s8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZ2V0KGtleSk7XG5cbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGhhbmRsZXJzLmRlbGV0ZShjYik7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoREVGQVVMVF9TRVRUSU5HUykpIHtcbiAgICAgIHRoaXMuc2V0KGsgYXMga2V5b2YgT2JzaWRpYW5PdXRsaW5lclBsdWdpblNldHRpbmdzLCB2KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2FkKCkge1xuICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5sb2FkRGF0YSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmUoKSB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNhdmVEYXRhKHRoaXMudmFsdWVzKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgSz4oa2V5OiBULCB2YWx1ZTogT2JzaWRpYW5PdXRsaW5lclBsdWdpblNldHRpbmdzW1RdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuaGFuZGxlcnMuZ2V0KGtleSk7XG5cbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2Igb2YgY2FsbGJhY2tzLnZhbHVlcygpKSB7XG4gICAgICBjYih2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IHsgRGVsZXRlU2hvdWxkSWdub3JlQnVsbGV0c0ZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9EZWxldGVTaG91bGRJZ25vcmVCdWxsZXRzRmVhdHVyZVwiO1xuaW1wb3J0IHsgRW5zdXJlQ3Vyc29ySW5MaXN0Q29udGVudEZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9FbnN1cmVDdXJzb3JJbkxpc3RDb250ZW50RmVhdHVyZVwiO1xuaW1wb3J0IHsgRW50ZXJPdXRkZW50SWZMaW5lSXNFbXB0eUZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9FbnRlck91dGRlbnRJZkxpbmVJc0VtcHR5RmVhdHVyZVwiO1xuaW1wb3J0IHsgRW50ZXJTaG91bGRDcmVhdGVOZXdJdGVtRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL0VudGVyU2hvdWxkQ3JlYXRlTmV3SXRlbU9uQ2hpbGRMZXZlbEZlYXR1cmVcIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9GZWF0dXJlXCI7XG5pbXBvcnQgeyBGb2xkRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL0ZvbGRGZWF0dXJlXCI7XG5pbXBvcnQgeyBMaW5lc0ZlYXR1cmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9MaW5lc0ZlYXR1cmVcIjtcbmltcG9ydCB7IExpc3RzU3R5bGVzRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL0xpc3RzU3R5bGVzRmVhdHVyZVwiO1xuaW1wb3J0IHsgTW92ZUN1cnNvclRvUHJldmlvdXNVbmZvbGRlZExpbmVGZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvTW92ZUN1cnNvclRvUHJldmlvdXNVbmZvbGRlZExpbmVGZWF0dXJlXCI7XG5pbXBvcnQgeyBNb3ZlSXRlbXNGZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvTW92ZUl0ZW1zRmVhdHVyZVwiO1xuaW1wb3J0IHsgU2VsZWN0QWxsRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL1NlbGVjdEFsbEZlYXR1cmVcIjtcbmltcG9ydCB7IFNlbGVjdGlvblNob3VsZElnbm9yZUJ1bGxldHNGZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvU2VsZWN0aW9uU2hvdWxkSWdub3JlQnVsbGV0c0ZlYXR1cmVcIjtcbmltcG9ydCB7IFNldHRpbmdzVGFiRmVhdHVyZSB9IGZyb20gXCIuL2ZlYXR1cmVzL1NldHRpbmdzVGFiRmVhdHVyZVwiO1xuaW1wb3J0IHsgU2hpZnRFbnRlclNob3VsZENyZWF0ZU5vdGVGZWF0dXJlIH0gZnJvbSBcIi4vZmVhdHVyZXMvU2hpZnRFbnRlclNob3VsZENyZWF0ZU5vdGVGZWF0dXJlXCI7XG5pbXBvcnQgeyBBcHBseUNoYW5nZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvQXBwbHlDaGFuZ2VzU2VydmljZVwiO1xuaW1wb3J0IHsgSU1FU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL0lNRVNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9Mb2dnZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNpZGlhblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9PYnNpZGlhblNlcnZpY2VcIjtcbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9QYXJzZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJmb3JtT3BlcmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1BlcmZvcm1PcGVyYXRpb25TZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzaWRpYW5PdXRsaW5lclBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHByaXZhdGUgZmVhdHVyZXM6IEZlYXR1cmVbXTtcbiAgcHJvdGVjdGVkIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2U7XG4gIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlO1xuICBwcml2YXRlIG9ic2lkaWFuOiBPYnNpZGlhblNlcnZpY2U7XG4gIHByaXZhdGUgcGFyc2VyOiBQYXJzZXJTZXJ2aWNlO1xuICBwcml2YXRlIGFwcGx5Q2hhbmdlczogQXBwbHlDaGFuZ2VzU2VydmljZTtcbiAgcHJpdmF0ZSBwZXJmb3JtT3BlcmF0aW9uOiBQZXJmb3JtT3BlcmF0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBpbWU6IElNRVNlcnZpY2U7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nIG9ic2lkaWFuLW91dGxpbmVyYCk7XG5cbiAgICB0aGlzLm9ic2lkaWFuID0gbmV3IE9ic2lkaWFuU2VydmljZSh0aGlzLmFwcCk7XG5cbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzU2VydmljZSh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLnNldHRpbmdzLmxvYWQoKTtcblxuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlclNlcnZpY2UodGhpcy5zZXR0aW5ncyk7XG5cbiAgICB0aGlzLnBhcnNlciA9IG5ldyBQYXJzZXJTZXJ2aWNlKHRoaXMubG9nZ2VyLCB0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLmFwcGx5Q2hhbmdlcyA9IG5ldyBBcHBseUNoYW5nZXNTZXJ2aWNlKCk7XG4gICAgdGhpcy5wZXJmb3JtT3BlcmF0aW9uID0gbmV3IFBlcmZvcm1PcGVyYXRpb25TZXJ2aWNlKFxuICAgICAgdGhpcy5wYXJzZXIsXG4gICAgICB0aGlzLmFwcGx5Q2hhbmdlc1xuICAgICk7XG5cbiAgICB0aGlzLmltZSA9IG5ldyBJTUVTZXJ2aWNlKCk7XG4gICAgYXdhaXQgdGhpcy5pbWUubG9hZCgpO1xuXG4gICAgdGhpcy5mZWF0dXJlcyA9IFtcbiAgICAgIG5ldyBTZXR0aW5nc1RhYkZlYXR1cmUodGhpcywgdGhpcy5zZXR0aW5ncyksXG4gICAgICBuZXcgTGlzdHNTdHlsZXNGZWF0dXJlKHRoaXMuc2V0dGluZ3MsIHRoaXMub2JzaWRpYW4pLFxuICAgICAgbmV3IEVudGVyT3V0ZGVudElmTGluZUlzRW1wdHlGZWF0dXJlKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLnNldHRpbmdzLFxuICAgICAgICB0aGlzLmltZSxcbiAgICAgICAgdGhpcy5vYnNpZGlhbixcbiAgICAgICAgdGhpcy5wZXJmb3JtT3BlcmF0aW9uXG4gICAgICApLFxuICAgICAgbmV3IEVudGVyU2hvdWxkQ3JlYXRlTmV3SXRlbUZlYXR1cmUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgIHRoaXMuaW1lLFxuICAgICAgICB0aGlzLm9ic2lkaWFuLFxuICAgICAgICB0aGlzLnBlcmZvcm1PcGVyYXRpb25cbiAgICAgICksXG4gICAgICBuZXcgRW5zdXJlQ3Vyc29ySW5MaXN0Q29udGVudEZlYXR1cmUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgIHRoaXMub2JzaWRpYW4sXG4gICAgICAgIHRoaXMucGVyZm9ybU9wZXJhdGlvblxuICAgICAgKSxcbiAgICAgIG5ldyBNb3ZlQ3Vyc29yVG9QcmV2aW91c1VuZm9sZGVkTGluZUZlYXR1cmUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgIHRoaXMuaW1lLFxuICAgICAgICB0aGlzLm9ic2lkaWFuLFxuICAgICAgICB0aGlzLnBlcmZvcm1PcGVyYXRpb25cbiAgICAgICksXG4gICAgICBuZXcgRGVsZXRlU2hvdWxkSWdub3JlQnVsbGV0c0ZlYXR1cmUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgIHRoaXMuaW1lLFxuICAgICAgICB0aGlzLm9ic2lkaWFuLFxuICAgICAgICB0aGlzLnBlcmZvcm1PcGVyYXRpb25cbiAgICAgICksXG4gICAgICBuZXcgU2VsZWN0aW9uU2hvdWxkSWdub3JlQnVsbGV0c0ZlYXR1cmUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgIHRoaXMuaW1lLFxuICAgICAgICB0aGlzLm9ic2lkaWFuLFxuICAgICAgICB0aGlzLnBlcmZvcm1PcGVyYXRpb25cbiAgICAgICksXG4gICAgICBuZXcgRm9sZEZlYXR1cmUodGhpcywgdGhpcy5vYnNpZGlhbiksXG4gICAgICBuZXcgU2VsZWN0QWxsRmVhdHVyZShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcy5zZXR0aW5ncyxcbiAgICAgICAgdGhpcy5pbWUsXG4gICAgICAgIHRoaXMub2JzaWRpYW4sXG4gICAgICAgIHRoaXMucGVyZm9ybU9wZXJhdGlvblxuICAgICAgKSxcbiAgICAgIG5ldyBNb3ZlSXRlbXNGZWF0dXJlKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLmltZSxcbiAgICAgICAgdGhpcy5vYnNpZGlhbixcbiAgICAgICAgdGhpcy5zZXR0aW5ncyxcbiAgICAgICAgdGhpcy5wZXJmb3JtT3BlcmF0aW9uXG4gICAgICApLFxuICAgICAgbmV3IFNoaWZ0RW50ZXJTaG91bGRDcmVhdGVOb3RlRmVhdHVyZShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcy5vYnNpZGlhbixcbiAgICAgICAgdGhpcy5zZXR0aW5ncyxcbiAgICAgICAgdGhpcy5pbWUsXG4gICAgICAgIHRoaXMucGVyZm9ybU9wZXJhdGlvblxuICAgICAgKSxcbiAgICAgIG5ldyBMaW5lc0ZlYXR1cmUodGhpcywgdGhpcy5zZXR0aW5ncywgdGhpcy5vYnNpZGlhbiwgdGhpcy5wYXJzZXIpLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZlYXR1cmUgb2YgdGhpcy5mZWF0dXJlcykge1xuICAgICAgYXdhaXQgZmVhdHVyZS5sb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb251bmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coYFVubG9hZGluZyBvYnNpZGlhbi1vdXRsaW5lcmApO1xuXG4gICAgYXdhaXQgdGhpcy5pbWUudW5sb2FkKCk7XG5cbiAgICBmb3IgKGNvbnN0IGZlYXR1cmUgb2YgdGhpcy5mZWF0dXJlcykge1xuICAgICAgYXdhaXQgZmVhdHVyZS51bmxvYWQoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJrZXltYXAiLCJFZGl0b3JTdGF0ZSIsIlByZWMiLCJOb3RpY2UiLCJmb2xkZWRSYW5nZXMiLCJmb2xkYWJsZSIsImZvbGRFZmZlY3QiLCJ1bmZvbGRFZmZlY3QiLCJydW5TY29wZUhhbmRsZXJzIiwib2JzaWRpYW4iLCJlZGl0b3JJbmZvRmllbGQiLCJWaWV3UGx1Z2luIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJQbGF0Zm9ybSIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvR0E7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFD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R0FBRyxFQUNSLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUN0QjtBQUNELGdCQUFBLElBQUksbUNBQW1DLENBQ3JDLElBQUksRUFDSixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQ3RCO0FBQ0QsZ0JBQUEsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDcEMsZ0JBQUEsSUFBSSxnQkFBZ0IsQ0FDbEIsSUFBSSxFQUNKLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEI7QUFDRCxnQkFBQSxJQUFJLGdCQUFnQixDQUNsQixJQUFJLEVBQ0osSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUN0QjtBQUNELGdCQUFBLElBQUksaUNBQWlDLENBQ25DLElBQUksRUFDSixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQ3RCO0FBQ0QsZ0JBQUEsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xFLENBQUM7QUFFRixZQUFBLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNuQyxnQkFBQSxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixhQUFBO1NBQ0YsQ0FBQSxDQUFBO0FBQUEsS0FBQTtJQUVLLFFBQVEsR0FBQTs7QUFDWixZQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSwyQkFBQSxDQUE2QixDQUFDLENBQUM7QUFFM0MsWUFBQSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFeEIsWUFBQSxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDbkMsZ0JBQUEsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDeEIsYUFBQTtTQUNGLENBQUEsQ0FBQTtBQUFBLEtBQUE7QUFDRjs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
