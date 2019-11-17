import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindComponent } from './find/find.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PoisearchComponent } from './poisearch/poisearch.component';
import { UnknownPersonCardComponent } from './unknown-person-card/unknown-person-card.component';
import { ImgUtilitiesService } from './img-utilities.service';

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    UpdateComponent,
    PersonCardComponent,
    PersonDetailsComponent,
    PoisearchComponent,
    UnknownPersonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ImgUtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
