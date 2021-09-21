import { createStore } from 'vuex'
import taskStore from './modules/tasks'
export default createStore({
  modules:{
    taskStore,
  }
})
