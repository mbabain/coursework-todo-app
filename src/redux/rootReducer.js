import {
  CREATE_TASK,
  TASK_SELECTED,
  SWITCH_COMPLETE_STATE,
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  DELETE_TASK} from './types'
import {initialTaskState} from './initialState'

export function rootReducer(state, action) {
  let field
  let val
  switch (action.type) {
    case CREATE_TASK:
      field = 'tasks'
      return {
        ...state,
        [field]: {
          ...state.tasks,
          [action.data.taskId]: {
            ...initialTaskState,
            title: action.data.value,
          },
        },
      }
    case SWITCH_COMPLETE_STATE:
      field = 'tasks'
      val = state.tasks[action.data.taskId] || {}
      val[action.data.id] =
          val[action.data.id] === false ? true : false
      return {
        ...state,
        [field]: {...state.tasks, [action.data.taskId]: {...val}},
      }
    case TASK_SELECTED:
      return {
        ...state,
        currentTask: action.data.taskId === state.currentTask
        ? false
        : action.data.taskId,
      }
    case CHANGE_TITLE:
      field = 'title'
      val = state.tasks[action.data.taskId] || {}
      val[field] = action.data.value
      return {
        ...state,
        tasks: {...state.tasks, [action.data.taskId]: {...val}},
      }
    case CHANGE_DESCRIPTION:
      field = 'description'
      val = state.tasks[action.data.taskId] || {}
      val[field] = action.data.value
      return {
        ...state,
        tasks: {...state.tasks, [action.data.taskId]: {...val}},
      }
    case DELETE_TASK:
      val = state.tasks || {}
      delete val[action.data.taskId]
      return {...state, tasks: {...val}, currentTask: false}
    default: return state
  }
}

