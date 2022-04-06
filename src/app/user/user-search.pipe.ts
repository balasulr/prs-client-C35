import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ""): User[] {
    if(searchCriteria === "") {
      return users;
    }
    let selectedUsers: User[] = []; // Array
    searchCriteria = searchCriteria.toLowerCase();
    for(let use of users) {
      if(
        use.username.toLowerCase().includes(searchCriteria)
        || use.id.toString().includes(searchCriteria)
        || use.firstname.toLowerCase().includes(searchCriteria)
        || use.lastname.toLowerCase().includes(searchCriteria)
      ) {
        selectedUsers.push(use);
      }
    }
    return selectedUsers;
  }

}
