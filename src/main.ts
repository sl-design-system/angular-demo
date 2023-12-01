import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setup } from '@sl-design-system/sanoma-learning'; 
import '@sl-design-system/button/register.js'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

 
setup(); 
