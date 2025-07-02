import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let profileKey: any = localStorage.getItem('pk');
  let profileDetails: any = localStorage.getItem('pf');
  profileDetails = JSON.parse(profileDetails);

  if (!(profileDetails && profileDetails.user.email && profileKey)) {
    router.navigate(['/auth']);
  };
  return profileDetails.user.email && profileKey ? true : false;
};
