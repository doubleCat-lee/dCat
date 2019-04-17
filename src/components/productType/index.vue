<template>
  <div class="product-type-box">
    <div class="product-type-row">
      <p>新人折扣专场</p>
    </div>
    <div class="product-type-left-right">
      <div class="product-type-left">
        <p>服饰专场</p>
      </div>
      <div class="product-type-right">
        <div class="product-type-right-top">
          <p>狗狗专场</p>
        </div>
        <div class="product-type-right-bottom">
          <p>猫咪专场</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .product-type-box{
    text-align: center;
    line-height: 100rpx;
    margin-bottom: 20rpx;
  }
  .product-type-row{
    background: #ffbca2;
    height: 200rpx;
    margin: 20rpx;
    border-radius: 20rpx 20rpx 0 0 ;
    color: #e1481a;
  }
  .product-type-left{
    background: #ffc3d6;
    height: 420rpx;
    margin: 0 20rpx;
    width: 100%;
    border-radius: 10rpx;
    color: #ce2a5a;
  }
  .product-type-right{
    width: 100%;
    margin-right: 20rpx;

  }
  .product-type-right-top{
    background: #ffbcb7;
    height: 200rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    color: #c74138;
  }
  .product-type-right-bottom{
    background: #dac3fd;
    height: 200rpx;
    border-radius: 10rpx;
    color: #6520bd;
  }
  .product-type-left-right{
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
