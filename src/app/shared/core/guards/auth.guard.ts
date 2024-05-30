import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { inject } from '@angular/core'


export const authGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  const isLogged = await authService.isLogged()

  if (isLogged)
    return true

  await router.navigate(['/'], { state: { message: 'You need to be logged in 😄. ' } })
  return false

}
