<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
import HomeComponentHead from '../components/HomeComponentHead.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
import MenuComponent from '../components/MenuComponent.vue';
import ExperiencesComponent from '../components/ExperiencesComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default defineComponent({
    name: 'HomeView',

    components: {
        HeaderBar,
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
    <v-container fluid class="main">
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

.main {
    background-color: $black-color;
    color: $white;
    padding-left: 75px;
    background-image: url('/background.svg');
    height: 100%;

}
</style>
  