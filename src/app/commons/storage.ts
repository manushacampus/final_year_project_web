import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class Storage{

    public static DEFAULT_TOKEN_KEY = 'bit.user.token';
    public static IS_SANDBOX = 'isSandbox';
    public static USER_KEY = 'bit.user.token';
    public static ACTIVE = 'ACTIVE';
    public static INACTIVE = 'INACTIVE';

public store(key: string, value: any, expireInSeconds: number = -1): void {
        if (!value) {
            return;
        }
        const data: any = {
            data: value
        };
        if (expireInSeconds > 0) {
            const expiredAt = new Date();
            expiredAt.setSeconds(expireInSeconds);
            data.expiredAt = expiredAt;
        }
        localStorage.setItem(key, value);
    }

    public get(key: string, defaultValue: any = null): any {
        const value = this.has(key);
        if (!value) {
            return;
        }

        if (Object.keys(value).includes('expiredAt')) {
            const expiredAt = new Date(value.expiredAt);
            if (expiredAt < new Date()) {
                return defaultValue;
            }
        }

        let data = localStorage.getItem(key);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        }
        return value.data || defaultValue;
    }

    public has(key: string): any {
        const value = localStorage.getItem(key);
        if (typeof value === 'undefined' || !value) {
            return false;
        }
        return value;
    }

    public clearAll() {
        localStorage.clear();
    }

    public removeData(key: string) {
        if (this.exists(key)) {
            localStorage.removeItem(key);
        }
    }

    public exists(key: string) {
        return localStorage && localStorage.getItem(key) != null;
    }
}
