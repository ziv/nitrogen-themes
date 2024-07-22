import type { Tag } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting, TagStyle } from '@codemirror/language';
import { Extension } from '@codemirror/state';

export type Color = string;
export type T = Tag | Tag[];

export function themeColors(background: Color, foreground: Color, caret: Color, selection: Color, lineHighlight: Color, gutterBackground: Color, gutterForeground: Color, dark = false): Extension {
    return EditorView.theme({
        '&': {
            backgroundColor: background,
            color: foreground,
        },
        '.cm-content': {
            caretColor: caret,
        },
        '.cm-cursor, .cm-dropCursor': {
            borderLeftColor: caret,
        },
        '&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection':
            {
                backgroundColor: selection,
            },
        '.cm-activeLine': {
            backgroundColor: lineHighlight,
        },
        '.cm-gutters': {
            backgroundColor: gutterBackground,
            color: gutterForeground,
        },
        '.cm-activeLineGutter': {
            backgroundColor: lineHighlight,
        },
    }, {dark});
}


export function themeStyles(items: [Color, T][]) {
    const specs: TagStyle[] = items.map(([color, tag]) => ({color, tag}));
    return syntaxHighlighting(HighlightStyle.define(specs));
}