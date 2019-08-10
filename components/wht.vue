<template>
  <div class="wrap">
    <div class="cube">
        <div class="out_front"><img src="	https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/2.jpeg" class="pic"></div>
        <div class="out_back"><img src="https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/3.jpg" class="pic"></div>
        <div class="out_left"><img src="https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/4.jpg" class="pic"></div>
        <div class="out_right"><img src="https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/6.jpg" class="pic"></div>
        <div class="out_top"><img src="https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/7.jpg" class="pic"></div>
        <div class="out_bottom"><img src="https://yanbucket-1258438600.cos.ap-guangzhou.myqcloud.com/sy.jpg" class="pic">
        </div>
    </div>
  </div>
</template>

<style lang="less">
  .wrap {
    width: 120px;
    height: 200px;
    margin: 20px;
    position: fixed;
    top: 70px;
    right: 50px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    z-index: 10086;

    .cube {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      transform-style: preserve-3d;
      transform: rotateX(-30deg) rotateY(-80deg);
      animation: rotate linear 20s infinite;

      @keyframes rotate {
        from {
            transform: rotateX(0deg) rotateY(0deg);
        }
        to {
            transform: rotateX(360deg) rotateY(360deg);
        }
      }

      .out_front {
        transform: rotateY(0deg) translateZ(60px);
      }

      .out_back {
        transform: translateZ(-60px) rotateY(180deg);
      }

      .out_left {
        transform: rotateY(-90deg) translateZ(60px);
      }

      .out_right {
        transform: rotateY(90deg) translateZ(60px);
      }

      .out_top {
        transform: rotateX(90deg) translateZ(60px);
      }

      .out_bottom {
        transform: rotateX(-90deg) translateZ(60px);
      }

      div {
        position: absolute;
        width: 120px;
        height: 120px;
        opacity: 0.8;
        transition: all .4s;

        img {
          border: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
