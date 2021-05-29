import {storage, clone} from '@core/utils'

const defaultState = {
  tasks: {},
  currentTask: '',
}

const defaultTaskState = {
  title: '',
  completed: false,
  description: '',
}

export const initialState = storage('todo-state')
    ? storage('todo-state')
    : defaultState

export const initialTaskState = defaultTaskState

export function normalizeInitialState(state) {
  return state ? state : clone(defaultState)
}
