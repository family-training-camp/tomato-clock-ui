const state = {
  accountForm: {
    username: '',
    isLogin: false
  }
}

const actions = {}

const mutations = {
  loginSuccess(state, account) {
    state.accountForm.username = account.username
    state.accountForm.isLogin = true
  },
  loginOut(state) {
    state.account = {
      username: '',
      isLogin: false
    }
  }
}

export default {
  state,
  actions,
  mutations
}
