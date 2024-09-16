import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private netService: NetService) { }

  getDesignById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/get-design"), {
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

  addDesign(design:any,image:File | null){
    let request = new FormData();
    request.append('designDto', JSON.stringify(design));
    if (image){
      request.append('image',image)
    }
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN), request);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }

  getDesignByStatusPage(type:string,status:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN), {
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

  addInventory(designId:string,inventoryId:string,qty:number,type:string){
    console.log("design ID",designId)
    console.log("inventory ID",inventoryId)
    console.log("qty",qty)
    console.log("type",type)
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/add-inventory"), {
      'designId':designId,
      'inventoryId':inventoryId,
      'qty':qty,
      'type':type
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
  getInventoryByDesign(designId:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/get-inventory"), {
      'designId':designId,
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
  changeStatus(id:string,status:string){
    const params = new HttpParams()
      .set('status', status)
      .set('id', id);
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/status"), params);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  delete(id:string){
    const net = new Net(NetMethod.delete, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/delete/"+id), );
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  updateDesign(data:any){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.PRODUCT_DESIGN+"/update"), data);
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
