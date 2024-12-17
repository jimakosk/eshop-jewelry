import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Diamond Ring',
      description: 'A stunning diamond ring that sparkles with elegance.',
      price: 1200,
      image: 'assets/images/diamond-ring.jpg'
    },
    {
      id: 2,
      name: 'Gold Necklace',
      description: 'An exquisite gold necklace that adds a touch of glamour.',
      price: 950,
      image: 'assets/images/gold-necklace.jpg'
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      description: 'A timeless silver bracelet for everyday elegance.',
      price: 350,
      image: 'assets/images/silver-bracelet.jpg'
    }
  ];

}
