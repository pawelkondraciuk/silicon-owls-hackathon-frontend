import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploaderComponent } from './uploader.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: UploaderComponent},
    ])
  ],
  declarations: [UploaderComponent]
})
export class UploaderModule {}
