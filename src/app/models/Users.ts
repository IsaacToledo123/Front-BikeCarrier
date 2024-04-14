export interface User{
    id?:string;
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    email:string;
    username:string;
    password:string;
    plan:string;
}
export interface Pay{
    id?:string;
    concepto:string;
    cantidad:number;
    numerodetarjeta:number;
    personafisca:string;
    telefono:number;
    correo:string;
    paquete:number;
    cvv:number;
    fechadevencimiento:Date;
    iduser:string;
}
export interface ApiResponse<T>{
    message?: string,
    data:T,
}