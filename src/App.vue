<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShow" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  name: "App",
  components: {
    FooterGuide
  },
  mounted() {
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress',"getUserInfo"])
  }
};
</script>

<style lang='stylus' rel='stylusheet/stylus'>
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
