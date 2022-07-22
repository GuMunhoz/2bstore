import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedItem: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
selected(){
  this.selectedItem = !this.selectedItem;
}
}
