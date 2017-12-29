import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule} from '@angular/router';
import { DogParkComponent } from './dog-park/dog-park.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogParkService } from './services/dogpark.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DogParkComponent,
    PlayAreaComponent,
    PageNotFoundComponent,
    NavBarComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "dogpark", component: DogParkComponent},
      {path: "playarea", component: PlayAreaComponent},
      {path: "", component: HomeComponent},
      {path: "**", component: PageNotFoundComponent}
    ], {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    DogParkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
