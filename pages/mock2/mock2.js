var sectionlist_arr = new Array();//再定义一个数组接收查询出来的值
Page({
  data: {   
    sectionlist_data: [
      {
        id: 100,
        name: '丹青楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 2,
        name: '主楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 3,
        name: '锦绣楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 4,
        name: '行政楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 5,
        name: '保卫处停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 6,
        name: '科大小区停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 7,
        name: '乐松停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 8,
        name: '游泳馆停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 9,
        name: '锦侨楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 10,
        name: '文博楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 11,
        name: '逸夫楼停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 12,
        name: '专家公寓停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 13,
        name: '图书馆停车场',
        number: "10",
        distance: "1000"
      },
      {
        id: 14,
        name: '成栋楼停车场',
        number: "10",
        distance: "1000"
      },
      
    ], 
    sectionlist: "", 
    input_value:"",
    input_so_value: "",
    xq_name:"--未选择--",
    hiddenState:true,
    buttonState:false,
  },
  //跳转到新的页面
  new:function(){
    wx.navigateTo({
        url: '/pages/intermediary/intermediary',
      })
  },
 
//弹出菜单
  cp_tanchuang: function (e) {
    console.log('/', e)
    
      this.setData({
        hiddenState: false,
        input_value:"",
        sectionlist: this.data.sectionlist_data
      })  
 
  },
  //关闭菜单
  cp_tanchuang_X: function (e) { 
    this.setData({
      hiddenState: true
    }) 
  },
  //点击列表赋值
  section_clink: function (e) {
    console.log('/', e)
    console.log('你选择了id=' + e.target.dataset.section_list_id + ",name=" + e.target.dataset.section_list_name)
    this.setData({
      xq_name: e.target.dataset.section_list_name,
      hiddenState: true
    }) 
  },
  //获取输入框的值
  bind_input_so_value: function (e) {
    this.setData({
      input_so_value: e.detail.value
    })

  },
  //输入时便利数组
  txt_input: function () { 
    console.log('你输入的数据为：', this.data.input_so_value)
    sectionlist_arr=[];
    this.data.sectionlist = this.data.sectionlist_data;
    var zhi = "";//接收每个循环中的arr[i]的值
 
    //以下for语句为测试数据遍历，如果在实际项目中使用的话应做ajax查询返回
    for (var i = 0; i < this.data.sectionlist.length; i++) {
      zhi = this.data.sectionlist[i].name; 
      if (zhi.indexOf(this.data.input_so_value) != -1) {
        //因为indexof找不到的时候是一律为-1，所以直接判断是否为-1，不是就弹出这个值
        sectionlist_arr.push(this.data.sectionlist[i]);//将值放入第二个数组  
      } 
    }
    this.setData({ 
      sectionlist: sectionlist_arr,
      buttonState:true
    }) 
    }, 
  
  onLoad: function () { 
    this.sectionlist_arr=[];
    this.setData({
      sectionlist: this.data.sectionlist_data,
      buttonState:true,
    })
  }
})