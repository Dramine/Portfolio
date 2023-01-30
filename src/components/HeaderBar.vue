<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderBar',
    data() {
        return {
            navigationItem: [
                {
                    name: "Home",
                    target: "http://"
                }, {
                    name: "Project",
                    target: "http://"
                },
                {
                    name: "Resume",
                    target: "http://"
                }, {
                    name: "Personal recomendation",
                    target: "http://"
                }
            ]
        }
    },
    methods: {
        click() {
            console.log("click")
        }
    }
})
</script>
 
<template>
    <v-app-bar absolute>
        <v-action-item :key="item.name" v-for="item in navigationItem">
            <v-btn @click="click">
                {{item.name}}
            </v-btn>
        </v-action-item>
    </v-app-bar>
</template>