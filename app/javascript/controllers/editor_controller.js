import {Controller} from "@hotwired/stimulus"

import {basicSetup} from "codemirror"
import {keymap, EditorView, drawSelection, lineNumbers} from "@codemirror/view"
import {Compartment, EditorState, Transaction, Annotation} from "@codemirror/state"
import {indentWithTab, history, historyKeymap, defaultKeymap, redo, undo} from "@codemirror/commands"
import {markdown} from "@codemirror/lang-markdown"
// import {syntaxHighlighting, defaultHighlightStyle} from "@codemirror/language";
import {oneDark} from "@codemirror/theme-one-dark"

import Markdoc from '@markdoc/markdoc'


let headerMatch = /^#+(.*)$/;

function getTitleMarkdown(text) {
    let lines = text.split("\n")
    let noEmptyLines = lines.filter(line => line.length > 0)
    if (noEmptyLines.length === 0) return

    let title = ''
    for (let i = 0; i < noEmptyLines.length; i++) {
        let match = noEmptyLines[i].match(headerMatch)
        if (match != null) {
            title = (match && match[1]).trim()
            break
        }
    }
    return title
}

function drawEditor() {
    let tabSize = new Compartment

    const baseTheme = EditorView.baseTheme({
        ".cm-content, .cm-gutter": {minHeight: "80vh"},
        "&.cm-editor.cm-focused": {outline: "none"},
    })

    let extensions = [
        EditorView.lineWrapping,
        baseTheme,
        basicSetup,
        markdown(),
        history(),
        drawSelection(),
        // syntaxHighlighting(defaultHighlightStyle),
        // oneDark,
        tabSize.of(EditorState.tabSize.of(2)),
        keymap.of([indentWithTab]),
        keymap.of([
            ...defaultKeymap,
            ...historyKeymap,
        ]),
    ]

    /* main Editor */

    let textareaEl = document.querySelector("#content-editor")

    let mainEditorState = EditorState.create({
        doc: textareaEl.value || '',
        extensions: extensions,
    })

    const markdownPreviewEl = document.querySelector('.markdown-preview')

    let mainEditorView = new EditorView({
        state: mainEditorState,
        dispatch: tr => {
            mainEditorView.update([tr])
            if (!tr.changes.empty) {
                let docText = tr.state.doc.toString();
                textareaEl.value = docText
                const source = textareaEl.value
                const ast = Markdoc.parse(source)
                const content = Markdoc.transform(ast, /* config */)
                // 绑定渲染的位置
                const markdownPreviewHtml = Markdoc.renderers.html(content)
                markdownPreviewEl.innerHTML = markdownPreviewHtml

                // 把一级标题填入form title
                let title = getTitleMarkdown(docText) || ''

                const postTitleEl = document.querySelector('.post-title')
                const postUrlEl = document.querySelector('.post-url')
                postTitleEl.value = title
                postUrlEl.value = title.split(" ").map(s => s.toLowerCase()).join("_")
            }
        }
    })



    textareaEl.parentNode.insertBefore(mainEditorView.dom, textareaEl)
    // textareaEl.style.display = "none"

    if (textareaEl.form) textareaEl.form.addEventListener("submit", () => {
        textareaEl.value = mainEditorView.state.doc.toString()
    })
}

export default class extends Controller {

    static targets = ["editor", "markdown-preview"]

    connect() {
        drawEditor()
    }

    handleInput() {
        const textareaEl = this.editorTarget
        const inputs = textareaEl.value
        console.log(inputs)
    }

}
