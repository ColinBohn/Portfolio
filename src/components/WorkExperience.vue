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
                style="min-width:125px"
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
import LoftiumLogo from '@/assets/loftium-logo.svg'
import ScsdLogo from '@/assets/scsd-logo.svg'
import WaveLogo from '@/assets/wave-logo.svg'

export default {
  data () {
    return {
      jobs: [
        {
          title: 'Software Engineer',
          employer: 'Loftium',
          start: 'June 2019',
          end: 'Present',
          logo: LoftiumLogo,
          bullets: [
            'Developing a pixel-perfect React frontend in TypeScript to replace legacy frontend',
            'Building out a robust, test-driven API to support the frontend with Ruby on Rails',
            'Solving unique problems for a one-of-a-kind, rapid growth startup',
          ]
        },
        {
          title: 'Software Engineer II',
          employer: 'Wave Broadband',
          start: 'July 2017',
          end: 'June 2019',
          logo: WaveLogo,
          bullets: [
            'Designed and developed web applications and APIs using a modern web stack',
            'Advocated and advanced containerized infrastructure for applications',
            'Troubleshot, identified, and resolved server performance problems',
            'Collaborated with peers on best practices and promoted knowledge sharing'
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
