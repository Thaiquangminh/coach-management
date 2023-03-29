export default {
  handleAddRequest(state, payload) {
    state.request.push(payload)
  },
  handleGetRequests(state, payload) {
    state.request = payload
  }
}
