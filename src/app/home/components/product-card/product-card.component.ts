import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {IProduct} from "../../../shared/interfaces/product";
import * as _ from "lodash";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product_img_url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/864px-Font_Awesome_5_solid_shopping-cart.svg.png';
  product_img: string = `url(${this.product_img_url})` ;
  productList: IProduct[] = [] ;
  productListNoSort: IProduct[] = [] ;
  productListPaginated: IProduct[] = [] ;

  paginator = {
    currentIndex : 1,
    pageSize: 6,
    total: 60
  } ;

  sortOrder: string = 'default' ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList() ;
  }

  getProductList(): void {
    this.productService.getProducts().subscribe( data => {
        this.productList = data ;
        this.productListNoSort = _.cloneDeep(data) ;
        this.paginator.total = data.length-1 ;
        this.setPagination() ;
    }) ;
  }

  paginate = (array: any, page_size:number, page_number:number) => {
    return array.slice(page_number * page_size, page_number * page_size + page_size);
  };

  paginationChange(currentPage:number){
     this.paginator.currentIndex = currentPage;
     this.setPagination() ;
  }

  setPagination(): void {
    this.productListPaginated = this.paginate(this.productList, this.paginator.pageSize, this.paginator.currentIndex);
  }

  changeSortOrder = (event: any) =>{
    const ascendingPredicate = (a:IProduct , b:IProduct): number => {
      let p1 = a?.price; let p2 = b?.price;
      p1 = (!p1) ? 0 : p1 ;
      p2 =  (!p2) ? 0 : p2 ;
      return ( p1 > p2) ? 1 : ( p1 < p2) ? -1 : 0  ;
    } ;

    const descendingPredicate = (a:IProduct , b:IProduct): number => {
        const ascVal = ascendingPredicate(a,b) ;
        return (ascVal !== 0) ? ascVal * -1 : 0 ;
    };

    switch(event){
        case 'default':
            this.productList = this.productListNoSort;
            break;
        case 'ascending':
            this.productList.sort(ascendingPredicate) ;
            break ;
        case 'descending':
            this.productList.sort(descendingPredicate) ;
            break ;
      }
    this.paginator.currentIndex = 1 ;
    this.setPagination();
  }

}
