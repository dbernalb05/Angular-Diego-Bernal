import { Component } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productId!: number;
  productList: product[] = [];
  constructor (private productService: ProductService){}

  ngOnInit():void{
    this.productList = this.productService.getProducts();
  }

  addToCart(product: product){
    console.log('agregado: ' + product.name);
  }

  getProductById (){
    return this.productService.getProductsById(this.productId);
  }

}
