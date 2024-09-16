import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrnService {
  constructor(private netService: NetService) { }
  saveGrn(grn:any,image:File,id:string){
    const formData: FormData = new FormData();
    formData.append('grnDto', JSON.stringify(grn));
    formData.append('invoice', image);
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.GRN+'/'+id), formData);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getAllGrn(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GRN+'/all/'+id),);
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
