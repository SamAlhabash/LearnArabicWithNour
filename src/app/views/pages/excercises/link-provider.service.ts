import { MenuItem } from './../../layout/sidebar/menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkProviderService {
  public activeItem: MenuItem = null;
  constructor() { }

  setActiveItem(item: MenuItem): void {
    this.activeItem = item;
  }
}
