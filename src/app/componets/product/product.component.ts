import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  qrCodeData: string = ''; // Variable para almacenar los datos del código QR

  constructor(private router: Router) { }

  cambiarRuta() {
    this.router.navigate(['/user']);  
  }

  generarCodigoQR() {
    // Genera un código QR aleatorio
    this.qrCodeData = Math.random().toString(36).substring(7); // Genera una cadena aleatoria como ejemplo

    // Genera el código QR utilizando la biblioteca 'qrcode'
    QRCode.toDataURL(this.qrCodeData, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      // Actualiza la imagen del código QR en la vista
      const qrImage = document.getElementById('qr-image') as HTMLImageElement;
      qrImage.src = url;
    });
  }
}
