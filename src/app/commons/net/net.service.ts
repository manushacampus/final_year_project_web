import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SessionService } from 'src/app/core/services/session/session.service';
import { Endpoint } from './endpoint';
import { Storage } from '../storage';

@Injectable({
  providedIn: 'root',
})
export class NetService {

  static TOKEN_HEADER = 'Authorization';
  static SANDBOX_TOKEN_HEADER = 'Sandbox_Authorization';
  static ERROR_HANDLING_HEADER_NAME = 'error_handler';

  static authorizationToken = null;

  constructor(private http: HttpClient, private router: Router, private storage: Storage, private sessionService: SessionService) {
}

process(net: Net): Observable<any> {

    switch (net.method) {
        case NetMethod.get:
            return this.get(net);
        case NetMethod.post:
            return this.post(net);
        case NetMethod.delete:
            return this.delete(net);
        case NetMethod.put:
            return this.put(net);
        default :
            return this.get(net);
    }
}

private get(net: Net): Observable<any> {
    return this.http.get(net.endpoint.url, {
        headers: this.getHeaders(net),
        params: net.body,
        observe: 'response'
    }).pipe(map(response => {
        return this.extractResponse(response, net);
    }));
}

private post(net: Net): Observable<any> {
    return this.http.post(net.endpoint.url, net.body, {
        headers: this.getHeaders(net),
        observe: 'response'
    }).pipe(map(response => {
        return this.extractResponse(response, net);
    }));
}

private put(net: Net): Observable<any> {
    return this.http.put(net.endpoint.url, net.body, {
        headers: this.getHeaders(net),
        observe: 'response'
    }).pipe(map(response => {
        return this.extractResponse(response, net);
    }));
}

private delete(net: Net): Observable<any> {
    return this.http.delete(net.endpoint.url, {
        headers: this.getHeaders(net),
        params: net.body,
        observe: 'response'
    }).pipe(map(response => {
        return this.extractResponse(response, net);
    }));
}


private extractResponse(response:any, net: Net): any {
    // Log.info('http response', net.uniqueId, response, net);
    net.response = response;
    if (net.storeAuthToken) {
        NetService.authorizationToken = response.headers.get('authorization');
        if (this.sessionService.getSandboxEnvironment()) {
            this.storage.store(NetService.SANDBOX_TOKEN_HEADER, NetService.authorizationToken);
        } else {
            this.storage.store(NetService.TOKEN_HEADER, NetService.authorizationToken);
        }
    }
    return response.body;
}

private getHeaders(net: Net): HttpHeaders {
    const defaultHeaders:any = net.headers;
    NetService.authorizationToken = this.storage.get(NetService.TOKEN_HEADER);

    if (NetService.authorizationToken && net.sendAuthToken) {
        defaultHeaders[NetService.TOKEN_HEADER] = NetService.authorizationToken;
    }

    if (NetService.authorizationToken && net.sendAuthToken) {
        if (this.sessionService.getSandboxEnvironment()) {
            NetService.authorizationToken = this.storage.get(NetService.SANDBOX_TOKEN_HEADER);
            defaultHeaders[NetService.TOKEN_HEADER] = NetService.authorizationToken;
        } else {
            NetService.authorizationToken = this.storage.get(NetService.TOKEN_HEADER);
            defaultHeaders[NetService.TOKEN_HEADER] = NetService.authorizationToken;
        }
    }

    if (net.forceDispatchErrorCodes.length > 0) {
        defaultHeaders[NetService.ERROR_HANDLING_HEADER_NAME] = JSON.stringify(net.forceDispatchErrorCodes);
    }
    return new HttpHeaders(defaultHeaders);
}

}

export class NetMethod {
static get = 'get';
static post = 'post';
static delete = 'delete';
static put = 'put';
}

export class Net {
endpoint: Endpoint;
body = {};
method = 'get';
headers = {};
forceDispatchErrorCodes = [];
response: any;
storeAuthToken = true;
sendAuthToken = true;
uniqueId: string = '';

constructor(method: string, endpoint: Endpoint, body = {}, headers = {}) {
    this.method = method;
    this.endpoint = endpoint;
    this.body = body;
    this.headers = headers;
    this.uniqueId = Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 100);
}

static get(endpoint: Endpoint, body = {}): Net {
    return new Net(NetMethod.get, endpoint, body);
}

static post(endpoint: Endpoint, body = {}): Net {
    return new Net(NetMethod.post, endpoint, body);
}

static put(endpoint: Endpoint, body = {}): Net {
    return new Net(NetMethod.put, endpoint, body);
}
  static delete(endpoint: Endpoint, body = {}): Net {
    return new Net(NetMethod.delete, endpoint, body);
  }

}

