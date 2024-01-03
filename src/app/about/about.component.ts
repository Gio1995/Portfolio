import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imageAbout: string = "../../assets/images/sample-about.jpeg";

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  scrollTo(container: string): void {
    this.scrollService.scrollTo(container);
  }

}
