import { environment } from "../../../environments/environment";

export class Endpoint {

    endpoint!: string;

    static LOGIN = 'user/login';
    static C_LOGIN = 'user/customer/login';
    static CUSTOMER_REGISTER ='user/register'
    static EMPLOYEE_REGISTER ='employee'
    static EMPLOYEE_GET_ALL ='employee'
    static EMPLOYEE ='employee'
    static JOB_DOOR ='employee/job/door'
    static JOB ='employee/job'
    static GET_JOB_LIST ='employee/job'
    static GET_JOB_BY_ID ='employee/job/'
    static START_JOB ='employee/job/start/'
    static DONE_JOB ='employee/job/done/'
    static GET_STOCK_ITEM ='employee/stock/'
    static DOOR = 'employee/door';
    static ASSIGN_JOB_EMPLOYEE ='employee/job/assign/'
    static CREATE_JOB_BY_STOCK_ITEM ='employee/job/job-by-product/'
    static CREATE_BAR_ANGLES ='employee/bar-angles'
    static INVENTORY='employee/inventory'
    static PRODUCT_DESIGN='employee/product-design'
    static QUOTATION='employee/quotation'
    static SUPPLIER='employee/supplier'
    static PURCHASE='employee/purchase'
    static ORDER='employee/order'
    static PAYMENT='employee/payment'
    static UTILITY='employee/utility'
    static SALARY='employee/salary'

    static CUSTOMER='customer'
    static C_PRODUCT_DESIGN='customer/product-design'
    static C_QUOTATION='customer/quotation'
    static C_PRODUCT='customer/product'
    static C_CART='customer/cart'
    static C_ORDER='customer/order'

    static COMMON_PRODUCT_DESIGN='product-design'
    static COMMON_PRODUCT='product'



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
