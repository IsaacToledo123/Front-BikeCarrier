import { Component, OnInit } from '@angular/core';
import { ServicepayService } from './servicepay.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit {
  userData:any
  payForm: FormGroup;
  ngOnInit(): void {
this.userData=this.getUser()
  }
  constructor(private servicio: ServicepayService, private fb: FormBuilder) {
    this.payForm = this.fb.group({
      id:'',
      concepto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      numerodetarjeta: new FormControl('', [Validators.required]),
      personafisica:this.userData.nombre,
      telefono: new FormControl('', [Validators.required]),
      correo: this.userData.email,
      paquete: 1,
      cvv: new FormControl('', [Validators.required]),
      fechadevencimiento:new FormControl('', [Validators.required]),
      iduser:this.userData.id
    })

  }
  onSubmit() {
    if (this.payForm.valid) {
      this.servicio.postPay(this.payForm.value).subscribe(res=>{
        console.log(res);
      })
      
    }
  }
  getUser():any{
    const user = localStorage.getItem('username');
    if (user !== null) {
      this.servicio.getUser(user).subscribe((userData) => {
        console.log(userData);
        return userData;
      });
    } else {
      console.error('El nombre de usuario almacenado en localStorage es nulo.');
    }
  
  }


}
