import { CurriculumService } from './../services/curriculum.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Curriculum } from '@models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumByIdResolver implements Resolve<Curriculum> {
  constructor(
    private readonly curriculumService: CurriculumService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Curriculum> | Promise<Curriculum> | Curriculum {
    return this.curriculumService.getById(route.params.id);
  }
}
