import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public static DEFAULT_TOKEN_KEY = 'Token';
  public static REFRESH_TOKEN_KEY = "REFRESH_TOKEN"
  public static USER = 'USER';
  public static ORGANIZATION = 'ORGANIZATION';
  public static PACKAGE = 'PACKAGE';
  public static INVOICE = 'INVOICE';

  public isSignedIn() {
    return this.getData('isSigned');
  }

  public setSignedIn(isTrue: boolean) {
    if (!isTrue) {
      this.clearAll();
    }
    this.setData('isSigned', isTrue);
  }

  public getToken(key?: string) {
    if (key) {
      return this.getStringData(key);
    }

    return this.getStringData(StorageService.DEFAULT_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return this.getStringData(StorageService.REFRESH_TOKEN_KEY);
  }

  public saveToken(key: string, token: string) {
    this.setData(key, token);
  }

  // public setTimeoutValue(key: string, value: any, time_in_seconds: number) {
  //     this.clearExpiredCache(); // Remove all expired cache before entering new records.
  //     let expire = ((new Date()).getTime()) + (time_in_seconds * 1000);
  //     let objx = {
  //         expire: expire,
  //         value: value
  //     };
  //
  //     this.setData(key, objx);
  // }

  public getTimeoutValue(key: string) {
    return this.isExpired(key) ? this.getData(key).value : null;
  }

  public setData(key: string, value: any) {
    let val = value;
    if (typeof value == 'object' || typeof value == 'number') {
      val = JSON.stringify(value);
    }

    localStorage.setItem(key, val);
  }

  public getData(key: string) {
    let data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    }

    return null;
  }

  public setSessionData(key: string, value: any) {
    let val = value;
    if (typeof value == 'object' || typeof value == 'number') {
      val = JSON.stringify(value);
    }

    sessionStorage.setItem(key, val);
  }

  public getSessionData(key: string) {
    let data = sessionStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    }

    return null;
  }

  public exists(key: string) {
    return localStorage.getItem(key) != null;
  }

  // public clearCache() {
  //     const arr = this.getAvailableCacheKeys();
  //
  //     for (let i = 0; i < arr.length; i++) {
  //         localStorage.removeItem(arr[i]);
  //     }
  // }

  public clearAll() {
    localStorage.clear();
  }

  public clearOrganizationRecords() {
    localStorage.removeItem(StorageService.ORGANIZATION);
  }

  private getStringData(key: string) {
    return localStorage.getItem(key);
  }

  private isExpired(key: string) {
    return (this.exists(key) && this.getData(key).expire >= ((new Date()).getTime()));
  }

  // private clearExpiredCache() {
  //     // This function will remove all expired cache data.
  //     const arr = this.getAvailableCacheKeys();
  //
  //     // Iterate over arr and remove the items which are expired.
  //     for (let i = 0; i < arr.length; i++) {
  //         if (!this.isExpired(arr[i])) {
  //             localStorage.removeItem(arr[i]);
  //         }
  //     }
  // }

  // private getAvailableCacheKeys(): string[] {
  //     let arr: any[] = [];
  //     let serviceUrl = getServiceUrl(); // The key we interested.
  //     let serviceUrlSize = serviceUrl.length;
  //
  //     // Iterate over localStorage and insert the keys that meet the pattern into arr.
  //     for (let i = 0; i < localStorage.length; i++){
  //         if (localStorage.key(i)?.substring(0, serviceUrlSize) == serviceUrl) {
  //             arr.push(localStorage.key(i));
  //         }
  //     }
  //
  //     return arr;
  // }
}
