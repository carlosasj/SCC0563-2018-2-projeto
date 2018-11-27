import { CurriculumService } from '../services/curriculum.service';
import { Curriculum } from '../models/curriculum';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public searched = '';
  public searching = false;
  public query = '';
  public results: Curriculum[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly curriculumService: CurriculumService,
  ) { }

  ngOnInit() {
    this.searched = this.query = this.route.snapshot.queryParamMap.get('q') || '';
    this.updateResults(this.query);
  }

  onSubmit(query: string) {
    this.router.navigate(['list'], { queryParams: { q: query } });
    this.updateResults(query, () => this.searched = query;);
  }

  updateResults(query: string, cb?) {
    this.searching = true;
    this.curriculumService.search(query).subscribe(res => {
      this.searching = false;
      this.results = res.results;
      if (cb) { cb(); }
    });
  }

}
