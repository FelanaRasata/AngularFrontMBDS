import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Role} from "../utils/role";

export const studentGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);


  return authService.isAuthorized(Role.st).then(admin => {
      if (admin) {

        return true;

      } else {
        router.navigate(['/assignment/list/1/20'], { state: { message: "You are not a student 😄. " } });
        return false;
      }
    }
  );
};
