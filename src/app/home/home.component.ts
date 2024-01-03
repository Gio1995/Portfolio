import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private scroll: ScrollService) { }

  ngOnInit(): void {
    this.scroll.scrollTo('home-container');
  }

}
