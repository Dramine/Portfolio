// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    'primary': "#F26241",
    'primary-dark-1': "#A64732",
    'primary-dark-2': "#733729",
    black: "#212326",
    white: "#F2F2F2",
  },
}


export default createVuetify(
  {
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }

  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
