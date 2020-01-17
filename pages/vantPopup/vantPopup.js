// pages/vantPopup/vantPopup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    topShow: false,
    bottomShow: false,
    leftShow: false,
    rightShow: false,
    closeShow: false,
    custCloseShow: false,
    closePositionShow: false,
    roundShow: false,
  },

  /**
   * 圆角弹窗
   */
  showRoundPopup: function() {
    this.setData({
      roundShow: true,
    })
  },

  /**
   * 关闭图标位置
   */
  showClosePositionPopup: function() {
    this.setData({
      closePositionShow: true,
    })
  },

  /**
   * 自定义关闭图标
   */
  showCustClosePopup: function() {
    this.setData({
      custCloseShow: true,
    })
  },

  /**
   * 关闭图标
   */
  showClosePopup: function() {
    this.setData({
      closeShow: true,
    })
  },

  /**
   * 右边弹出
   */
  showRightPopup: function() {
    this.setData({
      rightShow: true,
    })
  },

  /**
   * 左边弹出
   */
  showLeftPopup: function() {
    this.setData({
      leftShow: true,
    })
  },

  /**
   * 底部弹出
   */
  showBottomPopup: function() {
    this.setData({
      bottomShow: true,
    })
  },

  /**
   * 顶部弹出
   */
  showTopPopup: function() {
    this.setData({
      topShow: true,
    })
  },

  /**
   * 基础用法
   */
  showPopup: function() {
    this.setData({
      show: true,
    })
  },

  onClose: function() {
    console.log("关闭Popup界面"),
      this.setData({
        show: false,
        topShow: false,
        bottomShow: false,
        leftShow: false,
        rightShow: false,
        closeShow: false,
        custCloseShow: false,
        closePositionShow: false,
        roundShow: false,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: 'vant popup 弹出层',
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