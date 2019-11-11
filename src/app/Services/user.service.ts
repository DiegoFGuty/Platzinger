import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private friends: User[];
  private friend: User;

  constructor() {
    //Here instead of putting manually the data we can access to a Restful API via HTTP's requests
    let Usuario1: User = {
      nick: 'Eduardo',
      subnick: 'Hola, soy Eduardo',
      age: 21,
      email: 'email@mail.com',
      friend : true,
      uid: 1,
    };

    let Usuario2: User = {
      nick: 'Julian',
      subnick: 'Hola, soy Julian',
      age: 22,
      email: 'email@mail.com',
      friend : true,
      uid: 2,
    };

    let Usuario3: User = {
      nick: 'Sebastián',
      subnick: 'Hola, soy Sebastián',
      age: 23,
      email: 'email@mail.com',
      friend : false,
      uid: 3,
    };

    let Usuario4: User = {
      nick: 'Matías',
      subnick: 'Hola, soy Matías',
      age: 24,
      email: 'email@mail.com',
      friend : false,
      uid: 4,
    };

    let Usuario5: User = {
      nick: 'Cristóbal',
      subnick: 'Hola, soy Cristóbal',
      age: 25,
      email: 'email@mail.com',
      friend : true,
      uid: 5,
    };

    this.friends = [Usuario1, Usuario2, Usuario3, Usuario4, Usuario5];
   }

   getFriends() : User []{
     return this.friends;
   }

   getAFriend(uid : Number) : User {
      return this.friends.find( (record) => {
        return record.uid == uid;
      })
   }
}
