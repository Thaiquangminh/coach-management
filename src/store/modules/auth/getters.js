export default {
  getUserId(state) {
    return state.userId
  },
  getToken(state) {
    return state.token
  },
  getIsAuthenticated(state) {
    return Boolean(state.token)
  }
}
