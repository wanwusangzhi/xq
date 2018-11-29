const { $request } = wx.ct
const isTesting = true

const URL = {
  LIST: 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api'
}

const actions = {
  getAdList({ commit }, payload) {
    $request(URL.LIST)
  }
}

export default {
  actions
}