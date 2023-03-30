export default {
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZkE7trQ2727WfSMSacjY4bRlXilz95jM', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const data = await response.json()
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    context.commit('updateUserInfo', data)
  },

  keepLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    console.log(token);
    if(token && userId) {
      context.commit('updateUserInfo', {
        idToken: token,
        localId: userId,
        expiresIn: null
      })
    }
  },

  async signup(context, payload) {
     await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZkE7trQ2727WfSMSacjY4bRlXilz95jM', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
  },

  logout(context) {
    context.commit('logoutUser')
  }
}