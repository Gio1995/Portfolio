import { Component, OnInit } from '@angular/core';
import { Nav } from './nav';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: Nav[] = [
    { link: '', name: 'Home', container: 'home-container' },
    { link: 'about-me', name: 'About me', container: 'about-container' },
    { link: 'experience', name: 'Experience', container: 'experience-container' },
    { link: 'contact', name: 'Contact', container: 'contact-container' }
  ]

  public isCollapsed = true;

  constructor(private scroll: ScrollService) { }

  ngOnInit(): void {
  }

  scrollTo(container: string): void {
    this.scroll.scrollTo(container);
  }
}
