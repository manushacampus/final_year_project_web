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
  loginCustomer(customer:any){
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

  getMyProfile(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.CUSTOMER+'/get'));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  updateMyProfile(user:any){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.CUSTOMER),{user});
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  updateProfileImage(image:File){
    let request = new FormData();
    if (image){
      request.append('file',image)
    }
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.CUSTOMER+'/image'),request);
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
