// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

// export default new Vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: '#CBAA5C',
//         secondary: '#083759',
//       },
//     },
//   },
// })

// Vuetify 3 setup
// src/plugins/vuetify.js
// import { createVuetify } from 'vuetify';
// import 'vuetify/styles'; // Correctly import styles from the Vuetify package

// const vuetify = createVuetify();

// export default vuetify;

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify()