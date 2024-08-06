import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private netService: NetService) { }
  addBar(bar:any){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.INVENTORY+'/bar'), bar);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getInventoryByType(type:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.INVENTORY), {
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
}
