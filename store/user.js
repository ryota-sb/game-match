const state = () => ({
  user: null
})

const getters = {
  user: state => state.user
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

const actions = {
  async getUser({ commit }, { headers, userId }) {
    const uri = `http://localhost:3000/api/v1/users/${userId}`
    await this.$axios.get(uri, { headers: headers }).then(res => {
      commit('setUser', res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  state,
  mutations,
  actions
}