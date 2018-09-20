// pages/location/location.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loactionList:[
      {
        locationid:"thjd",
        addressName:"京东天虹",
        addressDetail:"江西省南昌市青山湖区北京东路1321号",
        addressDistance:"123m",
        latitude:28.674462,
        longitude:115.973917,
      },
      {
        locationid: "thmf",
        addressName: "魔方天虹",
        addressDetail: "江西省南昌市青山湖区北京东路2323号",
        addressDistance: "343m",
        latitude: 28.680650,
        longitude: 115.880460,
      },
      {
        locationid: "thfl",
        addressName: "法力天虹",
        addressDetail: "江西省南昌市昌北万象1321号",
        addressDistance: "43.2Km",
        latitude: 28.674680,
        longitude: 115.993401,
      },
    ],
    address:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAddress();
  },
  loadAddress: function () {
    // app 的 地址是否已经加载
    if (app.globalData.address) {
      // 已经加载 赋值
      this.setData({
        address: app.globalData.address
      })
    } else {
      // 延后加载 重写 app.js 中的 回调方法 获取回调数据
      app.addressReadyCallback = res => {
        this.setData({
          address: res
        })
      }
    }
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

  },
  selectLocation:function (obj){
    var idx = obj.currentTarget.id;
    var locationModel = this.data.loactionList[idx];
  },
  showInMap:function(obj){
    var idx = obj.currentTarget.id;
    var locationModel = this.data.loactionList[idx];
    wx.openLocation({
      latitude: locationModel.latitude,
      longitude: locationModel.longitude,
    })
  }
})