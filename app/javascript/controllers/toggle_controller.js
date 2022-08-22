import {Controller} from "@hotwired/stimulus"
import { getCookie, isExistThemeCookie, setCookie } from '../utils/cookies'

export default class extends Controller {
    static targets = ["toggleDarkIcon", "toggleLightIcon", "userMenuDropdown"]

    connect() {

        if (!this.hasToggleDarkIconTarget || !this.hasToggleLightIconTarget) {
            return
        }

        // Change the icons inside the button based on previous settings
        if (getCookie('current_theme') === 'dark' || (!isExistThemeCookie && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.toggleDarkIconTarget.classList.add('hidden');
            this.toggleLightIconTarget.classList.remove('hidden');
        } else {
            this.toggleLightIconTarget.classList.add('hidden');
            this.toggleDarkIconTarget.classList.remove('hidden');
        }
    }

    handleToggleTheme() {

        // toggle icons inside button
        this.toggleDarkIconTarget.classList.toggle('hidden')
        this.toggleLightIconTarget.classList.toggle('hidden')

        // if set via local storage previously
        if (isExistThemeCookie()) {
            if (getCookie('current_theme') === 'light') {
                document.documentElement.classList.add('dark')
                setCookie('current_theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                setCookie('current_theme', 'light')
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
                setCookie('current_theme', 'light')
            } else {
                document.documentElement.classList.add('dark')
                setCookie('current_theme', 'dark')
            }
        }
    }

    handleToggleUserMenu() {
        this.userMenuDropdownTarget.classList.toggle('hidden')
    }
}
