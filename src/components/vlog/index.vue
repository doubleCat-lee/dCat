<template>
  <div>
    <div class="vlogContainer">
      <div class="vlogHeader">
        <div class="vlogLeft">
          <img :src=item.avatarUrl />
          <div class="title">
            <div>
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.date}}</span>
            </div>
            <div>
              <span class="text">{{item.title}}</span>
            </div>
          </div>
        </div>
        <div class="follow"
             :class="{followActive:isFollow}"
             @click="onfollow">
          <span>{{isFollow? '+  关注': '已关注'}}</span>
        </div>
      </div>
      <div class="vlogContent">
        <video :src=item.videoUrl
               @error="videoErrorCallback"></video>
      </div>
      <div class="vlogFooter">
        <div class="comments">
          <div>
            <img :src=comments.avatarUrl />
            <span>{{comments.content}}</span>
          </div>
        </div>
        <div class="comment">
          <input placeholder="发射评论" :focus="focus" />
          <img @click="onLike"
               :src="[isLike?'http://m.qpic.cn/psb?/V11caANH28YSiO/b4N5sJh7MntQnasUcKQz3qUY9wMBBXA7iXMK6ndopiU!/b/dFMBAAAAAAAA&bo=yADIAAAAAAADByI!&rf=viewer_4':'http://m.qpic.cn/psb?/V11caANH28YSiO/6iOELU3btGc0EvpFbGNPdSbZE*YfPIg1l.iLfxCJVqU!/b/dFQBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4']"/>
          <img @click="onshare"
               src="data:image/png;base64,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"/>
        </div>
        <div class="operate">
          <span>{{item.comment_num}}·评论</span>
          <span>{{item.like_num}}·笔芯</span>
          <span>{{item.play_num}}·观看</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        isFollow: true,
        comments: this.item.comments[0],
        isLike: false
      }
    },
    methods: {
      onfollow () {
        this.isFollow = !this.isFollow
      },
      onLike () {
        this.isLike = !this.isLike
      },
      onshare () {
        console.log('dwc')
        wx.hideShareMenu()
      }
    }
  }
</script>

<style>
  .vlogContainer{
    padding: 50rpx;
    font-size: 28rpx;
  }
  .vlogHeader{
    display: flex;
    justify-content: space-between;
  }
  .vlogHeader img{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    justify-content: flex-start;
  }
  .vlogLeft{
    display: flex;
    justify-content: flex-start;
  }
  .name{
    color: #6F6C6C;
  }
  .time{
    color: #B4B4B4;
    padding: 20rpx;
  }
  .title{
    margin-left: 30rpx;
  }
  .follow{
    line-height: 80rpx;
  }
  .followActive{
    color: #E08359;
  }
  .vlogContent video{
    width: 100%;
    height: 400rpx;
    margin: 20rpx 0;
  }
  .comment img{
    width: 65rpx;
    height: 65rpx;
  }
  .comment input{
    width: 450rpx;
    height: 65rpx;
    background: #F2F2F2;
    padding: 0 20rpx;
  }
  .comments img{
    width: 35rpx;
    height: 35rpx;
    border-radius: 50%;
    padding-right: 20rpx;
  }
  .comments {
    display: flex;
    justify-content: flex-start;
  }
  .comment{
    display: flex;
    justify-content: space-between;
    margin: 10rpx 0;
  }
  .operate span{
    color: #6F6C6C;
    padding-right: 20rpx;
  }
</style>
