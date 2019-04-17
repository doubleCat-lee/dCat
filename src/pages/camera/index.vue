<template>
  <div>
    <div class="video-img-box">
      <p v-if="!imgUrl && !vlogUrl">记录爱宠最蠢萌的瞬间</p>
      <img class="img" v-if="imgUrl" :src="imgUrl" mode="aspectFit"/>
      <video class="video"  v-if="vlogUrl" :src=vlogUrl @error="videoErrorCallback"></video>
      <div class="photograph-videotape-box"  v-if="!imgUrl && !vlogUrl">
        <div  @click="photograph">
          <img class="icon" src="../../../static/images/photograph.png"/>
          <span>拍照</span>
        </div>
        <div @click="videotape">
          <img class="icon" src="../../../static/images/videotape.png"/>
          <span >录像</span>
        </div>
      </div>
      <img v-if="imgUrl || vlogUrl" @click="cleanUrl" class="cha" src="../../../static/images/cha.png"/>
    </div>
    <input placeholder="一句话心情"  maxlength="15" :focus="focus" />
    <div class="publish-box" v-if="imgUrl || vlogUrl">
      <span>发布</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tempFilePaths: '',
        imgUrl: '',
        vlogUrl: ''
      }
    },
    methods: {
      photograph () {
        var self = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            self.imgUrl = res.tempFilePaths[0]
          }
        })
      },
      videotape () {
        var self = this
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 10,
          camera: 'back',
          height: 120,
          success (res) {
            self.vlogUrl = res.tempFilePath
          }
        })
      },
      cleanUrl () {
        this.imgUrl = ''
        this.vlogUrl = ''
      }
    },
    created () {
    }
  }
</script>

<style>
  .video-img-box{
    width: 100%;
    height: 500rpx;
    background: black;
    text-align: center;

  }
  .img{
    width: 100%;
    height: 100%;
  }
  .video{
    width: 100%;
    height: 100%;
  }
  .video-img-box p{
    font-size: 48rpx;
    color: white;
    line-height: 200rpx;
  }
  .video-img-box span{
    font-size: 48rpx;
    color: white;
  }
  .icon{
    width: 60rpx;
    height: 60rpx;
    margin: 30rpx;
  }
  .photograph-videotape-box{
    display: flex;
    justify-content: center;
  }
  .photograph-videotape-box div{
    margin: 30rpx;
  }
  .cha{
    position: absolute;
    width: 50rpx;
    height: 50rpx;
    top: 10rpx;
    right: 10rpx;
    z-index: 9999;
  }
  input{
    margin: 20rpx;
  }
  .publish-box{
    text-align: right;
    margin-top: 180rpx;
    margin-right: 20rpx;
  }
  .publish-box span{
    padding: 20rpx 80rpx ;
    border: solid 1rpx #0ce8ad;
    border-radius: 10rpx;
    color: #0ce8ad;
  }

</style>
