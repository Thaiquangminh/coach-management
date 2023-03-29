export default {
  getMessages(state,payload, rootState, rootGetters) {
    const coachId = rootGetters.getUserId
    return state.request.filter(req => req.coachId === coachId)
  },
  hasMessage(state) {
    return state.request && state.request.length > 0
  }
}
