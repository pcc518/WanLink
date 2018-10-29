// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // 'http://www.wanlink.com.cn/wl/images/slide1.jpeg',
      // 'http://www.wanlink.com.cn/wl/images/slide2.jpeg',
      // 'http://www.wanlink.com.cn/wl/images/slide3.jpeg',
      // 'http://www.wanlink.com.cn/wl/images/slide4.jpeg'
      '/images/swiper1.jpg',
      '/images/swiper2.jpg',
      '/images/swiper3.jpg',
      '/images/swiper4.jpg'

    ],
    indicatorDots: true,
    indicatorColor: "#FFFFFF",
    indicatorActiveColor:"#FFA500",//与上属性无效
    autoplay: true,
    interval: 4000,//默认5000
    duration: 500,//默认值
    circular:true,
    //功能区
    functions: [
      {
        function_imgUrl:'../../images/即时通讯.png',
        function_name:'即时通讯'
      },
      {
        function_imgUrl: '/images/移动应用.png',
        function_name: '移动应用'
      },
      {
        function_imgUrl: '/images/大数据.png',
        function_name: '大数据'
      },
      {
        function_imgUrl: '/images/云端.png',
        function_name: '云端'
      }
    ],
    shows:[
      {
        show_imgUrl: 'http://www.wanlink.com.cn/wl/images/event-2.png',
        show_name: '精准扶贫'
      },
      {
        show_imgUrl: 'http://www.wanlink.com.cn/wl/images/event-1.png',
        show_name: '职业教育'
      },
      {
        show_imgUrl: 'http://www.wanlink.com.cn/wl/images/event-3.png',
        show_name: '旅游'
      },
      {
        show_imgUrl: 'http://www.wanlink.com.cn/wl/images/event-4.png',
        show_name: '物流'
      }
    ],
    partners:[
      {
        partner_img:'/images/expert-1.jpg',
        partner_name:'农业银行'
      },
      {
        partner_img: '/images/expert-2.jpg',
        partner_name: '软促'
      },
      {
        partner_img: '/images/expert-3.jpg',
        partner_name: '中华职教社'
      },
      {
        partner_img: '/images/expert-4.jpg',
        partner_name: '航天集团'
      },
      {
        partner_img: '/images/expert-5.jpg',
        partner_name: '赛迪网'
      },
      {
        partner_img: '/images/expert-6.jpg',
        partner_name: '中国供应商'
      }
    ],
    scrollBarWidth:0,
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '首页',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    }),
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#FFA500',
      animation: {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    
    // this.data.scrollBarWidth = windowWidth * windowWidth / scrollWidth;
    // console.log(this.data.scrollBarWidth);
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
    // var systemInfo = wx.getSystemInfoSync();
    // var windowWidth = systemInfo.windowWidth;
    // var scrollWidth = windowWidth / 4 * 6;
    // this.data.scrollBarWidth = windowWidth * windowWidth / scrollWidth;
    // console.log(this.data.scrollBarWidth);
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