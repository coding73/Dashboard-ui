import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector } from '@angular/core';
import { AppService } from '@app/shared';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const injector = inject(Injector);
  const app = injector.get(AppService);

  let headers: HttpHeaders = req.headers;
  let profileKey: any = localStorage.getItem('pk');
  let profileDetails: any = localStorage.getItem('pf');
  profileDetails = JSON.parse(profileDetails);
  // Append auth headers only if user is logged in
  if (profileKey) {
    headers = headers.append('token', profileKey);
  }

  if (profileDetails && profileDetails.user && profileDetails.user.email) {
    headers = headers.append('email',  profileDetails.user.email);
  }

  let request = req.clone({ headers });

  return next(request);
};
