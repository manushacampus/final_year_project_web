import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {

  constructor(private netService: NetService) { }

  getCustomerAll(page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.CUSTOMER_EMPLOYEE),{
      'page':page,
      'size':size,

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
