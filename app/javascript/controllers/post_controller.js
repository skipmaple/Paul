import {Controller} from "@hotwired/stimulus"
import Markdoc from '@markdoc/markdoc'

export default class extends Controller {

    static targets = ["postMarkdownView", "postPlainText"]

    connect() {
        // this.element.textContent = "Hello World!"
        // alert(this.postPlainTextTarget)
        const source = this.postPlainTextTarget.innerText
        const ast = Markdoc.parse(source)
        const content = Markdoc.transform(ast, /* config */)
        this.postMarkdownViewTarget.innerHTML = Markdoc.renderers.html(content)
    }

}
