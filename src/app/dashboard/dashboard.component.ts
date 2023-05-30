import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../supply.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  supplyCount: number = 0;
 
  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    this.supplyService.getSupplyCount().subscribe(count => {
      this.supplyCount = count;
    });
  }
}
