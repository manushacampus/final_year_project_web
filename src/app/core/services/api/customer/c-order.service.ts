import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class COrderService {

  constructor(private netService: NetService) { }
  getOrderByStatusAndType(status:string,type:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_ORDER),
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

  cancelOrder(id:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.C_ORDER+'/cancel/'+id),);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  getProductByOrder(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_ORDER+"/"+id),);
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
