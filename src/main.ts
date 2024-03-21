import '@oddbird/popover-polyfill';
import '@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setup } from '@sl-design-system/sanoma-learning';
import './../../components/packages/components/shared/index.js';
import '@sl-design-system/button/register.js';
import '@sl-design-system/icon/register.js';
import './../../components/packages/angular/src/public-api';
import './../../components/packages/components/checkbox/index.js';
// import '@sl-design-system/checkbox/register.js';
import './../../components/packages/components/form/index.js';
// import '@sl-design-system/form/register.js';
import './../../components/packages/components/radio-group/index.js';
// import '@sl-design-system/radio-group/register.js';
import './../../components/packages/components/shared/index.js';
// import '@sl-design-system/text-field/register.js';
import './../../components/packages/components/text-field/index.js';
// import '@sl-design-system/textarea/register.js';
import './../../components/packages/components/select/index.js';
// import '@sl-design-system/select/register.js';
import './../../components/packages/components/switch/index.js';
// import '@sl-design-system/switch/register.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

setup();
