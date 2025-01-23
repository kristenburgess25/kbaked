declare module 'vite-plugin-vuetify' {
    import { Plugin } from 'vite';
  
    interface VuetifyPluginOptions {
      autoImport?: boolean;
      styles?: {
        configFile?: string;
      };
    }
  
    const vuetify: (options?: VuetifyPluginOptions) => Plugin;
    export default vuetify;
  }
  