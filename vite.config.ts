import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	base: '/Portfolio/',
	server: {
		port: 8080
	},
	css: {
		preprocessorOptions: {
		  sass: {
			additionalData: ['@import "./src/styles/variables"'].join('\n')
		  }
		}
	  },
})
