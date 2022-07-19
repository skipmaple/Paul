import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["postSettingSidebar", "postSettingOpenBtn", "mainBody"]

    open() {
        // this.postSettingMainBody.style.width = `calc(100% - 40px)`
        this.postSettingOpenBtnTarget.classList.add('hidden')
        this.postSettingSidebarTarget.classList.remove('hidden')
    }

    close() {
        this.postSettingSidebarTarget.classList.add('hidden')
        this.postSettingOpenBtnTarget.classList.remove('hidden')
    }
}
