import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { LoginService } from '../page/login/login.service';
import { log } from 'console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgxScannerQrcodeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  output: string = '';
  userData: any
  userPhoto: any

  handleData(event: any): string {

    this.output = event.data.toString();
    return this.output
  }

  onError(error: any) {
    console.error('Scanner error:', error);
  }

  constructor(private router: Router, private productSrvices: LoginService) { }
  ngOnInit(): void {
    this.getUser()
    this.userData = localStorage.getItem('username')
    this.userPhoto =localStorage.getItem('photo')
  }

  getUser(): void {
    this.productSrvices.disparadorDeUsuario.subscribe(data => {
      console.log(data.data);
      localStorage.setItem("username", data.data)
      this.userData = data.data
      localStorage.setItem("photo", this.userData.charAt(0).toUpperCase())
      this.userPhoto = this.userData.charAt(0).toUpperCase()
    })
  }


}