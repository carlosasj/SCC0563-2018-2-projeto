import { ActivatedRoute } from '@angular/router';
import { Curriculum } from '@models/curriculum';
import { CurriculumService } from './../services/curriculum.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-my-curriculum',
  templateUrl: './my-curriculum-edit.component.html',
  styleUrls: ['./my-curriculum-edit.component.scss']
})
export class MyCurriculumEditComponent implements OnInit {
  public success = '';
  public error = '';
  public form = new FormGroup({});
  public model: Curriculum = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [
    {
      template: '<h2 class="mt-4">Personal</div>',
    },
    {
      key: 'name',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Name',
        required: true,
      }
    },
    {
      key: 'headline',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Headline',
        placeholder: 'Ex.: Android Developer',
        required: true,
      }
    },
    {
      key: 'phone',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        type: 'tel',
        label: 'Phone',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        type: 'email',
        label: 'E-mail',
        required: true,
      }
    },
    {
      key: 'github',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Github',
      }
    },

    {
      key: 'linkedin',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'LinkedIn',
      }
    },
    {
      template: '<h2 class="mt-4">Academic</div>',
    },
    {
      key: 'education',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row mb-3',
        templateOptions: {
          btnText: 'Add another',
        },
        fieldGroup: [
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'universityName',
            templateOptions: {
              label: 'University Name',
              required: true,
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'course',
            templateOptions: {
              label: 'Course',
              required: true,
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'from',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              type: 'date',
              label: 'From',
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'until',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              type: 'date',
              label: 'Until',
            },
          },
        ]
      }
    },
    {
      template: '<h2 class="mt-4">Past Experiences</div>',
    },
    {
      key: 'past',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row mb-3',
        templateOptions: {
          btnText: 'Add another',
        },
        fieldGroup: [
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'place',
            templateOptions: {
              label: 'Place',
              required: true,
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'role',
            templateOptions: {
              label: 'Role',
              required: true,
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'from',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              type: 'date',
              label: 'From',
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'until',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              type: 'date',
              label: 'Until',
            },
          },
        ]
      }
    },
    {
      template: '<h2 class="mt-4">Articles</div>',
    },
    {
      key: 'articles',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row mb-3',
        templateOptions: {
          btnText: 'Add another',
        },
        fieldGroup: [
          {
            className: 'col-sm-10',
            type: 'input',
            key: 'title',
            templateOptions: {
              label: 'Title',
              required: true,
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'publisher',
            templateOptions: {
              label: 'Publisher',
            },
          },
          {
            className: 'col-sm-5',
            type: 'input',
            key: 'date',
            templateOptions: {
              type: 'date',
              label: 'Date',
            },
          },
        ]
      }
    },
    {
      template: '<h2 class="mt-4">Skills</div>',
    },
    {
      key: 'skillsGroups',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row mb-3',
        templateOptions: {
          btnText: 'Add another Group',
        },
        fieldGroup: [
          {
            className: 'col-sm-10',
            type: 'input',
            key: 'groupTitle',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Group Title',
              required: true,
            },
          },
          {
            className: 'col-sm-8 offset-sm-2',
            type: 'input',
            key: 'sk1',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Skill',
              required: true,
            },
          },
          {
            className: 'col-sm-8 offset-sm-2',
            type: 'input',
            key: 'sk2',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Skill',
            },
          },
          {
            className: 'col-sm-8 offset-sm-2',
            type: 'input',
            key: 'sk3',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Skill',
            },
          },
          {
            className: 'col-sm-8 offset-sm-2',
            type: 'input',
            key: 'sk4',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Skill',
            },
          },
          {
            className: 'col-sm-8 offset-sm-2',
            type: 'input',
            key: 'sk5',
            wrappers: ['form-field-horizontal'],
            templateOptions: {
              label: 'Skill',
            },
          },


        ]
      }
    },
  ];

  constructor(
    private readonly curriculumService: CurriculumService,
    private readonly route: ActivatedRoute,
  ) {
    this.model = route.snapshot.data.curriculum || {};
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.curriculumService.save(this.model).pipe(
        finalize(() => window.scrollTo(0, 0))
      ).subscribe(
        (res) => {
          this.model = res;
          this.success = 'Curriculum updated';
        },
        (res) => this.error = 'Some error occurred: ' + res.error
      );
    }
  }
}
