import { Component, OnInit } from '@angular/core';
import { MenusComponent } from './menus/menus.component';
import { MoreComponent } from './more/more.component';
import { NameComponent } from './name/name.component';

@Component({
  standalone:true,
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  imports:[NameComponent,MenusComponent,MoreComponent],
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}