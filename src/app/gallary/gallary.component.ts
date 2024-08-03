import { gallaryProduct } from './../interface';
import { Component } from '@angular/core';
import { RecommendedComponent } from "../recommended/recommended.component";

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
    gallaryList:gallaryProduct[]=[
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000},
      {name:'iphone 12',image:'assets/phone1.webp',price:15000},
      {name:'iphone 11',image:'../../assets/phone2.webp',price:12000},
      {name:'iphone 13',image:'../../assets/phone3webp.webp',price:20000},
      {name:'cycle',image:'assets/pexels-photo-92633.jpeg',price:6000},
      {name:'mac laptop',image:'assets/bg2.jpg',price:50000},
      {name:'dell laptop',image:'assets/full-6-600x420.jpg',price:25000}
    ]
}
