import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .online {
        color: white;
    }
  `]  
})
export class AppComponent {
  isDetailsVisible = false;
  logMessages = [];
  numberOfClicks = 0;
  toggleDetails() {
    this.isDetailsVisible ? this.isDetailsVisible = false : this.isDetailsVisible = true;
    this.createLogEntry();
  }

  createLogEntry() {
    this.numberOfClicks++;
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear() + " @ "  
      + currentdate.getHours() + ":"  
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds();
    this.logMessages.push(this.numberOfClicks + ". " + datetime + ": Button clicked.")
  }

  getIsDetailsVisible() {
    return this.isDetailsVisible ? "visible" : "hidden";
  }
}
