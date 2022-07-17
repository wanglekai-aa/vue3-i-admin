import { createStore } from 'vuex'
import getters from './getters'
import User from './module/user'
import App from './module/app'
import Theme from './module/theme'
import Permission from './module/permission'

export default createStore({
  getters,
  modules: {
    App,
    User,
    Theme,
    Permission
  }
})
