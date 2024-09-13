import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../commons/net/net.service";
import {Endpoint} from "../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private netService: NetService) { }
   getUser(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.EMPLOYEE+"/get"));
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
