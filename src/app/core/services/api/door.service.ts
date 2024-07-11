import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../commons/net/net.service";
import {Endpoint} from "../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoorService {

  constructor(private netService: NetService) { }
  createDoor() {
    const obj = {
      "id":"003",
      "name":"Door",
      "height":"200",
      "width":"50"
    }
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.DOOR), obj);

    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          console.log("response",response)
          return response;
        }
        return null;
      })
    );
  }
  getDoorList(){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.DOOR));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          console.log("response",response)
          return response;
        }
        return null;
      })
    );
  }
}
