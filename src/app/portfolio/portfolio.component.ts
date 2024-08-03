import { product } from './../interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
      productList:product[]=[
        {pImage:'../../assets/poert1.png'},
        {pImage:'../../assets/port2.png'},
        {pImage:'../../assets/port3.png'},
        {pImage:'../../assets/poert1.png'},
        {pImage:'../../assets/port2.png'},
        {pImage:'../../assets/port3.png'}
      ]
}
