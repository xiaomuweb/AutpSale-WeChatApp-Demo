// pages/home/home.js
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var qqmapsdk;
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
    this.getLocation();
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
  getLocation:function(){
    var that = this;
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'QUIBZ-EKGR2-FMWUD-CTYVT-6Z5LZ-MPBCJ'
    });
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        console.log("------------ home onload ------------");
        console.log(res);
        const latitude = res.latitude;
        const longitude = res.longitude;
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (addressRes) {
            console.log("----------- 地理位置解析 -------------");
            console.log(addressRes);
            var addressStr = addressRes.result.formatted_addresses.recommend;
            that.setData({
              address: addressStr
            })
          },
        })
      },
    })
  },
  scanner:function(){
    wx.navigateTo({
      url: '../shoppingcart/shoppingcart?startScanner=true',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  jumpToShoppingcart:function(){
    wx.navigateTo({
      url: '../shoppingcart/shoppingcart?startScanner=false',
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
  }
})