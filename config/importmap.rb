# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "sortablejs", to: "https://ga.jspm.io/npm:sortablejs@1.14.0/modular/sortable.esm.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.0.1/dist/stimulus.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"

pin "flowbite" # @1.4.1
pin "tailwindcss-stimulus-components", to: "https://ga.jspm.io/npm:tailwindcss-stimulus-components@3.0.4/dist/tailwindcss-stimulus-components.modern.js"
pin "axios", to: "https://ga.jspm.io/npm:axios@0.27.2/index.js"
pin "#lib/adapters/http.js", to: "https://ga.jspm.io/npm:axios@0.27.2/lib/adapters/xhr.js"
pin "#lib/defaults/env/FormData.js", to: "https://ga.jspm.io/npm:axios@0.27.2/lib/helpers/null.js"
pin "buffer", to: "https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.24/nodelibs/browser/buffer.js"
pin "@markdoc/markdoc", to: "https://unpkg.com/@markdoc/markdoc@0.1.2/dist/index.mjs"
pin "codemirror", to: "https://ga.jspm.io/npm:codemirror@6.0.0/dist/index.js"
pin "@codemirror/autocomplete", to: "https://ga.jspm.io/npm:@codemirror/autocomplete@6.0.1/dist/index.js"
pin "@codemirror/commands", to: "https://ga.jspm.io/npm:@codemirror/commands@6.0.0/dist/index.js"
pin "@codemirror/language", to: "https://ga.jspm.io/npm:@codemirror/language@6.2.0/dist/index.js"
pin "@codemirror/lint", to: "https://ga.jspm.io/npm:@codemirror/lint@6.0.0/dist/index.js"
pin "@codemirror/search", to: "https://ga.jspm.io/npm:@codemirror/search@6.0.0/dist/index.js"
pin "@lezer/common", to: "https://ga.jspm.io/npm:@lezer/common@1.0.0/dist/index.js"
pin "@lezer/highlight", to: "https://ga.jspm.io/npm:@lezer/highlight@1.0.0/dist/index.js"
pin "crelt", to: "https://ga.jspm.io/npm:crelt@1.0.5/index.es.js"
pin "@codemirror/lang-markdown", to: "https://ga.jspm.io/npm:@codemirror/lang-markdown@6.0.0/dist/index.js"
pin "@codemirror/lang-css", to: "https://ga.jspm.io/npm:@codemirror/lang-css@6.0.0/dist/index.js"
pin "@codemirror/lang-html", to: "https://ga.jspm.io/npm:@codemirror/lang-html@6.0.0/dist/index.js"
pin "@codemirror/lang-javascript", to: "https://ga.jspm.io/npm:@codemirror/lang-javascript@6.0.0/dist/index.js"
pin "@lezer/css", to: "https://ga.jspm.io/npm:@lezer/css@1.0.0/dist/index.es.js"
pin "@lezer/html", to: "https://ga.jspm.io/npm:@lezer/html@1.0.0/dist/index.es.js"
pin "@lezer/javascript", to: "https://ga.jspm.io/npm:@lezer/javascript@1.0.0/dist/index.es.js"
pin "@lezer/lr", to: "https://ga.jspm.io/npm:@lezer/lr@1.0.0/dist/index.js"
pin "@lezer/markdown", to: "https://ga.jspm.io/npm:@lezer/markdown@1.0.0/dist/index.js"

pin "@codemirror/view", to: "https://ga.jspm.io/npm:@codemirror/view@6.0.2/dist/index.js"
pin "@codemirror/state", to: "https://ga.jspm.io/npm:@codemirror/state@6.1.0/dist/index.js"
pin "style-mod", to: "https://ga.jspm.io/npm:style-mod@4.0.0/src/style-mod.js"
pin "w3c-keyname", to: "https://ga.jspm.io/npm:w3c-keyname@2.2.4/index.es.js"
pin "@codemirror/theme-one-dark", to: "https://ga.jspm.io/npm:@codemirror/theme-one-dark@6.0.0/dist/index.js"
