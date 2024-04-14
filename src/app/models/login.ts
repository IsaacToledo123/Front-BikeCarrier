export interface UserLog {
    username:string;
    password:string;
}
export interface ApiResponse<T>{
    message?: string,
    data:T,
}