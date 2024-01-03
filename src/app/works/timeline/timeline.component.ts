import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  experience: Experience[] = [
    {date: 'Jan 2024', company: 'Quid', logo: '../../../assets/images/companies/quid.jpeg', description: 'Angular Frontend Development.'},
    {date: 'Oct 2022', company: 'Widiba', logo: '../../../assets/images/companies/widiba.png', description: 'Backend development in Struts, implementation of Rest services and use of PostgreSQL.'},
    {date: 'Jun 2022', company: 'Unicredit', logo: '../../../assets/images/companies/unicredit.png', description: 'Development of a Selenium-based framework for managing automated tests.'},
    {date: 'May 2022', company: 'Advancia-Tech', logo: '../../../assets/images/companies/advancia.jpeg', description: 'Training the fundamental concepts of web services and learning the Spring framework.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
