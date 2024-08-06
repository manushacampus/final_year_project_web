import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {map} from "rxjs";
import {Endpoint} from "../../../../commons/net/endpoint";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private netService: NetService) { }

  registerCustomer(customer:any){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.CUSTOMER_REGISTER), customer);
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
