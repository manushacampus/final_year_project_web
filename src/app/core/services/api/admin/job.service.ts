import { Injectable } from '@angular/core';
import {Net, NetMethod, NetService} from "../../../../commons/net/net.service";
import {Endpoint} from "../../../../commons/net/endpoint";
import {map} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private netService: NetService) { }

  createDoor(job:any,door:any){
    let request = new FormData();
    let format = 'dd/MM/YYYY';
    let datePipe = new DatePipe('en-US');
    let formatDate= datePipe.transform(new Date(job.value.dueDate), format) + "";
    door.get('dueDate')?.setValue(formatDate)
    request.append('jobDto', JSON.stringify(job.value));
    request.append('doorDto', JSON.stringify( door.value));
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.JOB_DOOR),request);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  updateJobDoor(job:any,door:any){
    let request = new FormData();
    let format = 'dd/MM/YYYY';
    let datePipe = new DatePipe('en-US');
    let formatDate= datePipe.transform(new Date(job.value.dueDate), format) + "";
    door.get('dueDate')?.setValue(formatDate)
    request.append('jobDto', JSON.stringify(job.value));
    request.append('doorDto', JSON.stringify( door.value));
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.JOB_DOOR),request);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  deleteJobDoor(job:any){
    console.log("requet ob je delete",job)
    const net = new Net(NetMethod.delete, Endpoint.withUrl(Endpoint.JOB_DOOR+"/"+job.id+"/"+job.progress)
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
  getJobById(id:any){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GET_JOB_BY_ID+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  getStockItemById(id:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GET_STOCK_ITEM+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  assignEmployeeForJob(id:string){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.ASSIGN_JOB_EMPLOYEE+id));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  getJobListByStatusAndProgress(status:string,progress:string,page:number,size:number){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GET_JOB_LIST),
      {
        'status':status,
        'progress':progress,
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
  getJobListByStatusAndEmployee(status:string,progress:string){
    const net = new Net(NetMethod.get, Endpoint.withUrl(Endpoint.GET_JOB_LIST+"/employee"),{'status':status});
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  startJob(jobId:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.START_JOB+jobId));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  doneJob(jobId:string,image:File){
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.DONE_JOB+jobId),formData);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }
  doneJobNew(jobId:string){
    const net = new Net(NetMethod.put, Endpoint.withUrl(Endpoint.DONE_JOB+"new/"+jobId));
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          return response;
        }
        return null;
      })
    );
  }

  createJobByStock(stockId:string){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.CREATE_JOB_BY_STOCK_ITEM+stockId));
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
