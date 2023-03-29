export default {
  handleAddCoach(state, payload) {
    state.coaches.push(payload)
  },
  handleGetCoaches(state, payload) {
    state.coaches = payload
  }
}