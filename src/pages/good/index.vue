<template>
  <div>
    <swiper :imgUrls="imgUrls"></swiper>
    <div class="icon-slider"  >
      <div v-for="(item, index) in icons" :key="index">
        <img :src=item.icon />
        <p>{{item.text}}</p>
      </div>
    </div>

    <product-type></product-type>

    <!--<div class="product-box">-->
      <!--<h1 class="product-title">好物推荐</h1>-->
      <!--<div class="product-item-list">-->
        <!--<div class="product-item " :class="[(index%2 ==0)? 'product-right':'product-left']" v-for="item, index in product">-->
          <!--<img :src=item.imgUrl />-->
          <!--<p class="product-name">{{item.name}}</p>-->
          <!--<p class="product-info">{{item.info}}</p>-->
          <!--<p class="product-price">￥{{item.price}}</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>

<script>
  import Swiper from '../../components/swiper/index.vue'
  import productType from '../../components/productType/index.vue'
  export default {
    components: {
      Swiper,
      productType
    },
    data () {
      return {
        productList: [{
          imgUrl: 'https://cn.bing.com/th?id=OIP.W_kOFAKcqoBnSMoSWB3KSgHaHa&pid=Api&rs=1&p=0',
          name: '猫咪抓抓板',
          info: '猫咪爱不释手的小板板',
          price: '12'
        }, {
          imgUrl: 'https://i1.hdslb.com/bfs/archive/bf9a36469b5160cfd854faca6b96f843868d060b.jpg',
          name: '猫薄荷',
          info: '让你的猫咪醉生梦死',
          price: '24'
        }],
        imgUrls: [
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/1jJrriFo7D3Sd9iovbRORbGCcm8cxJMCYlZ2M8QzPq4!/b/dLYAAAAAAAAA&bo=kgK3AQAAAAARBxY!&rf=viewer_4',
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/RZlqzz8v3dEYqdr.CEKwi1Qvt6AVvsMY49e*3S34tw8!/b/dFMBAAAAAAAA&bo=kgK3AQAAAAARFwY!&rf=viewer_4',
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/i87sM4BpkOYe8i2nFMk9.l1Z0AWWhHGTSk1mJAhpjuQ!/b/dL8AAAAAAAAA&bo=kgK3AQAAAAARFwY!&rf=viewer_4',
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/SozpBsbVVmiXF.IMphI5MYJep2kClgvUCpzNoxMShHQ!/b/dMEAAAAAAAAA&bo=kgK3AQAAAAARFwY!&rf=viewer_4',
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/*8u4Nz2zCYC4NPFE3AD9RrMnarD8hqNYN9X3BtDS4Hg!/b/dD4BAAAAAAAA&bo=kgK3AQAAAAARFwY!&rf=viewer_4',
          'http://m.qpic.cn/psb?/V11caANH2Bsx8U/C6NtdT5UQhgNm*k7IWB.1nnI7jYVm7esovZkRxZua2M!/b/dD4BAAAAAAAA&bo=kgK3AQAAAAARFwY!&rf=viewer_4'
        ],
        icons: [{
          icon: 'http://m.qpic.cn/psb?/V11caANH37CeuG/qKh8O2g0HK4Eps1LFimEHaAdQrxYuC1IXetcgrlG2bE!/b/dFMBAAAAAAAA&bo=yADIAAAAAAADByI!&rf=viewer_4',
          text: '营养好物',
          url: ''
        }, {
          icon: 'http://m.qpic.cn/psb?/V11caANH37CeuG/Wuktc6eVKNLk9U3Yq8GrBulQXPEd2ZHrrzMZycLebjI!/b/dL4AAAAAAAAA&bo=HwHIAAAAAAADF.Q!&rf=viewer_4',
          text: '可爱服饰',
          url: ''
        }, {
          icon: 'http://m.qpic.cn/psb?/V11caANH37CeuG/M3hcYs5kYYLN.NSptsxpkD5wicn1TRQPC*GJsgURhwk!/b/dLYAAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4',
          text: '日常必备',
          url: ''
        }, {
          icon: 'http://m.qpic.cn/psb?/V11caANH37CeuG/M9Rqd27Ou6N3KtgiD1bc4dgYN.0gtcjzj8AdUehu57g!/b/dL8AAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4',
          text: '常用药品',
          url: ''
        }, {
          icon: 'http://m.qpic.cn/psb?/V11caANH37CeuG/Weq30EibS0zGOZGPhrWc0*2jHl*ooofYcrxxQPhXOyI!/b/dAgBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4',
          text: '会员中心',
          url: ''
        }]
      }
    },
    created () {
    }
  }
</script>
<style>
  .icon-slider img{
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .icon-slider p{
    font-size: 28rpx;
  }
  .icon-slider{
    margin: 30rpx;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .product-item-list{
    display: flex;
    justify-content: space-around;
    margin: 20rpx;
  }
  .product-item{
    width: 100%;
    height: 520rpx;
    background: white;
    text-align: left;
  }
  .product-item img{
    width: 350rpx;
    height: 350rpx;
  }
  .product-left{
    margin-right: 20rpx;
  }
  .product-box{
    background: #f2f2f2;
    text-align: center;
    padding: 25rpx 0;
  }
  .product-item p{
    padding: 5rpx 10rpx;
  }
  .product-name{
    font-size: 34rpx;
  }
  .product-info{
    font-size: 28rpx;
    color: #bbb;
  }
  .product-price{
    text-align: right;
    color: #f05654;
  }
</style>
