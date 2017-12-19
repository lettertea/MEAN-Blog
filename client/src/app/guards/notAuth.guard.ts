import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage:FlashMessagesService,

  ) { }


  canActivate() {

    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
      this.flashMessage.show('You are already logged in', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    } else {
      return true;
    }
  }
}
