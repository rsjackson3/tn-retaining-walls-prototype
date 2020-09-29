import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = 'assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) { }

  // this function will construct the capital markers using the geojson data
  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];

        const marker = L.marker([lon, lat], {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
        
      
        marker.bindPopup("Nashville, TN").openPopup();
        marker.addTo(map);
      }
    });
  }

  // make api call to server, retrieve retaining wall data, and display using Leaflet map
  makeRetainingWallMarkers(map: L.Map): void {
    this.http.get("https://localhost:5001/retainingwalls").subscribe(
      (response: any) => {
        for (const c of response) {
          const lat = c.latitude;
          const lon = c.longitude;

          // create Leaflet marker using lat and lon coordinates
          const marker = L.marker([lat, lon], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/marker-icon.png',
              shadowUrl: 'assets/marker-shadow.png'
            })
          });
          
          // create popup and bind to map
          var popupContent = 'Location: ' + c.location + '<br>' + 'Minimum Height: ' + c.minHeight;
          const popup = L.popup().setContent(popupContent);
          marker.bindPopup(popup).openPopup();
          marker.addTo(map);
        }
      }
    );
  }
}
