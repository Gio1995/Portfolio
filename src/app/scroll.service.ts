import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollTo(containerId: string) {
    const container = document.getElementsByClassName(containerId)[0];
    if (container) {
      console.log("Scrollo fino a " + containerId);
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
