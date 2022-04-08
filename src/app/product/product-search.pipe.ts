import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ""): Product[] {
    if(searchCriteria === "") {
      return products;
    }
    let selectedProducts: Product[] = []; // Array
    searchCriteria = searchCriteria.toLowerCase();
    for(let pro of products) {
      if(
        pro.id.toString().includes(searchCriteria)
        || pro.partNbr.toLowerCase().includes(searchCriteria)
        || pro.name.toLowerCase().includes(searchCriteria)
        || pro.price.toString().includes(searchCriteria)
      ) {
        selectedProducts.push(pro);
      }
    }
    return selectedProducts;
  }

}
