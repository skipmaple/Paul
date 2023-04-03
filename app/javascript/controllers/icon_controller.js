import { Controller } from '@hotwired/stimulus'
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'
import { getCookie } from '../utils/cookies'

export default class extends Controller {
  static targets = ["emojiPicker"]

  addEmoji(e) {
    const emoji = e.native
    const micropostTextarea = document.getElementById("micropost_content")
    const cursorPosition = micropostTextarea.selectionStart
    const inputValue = micropostTextarea.value
    micropostTextarea.value = inputValue.slice(0, cursorPosition) + emoji + inputValue.slice(cursorPosition)

    // set the cursor focus after the inserted emoji
    const newCursorPosition = cursorPosition + emoji.length
    micropostTextarea.selectionStart = newCursorPosition
    micropostTextarea.selectionEnd = newCursorPosition
    micropostTextarea.focus()
  };
  connect () {
    new Picker({
      parent: this.emojiPickerTarget,
      data: data,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
      locale: getCookie('current_locale') === 'en' ? 'en' : 'zh',
      previewPosition: 'none',
      onEmojiSelect: this.addEmoji,
      emojiButtonRadius: '6px',
      emojiButtonColors: [
        'rgba(155,223,88,.7)',
        'rgba(149,211,254,.7)',
        'rgba(247,233,34,.7)',
        'rgba(238,166,252,.7)',
        'rgba(255,213,143,.7)',
        'rgba(211,209,255,.7)',
      ],
    })
  }
}
