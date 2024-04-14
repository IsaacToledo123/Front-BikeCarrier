import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 const myToken= localStorage.getItem('token')
 const cloneRequest= req.clone({
  setHeaders:{
    'x-token-access': `${myToken}`
  }
 })
  return next(cloneRequest);
};
