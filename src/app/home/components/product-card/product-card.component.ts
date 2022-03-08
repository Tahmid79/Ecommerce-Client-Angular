import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product_img_url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/864px-Font_Awesome_5_solid_shopping-cart.svg.png';
  product_img: string = `url(${this.product_img_url})` ;
  productList: IProduct[] = [] ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList() ;
  }

  getProductList(): void {
    this.productService.getProducts().subscribe( data => {
        this.productList = data ;
    }) ;
  }

}
