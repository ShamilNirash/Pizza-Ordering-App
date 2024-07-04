import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth/user-auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  let isPerson: boolean = false;
  const userService = inject(UserAuthService);
  const router = inject(Router);
  userService.getUserInformation().subscribe({
    next: user => {
      return true;
    },
    error: () => {
      router.navigateByUrl('/');
      return false;
    },
  });
  return true;
};
