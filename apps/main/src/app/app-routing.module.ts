import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [{ path: '', loadChildren: '@owls/uploader#UploaderModule' }],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
