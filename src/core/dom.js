class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  text(text) {
    if (typeof text !== 'undefined') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLowerCase() === 'input'
        || this.$el.tagName.toLowerCase() === 'textarea') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
  }

  clear() {
    if (this.$el.tagName.toLowerCase() === 'input') {
      this.$el.value = ''
      return this
    }
    this.$el.textContent = ''
    return this
  }

  blur() {
    this.$el.blur()
  }

  get data() {
    return this.$el.dataset
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  css(styles= {}) {
    Object.keys(styles).forEach(style => {
      this.$el.style[style] = styles[style]
    })
  }

  addClass(selector) {
    this.$el.classList.add(selector)
    return this
  }

  removeClass(selector) {
    this.$el.classList.remove(selector)
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
