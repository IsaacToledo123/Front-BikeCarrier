import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../components/page/login/login.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userPhot: any
  userData: any
  userForm: FormGroup;
  constructor(private router: Router, private servicio: LoginService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: localStorage.getItem('username'),
      password: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    })

  }
  ngOnInit(): void {
    this.userData = localStorage.getItem("username")
    this.userPhot = localStorage.getItem('photo')
  }
  cambiarRuta() {
    this.router.navigate(['/home']);
  }
  OnSubmit($event: any) {
    this.servicio.newPassword(this.userForm.value).subscribe(res => {
      console.log(res);
    Swal.fire({
        icon: 'success',
        title: 'Nueva contraseña enviada',
        text: '¡Se ha enviado la nueva contraseña con éxito!',
      }).then((result) => {
        this.router.navigate(['/home']);
      });
    });
  }
}
