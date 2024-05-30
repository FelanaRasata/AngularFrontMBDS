import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Role} from "../utils/role";

export const teacherGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  return authService.isAuthorized(Role.tr).then(admin => {
      if (admin) {

        return true;

      } else {
        console.log("GUARD: Navigation NON autorisée");
        router.navigate(['/assignment/list/1/20'], { state: { message: "You are not a teacher 😄. " } });
        return false;
      }
    }
  );
};
