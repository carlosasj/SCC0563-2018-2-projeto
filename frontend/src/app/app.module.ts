import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ListModule } from './list/list.module';
import { MyCurriculumModule } from './my-curriculum/my-curriculum.module';
import { MyCurriculumEditModule } from './my-curriculum-edit/my-curriculum-edit.module';
import { FormlyHorizontalWrapper } from './fragments/horizontal-wrapper.formly';
import { RepeatTypeComponent } from './fragments/repeat-section.formly';

@NgModule({
  declarations: [
    AppComponent,
    FormlyHorizontalWrapper,
    RepeatTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyBootstrapModule,

    HomeModule,
    LoginModule,
    ListModule,
    MyCurriculumModule,
    MyCurriculumEditModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    console.log('store.state.data:', store.state.data)
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = { data: 'yolo' };
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
