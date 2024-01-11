import { EventEmitter, Injectable } from '@angular/core';
import { NetService } from 'src/app/commons/net/net.service';
import { Storage } from 'src/app/commons/storage'; 

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user = '';
    private userObjectChange = new EventEmitter<any>();

    constructor(
      private storageProvider: Storage
  ) {
  }

  public isSignedIn() {
    return this.storageProvider.get('isSigned')
}

public setSignedIn(isTrue: boolean) {
    if (!isTrue) {
        this.storageProvider.clearAll();
    }
    this.storageProvider.store('isSigned', isTrue);
}

/*
* Will subscribe to all user changes and make call backs
* */
public getCurrentUserAsync(callback: (user: any) => void) {
    let user = this.getUser();
    if (user) {
        callback(user);
    }
    this.userObjectChange.subscribe(callback);
}

/*
* Will get the current user at that time
* */
public getCurrentUser() {
    return this.getUser();
}


public setUserJson(json:any, token = null) {
    this.storageProvider.store(Storage.USER_KEY, json);
    if (this.getUser()) {
        this.userObjectChange.emit(this.getUser());
    }
}

public setUserToken(token: any) {
    this.storageProvider.store(Storage.DEFAULT_TOKEN_KEY, token);
}

public getUserToken() {
    if (this.getSandboxEnvironment()) {
        return this.storageProvider.get(NetService.SANDBOX_TOKEN_HEADER);
    }
    return this.storageProvider.get(NetService.TOKEN_HEADER);

}

public clearUserData() {
    this.storageProvider.clearAll();
    this.user = '';
}

public appendTokenTOUrl(url: string) {
    let token = this.getUserToken();
    token = token.replace('bearer ', '');
    return `${url}?token=${token}`;
}


public remove(key: string) {
    this.storageProvider.removeData(key);
}


private getUser() {
    let ob = this.getUserJson();
    if (!this.user && ob) {
        this.user = ob;
    }
    return this.user;
}

private getUserJson() {
    return this.storageProvider.get(Storage.USER_KEY);
}


public setSandboxEnvironment(sandboxApproved: any) {
    if (sandboxApproved) {
        this.storageProvider.store(Storage.IS_SANDBOX, Storage.ACTIVE);
    } else {
        this.storageProvider.store(Storage.IS_SANDBOX, Storage.INACTIVE);
    }
}

public setSandboxToken(token:any) {
    this.storageProvider.store(NetService.SANDBOX_TOKEN_HEADER, token);
}

public getSandboxEnvironment() {
    if (localStorage.getItem(Storage.IS_SANDBOX) == Storage.ACTIVE) {
        return true;
    }
    return false;
}

}
