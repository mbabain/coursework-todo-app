import {Todo} from '@/components/todo/Todo'
import {List} from '@/components/list/List';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {storage} from '@core/utils';
import {initialState} from '@/redux/initialState';
import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
  storage('todo-state', state)
})

const todo = new Todo('#app', {
  components: [List, Toolbar],
  store,
})

todo.render()
