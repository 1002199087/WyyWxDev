// pages/vantDatetimePicker/vantDatetimePicker.js
var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime: "17:33",
    currentTimeFilter: "17:33",
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    maxDate: new Date(2020, 12, 31).getTime(),
    minHour: 1,
    maxHour: 24,
    formatter(type, value) {
      if (type === 'year') {
        return value + "年";
      } else if (type === 'month') {
        return value + "月";
      } else {
        return value + "日";
      }
    },
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0)
      }
      return options;
    },
    bottomShow: false
  },

  onDateChange: function(e) {
    this.setData({
      currentDate: e.detail
    })
  },

  onTimeChange: function(e) {
    this.setData({
      currentTime: e.detail
    })
  },

  onTimeConfirm: function(e) {
    this.setData({
      currentTime: e.detail,
      bottomShow: false
    })

  },

  onTimeFilterConfirm: function(e) {
    this.setData({
      currentTimeFilter: e.detail
    })
  },

  showTimePopup: function() {
    this.setData({
      bottomShow: true
    })
  },

  onPopupClose: function() {
    this.setData({
      bottomShow: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes());
    wx.setNavigationBarTitle({
      title: 'vant Datetimepicker 时间选择'
    });
    this.setData({
      currentTime: date.getHours() + ":" + date.getMinutes(),
      currentTimeFilter: "12:00"
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