import { Component, OnInit } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  standalone:true,
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
  imports:[LeftComponent,RightComponent],
})
export class InstagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}