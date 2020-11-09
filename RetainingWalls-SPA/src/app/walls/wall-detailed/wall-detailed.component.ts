import { Component, Input, OnInit } from '@angular/core';
import { Wall } from 'src/app/_models/wall';
import { WallService } from 'src/app/_services/wall.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wall-detailed',
  templateUrl: './wall-detailed.component.html',
  styleUrls: ['./wall-detailed.component.css']
})
export class WallDetailedComponent implements OnInit {
  //@Input() wall: Wall;
  wall: Wall;
  model: any = {};
  
  constructor(private wallService: WallService) { }

  ngOnInit() {
    // ensures that the component has the currently selected wall every time it's loaded
    this.updateCurrentWall();
  }

  // uses the wall service to attach the currently selected wall to this component's wall instance
  updateCurrentWall() {
    this.wall = this.wallService.getCurrentWall();
  }

  // call wall service to send form information to API and update database
  updateWall(){
    this.wallService.updateCurrentWall(this.wall);
  }

  sendWallUpdate(){
    this.wallService.sendWallUpdate()
  }

}
