import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ""): Vendor[] {
    if(searchCriteria === "") {
      return vendors;
    }
    let selectedUsers: Vendor[] = []; // Array
    searchCriteria = searchCriteria.toLowerCase();
    for(let vend of vendors) {
      if(
        vend.id.toString().includes(searchCriteria)
        || vend.code.toString().includes(searchCriteria)
        || vend.name.toLowerCase().includes(searchCriteria)
        || vend.address.toLowerCase().includes(searchCriteria)
        || vend.city.toLowerCase().includes(searchCriteria)
        || vend.state.toLowerCase().includes(searchCriteria)
        || vend.zip.toLowerCase().includes(searchCriteria)
      ) {
        selectedUsers.push(vend);
      }
    }
    return selectedUsers;
  }

}
