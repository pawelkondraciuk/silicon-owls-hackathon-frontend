import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
