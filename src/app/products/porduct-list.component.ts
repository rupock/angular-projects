import { Component, OnInit } from '@angular/core';
import {IProduct}from '../product'
@Component({
  selector: 'app-porduct-list',
  templateUrl: './porduct-list.component.html',
  styleUrls: ['./porduct-list.component.css']
})
export class PorductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: IProduct[];
  constructor() { }

  ngOnInit() {
  }

}
