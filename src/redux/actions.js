import {
  CHANGE_TITLE,
  CREATE_TASK,
  SWITCH_COMPLETE_STATE,
  TASK_SELECTED,
  CHANGE_DESCRIPTION,
  DELETE_TASK,
} from './types'

export function createTask(data) {
  return {
    type: CREATE_TASK,
    data,
  }
}

export function switchCompleteState(data) {
  return {
    type: SWITCH_COMPLETE_STATE,
    data,
  }
}

export function taskSelected(data) {
  return {
    type: TASK_SELECTED,
    data,
  }
}

export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data,
  }
}

export function changeDescription(data) {
  return {
    type: CHANGE_DESCRIPTION,
    data,
  }
}

export function deleteTask(data) {
  return {
    type: DELETE_TASK,
    data,
  }
}
