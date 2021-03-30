Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    nickName:'未登录',
    src:'/images/slide00.jpg',

  },
  about:function () {
    wx.navigateTo({
      url: '/pages/concerning/concerning',
    })
  },
  caozuo:function () {
    wx.navigateTo({
      url: '/pages/caozuo.11/caozuo.11',
    })
  },
  yijian:function () {
    wx.navigateTo({
      url: '/pages/yijian11/yijian11',
    })
  },
  lianxi:function () {
    wx.navigateTo({
      url: '/pages/lianxi11/lianxi11',
    })
  },




  getMyInfo:function (e) {
   //console.log(e.detail.userInfo)
   let info = e.detail.userInfo

   this.setData({
     isLogin:true,
     src:info.avatarUrl,
     nickName:info.nickName
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