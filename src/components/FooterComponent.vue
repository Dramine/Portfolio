<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer',
    data() {
        return {
            email: 'amineboujemt@hotmail.com',
            phone: '+33 6 64 17 48 48',
            iconSize: 30,
        }
    },
    methods: {
        mail() {
            window.open("mailto:" + this.email, "_self")
        },
        call() {
            window.open("tel:+33664174848", '_self')
        },
        linkedin() {
            window.open("https://fr.linkedin.com/in/amine-boujemt-a75480166")
        }
    }
})
</script>
 
<template>
    <div class="footer">
        <div>
            <v-btn variant="text" @click="mail">
                <div class="d-block">
                    <v-icon :size="iconSize" icon="mdi-email" />
                    <div class="item-font-size mt-2">{{ email }}</div>
                </div>
            </v-btn>
        </div>
        <div>
            <v-btn variant="text" @click="call">
                <div class="d-block">
                    <v-icon :size="iconSize" icon="mdi-phone" />
                    <div class="item-font-size mt-2">{{ phone }}</div>
                </div>
            </v-btn>
        </div>
        <div>
            <div class="d-block">
                <v-btn icon variant="text" @click="linkedin">
                    <v-icon :size="iconSize" icon="mdi-linkedin" />
                </v-btn>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../styles/variable.scss';

.footer {
    height: 10vh;
    background-color: $primary;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    border-top: solid;
    border-color: $white;
    border-width: 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.break {
    flex-basis: 100%;
    height: 0;
}

.item-font-size {
    font-size: 16px;
}
</style>