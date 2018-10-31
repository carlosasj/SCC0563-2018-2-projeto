import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CredentialsResponse } from '@models/credentials';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    readonly credentials: BehaviorSubject<CredentialsResponse>;

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
    ) {
        const entry = localStorage.getItem('auth:user');
        if (entry) {
            const entryObj: CredentialsResponse = JSON.parse(entry);
            this.credentials = new BehaviorSubject(entryObj);
        } else {
            this.credentials = new BehaviorSubject(null);
        }
    }

    login(data: {user: string, password: string}) {
        return this.http.post<CredentialsResponse>(environment.baseUrlBack + '/login/login', data).pipe(
            tap(result => {
                localStorage.setItem('auth:user', JSON.stringify(result));
                this.credentials.next(result);
            })
        );
    }

    logout() {
        localStorage.removeItem('auth:user');
        this.credentials.next(null);
        this.router.navigate(['/']);
    }

    getHeaders() {
        if (this.credentials.getValue()) {
            return {
                'Authorization': this.credentials.getValue().token,
            };
        } else {
            return undefined;
        }
    }
}
