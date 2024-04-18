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
  userData:any

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }
  onSubmit() {
    if(this.loginForm.valid){
      this.loginService.postLogin(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res.data);
        
          localStorage.setItem("token", res.data.token);
       
            console.log(`username :${res.data.user.username}`);
            localStorage.setItem("username", res.data.user.username)
            this.userData =res.data.user.username
            localStorage.setItem("photo", this.userData.charAt(0).toUpperCase())   
          this.loginService.disparadorDeUsuario.emit({
            data: res.data.user.username
          });
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Bienvenido de vuelta, ' + res.data.user.username + '!',
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              this.router.navigate(['/home']); 
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
    



}
