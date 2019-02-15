import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDetailsVisible = false;
  toggleDetails() {
    this.isDetailsVisible ? this.isDetailsVisible = false : this.isDetailsVisible = true;
  }

  getIsDetailsVisible() {
    return this.isDetailsVisible ? "visible" : "hidden";
  }
}
