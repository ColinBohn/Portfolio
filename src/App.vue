<template>
  <v-app>
    <v-content>
      <TopParallax/>
      <v-container fluid>
        <v-layout
          row
          wrap
        >
          <v-flex
            md4
            lg3
          >
            <PersonalInfo/>
          </v-flex>
          <v-flex
            offset-md1
            md6
            lg7
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
