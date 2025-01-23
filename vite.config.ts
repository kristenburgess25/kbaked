// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import vuetify from 'vite-plugin-vuetify';

// export default defineConfig({
//   plugins: [
//     vue(),
//     vuetify({ autoImport: true }),
//   ],
// });

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// Define the plugins explicitly to avoid type issues
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Ensure auto-import is handled properly
  ],
});