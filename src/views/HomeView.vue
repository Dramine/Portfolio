<script lang="ts">
import { defineComponent } from 'vue'
import HomeComponentHead from '../components/HomeComponentHead.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
import MenuComponent from '../components/MenuComponent.vue';
import ExperiencesComponent from '../components/ExperiencesComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default defineComponent({
    name: 'HomeView',

    components: {
        HomeComponentHead,
        AboutMeComponent,
        ProjectComponent,
        MenuComponent,
        ExperiencesComponent,
        FooterComponent
    },

    data() {
        return {
            //
        }
    },
})
</script>

<template>
    <v-container fluid class="main pa-0 pt-1">
        <MenuComponent />
        <HomeComponentHead />
        <AboutMeComponent />
        <ExperiencesComponent />
        <ProjectComponent />
        <FooterComponent />
    </v-container>
</template>

<style scoped lang="scss">
@import '../styles/variable.scss';
</style>
  