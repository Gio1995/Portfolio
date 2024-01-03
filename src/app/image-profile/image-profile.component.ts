import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent implements OnInit {

  imageProfile: string = "../assets/images/profile.jpg";
  @Input() size: string = 'circular-image-200';

  constructor() { }

  ngOnInit(): void {
  }

}
