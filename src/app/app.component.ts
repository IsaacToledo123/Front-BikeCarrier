import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./componets/product/product.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductComponent]
    
})
export class AppComponent {
  title = 'midudev-app';
  changeTitle(){
    this.title="hola mundo"
  }
}
