// pages/personalCenter/personal.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    servicePhoneNumber:"010-10010",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("personal ===》 userinfo");
    console.log(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else{
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } 
    console.log(this.data.userInfo);
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
  jumpToOrder:function(){
    wx.navigateTo({
      url: '../orderlist/orderlist',
    })
  },
  callService:function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.servicePhoneNumber,
    })
  }
})