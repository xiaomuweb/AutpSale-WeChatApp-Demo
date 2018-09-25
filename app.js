//app.js
var QQMapWX = require('libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
var qqmapsdk;

App({
  globalData:{
    address: null,
    userInfo: null,
  },
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("res.code" + res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
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