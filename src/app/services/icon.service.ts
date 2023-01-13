import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICONS } from '../mock-icons';
import { Icon } from '../interfaces/icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  getIcon(iconName: string): Observable<Icon> {
    const icon = ICONS.find((r) => r.name === iconName) || ICONS[0];
    return of(icon);
  }
}
