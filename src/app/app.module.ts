import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { PersonalInfoComponent } from './home/personal-info/personal-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineComponent } from './works/timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    NavbarComponent,
    ImageProfileComponent,
    PersonalInfoComponent,
    TimelineComponent,
    TitleComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
