import {Controller} from "@hotwired/stimulus"
import axios from "axios"

export default class extends Controller {

    static targets = ["language"]

    update_language(event) {
        const params = event.params.payload;

        // do upload language change things.

        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        let headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
        }

        let user = {
            id: params['user_id'],
            language: params['language'],
        }

        try {
            const response = axios.post(params['url'], user, {headers: headers})
            if (response.status === 200) {
                // this.languageTarget.checked = !this.languageTarget.checked
                // location.reload()
            } else if (response.status === 422) {
                console.log('no need to change.')
            }
        } catch (error) {
            if (error.response) {
                console.log(error.reponse.status)
            } else {
                console.log(error.message)
            }
        }
    }

    get language() {
        return this.languageTarget.checked
    }

}
