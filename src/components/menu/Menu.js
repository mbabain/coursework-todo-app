import {TodoComponent} from '@core/TodoComponent';
import {$} from '@core/dom';

export class Menu extends TodoComponent {
  static className = 'menu'

  constructor($root, options) {
    super($root, {
      name: 'Menu',
      listeners: ['click'],
      ...options,
    })
  }

  toHTML() {
    return `
      <div class="menu_header">
        <div class="menu_header__userpic">
        </div>
        <div class="menu_header__username">Neochael Jordan</div>
      </div>

      <div class="menu_list">
        <div class="menu_search">
          <input type="search" id="site-search" name="q" placeholder="Поиск">
        </div>

        <div class="menu_list__item">
          <span>Сегодня</span>
          <span>3</span>
        </div>

        <div class="menu_list__item active">
          <span>Завтра</span>
          <span>0</span>
        </div>

        <div class="menu_list__item">
          <span>Послезавтра</span>
          <span>0</span>
        </div>

        <div class="menu_list__item">
          <span>Срок действия истек</span>
          <span>0</span>
        </div>

        <div class="menu_list__item">
          <span>Все</span>
          <span>23</span>
        </div>

      </div>

      <div class="menu_list">

        <div class="menu_list__item">
          <span>somethinglist</span>
          <span>31</span>
        </div>
        
      </div>

      <div
      id="menu_create-list"
      class="menu_list"
      data-type="create-list-button"
      >
        <span data-type="create-list-button">+</span>
        <div data-create-button="true">Создайте новый список</div>
      </div>
    `
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.createButton === 'true') {
      this.$emit('menu:click-create-button', true)
    }
  }
}
