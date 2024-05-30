import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { EUserRole } from '../types/enums'


export const studentGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)


  let admin = await authService.isAuthorized(EUserRole.st)

  if (admin) return true

  await router.navigate(['/assignment/list/1/20'], { state: { message: 'You are not a student 😄. ' } })
  return false

}
