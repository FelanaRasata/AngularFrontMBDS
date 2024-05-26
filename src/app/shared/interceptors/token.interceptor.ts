import {HttpInterceptorFn} from '@angular/common/http';

// Code Stack Overflow
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'your-token';
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        authorization: token,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
