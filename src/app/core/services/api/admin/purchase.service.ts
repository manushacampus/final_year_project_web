import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private netService: NetService) { }
  purchaseRequest(qty:number,supplierId:string,inventoryId:string){
    const params = new HttpParams()
      .set('supplier', supplierId)
      .set('inventory', inventoryId)
      .set('qty', qty);
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.PURCHASE),
      params);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }

  getPurchaseByStatus(status:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.PURCHASE),
      {
        'status':status,
        'page':page,
        'size':size
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
  getPurchaseById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.PURCHASE+id));
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
