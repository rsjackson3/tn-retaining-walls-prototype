import { Component, OnInit, NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Wall } from 'src/app/_models/wall';
import { WallService } from 'src/app/_services/wall.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-wall-list',
  templateUrl: './wall-list.component.html',
  styleUrls: ['./wall-list.component.scss']
})
export class WallListComponent implements OnInit {
  walls: Wall[];
  
  constructor(private wallService: WallService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadWalls();
  }

  // this function uses the Wall service to load the walls variable with a list of retaining walls
  loadWalls() {
    this.wallService.getWalls().subscribe((walls: Wall[]) => {
      this.walls = walls;
    }, error => {
      this.toastr.error(error.message);
    });
  }



}
