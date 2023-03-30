// import { v1 } from 'uuid';

export default {
  async handleAddRequest(context, payload) {
    const messageData = {
      // id: v1(),
      email: payload.email,
      message: payload.message
    }

    await fetch(`https://coach-management-427f4-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(messageData)
    })

    messageData.coachId = payload.coachId

    context.commit('handleAddRequest', messageData)
  },

  async handleGetRequests(context) {
    const coachId = context.rootGetters.getUserId
    const token = context.rootGetters.getToken
    const response = await fetch(`https://coach-management-427f4-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token)
    const data = await response.json()
    const requests = []
    for(const key in data) {
      const newRequest = {
        ...data[key],
        key: key,
        coachId: coachId
      }
      requests.push(newRequest)
    }
    context.commit('handleGetRequests', requests)
  }

}