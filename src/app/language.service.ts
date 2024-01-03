import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  public getLanguageString(): string{
    return navigator.language.toLowerCase().trim().startsWith('it')? 'it' : 'en';
  }
}
