import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Watch A Movie",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "You invited Steffie to Watch A Movie at Ster Kinekor, Sandton City."
  };


  constructor() {
    let items = [
      {
        "name": "Watch A Movie",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "You invited Steffie to Watch A Movie at Ster Kinekor, Sandton City."
      },
      {
        "name": "Drinks and Dining",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie invited you to Drinks and Dining at Cafe Del Ma."
      },
      {
        "name": "Music Concert",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald invited you to a Bon Jovi Music Concert."
      },
      {
        "name": "Sports and Recreation",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva invited you to a England vs Brazil Soccer match."
      },
      {
        "name": "Drinks and Dining",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie invited you to coffee at Kramers, Johannesburg."
      },
      {
        "name": "Watch A Movie",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly invited you to Watch A Movie at Nu Metro Pavilion."
      },
      {
        "name": "Sports and Recreation",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul invited you to an outdoor event."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
