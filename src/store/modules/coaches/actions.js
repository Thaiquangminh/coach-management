// import { v1 } from 'uuid'
export default {
  async handleRegisterAsCoach(context, payload) {
    const userId = context.rootGetters.getUserId
    const coachData = {
      // id: v1(),
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas,
      hourlyRate: payload.rate
    }

    const token = context.rootGetters.getToken

    const response = await fetch(`https://coach-management-427f4-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    })

    if(response.status !== 200) {
      const error = new Error('Fail to register')
      throw error
    }

    context.commit('handleAddCoach', {
      ...coachData,
      id: userId
    })
  },

  async handleGetCoaches(context) {
    const response = await fetch(`https://coach-management-427f4-default-rtdb.firebaseio.com/coaches.json`)
    const data = await response.json()

    if(response.status !== 200) {
      const error = new Error(data.message || 'Failed to fetch!')
      throw error
    }
    const coaches = []
    for (const key in data) {
      const coach = {
        ...data[key],
        id: key,
        // firstName: data[key].firstName,
        // lastName: data[key].lastName,
        // description: data[key].description,
        // hourlyRate: data[key].hourlyRate,
        // areas: data[key].areas,
      }
      coaches.push(coach)
    }

    context.commit('handleGetCoaches', coaches)
  }

}