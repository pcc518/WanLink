// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 116.3410700000,
    latitude: 40.0278200000,
    markers:[
      {
        id:1,
        longitude: 116.3410700000,
        latitude: 40.0278200000,
        title:'万联科技',
        iconPath: '/images/location.png',
        width:50,
        height:50,
            
      }
    ],
    height:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var height = wx.getSystemInfoSync().screenHeight;
    // console.log(height);
    // var that=this;
    // that.data.height = height;
    // console.log(that.data.height);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap', this) 
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
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