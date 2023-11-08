import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'test';
  arary: string[] = [];
  ngOnInit(){
    this.arary.push("ssss","3333333","666666") 
  }
  test1 (){
    alert("55555")
  }
}
