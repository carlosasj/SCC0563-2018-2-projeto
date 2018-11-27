import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Curriculum } from '@models/curriculum';

@Injectable({
    providedIn: 'root',
})
export class CurriculumService {
    constructor(
        private readonly http: HttpClient,
        private readonly authService: AuthService,
    ) {}

    mine() {
        return this.http.get<Curriculum>(environment.baseUrlBack + '/curriculum/mine', { headers: this.authService.getHeaders()});
    }

    save(curriculum: Curriculum) {
        return this.http.post<Curriculum>(
            environment.baseUrlBack + '/curriculum/mine', curriculum, {headers: this.authService.getHeaders()});
    }

    search(query: string) {
        return this.http.post<{results: Curriculum[]}>(
            environment.baseUrlBack + '/curriculum/search', { query }, { headers: this.authService.getHeaders() });
    }
}
