export interface UserPass{
    username:string
    password:string;
    newPassword:string;
}
export interface ApiResponse<T>{
    message?: string,
    data:T,
}