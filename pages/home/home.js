// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'请选择地址'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAddress();
  },
  loadAddress:function(){
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
  scanner:function(){
    wx.navigateTo({
      url: '../cart/cart?startScanner=true',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  jumpToShoppingcart:function(){
    wx.navigateTo({
      url: '../cart/cart?startScanner=false',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  jumpLocationList:function(){
    console.log("跳转地址列表");
    wx.navigateTo({
      url: '../location/location',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  jumpToPersonalCenter:function(){
    console.log("跳转订单列表");
    wx.navigateTo({
      url: '../personalCenter/personal',
    })
  }
})