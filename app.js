//app.js
var QQMapWX = require('libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var qqmapsdk;

App({
  globalData:{
    address: null
  },
  onLaunch: function () {
    this.getLocation();
  },
  getLocation: function () {
    var that = this;
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'QUIBZ-EKGR2-FMWUD-CTYVT-6Z5LZ-MPBCJ'
    });
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        console.log("------------ app onLaunch ------------");
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
            that.globalData.address = addressStr;
            if (that.addressReadyCallback){
              that.addressReadyCallback(addressStr);
            }
          },
        })
      },
    })
  },
})