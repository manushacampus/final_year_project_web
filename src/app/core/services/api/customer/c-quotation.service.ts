import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CQuotationService {

  constructor(private netService: NetService) { }
  placeOrder(quotation:any){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.C_QUOTATION+'/door'), quotation);
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
