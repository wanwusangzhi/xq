import article from '../mock/article.js'
const TEST = true
const { $api, $request } = wx.ct
const actions = {
  fetch_by_id (params) {
    console.log(params)
    $request
  }
}
export default {
  actions
}