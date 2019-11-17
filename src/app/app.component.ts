import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Person of Interest Search Portal';
  public step = "find";
  constructor(){
  }
  findClicked(){
    // this.step = "find";
  }
  updateClicked(){
    // this.step = "update";
  }
  poisearchClicked(){
    // this.step = "poisearch";
  }
}
