import { Component, OnInit, Input } from '@angular/core';

// import { Item } from '../product/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  // public productItem: Item = {
  //   sku: '1010',
  //   featured: 'item-hot',
  //   badge: [
  //     { class: 'hot', label: 'hot' },
  //     { class: 'off', label: 'off 999%' }
  //   ],
  //   title: 'Product Name ไอเทมชั้นหนึ่ง สุดร้อนแรงแห่งปี ไม่ซื้อไม่ได้แล้ว',
  //   imagePath: '/assets/example/example.png',
  //   priceTotal: 999999999,
  //   subTotal: 999999999
  // };

  @Input() productItem: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
