import { Injectable } from '@angular/core';
import {SessionService} from "../../session/session.service";
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private sessionService:SessionService,
              private netService: NetService) { }


}
