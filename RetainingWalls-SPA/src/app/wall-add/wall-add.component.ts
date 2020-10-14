import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WallService } from 'src/app/_services/wall.service';

@Component({
  selector: 'app-wall-add',
  templateUrl: './wall-add.component.html',
  styleUrls: ['./wall-add.component.css']
})
export class WallAddComponent implements OnInit {
  
  // model object will contain request body with wall data
  model: any = {};

  constructor(private wallService: WallService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  // call wall service and add wall to db
  addWall(){
    this.wallService.addWall(this.model).subscribe(
      response => {
        console.log("Wall Added");
        this.toastr.success("Retaining Wall Added!");
    },
      error => console.log(error)
    );
  }

}
