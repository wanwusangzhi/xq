//app.js
import $store from './store/index.js'
import publicApi from './public/index.js'
let app = {
  onLaunch(options) {
    wx.ct.$store = $store
    console.warn('app options', options)
  },
  onShow() {},
  // $store,
  // ...publicApi
}

App(app)