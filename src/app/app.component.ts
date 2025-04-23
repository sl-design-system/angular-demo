import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef, OnDestroy, ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { SearchComponent } from './search/search.component';
import {AvatarComponent} from '@sl-design-system/angular/avatar';
import {TabComponent, TabGroupComponent} from "@sl-design-system/angular/tabs";
import {Tab} from "@sl-design-system/tabs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, SearchComponent, AvatarComponent, TabComponent, TabGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tabgroup') tabgroup: TabGroupComponent;  //ElementRef<TabGroupComponent>;

  query = '';

  results = Array.from(Array(5)).map((_, i) => i);

  tabs = [
    {path: '/home', label: 'Home'},
    {path: '/form', label: 'Form'},
    {path: '/icons', label: 'Icons'},
    {path: '/menu', label: 'Menu'},
    {path: '/dashboard', label: 'Dashboard'},
    {path: '/assignments', label: 'Assignments'},
    {path: '/grades', label: 'Grades'},
    {path: '/settings', label: 'Settings'}
  ];

  constructor(
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // requestAnimationFrame(() => {
    //   console.log('this.tabGroup', this.tabgroup);
    //
    //   this.tabgroup.elRef.nativeElement.addEventListener('sl-tab-change', this.onRouterLinkActive);
    // })
    // console.log('this.tabGroup', this.tabgroup);
    //
    // this.tabgroup.elRef.nativeElement.addEventListener('sl-tab-change', this.onRouterLinkActive);
  }

  ngAfterViewInit(): void {
    console.log('this.tabGroup', this.tabgroup);

    this.tabgroup.elRef.nativeElement.addEventListener('sl-tab-change', this.onRouterLinkActive);
  }

  ngOnDestroy(): void {
    this.tabgroup?.elRef.nativeElement.removeEventListener('sl-tab-change', this.onRouterLinkActive);
  }

  search(query: string) {
    this.query = query;
  }

  onRouterLinkActive(event: any) {
    console.log('onRouterLinkActive', event, event.detail, this.tabs[event.detail]);
    // this.router.navigate([event.detail.tab.value]);
    // (this.tabs[event.detail] as unknown as Tab).click();
    event.target.children[event.detail].click();
  }

  onTabChange(event: any) {
    console.log('onTabChange', event, this.tabs[event.detail]);
    // event.target.children[event.detail].click();
  }
}
