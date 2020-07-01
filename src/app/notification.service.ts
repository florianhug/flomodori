import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private permission: Permission;

  constructor() {
    this.permission = NotificationService.isSupported() ? Notification.permission : 'denied';
  }

  private static isSupported() {
    return 'Notification' in window;
  }

  private requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission((status: any) => this.permission = status);
    }
  }

  public create(message: string): Observable<any> {
    if (this.permission !== 'granted') {
      this.requestPermission();
    }
    return new Observable((obs: any) => {

      if (!('Notification' in window)) {
        obs.error('Notifications are not available in this environment');
        obs.complete();
      }

      if (this.permission !== 'granted') {
        obs.error(`The user hasn't granted you permission to send push notifications`);
        obs.complete();
      }

      const n = new Notification('Flomodori', {
        body: message,
        icon: 'assets/icons/icon-72x72.png',
        badge: 'assets/icons/icon-72x72.png',
        tag: 'ch.hugdata.flomodori',
        silent: false,
        vibrate: [200, 100, 200]
      });

      n.onshow = (e: any) => obs.next({notification: n, event: e});
      n.onclick = (e: any) => obs.next({notification: n, event: e});
      n.onerror = (e: any) => obs.error({notification: n, event: e});
      n.onclose = () => obs.complete();
    });
  }
}

export type Permission = 'denied' | 'granted' | 'default';
