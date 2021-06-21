import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private productUrl = environment.product_api;

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  public async getExProducts(): Promise<any> {
    return await this.http.get('assets/product.json', this.httpOptions)
      .toPromise();
  }

  public async getExHotProducts(): Promise<any> {
    return await this.http.get('assets/product-hot.json', this.httpOptions)
      .toPromise();
  }

  // public async getOrders(request: any): Promise<any> {
  //   return await this.http.post(this.productUrl + 'action/queryOrderByKey', request, this.httpOptions)
  //     .toPromise();
  // }

}
