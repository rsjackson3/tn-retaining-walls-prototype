import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  url = "https://localhost:5001/retainingwalls/add"

constructor(private http: HttpClient) { }

// method for making API call to add retaining wall to database
// parameter is the model with wall data such as lat, lon, etc.
addWall(model: any) {
  return this.http.post(this.url, model);
}

}
