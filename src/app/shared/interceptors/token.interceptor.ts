import {HttpInterceptorFn} from '@angular/common/http'
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

// Code Stack Overflow
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  const token = authService.getToken()

  if (token) {

    const cloned = req.clone({
      setHeaders: {
        authorization: token,
      },
    })
    return next(cloned)

  } else {
    return next(req)
  }

}
