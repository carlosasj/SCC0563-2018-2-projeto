import { Curriculum } from '@models/curriculum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-curriculum',
  templateUrl: './my-curriculum.component.html',
  styleUrls: ['./my-curriculum.component.scss']
})
export class MyCurriculumComponent implements OnInit {
  readonly curriculum: Curriculum;

  constructor(
    private readonly route: ActivatedRoute,
  ) {
    this.curriculum = route.snapshot.data.curriculum;
  }

  ngOnInit() {
  }

}
