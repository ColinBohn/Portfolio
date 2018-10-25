<template>
  <v-app>
    <v-content>
      <TopParallax/>
      <v-container>
        <v-layout
          row
          wrap
          justify-space-between
        >
          <v-flex
            md4
            lg4
            mx-3
          >
            <PersonalInfo/>
          </v-flex>
          <v-flex
            md6
            lg7
            mx-3
          >
            <WorkExperience/>
            <EducationHistory/>
            <TechnologiesUsed/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopParallax from './components/TopParallax'
import PersonalInfo from './components/PersonalInfo'
import WorkExperience from './components/WorkExperience'
import EducationHistory from './components/EducationHistory'
import TechnologiesUsed from './components/TechnologiesUsed'

export default {
  name: 'App',
  components: {
    TopParallax,
    PersonalInfo,
    WorkExperience,
    EducationHistory,
    TechnologiesUsed
  }
}
</script>

<style>
.v-card {
  border-radius: 8px;
}
</style>
