<template>
  <div>
    <swiper v-if="imgUrls.length > 0"
            indicator-dots='true'
            autoplay='true'
            interval='5000'
            duration='1000'>
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>
    <div class="channel-box">
      <div class="channel">
        <div class="channel-left">
          <img class="channel-img"
               src="../../../static/images/slider/member.png"/>
          <div>
            <p class="channel-name"># 会员之家 #</p>
            <p class="channel-info">请详细阅读我们的频道守则</p>
          </div>
        </div>
        <div class="channel-add-cancel"
             :class="[isAdd ?  '' :'channel-add']"
             @click="addChannel">
          {{isAdd?'已加入':'+ 加入'}}
        </div>
      </div>
    </div>
    <div class="channel-footer">
      没有你想要的频道？点击创建频道
    </div>
  </div>
</template>

<script>
// Use Vuex

export default {
  data () {
    return {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      isAdd: true
    }
  },
  methods: {
    addChannel () {
      this.isAdd = !this.isAdd
    }
  }
}
</script>

<style>
  swiper image{
    width: 100%;
  }
  .channel{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20rpx;
    border-bottom: solid #eee 1rpx;
    padding: 20rpx 0;
  }
  .channel-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .channel-img{
    width: 120rpx;
    height: 120rpx;
  }
  .channel-info{
    font-size: 28rpx;
    color: #bbb;
  }
  .channel-add-cancel{
    padding: 10rpx 20rpx;
    font-size: 30rpx;
    border-radius: 10rpx;
  }
  .channel-add{
    color: white;
    background: #f05654;
  }
  .channel-footer{
    font-size: 28rpx;
    color: #f05654;
    text-align: center;
  }


</style>
