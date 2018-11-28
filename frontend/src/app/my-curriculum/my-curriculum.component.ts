import { CurriculumService } from './../services/curriculum.service';
import { AuthService } from './../services/auth.service';
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
  readonly mine: boolean;
  readonly userId: number;
  readonly iAmAdmin: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly curriculumService: CurriculumService,
  ) {
    try {
      this.iAmAdmin = this.authService.credentials.getValue().user.isAdmin;
      this.userId = this.authService.credentials.getValue().user.id;
    } catch (e) {
      this.iAmAdmin = false;
      this.userId = -1;
    }
    this.curriculum = this.route.snapshot.data.curriculum;
    this.mine = this.curriculum ? this.curriculum.owner.id === this.userId : true;
  }

  ngOnInit() {
  }

  block(value: boolean) {
    this.curriculumService.block(this.curriculum.id, value).subscribe(
      () => this.curriculum.block = value,
    );
  }

  setAdmin(value: boolean) {
    if (this.userId > 0) {
      this.curriculumService.setAdmin(this.curriculum.owner.id, value).subscribe(
        () => this.curriculum.owner.isAdmin = value,
      );
    }
  }

}
