<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "ProjectComponent",
    data() {
        return {
            selectedProject: 0,
            projects: [
                {
                    title: "Portfolio website",
                    description: "The website you are now visiting",
                    spec: ['VueJs', 'Vuetify'],
                    githuburl: 'https://github.com/Dramine/Portfolio',
                    docurl: ''
                },
                {
                    title: "Terrarium",
                    description: "Project did as a part of a data vizuation subject. We Created an interactive map which allow you to visualize inter-country event, and thus knowing the country relation between each other.",
                    spec: ['D3Js', 'VueJs', 'NodeJs', 'SQL'],
                    githuburl: 'https://github.com/Dramine/Dataviz',
                    docurl: ''
                },
                {
                    title: "Sentimental analysis",
                    description: "Trained a model to predict a rating from an article review, using amazon dataset, and google pretrained word2vec model",
                    githuburl: 'https://colab.research.google.com/drive/1MBqLBH4LKTduP9Gagop2OC1JUEb0BkB9',
                    spec: ['Word2Vec', 'LSTM', ],
                    docurl: ''
                },
                {
                    title: "Image synthesis",
                    description: 'We trained a gan model to generate landscape image using gaugan method, from dataset creation to image generation. We obtained pretty fair result considering the limited time we had. You can download the report to assess them.',
                    githuburl: 'https://github.com/Mathieuchambard/DeepLearningProject',
                    spec: ['Pytorch', 'GAN'],
                    docurl: 'https://www.overleaf.com/download/project/63bbeb6588a5507eccf1293d/build/186089e4404-b592cf035a80227a/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-e2-f-5g09&enable_pdf_caching=true&popupDownload=true'
                }
            ]
        }
    },
    watch: {
        selectedProject: function () { console.log(this.selectedProject) }
    },
    methods: {
        openExternalUrl(url: string) {
            window.open(url, 'h_blank')
        }
    },
})
</script>
     
<template>
    <v-row class="sub-container mb-0">
        <v-col>
            <div class="hook" id="project-hook">
                <div class="primary-color">
                    03/ <br />
                    Project
                </div>
            </div>
            <v-row class="maine">
                <v-col sm="0" />
                <v-col id="panel" sm="2">
                    <v-tabs v-model="selectedProject" direction="vertical" color="tranparent" class="test" grow>
                        <v-tab v-for="project in projects" class="text-h4" color="tranparent" :ref="project.title">
                            {{ project.title }}
                        </v-tab>
                    </v-tabs>
                    <!-- <ProjectCardComponent v-if="data" :project="data" /> -->
                </v-col>
                <v-spacer />
                <v-col sm="4">
                    <v-window v-model="selectedProject" class="window">
                        <v-window-item v-for="project, i in projects" :ref="project + '-window'" :value="i"
                            class="fill-height">
                            <div class="title">
                                {{ project.title }}
                            </div>
                            <div class="desc">
                                {{ project.description }}
                            </div>
                            <div class="d-flex justify-center">
                                <div v-for="item in project?.spec" class="pl-2 pr-2">
                                    {{ item }}
                                </div>
                            </div>
                            <div id="github-icon">
                                <v-btn v-if="project.docurl != ''" icon class="mr-6"
                                    @click="openExternalUrl(project?.docurl)">
                                    <v-icon size="28" color=white> mdi-file-pdf-box</v-icon>
                                </v-btn>
                                <v-btn icon @click="openExternalUrl(project?.githuburl)">
                                    <v-icon size="28" color="white">mdi-github</v-icon>
                                </v-btn>
                            </div>
                        </v-window-item>
                    </v-window>
                </v-col>
                <v-spacer />
                <v-spacer />
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
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
@import '../styles/variable.scss';

#project-hook {
    left: 3vw;
    position: absolute;
}

#github-icon {
    position: absolute;
    bottom: 4Rem;
    right: 0;
}

.test {
    height: 100%;
    background-color: $primary;
}

.window {
    border: solid;
    border-color: $white;
    border-width: 1px;
    padding: 2Rem;
    height: 8vh + 40vh;
}

#panel {
    margin-top: 8vh;
}

.maine {
    margin-top: 22vh;
    height: 40vh;
    font-size: 2Rem;
    font-weight: 700;
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
    min-height: 15vh;
}
</style>