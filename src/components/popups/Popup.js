import {TodoComponent} from '@core/TodoComponent';
import {$} from '@core/dom';

export class Popup extends TodoComponent {
  static className = 'popup'

  constructor($root, options) {
    super($root, {
      name: 'Popup',
      listeners: ['click'],
      ...options,
    })
  }

  init() {
    super.init()
    this.$on('menu:click-create-button', () => {
      this.$root.css({display: 'block'})
    })
  }

  toHTML() {
    return `
      <div class="popup_background" data-background="true"></div>
      <div class="popup_inner">
        <input class="popup_input" placeholder="Создать новый лист"/>
        <button class="popup_button" data-done-button="true">Готово</button>
      </div>
    `
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.background === 'true') {
      this.$root.css({display: 'none'})
    }
    if ($target.data.doneButton === 'true') {
      1
    }
  }
}
