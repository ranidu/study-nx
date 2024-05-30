import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run study-nx:serve',
        production: 'nx run study-nx:preview',
      },
      ciWebServerCommand: 'nx run study-nx:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
