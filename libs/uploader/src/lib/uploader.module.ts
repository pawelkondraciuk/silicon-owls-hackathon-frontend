import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploaderComponent } from './uploader.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    NgxUploaderModule,
  ],
  declarations: [UploaderComponent],
  exports: [UploaderComponent]
})
export class UploaderModule {}
