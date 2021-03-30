Page({
  ting:function () {
    wx.navigateTo({
      url: '/pages/ting1/ting1',
    })
  },




  /**
   * 页面的初始数据
   */
  data: {
    //轮播图素材
    swiperImg:[
      {src:'/images/slide02.jpg'},
      {src:'/images/slide01.jpg'},
      {src:'/images/slide00.jpg'},
      {src:'/images/slide03.png'}
    ]
  },
  
  // 地图
  Location:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  realLocation:function(){
    const _locationChangeFn = function(res) {
      console.log('location change', res)
     }
     wx.onLocationChange(_locationChangeFn)
     wx.offLocationChange(_locationChangeFn)
  },
  //停车场预约
  medium:function () {
    wx.navigateTo({
      url: '/pages/intermediary/intermediary',
    })
  },
  jumpSearch:function(){
    wx.navigateTo({
      url: '/pages/mock2/mock2',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})



