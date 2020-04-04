import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    temToken(): boolean {
        return !!this.getToken();
    }

    setToken(token: string): void {
        window.localStorage.setItem(KEY, JSON.stringify(token));
    }

    getToken(): string {
        return window.localStorage.getItem(KEY);
    }

    removerToken(): void {
        window.localStorage.removeItem(KEY);
    }
}