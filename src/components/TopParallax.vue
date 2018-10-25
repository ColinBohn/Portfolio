<template>
  <v-parallax
    :src="topBg"
    height="640"
  >
    <v-layout
      column
      align-center
      style="padding-top:140px"
    >
      <h1
        class="mb-4 text-xs-center intro-text"
        style="font-size: 12vmin"
      >Hi, I'm Colin.</h1>
      <div
        class="mb-3 text-xs-center intro-text"
        style="font-size: 7vmin"
      >Software engineer and systems specialist.</div>
      <v-slide-y-reverse-transition>
        <v-btn
          v-show="isMounted"
          class="orange darken-2 mt-5"
          dark
          round
          large
          @click="scrollDown"
        >
          <strong>Learn about me</strong>
        </v-btn>
      </v-slide-y-reverse-transition>
    </v-layout>
  </v-parallax>
</template>

<script>
import zenscroll from 'zenscroll'

import TopBg from '@/assets/bg.jpg'

export default {
  name: 'TopParallax',
  data () {
    return {
      topBg: TopBg,
      isMounted: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isMounted = true
    }, 400)
  },
  methods: {
    scrollDown () {
      zenscroll.toY(600, 1000)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro-text {
  font-family: Quicksand !important;
  font-weight: 400;
  text-shadow: 0px 0px 15px #222;
}
</style>
