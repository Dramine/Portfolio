<script lang="ts">
import { defineComponent } from 'vue'
import type { Project } from '../api/projectApi'
export default defineComponent({
    name: 'ProjectCardComponent',
    props: {
        project: {
            type: Object as () => Project,
        }
    },
    data() {
        return {
            projet: [
                {
                    title: "project1"
                },
                {
                    title: "project2"
                }
            ]
        }
    },
    methods: {
        parseLanguages() {
            let languageString = ""
            for (let obj in this.project?.language) {
                if (this.project?.language[obj] > 5)
                    languageString += `${obj}: ${this.project?.language[obj]}% `
            }

            return languageString
        }
    }
})
</script>
         
<template>
    <div v-if="project">
        <div class="text-title">
            {{ project?.data?.name }}
        </div>
        <div class="text-subtitle">
            Ceci est la description de mon projet
            {{ project?.data?.description }}
        </div>
        <div class="mt-8">
            <div>
                <v-btn>
                    Clone project
                </v-btn>
            </div>
            <div>
                <v-btn>Access Repository</v-btn>
                <v-btn>Access Demo</v-btn>
            </div>
        </div>
        <div class="text-language">
            {{ parseLanguages() }}
        </div>
    </div>

    <!-- <v-card v-if="project" class="pr-4 pl-4" color="transparent">
        <v-card-title class="text-center text-title">
            {{project?.data?.name}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle>
            {{project?.data?.description}}
            ceci est la description de mon projet
        </v-card-subtitle>
        <v-btn class="btn">
            Clone project
        </v-btn>
        <v-btn class="btn">
            Access repository
        </v-btn>
        <v-card-text>
            {{parseLanguages()}} <br />
            Last activity: {{project?.data?.last_activity_at}}
        </v-card-text>
    </v-card> -->
</template>
    
<style scoped lang="scss">
@import '../styles/variable.scss';

.btn {
    margin: 6px
}

.text-title {
    font-weight: 700;
    font-size: 40px;
}

.text-language {
    font-weight: 400;
    font-size: 2Rem;
}

.text-subtitle {
    font-weight: 500;
    font-size: 2Rem;
}

// .main {
//     background: linear-gradient($blue-dark-2, $blue);
//     height: 100vh;
//     color: $white;
// }
</style>