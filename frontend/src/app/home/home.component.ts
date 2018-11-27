import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private entries = [
    'Programmer',
    'Designer',
    'iOS Developer',
    'Nurse',
    'Profesor',
    'Cashier',
    'Musician'
  ];
  public placeholder = this.entries[0];
  private counter = 0;
  private timer = null;
  public query = '';

  constructor(
    private readonly router: Router,
  ) {
    this.timer = setInterval(() => {
      this.counter++;
      this.counter = this.counter % this.entries.length;
      this.placeholder = this.entries[this.counter];
    }, 2500);
  }

  ngOnDestroy() {
    if (this.timer) {clearInterval(this.timer); }
  }

  onSubmit(query: string) {
    this.router.navigate(['list'], { queryParams: {q: query} });
  }

}
