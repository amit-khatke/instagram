import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InstagramComponent } from './instagram/instagram.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,InstagramComponent],
  template: `
    <app-instagram></app-instagram>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
