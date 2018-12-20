import { Component } from '@angular/core';

/**
 * Generated class for the MenuContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-content',
  templateUrl: 'menu-content.html'
})
export class MenuContentComponent  {

  text: string;

  constructor() {
    console.log('Hello MenuContentComponent Component');
    this.text = 'Hello World';
  }
  test(){
    
  }
}
