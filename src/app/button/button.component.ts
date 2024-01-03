import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'button-section',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() name:string = '';
  @Input() align: 'center' | 'flex-start' | 'flex-end' = 'flex-end';
  @Input() responsiveAlign: 'center' | 'flex-start' | 'flex-end' = 'flex-end';
  @Input() href = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setDynamicAlign();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void{
    this.setDynamicAlign();
  }

  private setDynamicAlign(): void{
    const windowWidth = window.innerWidth;

    if(windowWidth < 767.68){
      this.align = this.responsiveAlign;
    }
  }

  openLink(): void{
    console.log("clicked url " + this.href);
    if(this.href){
      window.open(this.href, '_blank');
    }
  }
}
