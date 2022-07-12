import { createStore } from 'vuex'
import getters from './getters'
import User from './module/user'
import App from './module/app'

export default createStore({
  getters,
  modules: {
    App,
    User
  }
})
