import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details-main',
  templateUrl: './product-details-main.component.html',
  styleUrls: ['./product-details-main.component.scss']
})
export class ProductDetailsMainComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  productId : string = '' ;
  product_img_url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/864px-Font_Awesome_5_solid_shopping-cart.svg.png';
  product_img_css: string = `url(${this.product_img_url})` ;

  ngOnInit(): void {
    this.getProductDetails() ;
  }

  getProductDetails(){
    this.activatedRoute.params.subscribe( params => {
      this.productId = params['productId'] ;
    }) ;
  }

}
