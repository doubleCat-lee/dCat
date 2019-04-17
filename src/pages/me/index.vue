<template>
  <div>
    <div class="header">
      <img src="../../../static/images/header.jpg"/>
    </div>
    <div class="avatar">
      <img :src="userInfo.avatarUrl"/>
    </div>
    <div class="body">
      <h1>{{userInfo.nickName}}</h1>
      <h3>id: 37462948932</h3>
      <div class="my-fans">
        <div>
          <p>0</p>
          <p class="type">关注</p>
        </div>
        <div>
          <p>0</p>
          <p class="type">粉丝</p>
        </div>
        <div>
          <p>0</p>
          <p class="type">喜欢</p>
        </div>
      </div>
    </div>
    <div class="me-nav-box">
      <div class="me-nav">
        <div>作品</div>
        <div>草稿箱</div>
        <div>喜欢</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'userInfo'
      ])
    }
  }
</script>

<style>
  .header img{
    width: 100%;
    height: 300rpx;
  }
  .body{
    border-radius: 20rpx;
    position: absolute;
    top:285rpx;
    background: #fefefe;
    width: 100%;
  }
  .body h3{
    color: #333333;
    margin-left: 30rpx;
  }
  .body h1{
    margin: 30rpx 0 0 30rpx;
  }
  .my-fans{
    margin-left: 30rpx;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    margin-top: 20rpx;
  }
  .my-fans div{
    margin-right: 20rpx;
  }
  .type{
    font-size: 30rpx;
    color: #808080;
  }
  .me-nav-box{
    height: 80rpx;
    width: 100%;
    position: absolute;
    top: 550rpx;
    box-shadow: 1px 1px 5px #bbb;
  }
  .me-nav{
    display: flex;
    justify-content: space-around;
    line-height: 80rpx;
  }
  .avatar img{
    z-index: 99;
    position: absolute;
    top: 160rpx;
    left: 30rpx;
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
  }

</style>
