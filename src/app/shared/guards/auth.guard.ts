import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  // injection du router
  const router = inject(Router);
  return authService.isLogged().then(admin => {
      if (admin) {
        console.log("GUARD: Navigation autorisée");
        return true;
      } else {
        console.log("GUARD: Navigation NON autorisée");
        router.navigate(['/']);
        return false;
      }
    }
  );
};
