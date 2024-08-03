
import { Component } from '@angular/core';
import { gallaryProduct } from '../interface';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  recommended:gallaryProduct[]=[
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120},
    {name:'chose',image:'assets/img10.jpg',price:120}
  ]
}
