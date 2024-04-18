import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
  NgxScannerQrcodeModule,
} from 'ngx-scanner-qrcode';
import { LoginService } from '../../components/page/login/login.service';
import { log } from 'console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgxScannerQrcodeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
unLock() {
this.productSrvices.posttButton(1).subscribe(data=>{
console.log(data);
})
}
  output: string = '';
  lugar:any
  userData: any
  userPhoto: any
  plan: any
 tode:any


   public handleData(e: ScannerQRCodeResult[], action?: any): void {
    if (e[0].value==='Lugar 1') {
     this.productSrvices.disparadorDeLugar.emit({
      data:e[0].value

     })
     this.router.navigate(['/logLugar'])
    }
    
  }

  onError(error: any) {
    console.error('Scanner error:', error);
  }

  constructor(private router: Router, private productSrvices: LoginService) { }
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
     
      this.userData = localStorage.getItem('username');
      this.userPhoto = localStorage.getItem('photo');
      if (this.userData !== null) {
        this.productSrvices.getUser(this.userData).subscribe((userData) => {
     
          const jsonData = JSON.stringify(userData.data);
          const parsedData = JSON.parse(jsonData);
          if (Array.isArray(parsedData) && parsedData.length > 0) {
              this.tode=parsedData[0]
          }
        });
      } else {
        console.error('El nombre de usuario almacenado en localStorage es nulo.');
      }
  } else {
      console.warn('localStorage is not available in this environment');
  }
  const storedLugar = localStorage.getItem('lugar');
    if (storedLugar !== null) {
      this.lugar = storedLugar;
    }

  }

 
 


}