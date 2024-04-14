import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }
  onSubmit() {
    this.loginService.postLogin(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.loginService.disparadorDeUsuario.emit({
          data: res.data.user.username
        });
        console.log(res.data.user.username);
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: 'Bienvenido de vuelta, ' + res.data.user.username + '!',
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            this.router.navigate(['/']); 
          }
        });
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.msn,
        });
      }
    );
  }



}
