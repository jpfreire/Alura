import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject = new Subject<Alert>() ;

  keepAfterRouteChange = false;

  constructor( private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if(this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  clear() {
    this.alertSubject.next(null);
  }
  success(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.DANGER, message, keepAfterRouteChange);
  }
  erro(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.ERROR, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  alert(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.ALERT, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this._alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  private _alert(alertType: AlertType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

}
