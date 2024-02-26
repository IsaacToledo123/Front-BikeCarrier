import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegistroComponent } from './registro/registro.component';
export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },

];
