
export default {
  getCoaches(state) {
    return state.coaches
  },
  hasCoach(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = state.coaches
    console.log(coaches);
    const userId = rootGetters.getUserId
    return coaches.some(coach => coach.id === userId)
  }

}