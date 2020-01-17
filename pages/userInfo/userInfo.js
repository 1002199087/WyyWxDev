// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户个人信息
    userInfo: {
      avatarUrl: "", // 用户头像
      nickName: "", // 用户昵称
      language: "", // 语言
      country: "", // 国家
      province: "", // 省份
      city: "", // 城市
    },
    screenHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.setNavigationBarTitle({
      title: '获取微信用户信息',
    });

    var that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({
            'userInfo.avatarUrl': res.userInfo.avatarUrl,
            'userInfo.nickName': res.userInfo.nickName,
            'userInfo.language': res.userInfo.language,
            'userInfo.country': res.userInfo.country,
            'userInfo.province': res.userInfo.province,
            'userInfo.city': res.userInfo.city,
          }),
          wx.hideLoading()
      },
      fail: function() {
        //console.log("权限获取失败")
        wx.showModal({
          title: '提示',
          content: '请退回首页获取权限！',
          success: function(res) {
            if (res.cancel) { // 取消

            } else if (res.confirm) { // 确定
              wx.navigateBack({

              })
            }
          }
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})