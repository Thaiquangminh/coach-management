import {createRouter, createWebHistory} from "vue-router";

// import CoachList from "@/pages/coaches/CoachList.vue";
// import CoachDetail from "@/pages/coaches/CoachDetail.vue";
// import CoachRegister from "@/pages/coaches/CoachRegister.vue";
// import ContactCoach from '@/pages/requests/ContactCoach.vue';
// import RequestReceived from '@/pages/requests/RequestReceived.vue';
// import UserAuth from '@/pages/auth/UserAuth.vue';
import NotFound from "@/pages/NotFound.vue";
import store  from './store/index'

const CoachList = () => import('./pages/coaches/CoachList.vue')
const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const CoachRegister = () => import('./pages/coaches/CoachRegister.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const RequestReceived = () => import('./pages/requests/RequestReceived.vue')
const UserAuth = () => import('./pages/auth/UserAuth.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: CoachList},
    {path: '/coaches/:id', component: CoachDetail, props: true, children:
        [
          {path: 'contact', component: ContactCoach}
        ]
    },
    // need login to use
    {path: '/register', component: CoachRegister, meta:{needLogin: true }},
    {path: '/requests', component: RequestReceived, meta:{needLogin: true }},

    {path: '/auth', component: UserAuth},
    {path: '/:notFound(.*)', component: NotFound},
  ]
})

router.beforeEach((to, from,next) => {
  if(to.meta.needLogin && !store.getters.getIsAuthenticated) {
    next('/auth')
  }
  else {
    next()
  }
})

export default router