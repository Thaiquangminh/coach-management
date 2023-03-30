import { createStore } from 'vuex';
import  coachesModules  from './modules/coaches/index'
import  requestModules  from './modules/requests/index'
import authModules from './modules/auth/index'

const store = createStore({
  modules: {
    coaches: coachesModules,
    request: requestModules,
    auth: authModules
  },
})

export default store