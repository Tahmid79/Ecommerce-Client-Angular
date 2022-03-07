import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product_img_url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/864px-Font_Awesome_5_solid_shopping-cart.svg.png';
  product_img: string = `url(${this.product_img_url})` ;
  constructor() { }

  ngOnInit(): void {
  }

}
