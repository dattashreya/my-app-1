import { Injectable } from '@angular/core';
import { user, User } from './user';

@Injectable()
export class UserService {
  private users: User[] = user;
  constructor() { }

  getAll() {
    return this.users;
  }

  getOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  getActive() {
    const active = []
    while (active.length < 3) {
      const user = this.users[Math.floor(Math.random() * 10)]
      if (!active.includes(user)) {
        active.push(user)
      }
    }
    return active;
  }




}