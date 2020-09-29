import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { MarkerService } from '../_services/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  
  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    //this.markerService.makeCapitalMarkers(this.map);
    this.markerService.makeRetainingWallMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
    tiles.addTo(this.map);
    let marker = L.marker([36.1627, -86.7816], {
      icon: icon({
        iconSize: [ 25, 41 ],
		    iconAnchor: [ 13, 41 ],
		    iconUrl: 'assets/marker-icon.png',
		    shadowUrl: 'assets/marker-shadow.png'
      })
    })

    marker.bindPopup("Nashville, TN").openPopup();
    marker.addTo(this.map);
    /*
    L.marker([36.1627, -86.7816], {
      icon: icon({
        iconSize: [ 25, 41 ],
		    iconAnchor: [ 13, 41 ],
		    iconUrl: 'assets/marker-icon.png',
		    shadowUrl: 'assets/marker-shadow.png'
      })
    }).addTo(this.map);
    */
  }

}
