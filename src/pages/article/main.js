// src/pages/article/main.js
const { $page, $share, $api, $store } = wx.ct

const page = {
  onLoad () {
    console.log(this.options)
    $store.dispatch('article.fetch_by_id', { article_id: this.options.article_id })
  }
}

$page(page)