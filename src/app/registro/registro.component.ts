import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  userForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: RequestService) {
    this.userForm = this.fb.group({
      id: '',
      nombre: new FormControl('', [Validators.required]),
      apellidoP: new FormControl('', [Validators.required]),
      apellidoM: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      plan: 'basico'
    })
  }




  OnSubmit(event: Event) {

    console.log(this.userForm.value);

    if (this.userForm.valid) {
      console.log(this.userForm);

      this.userService.createUser(this.userForm.value).subscribe((res: any) => {
        console.log(res); 
    });
        } else {
      alert("llene todos los campos")

      this.userForm.markAllAsTouched();
    }
  }










}
