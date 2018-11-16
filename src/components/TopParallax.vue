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
      >Hi, I'm Colin.</h1>
      <div
        class="mb-3 text-xs-center intro-text"
      >Software engineer and systems specialist.</div>
      <v-slide-y-reverse-transition>
        <v-btn
          v-show="isMounted"
          class="orange darken-2 mt-5"
          dark
          fab
          medium
          @click="scrollDown"
        >
          <strong>
            <i class="fas fa-chevron-down" />
          </strong>
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
@media only screen and (min-width: 601px) {
    h1.intro-text {
      font-size: 90px;
    }
    div.intro-text {
      font-size: 32px;
    }
}
@media only screen and (max-width: 600px) {
    h1.intro-text {
      font-size: 16vw;
    }
    div.intro-text {
      font-size: 7vw;
    }
}
</style>
