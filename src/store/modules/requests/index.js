import mutations from '@/store/modules/requests/mutations';
import actions from '@/store/modules/requests/actions';
import getters from '@/store/modules/requests/getters';

export default {
  namespaced: true,
  state() {
    return {
      request: [
        // {
        //   id: 1,
        //   coachId: 'c1',
        //   email: 'minh@gmail.com',
        //   message: 'This c1 so good!!! 5 star'
        // },
        // {
        //   id: 2,
        //   coachId: 'c2',
        //   email: 'minh@gmail.com',
        //   message: 'This c2 so good!!! 5 star'
        // },
        // {
        //   id: 3,
        //   coachId: 'c1',
        //   email: 'minh@gmail.com',
        //   message: 'This c1 so bad!!! 1 star'
        // }
      ]
    }
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}