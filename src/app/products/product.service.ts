import { Injectable } from '@angular/core';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsList:product[] = [
    {id:1, name: 'producto 1', description: 'Descripcion producto 1', price: 100, imageUrl:'../assets/images/Product1.jpeg'},
    {id:2, name: 'producto 2', description: 'Descripcion producto 2', price: 200, imageUrl:'../assets/images/Product2.jpeg'}
  ];

  getProducts(): product[]{
    return this.productsList; 
  }

  getProductsById(id: number): product | undefined{
    return this.productsList.find(resultProduct => resultProduct.id == id);
  }

  addProduct(){

  }

  editProduct(){

  }
}
 
  

