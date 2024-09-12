import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CCartService {

  constructor(private netService: NetService) { }
  changeQty(id:string,qty:number){
    const params = new HttpParams()
      .set('id', id)
      .set('qty', qty);

    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.C_CART+"/change/qty"), params);
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
