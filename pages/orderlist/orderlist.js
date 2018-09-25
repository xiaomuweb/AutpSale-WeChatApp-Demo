// pages/orderlist/orderlist.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderListData:[
      {
        orderId:"www.baidu.com",
        orderTime:"2018-09-12",
        orderAddress:"江西省南昌市青山湖区北京东路天虹",
      },
      {
        orderId: "www.code4app.com",
        orderTime: "2018-09-12",
        orderAddress: "江西省南昌市青山湖区北京东路天虹",
      },
      {
        orderId: "www.github.com",
        orderTime: "2018-09-12",
        orderAddress: "江西省南昌市青山湖区北京东路天虹",
      },
      {
        orderId: "www.csdn.com",
        orderTime: "2018-09-12",
        orderAddress: "江西省南昌市青山湖区北京东路天虹",
      },
    ],
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

  },
  jumpToDetail:function(res){
    console.log(res);
    var idx = res.target.id;
    var obj = this.data.orderListData[idx];
    wx.navigateTo({
      url: '../orderdetail/orderdetail?orderId='+obj.orderId,
    })
  }
})