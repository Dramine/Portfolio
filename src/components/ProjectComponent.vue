<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCardComponent from './ProjectCardComponent.vue';
import { projectAPI, Project } from '../api/projectApi'
export default defineComponent({
    name: "ProjectComponent",
    data() {
        return {
            selectedProject: 1,
            projects: [
                {
                    title: "Portfolio website",
                    description: "The website you are now visiting",
                    spec: ['VueJs', 'Vuetify']
                },
                {
                    title: "Terraria",
                    description: "Actually working on it will be released soon"
                },
                {
                    title: "Financial market indicator",
                    description: "Actually working on it will be released soon"
                },
                {
                    title: "Deep learning project"
                }
            ]
        }
    },
    watch: {
        selectedProject: function () { console.log(this.selectedProject) }
    },
    components: { ProjectCardComponent }
})
</script>
     
<template>
    <v-container class="sub-container">
        <div class="hook" id="project-hook">
            <div class="primary-color">
                03/ <br />
                Project
            </div>
        </div>
        <v-row class="main">
            <v-col sm="2" class="main">
                <v-tabs v-model="selectedProject" direction="vertical" color="tranparent">
                    <v-tab v-for="project in projects" color="tranparent" :ref="project.title">
                        {{ project.title }}
                    </v-tab>
                </v-tabs>
                <!-- <ProjectCardComponent v-if="data" :project="data" /> -->
            </v-col>
            <v-col sm="1"/>
            <v-col sm="4">
                <v-window v-model="selectedProject">
                    <v-window-item v-for="project, i in projects" :ref="project + '-window'"
                        :value="i">
                        <div class="title">
                            {{ project.title }}
                        </div>
                        <div class="desc">
                            {{  project.description }}
                        </div>
                        <div v-for="item in project?.spec" class="desc pl-6">
                              - {{ item }}
                        </div>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col>
            </v-col>
            <v-col>
                <ProjectCardComponent v-if="data" :project="data" />
            </v-col>
            <v-col>
            </v-col>
        </v-row> -->
    </v-container>
</template>

<style scoped lang="scss">
@import '../styles/variable.scss';

.main {
    margin-top: 10vh;
}
.title {
    font-size: 5Rem;
    font-family: 'Valkyrie';
    font-weight: bold;
    font-stretch: expanded;
    color: $white;
    text-shadow: $primary 3px 1px 0;
}

.desc {
    font-size: 2Rem;
    
}
</style>