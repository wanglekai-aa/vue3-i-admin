import { createApp } from 'vue'
// i18n （PS：导入放到 APP.vue 导入之前，后面会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import installIcons from '@/icons'
import installElementPlus from './plugins/element'
import './permission'
import '@/styles/index.scss'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(router).use(i18n).mount('#app')
