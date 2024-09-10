import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CProductService {

  constructor(private netService: NetService) { }
  getStockItemList(page:number,size:number,status:string,type:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GET_STOCK_ITEM),
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
  orderProduct(order:any[]){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.C_PRODUCT+"/order"),order);
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
