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
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.EMPLOYEE),{'page':page,'size':size});
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getEmployeeById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.EMPLOYEE+'/get/'+id),);
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
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.EMPLOYEE+'/get'));
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
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.EMPLOYEE+'/image'),request);
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
