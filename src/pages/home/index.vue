<template>
  <div>
    <div class="nav-box">
    <div class="nav">
      <img src="data:image/png;base64,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"/>
      <div>
        <span class="follower" :class="{focus:isFollower}" @click="onfollow">关注</span>
        <span class="recommendation" :class="{focus:!isFollower}" @click="onrecommend">推荐</span>
      </div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAR2klEQVR4Xu3dB7AsQVUG4B9zRjCLARQxY85ZzDkLZi0z5oiKCqioiGDCLIIBUcwBs4KKGVFEMGIWMYs5U5/Vl3dfv+7Z2d2Z2blv51Tdurfq7vZ0+Kf7hP+cvkU2OesZuMVZj34bfDYAnDkIbgYAPFOSl0xy+/L7f5L8U5J/Lj//mOQPkzw5yf+d+XrfMPyrAICnS/KySV4+yW2T3K78+Pv5kzx3Mmon+48kf5PkbwsYfi/Jbyd5Qvn9Z+cIjrUC4JnLwt45yceVhZ97fX4/yf2SfEfZQf5z7geuof01AUBf7pjkfZK8YXnjn/0Ek/SUJI9L8otJHpLk0Sfow2KPXAMAni/JqyT55CRvmsSWvxb53yQ/nORzk/xW2RnW0rdJ+nFKADx9kk9L8v5li3+GSUY0TyOOA/rCA5M8IMl/z/OY5Vs9BQAobe+Q5F5JXvyIIdPo/z7JPySxbdP8afz14jxjkudM8lzlx/NvNVJxbHXvV5PcI8mP3gxAWBoAzvZvSnKbJIe88bT4n0ny00l+KsnfJfF2/lf57e/a1HOkAAFz8eI3kxEI37mYj/vikEXxu0neO8lv7vvlNX1+KQAw1z4xyUcnedY9JuCvk/xSkkcl+fEkj0niXJ5SXjTJ6yd5vaKLvELZMcbMjV3n/km+vJiYU/ZrkbbGDPLYjtDsvbG33qOhJyX5hCQP3eM7U33UcXHPJB9Vdowx7f55kjcvPoUxn1/NZ+YEAFv+04sd7/zdJU9M8rVla/+VXR9e4P8vVo6JDyo7w65H0kP0H3h4Ia+EzAUA9vvXJbnLjllwXlPiHpzkbkmcrWsTc2Q3YLG84AjlkXLIgWVcq5c5APBKSb4hyavumCw++69O8pXFxJr6bJ968u0IAH33JM8x0DhQPzaJnePXpu7E1O1NCQBtvXqS703ywjs6+htJPiXJj009oAXaAwQAv9MOgP9FkndP8gtrDkJNCYC3LEobO7sn/1K2+m8tNvwC6zXLIxxxb1PO/KHxshIcBw+fpRcTNDoFANjZb1vOcQ6WnrCbP37Nk3HAfL5yMQP5N3oubL4KRwczdnXh6CkA8EZJfijJUOCG/f7WJQx7wDyv+iv8GhReTqGeUAjfqvg0VjWYYwFA4RMseaHOqCh6D0ty1+K1W9XgJ+wMryaTl17TexH+Msm7FJ1gwkcf19QxAOAw+bkSwu314ifKWclVew7yXknoNz35nSSvvSYT8VAAPFsZ6DsOaMJfX978syBWXFrxj0zypQOxDroA60Dg6uRyKAA+v2jzrQGw5+kE71qCNCcf5Ak68BlJPqsEoFqP5//4iBP064ZHHgIAmu8jktyyMwB+gPc448W/mJZ7F+9ha5p4PN+v0M9OioN9AUDZe3zh69UdZ+L8ehL+AFG8cxfh5+8u1k/LRHQ0IruKgZxM9gXAV5RzvdVh3j0RsW3xr80OlzEn0Bt0Vljw6MNOtvojAhuX+/YahYzxLI0O8/C9fQn7nnI8a3z2Syf5yUKCqfvHOnq7U7rEx+4AnB2cOQbT2vo/sHgC17gAa+gTsuuPdPgF8hGQYrGdFpexAODl+sbOAJg1qFV2gU3aM4Ab8S1J3q3xb84y4WaWweIyBgC8XFKrXqTROwRMu8JJFZnFZ+2wB9IH/ijJ8zS+LlvJ/P77YU0f/q0xAMDXv09n62fqiI9vMm4GUOA5yFqEWM4jwbJFA0a7ACDUyd0rL6+Wv0ryOtvbP27ly6eeNwm6m7zGWvAKuYkXzVHcBQA2/Q90zv7PKd6uvWZg+3Det1Dj66ngQaVMo80vJrsAgIPfsmGdZc7+c/PzT7UwqO6v2WhM+hlP62KZR0MAEOrFaWt5segF951qNs6wHXEAXMhanP92XZbVIjIEgC9I8qmdTt4hiXTqTQ6bATUO1CeQH1kLhrSjYBFlsAcAduvPJuH9q0WSB8fGJsfNgDoEwsK14AxwDP3bcc2P+3YPAFK52P7i/peF00LnrnQ+3Lipmf1T2MUWu3atcw+/Yvnf7J3oAYBnSr5bLRZeqtcm08yAIhSv1WiKfkXPml16AMDgfanG0/HhP3j2Xp3PA76sJMzWI8YkloU0O5WuBQAVt3oKHuXkQeezPrOP9J2SfE/nKajm9LBZpQUAPD+snpbwYP3xrD06r8YRaxW5aFkDimNxD88qLQAw/ZiAtXBVtgJCs3bwDBpHr5NbUcvXJPnwucffAgA7FF+tFkGMD5m7Q2fY/meXkjP10OVNcgrNKi0ASGYUlKgF0VOSxybTzgBXO5d7LRxFHG6zSgsAzng26mURqHiJ7fyfZS1kUqtARh+4LCwAxNJZpQUApASewMvCLBESlt60ybQzgCAiRMw9XAudi+41m9QAULZNpK8WXkG5/4CwybQzoHwOzgXvXy2Uw9bxMFkPagCgdbeKNuD7s0vlu28y7Qwg3Cp519K7Zve71AAQnBCkqIXLUgBokQDFtPO7+tbULpRhreJILUrUfuacI6gBoK4Nd28ttqg3W2kRpznnZ6m2v69UJKuf980dk3yyftUA+JiO90kIWIGDjQE02dRf1xDPKw/syQGgyMHnNToiz1+Fj8WoSvPM8ypb9RICgNK1tcjFsCvPJvUOoJSrCFUt3JW8UtsOMP1SWANHgNS6WpSe+dDpH3mtxRoAPcbqzxclZfHEhTkHv5K2rcH3lxzBukt4g8rrzCY1ACQqooHXwlHxxkn+dbaenG/DQ1aAQhyO5dmkBgBbVCygFjUBXnctZU1mm43TNIx254ht8S9lEs2aJ1ADgFeqVbtG1Ut89S33f3qQyL7y0r1Mo2mgcEHFbNKKBXD31gUfOYBEphZNW5pt1Otq2J1JPK11eV20cAGiWbOuWwCQnfJy1RzpjCOAR3CTaWfAhRUoeHXkz048VIZ2kl60AKDc+Vs0WueS5JrcZNoZ6LnfUcZbx8KkT28BoFcHiKLyJgc8HbcAoNi6mw5x4wSy9VtMa7WF1GCeVVoAYHcCQS1Km9ENxgaEEB3tGHIMFEeQVMK3jVa2eRSvze6fdriWX1LqBSwOAPY+339L0JcEhsZIa2ujSygg2aNCj2n3ZvrMEAX/A5aou9TaARQxUPyh9T/VL9UFGCOqirSyWzZ20bXZUyKuVxuI2a303qzSywzqKYI/2PFZtzrZo5f7rPt3WtTzWQe7wsYdie5KrgUNjO40+zU6PQD0XMKKGdkhxgjz5g861UWce/wK5x5bwPx1iWUt7lh0k/ns0gPAUEUr1bC/amTPHAHe9FaRCQWl6QljlcqRj7wyH3u1Qgat14DjB0F0EYupBwABCoUNW3UAdNAlkGNCw6wGzqMWv932RtGxDZ6j9N5+5WPwL8fM79Hz1gOAhpUs621D2EH0hDHiBtAv7nxQjMEtGgZ9TuKa2p415Spac7aIDAEAX10eQKum3UN23JFTd95guZJbz6PwMC9Rz89FehaSXZH2v1gBjiEAWIyelwovQOh4bEddyIz6LPBRC98Ac0e52VZOws0GCkq0eIsqLLXwj9gRF5NdABAUsj23bsrkGubiHVvEgEfQkUK/aAkwIUbezDsBZVjN4NaVujytjoZHL7b6I8rFi1DxSbc460w4vmpv9hgxeKVP5L23gGcn+JNCg541G2ZMZ2f6jOt0H9l5oeyCrrFf9OLpXTuAeRAAUreuVcTAQskmGquxIpx8145rVymGyKmUzFlj4TMt8lCzDywl4FrHoBhJKydj1m6OAYDPOJtavHVvLacFzXWsSIVCg26FnC/aEDgCLufhlbiFe8TgjeWhnSPQrmCXNe5FZQwAdEglK7detC5FpMVLYuT1GyscHd4G3xvqA88jE/I7S2HFse2v7XPYPgAt+FOLoxQlXO7F4jIWADomDtCLTzPzevfi9AZFGaRfSDnbJRRNFgnP4lVkJnvz37MzSOV41Q1e/O3Xn30A0OOuXYzLud3iEQwtLp3AEeJn6O7hizZEEn85yaPKG0NjHmuF7ALZXP8fivjZ4Sh+CkScRPYBgA72yCL+x+VrSx+rEF4eMP1CDSLOp336hDfHTJW4YhcykUCylviCqioA27olxPg/acBLuggg9plsHcJhlzjSihHIHVBE4tDJFy/AIEIY6V3FPjQpFFL1C1Cs5dkdAsQpJ104l3LXuhzCcx5X7P6nTPnQfdvaFwDaV9v2CY2BqSvg8uRjzzJ6BtKJkjSH1sj59iR33ncyJvy848wl0i3LyWNE+hA+T15x5RAAGACPFTv94tzmwBHBmqqIpHb5FxRKrAtWjVknPnVX2y7qVCkdw+WnMDvbezuZa+a/aMxA5v7MoQDQLz5tpU6fXBxFc5A7WAreZNfWiT307iuu58kdfEyvpRVESq0i25JsW3MLmBxhxrN035pYOgYAc4PzcvsikvQPBSz9cKm2PJMX33E/n4leUiy++kpMut68OjrtnsrDrkKuCgDqybITOEMFq1Q1V07tBcqWbxGUWV1S3J+EJYVRPTSndgCVWFViOcXxdMOcXFUALLm4Q88yf4DIS+pm9bHC5OUfmJ30uatDGwB2zdDw/0U275nE9r+POP+Vf+E8O6m5ugFgn2W79llMXlo8JfgYYe7e45Q7wQaA/ZZPJFNOg1y+XVs+Ui1dxe2qPfH2M3XvdioQbAAYBwAWiPC1DGmXZg3NG08op5jtnVNMEUg+kp44DiTRyAVc5Kq4yx3ZALAbABYelY2rukdnu2jFAiJ2uFbnwiMqDiBOMZTqbSdwb8Di2VIbANoAYFIqi6dWrzD3kM/hogWBKDd88P/XwkxVCczu0RNmIfOQcriYbAC4fqopdxQzl2OMDUh5678tiYJOQ2nvXMRAUpeCqRd79gLRV+EIcGWaM1EwhatZSPUxJeSMAzBFBA2/QYl2njtcfH/b5lt5EL03Ur8ARlxkjGtXgEucoBch9BxubNVBW+X6Jt8Z1rgDWIAnJpFc2hMUckRVxBD1dbhWLYBzl3PFb2PzFtu+tWlb50K24MLZraTMsRPseVLaBHXQufcR1oO6i7fZ8SU0MWCZVdYIAG/iY/cYtS3YImAQ+02h8tvCCyf7EV2U23DseC84iuIMLtc8VJR/oyswK3ti58ONAPLZ5NgJmaNjsojGZhzN8fy6TbuJcDcm873LFj3Fc8Ux7GJDOoFno+XPdoHkGgFgu7ZFOpdPKSafj5+jht6hasrUdjr/gMSaIStDfqYgk6phk8saAWCQtmx0cCXqmVBjNfJjJojuYLJp6rZnTN5jtvmxfZEPwIpo5U1etKFf5kJByUllrQAwSIvujBTuZWLhAahLMLWgZ6Fv+bH49IcxGv2U/ZBuz2PYEzsPnUBRCZlTk8maAVAPEiCAgY7ghxYPEBc/dg2A8YO3aCG5ZTGVkEVNoMl7UjnTkTNk6SpXswbhe5D7MBRZRLxVvmeyBNqrBIA1LNLcfVB+5wE7HoJ3yZ8wSd7kBoC5l3T/9lUH+cIdDik6ip3gaFbRBoD9F2iJb6gg8rE7aPEsEwpkq7z/6D5uABg9VYt/EO+A32FIBJiQUg42TzcALL6uox9obVzgJbxc3+V8uRHl9iTkHBQf2QAwej1O8kHrg3omebYn/BeKdslF2Fs2AOw9ZYt/AQmFZaCm4hAhBS1dsule6fMbABZfz4MeaOHlE7SKS100aCdwy9jd93nCBoB9Zuu0n+XgUllccemea5wyiJ8gy3qUN3MDwGkXdd+nAwGlbygDyU4g6UQJnp2JJxsA9l2C03+eq9jiKjrVWz+RTGSVnRXHNwCcfkEP6YH4By7BEEXdEaAuEV9Bt2bDBoBDpn8d31GJXf7BUJEtIOBHoEA2ZQPAOhbz0F7gTeIN3nGgAfECiiOS6Q06wQaAQ6d+Pd+TeHJxHPR6BQT4hVLnr5MNAOtZyGN6IjzsOKhvfL3cpnpEXMbX3fOwAeCYaV/Xd9HMlcwbopsjxKj6+rQ7oDcArGsRj+2NnAf8QvUJeyIdXU2D/5cNAMdO+fq+zzS0zfdIptLWEUw3AKxv7SbrkYpqKrxLsavlXiUTeQPAZNO9zoaktcs0vkg8ESdAK0clexqzeDsC1rl4U/VKToWUdXTyhxVfwHX3EW4AmGqqr2g7GwCu6MJN1e0NAFPN5BVt56nj4/6fZEFf8wAAAABJRU5ErkJggg=="/>
    </div>
    </div>
    <div class="vlog-box">
      <vlog v-for="(item,index) in vlogList" :key="index" :item="item"/>
    </div>
  </div>
</template>
<script>
  import Vlog from '../../components/vlog/index.vue'
  import { mapState } from 'vuex'
  export default{
    data () {
      return {
        focus: false,
        isFollower: true
      }
    },
    methods: {
      onfollow () {
        this.isFollower = true
        this.$store.dispatch('getVlogList')
        this.goTob()
      },
      onrecommend () {
        this.isFollower = false
        this.$store.dispatch('getVlogList2')
        this.goTob()
      },
      goTob () {
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      }

    },
    components: {
      Vlog
    },
    computed: {
      ...mapState([
        'userInfo',
        'vlogList'
      ])
    },
    beforeMount () {
      this.$store.dispatch('getVlogList')
    }
  }
</script>
<style>
  .nav img{
    width: 50rpx;
    height: 50rpx;
    padding-top: 25rpx;
  }
  .nav div span{
    font-size: 40rpx;
    line-height: 100rpx;
    padding: 23rpx 15rpx;
  }
  .focus{
    border-bottom: solid #FF556E 2px;
  }
  .nav{
    background: #F8F8F8;
    height: 100rpx;
    padding: 0 50rpx;
    display: flex;
    justify-content: space-between;
  }
  .nav-box{
    width: 100%;
    position:fixed;z-index:999;
  }
  .vlog-box{
    padding-top: 100rpx;
  }


</style>


