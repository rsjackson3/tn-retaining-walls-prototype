import { Component, Input, OnInit } from '@angular/core';
import { Wall } from 'src/app/_models/wall';
import { WallService } from 'src/app/_services/wall.service';

@Component({
  selector: 'app-wall-card',
  templateUrl: './wall-card.component.html',
  styleUrls: ['./wall-card.component.scss']
})
export class WallCardComponent implements OnInit {
  // gather wall input from WallList component
  @Input() wall: Wall;

  constructor(private wallService: WallService) { }

  ngOnInit() {
  }

  // this will update the currently selected wall in the WallService
  // update the property "currentWall" in WallService
  updateCurrentWall(){
    this.wallService.updateCurrentWall(this.wall);
  }

}
