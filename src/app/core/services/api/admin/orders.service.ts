import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private netService: NetService) { }

  getOrdersByStatusAndType(status:string,type:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.ORDER),
      {
        'status':status,
        'type':type,
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
  getOrdersStockById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.ORDER+'/'+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  acceptOrder(id:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.ORDER+'/accept/'+id));
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
