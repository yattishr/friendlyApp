import { Injectable } from '@angular/core';

import { Item } from '../../models/item-friends';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "email": "burtbear@gmail.com",
    "contact": "0831234567",
    "profilePic": "assets/img/speakers/bear.jpg"
  };


  constructor() {
    let items = [
      {
        "name": "Burt Bear",
        "email": "burtbear@gmail.com",
        "contact": "0831234567",
        "profilePic": "assets/img/speakers/bear.jpg"
      },
      {
        "name": "Charlie Cheetah",
        "email": "cheetahcharlie@gmail.com",
        "contact": "0841234567",
        "profilePic": "assets/img/speakers/cheetah.jpg"
      },
      {
        "name": "Donald Duck",
        "email": "donaldduck@gmail.com",
        "contact": "0731234567",
        "profilePic": "assets/img/speakers/duck.jpg"
      },
      {
        "name": "Eva Eagle",
        "email": "evaeagle@gmail.com",
        "contact": "0721234567",
        "profilePic": "assets/img/speakers/eagle.jpg"
      },
      {
        "name": "Ellie Elephant",
        "email": "elephantellie@gmail.com",
        "contact": "0711234567",
        "profilePic": "assets/img/speakers/elephant.jpg"
      },
      {
        "name": "Molly Mouse",
        "email": "mollythemouse@gmail.com",
        "contact": "0611234567",
        "profilePic": "assets/img/speakers/mouse.jpg"
      },
      {
        "name": "Paul Puppy",
        "email": "pupppypaul@gmail.com",
        "contact": "0621234567",
        "profilePic": "assets/img/speakers/puppy.jpg",
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
