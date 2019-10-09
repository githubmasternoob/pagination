import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pagination';
  page = 2;
  items: string[] = ['Apple', 'Orange', 'Banana', 'Degla', 'Delle3', 'Test'];
  pageSize = 2;

}
