import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './_services/marker.service';
import { NavComponent } from './nav/nav.component';
import { WallAddComponent } from './wall-add/wall-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { WallListComponent } from './walls/wall-list/wall-list.component';
import { WallCardComponent } from './walls/wall-card/wall-card.component';
import { WallDetailedComponent } from './walls/wall-detailed/wall-detailed.component';


@NgModule({
  declarations: [		
    AppComponent,
    MapComponent,
    NavComponent,
    WallAddComponent,
    HomeComponent,
    WallListComponent,
    WallCardComponent,
    WallDetailedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
