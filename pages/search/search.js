// pages/search/search.js
/*
输入框绑定值改变事件input事件
1 获取到输入框的值
2 合法性判断
3 检验通过把输入框的值发送到后台4返回的数据打印到页面上
*/
import {
  list
} from "../../api/mock.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // list:[
    //   "丹青","成栋","图书馆"]
    list: [{
        name: '丹青楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        name: '图书馆停车场',
        number: "12",
        distance: "1200"
      },
      {
        name: '成栋楼停车场',
        number: "15",
        distance: "500"
      },
      {
        name: '交通学院停车场',
        number: "5",
        distance: "700"
      }
    ],
    condition: true,
    // searchValue: "",
    inputVal: "",
  },
  //跳转至地图
  navToMap: function () {
    wx.navigateTo({
      url: '/pages/intermediary/intermediary',
    })
  },
  // 监控文本框输入情况
  // onInput: function (e) {
  //   var detail = {
  //     q: e.detail.value
  //   }
  //   console.log(detail);
  //   console.log(typeof(detail));
  //   this.setData({
  //     searchValue: detail.value
  //   })
  // },
  onSearch: function (e) {
    var that = this;
    if (e.detail.value == ''){
      return;
  }
  that.setData({
    viewShowed: false,
    inputVal: e.detail.value
  });
   console.log(inputValue);
    //获取data里的list
    var list = this.data.list;
    var testList = [];
    console.log("123");
    console.log(list);
    for (var i = 0; i < list.length; i++) {
      console.log(list[i].name);
    }
    console.log(value);
    console.log("456");
    //模糊匹配
    for (var i = 0; i < list.length; i++) {
      if (list[i].name.indexOf(value) >= 0) {
        console.log(list[i].name);
        testList.push(list[i].name)
      }
    }
    this.setData({
      testList
    })
    console.log(testList)
    // return testList;
    // list.map(item=>{
    //   if(item.indexOf(value)>-1){
    //     testList.push(item)
    //   }
    // })
    // this.setData({testList})
    // console.log(testList)
    //隐藏总的数据
    this.setData({
      condition: false
    })
    //显示匹配成功的数据
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取模拟数据
    /*
    wx.request({
      // url: 'https://example.com/ajax?dataType=member',
      url:'http://127.0.0.1:8080',
      dataType: 'json',
      success(res) {
        console.log(res)
      }
    })
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let that = this;
    // let data_params = {
    //   "name":this.data.name
    // }
    //  console.log(list);

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(list);
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