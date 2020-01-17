// pages/vantCheckbox/vantCheckbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unchecked: "/pages/res/uncheck.png",
    checked: "/pages/res/checked.png",
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
    fourChecked: false,
    fiveChecked: false,
    sixChecked: false,
    result: ["a", "b", "c"],
    result1: ["a", "c"]
  },

  onChange: function(e) {
    console.log(e);
    switch (parseInt(e.currentTarget.id)) {
      case 0:
        {
          this.setData({
            oneChecked: e.detail
          })
          break;
        }
      case 1:
        {
          this.setData({
            twoChecked: e.detail
          })
          break;
        }
      case 2:
        {
          this.setData({
            threeChecked: e.detail
          })
          break;
        }
      case 3:
        {
          this.setData({
            fourChecked: e.detail
          })
          break;
        }
      case 4:
        {
          this.setData({
            fiveChecked: e.detail
          })
          break;
        }
      case 5:
        {
          this.setData({
            sixChecked: e.detail
          })
          break;
        }
      case 6:
        {
          this.setData({
            result: e.detail
          });
          break;
        }
      case 7:
        {
          this.setData({
            result1: e.detail
          });
          break;
        }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: 'vant checkbox 复选框',
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