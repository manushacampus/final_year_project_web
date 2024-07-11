import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BarSectionService {

  constructor(private netService: NetService) { }

  addSeection(section:any,image:File | null){
    let request = new FormData();
    request.append('barAnglesDto', JSON.stringify(section));
    if (image){
      request.append('image',image)
    }

    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.CREATE_BAR_ANGLES), request);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getSectionAll(page:number,size:number,cat:string,barSize:string,status:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.CREATE_BAR_ANGLES),{
      'page':page,
      'size':size,
      'cat':cat,
      'barSize':barSize,
      'status':status,

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
  getBarSectionAll(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.CREATE_BAR_ANGLES+"/all"));
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
