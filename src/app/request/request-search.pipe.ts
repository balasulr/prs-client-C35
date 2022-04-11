import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ""): Request[] {
    if(searchCriteria === "") {
      return requests;
    }
    let selectedRequests: Request[] = []; // Array
    searchCriteria = searchCriteria.toLowerCase();
    for(let req of requests) {
      if(
        req.id.toString().includes(searchCriteria)
        || req.description.toLowerCase().includes(searchCriteria)
        || req.rejectionReason.toLowerCase().includes(searchCriteria)
        || req.status.toLowerCase().includes(searchCriteria)
        || req.total.toString().includes(searchCriteria)
      ) {
        selectedRequests.push(req);
      }
    }
    return selectedRequests;
  }

}
