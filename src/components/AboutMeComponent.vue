<script lang="ts">
import { defineComponent } from 'vue'
import styles from '../styles/variable.scss'

export default defineComponent({
    name: 'AboutMeComponent',
    data() {
        return {
            styles,
            selected: 0,
            sections: [
                {
                    title: "About me",
                    content: `
                    I've been passionate about computer science and entrepreneurship since I was a child. <br /> <br />
                    I love learning new things and overcoming new chalenges.
                    I enjoy going to the gym in my free time. <br /> <br />
                    I am also interested in self development and financial education.
                    `
                },
                {
                    title: "Plan for the future",
                    content: `I am actually looking for an internship to complete my master's degree. <br /> <br /> 
                    Then I'll work for a few months to save money and gain experience before starting my own business, most likely as a freelancer to begin with. <br /> <br />
                     As a result, I'm looking for an internship where I can gain real-world experience as a tech or a manager. Preferably in the finance or energy fields.`
                }
            ]
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

    <v-row class="about-me sub-container ">
        <div class="hook" id="about-hook">
            <div class="primary-color">
                01/ <br />
                About
            </div>
        </div>
        <v-col class="pl-8 pr-8">
            <v-row>
                <v-spacer class="d-none d-md-flex" />
                <v-col>
                    <v-tabs slider-color="primary" v-model="selected" grow>
                        <v-tab v-for="section, i in sections" :value="i" class="text-h3">
                            {{ section.title }}
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-spacer class="d-none d-md-flex" />
            </v-row>

            <v-row class="text-center title">
                <v-col sm="2" class="d-none d-md-flex" />
                <v-col>
                    <v-window v-model="selected">
                        <div v-html="sections[selected].content" class="main-text text" />
                    </v-window>
                </v-col>
                <v-col sm="2" class="d-none d-md-flex" />
            </v-row>
        </v-col>
    </v-row>
</template>
    
<style scoped lang="scss">
@import '../styles/variable.scss';


.about-me {
    padding-top: 15vh;
    padding-bottom: 10vh;
}

.v-btn {
    background-color: transparent !important;
}


#about-hook {
    position: absolute;
    top: 100vh;
    left: 3vw;
}

.text {
    text-align: left;
    margin-top: 5vh;
}
</style>