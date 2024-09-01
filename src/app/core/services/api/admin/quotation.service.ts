import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private netService: NetService) { }

  getAllQuotation(status:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.QUOTATION+'/all'),
      {
        'status':status
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

  changeQuotationType(type:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/change?type='+type));
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
