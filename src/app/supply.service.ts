import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private supplyItems: string[] = [];
  private supplyCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addItemToSupply(item: string): void {
    this.supplyItems.push(item);
    this.updateSupplyCount();
  }

  removeItemFromSupply(item: string): void {
    try {
      const index = this.supplyItems.indexOf(item);
      if (index !== -1) {
        this.supplyItems.splice(index, 1);
        this.updateSupplyCount();
      } else {
        throw new Error('Item not found in supply.');
      }
    } catch (error) {
      console.error('Error removing item from supply:', error);
    }
  }

  getSupplyCount(): BehaviorSubject<number> {
    return this.supplyCountSubject;
  }

  private updateSupplyCount(): void {
    this.supplyCountSubject.next(this.supplyItems.length);
  }

  updateItemInSupply(oldItem: string, newItem: string): void {
    try {
      const index = this.supplyItems.indexOf(oldItem);
      if (index !== -1) {
        this.supplyItems[index] = newItem;
      } else {
        throw new Error('Item not found in supply.');
      }
    } catch (error) {
      console.error('Error updating item in supply:', error);
    }
  }

  getSupplyItems(): string[] {
    return this.supplyItems;
  }
}
