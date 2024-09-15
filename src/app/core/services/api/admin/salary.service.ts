import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private netService: NetService) { }

  saveSalary(salary:any,image:File,empId:string){
    const formData: FormData = new FormData();
    formData.append('salaryDto', JSON.stringify(salary));
    formData.append('employeeId', empId);
    formData.append('bill', image);
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.SALARY), formData);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );

  }
  getAllSalaryByStatus(status:string,page:number,size:number, employeeId?: string, date?: string){
    let params = new HttpParams()
      .set('status', status)
      .set('page', page.toString())
      .set('size', size.toString());

    // Conditionally add employeeId and date if they are provided
    if (employeeId) {
      params = params.set('employeeId', employeeId);
    }

    if (date) {
      params = params.set('date', date);
    }
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.SALARY+'/all'), params
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
}
