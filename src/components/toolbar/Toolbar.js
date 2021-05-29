import {TodoComponent} from '@core/TodoComponent'
import * as actions from '@/redux/actions'
import {createToolbar} from './create.toolbar'
import {$} from '@core/dom'

export class Toolbar extends TodoComponent {
  static className = 'toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['input', 'click'],
      subscribe: ['currentTask'],
      ...options,
    })
  }

  toHTML() {
    return createToolbar(this.store.getState())
  }

  storeChanged(changes) {
    this.reRender()
  }

  onInput(event) {
    const $target = $(event.target)
    if ($target.data.title === 'true') {
      const data = {
        taskId: this.store.getState().currentTask,
        value: $target.text(),
      }
      this.$dispatch(actions.changeTitle(data))
    }
    if ($target.data.description === 'true') {
      const data = {
        taskId: this.store.getState().currentTask,
        value: $target.text(),
      }
      this.$dispatch(actions.changeDescription(data))
    }
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.deleteButton === 'true') {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?')

      if (decision) {
        const data = {taskId: this.store.getState().currentTask}
        this.$dispatch(actions.deleteTask(data))
      }
    }
  }
}
