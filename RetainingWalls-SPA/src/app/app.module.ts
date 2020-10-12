import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './_services/marker.service';
import { NavComponent } from './nav/nav.component';
import { WallAddComponent } from './wall-add/wall-add.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [	
    AppComponent,
    MapComponent,
    NavComponent,
    WallAddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
