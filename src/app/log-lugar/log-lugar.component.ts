import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../components/page/login/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-lugar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-lugar.component.html',
  styleUrl: './log-lugar.component.css'
})
export class LogLugarComponent implements OnInit {
  lugar: any = ''
  name: any
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private servicio: LoginService ,private router : Router) {
    this.loginForm = this.fb.group({
      nombre: this.name,
      password: new FormControl('', [Validators.required])
    })

  }
  ngOnInit(): void {

    const storedName = localStorage.getItem('username');
    if (storedName !== null) {
      this.name = storedName;
    }
    

  }


  onSubmit() {
    const storedLugar = localStorage.getItem('lugar');
    if (storedLugar !== null) {
      this.lugar = storedLugar;
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: `Lugar: ${this.lugar} ocupado`
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home']); 
        }
      });
    }
  }

}
