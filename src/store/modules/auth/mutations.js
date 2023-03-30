export default {

  // update user info when login

  updateUserInfo(state, payload) {
    state.userId = payload.localId
    state.token = payload.idToken
    state.expire = payload.expiresIn

  },
  logoutUser(state) {
    state.userId = null
    state.token = null
    state.expire = null
  }

}
