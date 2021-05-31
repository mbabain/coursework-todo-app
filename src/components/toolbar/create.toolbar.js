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
  `
  } else {
    return ``
  }
}
