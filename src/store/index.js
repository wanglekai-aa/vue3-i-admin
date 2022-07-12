import { createStore } from 'vuex'
import getters from './getters'
import User from './module/user'

export default createStore({
  getters,
  modules: {
    User
  }
})
