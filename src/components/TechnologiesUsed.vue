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
                >{{ tech.class }}</v-icon>
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
          name: 'React',
          class: 'fab fa-react',
          color: '#00d8ff',
          link: 'https://reactjs.org/'
        },
        {
          name: 'Ruby on Rails',
          class: 'fas fa-gem',
          color: '#cc0000',
          link: 'https://rubyonrails.org/'
        },
        {
          name: 'Vue.JS',
          class: 'fab fa-vuejs',
          color: '#42b883',
          link: 'https://vuejs.org/'
        },
        {
          name: 'Node JS',
          class: 'fab fa-node-js',
          color: '#44883e',
          link: 'https://nodejs.org/en/'
        },
        {
          name: 'Laravel',
          class: 'fab fa-laravel',
          color: '#f55247',
          link: 'https://laravel.com/'
        },
        {
          name: 'PHP',
          class: 'fab fa-php',
          color: '#8892be',
          link: 'https://secure.php.net/'
        },
        {
          name: 'Python',
          class: 'fab fa-python',
          color: '#4584b6',
          link: 'https://www.python.org/'
        },
        {
          name: 'Docker',
          class: 'fab fa-docker',
          color: '#0db7ed',
          link: 'https://www.docker.com/'
        },
        {
          name: 'Git',
          class: 'fab fa-git',
          color: '#f05033',
          link: 'https://git-scm.com/'
        },
        {
          name: 'OpenID Connect',
          class: 'fab fa-openid',
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
