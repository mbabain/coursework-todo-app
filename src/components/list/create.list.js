export function createList(store) {
  const {completedTasks, uncompletedTasks} = sortTasks(store)
  const countCompletedTasks = completedTasks.length
  return `      
  <div class="list_header">
    <div class="list_title">To-do list</div>
  </div>

  <input type="text"
  placeholder="Добавить задачу"
  class="list_add-case">

  <div class="list_items">

    ${uncompletedTasks.join('')}

  <div class="list_items--completed">

    <div class="list_item list_item--completed">
      Выполнено (${countCompletedTasks})
    </div>

    ${completedTasks.join('')}

  </div>

  </div>`
}

function sortTasks(store = {}) {
  const completedTasks = []
  const uncompletedTasks = []
  Object.keys(store.tasks).forEach(el => {
    const task =
        toTask(
            el,
            store.tasks[el].title,
            store.tasks[el].description,
            store.currentTask === el ? true : false
        )
    if (store.tasks[el].completed === true) {
      completedTasks.push(task)
    } else {
      uncompletedTasks.push(task)
    }
  })
  return {completedTasks, uncompletedTasks}
}

function toTask(id, title, description, isActive) {
  const active = isActive ? 'active' : ''
  return `
    <div class="list_item ${active}" data-task="true" data-id="${id}">
      <div class="list_item__apply" data-button-complete="true">
      </div>
      <div class="list_item__inner">
        <span class="list_item__title" data-task="true">
          ${title}
        </span>
        <span class="list_item__description" data-task="true">
          ${description}
        </span>
      </div>
    </div>`
}
