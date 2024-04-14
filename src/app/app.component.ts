import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./componets/product/product.component";
import { response } from 'express';
import { json } from 'stream/consumers';
import { log } from 'console';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductComponent]
    
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=> response.json).then((json)=> console.log(json)
    )  
  }
  createPost(){
    fetch('http://localhost:3000/user/',{
      method:'POST',
      body:JSON.stringify({
        id:'',
        nombre:"isaac",
        apellidoP:"toledo",
        apellidoM:"Cast",
        email:"isaactoledocastillo@gmail.com",
        username:"bar",
        password:"idiasd",
        plan:"basico"
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      }
    }).then((response)=>response.json).then((json)=>console.log(json))
  }
}
