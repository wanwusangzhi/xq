const {
  $page,
  $share,
  $api
} = wx.ct

const page = {
  data: {

  },
  computed: {
    columnList() {
      return [{
        name: '游戏',
        src: ''
      }, {
        name: this.$t('home3.my.project'),
        src: ''
      }, {
        name: '游戏ssa枯枯顶替',
        src: ''
      }, {
        name: 'sdfisdk木大日',
        src: ''
      }]
    }
  }
}
$page(page)