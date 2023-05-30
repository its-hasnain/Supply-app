import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../supply.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  supplyItems: string[] = [];
  newItem: string = '';
  editedItem: string = '';
  editedItemValue: string = '';

  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    try {
      this.supplyItems = this.supplyService.getSupplyItems();
    } catch (error) {
      console.error('Error retrieving supply items:', error);
    }
  }

  addItemToSupply(): void {
    try {
      if (this.newItem.trim()) {
        this.supplyService.addItemToSupply(this.newItem);
        this.newItem = '';
      }
    } catch (error) {
      console.error('Error adding item to supply:', error);
    }
  }

  removeItemFromSupply(item: string): void {
    try {
      this.supplyService.removeItemFromSupply(item);
    } catch (error) {
      console.error('Error removing item from supply:', error);
    }
  }

  editItem(item: string): void {
    this.editedItem = item;
    this.editedItemValue = item;
  }

  saveEditedItem(): void {
    try {
      if (this.editedItemValue.trim()) {
        this.supplyService.updateItemInSupply(this.editedItem, this.editedItemValue);
        this.cancelEdit();
      }
    } catch (error) {
      console.error('Error saving edited item:', error);
    }
  }

  cancelEdit(): void {
    this.editedItem = '';
    this.editedItemValue = '';
  }
}
