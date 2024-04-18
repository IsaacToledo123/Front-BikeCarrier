import { Component, OnInit } from '@angular/core';
import { ServicepayService } from './servicepay.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit {
  userNombre:any
  userEmail:any
  userId:any 
  payForm: FormGroup;
  userData: any;

  ngOnInit(): void {
  this.getUser()
 
  }
  constructor(private servicio: ServicepayService, private fb: FormBuilder, private router:Router) {
    
    this.payForm = this.fb.group({
      id: '',
      concepto: new FormControl('', [Validators.required]),
      importe: new FormControl('', [Validators.required]),
      ntarjeta: new FormControl('', [Validators.required]),
      persona: localStorage.getItem('nombre'),
      telefono: new FormControl('', [Validators.required]),
      correo:'',
      paquete:parseInt(localStorage.getItem('paquete') || '0', 10),
      cvv: new FormControl('', [Validators.required]),
      Fvencimiento: new FormControl('', [Validators.required]),
      iduser: localStorage.getItem('id')
    })

  }
  OnSubmit() {
    if (this.payForm.valid) {
      console.log(this.payForm.value);
      
      this.servicio.postPay(this.payForm.value).subscribe(
          (res) => {
              Swal.fire({
                  icon: 'success',
                  title: '¡Pago realizado!',
                  text: 'El pago se ha procesado correctamente.',
                  confirmButtonText: 'Aceptar'
              }).then(() => {
                  this.router.navigate(['/home']);
              });
              localStorage.removeItem('nombre');
              localStorage.removeItem('id');
          

          },
          (error) => {
              Swal.fire({
                  icon: 'error',
                  title: '¡Error!',
                  text: 'Hubo un problema al procesar el pago.',
                  confirmButtonText: 'Aceptar'
              }).then(() => {
                  this.router.navigate(['/']);
              });
          }
      );
  } else {
      Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Por favor, complete todos los campos obligatorios.',
          confirmButtonText: 'Aceptar'
      });
  }
  }
  getUser(): void {
    const user = localStorage.getItem('username');
    if (user !== null) {
      this.servicio.getUser(user).subscribe(userData => {
        this.userData=userData
        console.log(this.userData.data[0].nombre);
        localStorage.setItem('nombre',this.userData.data[0].nombre);
        localStorage.setItem('id',this.userData.data[0].id.toString());
    
      });
    } else {
      console.error('El nombre de usuario almacenado en localStorage es nulo.');
    }
   
  }
  

}
