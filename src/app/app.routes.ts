import { Routes } from '@angular/router';
import { LoginComponent } from './components/page/login/login.component';
import { HomeComponent } from './components/page/home/home.component';
import { UserComponent } from './user/user.component';
import { RegistroComponent } from './registro/registro.component';
import { CostosComponent } from './components/page/costos/costos.component';
import { TemperaturaComponent } from './components/servicios/temperatura/temperatura.component';
import { SettingsComponent } from './components/servicios/settings/settings.component';
import { NotificationsComponent } from './components/servicios/notifications/notifications.component';
import { HistorialComponent } from './components/servicios/historial/historial.component';
import { RecuPassComponent } from './components/servicios/recu-pass/recu-pass.component';
import { ManualComponent } from './manual/manual.component';
export const routes: Routes = [
    { path: 'recuperarContraseña', component: RecuPassComponent }, 
    { path: 'manual', component: ManualComponent }, 
    { path: 'historial', component:HistorialComponent  },
    { path: 'notificaciones', component:NotificationsComponent  },
    { path: 'configuraciones', component:SettingsComponent  },
    { path: 'temperatura', component:TemperaturaComponent  },
    { path: 'costos', component: CostosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }, 

]; 
