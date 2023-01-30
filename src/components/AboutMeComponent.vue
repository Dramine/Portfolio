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
    name: 'AboutMeComponent',
    data() {
        return {
            styles,
            selected: 0,
            sections: [
                {
                    title: "Hobbies",
                    content: `
                    I AM PASSIONATE ABOUT COMPUTER SCIENCE SINCE MY CHILDHOOD AND LATER ABOUT
                    ENTREPENEURSHIP. <br /> <br />
                    I LOVE LEARNING NEW THINGS AND OVERCOMING NEW CHALENGES.
                    ON MY FREE TIME I LIKE TO GO TO THE GYM. <br /> <br />
                    I AM ALSO INTERESTED IN SELF DEVELOPMENT AND FINANCIAL EDUCATION.
                    `
                },
                {
                    title: "What people says about me",
                    content: `
                    PEOPLE USED TO SAY ABOUT ME THAT I AM NOT VERY TALKATIVE AND CAN
                    BE OVERCONFIDENT <br />
                    HONNESTLY IT IS TRUE THAT I DONT TALK A LOT, BUT ONLY WHEN I AM NOT INTERESTED
                    IN THE CONVERSATION <br /> <br />
                    AND I AM CONFIDENT ONLY BECAUSE I KNOW THAT IN THIS WORLD EVERYTHING CAN BE DONE
                    WITH HARD WORK. <br /> <br/>
                    ACCORDING TO PEOPLE THEY THINK I THINK THIS WAY THIS BECAUSE I AM STILL YOUNG...
                    <br />
                    HOW LAUGHABLE...

                    `
                },
                {
                    title: "Plan for the future",
                    content: `I AM FIRST GOING TO MAKES AN INTERNSHIP ABOARD SO I CAN HAVE A FIRST EXPERIENCES IN DATA SCIENCE FIELD. <br /> <br />
                    IN THE MEANTIME I WILL WORK ON MY BUISNESS IDEA THAT I HOPE WILL BE READY IN TWO TO THREE YEARS. <br /> <br />
                    AFTER THIS I AM PLANNING TO START AS A FREELANCE SO I CAN MANAGE MY TIME FREELY TO WORK ON MY BUISNESS.
                    `
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

    <v-container class="sub-container">
        <div class="hook" id="about-hook">
            <div class="primary-color">
                01/ <br />
                About
            </div>
        </div>
        <v-row>
            <v-col>
                <v-tabs slider-color="primary" v-model="selected" grow>
                    <v-tab v-for="section, i in sections" :value="i" class="text-h3">
                        {{ section.title }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>

        <v-row class="text-center title">
            <v-col sm="2" />
            <v-col>
                <v-window v-model="selected">
                    <div v-html="sections[selected].content" class="main-text text" />
                </v-window>
            </v-col>
            <v-col sm="2" />
        </v-row>
        <!-- <v-row class="text-center title">

            <v-col sm="2">
            </v-col>
            <v-col class="main-text text">
                <v-row>
                    PASSIONATE ABOUT COMPUTER SCIENCE SINCE MY CHILDHOOD AND LATER ABOUT
                    ENTREPENEURSHIP.
                    I LOVE LEARNING NEW THINGS AND OVERCOMING NEW CHALENGES.
                </v-row>
                <v-row class="mt-16">
                    ON MY FREE TIME I LIKE TO GO TO THE GYM. <br />
                    I AM ALSO INTERESTED IN SELF DEVELOPMENT AND FINANCIAL EDUCATION.
                </v-row>
                <v-row class="mt-16">
                    PEOPLE USED TO SAY ABOUT ME THAT I AM NOT VERY TALKATIVE AND CAN
                    BE OVERCONFIDENT <br />
                    HONNESTLY IT IS TRUE THAT I DONT TALK A LOT, BUT ONLY WHEN I AM NOT INTERESTED
                    IN THE CONVERSATION <br />
                    AND I AM CONFIDENT ONLY BECAUSE I KNOW THAT IN THIS WORLD EVERYTHING CAN BE DONE
                    WITH HARD WORK. <br />
                    ACCORDING TO PEOPLE THEY THINK I THINK THIS WAY THIS BECAUSE I AM STILL YOUNG...
                    <br />
                    HOW LAUGHABLE...
                </v-row>
            </v-col>
            <v-col sm="1"></v-col>
        </v-row> -->
    </v-container>
</template>
    
<style scoped lang="scss">
@import '../styles/variable.scss';

.v-btn {
    background-color: transparent !important;
}


#about-hook {
    position: absolute;
    top: 110vh;
}

.text {
    text-align: left;
    margin-top: 5vh;
}
</style>