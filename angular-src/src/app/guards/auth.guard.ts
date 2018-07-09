import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
  redirect(){
    this.router.navigate(['/dashboard/feed']);
  }
}