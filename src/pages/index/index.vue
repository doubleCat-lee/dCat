<template>
  <div class="indexContainer">
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl"/>
    <button class="btn" v-else open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点击获取用户信息</button>
    <p class="userName">Holle {{userInfo.nickName}}</p>
    <div @tap="toHome" class="goStudy" :class="{success:isShow}">
      <p>开启奇幻之旅</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      ...mapMutations({
        setUserInfo: 'SET_USER_INFO'
      }),
      toHome () {
        if (this.userInfo.length) {
          wx.switchTab({
            url: `/pages/home/main`
          })
        }
      },
      bindGetUserInfo (e) {
        if (e.mp.detail.rawData) {
          this.setUserInfo(e.mp.detail.userInfo)
          this.isShow = true
          setTimeout(function () {
            wx.switchTab({
              url: `/pages/home/main`
            })
          }, 2000)
        } else {
          console.log('用户按了拒绝按钮')
        }
      }
    }
  }
</script>

<style>
  .indexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index_img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }

  .userName {
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }

  .goStudy {
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
  }
  .btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 100rpx 0;
    line-height: 300rpx;
    text-align: center;
    font-size: 26rpx;
  }
  .success{
    border-color: #FB586E;
    color: #FB586E;
  }

</style>
