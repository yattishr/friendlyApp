import { Injectable } from '@angular/core';

import { Item } from '../../models/item-groups';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "groupname": "Group 1",
    "friendname1": "Burt Bear",
    "friendname2": "Bart Bear",
    "friendname3": "Hurt Bear",
    "friendname4": "Gurt Bear",
    "friendname5": "Durt Bear"
  };


  constructor() {
    let items = [
      {
        "groupname": "Group 1",
        "friendname1": "Burt Bear",
        "friendname2": "Charlie Cheetah",
        "friendname3": "Donald Duck",
        "friendname4": "Eva Eagle",
        "friendname5": "Ellie Elephant"
      },
      {
        "groupname": "Group 2",
        "friendname1": "Charlie Cheetah",
        "friendname2": "Burt Bear",
        "friendname3": "Donald Duck",
        "friendname4": "Eva Eagle",
        "friendname5": "Ellie Elephant"
      },
      {
        "groupname": "Group 3",
        "friendname1": "Donald Duck",
        "friendname2": "Burt Bear",
        "friendname3": "Charlie Cheetah",
        "friendname4": "Eva Eagle",
        "friendname5": "Ellie Elephant"
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
