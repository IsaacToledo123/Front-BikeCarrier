import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecupassService } from './recupass.service';

@Component({
  selector: 'app-recu-pass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recu-pass.component.html',
  styleUrl: './recu-pass.component.css'
})
export class RecuPassComponent {

recuForm:FormGroup;
 constructor(private fb:FormBuilder ,private router: Router,private servicio:RecupassService ){
    this.recuForm=this.fb.group({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })

  }
  Onsubmit() {
    this.servicio.PutPass(this.recuForm.value).subscribe(res=>{
      console.log(res);
    })
    }
}
