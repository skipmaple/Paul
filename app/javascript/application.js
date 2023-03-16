import '@hotwired/turbo-rails'
import './controllers'
import 'flowbite'
import { getCookie, isExistThemeCookie } from './utils/cookies'

import Alpine from 'alpinejs'

window.Alpine = Alpine
document.addEventListener('DOMContentLoaded', () => window.Alpine.start())

// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
// } else {
//     document.documentElement.classList.remove('dark')
// }

if (getCookie('current_theme') === 'dark' || (!isExistThemeCookie && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}


