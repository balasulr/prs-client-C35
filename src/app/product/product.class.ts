import { Vendor } from "../vendor/vendor.class";

// Properties
export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = ""; // Same as Description in product-list.component.html
    price: number = 0;
    unit: string = "";
    photoPath: string = "";
    
    // Has a Foreign Key to Vendor
    vendorId: number = 0;
    vendor!: Vendor;
   }