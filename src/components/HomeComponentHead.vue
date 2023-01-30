<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HomeComponentHead',
    el: '#app',
    methods: {
        goto() {
            window.scrollTo({
                behavior: 'smooth',
                top: 1000
            })
        }
    }
})
</script>
     
<template>
    <v-container class="sub-container" id="home">
        <v-row class="marge">
            <v-col class="large-title">
                DATA <br />
                SCIENTIST
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <v-avatar color="blue-light" size="300" class="avatar">
                    <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
                    </v-img>
                </v-avatar>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row class="large-title">
            <v-col>

            </v-col>
            <v-col>
                AMINE <br />
            BOUJEMT
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
@import '../styles/variable.scss';

.large-title {
    font-size: 12.5Rem;
    line-height: 12.5Rem;
    font-family: 'Valkyrie';
    font-weight: bold;
    font-stretch: expanded;
    color: $white;
    text-shadow: $primary 5px 3px 0;
}

.marge {
    margin-top: 161px !important;
}

.avatar {
    margin-top: -3Rem;
}
</style>