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
import io from 'socket.io-client';
import Swal from 'sweetalert2';
const socket = io('http://3.227.76.3/');
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgxScannerQrcodeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  unLock() {
    this.productSrvices.posttButton(1).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: 'Éxito!',
        text: 'La operación se ha completado correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        localStorage.removeItem('lugar')
      });
    }, error => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al procesar la solicitud.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }

  output: string = '';
  lugar: any
  userData: any
  userPhoto: any
  plan: any
  fecha: any
  tode: any


  public handleData(e: ScannerQRCodeResult[], action?: any): void {
    if (e[0].value === 'Lugar 1') {
      localStorage.setItem('lugar', e[0].value)
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
              this.tode = parsedData[0];
      
              // Obtén el objeto time 'saldo'
              let saldo = this.tode.saldo;
              
              // Extrae horas, minutos y segundos de 'saldo' utilizando sus métodos específicos
              let horas = saldo.getHours();
              let minutos = saldo.getMinutes();
              let segundos = saldo.getSeconds();
              let totalHoras = horas + minutos / 60 + segundos / 3600;
              let dias = totalHoras / 24;
              this.fecha = dias;
              console.log('Horas totales:', totalHoras);
              console.log('Días:', dias);
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