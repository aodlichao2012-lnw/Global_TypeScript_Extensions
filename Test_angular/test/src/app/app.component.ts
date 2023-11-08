import { Component , OnInit , ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit  {

  constructor(private elementRef: ElementRef) {}

  title = 'test';
  arary: string[] = [];
  values: string = "";
  ngOnInit() {
    // Get the value of the title element
    // this.title = this.elementRef.nativeElement.textContent;

  }
  test1(){
    this.values = this.elementRef.nativeElement.querySelector('[data-input]').value
    alert(this.values)
    for(const item of this.values){
      alert(item.valueOf())
    }
  }
  test2(){

  }
}
