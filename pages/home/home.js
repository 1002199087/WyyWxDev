// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num: 0,
    buttons: [{
        id: 0,
        text: '获取权限'
      },
      {
        id: 1,
        text: '获取微信信息'
      },
      {
        id: 2,
        text: 'input 输入框'
      },
      {
        id: 3,
        text: 'vant button 按钮'
      },
      {
        id: 4,
        text: 'vant cell 单元格'
      },
      {
        id: 5,
        text: 'vant icon 图标'
      },
      {
        id: 6,
        text: 'vant image 图片'
      },
      {
        id: 7,
        text: 'vant layout 布局'
      },
      {
        id: 8,
        text: 'vant popup 弹出层'
      },
      {
        id: 9,
        text: 'vant transition 动画'
      },
      {
        id: 10,
        text: 'vant checkbox 复选框'
      },
      {
        id: 11,
        text: 'vant DatetimePicker 时间选择'
      },
      {
        id: 12,
        text: 'vant field 输入框'
      }
    ]
  },

  /**
   * vant field 输入框
   */
  goToVantField: function() {
    wx.navigateTo({
      url: '/pages/vantField/vantField',
    })
  },

  /**
   * vant DatetimePicker 时间选择
   */
  goToVantDatetimePicker: function() {
    wx.navigateTo({
      url: '/pages/vantDatetimePicker/vantDatetimePicker',
    })
  },

  /**
   * vant checkbox 复选框
   */
  goToVantCheckbox: function() {
    wx.navigateTo({
      url: '/pages/vantCheckbox/vantCheckbox',
    })
  },

  /**
   * vant transition 动画
   */
  goToVantTransition: function() {
    wx.navigateTo({
      url: '/pages/vantTransition/vantTransition',
    })
  },

  /**
   * vant popup 弹出层
   */
  goToVantPopup: function() {
    wx.navigateTo({
      url: '/pages/vantPopup/vantPopup',
    })
  },

  /**
   * vant layout 布局
   */
  goToVantLayout: function() {
    wx.navigateTo({
      url: '/pages/vantLayout/vantLayout',
    })
  },

  /**
   * 跳转到userInfo界面
   */
  goToUserInfo: function() {
    wx.navigateTo({
      url: '/pages/userInfo/userInfo',
    })
  },

  /**
   * 跳转到input界面
   */
  goToInpput: function() {
    wx.navigateTo({
      url: '/pages/input/input',
    })
  },

  /**
   * Vant button按钮
   */
  goToVantButton: function() {
    wx.navigateTo({
      url: '/pages/vantButton/vantButton',
    })
  },

  /**
   * Vant cell单元格
   */
  goToVantCell: function() {
    wx.navigateTo({
      url: '/pages/vantCell/vantCell',
    })
  },

  /**
   * Vant icon 图标
   */
  goToVantIcon: function() {
    wx.navigateTo({
      url: '/pages/vantIcon/vantIcon',
    })
  },

  /**
   * vant image 图片
   */
  goToVantImage: function() {
    wx.navigateTo({
      url: '/pages/vantImage/vantImage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      }),
      wx.setNavigationBarTitle({
        title: '首页',
      })
  },

  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },

  onItemClicked: function(e) {
    var s = e.currentTarget.dataset.item.id + "";
    var i = parseInt(s);
    switch (i) {
      case 0:
        {
          //this.bindGetUserInfo(e);
          console.log(e.detail.userInfo)
          break;
        }
      case 1:
        {
          this.goToUserInfo()
          break;
        }
      case 2:
        {
          this.goToInpput()
          break;
        }
      case 3:
        {
          this.goToVantButton()
          break;
        }
      case 4:
        {
          this.goToVantCell()
          break;
        }
      case 5:
        {
          this.goToVantIcon()
          break;
        }
      case 6:
        {
          this.goToVantImage()
          break;
        }
      case 7:
        {
          this.goToVantLayout()
          break;
        }
      case 8:
        {
          this.goToVantPopup()
          break;
        }
      case 9:
        {
          this.goToVantTransition()
          break;
        }
      case 10:
        {
          this.goToVantCheckbox()
          break;
        }
      case 11:
        {
          this.goToVantDatetimePicker()
          break;
        }
      case 12:
        {
          this.goToVantField()
          break;
        }
    }
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