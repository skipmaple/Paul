import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["toggleDarkIcon", "toggleLightIcon", "userMenuDropdown"]

    connect() {

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            }
        }
    }

    handleToggleUserMenu() {
        this.userMenuDropdownTarget.classList.toggle('hidden')
    }
}
