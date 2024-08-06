import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CDesignService {

  constructor(private netService: NetService) { }
  getDesignByStatusPage(type:string,status:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_PRODUCT_DESIGN), {
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
  getDesignById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.C_PRODUCT_DESIGN+"/get-design"), {
      'designId':id,
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
