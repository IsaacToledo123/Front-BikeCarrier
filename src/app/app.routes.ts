import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegistroComponent } from './registro/registro.component';
import { CostosComponent } from './costos/costos.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
export const routes: Routes = [
    { path: 'notificaciones', component:NotificationsComponent  },
    { path: 'configuraciones', component:SettingsComponent  },
    { path: 'temperatura', component:TemperaturaComponent  },
    { path: 'costos', component: CostosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }, 

];
