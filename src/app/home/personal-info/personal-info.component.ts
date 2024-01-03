import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  firstName = "Giovanni";
  lastName = "Iacolare";
  jobDescription = "Software Engineer and ComputerScientist."

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  

  scrollTo(): void{
    this.scrollService.scrollTo('contact-container');
  }

}
