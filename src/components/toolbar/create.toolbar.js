export function createToolbar(store) {
  if (store.currentTask) {
    const {title, description} = store.tasks[store.currentTask]
    return `
    <div class="toolbar_header">
      <div class="toolbar_icon-delete" data-delete-button="true">
        <svg class="delete" data-delete-button="true">
          <use xlink:href="#delete" data-delete-button="true">
          </use>
        </svg>
      </div>
    </div>
    
    <input
    type="text"
    class="toolbar_title"
    value="${title}"
    data-title="true"
    placeholder="Введите название"
    >
    
    <textarea
    type="text"
    class="toolbar_details"
    placeholder="Добавить описание"
    data-description="true">${description}</textarea>

    <div class="toolbar_line">
      <div class="icon">
        <svg class="toolbar_icon-list">
          <use xlink:href="#list">
          </use>
        </svg>
      </div>
      <select id="toolbar_select">
        <option>somethinglist</option>
        <option>Сегодня</option>
      </select>
    </div>

    <div class="toolbar_line">
      <div class="icon">
        <svg class="toolbar_icon-calendar">
          <use xlink:href="#calendar">
          </use>
        </svg>
      </div>
      <span class="toolbar_text">Добавить срок выполнения</span>
    </div>

    <div class="toolbar_line">
      <div class="icon">
        <svg class="toolbar_icon-arrow">
          <use xlink:href="#arrow-down-right">
          </use>
        </svg>
      </div>
      <input class="toolbar_input" placeholder="Добавить подзадачу">
    </div>

    <div class="toolbar_subtasks">

      <div class="toolbar_subtask">
        <div class="toolbar_subtask-check"></div>
        <input type="text" class="toolbar_subtask-text">
      </div>
      <div class="toolbar_subtask">
        <div class="toolbar_subtask-check"></div>
        <input type="text" class="toolbar_subtask-text">
      </div>

    </div>
  `
  } else {
    return ``
  }
}
