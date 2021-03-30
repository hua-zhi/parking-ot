Page({

  ting1:function () {
    wx.navigateTo({
      url: '/pages/ting2/ting2',
    })
  },
  data: {
    selects:['12:30','14:30','15:30','19:30','21:30'],
    clickId: -1
  },
  onLoad: function () {
  },
  /**
   * 用户点击Button,字体变色.
   */
  changeColor: function (res) {
    if (this.data.clickId == res.currentTarget.id){
      this.setData({
        clickId: -1
      })
     return;
    }
    this.setData({
      clickId: res.currentTarget.id
    })
  }
})