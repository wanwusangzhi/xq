// src/components/item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData: {
      default: [],
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e) {
      if (e.target.id === undefined) return
      const id = e.target.id
      this.triggerEvent('callback', {
        index: id
      })
    }
  }
})
