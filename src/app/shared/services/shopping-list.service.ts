import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingList$ = new BehaviorSubject<String[]>([]);

  constructor(private cookie: CookieService) {}

  getShoppingList(): String[] {
    if (!this.cookie.check('shopping-list')) {
      this.cookie.set('shopping-list', '[]');
      return [];
    }
    return JSON.parse(this.cookie.get('shopping-list'));
  }

  setShoppingList(newShopArr: String[]) {
    this.cookie.set('shopping-list', JSON.stringify(newShopArr));
    this.shoppingList$.next(newShopArr);
  }

  private addToShoppingList(id: string) {
    const shoppingList = this.getShoppingList();
    shoppingList.push(id);
    this.setShoppingList(shoppingList);
  }

  private deleteFromShoppingList(id: string) {
    const newShopArr = this.getShoppingList().filter(el => el !== id);
    this.setShoppingList(newShopArr);
  }

  clearShoppingList() {
    this.setShoppingList([]);
  }

  isInShoppingList(id: string) {
    return this.getShoppingList().includes(id);
  }

  toggleShoppingList(id: string) {
    if (this.isInShoppingList(id)) {
      this.deleteFromShoppingList(id);
    } else {
      this.addToShoppingList(id);
    }
  }
}
