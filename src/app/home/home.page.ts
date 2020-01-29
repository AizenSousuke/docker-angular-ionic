import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards = [
    {
      'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit distinctio consequuntur. Corrupti vel quo tempora consequatur molestiae quidem natus suscipit, minus eaque dicta itaque magnam provident. Dicta, optio amet.'
    }
  ];

  constructor() {}

  onClick() {
    this.cards.push({
      'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit distinctio consequuntur. Corrupti vel quo tempora consequatur molestiae quidem natus suscipit, minus eaque dicta itaque magnam provident. Dicta, optio amet.'
    })
  }

  onButtonClick(card) {
    console.log(card);
    this.cards.splice(card, 1);
  }
}
