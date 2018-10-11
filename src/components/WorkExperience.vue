<template>
  <section>
    <v-card class="mb-4">
      <v-card-title class="display-1">Experience</v-card-title>
      <v-list three-line>
        <template v-for="job in jobs">
          <div :key="job.title">
            <v-list-tile
              avatar
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="job.title"/>
                <v-list-tile-sub-title v-html="job.employer"/>
                <v-list-tile-sub-title>
                  {{ job.start + ' – ' + job.end }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-avatar
                size="120"
                tile
              >
                <img :src="job.logo">
              </v-list-tile-avatar>
            </v-list-tile>
            <div class="mx-2 mb-4">
              <ul>
                <li
                  v-for="(bullet, index) in job.bullets"
                  :key="index"
                  v-html="bullet"
                />
              </ul>
            </div>
          </div>
        </template>
      </v-list>
    </v-card>
  </section>
</template>

<script>
import ScsdLogo from '@/assets/scsd-logo.svg'
import WaveLogo from '@/assets/wave-logo.svg'

export default {
  data () {
    return {
      jobs: [
        {
          title: 'Software Engineer II',
          employer: 'Wave Broadband',
          start: 'July 2017',
          end: 'Present',
          logo: WaveLogo,
          bullets: [
            'Design and develop web applications and APIs using a modern web stack',
            'Advocate and advance containerized infrastructure for applications',
            'Troubleshoot, identify, and resolve server performance problems',
            'Collaborate with peers on best practices and promote knowledge sharing'
          ]
        },
        {
          title: 'Technology Specialist',
          employer: 'Stanwood-Camano School District',
          start: 'June 2014',
          end: 'July 2017',
          logo: ScsdLogo,
          bullets: [
            'Spearheaded new and innovative projects as part of district technology levy',
            'Developed web apps including district status page, tech KB, and student portal',
            'Created open source Allcall.io public alert system for district use',
            'Led rollout of device management solutions for 3000+ endpoints'
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
