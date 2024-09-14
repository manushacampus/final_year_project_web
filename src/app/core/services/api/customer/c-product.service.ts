import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CProductService {

  constructor(private netService: NetService) { }
  getStockItemList(page:number,size:number,status:string,type:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.COMMON_PRODUCT),
      {
        'page':page,
        'size':size,
        'status':status,
        'type':type
      });
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  addToCart(id:string,qty:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_PRODUCT+"/add-cart"),
      {
        "id":id,
        "qty":qty
      });
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  allCart(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_PRODUCT+"/all-cart"),);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  orderProduct(id:string,qty:number){
    const params = new HttpParams()
      .set('id', id)
      .set('qty', qty)
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.C_PRODUCT+"/order"),
      params
    );
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  orderProductCart(cart:any[]){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.C_PRODUCT+"/order/cart"),cart);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
}
