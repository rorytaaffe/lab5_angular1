import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  numberOfTimes:number = 0;
  hide:boolean = false;

  onButtonClick(){
    this.numberOfTimes++;
  }

  onStarClick(){
    console.log("click");
    //this.hide = false;
    if(this.hide == true){
      this.hide = false;
    }
    else
    this.hide = true;

  }

}
