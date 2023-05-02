import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';
export default defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      coverage(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
