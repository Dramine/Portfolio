<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router';
export default defineComponent({
  name: 'App',

  components: {
    RouterView,
  },

  data() {
    return {
      //
    }
  },
})
</script>

<template>
  <v-app>
    <v-main>
      <RouterView :key="$route.path" />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import './styles/variable.scss';
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 5px;
}

.v-btn {
  background-color: $primary !important;
  border-radius: 38.5px !important;
}

</style>