import { Component, OnInit } from '@angular/core';

import { ProductService } from '../components/product/product.service';
import { Product } from '../components/product/product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public prodItems: Product[] = [];
  public prodHotItems: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getHotProducts();
  }

  public async getProducts(): Promise<any> {
    this.prodItems = await this.productService.getExProducts();
  }

  public async getHotProducts(): Promise<any> {
    this.prodHotItems = await this.productService.getExHotProducts();
  }

}
