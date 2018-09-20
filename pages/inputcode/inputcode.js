// pages/inputcode/inputcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cansubmit:false,
    inputbarcodestr:""
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
  // 表单提交
  formSubmit:function(){
    console.log(this.data.inputbarcodestr);
    var pages = getCurrentPages();
    var curPage = pages[pages.length - 1];   //当前页面
    var prePage = pages[pages.length - 2];  //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prePage.setData({
      currentGetBarCode: this.data.inputbarcodestr
    })
    wx.navigateBack({
      
    })
  },
  inputbarcode:function(e){
    var str = e.detail.value;
    var isInput = false;
    if(str.length > 0){
      isInput = true;
    }else{
      isInput = false;
    }
    this.setData({
      cansubmit:isInput,
      inputbarcodestr:str
    })
  }
})