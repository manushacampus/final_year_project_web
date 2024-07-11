import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private netService: NetService) { }

  registerEmployee(user:any,employee:any,image:File){
    let request = new FormData();
    request.append('UserDto', JSON.stringify(user));
    request.append('EmployeeDto', JSON.stringify(employee));
    request.append('proImage',image)
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.EMPLOYEE_REGISTER), request);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }

  getEmployeeList(page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.EMPLOYEE_GET_ALL),{'page':page,'size':size});
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
