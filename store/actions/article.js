import articleMock from '../mock/article.js'

const TEST = true
const {
  $api,
  $request
} = wx.ct

const URL = {}

const actions = {
  fetch_by_id({ commit, state }, params) {
    return new Promise((res, rej) => {
      const instP = TEST ? articleMock.fetch_by_id() : $request()
      instP.then(data => {
        commit('article.merge_fetch_by_id', data)
        res(data)
      })
    })
  }
}
export default {
  actions
}