import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public object: any = [101,102,103,104,105,106,107,108,109,110,111];

  constructor() { }

  ngOnInit(): void {
  }

}
