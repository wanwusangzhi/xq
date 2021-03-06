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
        name: $t('home3.name'),
        mobile: $t('home3.mobile'),
        core: $t('home3.core'),
        dayClick: $t('home3.dayClick')
      }
    },
    itemList() {
      return [{
        name: this.$t('home3.columnList.privacy'),
        openType: ''
      }, {
        name: this.$t('home3.columnList.setting'),
        openType: 'openSetting'
      }, {
        name: this.$t('home3.columnList.contactUs'),
        // openType: ''
      }]
    },
    columnList() {
      return [{
        name: '游戏',
        src: ''
      }, {
        name: this.$t('home3.my.project'),
        src: ''
      }]
    }
  },
  settingListClick(e) {
    const id = +e.detail.index
    switch (id) {
      case 0:
        $api.navigateTo('setting');
        break;
      case 1:
        $api.navigateTo('articlemain');
        break;
      case 2:
        $api.navigateTo('contactpage');
        break;
    }
  },
  onShareAppMessage() {
    return wx.ct.$share.createShare({
      id: 123
    })
  }
}
$page(page)