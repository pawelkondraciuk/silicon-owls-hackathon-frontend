import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { UploadFile } from 'ngx-uploader';

@Component({
  selector: 'owls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('uploaderAnimation', [
      state('false', style({
        height: '150px',
        marginTop: '30px',
      })),
      state('true', style({
        height: '90px',
        marginTop: '0px'
      })),
      transition('false => true', [
        animate('250ms')
      ])
    ])
  ]
})
export class AppComponent {
  files: UploadFile[] = [];

  onNewFile(file: UploadFile) {
    this.files.push(file);
  }
}
