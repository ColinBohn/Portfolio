<template>
  <section>
    <v-card class="mb-4">
      <v-card-title class="display-1">Education</v-card-title>
      <v-list three-line>
        <template v-for="degree in degrees">
          <div :key="degree.title">
            <v-list-tile
              avatar
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="degree.title"/>
                <v-list-tile-sub-title v-html="degree.school"/>
                <v-list-tile-sub-title>
                  {{ degree.when }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-avatar
                size="120"
                style="min-width:125px"
                tile
              >
                <img :src="degree.logo">
              </v-list-tile-avatar>
            </v-list-tile>
          </div>
        </template>
      </v-list>
    </v-card>
  </section>
</template>

<script>
import UdacityLogo from '@/assets/udacity-logo.svg'

export default {
  data () {
    return {
      degrees: [
        {
          title: 'Full Stack Web Developer Nanodegree',
          school: 'Udacity',
          when: '2017',
          logo: UdacityLogo
        }
      ]
    }
  }
}
</script>

<style>

</style>
