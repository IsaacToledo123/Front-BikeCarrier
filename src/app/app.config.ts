import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { SocketService } from './components/servicios/temperatura/socket.service';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
    SocketService,
  importProvidersFrom(
    HttpClientModule,
  ),
  provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
  ]
};
