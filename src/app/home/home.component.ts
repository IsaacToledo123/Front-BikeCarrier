import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductComponent } from "../componets/product/product.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, ProductComponent]
})
export class HomeComponent {

}  
 