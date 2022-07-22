import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items : number[] = [1,2,3,4];

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  getProducts(){
    this.route.navigate(['/products'])
  }

}
