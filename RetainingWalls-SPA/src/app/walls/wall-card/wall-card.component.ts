import { Component, Input, OnInit } from '@angular/core';
import { Wall } from 'src/app/_models/wall';

@Component({
  selector: 'app-wall-card',
  templateUrl: './wall-card.component.html',
  styleUrls: ['./wall-card.component.scss']
})
export class WallCardComponent implements OnInit {
  // gather wall input from WallList component
  @Input() wall: Wall;

  constructor() { }

  ngOnInit() {
  }

}
