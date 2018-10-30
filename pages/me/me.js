// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    abouts:[
      {
        me_img:'/images/tel.png',
        me_des:'业务联系'
      },
      {
        me_img: '/images/mail.png',
        me_des: '电子邮箱'
      },
      {
        me_img: '/images/address.png',
        me_des: '公司地址'
      }
    ],
    mail:'qiantai@wanlink.com.cn',
  },

  callPhone:function() {
    wx.makePhoneCall({
      phoneNumber: '010-62790556',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  setBoard:function() {
    wx.setClipboardData({
      data: this.data.mail,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            console.log(res)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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

  }
})