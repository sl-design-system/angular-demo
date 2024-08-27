import { Component } from '@angular/core';
import { IconComponent } from '@sl-design-system/angular/icon';
import { ButtonComponent } from '@sl-design-system/angular/button';
import { ButtonBarComponent } from '@sl-design-system/angular/button-bar';
import { Icon } from '@sl-design-system/icon';
import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [ButtonComponent, ButtonBarComponent, IconComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  dynamic: string;

  preLoaded(){
    this.dynamic = 'pinata';
  }
  
  loadOnDemand(){
    Icon.register(faCat);
    this.dynamic = 'fas-cat';
  }
}
