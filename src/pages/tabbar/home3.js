const {
  $page,
  $share,
  $api,
  $t
} = wx.ct

const page = {
  data: {

  },
  computed: {
    t() {
      return {
        mobile: $t('common.mobile'),
        core: $t('common.core'),
        dayClick: $t('home3.dayClick')
      }
    },
    itemList() {
      return [this.$t('home3.my.project'), this.$t('home3.my.score')]
    },
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
      }, {
        name: '',
        src: '/assets/agree.png'
      }]
    }
  },
  clickChange() {
    this.setCurLang(this.$api.getStorageSync('lang') === 'zh' ? 'en' : 'zh')
  }
}
$page(page)