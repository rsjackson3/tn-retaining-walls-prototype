import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wall } from '../_models/wall';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  baseUrl = "https://localhost:5001/retainingwalls/";
  currentWall: Wall;

constructor(private http: HttpClient) { }

// method for making API call to add retaining wall to database
// parameter is the model with wall data such as lat, lon, etc.
addWall(model: any) {
  return this.http.post(this.baseUrl + 'add', model);
}

// will return a list of all retaining walls using the Wall interface
getWalls(): Observable<Wall[]> {
  return this.http.get<Wall[]>(this.baseUrl);
}

updateCurrentWall(wall: Wall) {
  this.currentWall = wall;
}

// return the currently selected wall
getCurrentWall(){
  return this.currentWall;
}

// send updated wall information to API for processing
sendWallUpdate(updatedWall: Wall){
  return this.http.put(this.baseUrl + 'update', updatedWall);
}

}
