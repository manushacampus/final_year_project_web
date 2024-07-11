import { environment } from "../../../environments/environment";

export class Endpoint {

    endpoint!: string;

    static LOGIN = 'user/login';
    static CUSTOMER_REGISTER ='user/register'
    static EMPLOYEE_REGISTER ='employee'
    static EMPLOYEE_GET_ALL ='employee'
    static EMPLOYEE ='employee'
    static JOB_DOOR ='job/door'
    static GET_JOB_LIST ='job'
    static GET_JOB_BY_ID ='job/'
    static START_JOB ='job/start/'
    static DONE_JOB ='job/done/'
    static GET_STOCK_ITEM ='stock/'
    static DOOR = 'door';
    static ASSIGN_JOB_EMPLOYEE ='job/assign/'
    static CREATE_JOB_BY_STOCK_ITEM ='job/job-by-product/'
    static CREATE_BAR_ANGLES ='bar-angles'
    static INVENTORY='inventory'



    pathParams: any = {};

    get url(): string {
        let url = this.endpoint;
        Object.keys(this.pathParams).forEach(i => {
            url = url.replace('{' + i + '}', this.pathParams[i]);
        });
        return Endpoint.getServer() + url;
    }

    static withUrl(url: string): Endpoint {
        const endpoint = new Endpoint();
        endpoint.endpoint = url;
        return endpoint;
    }

    static withPathParam(url: string, pathParams = {}): Endpoint {
        const endpoint = new Endpoint();
        endpoint.endpoint = url;
        endpoint.pathParams = pathParams;
        return endpoint;
    }

    static getServer(){
        return environment.apiUrl + '/';
    }

}
