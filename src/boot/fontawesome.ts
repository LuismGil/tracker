// src/boot/fontawesome.ts

import { boot } from 'quasar/wrappers';
import FontAwesomeIcon from 'src/plugins/fontawesome'

export default boot(({ app }) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
});
