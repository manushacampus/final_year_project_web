import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private netService: NetService) { }

  saveUtility(utility:any,image:File){
    const formData: FormData = new FormData();
    formData.append('utilityDto', JSON.stringify(utility));
    formData.append('bill', image);
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.UTILITY), formData);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getAllUtilityByStatus(status:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.UTILITY+'/all'),
      {
        'status':status,
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
