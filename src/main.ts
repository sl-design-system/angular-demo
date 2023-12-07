import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setup } from '@sl-design-system/sanoma-learning';  
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '@sl-design-system/button/register.js'; 
import '@sl-design-system/icon/register.js'; 
import { Icon } from '@sl-design-system/icon';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

setup();

Icon.registerIcon(
  faMagnifyingGlass
)
