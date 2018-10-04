<template>
  <section class="mb-4">
    <v-card class="elevation-4">
      <with-root :show="isMobile">
        <v-layout>
          <with-root :show="isMobile">
            <v-flex xs6>
              <v-img
                :src="profilePic"
                :height="isMobile ? '380px' : '300px'"
              />
            </v-flex>
          </with-root>
          <with-root :show="isMobile">
            <v-flex xs6>
              <v-card-title primary-title>
                <div class="display-1">Colin Bohn</div>
                <v-spacer />
                <span>
                  <strong>Software Engineer II</strong> – Wave Broadband
                </span>
              </v-card-title>
              <v-list>
                <v-list-tile :href="'mailto:' + email">
                  <v-list-tile-action>
                    <v-icon color="blue">fas fa-envelope</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Email</v-list-tile-title>
                    <v-list-tile-sub-title>{{ email }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile :href="'https://linkedin.com/in/' + linkedin">
                  <v-list-tile-action>
                    <v-icon
                      color="blue"
                      style="padding-left:1px"
                    >fab fa-linkedin</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>LinkedIn</v-list-tile-title>
                    <v-list-tile-sub-title>{{ linkedin }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile :href="'https://github.com/' + github">
                  <v-list-tile-action>
                    <v-icon color="blue">fab fa-github</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>GitHub</v-list-tile-title>
                    <v-list-tile-sub-title>{{ github }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile :href="'https://keybase.io/' + keybase">
                  <v-list-tile-action>
                    <v-icon
                      color="blue"
                      style="padding-left:2px"
                    >fab fa-keybase</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Keybase</v-list-tile-title>
                    <v-list-tile-sub-title>{{ keybase }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </with-root>
        </v-layout>
      </with-root>
    </v-card>
  </section>
</template>

<script>
import ColinPhoto from '@/assets/colin.png'
import WithRoot from './WithRoot'

export default {
  components: {
    WithRoot
  },
  data () {
    return {
      profilePic: ColinPhoto,
      email: 'colinbohn' + '@gmail.com', // hopefully avoid spambots?
      linkedin: 'colinbohn',
      github: 'colinbohn',
      keybase: 'colinbohn'
    }
  },
  computed: {
    isMobile () {
      return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    }
  }
}
</script>

<style>

</style>
