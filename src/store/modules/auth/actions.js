
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
    if(response.status !== 200) {
     const error =  new Error(data.message || 'Wrong email or password. Try again.')
      throw error
    }
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    context.commit('updateUserInfo', data)
  },

  keepLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if(token && userId) {
      context.commit('updateUserInfo', {
        idToken: token,
        localId: userId,
        expiresIn: null
      })
    }
  },

  async signup(context, payload) {
     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZkE7trQ2727WfSMSacjY4bRlXilz95jM', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    console.log(response);
    if(response.status !== 200) {
      const error = new Error('Fail to signup. May be account is existed')
      throw error
    }
  },

  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    context.commit('logoutUser')
  }
}