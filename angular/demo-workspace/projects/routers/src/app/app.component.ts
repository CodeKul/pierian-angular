import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routers';
  dt = 56566565

  isVs = false

  chDt() {
    this.dt = Date.now()
  }
}
