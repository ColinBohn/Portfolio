<template>
  <section>
    <v-card class="pb-4 mb-4">
      <v-card-title class="display-1">Technologies Used</v-card-title>
      <div class="text-xs-center">
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
                :color="hover ? tech.color : 'grey lighten-2'"
                :href="tech.link"
                fab
                small
              >
                <v-icon
                  :color="hover ? 'white' : 'black'"
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
          color: '#215732',
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
          color: '#ffde57',
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
  }
}
</script>
