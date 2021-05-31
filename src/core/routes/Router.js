import {$} from '@core/dom'

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router')
    }

    this.$placeholder = $(selector)
    this.routes = routes

    this.changerPageHandler = this.changerPageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changerPageHandler)
    this.changerPageHandler()
  }

  changerPageHandler(event) {
    console.log(event);
  }

  destroy() {
    window.removeEventListener('hashchange', this.changerPageHandler)
  }
}
