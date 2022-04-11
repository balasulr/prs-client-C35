import { Product } from "../product/product.class";
import { Request } from "../request/request.class";

// Properties
export class Requestline {
    id: number = 0;
    
    // Has a Foreign Key to Request
    requestId: number = 0;
    request!: Request;

    // Has a Foreign Key to Product
    productId: number = 0;
    product!: Product;

    quantity: number = 1;
   }