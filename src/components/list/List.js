import {TodoComponent} from '@core/TodoComponent'
import {$} from '@core/dom'
import {currentDateToIdFor} from '@core/utils'
import * as actions from '@/redux/actions'
import {createList} from './create.list'

export class List extends TodoComponent {
  static className = 'list'

  constructor($root, options) {
    super($root, {
      name: 'List',
      listeners: ['keypress', 'click'],
      subscribe: ['tasks'],
      ...options,
    })
  }

  toHTML() {
    return createList(this.store.getState())
  }

  createTask(event) {
    const $input = $(event.target)
    const data = {value: $input.text(), taskId: currentDateToIdFor('task')}
    this.$dispatch(actions.createTask(data))
    $input.clear().blur()
  }

  selectTask($target) {
    const taskId = $target.closest('[data-id]').data.id
    const data = {
      taskId,
    }
    this.$dispatch(actions.taskSelected(data))
    const store = this.store.getState()
    const tasks = Object.keys(store.tasks).map(taskId => {
      return this.$root.find(`[data-id="${taskId}"]`)
    })
    tasks.forEach($task => {
      if ($task.data.id === store.currentTask) {
        $task.addClass('active')
      } else {
        $task.removeClass('active')
      }
    })
  }

  switchTaskState($target) {
    const taskId = $target.closest('[data-id]').data.id
    const data = {
      id: 'completed',
      taskId,
    }
    this.$dispatch(actions.switchCompleteState(data))
  }

  storeChanged(changes) {
    this.reRender()
  }

  onKeypress(event) {
    if (event.key === 'Enter') {
      this.createTask(event)
    }
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.buttonComplete === 'true') {
      this.switchTaskState($target)
    }
    if ($target.data.task === 'true') {
      this.selectTask($target)
    }
  }
}
