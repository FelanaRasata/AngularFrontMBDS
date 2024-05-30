import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'
import { tokenInterceptor } from '@shared/core/interceptors/token.interceptor'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors(
      [tokenInterceptor]
    )), provideAnimationsAsync('noop')
  ]
}
