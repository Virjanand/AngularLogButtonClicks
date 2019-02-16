import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDetailsVisible = false;
  logMessages = [];
  toggleDetails() {
    this.isDetailsVisible ? this.isDetailsVisible = false : this.isDetailsVisible = true;
    this.createLogEntry();
  }

  createLogEntry() {
    this.logMessages.push("Button clicked.")
  }

  getIsDetailsVisible() {
    return this.isDetailsVisible ? "visible" : "hidden";
  }
}
