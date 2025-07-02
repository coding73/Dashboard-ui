import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  let profileDetails: any = localStorage.getItem('pf');
  profileDetails = JSON.parse(profileDetails);
  
  if (profileDetails && profileDetails.username) {
    router.navigate(['/app']);
  };
  
  return profileDetails && profileDetails.username ? false : true;
};
