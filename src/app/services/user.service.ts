import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users$: BehaviorSubject<User[]> = new BehaviorSubject([
    { firstName: 'Mike', lastName: 'Wheeler', id: '2sdns2fqwdhzc' },
    { firstName: 'Dustin', lastName: 'Henderson', id: '1sdns2fqwdhzc' },
    { firstName: 'Lucas', lastName: 'Sinclair', id: '4sdns2fqwdhzc' },
    { firstName: 'Will', lastName: 'Byers', id: '3sdns2fqwdhzc' },
  ]);

  getUsers(user: User) {
    return this.users$;
  }

  createUser(user: User) {
    let users: User[] = [];
    users = this.users$.getValue();
    users.push(user);
    this.users$.next(users);
  }

  editUser(user: User) {
    let users: User[] = [];
    users = this.users$.getValue();
    var foundIndex = users.findIndex((x) => x.id == user.id);
    users[foundIndex] = user;
    this.users$.next(users);
  }
}
