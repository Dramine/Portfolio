<script lang="ts">
import { defineComponent } from 'vue'
import styles from '../styles/variable.scss'


interface Item {
  color: string,
  year: string,
  url: string,
  text: string,
  title: string,
  subtitle: string
}

export default defineComponent({
  name: 'ExperiencesComponent',
  data() {
    return {
      styles,
      data: [
        {
          color: 'cyan',
          year: '2017 - 2020',
          title: "Bachelor's degree in computer science at Claude Bernard University",
          url: 'http://licence-info.univ-lyon1.fr/#UEs',
          text: ''
        },
        {
          color: 'green',
          year: 'Summer 2020',
          title: 'Internship at Claude Bernard University',
          subtitle: 'Maintenance and development of the university mobile app "Opale"',
          text: '',
          url: 'https://play.google.com/store/apps/details?id=fr.univlyon1.applimobile&hl=fr&gl=US'
        },
        {
          color: 'red',
          year: 'Febuary 2022 - Aout 2022',
          title: 'Internship at Roverba company',
          subtitle: 'Built a Crm web application',
          text: '',
          url: 'https://www.roverba.com/'
        },
        {
          color: 'amber',
          year: '2020 - 2023',
          title: 'Master\'s degree in computer science, speciality Data science',
          text: '',
          url: "http://master-info.univ-lyon1.fr/DS/#ues"
        },
      ] as Item[],
    }
  },
  methods: {
    goto(refName: string) {
      var element: any = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    openExternalUrl(url: string) {
      window.open(url, 'h_blank')
    }

  }
})
</script>
         
<template>

  <v-container class="sub-container">
    <div class="hook experiences-hook" id="experiences-hook">
      <div class="primary-color">
        02/ <br />
        Experiences
      </div>
    </div>
    <v-row>
      <v-col class="text-center main-text marge">
        <v-timeline side="end" align="start" color="white" class="timeline mt-8" line-color="primary" truncate-line="end">
          <v-timeline-item v-for="(item, i) in data" color="primary" :key="i" dot-color="black"
            fill-dot>
            <template v-slot:icon>
              <v-icon color="primary" size="large">
                mdi-map-marker-radius
              </v-icon>
            </template>
            <div class="third-text">
              {{item.year}}
            </div>
            <div>
              {{item.title}}
            </div>
            <div class="second-text">
              {{item.subtitle}}
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<style scoped lang="scss">
@import '../styles/variable.scss';



.main-text {
  text-align: left !important;
}

.marge {
  margin-top: 15vh;
}

.second-text {
  font-size: 3rem;
}

.third-text {
  font-size: 3Rem;
  font-weight: 200;
  color: $primary;
}

.experiences-hook {
  position: absolute;
  top: 210vh;
}





.card {}
</style>