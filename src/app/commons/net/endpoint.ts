import { environment } from "../../../environments/environment";

export class Endpoint {

    endpoint!: string;

    static LOGIN = 'user/login';



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
