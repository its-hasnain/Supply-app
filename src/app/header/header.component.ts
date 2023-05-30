import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../supply.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  supplyCount: number = 0;

  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    this.supplyService.getSupplyCount().subscribe(count => {
      this.supplyCount = count;
    });
  }
}
