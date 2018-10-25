<template>
  <section>
    <v-card class="mb-4">
      <v-card-title class="display-1">Technologies</v-card-title>
      <div class="text-xs-center pl-4 pr-4 pb-4">
        <template v-for="tech in techs">
          <v-tooltip
            :key="tech.name"
            bottom
          >
            <v-hover
              slot="activator"
            >
              <v-btn
                slot-scope="{ hover }"
                :color="tech.color"
                :href="tech.link"
                :outline="!hover"
                :style="hover ? '' : lightBgStyle(tech.color)"
                fab
                small
              >
                <v-icon
                  :color="hover ? 'white' : 'grey darken-1'"
                >fab fa-{{ tech.icon }}</v-icon>
              </v-btn>
            </v-hover>
            <span>{{ tech.name }}</span>
          </v-tooltip>
        </template>
      </div>
    </v-card>
  </section>
</template>

<script>
import Color from 'color'

export default {
  data () {
    return {
      techs: [
        {
          name: 'Vue.JS',
          icon: 'vuejs',
          color: '#42b883',
          link: 'https://vuejs.org/'
        },
        {
          name: 'Node JS',
          icon: 'node-js',
          color: '#44883e',
          link: 'https://nodejs.org/en/'
        },
        {
          name: 'Laravel',
          icon: 'laravel',
          color: '#f55247',
          link: 'https://laravel.com/'
        },
        {
          name: 'PHP',
          icon: 'php',
          color: '#8892be',
          link: 'https://secure.php.net/'
        },
        {
          name: 'Python',
          icon: 'python',
          color: '#4584b6',
          link: 'https://www.python.org/'
        },
        {
          name: 'Docker',
          icon: 'docker',
          color: '#0db7ed',
          link: 'https://www.docker.com/'
        },
        {
          name: 'Git',
          icon: 'git',
          color: '#f05033',
          link: 'https://git-scm.com/'
        },
        {
          name: 'OpenID Connect',
          icon: 'openid',
          color: '#f8931e',
          link: 'https://openid.net/connect/'
        }
      ]
    }
  },
  methods: {
    lightBgStyle (color) {
      let lightBrand = Color(color).alpha(0.1).rgb()
      return 'background-color: ' + lightBrand + ' !important'
    }
  }
}
</script>
