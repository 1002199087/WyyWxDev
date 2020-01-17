// pages/vantTransition/vantTransition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noSetFlag: false,
    showText: "",
    transitionName: ""
  },

  onSetClick: function(e) {
    var i = parseInt(e.currentTarget.id);
    switch (i) {
      case 0:
        {
          this.setData({
            noSetFlag: (!this.data.noSetFlag),
            showText: "无设定效果"
          })
          break;
        }
      case 1:
        {
          this.setData({
            transitionName: "fade",
            noSetFlag: (!this.data.noSetFlag),
            showText: "fade"
          })
          break;
        }
      case 2:
        {
          this.setData({
            transitionName: "fade-up",
            noSetFlag: (!this.data.noSetFlag),
            showText: "fade-up 上滑淡入"
          })
          break;
        }
      case 3:
        {
          this.setData({
            transitionName: "fade-down",
            noSetFlag: (!this.data.noSetFlag),
            showText: "fade-down 下滑淡入"
          })
          break;
        }
      case 4:
        {
          this.setData({
            transitionName: "fade-left",
            noSetFlag: (!this.data.noSetFlag),
            showText: "fade-left 左滑淡入"
          })
          break;
        }
      case 5:
        {
          this.setData({
            transitionName: "fade-right",
            noSetFlag: (!this.data.noSetFlag),
            showText: "fade-right 右滑淡入"
          })
          break;
        }
      case 6:
        {
          this.setData({
            transitionName: "slide-up",
            noSetFlag: (!this.data.noSetFlag),
            showText: "slide-up 上滑进入"
          })
          break;
        }
      case 7:
        {
          this.setData({
            transitionName: "slide-down",
            noSetFlag: (!this.data.noSetFlag),
            showText: "slide-down 下滑进入"
          })
          break;
        }
      case 8:
        {
          this.setData({
            transitionName: "slide-left",
            noSetFlag: (!this.data.noSetFlag),
            showText: "slide-left 左滑进入"
          })
          break;
        }
      case 9:
        {
          this.setData({
            transitionName: "slide-right",
            noSetFlag: (!this.data.noSetFlag),
            showText: "slide-right 右滑进入"
          })
          break;
        }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: 'vant transition 动画',
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