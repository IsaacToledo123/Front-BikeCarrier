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
export interface ApiResponse<T>{
    message?: string,
    data:T,
}