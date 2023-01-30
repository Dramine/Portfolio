<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderBar',
    data() {
        return {
            menuComponent: [
                'Project',
                'About me',
                'Experience',
                'Contact',
            ],
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
    <div class="menu">
            <v-btn class="button" style="margin-right:56px">
                Project
            </v-btn>
            <v-btn class="button" style="margin-right:56px">
                About me
            </v-btn>
            <v-btn class="button">
                Contact
            </v-btn>
        </div>
</template>

<style>

.button {
    height: 45px;
    font-weight: 500;
    font-size: 18px;
}
.menu {
    position: fixed;
    margin-top: 40px;
    right: 87px;
}
</style>