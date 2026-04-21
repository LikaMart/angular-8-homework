import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from '../star-pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, StarPipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  text1 = "someText";
  text2 = "SOmetext";
  text3 = "someText";

  price= 99.99;
  percent= 0.01;
  today = new Date().toDateString();
}
