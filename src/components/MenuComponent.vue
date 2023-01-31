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
            dialog: false
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
    <div class="menu d-none d-md-flex">
        <a href="#app">
            <v-btn class="button" style="margin-right:56px">
                Home
            </v-btn>
        </a>
        <a href="#about-hook">
            <v-btn class="button" style="margin-right:56px">
                About me
            </v-btn>
        </a>
        <a href="#experiences-hook">
            <v-btn class="button" style="margin-right:56px">
                Experiences
            </v-btn>
        </a>
        <a href="#project-hook">
            <v-btn class="button" style="margin-right:56px">
                Project
            </v-btn>
        </a>
    </div>
    <div class="menu d-flex d-md-none">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-menu" color="primary" dark v-bind="props" />
            </template>
            <div class="main d-flex flex-column justify-space-around align-center flex-grow">
                <div>
                    <a href="#app">
                        <v-btn class="button" @click="dialog = false">
                            Home
                        </v-btn>
                    </a>
                </div>
                <div>
                    <a href="#about-hook">
                        <v-btn class="button" @click="dialog = false">
                            About me
                        </v-btn>
                    </a>
                </div>
                <div>
                    <a href="#experiences-hook">
                        <v-btn class="button" @click="dialog = false">
                            Experiences
                        </v-btn>
                    </a>
                </div>
                <div>
                    <a href="#project-hook">
                        <v-btn class="button" @click="dialog = false">
                            Project
                        </v-btn>
                    </a>
                </div>
            </div>
        </v-dialog>
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