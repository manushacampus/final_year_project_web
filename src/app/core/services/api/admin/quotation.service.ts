import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private netService: NetService) { }

  getQuotationById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.QUOTATION+'/'+id),
    );
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }

  getAllQuotation(status:string,type:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.QUOTATION+'/all'),
      {
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

  changeQuotationType(id:string,type:string){
    const params = new HttpParams()
      .set('type', type)
      .set('id', id);
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/change'),params);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  approveQuotation(id:string){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.QUOTATION+'/approve/'+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  deliverOrder(id:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/deliver/'+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  deliveredOrder(id:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/delivered/'+id));
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
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/cancel/'+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  completeOrder(id:string,image:File,price:number){
    console.log("Image",image)
    const formData: FormData = new FormData();
    formData.append('orderId', id);
    formData.append('price', price.toString());
    formData.append('invoice', image);

    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.QUOTATION+'/complete/'+id),formData);
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
