<template>
  <swiper v-if="imgUrls.length > 0"
          indicator-dots='true'
          autoplay='true'
          interval='5000'
          duration='1000'
          style="height: 400rpx" >
    <block v-for="(item, index) in imgUrls" :key="index">
      <swiper-item>
        <image :src="item" mode="scaleToFill"></image>
      </swiper-item>
    </block>
  </swiper>
</template>
<script>
  export default {
    props: ['imgUrls', 'height']
  }
</script>
<style>
  swiper image{
    width: 100%;
  }
</style>
