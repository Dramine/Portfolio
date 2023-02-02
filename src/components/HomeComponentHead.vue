<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HomeComponentHead',
    el: '#app',
    data() {
        let quotes = [
            {
                quote: `An investment in knowledge pays the best interest`,
                author: `Benjamin Franklin`
            },
            {
                quote: `Every time you fail, you are one step closer from success`
            },
            {
                quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
                author: `Ralph Waldo Emerson`
            },
            {
                quote: `The only impossible journey is the one you never begin`,
                author: 'Tony Robbins'
            }
        ];
        return {
            quotes: quotes,
            selectedQuote: Math.floor(Math.random() * quotes.length),
        }
    },
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
    <v-row class="sub-container" id="home">
        <v-col>
            <v-row class="marge">
                <v-col class="large-title pl-4 pl-md-8">
                    DATA <br />
                    SCIENTIST
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center d-flex">
                    <v-avatar color="blue-light" size="300" class="avatar ml-16">
                        <v-img cover src="pdp.png" />
                    </v-avatar>
                    <div class="quote align-center pb-8 justify-center">
                        <div class="text pl-4">
                            <v-window v-model="selectedQuote">
                                <v-window-item v-for="quote, i in quotes" :ref="quote + '-window'" :value="i">
                                    <div> {{ quotes[i].quote }}
                                    </div>
                                    {{ quotes[i]?.author }}
                                </v-window-item>
                            </v-window>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="large-title">
                <v-col class="d-flex justify-end">
                    <div class="pr-4 pr-md-8">
                        AMINE <br />
                        BOUJEMT
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style>
.quote {
    flex-grow: 1;
    display: flex;
    margin-right: 5vw;
}
</style>