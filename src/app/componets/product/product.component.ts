import { Component ,Input} from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:Product;


  constructor(private router: Router) { }
  cambiarRuta() {
    this.router.navigate(['/user']); 
  }
}
