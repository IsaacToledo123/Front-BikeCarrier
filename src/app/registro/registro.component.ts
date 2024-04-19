import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: RequestService ,private router:Router) {
    this.userForm = this.fb.group({
      id: '',
      nombre: new FormControl('', [Validators.required]),
      apellidoP: new FormControl('', [Validators.required]),
      apellidoM: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      plan: 1,
      duracion:''
    })
  }



  OnSubmit(event: Event) {
    console.log(this.userForm.value);
  
    if (this.userForm.valid) {
      console.log(this.userForm);
  
      this.userService.createUser(this.userForm.value).subscribe((res: any) => {
        console.log(res); 
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido!',
        }).then((result) => {
          this.router.navigate(['/']);
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Por favor llene todos los campos!',
      });
  
      this.userForm.markAllAsTouched();
    }
  }





}
