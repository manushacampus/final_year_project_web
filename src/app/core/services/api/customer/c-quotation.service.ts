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
  cal(quotation:any){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.C_QUOTATION+'/cal'), quotation);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getQuotation(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_QUOTATION),);
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
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.C_QUOTATION+'/cancel/'+id),);
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
