import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
