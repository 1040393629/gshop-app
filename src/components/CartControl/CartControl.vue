<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="iconfont icongouwuche-jianhao"
        v-show="food.count"
        @click.stop="removeFoodCount(false)"
      ></div>
    </transition>

    <div class="cart-count" v-show="food.count">{{ food.count }}</div>
    <div class="iconfont icongouwuche-jiahao" @click.stop="addFoodCount($event,true)"></div>
    <div class="ball-wrap">
      <!-- 动画 -->
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter">
       <div class="ball" v-if="ball.show">
         <div class="inner">
           <i class="iconfont icongouwuche-jiahao"></i>
         </div>
       </div>
      </transition>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return { 
      ball:{   //定义球对象
        show:false,
        el:''
      }
    }
  },
  props: {
    food: Object
  },
  methods: {
    removeFoodCount(isAdd) {
       this.$store.dispatch("updateFoodCount", { isAdd, food: this.food });
    },
    addFoodCount(e,isAdd) {
      console.log(e);
      this.$store.dispatch("updateFoodCount", { isAdd, food: this.food });
      this.ball.show = true;
      //获取点击元素
      this.ball.el = e.target;
    },
    beforeEnter(el) {
      //动画开始之前，让小球移动到点击位置
      const dom = this.ball.el;  //获取点击位置
      const rect = dom.getBoundingClientRect()  //获取点击dom的位置
      const x = rect.left - window.innerWidth
      const y = -(window.innerHeight - rect.top)
      // console.log(x,y);   //要移动的x，y
      el.style.display = 'block'
      el.style.transform = `translate3d(0,${y}px,0)`
      const inner = el.querySelector('.inner') 
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter(el,done) {
      //触发重绘
      document.body.offsetHeight
      //小球移动回到原点
      el.style.transform = `translate3d(0,0,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0,0,0)`
      //过渡完成后执行事件
      el.addEventListener('transitionend',done)
    },
    afterEnter(el) {
      //结束动画隐藏小球
      this.ball.show = false
      console.log(this.ball.show );
      el.style.display = 'none'
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/minix.styl';
.ball-wrap{
  .ball{
    position fixed;
    left 7%;
    bottom 30px;
    z-index 1003;
    color red;
    transition all 1s cubic-bezier(1,1,1,1)
    .inner{
      width 16px;
      height 16px;
      transition all linear
    }
  }
}
.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icongouwuche-jianhao {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.3s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: rgb(147, 153, 159);
  }

  .icongouwuche-jiahao {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }
}
</style>
