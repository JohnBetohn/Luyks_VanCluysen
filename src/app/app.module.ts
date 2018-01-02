import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule} from '@angular/router';
import { DogParkComponent } from './dog-park/dog-park.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { PlayAreaOverviewComponent} from './play-area/play-area-overview/play-area-overview.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayAreaService } from './services/play-area.service';
import { DogParkService } from './services/dogpark.service';
import { PlayAreaAlertsComponent } from './play-area/play-area-alerts/play-area-alerts.component';
import { DogParkSearchComponent } from './dog-park/dog-park-search/dog-park-search.component';
import { DogParkSpotlightComponent } from './dog-park/dog-park-spotlight/dog-park-spotlight.component';
import { PlayAreaMapComponent } from './play-area/play-area-map/play-area-map.component';
import { AgmCoreModule } from '@agm/core'
import { DogParkMapComponent } from './dog-park/dog-park-map/dog-park-map.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DogParkComponent,
    PlayAreaComponent,
    PageNotFoundComponent,
    NavBarComponent,
    WeatherComponent,
    PlayAreaOverviewComponent,
    PlayAreaAlertsComponent,
    DogParkSearchComponent,
    DogParkSpotlightComponent,
    PlayAreaMapComponent,
    DogParkMapComponent,
    FooterComponent
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
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB24fQ8s1VLrw6EhUsyQP74eLvMWE1LYTw' 
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PlayAreaService,
    DogParkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
