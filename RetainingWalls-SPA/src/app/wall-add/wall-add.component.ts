import { Component, OnInit } from '@angular/core';
import { WallService } from 'src/app/_services/wall.service';

@Component({
  selector: 'app-wall-add',
  templateUrl: './wall-add.component.html',
  styleUrls: ['./wall-add.component.css']
})
export class WallAddComponent implements OnInit {
  
  // model object will contain request body with wall data
  model: any = {};

  constructor(private wallService: WallService) { }

  ngOnInit() {
  }

  // call wall service and add wall to db
  addWall(){
    this.wallService.addWall(this.model).subscribe(
      response => console.log("user registered"),
      error => console.log(error)
    );
  }

}
