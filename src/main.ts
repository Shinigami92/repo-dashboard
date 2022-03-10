// organize-imports-ignore

import { createApp, h } from 'vue';

import router from './router';

/* Quasar */
import { Quasar } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import iconSet from 'quasar/icon-set/mdi-v6';
import '@quasar/extras/mdi-v6/mdi-v6.css';

import 'quasar/src/css/index.sass';

/* App */
import App from '@/App.vue';

const app = createApp({
  render: () => h(App),
});

app.use(Quasar, {
  plugins: {},
  iconSet,
});

app.use(router);

app.mount('#app');

router.push('dashboard');
