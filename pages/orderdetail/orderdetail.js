// pages/orderdetail/orderdetail.js
var QRCode = require('../../libs/weapp-qrcode.js')
var qrcode;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderCode:"",
    orderGoodsList:[
      {
        goodsid:123,
        goodsname:"可乐",
        goodsprice:213,
        goodscount:10,
        goodsamount:2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      },
      {
        goodsid: 123,
        goodsname: "可乐",
        goodsprice: 213,
        goodscount: 10,
        goodsamount: 2130,
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("orderDetail --> options:");
    console.log(options);
    this.data.orderCode = options.orderId;
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: this.data.orderCode,
      width: 150,
      height: 150,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });
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