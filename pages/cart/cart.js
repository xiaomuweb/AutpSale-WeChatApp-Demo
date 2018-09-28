// pages/cart/cart.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    continuityscanner: false,// 是否连续扫码
    shoppingcartlist: [
      {
        count: 3, // 数量
        goodsName: "阿萨姆奶茶", // 商品名称
        goodsCode: "692530373057", // 商品条码
        price: 4.5 // 价格
      },
      {
        count: 1, // 数量
        goodsName: "利群香烟", // 商品名称
        goodsCode: "6901028118170", // 商品条码
        price: 13 // 价格
      }
    ], // 购物车列表
    amount: 0, // 购物车总金额
    currentGetBarCode: "", // 当前获取到的条形码编号 可以通过扫码获取 和 手动输入获取
    scannerAuto: true,
    address: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("------------onload-----------");
    console.log(options.startScanner);
    var scannerAuto = options.startScanner == "true" ? true : false;
    this.setData({
      scannerAuto: scannerAuto
    })
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
    console.log("------------onready-----------");
    console.log(this.data.scannerAuto ? "自动扫码" : "就不自动扫码");
    if (this.data.scannerAuto) {
      this.startScannerCode();
    }
    this.getAmount();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.currentGetBarCode);
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
  payTheBill: function () {
    if (this.data.shoppingcartlist.length > 0){
      wx.navigateTo({
        url: '../payment/payment?amount=' + this.data.amount,
      })
    }
  },
  inputcode: function () {
    wx.navigateTo({
      url: '../inputcode/inputcode',
    })
  },
  changeContinuityscanner: function () {
    this.continuityscanner = !this.continuityscanner;
    this.setData({
      continuityscanner: this.continuityscanner
    })
  },
  getAmount: function () {
    var tempAmount = 0;
    for (var i = 0; i < this.data.shoppingcartlist.length; i++) {
      var obj = this.data.shoppingcartlist[i];
      tempAmount += (obj.count * obj.price);
    }
    this.data.amount = tempAmount;
    this.setData({
      amount: this.data.amount
    })
  },
  reduceCount: function (obj) {
    console.log("reduce ==> " + obj.target.id);
    var idx = obj.target.id;
    var count = this.data.shoppingcartlist[idx].count;
    if (count > 1) {
      count--;
      this.data.shoppingcartlist[idx].count = count;
      this.setData({
        shoppingcartlist: this.data.shoppingcartlist
      })
    } else {
      this.data.shoppingcartlist.splice(idx, 1);
      this.setData({
        shoppingcartlist: this.data.shoppingcartlist
      })
    }
    this.getAmount();
  },
  addCount: function (obj) {
    console.log("add ==> " + obj.target.id);
    const idx = obj.target.id;
    var count = this.data.shoppingcartlist[idx].count;
    count++;
    this.data.shoppingcartlist[idx].count = count;
    this.setData({
      shoppingcartlist: this.data.shoppingcartlist
    })
    this.getAmount();
  },
  startScannerCode: function () {
    console.log("开始扫码");
    var that = this;
    var continuityscannercode = this.continuityscanner;
    wx.scanCode({
      success(res) {
        console.log("扫码内容 ==》 " + res.result + "\n"); // 扫到的内容是 条形码的 条码号
        that.setData({
          currentGetBarCode: res.result
        })
        // console.log("扫码类型 ==》 " + res.scanType + "\n");
        // console.log("扫码字符集 ==》 " + res.charSet + "\n");
        // console.log("二维码path ==》 " + res.path + "\n");
        // console.log("原始数据，base64编码 ==》 " + res.rawData + "\n");
        // 在这里发起请求？添加购物车？还是请求商品，添加在本地？本地不应该存储数据吧，感觉还是内存太少，2M还是5M？
        // 发起请求，添加购物车，返回购物车列表数据，刷新列表
        const length = that.data.shoppingcartlist.length;
        that.data.shoppingcartlist = [{ count: 3, goodsName: "阿萨姆奶茶", goodsCode: 692530373057 + length + "", price: 4.5 }].concat(that.data.shoppingcartlist);
        that.setData({
          shoppingcartlist: that.data.shoppingcartlist
        })
        that.getAmount();
        if (continuityscannercode) {
          that.startScannerCode();
        }
      }
    })
  },
  jumpLocationList: function () {
    console.log("跳转地址列表");
    wx.navigateTo({
      url: '../location/location',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})