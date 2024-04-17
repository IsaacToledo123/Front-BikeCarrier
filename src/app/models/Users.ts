import { Time } from "@angular/common";

export interface User{
    length: number;
    id?:string;
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    email:string;
    username:string;
    password:string;
    plan:number;
    duracion:Time
}
export interface Pay{
    id?: string;
    concepto: string;
    importe: number;
    ntarjeta: number;
    persona: string;
    telefono: number;
    correo: string;
    paquete: number;
    cvv: number;
    Fvencimiento: Date;
    iduser: string
}
export interface ApiResponse<T>{
    message?: string,
    data:T,
}